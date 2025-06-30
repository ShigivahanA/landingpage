"use client";

import { Navbar } from "@/components/navbar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
// const imageData = [
//   { src: "https://images.unsplash.com/photo-1743630738181-b0e26c76c74c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8", tag: "dining" },
//   { src: "https://images.unsplash.com/photo-1749226703567-96d55b5c5eca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", tag: "dining" },
//   { src: "https://images.unsplash.com/photo-1749303025584-0b4e15e4146b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8", tag: "dining" },
//   { src: "https://images.unsplash.com/photo-1750126833705-ba98013f16f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D", tag: "hall" },
//   { src: "https://images.unsplash.com/photo-1746105839114-fbc9c81fcb17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D", tag: "hall" },
//   { src: "https://images.unsplash.com/photo-1748257615880-6243d0d7422f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D", tag: "hall" },
//   { src: "https://images.unsplash.com/photo-1728443783579-494fdbfd8512?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D", tag: "parking" },
//   { src: "https://images.unsplash.com/photo-1728443814449-7a2ad4d86ec3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D", tag: "parking" },
//   { src: "https://images.unsplash.com/photo-1749318398976-5a9b45307aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D", tag: "parking" },
//   { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", tag: "outdoor" },
//   { src: "https://images.unsplash.com/photo-1749898853429-2d7bc67e6433?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D", tag: "outdoor" },
//   { src: "/images/outdoor1.jpg", tag: "outdoor" },
//   ];
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
