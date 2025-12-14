import { HeroSection } from "@/components/itinerary/HeroSection";
import { TripSummaryBar } from "@/components/itinerary/TripSummaryBar";
import { DayCard, Stop } from "@/components/itinerary/DayCard";
import { TravelOrganizer } from "@/components/itinerary/TravelOrganizer";
import { FloatingActions } from "@/components/itinerary/FloatingActions";
import { ImportantInfo } from "@/components/itinerary/ImportantInfo";
import { WhatsIncluded } from "@/components/itinerary/WhatsIncluded";
import { PricingSummary } from "@/components/itinerary/PricingSummary";

import heroRome from "@/assets/hero-rome.jpg";
import day2Tuscany from "@/assets/day2-tuscany.jpg";
import day3Amalfi from "@/assets/day3-amalfi.jpg";
import colosseum from "@/assets/colosseum.jpg";
import hotelRoom from "@/assets/hotel-room.jpg";
import restaurant from "@/assets/restaurant.jpg";
import trastevere from "@/assets/trastevere.jpg";

// Sample itinerary data
const itineraryData = {
  title: "Italian Romance: Rome to Amalfi",
  travelerName: "Sarah Cohen",
  currentDay: 1,
  currentLocation: "Rome",
  dates: "July 15-17, 2025",
  duration: "3 Days",
  stops: 8,
  travelers: "2 Adults • 1 Teen",
  days: [
    {
      dayNumber: 1,
      date: "Tuesday, July 15, 2025",
      title: "Welcome to Rome",
      location: "Rome, Italy",
      stopCount: 4,
      image: heroRome,
      isToday: true,
      stops: [
        {
          id: "flight-1",
          type: "flight" as const,
          title: "Arrival Flight",
          subtitle: "LY383 • El Al",
          time: "08:00 - 12:30",
          duration: "4h 30m",
          location: "Leonardo da Vinci (FCO) → Rome",
          details: {
            "Flight": "LY383",
            "Airline": "El Al ✈",
            "Duration": "4h 30m",
            "Arrival": "12:30",
          },
          tip: "Arrive 3 hours early • Terminal 3 • Check in online for faster boarding",
        },
        {
          id: "hotel-1",
          type: "hotel" as const,
          title: "Grand Hotel de la Minerve",
          subtitle: "4-Star Boutique • Historic Center",
          time: "15:00",
          location: "Via del Corso, 126 - Rome",
          details: {
            "Room Type": "Deluxe Suite",
            "Guests": "2 Adults",
            "Nights": "2 Nights",
            "Check-out": "Jul 17, 11:00",
          },
          image: hotelRoom,
        },
        {
          id: "attraction-1",
          type: "attraction" as const,
          title: "Colosseum & Roman Forum",
          subtitle: "Guided Tour • English",
          time: "17:00",
          duration: "2h 30m",
          location: "Piazza del Colosseo, 1",
          details: {
            "Tour Type": "Guided Tour",
            "Language": "English",
            "Access": "Skip-the-line",
            "Meeting": "Main Entrance",
          },
          tip: "Wear comfortable shoes and bring water. The tour covers a lot of ground!",
          image: colosseum,
        },
        {
          id: "restaurant-1",
          type: "restaurant" as const,
          title: "Trattoria Da Enzo",
          subtitle: "Italian • Pasta • Casual",
          time: "20:00",
          location: "Via dei Vascellari, 29 - Trastevere",
          details: {
            "Cuisine": "Italian Pasta",
            "Party Size": "3",
            "Dress Code": "Casual",
            "Price Range": "€€€",
          },
          tip: "Reservation under: Sarah Cohen. Try the famous cacio e pepe!",
          image: restaurant,
        },
      ],
    },
    {
      dayNumber: 2,
      date: "Wednesday, July 16, 2025",
      title: "Tuscan Countryside Escape",
      location: "Tuscany, Italy",
      stopCount: 3,
      image: day2Tuscany,
      isToday: false,
      stops: [
        {
          id: "attraction-2",
          type: "attraction" as const,
          title: "Vatican Museums & Sistine Chapel",
          subtitle: "Guided Tour • English",
          time: "09:00",
          duration: "3h",
          location: "Viale Vaticano, Vatican City",
          details: {
            "Tour Type": "Guided Tour",
            "Language": "English",
            "Access": "Skip-the-line",
            "Dress Code": "Covered shoulders & knees",
          },
        },
        {
          id: "freetime-1",
          type: "freetime" as const,
          title: "Explore Trastevere District",
          subtitle: "Free exploration time",
          time: "14:00 - 18:00",
          location: "Trastevere, Rome",
          details: {
            "Duration": "4 hours",
            "Area": "Trastevere",
            "Vibe": "Local & Authentic",
            "Budget": "Personal",
          },
          tip: "Best gelato at Fior di Luna • Watch sunset from Gianicolo Hill",
          image: trastevere,
        },
        {
          id: "restaurant-2",
          type: "restaurant" as const,
          title: "Pierluigi",
          subtitle: "Seafood • Fine Dining",
          time: "20:30",
          location: "Piazza de' Ricci, 144",
          details: {
            "Cuisine": "Seafood",
            "Party Size": "3",
            "Dress Code": "Smart Casual",
            "Price Range": "€€€€",
          },
        },
      ],
    },
    {
      dayNumber: 3,
      date: "Thursday, July 17, 2025",
      title: "Amalfi Coast Adventure",
      location: "Amalfi Coast, Italy",
      stopCount: 2,
      image: day3Amalfi,
      isToday: false,
      stops: [
        {
          id: "attraction-3",
          type: "attraction" as const,
          title: "Positano & Amalfi Day Trip",
          subtitle: "Private Transfer",
          time: "08:00",
          duration: "Full day",
          location: "Hotel pickup",
          details: {
            "Type": "Private Tour",
            "Transport": "Mercedes Van",
            "Stops": "Positano, Amalfi",
            "Lunch": "Included",
          },
        },
        {
          id: "flight-2",
          type: "flight" as const,
          title: "Departure Flight",
          subtitle: "LY386 • El Al",
          time: "21:00 - 01:30",
          duration: "4h 30m",
          location: "Rome (FCO) → Tel Aviv",
          details: {
            "Flight": "LY386",
            "Airline": "El Al ✈",
            "Duration": "4h 30m",
            "Arrival": "01:30 +1",
          },
          tip: "Private transfer from Amalfi directly to airport included",
        },
      ],
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta */}
      <title>Italian Romance: Rome to Amalfi | Premium Travel Itinerary</title>
      <meta name="description" content="Experience a curated 3-day luxury journey through Rome and the Amalfi Coast. Skip-the-line access, boutique hotels, and authentic Italian experiences crafted for Sarah Cohen." />
      
      {/* Hero Section */}
      <HeroSection
        title={itineraryData.title}
        travelerName={itineraryData.travelerName}
        currentDay={itineraryData.currentDay}
        currentLocation={itineraryData.currentLocation}
      />
      
      {/* Trip Summary Bar */}
      <TripSummaryBar
        dates={itineraryData.dates}
        duration={itineraryData.duration}
        stops={itineraryData.stops}
        travelers={itineraryData.travelers}
      />
      
      {/* Main Content */}
      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - Days */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-2 lg:order-1">
            {itineraryData.days.map((day) => (
              <DayCard key={day.dayNumber} {...day} />
            ))}
          </div>
          
          {/* Right Column - Sidebar */}
          <aside className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <PricingSummary />
            <WhatsIncluded />
            <ImportantInfo />
            <TravelOrganizer />
          </aside>
        </div>
      </main>
      
      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
};

export default Index;
