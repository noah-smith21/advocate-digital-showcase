
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ConsultationForm from "./ConsultationForm";

const Hero = () => {
  const [showConsultation, setShowConsultation] = useState(false);
  
  return (
    <section className="relative bg-law-navy text-dark min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
        style={{ opacity: '1' }}
      />
      <div className="container-custom relative z-10 py-24">
        <div className="max-w-3xl opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
            Excellence & Integrity in Legal Representation
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Dedicated to protecting your rights and securing your future through experienced legal counsel and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-law-gold hover:bg-law-gold/90 text-law-navy font-medium"
              onClick={() => setShowConsultation(true)}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
      
      <ConsultationForm 
        isOpen={showConsultation} 
        onClose={() => setShowConsultation(false)}
      />
    </section>
  );
};

export default Hero;
