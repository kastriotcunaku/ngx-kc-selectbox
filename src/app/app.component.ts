import { Component } from '@angular/core';
import { countries } from './countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-kc-selectbox';
  code2 = `
    <ngx-selectbox [placeholder]="'Sort by'" [hideSearch]="true">
      <div class="items">
        <label class="custom-input">Name
          <input type="radio" name="sort" value="Name" [(ngModel)]="sort">
          <span class="checkmark"></span>
        </label>
        <label class="custom-input">Type
          <input type="radio" name="sort" value="Type" [(ngModel)]="sort">
          <span class="checkmark"></span>
        </label>
        <label class="custom-input">Size
          <input type="radio" name="sort" value="Size" [(ngModel)]="sort">
          <span class="checkmark"></span>
        </label>
      </div>
    </ngx-selectbox>
  `;

  code1 = `
    <ngx-selectbox [placeholder]="'Select country'">
      <div class="items">
        <label class="custom-input" *ngFor="let country of countryList">{{ country.name }}
          <input type="checkbox" [name]="country.code" [value]="country.code" [(ngModel)]="country.checked"/>
          <span class="checkmark"></span>
        </label>
      </div>
    </ngx-selectbox>
  `;

  countryList: any[];
  sort: any;

  constructor() {
    this.countryList = countries.map(c => ({ name: c.name, code: c.code, checked: false }));
  }

  get selectedCountries() {
    return this.countryList
              .filter(opt => opt.checked)
              .map(opt => opt.name);
  }
}
