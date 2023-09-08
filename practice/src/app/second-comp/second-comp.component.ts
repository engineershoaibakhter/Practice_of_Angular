import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent {
  inputText:any='';
  constructor(private dataService:DataService) {
    
  }

  ngOnInit(){
    this.dataService.eventvalue.subscribe((value)=>{
      this.inputText=value;
    })
  }
}
