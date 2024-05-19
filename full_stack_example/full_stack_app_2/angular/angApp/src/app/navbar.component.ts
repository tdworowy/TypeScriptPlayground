import { Component, Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from "rxjs/operators";
interface IButtonName {
  ButtonName: string;
}

@Component({
  selector: "navbar-component",
  templateUrl: "./navbar.component.html",
})
@Injectable()
export class NavbarComponent {
  menuItems: IButtonName[];

  constructor(private http: Http) {
    console.log("AppComponent constructor");
    this.http
      .get("/menuitems")
      .pipe(map((res: { text: () => void }) => res.text()))
      .subscribe(
        (data: any) => {
          let jsonResponse = JSON.parse(data);
          this.menuItems = jsonResponse.menuItems;
        },
        (err: any) => {
          console.log(`Error : ${err}`);
        },
        () => {
          console.log(`Data loaded`);
        }
      );
  }
}
