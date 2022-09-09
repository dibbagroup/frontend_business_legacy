import "./signUpView.scss";

export const SignUpView = _ => {

    return (
        <main className="cadastro">
            <form className="form-signup p-4" method="POST" action="http://127.0.0.1:8000/auth/register/">
                <h1 className="h3 mb-3 font-weight-normal text-center">Cadastrar-se</h1>

                <div class="input_flex">
                    <input type="text" className="form-control mt-2" placeholder="Nome" autofocus/>
                    <input type="text" className="form-control mt-2" placeholder="Sobrenome" />
                </div>

                <div class="input_flex">
                    <div className="input-group mt-2">
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" id="username" placeholder="Username" required/>
                    </div>
                    <input type="0" className="form-control mt-2" placeholder="N° telefone (Ex.: 55 48 9 9999-9999)"  maxLengt={17}/>
                </div>

                <div class="input_flex">
                    <input type="text" className="form-control mt-2" placeholder="Seu e-mail" required/>
                    <input type="email" id="mail" className="form-control mt-2" placeholder="E-mail emergêncial *Opcional"/>
                </div>

                <div className="input_flex">
                    <input type="text" className="form-control mt-2" placeholder="Instagram"/>
                    <input type="text" className="form-control mt-2" placeholder="Twitter"/>
                </div>

                <div className="input_flex">
                    <input type="text" className="form-control mt-2" placeholder="TikTok"/>
                    <input type="text" className="form-control mt-2" placeholder="Facebook"/>
                </div>

                <div className="input_flex">
                    <input type="password" className="form-control mt-2" placeholder="Password" id="passwd" required/>
                    <input type="password" className="form-control mt-2" placeholder="Password novamente" id="passwd" required/>
                </div>
                
                <button className="btn btn-lg btn-primary btn-block" type="submit" /* onClick={Validate} */>Cadastrar</button>
            </form>
        </main>
    )
}