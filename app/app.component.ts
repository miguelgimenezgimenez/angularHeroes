import {Component} from '@angular/core';

export class mhero {
  name = 'miguel';
}

@Component({
  selector: "my-app",
  template: `
   <h2>{{title}}</h2>
   <a routerLink="/heroes">
   <h1>HEROES</h1></a>
   <router-outlet></router-outlet>
 `



})

export class AppComponent {
  title = 'Tour of Heroes';

}
