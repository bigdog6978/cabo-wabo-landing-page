import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-24 px-4 gradient-hero">
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
          <Button variant="secondary" size="lg" className="text-lg px-8 py-6 h-auto">
            Download Free on App Store
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-moonlight text-moonlight hover:bg-moonlight hover:text-night-sky">
            Watch Demo
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default CTASection;