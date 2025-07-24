import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles } from "lucide-react";

const PricingSection = () => {
  return (
    <div className="py-24 px-4 gradient-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Start Free, Upgrade When Ready
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Try 3 stories completely free - no credit card required
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <Card className="p-8 border-2 border-border bg-card shadow-soft">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Free</h3>
              <div className="text-4xl font-bold text-foreground mb-4">$0</div>
              <p className="text-muted-foreground">Perfect for trying CaboWabo</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>3 personalized stories per month</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>Basic customization (name, age)</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>5 story genres</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>3 moral values</span>
              </li>
            </ul>
            
            <Button variant="outline" className="w-full" size="lg">
              Start Free Trial
            </Button>
          </Card>
          
          {/* Premium Tier */}
          <Card className="p-8 border-2 border-primary bg-card shadow-dreamy relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold">
              Most Popular
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Premium</h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-lg text-muted-foreground line-through mr-2">$4.99</span>
                <span className="text-4xl font-bold text-foreground">$39.99</span>
                <span className="text-muted-foreground ml-2">/year</span>
              </div>
              <p className="text-muted-foreground">First month FREE</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-medium">30 personalized stories per month</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>Full customization (appearance, interests, background)</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>All genres and moral values</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>Custom story requests</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>Story favorites/library</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>Offline reading mode</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>Bedtime reminder</span>
              </li>
            </ul>
            
            <Button variant="hero" className="w-full" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Premium Free
            </Button>
          </Card>
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <div className="flex justify-center items-center space-x-4">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-1" />
              <span className="font-semibold">30-day money-back guarantee</span>
            </div>
            <div className="text-muted-foreground">•</div>
            <span className="font-semibold text-muted-foreground">Cancel anytime</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Download now before bedtime tonight
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;