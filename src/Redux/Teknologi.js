import { createSlice } from "@reduxjs/toolkit"
import {client} from "../Sanity/Client"


const initialState = []

async function getTeknologi(){
    const data =  await client.fetch(`
        *[_type == "teknologi"]{
            _id,
            title,
            number,
        }
    `)
    initialState.push(data)
}

await getTeknologi()

const teknologi = createSlice({
    name:"teknologi",
    initialState,
})

export default teknologi.reducer