import { motion } from "framer-motion";
import { Tag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface PriceItem {
  label: string;
  value: string;
  isAddition?: boolean;
}

const priceBreakdown: PriceItem[] = [
  { label: "Base Package", value: "$1,999" },
  { label: "Flight: Business Direct", value: "+$1,850", isAddition: true },
  { label: "Hotel: Deluxe (3 nights)", value: "+$600", isAddition: true },
  { label: "Wine Tasting Tour", value: "+$120", isAddition: true },
];

export const PricingSummary = () => {
  const subtotal = 4569;
  const discount = 851;
  const total = subtotal - discount;
  const discountPercent = Math.round((discount / subtotal) * 100);
  const { toast } = useToast();

  const handleBookNow = () => {
    toast({
      title: "Booking Initiated!",
      description: "Redirecting you to secure checkout...",
    });
  };

  const handleSaveChanges = () => {
    toast({
      title: "Changes Saved!",
      description: "Your itinerary customizations have been saved.",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-border"
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Trip Summary</h3>
      
      {/* Price Breakdown */}
      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        {priceBreakdown.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-1.5 sm:py-2 border-b border-border last:border-0">
            <span className="text-xs sm:text-sm text-muted-foreground">{item.label}</span>
            <span className={`text-sm sm:text-base font-medium ${item.isAddition ? "text-foreground" : "text-foreground"}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
      
      {/* Subtotal */}
      <div className="flex items-center justify-between py-2 sm:py-3 border-t border-border">
        <span className="text-xs sm:text-sm text-muted-foreground">Subtotal</span>
        <span className="text-sm sm:text-base font-medium text-foreground">${subtotal.toLocaleString()}</span>
      </div>
      
      {/* Discount */}
      <motion.div 
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-between py-2 sm:py-3 px-3 sm:px-4 rounded-lg bg-teal/10 border border-teal/20 mb-3 sm:mb-4"
      >
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal" />
          <span className="text-xs sm:text-sm text-teal font-medium">You Save ({discountPercent}% off!)</span>
        </div>
        <span className="text-sm sm:text-base font-bold text-teal">-${discount.toLocaleString()}</span>
      </motion.div>
      
      {/* Total */}
      <div className="flex items-center justify-between py-3 sm:py-4 mb-4 sm:mb-6">
        <span className="text-lg sm:text-xl font-semibold text-foreground">Total</span>
        <span className="text-2xl sm:text-3xl font-bold text-coral">${total.toLocaleString()}</span>
      </div>
      
      {/* CTA Buttons */}
      <div className="space-y-2 sm:space-y-3">
        <Button className="w-full h-11 sm:h-14 text-sm sm:text-lg gap-2 shadow-glow-coral" size="lg" onClick={handleBookNow}>
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          Book Now
        </Button>
        <Button variant="outline" className="w-full h-10 sm:h-12 text-sm sm:text-base" size="lg" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </div>
      
      {/* Trust Badge */}
      <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4">
        Secure payment • Free cancellation up to 48h before
      </p>
    </motion.section>
  );
};
