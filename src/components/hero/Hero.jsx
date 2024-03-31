import "./hero.scss";
import { motion } from "framer-motion";
import scroll from "../../assets/scrolls.png";
import boyCoding from '../../lottie/boy-coding.json';
import Lottie from "lottie-react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const SliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h3 variants={textVariants}>RAHUL A DHARWADKAR</motion.h3>
          <motion.h1 variants={textVariants}>FRONT END DEVELOPER</motion.h1>
          <motion.div variants={textVariants} className="button">
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            className="scroll-image"
            src={scroll}
            alt=""
          />
        </motion.div>
        <div className="animation-main">
          <Lottie animationData={boyCoding} />
        </div>
      </div>
      <motion.div
        className="sliding-text"
        variants={SliderVariants}
        initial="initial"
        animate="animate"
      >
        CODE BUILD TEST DEPLOY
      </motion.div>
      {/* <div className="image-container">
        <img className='image' src={stewie} alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
