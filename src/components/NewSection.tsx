const NewSection = () => {
  return (
    <section className="pt-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cabo-dark mb-6">
          Experience the Magic
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          See how CaboWabo transforms bedtime with personalized stories that make your child the hero of every adventure.
        </p>
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/2b65f11d-fb2d-43b4-a4f9-5746e965f857.png" 
            alt="CaboWabo app interface showing personalization options, story upgrade screen, and David's story library"
            className="w-full max-w-4xl h-auto rounded-2xl scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default NewSection;