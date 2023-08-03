import { Component} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  message:string='Hello, this is a message';
private subscription:Subscription;

constructor(private myService:MyService){
  this.myService.getData().subscribe((data)=>{
    console.log(data)
  })
}
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
