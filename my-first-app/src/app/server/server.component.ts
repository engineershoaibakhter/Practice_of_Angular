import { Component } from "@angular/core";

@Component({
    selector:"app-server",
    templateUrl:"./server.component.html",
})

export class ServerComponent{
    age:number=21;
    name:string='Shoaib';
    allowServer:boolean=false;
    serverCreationStatus:string="Server is not running";

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
}

