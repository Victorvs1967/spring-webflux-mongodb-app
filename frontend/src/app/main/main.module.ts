import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { MainComponent } from './components/main/main.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { UsersComponent } from './components/users/users.component';
import { CarsComponent } from './components/cars/cars.component';
import { EditorComponent } from '../components/editor/editor.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'post', component: EditorComponent },
      { path: 'posts', component: PostListComponent },
    ],
  },
];

@NgModule({
  declarations: [
    MainComponent,
    UsersComponent,
    CarsComponent,
    PostListComponent,
    EditorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxEditorModule,
    ReactiveFormsModule,
    MaterialUiModule,
  ]
})
export class MainModule { }
