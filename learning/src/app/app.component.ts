import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  @ViewChild('paragraph') myPara:ElementRef | undefined; 
  constructor(myPara:ElementRef){
       console.log("this is the paragraph", this.myPara);
  }
}
