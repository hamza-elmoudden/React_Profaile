import { useSelector } from "react-redux"
import { motion,useInView,useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const Skill = ({skill}) => {
    
    const crad = useRef()
    const isInView = useInView(crad,{once:false})
    const mainControls = useAnimation()
    const [scroll ,setscroll] = useState()

    window.addEventListener("scroll",()=>{
        setscroll(window.scrollY)
    })

    useEffect(()=>{
        if(isInView){
            mainControls.start("end")
            
        }else{
            mainControls.start("start")
        }

    },[scroll,isInView,mainControls])


    const skills = useSelector((state)=> state.skill[0])
    const teknologi = useSelector((state)=> state.teknologi[0])
    
  return (
    <>
    <section className="py-20 bg-black do" ref={skill}>
        <div  className="md:container w-[90%] mx-auto flex flex-col gap-14">
            <div className="text-center">
                <h3 className="text-3xl font-bold uppercase text-white">About my <span className="text-red-500">skill</span></h3>
            </div>
                <div className="flex gap-10  md:flex-row flex-col overflow-hidden" ref={crad}>
                    <motion.div animate={mainControls} variants={{start:{left:-1000},end:{left:0}}} initial="start" transition={{duration:0.8, ease: "easeInOut"}} className="md:w-1/2 w-full flex flex-col gap-16 relative">
                        
                      {
                        skills.map((skl,index)=>{
                            return(
                                <div key={index} className='w-full text-white font-bold'>
                                    <div className="flex py-5 justify-between text-xl font-bold ">
                                        <h3>{skl ? skl.title : "skill"}</h3>
                                        <h3 className="">{skl ? skl.number : "10"}%</h3>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-white">
                                        <div className={`h-full bg-red-600 rounded-full`} style={{width:`${skl ? skl.number : 60}%`}}></div>
                                    </div>
                                </div>
                            )
                        })
                      }
                    </motion.div>
                    <motion.div animate={mainControls} variants={{start:{right:-1000},end:{right:0}}} initial="start" transition={{duration:0.8, ease: "easeInOut"}} className="md:w-1/2 w-full flex flex-col gap-16 relative">
                    {
                        teknologi.map((skl,index)=>{
                            return(
                                <div key={index} className='w-full text-white font-bold'>
                                    <div className="flex py-5 justify-between text-xl font-bold">
                                        <h3>{skl ? skl.title : "skill"}</h3>
                                        <h3 className="">{skl ? skl.number : "10"}%</h3>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-white">
                                        <div className={`h-full bg-red-600 rounded-full`} style={{width:`${skl ? skl.number : 60}%`}} ></div>
                                    </div>
                                </div>
                            )
                        })
                      }
                        
                    </motion.div>
                </div>
        </div>
    </section>
    </>
  )
}


