
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path: '', component:IntroComponent},
  
  {path: 'dashboard', component:DashboardComponent, canActivate:[GuardGuard]},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path:'**', component:ErrorComponent}
 
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })
export class AppRoutingModule { }
