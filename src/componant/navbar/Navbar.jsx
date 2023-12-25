import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from '../Sidebar/Sidebar'
const Navbar = () => {
  return (
    <nav >
      {/* sidbar */}
      <Sidebar/>
      <div className="wrapper container">
        <motion.span
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        >i can</motion.span>
        <div className="sotial">
            <a href="#"><img src="/facebook.png" alt="" /></a>
            <a href="#"><img src="/instagram.png" alt="" /></a>
            <a href="#"><img src="/youtube.png" alt="" /></a>
            <a href="#"><img src="/dribbble.png" alt="" /></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
