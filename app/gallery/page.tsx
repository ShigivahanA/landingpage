"use client";

import { Navbar } from "@/components/navbar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState } from "react";

const imageData = [
  { src: "https://images.unsplash.com/photo-1743630738181-b0e26c76c74c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8", tag: "dining" },
  { src: "https://images.unsplash.com/photo-1749226703567-96d55b5c5eca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", tag: "dining" },
  { src: "https://images.unsplash.com/photo-1749303025584-0b4e15e4146b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8", tag: "dining" },
  { src: "https://images.unsplash.com/photo-1750126833705-ba98013f16f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D", tag: "hall" },
  { src: "https://images.unsplash.com/photo-1746105839114-fbc9c81fcb17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D", tag: "hall" },
  { src: "https://images.unsplash.com/photo-1748257615880-6243d0d7422f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D", tag: "hall" },
  { src: "https://images.unsplash.com/photo-1728443783579-494fdbfd8512?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D", tag: "parking" },
  { src: "https://images.unsplash.com/photo-1728443814449-7a2ad4d86ec3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D", tag: "parking" },
  { src: "https://images.unsplash.com/photo-1749318398976-5a9b45307aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D", tag: "parking" },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", tag: "outdoor" },
  { src: "https://images.unsplash.com/photo-1749898853429-2d7bc67e6433?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D", tag: "outdoor" },
  { src: "/images/outdoor1.jpg", tag: "outdoor" },
  { src: "https://images.unsplash.com/photo-1744019960830-eb79b2528f8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D", tag: "rooms" },
  { src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80", tag: "rooms" },
  { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80", tag: "rooms" },
  { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80", tag: "dining" },
  { src: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=80", tag: "hall" },
  { src: "https://images.unsplash.com/photo-1744265385437-8b591b626a8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D", tag: "parking" },
  { src: "https://images.unsplash.com/photo-1750087328910-16dd862838eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D", tag: "outdoor" },
  { src: "https://plus.unsplash.com/premium_photo-1748193468691-494891c77dfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D", tag: "rooms" },
];



const filters = ["all", "dining", "hall", "parking", "outdoor", "rooms"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { language } = useLanguage();

  const filteredImages =
    activeFilter === "all"
      ? imageData
      : imageData.filter((img) => img.tag === activeFilter);

  const getFilterLabel = (filter: string) => {
    const labels = {
      all: language === "ta" ? "அனைத்தும்" : "All",
      dining: language === "ta" ? "உணவரங்கம்" : "Dining",
      hall: language === "ta" ? "மண்டபம்" : "Hall",
      parking: language === "ta" ? "பார்கிங்" : "Parking",
      outdoor: language === "ta" ? "வெளி பகுதியில்" : "Outdoor",
      rooms: language === "ta" ? "அறைகள்" : "Rooms",
    };
    return labels[filter];
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div className="px-4 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl mb-8 text-center">
          {language === "ta" ? "திருமண மண்டபத்துக்கான புகைப்பட தொகுப்பு" : "Venue Gallery"}
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

