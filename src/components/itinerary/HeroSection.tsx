import { motion } from "framer-motion";
import { Heart, Calendar, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-rome.jpg";

interface HeroSectionProps {
  title: string;
  travelerName: string;
  currentDay: number;
  currentLocation: string;
}

export const HeroSection = ({ title, travelerName, currentDay, currentLocation }: HeroSectionProps) => {
  const { toast } = useToast();

  const handleSaveToFavorites = () => {
    toast({
      title: "Saved to Favorites!",
      description: "This itinerary has been added to your favorites.",
    });
  };

  const handleAddToCalendar = () => {
    toast({
      title: "Added to Calendar!",
      description: "Trip dates have been added to your calendar.",
    });
  };

  return (
    <section className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden">
      {/* Background Image with Ken Burns */}
      <motion.div 
        className="absolute inset-0 animate-ken-burns"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={heroImage} 
          alt="Rome at golden hour with Colosseum view"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent" />
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 sm:px-6 flex flex-col justify-end pb-6 sm:pb-10 md:pb-16">
        {/* Personalization Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-3 sm:mb-4"
        >
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-xs sm:text-sm font-medium text-navy">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber" />
            Crafted for {travelerName}
          </span>
        </motion.div>
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-hero-desktop font-bold text-primary-foreground mb-3 sm:mb-4 max-w-3xl leading-tight"
        >
          {title}
        </motion.h1>
        
        {/* Live Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
        >
          <span className="flex items-center gap-1.5 sm:gap-2 text-primary-foreground/90 text-sm sm:text-base md:text-lg">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-teal"></span>
            </span>
            Day {currentDay}
          </span>
          <span className="text-primary-foreground/60 hidden sm:inline">•</span>
          <span className="flex items-center gap-1 sm:gap-1.5 text-primary-foreground/90 text-sm sm:text-base md:text-lg">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Currently in {currentLocation}
          </span>
        </motion.div>
        
        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-3"
        >
          <Button variant="hero" size="lg" className="group w-full sm:w-auto" onClick={handleSaveToFavorites}>
            <Heart className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
            Save to Favorites
          </Button>
          <Button variant="heroOutline" size="lg" className="group w-full sm:w-auto" onClick={handleAddToCalendar}>
            <Calendar className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
            Add to Calendar
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
