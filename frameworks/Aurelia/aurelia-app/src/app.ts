import {ClickableItem} from "./ClickableItem"
export class App {
  public message: string = 'Choose option:';
  public currentElement: ClickableItem
  items: ClickableItem [] =  [
    {idValue:1, displayName: "FirstElement"},
    {idValue:2, displayName: "SecondElement"},
    {idValue:3, displayName: "ThirdElement"},
  ]
  constructor() {
    this.currentElement = {idValue: 0, displayName: 'none'}
  }
  onItemClicked(event: ClickableItem) {
    alert(`App.onItemClicked, event.idValue: ${event.idValue} - ${event.displayName}`)
  }
  onItemClick(event: ClickableItem) {
    this.currentElement = event
  }
}
