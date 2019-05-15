export class App {
  public message: string = 'Choose option:';
  items: ClikableItem [] =  [
    {id:1, displayName: "FirstElement"},
    {id:2, displayName: "SecondElement"},
    {id:3, displayName: "ThirdElement"},
  ]
  onItemClicked(event: ClikableItem) {
    alert(`App.onItemClicked, event.id: ${event.id} - ${event.displayName}`)
  }
}
export class ClikableItem {
  displayName: string
  id: number
}
