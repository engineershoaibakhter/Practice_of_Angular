import { Injectable,EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // eventvalue=new EventEmitter<string>();
  eventvalue=new Subject<string>();


  raisedData(data:string){
    // this.eventvalue.emit(data);
    this.eventvalue.next(data);

  }
  
  
}
