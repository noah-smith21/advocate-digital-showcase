
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="text-law-navy hover:text-law-gold transition-colors">
            <h1 className="text-2xl font-serif font-bold">Shikha Mishra <span className="hidden sm:inline">| Attorney at Law</span></h1>
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-law-charcoal hover:text-law-gold transition-colors font-medium">About</a>
            <a href="#practice-areas" className="text-law-charcoal hover:text-law-gold transition-colors font-medium">Practice Areas</a>
            <a href="#testimonials" className="text-law-charcoal hover:text-law-gold transition-colors font-medium">Testimonials</a>
            <a href="#contact" className="text-law-charcoal hover:text-law-gold transition-colors font-medium">Contact</a>
            <Button className="bg-law-navy text-white hover:bg-law-gold transition-colors">Free Consultation</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-law-navy"
            onClick={toggleMobileMenu}
          >
            <Menu />
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pt-4 pb-2`}>
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-law-charcoal hover:text-law-gold transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#practice-areas" 
              className="text-law-charcoal hover:text-law-gold transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice Areas
            </a>
            <a 
              href="#testimonials" 
              className="text-law-charcoal hover:text-law-gold transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-law-charcoal hover:text-law-gold transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="bg-law-navy text-white hover:bg-law-gold transition-colors w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Consultation
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
