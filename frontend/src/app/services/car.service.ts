import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  public getCarsList(): Observable<Car[]> {
    return this.http.get<Car[]>(
      environment.backendUrl
      .concat(environment.apiUrl)
      .concat(environment.carsUrl)
    );
  }
}
