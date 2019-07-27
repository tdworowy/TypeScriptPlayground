interface IMenyItem {
  ButtonName: string
}

export class App {
  public message: string = 'Hello World!';
  menuItems: IMenyItem[] = [
    {ButtonName: "About us"},
    {ButtonName: "Contact"}
  ]
}
