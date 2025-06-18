"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const features = [
  "Spacious air-conditioned hall",
  "Dining area with 150+ capacity",
  "Modern kitchen facility",
  "Ample parking space",
  "Stage and decoration ready",
  "Power backup and generator",
];

export function FeatureSection() {
  return (
    <div className="text-center max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-12">
        Features of Our Mahal
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {features.map((feature, index) => (
          <FadeInItem key={index} delay={index * 0.15}>
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
}: {
  children: React.ReactNode;
  delay?: number;
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
      className="rounded-2xl border border-border bg-muted p-6 shadow-sm text-lg font-medium"
    >
      {children}
    </motion.div>
  );
}
