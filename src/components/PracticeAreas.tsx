import { useState, memo } from "react";
import { LazyImage } from "@/components/ui/lazy-image";

const practices = [
  {
    title: "Corporate Law",
    description:
      "Comprehensive legal solutions for businesses of all sizes, including formation, compliance, contracts, and mergers & acquisitions.",
    bgImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Civil Litigation",
    description:
      "Zealous representation in complex disputes, with a strategic approach focused on achieving favorable outcomes efficiently.",
    bgImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Criminal Defense",
    description:
      "Involves legal strategies and arguments to protect a person accused of crime, ensuring they receive a fair punishment if found guilty.",
    bgImage:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Family Law",
    description:
      "Compassionate guidance through divorce, child custody, support matters, and other family-related legal concerns.",
    bgImage:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Personal Injury",
    description:
      "Dedicated advocacy for injury victims seeking fair compensation after accidents caused by negligence.",
    bgImage:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Real Estate Law",
    description:
      "Expert handling of residential and commercial transactions, landlord-tenant disputes, and property litigation.",
    bgImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const PracticeAreas = memo(() => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="practice-areas" className="py-24 bg-law-lightgray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in animate-delay-100">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-law-navy mb-4">
            Practice Areas
          </h2>
          <div className="w-20 h-1 bg-law-gold mx-auto mb-6"></div>
          <p className="text-law-charcoal">
            With extensive experience across multiple legal disciplines, I
            provide comprehensive representation tailored to your specific needs
            and circumstances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div
              key={practice.title}
              className={`opacity-0 animate-fade-in animate-delay-${
                (index % 3) * 100 + 200
              } relative group`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-72 rounded-lg overflow-hidden relative">
                <LazyImage
                  src={practice.bgImage}
                  alt={practice.title}
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                  placeholderHeight="288px"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-law-navy/90 to-transparent p-6 flex flex-col justify-end transition-all duration-300 ${
                    hoveredIndex === index
                      ? "from-law-navy/95"
                      : "from-law-navy/80"
                  }`}
                >
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {practice.title}
                  </h3>
                  <p
                    className={`text-white/90 transition-all duration-300 ${
                      hoveredIndex === index
                        ? "opacity-100 max-h-40"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    {practice.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

PracticeAreas.displayName = "PracticeAreas";

export default PracticeAreas;
