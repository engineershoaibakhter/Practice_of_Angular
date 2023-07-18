import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  
  users=['Shoaib','Akhter','Qadri'];
  userDetails=[
    {id:1,name:"Shoaib",email:"Shoaib@gmail.com"},
    {id:2,name:"Akhter",email:"Akhter@gmail.com"},
    {id:3,name:"Qadri",email:"Qadri@gmail.com"},
  ]

}
