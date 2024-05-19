import { inject } from "aurelia-dependency-injection";
import { HttpClient } from "aurelia-http-client";
import { EventAggregator } from "aurelia-event-aggregator";

@inject(EventAggregator)
export class Login {
  header = "Log in.";
  userName = "";
  password = "";
  ea: EventAggregator;
  constructor(EventAggregator: EventAggregator) {
    this.ea = EventAggregator;
  }
  onSubmit() {
    var postMessage = {
      userName: this.userName,
      password: this.password,
    };
    let client = new HttpClient();
    client
      .post("/login", postMessage)
      .then((message) => {
        console.log(`POST response: ${message.response}`);
        this.ea.publish("login_result", { success: true });
      })
      .catch((err) => {
        console.log(`err.response: ${err.response}`);
      });
  }
}
