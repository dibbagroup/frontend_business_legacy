import axios from "axios"
import { useEffect } from "react"

export const HomeView = _ => {

    useEffect (()=>{
        axios.get("http://localhost:9090/events").then((res)=>{console.log(res.data)})
    },[])

    return (
        <main>
            <h1>Home</h1>
        </main>
    )
}