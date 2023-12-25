import { useState } from "react"
import ToggleButton from "./ToggelButton/ToggleButton"
import Links from "./links/Links"
import "./sidebar.scss"
import {motion} from "framer-motion"


const variants ={
  open : {
    clipPath: "circle(1200px at 50px 50px )",
    transition: {
      type: "spring",
      stiffness: 20 , 
    }
  } ,
  closed : {
    clipPath: "circle(30px at 50px 50px )",
    transition: {
      delay : 0.2,
      type : "spring",
      stiffness: 400,
      damping: 40
    }
  }
}


const sidebar = () => {

  const [open , setopen] = useState(false)
 
  return (
    <motion.aside animate={open ? "open" : "closed"} >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setopen={setopen}/>
    </motion.aside>
  )
}

export default sidebar
