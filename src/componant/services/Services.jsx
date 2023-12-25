import React from 'react'
import "./services.scss"
import {motion} from "framer-motion"

const variants = {
    initial:{
        x : -500,
        y: 100,
        opacity: 0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration: 1,
            stoggerChildren : 0.1
        }
    }
}


const Services = () => {
  return (
    <motion.div className='services' variants={variants}
    //  initial="initial"
    //   whileInView="animate"
       >
      <motion.div className='textContainer' variants={variants}>
        <p>
            i focus on helping your brand grow <br />
            and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer"variants={variants}>
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
                <b>unique</b>ideas
            </h1>
        </div>
        <div className="title">
            <h1>
                <b>for your </b>Business
            </h1>
            <button>what we do</button>
        </div>
      </motion.div>
      <motion.div className="listContainer"variants={variants}>
        <motion.div className="box" 
        whileHover={{background: "lightgray" , color: "black"}}
        >
            <h2>
                Branding
            </h2>
            <p>
            In web development, media queries are used to apply styles based on the characteristics of the device or viewport, such as screen width, height, and orientation. If you want to target small screens with a media query, you typically check for the maximum width of the screen.

            </p>
            <button>
                Go
            </button>
        </motion.div>
        <motion.div className="box" 
        whileHover={{background: "lightgray" , color: "black"}}
        >
            <h2>
                Branding
            </h2>
            <p>
            In web development, media queries are used to apply styles based on the characteristics of the device or viewport, such as screen width, height, and orientation. If you want to target small screens with a media query, you typically check for the maximum width of the screen.

            </p>
            <button>
                Go
            </button>
        </motion.div>
        <motion.div className="box" 
        whileHover={{background: "lightgray" , color: "black"}}
        >
            <h2>
                Branding
            </h2>
            <p>
            In web development, media queries are used to apply styles based on the characteristics of the device or viewport, such as screen width, height, and orientation. If you want to target small screens with a media query, you typically check for the maximum width of the screen.

            </p>
            <button>
                Go
            </button>
        </motion.div>
        <motion.div className="box" 
        whileHover={{background: "lightgray" , color: "black"}}
        >
            <h2>
                Branding
            </h2>
            <p>
            In web development, media queries are used to apply styles based on the characteristics of the device or viewport, such as screen width, height, and orientation. If you want to target small screens with a media query, you typically check for the maximum width of the screen.

            </p>
            <button>
                Go
            </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
