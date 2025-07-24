import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Star, Moon } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
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
    <div className="relative py-24 px-4 gradient-hero overflow-hidden">
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
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-moonlight mx-auto mb-6 animate-glow" fill="currentColor" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Bedtime Tonight
          </h2>
          <p className="text-xl md:text-2xl text-moonlight/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of parents who've discovered the magic of personalized bedtime stories
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
            onClick={() => setIsDialogOpen(true)}
          >
            Download Free on App Store
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-moonlight text-moonlight hover:bg-moonlight hover:text-night-sky">
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

export default CTASection;