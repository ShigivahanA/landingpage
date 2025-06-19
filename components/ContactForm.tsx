"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactForm() {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);

  const t = {
    en: {
      heading: "Contact Us",
      name: "Your Name",
      mobile: "Your Mobile Number",
      occasion: "Occasion",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      fail: "Failed to send message. Please try again.",
      error: "Something went wrong. Please try again.",
    },
    ta: {
      heading: "எங்களைத் தொடர்பு கொள்ளவும்",
      name: "உங்கள் பெயர்",
      mobile: "உங்கள் கைபேசி எண்",
      occasion: "நிகழ்வின் விபரம்",
      send: "செய்தியை அனுப்பவும்",
      sending: "அனுப்புகிறது...",
      success: "செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!",
      fail: "செய்தியை அனுப்ப முடியவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
      error: "ஏதோ தவறு நடந்தது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
    },
  }[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xyzjpplk", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast.success(t.success);
        form.reset();
      } else {
        toast.error(t.fail);
      }
    } catch {
      toast.error(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-background"
    >
      <div className="w-full max-w-screen-xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          {t.heading}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 rounded-2xl backdrop-blur-sm bg-muted/50 border border-border p-6 sm:p-8 shadow-md max-w-2xl mx-auto w-full"
        >
          <input
            name="name"
            type="text"
            placeholder={t.name}
            required
            className="w-full p-3 rounded-md border border-border bg-background placeholder:text-muted-foreground transition focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            name="mobile"
            type="tel"
            placeholder={t.mobile}
            required
            className="w-full p-3 rounded-md border border-border bg-background placeholder:text-muted-foreground transition focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="occasion"
            placeholder={t.occasion}
            required
            className="w-full p-3 rounded-md border border-border bg-background placeholder:text-muted-foreground h-32 transition focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full border-2 py-3 rounded-3xl transition font-medium flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="animate-spin w-4 h-4" />}
            {loading ? t.sending : t.send}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
