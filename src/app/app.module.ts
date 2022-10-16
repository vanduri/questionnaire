import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { QuestionnarieComponent } from './questionnarie/questionnarie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionnarieComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule
    ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
