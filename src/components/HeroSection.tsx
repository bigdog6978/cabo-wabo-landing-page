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
        <Star className="w-6 h-6 text-starlight animate-glow" />
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: "2s" }}>
        <Moon className="w-8 h-8 text-moonlight animate-glow" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "4s" }}>
        <Sparkles className="w-5 h-5 text-starlight animate-glow" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <Sparkles className="w-16 h-16 text-moonlight mx-auto mb-4 animate-glow" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Magical Bedtime
          <br />
          <span className="gradient-accent bg-clip-text text-transparent">
            Stories for Kids
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-moonlight mb-8 max-w-2xl mx-auto leading-relaxed">
          AI-powered personalized bedtime stories that spark imagination and make every night special for children ages 3-10
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
            Create Your Story
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-moonlight text-moonlight hover:bg-moonlight hover:text-night-sky">
            See Sample Stories
          </Button>
        </div>
        
        <div className="mt-12 text-moonlight/80">
          <p className="text-sm">✨ Personalized for your child ✨ Educational & fun ✨ New story every night</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;