import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  name="Shoaib";
  getName(){
    return this.name +" Akhter"
  }
  obj={
    firstName:"Shoaib",
    lastName:"Akhter",
    age:17
  }
  bio=['shoaib','akhter',17]
  num1=10
  num2=20
}
