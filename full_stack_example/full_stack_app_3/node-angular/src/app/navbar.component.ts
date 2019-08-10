import { Component, Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

interface IButtonName {
  ButtonName : string;
}

@Component( {
  moduleId : module.id,
  selector: 'navbar-component',
  templateUrl: './navbar.component.html'
})

@Injectable()
export class NavbarComponent {
  menuItems : IButtonName [];

  @Output() notify: EventEmitter<string> 
    = new EventEmitter<string>();

  constructor (private http: Http) {
    console.log('AppComponent constructor');
    this.http.get('/menuitems')
     .map(res => res.text())
     .subscribe(
      (data) => {
        let jsonResponse = JSON.parse(data);
        this.menuItems = jsonResponse.menuItems;
      },
      err => {
        console.log(`błąd : ${err}`);
      },
      () => {
        console.log(`dane pobrane`);
      }
    );
  }

  navClicked(item : IButtonName) {
    this.notify.emit(`${item.ButtonName}`);
  }

}
