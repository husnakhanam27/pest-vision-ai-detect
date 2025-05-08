
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Bug } from "lucide-react";
import LanguageSelector from './LanguageSelector';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Bug size={24} className="text-pest-green-500" />
          <span className="font-bold text-xl text-pest-green-700">PestVisionAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-pest-green-600 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-pest-green-600 font-medium">
            About
          </Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-pest-green-600 font-medium">
            Dashboard
          </Link>
          <LanguageSelector />
          <Button asChild variant="outline" className="border-pest-green-500 text-pest-green-700 hover:bg-pest-green-50">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild className="bg-pest-green-500 hover:bg-pest-green-600">
            <Link to="/login?register=true">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-pest-green-600 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 w-full py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-pest-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-pest-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/dashboard" 
              className="text-gray-700 hover:text-pest-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="py-2">
              <LanguageSelector />
            </div>
            <div className="flex flex-col space-y-3 pt-2">
              <Button 
                asChild 
                variant="outline" 
                className="w-full border-pest-green-500 text-pest-green-700 hover:bg-pest-green-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/login">Sign In</Link>
              </Button>
              <Button 
                asChild 
                className="w-full bg-pest-green-500 hover:bg-pest-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/login?register=true">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
