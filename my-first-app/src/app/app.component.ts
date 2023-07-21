import { Component } from '@angular/core';
import { FormControl,FormGroup,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loginForm=new FormGroup({
    user:new FormControl('shoaib'),
    password:new FormControl('Akhter'),
  })
  loginUser(){
    console.log(this.loginForm.value);
  }
 

}
