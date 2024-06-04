import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';



export const Navbar = ({skill,project,certifi}) => {

  const MoveNave = ()=>{
    const bar = document.querySelector(".navbar")
          bar.classList.toggle("movenav")
  }

  return (
    <>
      <motion.section className="fixed w-full z-50 top-[-10rem]"  animate={{top:0}} transition={{duration:0.6}}>
        <div className=" container mx-auto bg-[#09101a] ">
          <nav className='flex justify-between items-center'>
            <div className="flex gap-8 items-center">
              <div className="w-24 h-24 bg-blue-500 flex items-center justify-center overflow-hidden">
                <motion.h3 animate={{fontSize:"6rem"}}  transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }} className="font-bold text-xs">H</motion.h3>
              </div>
              <Link to={"/"} className="text-4xl cursor-pointer hover:text-blue-400">Hamza</Link>
            </div>
            <div className="md:flex gap-16 text-2xl items-center uppercase flex-wrap justify-center hidden nav">
            <Link to="/" className="cursor-pointer hover:text-blue-400 hover:font-bold">Home</Link>
              <div className="cursor-pointer hover:text-blue-400 hover:font-bold" onClick={()=> certifi.current.scrollIntoView({ behavior: 'smooth'})}>Certification</div>
              <div className="cursor-pointer hover:text-blue-400 hover:font-bold" onClick={()=> skill.current.scrollIntoView({ behavior: 'smooth'})}>Skills</div>
              <div className="cursor-pointer hover:text-blue-400 hover:font-bold" onClick={()=> project.current.scrollIntoView({ behavior: 'smooth'})}>Projects</div>
              <Link to="/contacet" className="cursor-pointer hover:text-blue-400">Contacet</Link>
            </div>
            <div className="w-24 min-h-24 bg-blue-500 flex items-center justify-center cursor-pointer" onClick={MoveNave}>
              <FontAwesomeIcon className="text-5xl md:hidden block list" icon={faBars} />
            </div>
          </nav>
        </div>
        <div className="h-[100vh] w-[20rem] bg-[#09101a] absolute  right-[-100rem] navbar hidden list">
            <div className='pt-[8rem]'>
            <div className="flex gap-11 text-2xl items-center uppercase flex-col  justify-center">
            <Link to="/" className="cursor-pointer hover:text-blue-400">Home</Link>
              <div className="cursor-pointer hover:text-blue-400" onClick={()=> certifi.current.scrollIntoView({ behavior: 'smooth'})}>Certification</div>
              <div className="cursor-pointer hover:text-blue-400" onClick={()=> skill.current.scrollIntoView({ behavior: 'smooth'})}>Skills</div>
              <div className="cursor-pointer hover:text-blue-400" onClick={()=> project.current.scrollIntoView({ behavior: 'smooth'})}>Projects</div>
              <Link to="/contacet" className="cursor-pointer hover:text-blue-400">Contacet</Link>
            </div>
            </div>
        </div>
      </motion.section>
    </>
  )
}
