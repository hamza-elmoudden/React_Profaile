import { useState } from 'react';
import Swal from "sweetalert2"
import {client} from "../Sanity/Client"



export const SecContacte = ({contect}) => {


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
    <section  className="pt-40  relative  bg-black" ref={contect}>
      <div className="w-full h-[2px] bg-red-600"></div>
        <div className='md:container w-[90%] mx-auto pt-10'>
            <div className="text-center" >
                <h3 className="text-6xl uppercase font-bold text-red-500">Contacte</h3>
            </div>
            <div className="py-10">
                <form  className="flex flex-col gap-10 text-[#9e9e9e]" onSubmit={handelsubmit}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                        <input placeholder="Name" name="name" value={forem.name} onChange={handelform} className="outline-none text-2xl  py-3 px-6 w-full bg-[#131313]" type="text" />
                        <input placeholder="Email" name="email" value={forem.email}  onChange={handelform} className="outline-none text-2xl  py-3 px-6 w-full bg-[#131313]" type="text" />
                    </div>
                    <div className="grid grid-cols-1">
                        <input placeholder="Title" name="title" value={forem.title}  onChange={handelform} className="outline-none text-2xl py-3 px-6 w-full bg-[#131313]" type="text" />
                    </div>
                    <div className="grid grid-cols-1 ">
                        <textarea placeholder="Description" name='description' value={forem.description}  onChange={handelform} rows="10" id="content" className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#131313] leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="flex justify-center">
                        <button className="text-2xl uppercase font-bold px-10 py-5 text-white bg-red-500  hover:text-red-500 hover:bg-white" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

