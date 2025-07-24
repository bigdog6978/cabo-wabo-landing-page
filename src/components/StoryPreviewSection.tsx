import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";

const StoryPreviewSection = () => {
  return (
    <div className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See the Magic in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's a sample of how we personalize stories for children
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Preview */}
          <Card className="p-8 gradient-card border-none shadow-dreamy">
            <div className="mb-6">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Emma and the Moonlight Adventure"
              </h3>
            </div>
            
            <div className="prose prose-lg text-muted-foreground leading-relaxed">
              <p className="mb-4">
                Once upon a time, in a cozy little house on Maple Street, lived a brave and curious 7-year-old named <span className="text-primary font-semibold">Emma</span>. Emma loved <span className="text-primary font-semibold">painting</span> and had the most beautiful <span className="text-primary font-semibold">purple bedroom</span> you could imagine.
              </p>
              
              <p className="mb-4">
                One magical evening, as Emma was getting ready for bed, she noticed her favorite <span className="text-primary font-semibold">stuffed unicorn, Sparkles,</span> was glowing softly in the moonlight...
              </p>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  ✨ Personalized with: Child's name, age, interests (painting), favorite toy (unicorn), and room color
                </p>
              </div>
            </div>
          </Card>
          
          {/* Testimonials */}
          <div className="space-y-6">
            <Card className="p-6 border-none shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-3">
                    "My daughter Sophie asks for her 'special stories' every night now. She loves being the hero of her own adventures!"
                  </p>
                  <p className="font-semibold text-foreground">- Sarah M., Mom of 5-year-old</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-none shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-3">
                    "Bedtime used to be a struggle. Now Jake can't wait to hear what adventure awaits him tonight!"
                  </p>
                  <p className="font-semibold text-foreground">- Mike T., Dad of 8-year-old</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-none shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-3">
                    "The stories are beautifully written and perfectly age-appropriate. Lily learns something new in every adventure."
                  </p>
                  <p className="font-semibold text-foreground">- Amanda K., Mom of 6-year-old</p>
                </div>
              </div>
            </Card>
            
            <div className="pt-4">
              <Button variant="magical" size="lg" className="w-full">
                Start Creating Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPreviewSection;