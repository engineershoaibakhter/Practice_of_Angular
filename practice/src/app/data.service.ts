import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url='assets/info.json';
  constructor(private http:HttpClient){
  }

  saveDataIntoJsonFile(data:any):Observable<any>{
  return  this.http.post<any>(this.url,data)
  }
}
