import { Component } from '@angular/core';
import { UserInfoService } from './mockup/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user:any;
  constructor(private userData:UserInfoService){
console.log(userData.users());
this.user=userData.users();
  }

  
}

