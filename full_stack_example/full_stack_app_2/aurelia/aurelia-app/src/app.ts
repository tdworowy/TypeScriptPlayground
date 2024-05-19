import { inject } from "aurelia-dependency-injection";
import { EventAggregator } from "aurelia-event-aggregator";
import { HttpClient } from "aurelia-http-client";
import _ = require("lodash");

interface IMenyItem {
  ButtonName: string;
}
@inject(EventAggregator)
export class App {
  public message: string = "Hello World!";
  menuItems: IMenyItem[] = [];
  ea: EventAggregator;
  isLoginVisible = true;
  constructor(EventAggregator?: EventAggregator) {
    this.ea = EventAggregator;
    _.bindAll(this, "loginResult");
    this.ea.subscribe("login_result", this.loginResult);

    let client = new HttpClient();
    client.get("/menuitems").then((data) => {
      console.log(`data: ${data.response}`);
      let jsonResponse = JSON.parse(data.response);
      this.menuItems = jsonResponse.menuItems;
    });
  }
  loginResult(response: { success: any }) {
    console.log(`App.loginResult(): ${response.success}`);
    this.isLoginVisible = false;
  }
}
