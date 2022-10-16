import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string | undefined;

  get isLoggedIn(): Observable<boolean> {
    this.loggedIn.next(this.onLogin());
    return this.loggedIn.asObservable();
  }

  private setToken(token: string) {
    this.token = JSON.parse(JSON.stringify(token)).response;
    sessionStorage.setItem('token', this.token ? this.token : '');
  }

  private clearToken() {
    sessionStorage.removeItem('token');
  }

  private onLogin(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  constructor(private http: HttpClient) { }

  login(userInfo: { username: string, password: string }): Observable<any | boolean> {
    return this.http.post(environment.backendUrl.concat(environment.authUrl).concat('/login'), userInfo)
      .pipe(map((token: any) => {
        if (userInfo.username !== '' && userInfo.password !== '') {
          this.clearToken();
          this.setToken(token);
          this.loggedIn.next(true);
          return of(true);
        }
        this.loggedIn.next(false);
        return throwError(() => new Error('Wrong login...'));
      }))
  }

  signup(user: User): Observable<any | boolean> {
    return this.http.post(environment.backendUrl.concat(environment.authUrl).concat('/signup'), user);
  }

  logout(param = true): Observable<any | boolean> {
    if (param) {
      this.clearToken();
      this.loggedIn.next(false);
      setTimeout(() => {}, 500);
      return of(true);
    }
    return of(false);
  }
}