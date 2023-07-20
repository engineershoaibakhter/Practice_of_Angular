import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title:string="Todo List";
  list:any[]=[]
  addTask(item:any){
    console.log(item)
   this.list.push({id:this.list.length,name:item})
   console.log(this.list)
  }
  deleteItem(id:Number){
   this.list= this.list.filter(item=>item.id!==id)
  }
  

  
}
