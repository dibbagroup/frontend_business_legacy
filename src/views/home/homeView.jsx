import axios from "axios"
import { useEffect } from "react"
import { Header } from "../../components/header/header"
import { Footer } from "../../components/footer/footer"

import "./homeView.scss"

export const HomeView = _ => {

    useEffect (()=>{
        axios.get("http://localhost:9090/events").then((res)=>{console.log(res.data)})
    },[])

    return (
        <main className="menu">

            <article className="header">
                <Header />
            </article>

            <article className="content">
                <h1>TORNANDO <br /> SEU <br /> EVENTO <br /> INESQUECÍVEL</h1>
            </article>

            <article className="transition-area">
                <h2>Blazing fast cloud developer environments with Codespaces</h2>
            </article>

            <article className="final-area">
                <Footer />
            </article>
        </main>
    )
}