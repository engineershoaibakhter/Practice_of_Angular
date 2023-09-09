import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent {
 constructor(private route:ActivatedRoute){
  console.log("The id is ",this.route.snapshot.paramMap.get('id'))
 }
}
