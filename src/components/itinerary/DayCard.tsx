import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { StopCard, StopType } from "./StopCard";

export interface Stop {
  id: string;
  type: StopType;
  title: string;
  subtitle: string;
  time: string;
  duration?: string;
  location?: string;
  details: Record<string, string>;
  tip?: string;
  image?: string;
}

interface DayCardProps {
  dayNumber: number;
  date: string;
  title: string;
  location: string;
  stopCount: number;
  image: string;
  isToday?: boolean;
  stops: Stop[];
}

export const DayCard = ({ 
  dayNumber, 
  date, 
  title, 
  location, 
  stopCount, 
  image, 
  isToday,
  stops 
}: DayCardProps) => {
  const [isExpanded, setIsExpanded] = useState(isToday || dayNumber === 1);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-coral"
    >
      {/* Header */}
      <div 
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Hero Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
          <motion.img
            src={image}
            alt={`${title} - ${location}`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
          
          {/* Location Badge */}
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full glass text-xs sm:text-sm font-medium text-navy">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-coral" />
            {location}
          </div>
          
          {/* Today Badge */}
          {isToday && (
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-teal text-primary-foreground text-xs sm:text-sm font-semibold">
              Today
            </div>
          )}
        </div>
        
        {/* Day Info */}
        <div className="p-3 sm:p-5 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mb-1">
              <span className="text-xs sm:text-sm font-semibold text-coral uppercase tracking-wide">
                Day {dayNumber}
              </span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm text-muted-foreground">{date}</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground truncate">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
              {stopCount} stops planned
            </p>
          </div>
          
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center"
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          </motion.div>
        </div>
      </div>
      
      {/* Expandable Stops */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-3 sm:px-5 pb-3 sm:pb-5 space-y-3 sm:space-y-4">
              {/* Timeline connector */}
              <div className="relative pl-4 sm:pl-6 space-y-3 sm:space-y-4">
                <div className="absolute left-1 sm:left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-coral via-teal to-deep-purple rounded-full" />
                
                {stops.map((stop, index) => (
                  <div key={stop.id} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-3 sm:-left-4 top-4 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-card border-2 border-coral flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-coral" />
                    </div>
                    
                    <StopCard stop={stop} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};
