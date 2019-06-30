import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Select option:';
  isSideNavVisible = true
  showHideSideClicked() {
    if(this.isSideNavVisible) {
      document.getElementById('main').style.marginLeft = "0px"
      document.getElementById("mySidenav").style.width = "0px"
      this.isSideNavVisible = false
    } else {
      document.getElementById('main').style.marginLeft = "250px"
      document.getElementById("mySidenav").style.width = "250px"
      this.isSideNavVisible = true 
    }
    
  }
}
