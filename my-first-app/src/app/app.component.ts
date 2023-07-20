import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 
  data:string="Shoaib Akhter";
  
  todayDay:string=Date();

  title:string='Advanced Angular';
  titleObj:{}={name:"Shoaib",age:54}
}
