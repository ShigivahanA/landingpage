"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const images = [
  "/images/outdoor1.jpg",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=800&q=80",
];

export function Carousel() {
  const { language } = useLanguage();

  const content = {
    en: {
      heading: "Our Venue Highlights",
      button: "Explore More",
    },
    ta: {
      heading: "எங்கள் மண்டபத்தின் சிறப்பம்சங்கள்",
      button: "மேலும் காண்க",
    },
  };

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">{content[language].heading}</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: false,
        }}
        speed={1000}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
        }}
        className="w-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={img}
              alt={`Slide ${idx + 1}`}
              width={800}
              height={400}
              className="w-full h-48 sm:h-64 object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-8">
        <Link href="/gallery">
          <button className="px-6 py-3 rounded-2xl border-2 transition">
            {content[language].button}
          </button>
        </Link>
      </div>
    </div>
  );
}
