"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=800&q=80",
];

export function Carousel() {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Our Venue Highlights</h2>
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
              speed={1000} // optional: speed of transition (not same as delay)
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
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-48 sm:h-64 object-cover rounded-2xl"
                loading="lazy"
              />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
