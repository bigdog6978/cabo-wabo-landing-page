import { Button } from "@/components/ui/button";
import { Sparkles, Moon, Star, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-bedtime.jpg";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you!",
        description: "We'll notify you when CaboWabo launches.",
      });
      setEmail("");
      setIsDialogOpen(false);
    }
  };
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
            className="h-16 md:h-20 w-auto mx-auto mb-4 animate-fade-in"
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
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto border border-[#64fdff]"
            onClick={() => setIsDialogOpen(true)}
          >
            Download on the Apple App Store
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-cabo-teal text-cabo-teal hover:bg-cabo-teal hover:text-white">
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Coming Soon Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">Coming Soon</DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Enter your email and we'll notify you when we've launched
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Notify Me
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroSection;