import { motion } from "framer-motion";
import { 
  Plane, 
  Hotel, 
  Landmark, 
  Utensils, 
  MapPin, 
  Clock, 
  Lightbulb,
  Download,
  Ticket,
  Wifi,
  Coffee,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export type StopType = "flight" | "hotel" | "attraction" | "restaurant" | "freetime";

interface StopCardProps {
  stop: {
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
  };
  index: number;
}

const stopConfig: Record<StopType, { 
  icon: typeof Plane; 
  gradient: string; 
  borderColor: string;
  bgLight: string;
}> = {
  flight: { 
    icon: Plane, 
    gradient: "from-coral to-coral-light", 
    borderColor: "border-coral/30",
    bgLight: "bg-coral/5"
  },
  hotel: { 
    icon: Hotel, 
    gradient: "from-deep-purple to-deep-purple-light", 
    borderColor: "border-deep-purple/30",
    bgLight: "bg-deep-purple/5"
  },
  attraction: { 
    icon: Landmark, 
    gradient: "from-blue to-blue-light", 
    borderColor: "border-blue/30",
    bgLight: "bg-blue/5"
  },
  restaurant: { 
    icon: Utensils, 
    gradient: "from-sunset to-sunset-light", 
    borderColor: "border-sunset/30",
    bgLight: "bg-sunset/5"
  },
  freetime: { 
    icon: MapPin, 
    gradient: "from-teal to-teal-light", 
    borderColor: "border-teal/30",
    bgLight: "bg-teal/5"
  },
};

export const StopCard = ({ stop, index }: StopCardProps) => {
  const config = stopConfig[stop.type];
  const Icon = config.icon;
  const { toast } = useToast();

  const handleDownload = (documentType: string) => {
    toast({
      title: `${documentType} Downloaded`,
      description: `Your ${documentType.toLowerCase()} has been downloaded successfully.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.01 }}
      className={`rounded-xl overflow-hidden border ${config.borderColor} ${config.bgLight} transition-all duration-300`}
    >
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${config.gradient} px-3 sm:px-4 py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2`}>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-primary-foreground text-sm sm:text-base truncate">{stop.title}</h4>
            <p className="text-xs sm:text-sm text-primary-foreground/80 truncate">{stop.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-primary-foreground/90 ml-9 sm:ml-0">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          {stop.time}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Details Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
          {Object.entries(stop.details).map(([key, value]) => (
            <div key={key} className="text-center p-1.5 sm:p-2 rounded-lg bg-card">
              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide mb-0.5 sm:mb-1">{key}</p>
              <p className="text-xs sm:text-sm font-medium text-foreground truncate">{value}</p>
            </div>
          ))}
        </div>
        
        {/* Location */}
        {stop.location && (
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-coral flex-shrink-0" />
            <span className="truncate">{stop.location}</span>
          </div>
        )}
        
        {/* Amenities for Hotel */}
        {stop.type === "hotel" && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            {[
              { icon: Wifi, label: "Free WiFi" },
              { icon: Coffee, label: "Breakfast" },
              { icon: Star, label: "Pool" },
            ].map((amenity, i) => (
              <span key={i} className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-deep-purple/10 text-[10px] sm:text-xs font-medium text-deep-purple">
                <amenity.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                {amenity.label}
              </span>
            ))}
          </div>
        )}
        
        {/* Skip-the-line badge for attractions */}
        {stop.type === "attraction" && (
          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-blue/10 text-xs sm:text-sm font-medium text-blue mb-2 sm:mb-3">
            <Ticket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Skip-the-line Access
          </div>
        )}
        
        {/* Tip Section */}
        {stop.tip && (
          <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-amber/10 border border-amber/20">
            <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-foreground">{stop.tip}</p>
          </div>
        )}
        
        {/* Documents for flight */}
        {stop.type === "flight" && (
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
            <p className="text-xs sm:text-sm font-medium text-foreground mb-2">Travel Documents</p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="gap-1.5 sm:gap-2 text-xs sm:text-sm h-8 sm:h-9" onClick={() => handleDownload("E-Ticket")}>
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                E-Ticket
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5 sm:gap-2 text-xs sm:text-sm h-8 sm:h-9" onClick={() => handleDownload("Boarding Pass")}>
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Boarding Pass
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
