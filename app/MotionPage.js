"use client";

import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const MotionPage = ({ children }) => {
  const ref = useRef(null);
  const isInVIew = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInVIew) {
      mainControls.start("visible");
    }
  }, [isInVIew]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MotionPage;
