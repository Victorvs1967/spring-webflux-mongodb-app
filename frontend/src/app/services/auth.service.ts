import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BehaviorSubject, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginComponent } from '../auth/components/login/login.component';
import { SignupComponent } from '../auth/components/signup/signup.component';
import { UserInfo } from '../models/user-info.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string | undefined;
  private loginUser?: UserInfo;
  private newUser?: User;

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

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
  ) { }

  login(userInfo: UserInfo): Observable<any | boolean> {
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

  loginDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: UserInfo) => {
      console.log('The dialog was closed');
      if (data) {
        this.loginUser = data;
        this.login(this.loginUser)
          .subscribe((user: UserInfo) => console.log(user));              
      }
    });
  }

  signupDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(SignupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: User) => {
      console.log('The dialog was closed');
      if (data) {
        this.newUser = data;
        this.signup(this.newUser)
          .subscribe((user:  User) => console.log(user));              
      }
    });
  }
}