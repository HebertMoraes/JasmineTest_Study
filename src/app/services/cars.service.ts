import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Car } from '../entities/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  urlBase = "http://127.0.0.1:8080/"

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Car[]>(`${this.urlBase}/GetAll`, { responseType: 'json' }).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log("1");
        if (err.status === 498) {
          console.log("2");
          throw "Token inválido";
        } else {
          throw "Ops algo deu errado";
        }
      })
    ); 
  }
}
