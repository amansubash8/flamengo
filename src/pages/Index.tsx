import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { MenuSection } from "@/components/MenuSection";

const appetizers = [
  {
    name: "Edamame Dumplings",
    description: "Steamed dumplings filled with edamame puree, truffle oil",
    price: "$12",
  },
  {
    name: "Crispy Rice Spicy Tuna",
    description: "Sushi rice cakes topped with spicy tuna tartare",
    price: "$16",
  },
];

const mainCourses = [
  {
    name: "Miso Black Cod",
    description: "Marinated black cod with sweet miso sauce",
    price: "$38",
  },
  {
    name: "Wagyu Beef Toban Yaki",
    description: "Premium wagyu beef with mushrooms and yuzu soy",
    price: "$45",
  },
];

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

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Menu</h2>
          <MenuSection title="Appetizers" items={appetizers} />
          <MenuSection title="Main Courses" items={mainCourses} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-restaurant-peach">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nestled in the heart of the city, Sakura brings together traditional Asian flavors with modern culinary techniques. Our commitment to excellence is reflected in every dish we serve.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;