import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Swal from "sweetalert2"
import {client} from "../Sanity/Client"



export const SecContacte = ({navup}) => {

    const githup = ()=>{
        window.open('https://github.com/hamza-elmoudden' , '_blank')
    }

    const linkdin = ()=>{
        window.open('https://www.linkedin.com/in/hamza-elmouddane-08a140296/?originalSubdomain=ma' , '_blank')
    }

    const [forem,setforem] = useState({
        name:"",
        email:"",
        title:"",
        description:"",
    })

    function handelform(e){
        setforem({...forem,[e.target.name]:e.target.value})
    }
    
    const handelsubmit = async (e)=>{
        e.preventDefault()
        try {
    
          if(forem.name === "" || forem.title === "" || forem.email === "" || forem.description === ""){
              return null
          }
          
          client.create({
            _type:"contacte",
            name:forem.name,
            email:forem.email,
            title:forem.title,
            description:forem.description,
            
          })
    
          Swal.fire({
            title: 'Hi',
            text: `You Message send`,
            icon: 'success',
            confirmButtonText: 'OK'
          })
    
          setforem({
            name:"",
            email:"",
            title:"",
            description:"",
          })
    
        } catch (error) {
          console.log(`Error : \n ${error}`)
        }
      }

  return (
    <>
    <section ref={navup} className="pt-40 z-40 relative  bg-[#0d182b]" >
        <div className=' container mx-auto'>
            <div className="py-10 flex gap-10 justify-center">
                    <a className="cursor-pointer" href="#" onClick={githup}>
                        <FontAwesomeIcon className="text-6xl p-3 bg-green-400 rounded-full" icon={faGithub} />
                    </a>
                    <a className="cursor-pointer" href="#" onClick={linkdin}>
                        <FontAwesomeIcon className="text-6xl p-3 bg-blue-500 rounded-full" icon={faLinkedin} />
                    </a>
            </div>
            <div className="text-center">
                <h3 className="text-6xl uppercase font-bold">Contacte</h3>
            </div>
            <div className="py-10">
                <form action="" className="flex flex-col gap-10" onSubmit={handelsubmit}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                        <input placeholder="Name" name="name" value={forem.name} onChange={handelform} className="outline-none text-2xl text-black py-3 px-6 w-full rounded-lg" type="text" />
                        <input placeholder="Email" name="email" value={forem.email}  onChange={handelform} className="outline-none text-2xl text-black py-3 px-6 w-full rounded-lg" type="text" />
                    </div>
                    <div className="grid grid-cols-1">
                        <input placeholder="Title" name="title" value={forem.title}  onChange={handelform} className="outline-none text-2xl text-black py-3 px-6 w-full rounded-lg" type="text" />
                    </div>
                    <div className="grid grid-cols-1 ">
                        <input placeholder="Description" name='description' value={forem.description}  onChange={handelform} className="outline-none text-2xl text-black py-3 px-6 w-full rounded-lg h-[30rem]" type="text" />
                    </div>
                    <div className="flex justify-center">
                        <button className="text-2xl uppercase font-bold px-10 py-5 bg-blue-500 rounded-lg hover:text-green-500 hover:bg-white" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}
