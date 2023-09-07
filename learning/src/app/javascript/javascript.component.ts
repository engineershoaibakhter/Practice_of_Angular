import { Component } from '@angular/core';
import {EnrollService} from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {
  data:string='javascript';
showTitle(){
const enrollService=new EnrollService();
enrollService.alertData(this.data);
}
}
