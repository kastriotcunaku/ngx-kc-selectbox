/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { template, style } from './ngx-selectbox.component.html';
export class NgxSelectboxComponent {
    /**
     * @param {?} eRef
     */
    constructor(eRef) {
        this.eRef = eRef;
        this.open = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.toggle(false);
        }
        else {
            this.updateLabel();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.updateLabel();
        }), 1000);
    }
    /**
     * @return {?}
     */
    updateLabel() {
        /** @type {?} */
        const items = Array.prototype.slice.call(this.items.nativeElement.children[0].children);
        // console.log(items.filter(x => x.children[0].checked));
        if (items.length > 0) {
            this.label = items.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.children[0].checked)).map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.innerText.replace(/^\s+|\s+$/g, ''))).join(', ');
        }
        else {
            this.label = null;
        }
    }
    /**
     * @param {?=} status
     * @return {?}
     */
    toggle(status) {
        this.open = typeof (status) !== 'undefined' ? status : !this.open;
        this.searchQuery = null;
        this.search();
    }
    /**
     * @return {?}
     */
    search() {
        Array.prototype.slice.call(this.items.nativeElement.children[0].children).forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (element.innerText.toLowerCase().indexOf(this.searchQuery ? this.searchQuery.toLowerCase() : '') === -1) {
                element.style.display = 'none';
            }
            else {
                element.style.display = 'block';
            }
        }));
    }
}
NgxSelectboxComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-selectbox',
                template: template + '',
                styles: [style + '']
            }] }
];
/** @nocollapse */
NgxSelectboxComponent.ctorParameters = () => [
    { type: ElementRef }
];
NgxSelectboxComponent.propDecorators = {
    placeholder: [{ type: Input, args: ['placeholder',] }],
    hideSearch: [{ type: Input, args: ['hideSearch',] }],
    wrapper: [{ type: ViewChild, args: ['wrapper', null,] }],
    items: [{ type: ViewChild, args: ['items', null,] }],
    clickout: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NgxSelectboxComponent.prototype.placeholder;
    /** @type {?} */
    NgxSelectboxComponent.prototype.hideSearch;
    /** @type {?} */
    NgxSelectboxComponent.prototype.open;
    /** @type {?} */
    NgxSelectboxComponent.prototype.label;
    /** @type {?} */
    NgxSelectboxComponent.prototype.searchQuery;
    /** @type {?} */
    NgxSelectboxComponent.prototype.wrapper;
    /** @type {?} */
    NgxSelectboxComponent.prototype.items;
    /**
     * @type {?}
     * @private
     */
    NgxSelectboxComponent.prototype.eRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNlbGVjdGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2VsZWN0Ym94LyIsInNvdXJjZXMiOlsibGliL25neC1zZWxlY3Rib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBUWpFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFzQmhDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFoQnBDLFNBQUksR0FBRyxLQUFLLENBQUM7SUFnQjJCLENBQUM7Ozs7O0lBUnpDLFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUlELFFBQVE7UUFDTixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7OztJQUVELFdBQVc7O2NBQ0gsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFO1FBQ3pGLHlEQUF5RDtRQUN6RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFDLENBQUMsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xIO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQWdCO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUYsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDMUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUNqQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxRQUFRLEdBQUcsRUFBRTt5QkFDZCxLQUFLLEdBQUcsRUFBRTthQUNwQjs7OztZQVI2QyxVQUFVOzs7MEJBV3JELEtBQUssU0FBQyxhQUFhO3lCQUVuQixLQUFLLFNBQUMsWUFBWTtzQkFNbEIsU0FBUyxTQUFDLFNBQVMsRUFBRSxJQUFJO29CQUN6QixTQUFTLFNBQUMsT0FBTyxFQUFFLElBQUk7dUJBRXZCLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQVgxQyw0Q0FBMEM7O0lBRTFDLDJDQUF3Qzs7SUFFeEMscUNBQWE7O0lBQ2Isc0NBQWM7O0lBQ2QsNENBQW9COztJQUVwQix3Q0FBZ0Q7O0lBQ2hELHNDQUE0Qzs7Ozs7SUFXaEMscUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGVtcGxhdGUsIHN0eWxlIH0gZnJvbSAnLi9uZ3gtc2VsZWN0Ym94LmNvbXBvbmVudC5odG1sJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3gtc2VsZWN0Ym94JyxcbiAgdGVtcGxhdGU6IHRlbXBsYXRlICsgJycsXG4gIHN0eWxlczogW3N0eWxlICsgJyddXG59KVxuZXhwb3J0IGNsYXNzIE5neFNlbGVjdGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdwbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdoaWRlU2VhcmNoJykgaGlkZVNlYXJjaDogc3RyaW5nO1xuXG4gIG9wZW4gPSBmYWxzZTtcbiAgbGFiZWw6IHN0cmluZztcbiAgc2VhcmNoUXVlcnk6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCd3cmFwcGVyJywgbnVsbCkgd3JhcHBlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaXRlbXMnLCBudWxsKSBpdGVtczogRWxlbWVudFJlZjtcblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrb3V0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmVSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnRvZ2dsZShmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgdXBkYXRlTGFiZWwoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggdGhpcy5pdGVtcy5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuICk7XG4gICAgLy8gY29uc29sZS5sb2coaXRlbXMuZmlsdGVyKHggPT4geC5jaGlsZHJlblswXS5jaGVja2VkKSk7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubGFiZWwgPSBpdGVtcy5maWx0ZXIoeCA9PiB4LmNoaWxkcmVuWzBdLmNoZWNrZWQpLm1hcCh4ID0+IHguaW5uZXJUZXh0LnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSkuam9pbignLCAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKHN0YXR1cz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9wZW4gPSB0eXBlb2Yoc3RhdHVzKSAhPT0gJ3VuZGVmaW5lZCcgPyBzdGF0dXMgOiAhdGhpcy5vcGVuO1xuICAgIHRoaXMuc2VhcmNoUXVlcnkgPSBudWxsO1xuICAgIHRoaXMuc2VhcmNoKCk7XG4gIH1cblxuICBzZWFyY2goKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5pdGVtcy5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFF1ZXJ5ID8gdGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpIDogJycpID09PSAtMSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=