
import { Card, CardContent } from "@/components/ui/card";
import { Gavel, Building, FileText, Users, Scale, Home } from "lucide-react";

const practices = [
  {
    title: "Corporate Law",
    description: "Comprehensive legal solutions for businesses of all sizes, including formation, compliance, contracts, and mergers & acquisitions.",
    icon: Building,
  },
  {
    title: "Civil Litigation",
    description: "Zealous representation in complex disputes, with a strategic approach focused on achieving favorable outcomes efficiently.",
    icon: Gavel,
  },
  {
    title: "Estate Planning",
    description: "Thoughtful planning to protect your assets and provide for your loved ones, including wills, trusts, and probate matters.",
    icon: FileText,
  },
  {
    title: "Family Law",
    description: "Compassionate guidance through divorce, child custody, support matters, and other family-related legal concerns.",
    icon: Users,
  },
  {
    title: "Personal Injury",
    description: "Dedicated advocacy for injury victims seeking fair compensation after accidents caused by negligence.",
    icon: Scale,
  },
  {
    title: "Real Estate Law",
    description: "Expert handling of residential and commercial transactions, landlord-tenant disputes, and property litigation.",
    icon: Home,
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-24 bg-law-lightgray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in animate-delay-100">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-law-navy mb-4">Practice Areas</h2>
          <div className="w-20 h-1 bg-law-gold mx-auto mb-6"></div>
          <p className="text-law-charcoal">
            With extensive experience across multiple legal disciplines, I provide comprehensive representation tailored to your specific needs and circumstances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div key={practice.title} className={`opacity-0 animate-fade-in animate-delay-${(index % 3) * 100 + 200}`}>
              <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-law-gold">
                <CardContent className="pt-6">
                  <div className="bg-law-navy/10 p-3 rounded-full w-fit mb-6">
                    <practice.icon className="h-6 w-6 text-law-navy" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-law-navy mb-3">{practice.title}</h3>
                  <p className="text-law-charcoal">{practice.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
