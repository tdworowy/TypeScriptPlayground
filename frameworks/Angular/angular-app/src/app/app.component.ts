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
  onSelect(SelectedItem: ClikableItem) {
    alert(`App.onItemClicked, event.id: ${SelectedItem.id} - ${SelectedItem.displayName}`)
  }
}
