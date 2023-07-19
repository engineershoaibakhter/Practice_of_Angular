import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  
  toggleTitle:string='Toggle Element';
  toggleBtnText:string='Click';
  display:boolean=false;

  toggleFun(){
this.display=!this.display;
  }
}
