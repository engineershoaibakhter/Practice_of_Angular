import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myObservable = new Observable((Observer) => {
    console.log('Observer');
    setTimeout(()=>Observer.next("1"),1000);
    setTimeout(()=>Observer.next("2"),2000);
    // setTimeout(()=>Observer.error(new Error('Something went wrong')),3000);
    setTimeout(()=>Observer.next("4"),4000);
    setTimeout(()=>Observer.next("5"),5000);
    setTimeout(()=>Observer.complete(),6000);
    setTimeout(()=>Observer.next("7"),7000);

   
  });

  ngOnInit() {
    //  this.myObservable.subscribe(next,error,complete)
    this.myObservable.subscribe((data) => {
      console.log(data);
    },(error)=>{
      alert(error);
    },()=>{
      alert('Completion')
    }
    );
  }
}
