import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { UsersComponent } from './components/users/users.component';
import { CarsComponent } from './components/cars/cars.component';
import { EditorComponent } from './components/editor/editor.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'post', component: EditorComponent },
    ],
  },
];

@NgModule({
  declarations: [
    MainComponent,
    UsersComponent,
    CarsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialUiModule,
  ]
})
export class MainModule { }
