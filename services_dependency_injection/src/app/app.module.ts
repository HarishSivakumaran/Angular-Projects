import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { OutputListComponent } from './output-list/output-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    OutputListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
