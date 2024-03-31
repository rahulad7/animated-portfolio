import "./skills.scss";
import { motion } from "framer-motion";
import companyLogo from "../../assets/companyLogo.jpg";

const variants = {
  initial: {
    x: -100,
    y: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChild: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <motion.div
      className="skill-container"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.h2 className="skill-heading">Skills & Experience</motion.h2>
      <motion.div className="tech-stack" variants={variants}>
        <h3>TECH STACK </h3>
        <div className="skill-flex">
          <div>
            <p className="skill-title">Languages</p>
            <div className="skill-image">
              <img src="https://skillicons.dev/icons?i=html" />
              <img src="https://skillicons.dev/icons?i=css" />
              <img src="https://skillicons.dev/icons?i=js" />
            </div>
          </div>
          <div>
            <p className="skill-title">Libraries/Frameworks</p>
            <div className="skill-image">
              <img src="https://skillicons.dev/icons?i=react" />
              <img src="https://skillicons.dev/icons?i=vue" />
              <img src="https://skillicons.dev/icons?i=nuxtjs" />
            </div>
          </div>
          <div>
            <p className="skill-title">Styling/Design</p>
            <div className="skill-image">
              <img src="https://skillicons.dev/icons?i=sass" />
              <img src="https://skillicons.dev/icons?i=tailwind" />
            </div>
          </div>
          <div>
            <p className="skill-title">Others</p>
            <div className="skill-image">
              <img src="https://skillicons.dev/icons?i=gitlab" />
              <img src="https://skillicons.dev/icons?i=github" />
              <img src="https://skillicons.dev/icons?i=postman" />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div variants={variants}>
        <h3>Experience</h3>
        <div className="company-flex">
          <img className="company-logo" src={companyLogo} alt="" />
          <div className="experience-details">
            <p className="experience-heading">
              Envsage (Envisage Cloud Solutions Private Limited), Bengaluru.
            </p>
            <p className="experience-role">Front End Developer | JUNE 2023 - Present</p>
            {/* <p>JUNE 2023 - Present</p> */}
            <p className="experience-info">
              Contributed to live projects like ClassTym and Company Store
              Webapp, using JavaScript, TypeScript, and Vue.js for dynamic web
              solutions. Integrated Tailwind CSS for consistent, responsive
              designs across devices. Efficiently incorporated APIs to enhance
              functionality.
              <p>
                {" "}
                Developed UI components for Edumentors app with ReactNative and
                Tailwind CSS.
              </p>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
