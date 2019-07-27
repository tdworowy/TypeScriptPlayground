import {HttpClient} from 'aurelia-http-client';

interface IMenyItem {
  ButtonName: string
}

export class App {
  public message: string = 'Hello World!';
  menuItems: IMenyItem[] = []
  constructor(EventAgregator?) {
    let client = new HttpClient()

    client.get("/menuitems")
    .then((data)=>{
      console.log(`data: ${data.response}`)
      let jsonResponse = JSON.parse(data.response)
      this.menuItems = jsonResponse.menuItems
    })
  }
}
