import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  isLogin: Observable<boolean> | undefined;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLogin = this.auth.isLoggedIn;
  }

  logout() {
    this.auth.logout();
    this.isLogin = this.auth.isLoggedIn;
    this.router.navigate(['']);
  }

}
