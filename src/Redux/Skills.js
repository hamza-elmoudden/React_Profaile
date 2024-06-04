import { createSlice } from "@reduxjs/toolkit"
import {client} from "../Sanity/Client"


const initialState = []

async function getSkills(){
    const data =  await client.fetch(`
        *[_type == "skills"]{
            _id,
            title,
            number,
        }

    `)
    initialState.push(data)
}

await getSkills()

const skills = createSlice({
    name:"skills",
    initialState,
})

export default skills.reducer