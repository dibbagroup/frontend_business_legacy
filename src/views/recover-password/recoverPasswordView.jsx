import "./recoverPasswordView.scss";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export const RecoverPasswordView = _ => {

    const [email, setEmail] = useState("marcelo@uphive.com.br")

    function postEmail(){
        axios
        .post("http://34.224.64.19:9090/users/password/reset", {emailAddress: email})
        .then(({data}) =>{
            console.log(data)
        })
    }

    function recoverPassword(){
        console.log("eu sou lindo")
        postEmail()
    }

    return (
        <main>
            <h1>ESQUECEU SUA SENHA??????? EM???????</h1>

            <input type="text" placeholder="coloque seu email aqui" onChange={(e) => {setEmail(e.target.value)}} />

            <Button size="md" className="w-25 m-4" onClick={() => {recoverPassword()}}>CLIQUE AQUI</Button>
        </main>
    )
}