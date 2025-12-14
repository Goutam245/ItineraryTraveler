import { motion } from "framer-motion";
import { AlertCircle, Footprints, Clock, FileText, Briefcase } from "lucide-react";

const infoItems = [
  {
    icon: Footprints,
    text: "Comfortable walking shoes recommended for all days",
  },
  {
    icon: Briefcase,
    text: "Shoulders & knees must be covered for Vatican visit (Day 2)",
  },
  {
    icon: FileText,
    text: "Keep passports and documents in hand luggage at all times",
  },
  {
    icon: Clock,
    text: "Local time: CET (UTC+1) - Your schedule is in local time",
  },
];

export const ImportantInfo = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-amber/10 border border-amber/20 rounded-2xl p-4 sm:p-6"
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber/20 flex items-center justify-center flex-shrink-0">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber" />
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">Important Information</h3>
      </div>
      
      <ul className="space-y-2 sm:space-y-3">
        {infoItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="flex items-start gap-2 sm:gap-3"
          >
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber flex-shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-foreground">{item.text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};
