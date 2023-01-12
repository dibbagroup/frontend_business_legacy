import { doPost } from "./http";
import AuthenticationService from "./authentication_service";

export default class AccountService {
  constructor(account) {
    this.account = account;
  }

  create() {
    this.account = {
      firstName: this.account.firstName,
      lastName: this.account.lastName,
      username: this.account.username,
      phone: this.account.phone,
      emailAddress: this.account.emailAddres,
      password: this.account.password,
      role: "COMPANY"
    }

    let res = doPost("http://34.224.64.19:9090/users", this.account);

    if (typeof res === Number /* <- Error */){
      return "[!] ", res;
    }

    let authService = new AuthenticationService();
    authService.setToken(res.data.jwtToken);
  }

  login() {
    let res = this.genToken(this.email, this.password)

    if (typeof res === Error) return Error(res)

    window.location.href = "/home"
  }
}
