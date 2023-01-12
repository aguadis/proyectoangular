
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class IntroService {
  list: any;
  constructor(private httpClient: HttpClient) { }
}
  