import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const work = [
  {
    id: 1,
    title: "Responsive Website",
    img: "https://www.freepik.com/free-photos-vectors/project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates",
  },
  {
    id: 2,
    title: "Weather App",
    img: "https://www.freepik.com/free-photos-vectors/project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates",
  },
  {
    id: 3,
    title: "ChatGPT Clone",
    img: "https://www.freepik.com/free-photos-vectors/project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates",
  },
  {
    id: 4,
    title: "Pikachu App",
    img: "https://www.freepik.com/free-photos-vectors/project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates",
  },
  {
    id: 5,
    title: "Todo App",
    img: "https://www.freepik.com/free-photos-vectors/project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates",
  },
];

const Pages = ({ work }) => {
  return <section></section>;
};

const Projects = () => {
    const ref = useRef()

    const { scrollYProgress } = useSpring({
        target: ref,
        offset: ["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {work.map((item) => (
        <Pages item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
