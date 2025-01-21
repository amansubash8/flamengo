import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 bg-gradient-to-r from-[#ee9ca7] to-[#ffdde1]">
        <div className="max-w-7xl mx-auto text-center pt-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Experience Pan-Asian
            <br /> Fine Dining
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            A journey through the finest flavors of Asia
          </p>
          <Button 
            size="lg"
            className="bg-white text-restaurant-purple hover:bg-restaurant-purple hover:text-white animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            Reserve Your Table
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-restaurant-peach">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nestled in the heart of the city, we bring together traditional Asian flavors with modern culinary techniques. Our commitment to excellence is reflected in every dish we serve.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/219dbe79-cb67-4a89-9b99-fb9f79cb9652.png" 
              alt="Restaurant Logo" 
              className="h-8 mb-4"
            />
            <p className="text-gray-500 text-sm">© 2024 All rights reserved</p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>

          {/* Available in */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Available in</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Trivandrum</li>
              <li>Thrissur</li>
              <li>Kozhikode</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Social Links</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-restaurant-purple transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-restaurant-purple transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-restaurant-purple transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-restaurant-purple transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;