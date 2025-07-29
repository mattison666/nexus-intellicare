import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Home/HeroSection";
import AboutPreview from "@/components/Home/AboutPreview";
import ServicesOverview from "@/components/Home/ServicesOverview";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import Testimonials from "@/components/Home/Testimonials";
import CallToAction from "@/components/Home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesOverview />
        <FeaturedProjects />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
