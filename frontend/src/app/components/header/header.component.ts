import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  isLogin: Observable<boolean> | undefined;

  constructor(
    private auth: AuthService, 
    private postService: PostService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLogin = this.auth.isLoggedIn;
  }
  
  createPost(): void {
    this.postService.openDialog();
  }

  login(): void {
    this.auth.loginDialog();
  }

  signUp(): void {
    this.auth.signupDialog();
  }

  logout() {
    this.auth.logout();
    this.isLogin = this.auth.isLoggedIn;
    this.router.navigate(['']);
  }
}
