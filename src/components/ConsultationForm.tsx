import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { sendEmail } from "@/utils/emailService";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  topic: z.string().min(5, { message: "Please briefly describe your legal matter" }),
  date: z.date({ required_error: "Please select a date" }),
});

type FormValues = z.infer<typeof formSchema>;

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationForm = ({ isOpen, onClose }: ConsultationFormProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState<"date" | "details">("date");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "",
    },
  });

  const selectedDate = form.watch("date");

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const result = await sendEmail(
        "consultation_form",
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          topic: data.topic,
          date: format(data.date, "EEEE, MMMM do, yyyy"),
        },
        "service_id"
      );

      if (result.success) {
        setIsSuccess(true);
        
        toast({
          title: "Consultation Scheduled",
          description: `Your consultation has been scheduled for ${format(data.date, "EEEE, MMMM do")}. We'll be in touch shortly to confirm the time.`,
        });
        
        setTimeout(() => {
          form.reset();
          setStep("date");
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        toast({
          title: "Submission Failed",
          description: "There was a problem scheduling your consultation. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was a problem scheduling your consultation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      form.setValue("date", date);
      setStep("details");
    }
  };

  const handleBack = () => {
    setStep("date");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-6">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <DialogTitle className="text-center text-2xl">Consultation Scheduled!</DialogTitle>
            <DialogDescription className="text-center mt-2">
              Your consultation has been scheduled for {selectedDate && format(selectedDate, "EEEE, MMMM do")}. We'll be in touch shortly to confirm the time.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-law-navy">
                {step === "date" ? "Select Consultation Date" : "Complete Your Booking"}
              </DialogTitle>
              <DialogDescription>
                {step === "date" 
                  ? "Choose a preferred date for your consultation."
                  : "Please provide your details to complete the consultation booking."}
              </DialogDescription>
            </DialogHeader>

            {step === "date" ? (
              <div className="flex flex-col items-center py-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  className="rounded-md border pointer-events-auto"
                  initialFocus
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Available on weekdays only.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="bg-gray-100 p-3 rounded-md flex items-center gap-2 mb-4">
                    <CalendarIcon className="h-5 w-5 text-law-navy" />
                    <span>
                      {selectedDate ? (
                        format(selectedDate, "EEEE, MMMM do, yyyy")
                      ) : (
                        "No date selected"
                      )}
                    </span>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 555-5555" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What would you like to discuss?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Briefly describe your legal matter..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between gap-2">
                    <Button type="button" variant="outline" onClick={handleBack}>
                      Back to Calendar
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-law-gold hover:bg-law-gold/90 text-law-navy"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Scheduling..." : "Schedule Consultation"}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;
