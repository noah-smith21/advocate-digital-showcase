import { memo } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Medal, BookOpen } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";

const About = memo(() => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 opacity-0 animate-fade-in animate-delay-100">
            <h2 className="text-3xl md:text-3xl font-bold font-serif text-law-navy mb-3">
              Adv.Shikha Mishra,{" "}
              <span className="text-law-gold">Attorney at Law</span>
            </h2>
            <p className="text-law-charcoal mb-6">
              I have been dedicated to providing exceptional legal
              representation to clients . With a focus on Criminal
              Law,Matrimonial Law, Divorce,Family law & civil litigation, I
              bring a wealth of knowledge and a commitment to achieving the best
              possible outcomes for those I serve.
            </p>
            <p className="text-law-charcoal mb-6">
              After graduating with from SDSM Law School, I honed my skills at
              one of Sawale most prestigious law firms before establishing my
              own practice. My approach combines thorough legal analysis with a
              personalized touch, ensuring that each client receives tailored
              solutions to their unique legal challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center">
                <Medal className="text-law-gold mr-3" />
                <div>
                  <h4 className="font-semibold text-law-navy">
                    Mumbai University
                  </h4>
                </div>
              </div>
            </div>
            {/* <Button className="bg-law-navy hover:bg-law-gold text-white transition-colors">
              <FileText className="mr-2 h-4 w-4" /> Download Resume
            </Button> */}
          </div>

          <div className="order-1 lg:order-2 opacity-0 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-law-gold"></div>
              <LazyImage
                src="/shikha.jpg"
                alt="Shikha Mishra Attorney"
                className="w-full h-auto object-cover"
                placeholderHeight="400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
