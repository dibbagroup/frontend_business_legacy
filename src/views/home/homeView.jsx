import axios from "axios"
import { useEffect } from "react"
import { Header } from "../../components/header/header"

import "./homeView.scss"

export const HomeView = _ => {

    useEffect (()=>{
        axios.get("http://localhost:9090/events").then((res)=>{console.log(res.data)})
    },[])

    return (
        <main className="menu">
            <Header />

            <h1>TORNANDO SEU EVENTO INESQUECÍVEL</h1>
            
            {/* <Footer /> */}
        </main>
    )
}