import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service'
import {dataType} from './user'


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{
  
  

  constructor(private userService:UserService){}

  ngOnInit():void{}

  getData(){
  
    const data:dataType={
    name:"Shoaib",
    emailId:'shoaib@gmail.com',
    age:42,
    pakistani:true,
    }
    return data;
  }

  }