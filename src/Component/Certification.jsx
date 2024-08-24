import React from 'react'
import { useSelector } from 'react-redux'
import { motion,useInView,useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Certification = ({certifi}) => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const crad = useRef()
    const isInView = useInView(crad,{once:false})
    const mainControls = useAnimation()



    useEffect(()=>{
        if(isInView){
            mainControls.start("end")
            
        }

    },[isInView,mainControls])



    const certification = useSelector((state)=> state.crtifictions[0])




  return (
    <>
    <section className="py-32 bg-black" ref={certifi}>
        <div className="container mx-auto flex flex-col gap-16" ref={crad}>
            <div className="text-center">
                <h1 className="text-5xl uppercase font-bold">My <span className="text-red-600">Certification</span><span> {certification.length}</span></h1>
            </div>
            <motion.div animate={mainControls} variants={{start:{left:-2000},end:{left:0}}} initial="start" transition={{duration:0.8, ease: "easeInOut"}} className="slider-container relative">
               <Carousel
               responsive={responsive}
               autoPlay={true} 
               autoPlaySpeed={3000} 
               className="w-full"
               itemClass="carousel-item-padding-10"
               >
                          {
                              certification.map((certi, index) => {
                                  return (
                                      <div key={certi._id} className="wfull md:min-w-1/3  duration-500 group overflow-hidden relative bg-black border border-spacing-8 border-red-500 text-neutral-50 flex flex-col justify-around rounded-xl hover:text-red-500" >
                                          <div className="w-full h-[25rem]">
                                            <img className='w-full h-full' src={require("../image/coursera.png")} alt={certi.title && "card"} />
                                          </div>
                                          <div className="w-full h-[7rem] py-6 text-center ">
                                            <div>
                                                <span className="text-3xl font-bold capitalize">{certification ? certi.title : "certification"}</span>
                                            </div>
                                          </div>
                                      </div>
                                  )
                              })
                          }
               </Carousel>
            </motion.div>
        </div>
    </section>
    </>
  )
}

