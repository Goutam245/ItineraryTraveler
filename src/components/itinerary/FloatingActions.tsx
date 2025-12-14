import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Download, Heart, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast({
      title: isFavorited ? "Removed from Favorites" : "Added to Favorites!",
      description: isFavorited ? "Itinerary removed from your favorites." : "Itinerary saved to your favorites.",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Italian Romance: Rome to Amalfi",
        text: "Check out this amazing travel itinerary!",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "Itinerary link has been copied to clipboard.",
      });
    }
  };

  const handleDownload = () => {
    toast({
      title: "Downloading PDF...",
      description: "Your itinerary PDF is being generated.",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3"
        >
          <AnimatePresence>
            {showScrollTop && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Button
                  size="icon"
                  variant="outline"
                  onClick={scrollToTop}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg bg-card hover:bg-muted"
                >
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={handleFavorite}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg bg-card hover:bg-muted"
            >
              <Heart className={`w-4 h-4 sm:w-5 sm:h-5 text-coral ${isFavorited ? "fill-coral" : ""}`} />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={handleShare}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg bg-card hover:bg-muted"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal" />
            </Button>
            <Button
              size="icon"
              onClick={handleDownload}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-glow-coral"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
