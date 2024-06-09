import { createSlice } from "@reduxjs/toolkit"
import {client} from "../Sanity/Client"


const initialState = []

async function getCv(){
    const data =  await client.fetch(`
        *[_type == "cv"]{
            fileCv
        }
    `)
    initialState.push(data)
}

await getCv()

const cv = createSlice({
    name:"cv",
    initialState,
})


export default cv.reducer