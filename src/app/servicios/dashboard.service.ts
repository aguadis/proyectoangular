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
  obtenerDatosDashboard() {
    this.sDashboard.obtenerDatosDashboard().subscribe((data: string) =>{
      console.log("Dashboard" + data);
      
      
        }, (error: any) => console.log(error));
      
  }
  url= 'http://localhost:8080/'

  constructor(private httpClient:HttpClient) { }

public list(): Observable<DashboardComponent[]> {
 return this.httpClient.get<any[]>(this.url + 'lista');
}

public getById(id: number):Observable<DashboardComponent>{
 return this.httpClient.get<DashboardComponent>(this.url + 'detail/${id}');
}

public save(dashboard: DashboardComponent):Observable<any>{
 return this.httpClient.post<any>(this.url + 'create', dashboard);
}

public update(id: number, dashboard: DashboardComponent):Observable<any>{
  return this.httpClient.put<any>(this.url + 'update/${id}', dashboard);
}

public delete(id: number):Observable<any>{
  return this.httpClient.delete<any>(this.url + 'delete/${id}');
}

}
