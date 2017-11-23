import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { ExamplesRoutingModule } from './examples/example-routing.module';
import { ExamplesModule } from './examples/examples.module';

import { ExampleEditComponent } from './examples/example-edit/example-edit.component';
import { ExamplesService } from './examples/examples.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ExamplesRoutingModule,
    ExamplesModule
  ],
  providers: [
    AuthService,
    ExamplesService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
