import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-4 sm:mb-6 animate-fade-in leading-tight">
          Welcome to <span className="text-primary">Lemon</span> Tree Hotel
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-background/95 mb-6 sm:mb-8 animate-fade-in">
          Experience Comfort and Luxury
        </p>
        <Button onClick={() => window.location.href = "#contact"} size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 hover:scale-105 transition-transform">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Hero;
