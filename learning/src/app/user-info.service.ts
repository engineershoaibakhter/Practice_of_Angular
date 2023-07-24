import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
private usersDataURL=`assets/users-data.json`;

  constructor(private http:HttpClient) { }

  getUsersData(): Observable<User[]> {
    return this.http.get<User[]>(this.usersDataURL);
  }
}
