import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@NgModule({
  imports: [HomeComponent, RouterOutlet],
})

export class AppComponent {
  title = 'Dendremar Translator';
}
