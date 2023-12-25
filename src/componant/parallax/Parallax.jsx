import { useRef } from "react"
import "./parallax.scss"
import {motion , useScroll , useTransform} from "framer-motion"


const Parallax = ({type}) => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({
        tergit:ref,
        offset: ["start start" , "end start"]
    })
    const ytext = useTransform(scrollYProgress, [0,1], ["0%" , "100%"])
    const ybg = useTransform(scrollYProgress, [0,1], ["0%" , "100%"])

  return (
    <div
     className="parallax"
     ref={ref}
     style={
        {
            background:
            type === "services"
            ?"linear-gradient(180deg, #111132, #0c0c1d)"
            :"linear-gradient(180deg, #111132, #505064)"
        }
     }
     >
      <motion.h1
      style={{y:ytext}}
      >{type==="services"? "what we Do?" : "what we did?"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
       style={{
        y:ybg,
        backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`
    }} 
       className="planets"></motion.div>
      <motion.div style={{x:ybg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax
