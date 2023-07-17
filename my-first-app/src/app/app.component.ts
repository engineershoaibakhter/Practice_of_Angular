import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`h1{background-color:red}`] 
})
export class AppComponent {
  title = 'Shoaib';
  data:number=5;
}
