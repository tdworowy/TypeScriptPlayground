import { Component } from '@angular/core';

export class ClikableItem {
  displayName: string
  id: number
 [key:string]: any;
}
let ClikableItemArray: ClikableItem[] = 
  [
      { id:1, displayName: "FirstElement" },
      { id:2, displayName: "SecondElement" },
      { id:3, displayName: "ThirdElement" },
  ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  items = ClikableItemArray
  selectedItem: ClikableItem
  constructor() {
    this.selectedItem = {id: 0, displayName: 'none'}
  }
  onSelect(selectedItem: ClikableItem) {
    this.selectedItem = selectedItem
    console.log(`onSelect: ${this.selectedItem.id}`) 
    //alert(`App.onItemClicked, event.id: ${SelectedItem.id} - ${SelectedItem.displayName}`)
  }
}
