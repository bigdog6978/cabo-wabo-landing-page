import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveEmail } from "@/lib/supabase";

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailCaptureModal = ({ isOpen, onClose }: EmailCaptureModalProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const result = await saveEmail(email);
      if (result.success) {
        setMessage("Thank you! We'll notify you when we launch.");
        setEmail("");
        setTimeout(() => {
          onClose();
          setMessage("");
        }, 2000);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-cabo-dark">
            Coming Soon
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Enter your email and we'll notify you when we've launched
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            
            <Button 
              type="submit" 
              className="w-full bg-cabo-teal hover:bg-cabo-teal/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Notify Me When Available"}
            </Button>
          </form>
          
          {message && (
            <p className={`text-sm ${message.includes("Thank you") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailCaptureModal;
