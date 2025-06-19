"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const faqs = {
  en: [
    {
      question: "Is outside catering allowed?",
      answer:
        "No, only in-house or partnered caterers are permitted to ensure quality and hygiene standards.",
    },
    {
      question: "What is the maximum guest capacity?",
      answer:
        "The hall can accommodate up to 500 guests for seating and around 200 guests in the dining area.",
    },
    {
      question: "Is alcohol or smoking allowed on the premises?",
      answer:
        "No, alcohol consumption and smoking are strictly prohibited within the venue premises.",
    },
    {
      question: "Can we play loud music during events?",
      answer: "Yes, but only until 10 PM in compliance with local noise regulations.",
    },
    {
      question: "Are pets allowed inside the mahal?",
      answer:
        "No, pets are not allowed inside the mahal to maintain cleanliness and safety.",
    },
  ],
  ta: [
    {
      question: "வெளிப்புற உணவுகள் அனுமதிக்கப்படுமா?",
      answer:
        "இல்லை, தரமும் தூய்மையும் உறுதிசெய்ய, சபைஉணவகம் அல்லது கூட்டாளி உணவகங்கள் மட்டுமே அனுமதிக்கப்படுகின்றன.",
    },
    {
      question: "அதிகபட்ச விருந்தினர் அளவு எவ்வளவு?",
      answer:
        "மண்டபத்தில் 500 பேர் வரை அமர்வதற்கும், சாப்பாட்டிற்காக 200 பேர் வரை வசதியுடன் இருக்கலாம்.",
    },
    {
      question: "பானங்கள் அல்லது புகைபிடித்தல் அனுமதிக்கப்படுமா?",
      answer:
        "இல்லை, மண்டபத்துக்குள் மதுபானம் மற்றும் புகைபிடித்தல் கடுமையாகத் தடை செய்யப்பட்டுள்ளது.",
    },
    {
      question: "நிகழ்வுகள் நடைபெறும் போது சத்தமான இசை ஓலிக்குமா?",
      answer:
        "ஆம், ஆனால் உள்ளூர் ஒலி ஒழுங்குகளை பின்பற்றி இரவு 10 மணிக்குள் மட்டுமே இசை ஏற்பாடு செய்யலாம்.",
    },
    {
      question: "விலங்குகளை மண்டபத்தில் கொண்டு வர முடியுமா?",
      answer:
        "இல்லை, தூய்மையும் பாதுகாப்பும் காரணமாக விலங்குகள் மண்டபத்திற்குள் அனுமதிக்கப்படவில்லை.",
    },
  ],
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { language } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = faqs[language];

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10">
        {language === "ta" ? "அடிக்கடி கேட்கப்படும் கேள்விகள்" : "Frequently Asked Questions"}
      </h2>
      <div className="space-y-4">
        {items.map((faq, index) => (
          <div key={index} className="border-2 rounded-2xl p-4 transition">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-base sm:text-lg font-medium">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
