import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  @Output() parentComponents:EventEmitter<any>=new EventEmitter()
data=[
      {name:"Shoaib",age:14},
      {name:"Shoaib Akhter",age:18}
    ]
  ngOnInit(): void {
    
    this.parentComponents.emit(this.data)
  }

}
