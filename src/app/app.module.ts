import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPipe } from './AddPipe';
import { SortPipe } from './SortPipe';

@NgModule({
  declarations: [SortPipe, AddPipe, AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
