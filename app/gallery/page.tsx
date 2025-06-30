"use client";

import { Navbar } from "@/components/navbar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

const imageData = [
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//balcony%20(1).jpg", tag: "balcony" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//balcony%20(2).jpg", tag: "balcony" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//balcony%20(3).jpg", tag: "balcony" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//dining%20(1).jpg", tag: "dining" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//dining%20(2).jpg", tag: "dining" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//dining%20(3).jpg", tag: "dining" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//dining%20(4).jpg", tag: "dining" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//dining%20(5).jpg", tag: "dining" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//entrance%20(2).jpg", tag: "entrance" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//entrance%20(1).jpg", tag: "entrance" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//entrance%20(3).jpg", tag: "entrance" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//entrance%20(4).jpg", tag: "entrance" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//entrance%20(5).jpg", tag: "entrance" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//entrance%20(6).jpg", tag: "entrance" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//entrance%20(7).jpg", tag: "entrance" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//entrance%20(8).jpg", tag: "entrance" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//hall%20(1).jpg", tag: "hall" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//hall%20(2).jpg", tag: "hall" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//hall%20(3).jpg", tag: "hall" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//hall%20(4).jpg", tag: "hall" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//hall%20(5).jpg", tag: "hall" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//hall%20(6).jpg", tag: "hall" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//hall%20(7).jpg", tag: "hall" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//hall%20(8).jpg", tag: "hall" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//hall%20(9).jpg", tag: "hall" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//kitchen%20(1).jpg", tag: "kitchen" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//kitchen%20(2).jpg", tag: "kitchen" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//lift%20(1).jpg", tag: "lift" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//lift%20(2).jpg", tag: "lift" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//outdoor%20(1).jpg", tag: "outdoor" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//outdoor%20(2).jpg", tag: "outdoor" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//outdoor%20(3).jpg", tag: "outdoor" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//outdoor%20(4).jpg", tag: "outdoor" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//outdoor%20(5).jpg", tag: "outdoor" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//outdoor%20(6).jpg", tag: "outdoor" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//outdoor%20(7).jpg", tag: "outdoor" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//outdoor%20(8).jpg", tag: "outdoor" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//outdoor%20(9).jpg", tag: "outdoor" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//parking%20(1).jpg", tag: "parking" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//parking%20(2).jpg", tag: "parking" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//parking%20(3).jpg", tag: "parking" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//power%20(1).jpg", tag: "powerbackup" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//power%20(2).jpg", tag: "powerbackup" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//rooms%20(1).jpg", tag: "rooms" },
  { src: "https://ljyojfjihkfxdjfmlpxu.supabase.co/storage/v1/object/public/images//rooms%20(2).jpg", tag: "rooms" },
  { src: "/images/outdoor1.jpg", tag: "outdoor" }
];


const filters = ["all", "dining", "hall", "parking", "outdoor", "rooms","lift","powerbackup","entrance","balcony"] as const;
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
