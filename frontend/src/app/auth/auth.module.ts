import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
];

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialUiModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
