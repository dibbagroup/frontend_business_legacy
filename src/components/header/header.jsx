import "./header.scss"

export const Header = _ => {
    return(
        <main>

            <div className="logo-image">
                <h1>DIBBA</h1>
            </div>
            <ul>
                <li>Home</li>
                <li><a href="/event/new">Criar Evento</a></li>
                <li>Resultados</li>
                <li>Meus Eventos</li>
                <li>Dibba Costumer</li>
            </ul>
        </main>
    )
}