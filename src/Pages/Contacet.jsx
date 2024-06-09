import { Navbar } from '../Component/Navbar'
import { Crafting } from '../Component/Crafting'
import { Footer } from '../Component/Footer'
import { Skill } from '../Component/Skill'
import { Projects } from '../Component/Projects'
import { SecContacte } from '../Component/SecContacte'
import { Certification } from '../Component/Certification'
import { useEffect, useRef } from 'react'


export const Contacet = () => {
  const skill = useRef()
  const Certifi = useRef()
  const Project = useRef()
  const navup = useRef()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <>
      <Navbar nev={"contacte"} skill={skill} certifi={Certifi} project={Project}/>
      <SecContacte navup={navup}/>
      <div className="w-full h-2 bg-[#09101a]"></div>
      <Crafting navup={navup}/>
      <Skill skill={skill}/>
      <Projects project={Project}/>
      <Certification certifi={Certifi}/>
      <Footer/>
    </>
  )
}
