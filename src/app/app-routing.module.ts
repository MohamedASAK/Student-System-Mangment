import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './student/list/list.component';
import { ErrorComponent } from './error/error.component';
import { CreateComponent } from './student/create/create.component';
import { UpdateComponent } from './student/update/update.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"create",component:CreateComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"list",component:ListComponent},
  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
