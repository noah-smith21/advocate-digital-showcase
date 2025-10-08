import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
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
          title: t("messageSent"),
          description: t("messageSentDesc"),
        });

        // Reset the form
        formRef.current?.reset();
      } else {
        toast({
          title: t("error") || "Error",
          description: t("failedToSend") || "Failed to send the message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: t("error") || "Error",
        description: t("unexpectedError") || "An unexpected error occurred. Please try again later.",
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
            {t("contactHeading")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in animate-delay-100">
            <h3 className="text-2xl font-serif font-bold text-law-navy mb-6">
              {t("sendMessage")}
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-law-charcoal">
                    {t("fullName")}
                  </label>
                  <Input id="user_name" name="name" placeholder={t("namePlaceholder")} className="w-full" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-law-charcoal">
                    {t("emailAddress")}
                  </label>
                  <Input id="user_email" name="email" type="email" placeholder={t("emailPlaceholder")} className="w-full" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-law-charcoal">
                  {t("subject")}
                </label>
                <Input id="subject" name="subject" placeholder={t("subjectPlaceholder")} className="w-full" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-law-charcoal">
                  {t("message")}
                </label>
                <Textarea id="message" name="message" placeholder={t("messagePlaceholder")} className="w-full min-h-[150px]" required />
              </div>
                <Button
                type="submit"
                className="bg-law-navy hover:bg-law-gold text-white transition-colors w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("sending") : t("sendMessageBtn")}
              </Button>
            </form>
          </div>

          <div className="opacity-0 animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-serif font-bold text-law-navy mb-6">
              {t("contactInfo.heading")}
            </h3>
            <div className="bg-law-lightgray p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-law-gold/20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-law-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-law-navy">{t("contactInfo.email")}</h4>
                    <p className="text-law-charcoal">shikhamishra0220@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-law-gold/20 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-law-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-law-navy">{t("contactInfo.officeAddress")}</h4>
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
                    <h4 className="font-semibold text-law-navy">{t("contactInfo.businessHours")}</h4>
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
