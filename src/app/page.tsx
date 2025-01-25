"use client"
import About from "@/components/widgets/about";
import Hero from "@/components/widgets/hero";
import Signup from "@/components/widgets/signup";
import Testimonial from "@/components/widgets/testimonial";
import TreatmentsOffered from "@/components/widgets/treatment";
import Work from "@/components/widgets/work";


export default function Home() {
  return (
    <div>
      <Hero />
      <Work />
      <TreatmentsOffered />
      <Testimonial />
      <About />
      <Signup/>
    </div>
  );
}