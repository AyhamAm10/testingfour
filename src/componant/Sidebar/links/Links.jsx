import React from 'react'
import {motion} from 'framer-motion'
const variants = {
    open: {
        transition:{
            staggerGhildren:0.1,
        }
    },
    closed: {
        transition:{
            staggerGhildren:0.05,
            staggerDirection: 1
        }
    }
}
const itemsvariants = {
    open: {
        y:0,
        opacity : 1,
        transition:{
            delay : 0.3,
            deraction: 0.4
        }
    },
    closed: {
        y : 50 ,
        opacity : 0
    }
}
const Links = () => {

    const items =[
        "HomePage",
        "Services",
        "portfolio",
        "contact",
        "About"
    ];
  return (
    <motion.div className='links' variants={variants}>
      {
        items.map(item =>(
            <motion.a variants={itemsvariants} whileHover={{scale: 1.1}} whileTap={{scale: 1.1}} href={`#${item}`} key={item}>{item}</motion.a>
        ))
      }
    </motion.div>
  )
}

export default Links
