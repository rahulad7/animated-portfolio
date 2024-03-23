import "./skills.scss";
import { motion } from "framer-motion"
import companyLogo from "../../assets/companyLogo.jpg";

const variants = {
    initial: {
        x:-100,
        y:10,
        opacity: 0
    }, 
    animate: {
        x:0,
        opacity: 1,
        transition: {
            duration:1,
            straggerChild: 0.1,
        }
    }
}

const Skills = () => {
  return (
    <motion.div className="skill-container" variants={variants} initial='initial' whileInView='animate'>
      <motion.h2 className="skill-heading">Skills & Experience</motion.h2>
      <motion.div className="tech-stack" variants={variants}>
        <h3>TECH STACK </h3>
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
      </motion.div>
      <motion.div variants={variants}>
        <h3>Experience</h3>
        <div className="company-flex">
          <img className="company-logo" src={companyLogo} alt="" />
          <div className="experience-info">
            <p>
              Envsage (Envisage Cloud Solutions Private Limited), Bengaluru.
            </p>
            <p>Front End Developer</p>
            <p>From JUNE 2023 - Present</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
