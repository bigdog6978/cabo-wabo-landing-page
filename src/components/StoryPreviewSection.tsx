import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";

const StoryPreviewSection = () => {
  return (
    <div className="py-24 px-4 bg-white">
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
          {/* Phone Mockup Image */}
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/12e610c9-16c9-45ea-9d79-abfcb3f3c15f.png" 
              alt="CaboWabo app showing Your Library with David's personalized stories collection"
              className="w-auto h-auto shadow-dreamy rounded-3xl scale-75"
            />
          </div>
          
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
                    "CaboWabo made storytime possible again. My daughter now begs for her custom bedtime story!"
                  </p>
                  <p className="font-semibold text-foreground">- Jenna M., mom of two</p>
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
                  <p className="font-semibold text-foreground">- Mike T., dad of 8-year-old</p>
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
                    "The stories help my shy daughter feel confident. She loves being the brave hero!"
                  </p>
                  <p className="font-semibold text-foreground">- Amanda K., mom of 6-year-old</p>
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