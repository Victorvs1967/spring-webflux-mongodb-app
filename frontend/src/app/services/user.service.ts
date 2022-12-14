import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(environment.backendUrl
      .concat(environment.apiUrl)
      .concat(environment.usersUrl)
    );
  }
}
