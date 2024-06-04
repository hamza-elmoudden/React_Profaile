import { motion } from "framer-motion"
import { useTypewriter,Cursor } from 'react-simple-typewriter'

export const Section = ({navup}) => {
  const [text] = useTypewriter({
    words: [' ! Creative Web Developer ',' a passionate Creative Web Developer ',],
    loop: {},
  })
  




  return (
    <>
    <section ref={navup} className="secte min-h-[100vh]  flex items-center gap-10  md:flex-row flex-col pt-36 seimg px-10 py-10 relative z-40">
        <div className="wfull md:w-1/2 w-full flex items-center p-20 flex-col">
          <div>
            <motion.img animate={{width:"18rem",height:"18rem"}} transition={{duration:1,delay:0.9}} className="w-[0rem] h-[0rem]" src={require("../image/Animation - 1716896686567.gif")} alt="" />
          </div>
          <div className="space-y-10 overflow-hidden relative">
            <motion.h1 animate={{top:0 , opacity:1}} transition={{duration:0.8,delay:1.3}} className="text-4xl uppercase font-bold relative top-[-10rem] opacity-0 w-fit">
                Hi,Hamza <span>{text}</span>
                  <Cursor cursorColor='blue' cursorStyle="__" />
            </motion.h1>
            <div>
              <motion.p animate={{opacity:1}} transition={{duration:0.8,delay:1.8}} className="text-xl capitalize opacity-0">
              I'm a Developer web designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.div animate={{left:0}} transition={{duration:0.8,delay:1.9}} className="py-6 px-11 text-xl font-bold cursor-pointer hover:shadow-2xl hover:shadow-blue-900 rounded-lg uppercase bg-blue-500 md:w-fit w-full md:text-left text-center relative left-[80rem]">Download Cv</motion.div>
            </div>
          </div>
        </div>
        <div className="wfull md:w-1/2   h-[40rem] w-[40rem] p-8">
          <img className="w-full h-full rounded-xl" src={require("../image/User.jpg")}  alt="anime" />
        </div>
    </section>
    </>
  )
}
