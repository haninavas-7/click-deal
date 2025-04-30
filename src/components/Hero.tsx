import { Button } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";

const Hero = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center gap-2">
          Welcome to Click Deal <MousePointerClick className="h-10 w-10 text-violet-600" />
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-8">
          Revolutionizing Real Estate — Without Brokers!
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg"
            onClick={(e) => handleClick(e, 'download')}
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg"
            onClick={(e) => handleClick(e, 'about')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
