"use client";

import { Navbar } from "@/components/navbar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

const imageData = [
  const imageData = [
  { src: "/images/balcony (1).jpg", tag: "balcony" },
  { src: "/images/balcony (2).jpg", tag: "balcony" },
  { src: "/images/balcony (3).jpg", tag: "balcony" },
  { src: "/images/dining (1).jpg", tag: "dining" },
  { src: "/images/dining (2).jpg", tag: "dining" },
  { src: "/images/dining (3).jpg", tag: "dining" },
  { src: "/images/dining (4).jpg", tag: "dining" },
  { src: "/images/dining (5).jpg", tag: "dining" },
  { src: "/images/entrance (1).jpg", tag: "entrance" },
  { src: "/images/entrance (2).jpg", tag: "entrance" },
  { src: "/images/entrance (3).jpg", tag: "entrance" },
  { src: "/images/entrance (4).jpg", tag: "entrance" },
  { src: "/images/entrance (5).jpg", tag: "entrance" },
  { src: "/images/entrance (6).jpg", tag: "entrance" },
  { src: "/images/entrance (7).jpg", tag: "entrance" },
  { src: "/images/entrance (8).jpg", tag: "entrance" },
  { src: "/images/hall (1).jpg", tag: "hall" },
  { src: "/images/hall (2).jpg", tag: "hall" },
  { src: "/images/hall (3).jpg", tag: "hall" },
  { src: "/images/hall (4).jpg", tag: "hall" },
  { src: "/images/hall (5).jpg", tag: "hall" },
  { src: "/images/hall (6).jpg", tag: "hall" },
  { src: "/images/hall (7).jpg", tag: "hall" },
  { src: "/images/hall (8).jpg", tag: "hall" },
  { src: "/images/hall (9).jpg", tag: "hall" },
  { src: "/images/kitchen (1).jpg", tag: "kitchen" },
  { src: "/images/kitchen (2).jpg", tag: "kitchen" },
  { src: "/images/lift (1).jpg", tag: "lift" },
  { src: "/images/lift (2).jpg", tag: "lift" },
  { src: "/images/outdoor (1).jpg", tag: "outdoor" },
  { src: "/images/outdoor (2).jpg", tag: "outdoor" },
  { src: "/images/outdoor (3).jpg", tag: "outdoor" },
  { src: "/images/outdoor (4).jpg", tag: "outdoor" },
  { src: "/images/outdoor (5).jpg", tag: "outdoor" },
  { src: "/images/outdoor (6).jpg", tag: "outdoor" },
  { src: "/images/outdoor (7).jpg", tag: "outdoor" },
  { src: "/images/outdoor (8).jpg", tag: "outdoor" },
  { src: "/images/outdoor (9).jpg", tag: "outdoor" },
  { src: "/images/parking (1).jpg", tag: "parking" },
  { src: "/images/parking (2).jpg", tag: "parking" },
  { src: "/images/parking (3).jpg", tag: "parking" },
  { src: "/images/power (1).jpg", tag: "power" },
  { src: "/images/power (2).jpg", tag: "power" },
  { src: "/images/rooms (1).jpg", tag: "rooms" },
  { src: "/images/rooms (2).jpg", tag: "rooms" },
  { src: "/images/outdoor1.jpg", tag: "outdoor" }
];

];

const filters = ["all", "dining", "hall", "parking", "outdoor", "rooms","lift","Power Backup","Entrance","Balcony"] as const;
type FilterKey = typeof filters[number];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const { language } = useLanguage();

  const filteredImages =
    activeFilter === "all"
      ? imageData
      : imageData.filter((img) => img.tag === activeFilter);

  const getFilterLabel = (filter: FilterKey) => {
  const labels: Record<FilterKey, string> = {
    all: language === "ta" ? "அனைத்தும்" : "All",
    dining: language === "ta" ? "சாப்பாட்டு இடம்" : "Dining",
    hall: language === "ta" ? "மண்டபம்" : "Hall",
    parking: language === "ta" ? "பார்க்கிங்" : "Parking",
    outdoor: language === "ta" ? "வெளிப் பகுதி" : "Outdoor",
    rooms: language === "ta" ? "ரூம்கள்" : "Rooms",
    lift: language === "ta" ? "லிஃப்ட்" : "Lift",
    powerbackup: language === "ta" ? "பவர் பேக்கப்" : "Power Backup",
    entrance: language === "ta" ? "நுழைவு" : "Entrance",
    balcony: language === "ta" ? "பால்கனி" : "Balcony",
  };
  return labels[filter];
};


  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div className="px-4 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl mb-8 text-center">
          {language === "ta"
            ? "திருமண மண்டபத்துக்கான புகைப்பட தொகுப்பு"
            : "Venue Gallery"}
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-2xl border transition ${
                activeFilter === f
                  ? "border-2 border-red-600"
                  : "border-2 border-gray-300"
              }`}
            >
              {getFilterLabel(f)}
            </button>
          ))}
        </div>

        {/* Masonry Image Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {filteredImages.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.tag}
                className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
