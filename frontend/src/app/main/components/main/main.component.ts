import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  isLogin: Observable<boolean> | undefined;

  constructor(private auth: AuthService) {
    // this.isLogin = this.auth.getToken() ? true : false;
    this.isLogin = this.auth.isLoggedIn;
  }

  ngOnInit(): void {
  }

}
