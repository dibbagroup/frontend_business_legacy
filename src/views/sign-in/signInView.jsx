import "./signInView.scss"
import { Button, FloatingLabel } from "react-bootstrap"
import { Form } from "react-bootstrap"
import { Authentication } from "../../service/auth"
import { useState } from "react"

export const SignInView = _ => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <main className="login">
            <div className="container">
                <form id="form-login" method="POST" /* onSubmit={Validate} */>
                        <h1>Bem Vindo(a)!</h1>

                        <FloatingLabel
                        controlId="floatingInput"
                        label="E-mail ou CNPJ"
                        className="mb-3"
                        >
                            <Form.Control
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                            type="text"
                            placeholder="E-mail ou CNPJ"
                            id="name"
                            minLength={5}
                            maxLength={50}
                            required 
                            />
                        </FloatingLabel>

                        <FloatingLabel
                        controlId="floatingInput"
                        label="Senha"
                        className="mb-3"
                        >
                            <Form.Control
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="text"
                            placeholder="Senha"
                            id="password"
                            required 
                            />
                        </FloatingLabel>

                        <Button
                        variant={"dark"}
                        className="mb-3"
                        id="btn-signin"
                        onClick={() =>{Authentication(username, password)}}
                        >Entrar</Button>

                        <small>Não possui cadastro? <a href="/sign-up">Cadastre-se</a> </small>
                        <small>Não possui cadastro? <a href="/">Esqueceu sua senha???</a> </small>
                </form>
            </div>
        </main>
    )
}