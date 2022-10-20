import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar, Validators as EditorValidator } from 'ngx-editor';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit, OnDestroy {
  form: UntypedFormGroup;
  editor: Editor;
  toolbar: Toolbar = [
    // default value
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['horizontal_rule', 'format_clear'],
  ];

  constructor(public dialogRef: MatDialogRef<EditorComponent>, @Inject(MAT_DIALOG_DATA) public post: Post, private formBuilder: FormBuilder, private postService: PostService) { 
    this.form = this.formBuilder.group({
      title: [ null, [ Validators.required ]],
      author: [ null, [ Validators.required ]],
      image: [ null, [] ],
      content: [ null, [ EditorValidator.required() ]],
    });
    this.editor = new Editor();
  }
  
  ngOnInit(): void {
    this.editor.commands
      .focus()
      .scrollIntoView()
      .exec();
  }
  
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }
  
  onSubmit() {
    const { title, author, image, content } = this.form.value;
    // const id = this.post ? this.post.id : '';

    const post: Post = {
      // id,
      title,
      author,
      image,
      content,
    };

    this.dialogRef.close(post);
  }

}
