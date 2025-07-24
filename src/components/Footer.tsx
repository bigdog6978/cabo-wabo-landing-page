import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-moonlight" />
              <span className="text-2xl font-bold">CaboWabo</span>
            </div>
            <p className="text-background/80 max-w-md">
              Creating magical, personalized bedtime stories that spark imagination and bring families closer together.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-moonlight transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-moonlight transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-moonlight transition-colors">Sample Stories</a></li>
              <li><a href="#" className="hover:text-moonlight transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-moonlight transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-moonlight transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-moonlight transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-moonlight transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 CaboWabo. All rights reserved. Made with ❤️ for families everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;