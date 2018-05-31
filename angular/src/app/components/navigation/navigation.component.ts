import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/auth.service';
import { CookieService } from '../../services/cookie.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user: Object;
  numberofItems: number;

  constructor(
    private mySession: SessionService,
    private myCookies: CookieService
  ) { }

  logOut() {
    this.mySession.logout().subscribe();
  }

  ngOnInit() {
    this.myCookies.productsCookie
      .subscribe(
        res => {
          if (!Array.isArray(res)){
            console.log("empty products", this.myCookies.getCookie('browser__settings').length);
            this.numberofItems = this.myCookies.getCookie('browser__settings').length;}
          else
          console.log("with products", res.length);
            this.numberofItems = res.length;
        },
        err => console.log(err)
      )

    this.myCookies.userCookie
      .subscribe(
        res => {
          if (!res.username){
            this.user = this.myCookies.getCookie("browser__settings");
          }
          else{
            this.user = res;
          }
        },
        err => console.log(err)
      )
  }

}