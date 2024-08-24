import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram, faKaggle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';



export const Navbar = ({ skill, project, certifi, nev ,contect}) => {

const githup = ()=>{
      window.open('https://github.com/hamza-elmoudden' , '_blank')
}

const linkdin = ()=>{
      window.open('https://www.linkedin.com/in/hamza-elmouddane-08a140296/?originalSubdomain=ma' , '_blank')
}

const instgram = ()=>{
    window.open("https://www.instagram.com/hamza_elmouddane","_blank")
}

const kaggle = ()=>{
    window.open("https://www.kaggle.com/hamzaelmouddane","_blank")
}

const MoveNave = () => {
    const bar = document.querySelector(".navbar")
    bar.classList.toggle("movenav")
}


  return (
    <>
      <motion.section className="fixed w-full z-50  top-[-10rem] bg-black py-4 opacity-85" animate={{ top: 0 }} transition={{ duration: 0.6 }}>
        <div className="container mx-auto text-2xl">
          <nav className='flex justify-between items-center  md:gap-0 gap-6  md:flex-row flex-col'>
            <div>
              <div>
                <h2>Hamza</h2>
              </div>
            </div>
            <div className='flex items-center gap-16 flex-wrap'>
              <div className="cursor-pointer hover:text-red-500">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="cursor-pointer hover:text-red-500" onClick={linkdin}>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="cursor-pointer hover:text-red-500" onClick={instgram}>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="cursor-pointer hover:text-red-500" onClick={kaggle}>
                <FontAwesomeIcon icon={faKaggle} />
              </div>
              <div className="cursor-pointer hover:text-red-500" onClick={githup}>
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
            <div className="flex items-center justify-center cursor-pointer text-right" onClick={MoveNave}>
              <FontAwesomeIcon className=" list" icon={faBars} />
            </div>
          </nav>
        </div>
        <div className="h-[100vh] w-[30rem] bg-black absolute  right-[-100rem] navbar  list">
          <div className='pt-[8rem]'>
            <div className="flex gap-11 text-2xl items-center uppercase flex-col  justify-center">
              <Link to="/" className="cursor-pointer hover:text-red-500">Home</Link>
              <div className="cursor-pointer hover:text-red-500" onClick={() => certifi.current.scrollIntoView({ behavior: 'smooth' })}>Certification</div>
              <div className="cursor-pointer hover:text-red-500" onClick={() => skill.current.scrollIntoView({ behavior: 'smooth' })}>Skills</div>
              <div className="cursor-pointer hover:text-red-500" onClick={() => project.current.scrollIntoView({ behavior: 'smooth' })}>Projects</div>
              <div className="cursor-pointer hover:text-red-500" onClick={()=> contect.current.scrollIntoView({ behavior: 'smooth' })}>Contacet</div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}
