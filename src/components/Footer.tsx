import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center">
                <svg width="200" height="32" viewBox="0 0 400 64" className="h-8">
                  <defs>
                    <style>{`
                      .cabo-text { 
                        fill: hsl(175, 55%, 55%); 
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                        font-weight: bold; 
                        font-size: 42px;
                      }
                      .cabo-outline { 
                        fill: none; 
                        stroke: hsl(220, 50%, 15%); 
                        stroke-width: 3;
                      }
                    `}</style>
                  </defs>
                  <text x="10" y="45" className="cabo-outline cabo-text">CaboWabo</text>
                  <text x="10" y="45" className="cabo-text">CaboWabo</text>
                  {/* Star sparkles */}
                  <g fill="hsl(45, 100%, 70%)">
                    <path d="M360 15 l4 8 l8 2 l-6 6 l2 8 l-8-4 l-8 4 l2-8 l-6-6 l8-2 z" />
                    <path d="M375 25 l2 4 l4 1 l-3 3 l1 4 l-4-2 l-4 2 l1-4 l-3-3 l4-1 z" />
                    <path d="M345 8 l2 4 l4 1 l-3 3 l1 4 l-4-2 l-4 2 l1-4 l-3-3 l4-1 z" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="text-background/80 max-w-md leading-relaxed">
              Creating magical, personalized bedtime stories that spark imagination and bring families closer together.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-cabo-teal transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-cabo-teal transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-cabo-teal transition-colors">Sample Stories</a></li>
              <li><a href="#" className="hover:text-cabo-teal transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-cabo-teal transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cabo-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cabo-teal transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cabo-teal transition-colors">Contact</a></li>
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