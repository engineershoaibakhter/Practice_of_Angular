import { Component,NgModule } from '@angular/core';
import { FilterComponent } from '../filter/filter.component'; // Adjust the path accordingly


interface Course {
  name:string;
  price:number;
}



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})



export class CourseComponent {
 
courses:Course[]=[
  {name:"PST",price:20},
  {name:"Chemistry",price:30},
  {name:"Physics",price:30},
  {name:"Physics",price:20},
  {name:"Computer",price:20},
  {name:"Computer",price:20}
]

getPriceOf20(){
  return this.courses.filter(course=>course.price===20).length;
}
getPriceOf30(){
  return this.courses.filter(course=>course.price===30).length;
}

}
