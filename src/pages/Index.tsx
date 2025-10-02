import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { LazyComponent } from "@/components/ui/lazy-component";

// Lazy load components that are below the fold
const About = lazy(() => import("@/components/About"));
const PracticeAreas = lazy(() => import("@/components/PracticeAreas"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LazyComponent height="400px">
        <About />
      </LazyComponent>
      <LazyComponent height="600px">
        <PracticeAreas />
      </LazyComponent>
      <LazyComponent height="300px">
        <Contact />
      </LazyComponent>
      <LazyComponent height="200px">
        <Footer />
      </LazyComponent>
    </div>
  );
};

export default Index;
