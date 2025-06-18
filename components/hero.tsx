"use client";

import { FadeInParagraph } from "./About";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.div
      className="flex flex-col gap-16 items-center"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3, // delay between children
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
        Sri Iyyappan Thirumana Mandapam
      </motion.h1>

      <motion.p
        className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        A timeless space for your most cherished celebrations.
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
