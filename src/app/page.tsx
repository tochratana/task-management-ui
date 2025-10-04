import DeviceMockup from "@/components/DeviceMockup";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import TestimonialsSection from "@/components/TestimonialsSection";
import HeroSection from "@/components/HeroSection";
import ModernPWASection from "@/components/InstallPWA";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <DeviceMockup />
        <FeaturesSection />
        <TestimonialsSection />
        <ModernPWASection />
      </main>
      <Footer />
    </div>
  );
}
