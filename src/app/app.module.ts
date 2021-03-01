import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { Datatext } from './models/datatext'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DatastrService } from './services/datastr.service'
import { AppRoutingModule } from './app-routing.module'
import { from } from 'rxjs';
import { ViewComponent } from './view/view.component';
import { TranslComponent } from './transl/transl.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ViewComponent,
    TranslComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [
    DatastrService,
    Datatext
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
