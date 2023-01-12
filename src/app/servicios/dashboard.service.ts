import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  sDashboard: any;
  dashboard: any;
  //obtenerDatosDashboard() {
    //this.sDashboard.obtenerDatosDashboard().subscribe((data: string) =>{
     // console.log("Dashboard" + data);
      
      
        //}, (error: any) => console.log(error));
      
  }
  //url= 'http://localhost:8080/'

  //constructor(private httpClient:HttpClient) { }


//}
