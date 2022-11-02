import {variables} from "../global/variables"
import axios from "axios";

export async function Authentication() {
    let body = {
        username: "mribas",
        password: "M@noel123"
    };

    await axios
    .post("http://localhost:9090/v1/auth", body)
    .then((res) => {
      let token = `Bearer ${res.data.jwtToken}`
      variables.config.headers.Authorization = token
      return
    })

    .catch((err) => {
      console.log("[!] Error getting token ", err);
      return
    });
}