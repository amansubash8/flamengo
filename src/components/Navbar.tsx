import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/219dbe79-cb67-4a89-9b99-fb9f79cb9652.png" 
              alt="Flamengo" 
              className="h-8"
            />
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-600 hover:text-restaurant-purple transition-colors">
              Menu
            </a>
            <a href="#about" className="text-gray-600 hover:text-restaurant-purple transition-colors">
              About
            </a>
            <Button variant="outline" className="border-restaurant-purple text-restaurant-purple hover:bg-restaurant-purple hover:text-white">
              Reserve a Table
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-restaurant-purple focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="#menu"
              className="block px-3 py-2 text-gray-600 hover:text-restaurant-purple"
            >
              Menu
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:text-restaurant-purple"
            >
              About
            </a>
            <Button variant="outline" className="w-full mt-4 border-restaurant-purple text-restaurant-purple hover:bg-restaurant-purple hover:text-white">
              Reserve a Table
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};