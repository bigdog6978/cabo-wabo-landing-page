import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewSection = () => {
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
    <section className="pt-12 px-4 pb-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cabo-dark mb-6">
          Experience the Magic
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          See how CaboWabo transforms bedtime with personalized stories that make your child the hero of every adventure.
        </p>
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/2b65f11d-fb2d-43b4-a4f9-5746e965f857.png" 
            alt="CaboWabo app interface showing personalization options, story upgrade screen, and David's story library"
            className="w-full max-w-4xl h-auto rounded-2xl scale-110"
          />
        </div>
        <div className="flex justify-center">
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
            onClick={() => setIsDialogOpen(true)}
          >
            Download Free on App Store
            <ArrowRight className="w-5 h-5 ml-2" />
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
    </section>
  );
};

export default NewSection;