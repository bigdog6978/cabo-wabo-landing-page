import { Card } from "@/components/ui/card";
import { Heart, Brain, Clock, Shield, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Personalized Stories",
    description: "Every story features your child as the hero, with their name, interests, and favorite characters woven throughout the adventure."
  },
  {
    icon: Brain,
    title: "Age-Appropriate Content",
    description: "Carefully crafted stories for ages 3-10 with vocabulary, themes, and complexity perfectly suited to your child's development stage."
  },
  {
    icon: Clock,
    title: "Perfect Length",
    description: "Stories designed to be the ideal bedtime length - engaging enough to captivate, calming enough to encourage sleep."
  },
  {
    icon: Shield,
    title: "Safe & Positive",
    description: "All stories promote positive values, emotional learning, and are completely safe for children with no scary or inappropriate content."
  },
  {
    icon: Sparkles,
    title: "Endless Variety",
    description: "Never run out of stories! Our AI creates infinite unique adventures, ensuring bedtime never gets boring."
  },
  {
    icon: Users,
    title: "Family Bonding",
    description: "Create magical moments and strengthen your bond through shared storytelling experiences your child will treasure."
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Parents Love Our
            <span className="gradient-accent bg-clip-text text-transparent"> AI Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform bedtime into a magical experience with stories crafted specifically for your child
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 gradient-card border-none shadow-soft hover:shadow-dreamy transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
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