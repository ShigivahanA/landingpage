'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "Is outside catering allowed?",
    answer: "No, only in-house or partnered caterers are permitted to ensure quality and hygiene standards."
  },
  {
    question: "What is the maximum guest capacity?",
    answer: "The hall can accommodate up to 500 guests for seating and around 200 guests in the dining area."
  },
  {
    question: "Is alcohol or smoking allowed on the premises?",
    answer: "No, alcohol consumption and smoking are strictly prohibited within the venue premises."
  },
  {
    question: "Can we play loud music during events?",
    answer: "Yes, but only until 10 PM in compliance with local noise regulations."
  },
  {
    question: "Are pets allowed inside the mahal?",
    answer: "No, pets are not allowed inside the mahal to maintain cleanliness and safety."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-2 rounded-2xl p-4 transition">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
                  <p className="mt-3">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
