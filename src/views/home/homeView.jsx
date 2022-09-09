import axios from "axios"
import { useEffect } from "react"

import "./homeView.scss"

export const HomeView = _ => {

    useEffect (()=>{
        axios.get("http://localhost:9090/events").then((res)=>{console.log(res.data)})
    },[])

    return (
        <main className="main-menu">
            <div id="main-menu-layer">

                {/* <Header /> */}
                
                <div id="secondary-menu">
                <div id="menu-profile">
                    <h3 className="text">Bem vindo! </h3>
                    <h1 className="text">Nome da empresa</h1>
                    <hr className="text" />
                    <p className="text">Eventos criados: 0</p>
                    <p className="text">Tickets vendidos: 0</p>
                </div>
                <div id="menu-events">
                    <div id="create-events">
                        <a href="/novo-evento">
                        <h2 id="text-create-event">Crie seu evento!<i class="fi fi-rr-edit botao"></i></h2>
                        </a>
                    </div>
                    <div id="my-events">
                        <a href="/controlPanel">
                        <h2 id="text-my-events">Veja seus eventos!<i class="fi fi-rr-chart-histogram botao"></i></h2>
                        </a>
                    </div>
                </div>
                </div>
            </div>

            {/* <Footer /> */}
        </main>
    )
}