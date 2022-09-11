import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { HomeComponent } from './components/home/home.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialUiModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
