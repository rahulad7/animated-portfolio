import "./parallax.scss";
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const Parallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    // <div className='parallax'>
    //   <h1>{type==="services" ? "what we do" : "what we did?"}</h1>
    //   <div className='subtract'></div>
    //   <div className='sea-shore'></div>
    // </div>

    <div className="root-container">
      <motion.h1 style={{ y: textY }} className="heading">
        PARALLAX
      </motion.h1>

      <motion.div className="background" style={{ y: backgroundY }} />
      <div className="overlay" />
    </div>
  );
};

export default Parallax;
