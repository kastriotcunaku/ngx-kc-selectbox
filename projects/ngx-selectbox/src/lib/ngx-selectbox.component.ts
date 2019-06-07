import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { template, style } from './ngx-selectbox.component.html';

@Component({
  selector: 'ngx-selectbox',
  template: template + '',
  styles: [style + '']
})
export class NgxSelectboxComponent implements OnInit {

  open = false;

  // tslint:disable-next-line:no-input-rename
  @Input('placeholder') placeholder: string;
  // tslint:disable-next-line:no-input-rename
  @Input('hideSearch') hideSearch: string;

  label: string;
  searchQuery: string;

  @ViewChild('wrapper', null) wrapper: ElementRef;
  @ViewChild('items', null) items: ElementRef;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.open = false;
    } else {
      this.updateLabel();
    }
  }

  constructor(private eRef: ElementRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.updateLabel();
    }, 1000);
  }

  updateLabel() {
    const items = Array.prototype.slice.call( this.items.nativeElement.children[0].children );
    // console.log(items.filter(x => x.children[0].checked));
    if (items.length > 0) {
      this.label = items.filter(x => x.children[0].checked).map(x => x.innerText.replace(/^\s+|\s+$/g, '')).join(', ');
    } else {
      this.label = null;
    }
  }

  search() {
    Array.prototype.slice.call(this.items.nativeElement.children[0].children).forEach(element => {
      if (element.innerText.toLowerCase().indexOf(this.searchQuery.toLowerCase()) === -1) {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    });
  }
}
