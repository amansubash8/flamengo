import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

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
    </div>
  );
};

export default Index;