import { Router, ActivatedRoute,Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
type User={id:number,name:string};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{

    myUser:User=
    {
      id:1,
      name:'shoaib'
    };

    constructor(private router:Router,private activatedRoute:ActivatedRoute){}
 
 ngOnInit(){
  // this.myUser={
  //   id:this.activatedRoute.snapshot.params['id'],
  //   name:this.activatedRoute.snapshot.params['name']
  // }

  this.activatedRoute.params.subscribe((data:Params)=>{
this.myUser={
  id:data['id'],
name:data['name']
}
  })

  console.log(this.activatedRoute.snapshot.queryParams)
  console.log(this.activatedRoute.snapshot.fragment)

  this.activatedRoute.queryParams.subscribe((data)=>{
    console.log(data);
  });

  this.activatedRoute.fragment.subscribe((data)=>{
    console.log(data)
  })

 }

 giveQueryParams(){
  this.router.navigate(
  ['/contact',3,'qadri'],
  {
  queryParams:{page:4,search:'attari'},
  fragment:'loading'
  }
  )}
 
    onNavigateToAbout(){
    this.router.navigateByUrl('/about')
  }
}





  // navigateToHome(){
    // this.route.navigate(['about'])
    // this.route.navigateByUrl('');
    // this.route.navigate(['about'],{relativeTo:this.activatedRoute});
    // }
