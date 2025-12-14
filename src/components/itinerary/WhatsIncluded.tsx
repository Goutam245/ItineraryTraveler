import { motion } from "framer-motion";
import { Check, Bed, Coffee, Ticket, Users, Car, Headphones, Shield, Smartphone, Camera } from "lucide-react";

const includedItems = [
  { icon: Bed, text: "3 nights premium accommodation" },
  { icon: Coffee, text: "Daily breakfast buffet" },
  { icon: Ticket, text: "All skip-the-line tickets" },
  { icon: Users, text: "Expert local guides (English)" },
  { icon: Car, text: "Private airport transfers" },
  { icon: Car, text: "Hotel pickup & drop-off" },
  { icon: Headphones, text: "24/7 concierge support" },
  { icon: Shield, text: "Travel insurance included" },
  { icon: Smartphone, text: "Detailed itinerary app" },
  { icon: Camera, text: "Digital photo memories" },
];

export const WhatsIncluded = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-teal/5 border border-teal/20 rounded-2xl p-4 sm:p-6 md:p-8"
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal" />
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">What's Included</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {includedItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-card"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-foreground">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
