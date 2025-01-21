import { MenuSection } from "@/components/MenuSection";
import { Navbar } from "@/components/Navbar";

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

const Menu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Menu</h1>
          <MenuSection title="Appetizers" items={appetizers} />
          <MenuSection title="Main Courses" items={mainCourses} />
        </div>
      </div>
    </div>
  );
};

export default Menu;