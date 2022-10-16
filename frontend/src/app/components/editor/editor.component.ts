import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Editor, toDoc, Validators  } from 'ngx-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit, OnDestroy {
  editor: Editor;
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
