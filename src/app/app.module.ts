import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { Datatext } from './models/datatext'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DatastrService } from './services/datastr.service'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [
    DatastrService,
    Datatext
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
