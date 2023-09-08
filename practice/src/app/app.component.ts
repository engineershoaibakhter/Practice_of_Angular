import { Component, OnInit } from '@angular/core';
import { Observable, Observer,of,from, map,filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  array2:number[]=[1,2,3];

  myObservable=from(this.array2).pipe(map((val)=>{
  return val+10;
  }),filter((val)=>{
    return (val>11);
  }))


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
