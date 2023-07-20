import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
data:any=10;
random(){
  this.data=Math.floor(Math.random()*10);
}
  

  
}
