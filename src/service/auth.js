import {variables} from "../global/variables"
import axios from "axios";

export async function Authentication() {
    let body = {
        username: "mcure",
        password: "12345678"
    };

    await axios
    // .post("http://localhost:9090/v1/auth", body)
    // .post("http://ec2-34-224-64-19.compute-1.amazonaws.com:9090/v1/auth", body)
    .post("http://34.224.64.19:9090/v1/auth", body)
    .then((res) => {
      let token = `Bearer ${res.data.jwtToken}`
      variables.config.headers.Authorization = token
      console.log(token)
    })

    .catch((err) => {
      console.log("[!] Error getting token ", err);
    });
}