import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('dobInput') dateofBirth: any;
  @ViewChild('ageInput') age: any ;
  @ViewChild(DemoComponent,{static:true}) demoComp:any;
  calculateAge(){
    let birthAge=new Date(this.dateofBirth.nativeElement.value).getFullYear();
    let currentYear=new Date().getFullYear();
    let age=currentYear-birthAge;
    this.age.nativeElement.value=age;
  }
}
