import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import "@angular/forms"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TranslatorComponent } from './translator/translator.component';
//import { DictionaryComponent } from './dictionary/dictionary.component';
//import { ConjugatorComponent } from './conjugator/conjugator.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TranslatorFormComponent } from './translator-form/translator-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TranslatorComponent,
    //DictionaryComponent,
    //ConjugatorComponent,
    TranslatorFormComponent
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
