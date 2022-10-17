import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Editor, toDoc, Toolbar, Validators  } from 'ngx-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit, OnDestroy {
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
  form = new FormGroup({
    content: new FormControl(null, [ Validators.required() ]),
  });

  constructor() { 
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
    console.log(this.form.value);
  }

}
