const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            About <span className="text-primary">Lemon Tree Hotel</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            At Lemon Tree Hotel, we bring you a refreshing hospitality experience with comfort, elegance, 
            and great service. Our commitment to excellence ensures that every guest enjoys a memorable stay, 
            whether you're here for business or leisure. With modern amenities, luxurious rooms, and 
            world-class facilities, we strive to make your stay as pleasant and comfortable as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
