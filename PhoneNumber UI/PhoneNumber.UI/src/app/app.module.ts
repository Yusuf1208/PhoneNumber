import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsListComponent } from './components/persons/persons-list/persons-list.component';
import { AddPersonComponent } from './components/persons/add-person/add-person.component';
import { FormsModule } from '@angular/forms';
import { EditPersonComponent } from './components/persons/edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent,
    AddPersonComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
