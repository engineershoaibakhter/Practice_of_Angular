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
    setTimeout(()=>Observer.next("2"),5000);

    Observer.next('1');
    Observer.next('2');
    Observer.next('3');
  });

  ngOnInit() {
    //  this.myObservable.subscribe(next,error,complete)
    this.myObservable.subscribe((data) => {
      console.log(data);
    });
  }
}
