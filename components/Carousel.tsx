"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from 'next/image';

const images = [
  "/images/outdoor1.jpg",
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
          <button className=" px-6 py-3 rounded-2xl border-2 transition">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
}
