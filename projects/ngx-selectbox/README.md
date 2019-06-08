# ngx-kc-selectbox

DEMO: https://kastriotcunaku.github.io/ngx-kc-selectbox/

## Features

- Modern UI
- Easy to install and use
- Use your existing form elements, just wrap them with `<ngx-selectbox>` tag.
- Included search field

## Dependencies

| ngx-kc-selectbox | Angular |
| ---------------- | ------- |
| 1.0.0            | 5.x     |

## Install

```bash
npm install ngx-kc-selectbox --save
```

## Setup
Add NgxSelectboxModule to app NgModule

```typescript
import { CommonModule } from '@angular/common';

import { NgxSelectboxModule } from 'ngx-selectbox';

@NgModule({
  imports: [
    CommonModule,
    NgxSelectboxModule // NgxSelectboxModule added
  ],
  bootstrap: [App],
  declarations: [App]
})
class AppModule {}
```

## Use

```html
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
```
More examples can be found [here](https://kastriotcunaku.github.io/ngx-kc-selectbox/)