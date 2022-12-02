import "./signInView.scss";
import { Button, FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
import AuthenticationService from "../../service/authentication_service";

export const SignInView = (_) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authService = new AuthenticationService(email, password);

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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
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
                setPassword(e.target.value);
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
            onClick={() => {
              authService.login();
            }}
          >
            Entrar
          </Button>

          <small>
            Não possui cadastro? <a href="/sign-up">Cadastre-se</a>{" "}
          </small>
          <small>
            Não possui cadastro? <a href="/">Esqueceu sua senha???</a>{" "}
          </small>
        </form>
      </div>
    </main>
  );
};
