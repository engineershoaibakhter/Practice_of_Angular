import { DataService } from '../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {
outputText:any='';
constructor(private dataService:DataService){

}
submit(){
this.dataService.raisedData(this.outputText);
}
}
