import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor() { }
  alertData(title:string){
    alert(`The title is ${title}`);
  }
}
