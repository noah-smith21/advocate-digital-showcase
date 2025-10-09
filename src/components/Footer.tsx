
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer className="bg-law-navy text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">{t("footer.name")}</h3>
            <p className="mb-6 text-white/70">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-law-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-law-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">{t("footer.quickLinks.about")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-law-gold transition-colors">{t("footer.quickLinks.about")}</a>
              </li>
              <li>
                <a href="#practice-areas" className="text-white/70 hover:text-law-gold transition-colors">{t("footer.quickLinks.practiceAreas")}</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-law-gold transition-colors">{t("footer.quickLinks.testimonials")}</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-law-gold transition-colors">{t("footer.quickLinks.contact")}</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-law-gold transition-colors">{t("footer.quickLinks.privacy")}</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-law-gold transition-colors">{t("footer.quickLinks.terms")}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/70">
          <p>&copy; {currentYear} {t("footer.name")} {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
