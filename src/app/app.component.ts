import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-kc-selectbox';
  code1 = `
    <ngx-selectbox [placeholder]="'Sort by'">
      <div class="items">
        <label class="custom-input">Ascending
          <input type="radio" name="set_3" value="ASC">
          <span class="checkmark"></span>
        </label>
        <label class="custom-input">Descending
          <input type="radio" name="set_3" value="DESC">
          <span class="checkmark"></span>
        </label>
      </div>
    </ngx-selectbox>
  `;
  constructor() {

  }
}
