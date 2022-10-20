import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  isLogin: Observable<boolean> | undefined;

  constructor(
    private auth: AuthService,
    private postService: PostService,
  ) {
    // this.isLogin = this.auth.getToken() ? true : false;
    this.isLogin = this.auth.isLoggedIn;
  }

  ngOnInit(): void {
  }

  createPost() : void {
    this.postService.openDialog();
  }

}
