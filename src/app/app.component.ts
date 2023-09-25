import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  users = []; 

  constructor(http: HttpClient){
    http.get<[User]>('https://jsonplaceholder.typicode.com/users').subscribe( res => {
        this.users = res;
    });
  }
}
