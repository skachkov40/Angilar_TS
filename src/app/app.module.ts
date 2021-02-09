import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewHeadComponent } from './new-head/new-head.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    NewHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
