import { Card } from "@/components/ui/card";
import { User, Wand2, BookOpen, Heart } from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Tell Us About Your Child",
    description: "Share your child's name, age, interests, and favorite things to help us create the perfect story.",
    step: "01"
  },
  {
    icon: Wand2,
    title: "AI Creates Magic",
    description: "Our advanced AI weaves together a unique, personalized story that captures your child's imagination.",
    step: "02"
  },
  {
    icon: BookOpen,
    title: "Story Time Begins",
    description: "Read the beautifully crafted story together, watching your child's face light up as they become the hero.",
    step: "03"
  },
  {
    icon: Heart,
    title: "Sweet Dreams",
    description: "Your child drifts off to sleep with a smile, excited for tomorrow's new adventure.",
    step: "04"
  }
];

const HowItWorksSection = () => {
  return (
    <div className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating personalized bedtime magic is as easy as 1, 2, 3, 4
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center border-none shadow-soft bg-card/50 backdrop-blur-sm hover:shadow-dreamy transition-all duration-300">
                <div className="mb-6">
                  <div className="relative mx-auto w-20 h-20 mb-4">
                    <div className="absolute inset-0 gradient-accent rounded-full opacity-20"></div>
                    <div className="relative w-full h-full bg-primary/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary/30 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;