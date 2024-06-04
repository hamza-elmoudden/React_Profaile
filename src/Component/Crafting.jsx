import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown,faCode,faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { motion,useInView,useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


export const Crafting = ({navup}) => {
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
  return (
    <>
        <section className="py-20 container mx-auto z-20 relative">
            <div className="flex flex-col items-center gap-32 overflow-hidden py-10"> 
                <div className="w-1/2 flex flex-col gap-4">
                    <h2 className="text-2xl uppercase font-bold text-center">My service</h2>
                    <h2 className="text-5xl uppercase font-bold  text-center" >Crafting stories thorough design and innovation</h2>
                </div>
                <div className="flex gap-28 items-center justify-center flex-wrap md:flex-row flex-col" ref={crad}>
                    <motion.div variants={{start:{bottom:-1000},end:{bottom:20}}} initial="start" transition={{duration:0.8,delay: 0.2, ease: "easeInOut"}} animate={mainControls}   className="wfull md:w-[35rem] w-full py-20 px-16 border border-spacing-1  rounded-lg hover:shadow-lg hover:shadow-white cursor-pointer relative">
                        <div className=" text-8xl text-blue-400 absolute top-[-5rem] right-1/2 translate-x-1/2">
                            <FontAwesomeIcon icon={faCrown} />
                        </div>
                        <div className="space-y-8 text-center">
                            <h3 className="text-4xl font-bold">Website Design</h3>
                            <h3 className="text-xl uppercase opacity-65 line-clamp-6">We pride ourselves on delivering a unique experience to our users through the design of seamless and modern websites, where we combine creativity and interaction to offer you a responsive and user-friendly experience. We work to provide locations that suit your needs, focusing on aesthetic details and modern technologies to ensure that your browsing experience is incomparable</h3>
                        </div>
                    </motion.div>
                    <motion.div variants={{start:{bottom:-1000},end:{bottom:20}}} initial="start" transition={{duration:0.8,delay: 0.6, ease: "easeInOut"}} animate={mainControls} className="wfull md:w-[35rem] w-full py-20 px-16 border border-spacing-1 relative rounded-lg hover:shadow-lg hover:shadow-white cursor-pointer">
                        <div className=" text-8xl text-blue-400 absolute top-[-5rem] right-1/2 translate-x-1/2">
                            <FontAwesomeIcon icon={faCode} />
                        </div>
                        <div className="space-y-8 text-center">
                            <h3 className="text-4xl font-bold">Apps Development</h3>
                            <h3 className="text-xl uppercase opacity-65 line-clamp-6">We focus on developing applications with the latest technologies and creative concepts to meet your needs and achieve your goals efficiently. Using our technical skills and extensive experience, we build sophisticated and seamless applications that provide amazing user experiences. Whether you're looking for apps for business, entertainment or any other field, we're here to transform your vision into a digital reality that inspires and enriches everyone.</h3>
                        </div>
                    </motion.div>
                </div>
                </div>
                <div className="fixed bottom-0 right-0 md:right-10 transform -translate-y-1/2 z-30 p-8" >
                        <FontAwesomeIcon  className=" text-4xl p-5 border border-spacing-1 rounded-full hover:bg-blue-600 cursor-pointer" icon={faHandPointUp} onClick={()=>navup.current.scrollIntoView({ behavior: 'smooth'})} />
                </div>
        </section>
    </>
  )
}
