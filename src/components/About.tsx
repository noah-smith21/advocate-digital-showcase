
import { Button } from "@/components/ui/button";
import { FileText, Medal, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 opacity-0 animate-fade-in animate-delay-100">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-law-navy mb-6">
              James Wilson, <span className="text-law-gold">Attorney at Law</span>
            </h2>
            <p className="text-law-charcoal mb-6">
              For over 15 years, I have been dedicated to providing exceptional legal representation to clients throughout California. With a focus on corporate law, civil litigation, and estate planning, I bring a wealth of knowledge and a commitment to achieving the best possible outcomes for those I serve.
            </p>
            <p className="text-law-charcoal mb-6">
              After graduating with honors from Yale Law School, I honed my skills at one of San Francisco's most prestigious law firms before establishing my own practice. My approach combines thorough legal analysis with a personalized touch, ensuring that each client receives tailored solutions to their unique legal challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center">
                <Medal className="text-law-gold mr-3" />
                <div>
                  <h4 className="font-semibold text-law-navy">Harvard Law</h4>
                  <p className="text-sm text-gray-600">J.D., Magna Cum Laude</p>
                </div>
              </div>
              <div className="flex items-center">
                <BookOpen className="text-law-gold mr-3" />
                <div>
                  <h4 className="font-semibold text-law-navy">CA Bar Association</h4>
                  <p className="text-sm text-gray-600">Member Since 2008</p>
                </div>
              </div>
            </div>
            <Button className="bg-law-navy hover:bg-law-gold text-white transition-colors">
              <FileText className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-law-gold"></div>
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="James Wilson Attorney" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
