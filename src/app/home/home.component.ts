import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section>
      <button class="btn btn-success" type="button" routerLink="/conjugator">Conjugator</button>&nbsp;&nbsp;&nbsp;
      <button class="btn btn-success" type="button" routerLink="/dictionary">Update Dictionary</button>&nbsp;&nbsp;&nbsp;
      <button class="btn btn-success" type="button" routerLink="/translator">Translator</button>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
