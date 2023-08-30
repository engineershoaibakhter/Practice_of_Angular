import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
firstName:string='Shoaib';
secondName:string='Akhter';

getData(firstName:string,secondName:string){
this.firstName=firstName;
this.secondName=secondName;
}

}
