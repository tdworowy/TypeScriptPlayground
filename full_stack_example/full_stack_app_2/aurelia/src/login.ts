import {HttpClient} from 'aurelia-http-client'

export class Login {
    header = "Log in."
    userName = ""
    password = ""

    onsubmit() {
        var postMessage = {
            userName: this.userName,
            password: this.password
        }
        let client = new HttpClient()
        client.post("/login", postMessage)
            .then( (message) => {
                console.log(`POST response: ${message.response}`)})
            .catch((err)=>{
                console.log(`err.response: ${err.response}`)})
    }
}