import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: 'users', component: MainComponent },
    ],
  },
];

@NgModule({
  declarations: [
    MainComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialUiModule,
  ]
})
export class MainModule { }
