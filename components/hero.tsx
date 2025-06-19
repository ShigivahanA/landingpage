"use client";

import { FadeInParagraph } from "./About";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { language } = useLanguage();

  return (
    <motion.div
      className="flex flex-col gap-16 items-center"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      <motion.h1
        className="text-4xl lg:text-5xl !leading-tight mx-auto max-w-xl text-center"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
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
            {language === "ta"
              ? "ஸ்ரீ ஐயப்பன் திருமண மண்டபம்"
              : "Sri Iyyappan Thirumana Mandapam"}
          </motion.span>
        </AnimatePresence>
      </motion.h1>

      <motion.p
        className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
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
            {language === "ta"
              ? "உங்கள் மதிப்புமிக்க கொண்டாட்டங்களுக்கான காலத்தால் அமைந்த இடம்."
              : "A timeless space for your most cherished celebrations."}
          </motion.span>
        </AnimatePresence>
      </motion.p>

      <motion.div
        className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/30 to-transparent my-8"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.4 } },
        }}
      />

      <FadeInParagraph />
    </motion.div>
  );
}
