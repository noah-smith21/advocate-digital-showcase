
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-law-navy text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">James Wilson <span className="text-law-gold">Law</span></h3>
            <p className="mb-6 text-white/70">
              Providing exceptional legal services with integrity, dedication, and personalized attention to each client's unique needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-law-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-law-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-law-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-law-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-law-gold transition-colors">About</a>
              </li>
              <li>
                <a href="#practice-areas" className="text-white/70 hover:text-law-gold transition-colors">Practice Areas</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-law-gold transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-law-gold transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-law-gold transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-law-gold transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-white/70">
              Subscribe to our newsletter for legal updates and insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 w-full bg-white/10 border border-white/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-law-gold"
              />
              <button 
                type="submit" 
                className="bg-law-gold text-law-navy px-4 py-2 rounded-r-md hover:bg-law-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/70">
          <p>&copy; {currentYear} James Wilson Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
