import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './material-module';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';
import { RaportsComponent } from './raports/raports.component';
import { RouterModule, Routes } from '@angular/router';
import { DataHttpService } from './services/data-http.service';
import { RegistrationComponent } from './registration/registration.component';
import { UsersDetailsComponent } from './users-details/users-details.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'navigations', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'books', component: BooksComponent },
  { path: 'raports', component: RaportsComponent },
  { path: 'users-details', component: UsersDetailsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    UsersComponent,
    RaportsComponent,
    RegistrationComponent,
    UsersDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [DataHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
