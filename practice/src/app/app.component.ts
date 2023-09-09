import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Ingredients } from './ingredients.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent{
   name:string="Shoaib";
   getData(data:string){
this.name=data;
   }
}
