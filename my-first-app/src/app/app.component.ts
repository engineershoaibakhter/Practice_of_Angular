import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title:string = 'Getting Input Value';
  displayValue:string="";
  count:number=0;

  show:boolean=false;

  name:string="Shoaib"

  color:string="redd";

  

  // getValue(val:string){
  //   this.displayValue= val;
  // }

  // onAlert(val:any){
  //   // alert(`My name is ${name} and My age is ${age}`);
  //   console.log(val)
  // }

   counter(value:string){
    value==="add"? this.count++ : this.count--;
   }

}
