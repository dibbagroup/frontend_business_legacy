import { variables } from "../global/variables"
import { Authentication } from "./auth"
import {env} from "../data/env"
import axios from "axios";

export async function CreateEvent() {
    console.log("[*] Creating event")

    console.table(variables.eventBody)

    // Deve ser feito apenas no login
    console.log("[*] Running Authentication")
    Authentication()

    if (!variables.config.headers.Authorization) {
        console.log("[!] Request authorization is empty")
        return
    }

    axios
        .post(env.local.newEvent, variables.eventBody, variables.config)
        .then((res) => {
            console.log("[*] Success! ", res.data);
        })
        .catch((err) => {
            console.log("[!] Error trying to create event", err);
        });
}