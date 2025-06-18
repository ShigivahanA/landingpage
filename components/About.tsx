"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function FadeInParagraph() {
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
  }, [controls, inView]);

  return (
    <motion.p
      ref={ref}
      className="text-xl lg:text-2xl !leading-relaxed mx-auto max-w-5xl text-center"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hidden: { opacity: 0, y: 20, transition: { duration: 0.6 } },
      }}
    >
      Welcome to <strong>Iyyappan Thirumana Mahal</strong>, a perfect venue
      for weddings, receptions, and events. Located in{" "}
      <strong>Vannarpettai, Tirunelveli</strong>, we offer elegance, space, and
      unforgettable moments.
    </motion.p>
  );
}
