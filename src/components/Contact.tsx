
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { sendEmail } from "@/utils/emailService";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual EmailJS service ID and template ID
      const result = await sendEmail(
        "contact_form", // Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        "service_id" // Service ID
      );

      if (result.success) {
        toast({
          title: "Message Sent",
          description: "Thanks for your message! We'll be in touch soon."
        });
        
        // Reset the form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive"
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
          <div className="w-20 h-1 bg-law-gold mx-auto mb-6"></div>
          <p className="text-law-charcoal">
            Ready to discuss your legal needs? Contact me today for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in animate-delay-100">
            <h3 className="text-2xl font-serif font-bold text-law-navy mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-law-charcoal">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="w-full"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-law-charcoal">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-law-charcoal">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can I help you?"
                  className="w-full"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-law-charcoal">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me more about your case..."
                  className="w-full min-h-[150px]"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
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
                    <Phone className="h-5 w-5 text-law-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-law-navy">Phone</h4>
                    <p className="text-law-charcoal">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-law-gold/20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-law-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-law-navy">Email</h4>
                    <p className="text-law-charcoal">james@wilsonlawfirm.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-law-gold/20 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-law-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-law-navy">Office Address</h4>
                    <p className="text-law-charcoal">
                      123 Legal Avenue, Suite 500<br />
                      San Francisco, CA 94103
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
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Weekends: By appointment only
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0974757206403!2d-122.41941902392896!3d37.77492981482667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5358da5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1682364475593!5m2!1sen!2sus"
                  className="w-full h-64 rounded-lg border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
