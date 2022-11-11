import {variables} from "../global/variables"
import axios from "axios";

export async function Authentication(usernameForm, passwordForm) {
    let body = {
        username: usernameForm,
        password: passwordForm
    };

    await axios
    // .post("http://localhost:9090/v1/auth", body)
    // .post("http://ec2-34-224-64-19.compute-1.amazonaws.com:9090/v1/auth", body)
    .post("http://34.224.64.19:9090/v1/auth", body)
    .then((res) => {
      let token = `Bearer ${res.data.jwtToken}`
      variables.config.headers.Authorization = token
    })

    .catch((err) => {
      console.log("[!] Error getting token ", err);
    });
}