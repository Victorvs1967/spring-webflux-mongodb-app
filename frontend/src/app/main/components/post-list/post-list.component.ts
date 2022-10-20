import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(posts => console.log(posts))
  }

  ngOnInit(): void {
  }

}
