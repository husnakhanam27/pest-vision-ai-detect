
import { Link } from 'react-router-dom';
import { Bug } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Bug size={24} className="text-pest-green-500" />
              <span className="font-bold text-xl text-pest-green-700">PestVisionAI</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Advanced crop pest classification and identification using deep learning technology.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-pest-green-700">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pest-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pest-green-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-pest-green-600">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-pest-green-600">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-pest-green-700">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-pest-green-600">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-pest-green-600">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-pest-green-600">
                  Research Paper
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-pest-green-600">
                  Pest Database
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-pest-green-700">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@pestvisionai.com" className="text-gray-600 hover:text-pest-green-600">
                  Email Us
                </a>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-pest-green-600">
                  Support
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-pest-green-600">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} PestVisionAI. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="#" className="text-gray-600 hover:text-pest-green-600 text-sm">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-600 hover:text-pest-green-600 text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
