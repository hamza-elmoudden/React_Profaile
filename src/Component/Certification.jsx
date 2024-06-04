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
    <section className="py-32 bg-[#09101a]" ref={certifi}>
        <div className="container mx-auto flex flex-col gap-16" ref={crad}>
            <div className="text-center">
                <h1 className="text-5xl uppercase font-bold">My <span className="text-blue-600">Certification</span><span> {certification.length}</span></h1>
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
                                      <div key={certi._id} className="wfull md:min-w-1/3 h-[15rem] duration-500 group overflow-hidden relative  bg-neutral-800 text-neutral-50 flex flex-col justify-around px-5 rounded-xl" >
                                          <div
                                              className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
                                          ></div>
                                          <div
                                              className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
                                          ></div>
                                          <div
                                              className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
                                          ></div>
                                          <div
                                              className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
                                          ></div>
                                          <div className="z-10 flex flex-col justify-evenly w-full h-full">
                                              <span className="text-3xl font-bold capitalize">{certification ? certi.title : "certification"}</span>
                                              <button
                                                  className="hover:bg-neutral-200 bg-neutral-50 rounded text-blue-800 font-extrabold w-full p-3 text-xl uppercase"
                                              >
                                                  {certification ? certi.company : "Cousera"}
                                              </button>
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


