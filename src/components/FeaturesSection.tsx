import { Card } from "@/components/ui/card";
import { Heart, Brain, Clock, Shield, Sparkles, Users, BookOpen, Lightbulb, Moon, Smartphone } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Truly Personal",
    description: "Your child becomes the hero in every story",
    subtext: "✔ Builds confidence and self-esteem"
  },
  {
    icon: Brain,
    title: "Teaches Life Values",
    description: "Kindness, honesty, sharing—all in a 5-minute story",
    subtext: "✔ Supports emotional intelligence and empathy"
  },
  {
    icon: Sparkles,
    title: "Always Fresh",
    description: "Never the same story twice",
    subtext: "✔ Keeps kids engaged and curious"
  },
  {
    icon: BookOpen,
    title: "Boosts Vocabulary and Brainpower",
    description: "Smart storytelling for growing minds",
    subtext: "✔ Improves language and cognitive skills"
  },
  {
    icon: Users,
    title: "Quality Bonding Time",
    description: "Focus on your child, not the screen",
    subtext: "✔ Strengthens parent-child connection"
  },
  {
    icon: Moon,
    title: "Better Bedtime Routine",
    description: "5-minute stories that help your child wind down",
    subtext: "✔ Leads to better sleep and fewer battles at night"
  },
  {
    icon: Lightbulb,
    title: "Ignites Imagination",
    description: "Stories spark dreams, wonder, and creativity",
    subtext: "✔ Fuels storytelling and artistic expression"
  },
  {
    icon: Brain,
    title: "Lifelong Love of Reading",
    description: "Early exposure builds strong readers",
    subtext: "✔ Sets the stage for school success"
  },
  {
    icon: Clock,
    title: "Parent-Friendly Simplicity",
    description: "Takes the stress out of bedtime",
    subtext: "✔ Easy to use, even when you're exhausted"
  },
  {
    icon: Smartphone,
    title: "Screen-Free Story Magic",
    description: "Let them listen, you relax",
    subtext: "✔ No overstimulation before bed"
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Parents Love
            <span className="gradient-accent bg-clip-text text-transparent"> CaboWabo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            10 emotional + practical benefits that transform bedtime forever
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 gradient-card border-none shadow-soft hover:shadow-dreamy transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {feature.description}
                </p>
                <p className="text-sm text-primary font-medium">
                  {feature.subtext}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;