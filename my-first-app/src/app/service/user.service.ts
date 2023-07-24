import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  userInfo(){
    return this.http.get('assets/user.json');
  }
  saveUser(data:any){
    return this.http.post('assets/user.json',data);
  }
}
