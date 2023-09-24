import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private route:Router,private activatedRoute:ActivatedRoute){

  }
  navigateToHome(){
    // this.route.navigate(['about'])
    // this.route.navigateByUrl('');
this.route.navigate(['about'],{relativeTo:this.activatedRoute});
  }
}
