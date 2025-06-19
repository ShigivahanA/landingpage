"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext"; // assuming this is your language context

const features = {
  en: [
    "Spacious air-conditioned hall",
    "Dining area with 250+ capacity",
    "Modern kitchen facility",
    "Ample parking space",
    "Stage and decoration ready",
    "Power backup and generator",
  ],
  ta: [
    "பெரிய குளிர்பிக்கப்பட்ட மண்டபம்",
    "250+ பேர்களுக்கு உணவுக் கூடம்",
    "நவீன சமையலறை வசதி",
    "பரபரப்பில்லாத கார்ப்பாரிங் வசதி",
    "வெள்ளைப் படிகாரம் மற்றும் அலங்காரம் தயாராக உள்ளது",
    "மின் ஆதரவு மற்றும் ஜெனரேட்டர்",
  ],
};

export function FeatureSection() {
  const { language } = useLanguage();

  return (
    <div className="text-center max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-2xl sm:text-xl lg:text-4xl font-bold mb-12">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={language}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            style={{ display: "inline-block" }}
          >
            {language === "ta" ? "எங்கள் மண்டபத்தின் அம்சங்கள்" : "Features of Our Mahal"}
          </motion.span>
        </AnimatePresence>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {features[language].map((feature, index) => (
          <FadeInItem key={index} delay={index * 0.15} language={language}>
            {feature}
          </FadeInItem>
        ))}
      </div>
    </div>
  );
}

function FadeInItem({
  children,
  delay = 0,
  language,
}: {
  children: React.ReactNode;
  delay?: number;
  language: string;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
        hidden: { opacity: 0, y: 30, transition: { duration: 0.3 } },
      }}
      className="rounded-2xl border border-border bg-muted p-6 text-base sm:text-lg font-medium shadow-sm"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={language + children?.toString()}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          style={{ display: "inline-block" }}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
