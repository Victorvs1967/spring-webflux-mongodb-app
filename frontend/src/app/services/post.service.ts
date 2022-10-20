import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EditorComponent } from '../components/editor/editor.component';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post?: Post;

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      environment.backendUrl
      .concat(environment.apiUrl)
      .concat(environment.postsUrl)
    );
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(
      environment.backendUrl
      .concat(environment.apiUrl)
      .concat(environment.postsUrl),
      post
    );
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(EditorComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: Post) => {
      console.log('The dialog was closed');
      if (data) {
        this.post = data;
        this.addPost(this.post)
          .subscribe((post: Post) => console.log(post));              
      }
    });
  }
}
