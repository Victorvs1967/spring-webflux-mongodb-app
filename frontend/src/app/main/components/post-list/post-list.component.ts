import { Component, OnInit } from '@angular/core';
import { DataSources } from 'src/app/models/data-source';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  displayedColumns: string[] = [
    'title',
    'author',
    'image',
    'onCreate',
    'content',
  ];

  datasource: any;

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(posts => {
      this.datasource = new DataSources([ ...posts ]);
      console.log(this.datasource);
    });
  }

  ngOnInit(): void {
  }
}
