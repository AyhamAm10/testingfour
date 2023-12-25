import  { Suspense, useRef } from 'react'
import "./protfolio.scss"
import {motion , useScroll , useSpring, useTransform} from 'framer-motion'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";



const items = [
    {
        id : 1,
        title : "react developer " , 
        img : "/slider1.png" , 
        desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    }
    ,
    {
      id : 2,
      title : " graphic design"  , 
      img : "/slider2.png" , 
      desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id : 3,
      title : "transcript" , 
      img : "/slider3.png" , 
      desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id : 4,
      title : "larevel " , 
      img : "/slider4.png" , 
      desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      
  }
];

const variants = {
  initialtext:{
    scale : 0.5,
      opacity: 0
  },
  initialimg:{
    scale : 0.5,
    opacity: 0
},
  animate:{
    scale : 1,
      opacity:1,
      transition:{
          duration: 1,
          stoggerChildren : 0.1
      }
  }
}

const Singel = ({item}) =>{

  // const ref = useRef();
  // const {scrollyProgress} = useScroll({
  //   target : ref 
  // });

  // const y = useTransform(scrollyProgress, [0,1],[-300,300])

  return(
    <motion.section variants={variants}   >
      <motion.div  className="container singel" >
        <motion.div variants={variants} initial="initialtext" whileInView="animate" className="textcontainer" onScroll={(e)=>{e.target.y}}>

          <h1>{item.title}</h1>
          <div className="whatewedo">
            <h2>whate we do</h2>
            <p>{item.desc}</p>
            <button>learn more</button>
          </div>
        </motion.div>
        <motion.div  className="right" variants={variants} initial="initialimg" whileInView="animate" >
            {/* canvas */}
                <Canvas>
                <Suspense fallback={null}>
                  <OrbitControls enableZoom={false} />
                  <ambientLight intensity={1} />
                  <directionalLight position={[3, 2, 1]} />
                  <Sphere args={[1, 100, 200]} scale={3}>
                    <MeshDistortMaterial
                      color="#3d1c56"
                    
                      attach="material"
                      distort={0.5}
                      speed={2}
                    />
                  </Sphere>
                </Suspense>
              </Canvas>
            {/* canvas */}
            <img src={item.img} width="325px" height="325px" />
        </motion.div>
       
      </motion.div>
    </motion.section>
  )
}

const Protfolio = () => {
  const ref = useRef()
  const {scrollyProgress} = useScroll({target : ref , offset : [ "start start" , "end end"]});

  const scaleX = useSpring(scrollyProgress , {
    stiffness: 100,
    damping : 30,
  })

  return (
    <div className='protfolio' ref={ref} >
      <div className="progress">
        <h1>featured works</h1>
        <motion.div  className="progressBar" style={{scaleX}}>

        </motion.div>
      </div>
      {
        items.map((item) =><Singel item={item} key={item.id} />)
      }
    </div>
  )
}

export default Protfolio
