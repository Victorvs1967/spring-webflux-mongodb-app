import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar, Validators as EditorValidator } from 'ngx-editor';
import { Post } from 'src/app/models/post.model';

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

  constructor(private formBuilder: FormBuilder ) { 
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

  onEdit() {
    const post: Post = this.form.value;
    console.log(post);
    this.form.reset();
  }

}
