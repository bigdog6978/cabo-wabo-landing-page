import { useState } from "react";
import EmailCaptureModal from "./EmailCaptureModal";

const NewSection = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <section 
      className="pt-12 px-4 pb-6 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at bottom center, #bce0c6 0%, #3bb0b5 50%, #278b9e 65%, #1c8190 85%, #196f84 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#07334c' }}>
          Experience the Magic
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-6" style={{ color: '#bce0c6' }}>
          See how CaboWabo transforms bedtime with personalized stories that make your child the hero of every adventure.
        </p>
        
        <div className="mb-8">
          <button
            onClick={() => setIsEmailModalOpen(true)}
            className="bg-cabo-teal hover:bg-cabo-teal/90 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Notified When Available
          </button>
        </div>
        
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/2b65f11d-fb2d-43b4-a4f9-5746e965f857.png" 
            alt="CaboWabo app interface showing personalization options, story upgrade screen, and David's story library"
            className="w-full max-w-4xl h-auto rounded-2xl scale-110"
          />
        </div>
      </div>
      
      <EmailCaptureModal 
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </section>
  );
};

export default NewSection;