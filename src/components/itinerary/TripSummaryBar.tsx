import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, MessageCircle } from "lucide-react";

interface TripSummaryBarProps {
  dates: string;
  duration: string;
  stops: number;
  travelers: string;
}

export const TripSummaryBar = ({ dates, duration, stops, travelers }: TripSummaryBarProps) => {
  const items = [
    { icon: CalendarDays, label: dates, color: "text-coral", mobileLabel: dates },
    { icon: Clock, label: `${duration} • ${stops} Stops`, color: "text-teal", mobileLabel: duration },
    { icon: Users, label: travelers, color: "text-deep-purple", mobileLabel: "2+1" },
    { icon: MessageCircle, label: "24/7 WhatsApp Available", color: "text-sunset", mobileLabel: "24/7 Support" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div 
          className="flex items-center gap-2 sm:gap-3 md:gap-4 py-3 sm:py-4 overflow-x-auto hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 rounded-full bg-muted/60 hover:bg-muted transition-all cursor-default whitespace-nowrap flex-shrink-0"
            >
              <item.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ${item.color}`} />
              <span className="text-xs sm:text-sm font-medium text-foreground">
                <span className="hidden md:inline">{item.label}</span>
                <span className="md:hidden">{item.mobileLabel}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
