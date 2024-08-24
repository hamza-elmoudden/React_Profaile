import { motion } from "framer-motion"
// import { useSelector } from "react-redux"
import { useTypewriter,Cursor } from 'react-simple-typewriter'



export const Section = ({navup}) => {
  const [text] = useTypewriter({
    words: [' ! Creative Web Developer ',' a passionate Creative Web Developer ',],
    loop: {},
  })
  
// const cv = useSelector(state => state.cv[0][0])


  const linkdin = ()=>{
    window.open('https://www.linkedin.com/in/hamza-elmouddane-08a140296/?originalSubdomain=ma' , '_blank')
  }

 
  return (
    <>
    <section ref={navup} className="secte min-h-[100vh]  flex items-center gap-10  md:flex-row flex-col pt-36 seimg px-10 py-10 relative z-40 w-full">
        <div className="md:w-1/2 w-full flex items-start md:items-center p-20 flex-col">
          <div className="md:space-y-10 space-y-5 overflow-hidden relative">
            <motion.h1 animate={{top:0 , opacity:1}} transition={{duration:0.8,delay:1.3}} className="md:text-4xl text-xl uppercase font-bold relative top-[-10rem] opacity-0 w-fit">
              HELLO MY NAME IS, <span className="text-red-500"> Hamza {text}</span>
                  <Cursor cursorColor='red' cursorStyle="__" />
            </motion.h1>
            <div>
              <motion.p animate={{opacity:0.8}} transition={{duration:0.8,delay:1.8}} className="md:text-xl text-sm capitalize opacity-0 line-clamp-5">
              I'm a Developer web designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.div animate={{left:0}} transition={{duration:0.8,delay:1.9}} className="md:py-6 md:px-11 px-6 py-3 md:text-xl text-sm font-bold cursor-pointer hover:shadow-2xl hover:shadow-blue-900 rounded-lg uppercase bg-red-500 md:w-fit w-full md:text-left text-center relative left-[80rem] hover:bg-white hover:text-red-500" onClick={linkdin}>Show linkdin</motion.div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}
