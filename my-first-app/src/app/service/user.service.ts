import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'assets/user.json';

  constructor(private http:HttpClient) { }
  // userInfo(){
  //   return this.http.get(this.apiUrl);
  // }
  saveUser(data:any):Observable<any>{
    return this.http.post<any>(this.apiUrl,data);
  }
}
