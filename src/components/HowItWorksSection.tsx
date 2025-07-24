import { Card } from "@/components/ui/card";
import { User, Wand2, BookOpen, Heart, Zap } from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Choose a Genre",
    description: "Pick from 6 themes, adventure, fantasy, mystery, etc to set the perfect mood for bedtime.",
    step: "01"
  },
  {
    icon: Wand2,
    title: "Choose a Lesson",
    description: "Pick from 9 values like kindness, honesty, sharing, or courage - or let us surprise you!",
    step: "02"
  },
  {
    icon: BookOpen,
    title: "Add Your Twist",
    description: "Want them to meet a dragon? Visit space? Include their pet? Customize the adventure.",
    step: "03"
  },
  {
    icon: Zap,
    title: "Lightning Fast!",
    description: "Your personalized story is ready in a flash, perfectly crafted for your child's bedtime.",
    step: "04"
  }
];

const HowItWorksSection = () => {
  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-accent bg-clip-text text-transparent">
            Meet CaboWabo - Your Personal Storyteller
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating personalized bedtime magic in 4 simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center border-none shadow-soft bg-[#eeeeee] hover:shadow-dreamy transition-all duration-300">
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