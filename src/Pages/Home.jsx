import React, { useEffect, useRef } from 'react'
import { Navbar } from '../Component/Navbar'
import { Section } from '../Component/Section'
import { Crafting } from '../Component/Crafting'
import { Footer } from '../Component/Footer'
import { Skill } from '../Component/Skill'
import { Projects } from '../Component/Projects'
import { Certification } from '../Component/Certification'



export const Home = () => {
  const skill = useRef()
  const Certifi = useRef()
  const Project = useRef()
  const navup = useRef()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <Navbar skill={skill} certifi={Certifi} project={Project}/>
      <Section navup={navup}/>
      <Crafting navup={navup}/>
      <Skill skill={skill}/>
      <Projects project={Project}/>
      <Certification certifi={Certifi}/>
      <Footer/>
    </>
  )
}
