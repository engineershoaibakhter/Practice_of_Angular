import { DataService } from '../data.service';
import { Component,EventEmitter,Input ,Output} from '@angular/core';


@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {
  @Output() messageEvent=new EventEmitter<string>();
  
  sendMessage(){
    this.messageEvent.emit("Data is sent to App Component");
  } 

}
