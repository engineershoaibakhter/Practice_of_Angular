
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component : AppComponent
  },
  {
    path:'first-comp',
    component:FirstCompComponent
  },
  {
    path:'second-comp/:id',
    component:SecondCompComponent
  },
  {
   path:'**',
   component:FirstCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
