import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  apiUrl = 'http://localhost:5198/api/';
  constructor(private http: HttpClient) { }

   getCountrys(): Observable<any[]>
   {
    return this.http.get<any[]>(`${this.apiUrl}Country/GetCountry`);
   }

   addCity(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}City/AddCity`, post);
  }

  getCitys(): Observable<any[]>
   {
     return this.http.get<any[]>(`${this.apiUrl}City/GetCity`);
   }


   ConsultWeather(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Weather/AddWeather`, post);
  }

  GetWeather(CityID:number): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.apiUrl}Weather/GetWeather?CityID=`+CityID);
  }

   
}
