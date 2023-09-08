import { Component, OnInit } from '@angular/core';
import { Observable, Observer,of,from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  // myObservable = new Observable((Observer) => {
  //   console.log('Observer');
  //   setTimeout(()=>Observer.next("1"),1000);
  //   setTimeout(()=>Observer.next("2"),2000);
  //   // setTimeout(()=>Observer.error(new Error('Something went wrong')),3000);
  //   setTimeout(()=>Observer.next("4"),4000);
  //   setTimeout(()=>Observer.next("5"),5000);
  //   setTimeout(()=>Observer.complete(),6000);
  //   setTimeout(()=>Observer.next("7"),7000);
  // });

  // using create() operator 
  // myObservable=Observable.create((Observer:any)=>{
  //  console.log('Observer');
  //   setTimeout(()=>Observer.next("1"),1000);
  //   setTimeout(()=>Observer.next("2"),2000);
  //   setTimeout(()=>Observer.error(new Error('Something went wrong')),3000);
  //   setTimeout(()=>Observer.next("4"),4000);
  //   setTimeout(()=>Observer.next("5"),5000);
  //   setTimeout(()=>Observer.complete(),6000);
  //   setTimeout(()=>Observer.next("7"),7000);
  // })

  array1:string[]=['Shoaib','Akhter'];
  array2:number[]=[1,2,3];

  myObservable= of(this.array1,this.array2);
  // myObservable=from(this.array1)


  ngOnInit() {
    this.myObservable.subscribe((data:any) => {
      console.log(data);
    },(error:any)=>{
      alert(error.message);
    },()=>{
      alert('Completion')
    }
    );
  }
}
