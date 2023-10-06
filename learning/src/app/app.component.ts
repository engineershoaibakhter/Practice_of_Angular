import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  // constructor(private activateRoute:ActivatedRoute){
  // }

  // ngOnInit() {
  //     this.activateRoute.fragment.subscribe((value)=>{
  //       console.log(value)
  //       this.jumpTo(value)
  //     })
  // }

  // jumpTo(section:any){
  //   document.getElementById(section)?.scrollIntoView({behavior:'smooth'})
  // }
}
