import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslatorComponent } from '../translator/translator.component';
//import { DictionaryComponent } from './dictionary/dictionary.component';
//import { ConjugatorComponent } from './conjugator/conjugator.component';


const routes: Routes = [
  {path: '', redirectTo: '/translator', pathMatch: 'full'},
  {path: 'translator', component: TranslatorComponent},
  //{path: 'dictionary', component: DictionaryComponent},
  //{path: 'conjugator', component: ConjugatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

