import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, MousePointerClick } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
            <img src="/logo.png" alt="Click Deal Logo" className="h-12 w-12" />
            Click Deal <MousePointerClick className="h-5 w-5" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <a 
              href="#about" 
              onClick={(e) => handleClick(e, 'about')}
              className="hover:text-primary transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleClick(e, 'how-it-works')}
              className="hover:text-primary transition-colors duration-300"
            >
              How It Works
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleClick(e, 'features')}
              className="hover:text-primary transition-colors duration-300"
            >
              Features
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleClick(e, 'contact')}
              className="hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a 
                href="#about" 
                onClick={(e) => handleClick(e, 'about')}
                className="hover:text-primary transition-colors duration-300 px-2 py-1"
              >
                About
              </a>
              <a 
                href="#how-it-works" 
                onClick={(e) => handleClick(e, 'how-it-works')}
                className="hover:text-primary transition-colors duration-300 px-2 py-1"
              >
                How It Works
              </a>
              <a 
                href="#features" 
                onClick={(e) => handleClick(e, 'features')}
                className="hover:text-primary transition-colors duration-300 px-2 py-1"
              >
                Features
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleClick(e, 'contact')}
                className="hover:text-primary transition-colors duration-300 px-2 py-1"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
