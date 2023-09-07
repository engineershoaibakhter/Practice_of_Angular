import { Component } from '@angular/core';
import {DataService} from './service/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  data:any='';
  
  constructor(private dataService:DataService){
    this.dataService.getDataFromInfo().subscribe((data)=>{
      this.data=data;

    })
  }

  print(){
    alert(this.data[0].firstName);
  }
}
