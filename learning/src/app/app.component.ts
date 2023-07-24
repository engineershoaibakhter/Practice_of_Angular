
import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';
import { UserInfoService } from './user-info.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  usersData:User[]=[];
  constructor(private userInfoService:UserInfoService){}

ngOnInit(): void {
    this.userInfoService.getUsersData().subscribe((users)=>{
      this.usersData=users;
    });
}
  
}

