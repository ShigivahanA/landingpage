"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const titles = {
  en: "Find Us",
  ta: "எங்களை கண்டறியவும்",
};

const directionsText = {
  en: "Get Directions",
  ta: "திசைகள் பெறவும்",
};

export function Location() {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
      className="w-full px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center bg-background"
    >
      <div className="w-full max-w-screen-xl text-center">
        <h2 className="text-3xl sm:text-2xl font-bold mb-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={language}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{ display: "inline-block" }}
            >
              {titles[language]}
            </motion.span>
          </AnimatePresence>
        </h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5168761443415!2d77.71975727452552!3d8.737339893487233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04112147c12e6d%3A0xeb26f0f01aad766!2sSri%20Iyyappan%20Thirumana%20Mandapam!5e0!3m2!1sen!2sin!4v1750242268674!5m2!1sen!2sin"
          className="w-full h-[20rem] sm:h-[24rem] md:h-[28rem]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <a
          href="https://maps.app.goo.gl/DkzauAxpZGsKXDCY6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 rounded-full border-2 transition"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={language}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{ display: "inline-block" }}
            >
              {directionsText[language]}
            </motion.span>
          </AnimatePresence>
        </a>
      </div>
    </motion.div>
  );
}
