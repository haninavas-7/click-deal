
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import DownloadApp from "@/components/DownloadApp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <DownloadApp />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
