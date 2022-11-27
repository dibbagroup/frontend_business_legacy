import { variables } from "../global/variables"
import axios from "axios";

export async function Register(firstName, lastName, username, phone, emailAddres, password) {
    let body = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        phone: phone,
        emailAddress: emailAddres,
        password: password,
        role: "COMPANY"
    };

    await axios
        // .post("http://localhost:9090/v1/auth", body)
        // .post("http://ec2-34-224-64-19.compute-1.amazonaws.com:9090/v1/auth", body)
        .post("http://34.224.64.19:9090/users", body)
        .then((res) => {
            console.log(body)
            console.log("Usuario cadastrado!")
            let token = `Bearer ${res.data.jwtToken}`
            variables.config.headers.Authorization = token
            console.log(token)
        })

        .catch((err) => {
            console.log("[!] Error getting token ", err);
            console.log(body)
        });
}