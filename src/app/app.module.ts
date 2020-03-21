import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PublickeyAngularModule } from 'projects/publickey-angular/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    PublickeyAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
