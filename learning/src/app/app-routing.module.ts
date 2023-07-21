import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {UserComponent} from './user/user.component';
import {NopageComponent} from './nopage/nopage.component'
import {AboutmeComponent} from './aboutme/aboutme.component'


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent,
    children:[
      {path:'me',component:AboutmeComponent}
    ]
  },
  {
    path:'user/:id',
    component:UserComponent,
  },
  {
    path:'**',
    component:NopageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
