import { Component } from "@angular/core";

@Component({
    selector:"app-server",
    templateUrl:"./server.component.html",
})

export class ServerComponent{
    age:number=21;
    name:string='Shoaib';

     myBio() {
      return  this.name;
    }
}

