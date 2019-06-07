import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSelectboxComponent } from './ngx-selectbox.component';

@NgModule({
  declarations: [NgxSelectboxComponent],
  imports: [
    FormsModule
  ],
  exports: [NgxSelectboxComponent]
})
export class NgxSelectboxModule { }
