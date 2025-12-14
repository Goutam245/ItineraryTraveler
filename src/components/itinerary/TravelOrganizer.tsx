import { motion } from "framer-motion";
import { CheckCircle2, Star, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const TravelOrganizer = () => {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "Opening Chat...",
      description: "Connecting you with Travel Dreams Agency.",
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/39061234567", "_blank");
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting to WhatsApp chat...",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-4 sm:p-6 md:p-8 shadow-md"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Your Travel Organizer</h2>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-coral to-teal p-1">
            <div className="w-full h-full rounded-full bg-cream flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold text-coral">
              TD
            </div>
          </div>
        </div>
        
        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">Travel Dreams Agency</h3>
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue fill-blue" />
          </div>
          
          <div className="flex items-center justify-center sm:justify-start gap-0.5 sm:gap-1 mb-2 sm:mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber fill-amber" />
            ))}
            <span className="text-xs sm:text-sm text-muted-foreground ml-1.5 sm:ml-2">4.9 (147 reviews)</span>
          </div>
          
          <p className="text-xs sm:text-sm text-muted-foreground italic mb-3 sm:mb-4">
            "Specializing in authentic Italian experiences. We create personalized itineraries 
            showcasing culture, cuisine, and hidden gems."
          </p>
          
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Est. 2014 • Rome, Italy</p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm">
            <a href="tel:+3906123456" className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              +39 06 123 4567
            </a>
            <a href="mailto:info@traveldreams.com" className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              info@traveldreams.com
            </a>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button className="gap-1.5 sm:gap-2 text-xs sm:text-sm h-9 sm:h-10 w-full sm:w-auto" onClick={handleContact}>
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Contact Us
            </Button>
            <Button variant="outline" className="gap-1.5 sm:gap-2 text-xs sm:text-sm h-9 sm:h-10 w-full sm:w-auto" onClick={handleWhatsApp}>
              24/7 WhatsApp Support
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
