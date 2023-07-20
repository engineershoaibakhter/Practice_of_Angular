import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {

  // Simple Type
  data:number=20;
  getData(item:number | boolean){
    if(typeof item==="number"){
      return item*this.data;
    }
  } 

  // Object
  dataObj:{name:string,phone:number}={name:"shoaib",phone:213};
  getDataObj(item:{name:string,phone:number}){
    if(typeof item==="number"){
      return item*this.data;
    }
  } 


  // Array
  dataArray:string[]=['1','2'];
  getDataArray(item:number[]){
    if(typeof item==="number"){
      return item*this.data;
    }
  } 

}
