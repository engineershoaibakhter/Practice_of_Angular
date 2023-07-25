import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{
  formData: any = {}; 
  userData:any;

  constructor(private userService:UserService){}

  ngOnInit():void{}

 getUserFormData(){
  this.userService.saveUser(this.formData).subscribe((result)=>{
console.warn(result);
  },
  (error)=>{
    console.log(error);
  })
  
    }
  }