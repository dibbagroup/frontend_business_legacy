import "./signInView.scss"

export const SignInView = _ => {

    return (
        <main className="login">
            <div className="container">
                <form id="form-login" method="POST" /* onSubmit={Validate} */>
                        <h1>Bem Vindo(a)!</h1>
                        <input type="text" id="inputEmail" placeholder="Email ou CNPJ" minLength={5} maxLength={50} required autofocus/>
                        <input type="password" id="inputPassword" placeholder="Senha" maxLength={30} required/>
                        <button className="btn btn-lg btn-block button-login" type="submit">Entrar</button>
                        <small>Não possui cadastro? <a href="/signup">Cadastre-se já!</a> </small>
                </form>
            </div>
        </main>
    )
}