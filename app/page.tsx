import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SiteBackground } from "@/components/SiteBackground";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";

export default function Page() {
  return (
    <div className="min-h-dvh">
      <SiteBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <LiveDemo />
        <HowItWorks />
        <Pricing />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

