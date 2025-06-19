"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext"; 

export function FadeInParagraph() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const { language } = useLanguage(); 

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.p
      ref={ref}
      className="text-base sm:text-xl md:text-xl lg:text-2xl leading-relaxed sm:leading-loose mx-auto max-w-[90%] sm:max-w-3xl text-center px-4"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hidden: { opacity: 0, y: 20, transition: { duration: 0.6 } },
      }}
    >
      {language === "en" ? (
        <>
          Welcome to <strong>Iyyappan Thirumana Mahal</strong>, a perfect venue
          for weddings, receptions, and events. Located in{" "}
          <strong>Vannarpettai, Tirunelveli</strong>, we offer elegance, space,
          and unforgettable moments.
        </>
      ) : (
        <>
          <strong>ஐயப்பன் திருமண மஹால்</strong>, இது
          திருமணங்கள், வரவேற்புகள் மற்றும் விழாக்களுக்கு சரியான இடமாகும்.{" "}
          <strong>வண்ணார்பேட்டை, திருநெல்வேலி</strong> யில் அமைந்துள்ள எங்கள்
          மண்டபம், அழகு, விசாலம் மற்றும் மறக்கமுடியாத தருணங்களை வழங்குகிறது.
        </>
      )}
    </motion.p>
  );
}
