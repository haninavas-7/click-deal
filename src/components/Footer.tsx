import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Click Deal</h3>
            <p className="text-gray-600">
              Revolutionizing real estate transactions by connecting buyers and
              sellers directly.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-900">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-gray-900">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-900">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Click Deal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
