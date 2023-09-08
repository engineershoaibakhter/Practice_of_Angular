import { Component } from '@angular/core';
import { DataService } from './data.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent{

  counterObservable=interval(1000);
  counterSub:any=0;
  subscribe(){
   this.counterSub=this.counterObservable.subscribe((value)=>{
    console.log(value)
   })
  }
  unsubscribe(){
  this.counterSub.unsubscribe();
  }


  
    
}
