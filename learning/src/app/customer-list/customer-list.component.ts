import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
selectedCustomer:any;
customers:Customer[]=[
  {customerNo:1,firstName:"Shoaib"},
  {customerNo:2,firstName:"Akhter"},

]

}
