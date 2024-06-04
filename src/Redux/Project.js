import { createSlice } from "@reduxjs/toolkit"
import {client} from "../Sanity/Client"


const initialState = []

async function getProjects(){
    const data =  await client.fetch(`
        *[_type == "projecte"]{
            _id,
            title,
            description,
            view,
            code,
            mainImage,
        }
    `)
    initialState.push(data)
}

await getProjects()

const projects = createSlice({
    name:"projects",
    initialState,
})


export default projects.reducer