import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_dfbvqiv", // Replace with your EmailJS service ID
        "template_qu0l9xe", // Replace with your EmailJS template ID
        formRef.current!,
        "C0A-A-ZNVhGSZRFDN" // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent",
          description: "Thanks for your message! We'll be in touch soon.",
        });

        // Reset the form
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: "Failed to send the message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-law-navy mb-4">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in animate-delay-100">
            <h3 className="text-2xl font-serif font-bold text-law-navy mb-6">
              Send Me a Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-law-charcoal">
                    Full Name
                  </label>
                  <Input id="user_name" name="name" placeholder="John Doe" className="w-full" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-law-charcoal">
                    Email Address
                  </label>
                  <Input id="user_email" name="email" type="email" placeholder="john@example.com" className="w-full" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-law-charcoal">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="How can I help you?" className="w-full" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-law-charcoal">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Tell me more about your case..." className="w-full min-h-[150px]" required />
              </div>
              <Button
                type="submit"
                className="bg-law-navy hover:bg-law-gold text-white transition-colors w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="opacity-0 animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-serif font-bold text-law-navy mb-6">
              Contact Information
            </h3>
            <div className="bg-law-lightgray p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-law-gold/20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-law-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-law-navy">Email</h4>
                    <p className="text-law-charcoal">shikhamishra0220@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-law-gold/20 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-law-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-law-navy">Office Address</h4>
                    <p className="text-law-charcoal">
                      Virar, East, Mumbai, Maharashtra 401303<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-law-gold/20 p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-law-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-law-navy">Business Hours</h4>
                    <p className="text-law-charcoal">
                      Monday - Saturday: 8:00 AM - 10:00 PM<br />
                      Weekends: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
