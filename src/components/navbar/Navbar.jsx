import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
import instagram from "../../assets/instagram.gif"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import gmail from "../../assets/gmail.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >Rahul A Dharwadkar</motion.span>
        <div className="media">
            <a href=""><img src={linkedin} alt="" /></a>
            <a href=""><img src={github} alt="" /></a>
            <a href=""><img src={gmail} alt="" /></a>
            <a href=""><img src={instagram} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
