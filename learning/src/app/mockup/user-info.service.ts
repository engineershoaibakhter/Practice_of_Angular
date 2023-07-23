import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }
  users()
{
  return[
    {name:"Shoaib",email:"shoaib@gmail.com"},
    {name:"Akhter",email:"akhter@gmail.com"},
    {name:"Qadri",email:"qadri@gmail.com"},

  ]
}}
