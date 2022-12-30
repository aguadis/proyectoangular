
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';

import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { ErrorComponent } from './error/error.component';




const routes: Routes = [
  {path: '', component:IntroComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard2', component:Dashboard2Component},
  {path:'**', component:ErrorComponent}
 
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })
export class AppRoutingModule { }
