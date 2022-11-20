import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TdfComponent } from './tdf/tdf.component';
import {FormsModule} from "@angular/forms";
import { StudentInformationComponent } from './student-information/student-information.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    StudentInformationComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [TdfComponent]
})
export class AppModule { }
