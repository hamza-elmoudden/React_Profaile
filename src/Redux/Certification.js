import { createSlice } from "@reduxjs/toolkit"
import {client} from "../Sanity/Client"


const initialState = []

async function getCrtifictions(){
    const data =  await client.fetch(`
        *[_type == "crtifictions"]{
            _id,
            title,
            company,
        }
    `)
    initialState.push(data)
}

await getCrtifictions()

const crtifictions = createSlice({
    name:"crtifictions",
    initialState,
})


export default crtifictions.reducer