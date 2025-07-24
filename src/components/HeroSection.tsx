import { Button } from "@/components/ui/button";
import { Sparkles, Moon, Star } from "lucide-react";
import heroImage from "@/assets/hero-bedtime.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Star className="w-6 h-6 text-cabo-teal animate-glow" />
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: "2s" }}>
        <Moon className="w-8 h-8 text-starlight animate-glow" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "4s" }}>
        <Sparkles className="w-5 h-5 text-cabo-teal animate-glow" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/cff4a35b-daac-4cfa-a154-02d5bfc1ade6.png" 
            alt="CaboWabo" 
            className="h-16 md:h-20 w-auto mx-auto mb-4 animate-fade-in drop-shadow-lg"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Never Run Out of
          <br />
          <span className="gradient-accent bg-clip-text text-transparent">
            Magical Bedtime Stories
          </span>
          <br />
          <span className="text-4xl md:text-5xl">Again</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-moonlight mb-8 max-w-3xl mx-auto leading-relaxed">
          AI-powered personalized stories featuring <strong>YOUR child as the hero</strong>, teaching valuable life lessons in just 5 minutes
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
            Download Free on App Store
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-cabo-teal text-cabo-teal hover:bg-cabo-teal hover:text-white">
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-8 text-moonlight/90">
          <p className="text-lg font-semibold">★★★★★ Loved by 10,000+ families</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;