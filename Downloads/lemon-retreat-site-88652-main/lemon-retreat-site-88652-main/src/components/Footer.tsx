
const Footer = () => {
  const currentYear = new Date().getFullYear();
return (
  <footer className="bg-foreground text-background py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      <div className="flex flex-col items-center space-y-4 sm:space-y-6">
        <div className="text-center">
            🍋 <span className="text-primary">Lemon</span> Tree Hotel
          <p className="text-sm sm:text-base text-background/80">Experience Comfort and Luxury</p>
        </div>
        </div>
        <div className="text-center text-background/70 text-xs sm:text-sm">
        <p className="mb-1">📞 +91 87936 25105</p>
            <p className="mb-1">📧 treehotellemon79@gmail.com</p>
            <p>© {currentYear} Lemon Tree Hotel. All rights reserved.</p>  
      </div>
    </div>
  </footer>
)};

export default Footer;
