import { Card } from "@/components/ui/card";
import { Clock, BookOpen, Heart, User, Frown, Moon } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Too exhausted to read after a long day?",
    description: "You want to be present for bedtime, but you're running on empty."
  },
  {
    icon: BookOpen,
    title: "Tired of the same 3 books every night?",
    description: "They want variety, but you don't have an endless library at home."
  },
  {
    icon: Heart,
    title: "Struggling to find stories that teach good values?",
    description: "You want stories that actually matter and help shape their character."
  },
  {
    icon: User,
    title: "Want stories that actually feature YOUR child?",
    description: "Generic characters don't capture their imagination like personal stories do."
  },
  {
    icon: Frown,
    title: "Need bedtime to be easier, not harder?",
    description: "Bedtime battles drain everyone - you want peaceful, happy endings."
  },
  {
    icon: Moon,
    title: "Want to read to them every night—but you're just too tired?",
    description: "The guilt is real when you skip story time because you're exhausted."
  }
];

const ProblemSection = () => {
  return (
    <div className="py-24 px-4 gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sound Familiar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If you're nodding along, you're not alone. Thousands of parents face these same bedtime challenges every night.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-8 border-none shadow-soft hover:shadow-dreamy transition-all duration-300 bg-card/80 backdrop-blur-sm"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;