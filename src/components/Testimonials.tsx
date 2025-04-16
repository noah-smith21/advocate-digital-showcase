
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Corporate Client",
    quote: "James provided exceptional guidance during our company's merger. His attention to detail and strategic approach made a complex process manageable and successful.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Michael Rodriguez",
    role: "Estate Planning Client",
    quote: "I was impressed by the thoroughness and care James showed when helping me plan my estate. He explained everything clearly and ensured my wishes were properly documented.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Lisa Chen",
    role: "Litigation Client",
    quote: "James's representation in my case was nothing short of excellent. His courtroom presence and negotiation skills led to an outcome far better than I had hoped for.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-law-navy text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-law-gold mx-auto mb-6"></div>
          <p className="text-white/80">
            Don't just take my word for it. Here's what clients have to say about their experiences working with me.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-white text-law-charcoal shadow-xl border-none opacity-0 animate-fade-in animate-delay-200">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-law-gold opacity-20"></div>
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover rounded-full p-1"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <Quote className="text-law-gold mb-4 h-8 w-8" />
                  <p className="text-lg mb-6 italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <h4 className="font-serif font-bold text-xl text-law-navy">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-6 space-x-4 opacity-0 animate-fade-in animate-delay-300">
            <Button 
              variant="outline" 
              size="icon" 
              className="text-white border-white hover:bg-white hover:text-law-navy"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="text-white border-white hover:bg-white hover:text-law-navy"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
