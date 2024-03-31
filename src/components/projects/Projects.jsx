import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const works = [
  {
    id: 1,
    title: "Responsive Website",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates",
  },
  {
    id: 2,
    title: "Weather App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: " Build a Weather website using client side and server side using HTML, CSS, Javascript, NodeJS, integrating with weatherAPI to provide users with accurate and up-to-date weather information based on location.",
  },
  {
    id: 3,
    title: "ChatGPT Clone",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: " Developed a ChatGPT-inspired conversational AI application, leveraging React JS, NodeJS, Tailwind CSS to build. Implemented API calls  to interact with the ChatGPT model, enhancing the user Experience with natural language understanding and generation.",
  },
  {
    id: 4,
    title: "Pikachu App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates",
  },
  {
    id: 5,
    title: "Todo App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates",
  },
];

const Pages = ({ work }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="layout">
        <div className="wrapper">
          <motion.div style={y} className="text-block">
            <h2>{work.title}</h2>
            <p>{work.desc}</p>
            <button>
              <p>Visit</p> <FaArrowUpRightFromSquare />
            </button>
          </motion.div>
          <div className="image-block" ref={ref}>
            <img src={work.img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {works.map((work) => (
        <Pages work={work} key={work.id} />
      ))}
    </div>
  );
};

export default Projects;
