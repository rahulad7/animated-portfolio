// import { motion } from "framer-motion"

// const variants = {
//     open: {
//         transition: {
//             straggerChildren: 0.1,
//         },
//     },
//     closed: {
//         transition: {
//             straggerChildren: 0.05,
//             straggerDirection: -1,
//         },
//     },
// };

// const menuvariants = {
//     open: {
//         y: 0,
//         opacity:1,
//     },
//     open: {
//         y: 50,
//         opacity:0,
//     }
// };

// const Links = () => {

//     const menu = [
//         "Homepage",
//         "About",
//         "Project",
//         "Skills",
//         "Contact",
//     ]

//   return (
//     <motion.div className='links' variants={variants}>
//       {menu.map((item) => (
//         <motion.a href={`#${item}`} key={item} variants={menuvariants}>
//             {item}
//         </motion.a>
//       ))}
//     </motion.div>
//   )
// }

// export default Links

import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const menuVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const menu = ["Homepage", "Skills","Projects", "About", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {menu.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={menuVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
