import "./signUpView.scss";
import { Register } from "../../service/registration";
import { useState } from "react";

export const SignUpView = _ => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [emailAddres, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")

    return (
        <main className="cadastro">
            <form className="form-signup p-4" method="POST" action="http://127.0.0.1:8000/auth/register/">
                <h1 className="h3 mb-3 font-weight-normal text-center">Cadastrar-se</h1>

                <div class="input_flex">
                    <input type="text" className="form-control mt-2" placeholder="Nome" autofocus />
                    <input type="text" className="form-control mt-2" placeholder="Sobrenome" />
                </div>

                <div class="input_flex">
                    <div className="input-group mt-2">
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" id="username" placeholder="Username" required />
                    </div>
                    <input type="0" className="form-control mt-2" placeholder="N° telefone (Ex.: 55 48 9 9999-9999)" maxLengt={17} />
                </div>

                <div class="input_flex">
                    <input type="text" className="form-control mt-2" placeholder="Seu e-mail" required />
                    <input type="email" id="mail" className="form-control mt-2" placeholder="E-mail emergêncial *Opcional" />
                </div>

                <div className="input_flex">
                    <input type="text" className="form-control mt-2" placeholder="Instagram" />
                    <input type="text" className="form-control mt-2" placeholder="Twitter" />
                </div>

                <div className="input_flex">
                    <input type="text" className="form-control mt-2" placeholder="TikTok" />
                    <input type="text" className="form-control mt-2" placeholder="Facebook" />
                </div>

                <div className="input_flex">
                    <input type="password" className="form-control mt-2" placeholder="Password" id="passwd" required />
                    <input type="password" className="form-control mt-2" placeholder="Password novamente" id="passwd" required />
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit" /* onClick={Validate} */>Cadastrar</button>
            </form>

            <div /* onSubmit={Validate} */>
                <h1>Bem Vindo(a)!</h1>

                <label
                    label="Seu primeiro nome"
                    className="mb-3"
                >
                    <input
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                        type="text"
                        placeholder="Seu primeiro nome"
                        required
                    />
                </label>

                <label
                    label="Seu ultimo nome"
                    className="mb-3"
                >
                    <input
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                        type="text"
                        placeholder="Seu ultimo nome"
                        required
                    />
                </label>

                <label
                    label="Seu Username"
                    className="mb-3"
                >
                    <input
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                        type="text"
                        placeholder="Username"
                        required
                    />
                </label>

                <label
                    label="Seu número de telefone"
                    className="mb-3"
                >
                    <input
                        value={phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }}
                        type="text"
                        placeholder="Seu número de telefone"
                        required
                    />
                </label>

                <label
                    label="Seu endereço de email"
                    className="mb-3"
                >
                    <input
                        value={emailAddres}
                        onChange={(e) => {
                            setEmailAddress(e.target.value)
                        }}
                        type="text"
                        placeholder="Seu endereço de email"
                        required
                    />
                </label>

                <label
                    label="Sua Senha"
                    className="mb-3"
                >
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        type="text"
                        placeholder="Senha"
                        required
                    />
                </label>

                <button
                    variant={"dark"}
                    className="mb-3"
                    id="btn-signin"
                    onClick={() => { Register(firstName, lastName, username, phoneNumber, emailAddres, password) }}
                >Cadastrar</button>

                <small><a href="/sign-in">Já tem cadastro?</a></small>
            </div>
        </main>
    )
}