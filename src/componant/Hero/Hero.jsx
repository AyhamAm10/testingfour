import React from 'react'
import './hero.scss'
import {motion} from 'framer-motion'

const textveriants = {
    initial:{
        x: -500 ,
        opacity :0
    },
    animate:{
        x: 0,
        opacity: 1 ,
        transition :{
            duration: 1 ,
            staggerchildren:0.1

        }
    },
    scrollButton: {
        opacity: 0,
        y:10,
        transition:{
            duration: 2,
            repeat: Infinity 
        }
    }
}






const Hero = () => {
  return (
    <div className='hero'>
        <div   className="wrapper" >
        <motion.div 
        variants={textveriants} 
        initial="initial"
        animate = "animate"
        className="textContainer" >
            <motion.h2 variants={textveriants}>Ayham Ashram</motion.h2>
            <motion.h1 variants={textveriants}>Web devoloper and UI designer</motion.h1>
            <motion.div variants={textveriants} className="buttons">
                <button>see the latest works</button>
                <button>contact me</button>
            </motion.div>
            <motion.img variants={textveriants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        <motion.div className="slidingtextcontainer" 
         initial={{
            x: 0 ,
        }}
         animate={{x:"-220%"}}
         transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20 ,
            

        }}
         >
            writer content creator influencer
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png"/>
        </div>
      
        </div>
    </div>
  )
}

export default Hero
