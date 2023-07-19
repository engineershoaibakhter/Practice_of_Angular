import { Component } from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
    selector:"app-server",
    templateUrl:"./server.component.html",
})

export class ServerComponent{
    age:number=21;
    name:string='Shoaib';
    allowServer:boolean=false;
    serverCreationStatus:string="Server is not running";
    serverName:string="Test";

constructor(){
setTimeout(()=>{
    this.allowServer=true;
},2000)
}
     myBio() {
      return  this.name;
    }

    onCreateServer(){
        return (this.serverCreationStatus="Server is running");
    }
    onUpdateServerName(event:Event){
        this.serverName=(<HTMLInputElement>event.target).value;
    }
}

