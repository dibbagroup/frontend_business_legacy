import {doPost} from "./http"

export default class AuthenticationService {
  constructor(email, password, token) {
    this.email = email;
    this.password = password;
    this.token = token;
  }

  genToken(email, password) {
    let res = doPost("http://34.224.64.19:9090/v1/auth", {
      email: this.email,
      password: this.password,
    });

    if (typeof res === Error) return Error("[!] ", res);

    sessionStorage.setItem("btk", `Bearer ${res.data.jwtToken}`);
    return sessionStorage.getItem("btk");
  }

  getToken() {
    return sessionStorage.getItem("btk");
  }

  setToken(token) {
    this.token = token
    return sessionStorage.setItem("btk", `Bearer ${token}`);
  }
}
