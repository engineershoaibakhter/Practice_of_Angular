import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

user=undefined
getData(data){
  this.user=data
  console.log("data: ",data)
  for(let item of data){
  console.log("data: ",item.name)
  }
}
}
