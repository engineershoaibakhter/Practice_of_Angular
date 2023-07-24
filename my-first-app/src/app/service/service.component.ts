import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{

  userData:any;

  constructor(private userService:UserService){}

  ngOnInit():void{
  this.userService.userInfo().subscribe((data)=>{
    this.userData=data;
  })

 }

 getUserFormData(data:any){
  this.userService.saveUser(data).subscribe((result)=>{
console.warn(result);
  })
  console.log(data)
    }
}
