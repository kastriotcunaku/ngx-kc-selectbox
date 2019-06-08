/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { template, style } from './ngx-selectbox.component.html';
var NgxSelectboxComponent = /** @class */ (function () {
    function NgxSelectboxComponent(eRef) {
        this.eRef = eRef;
        this.open = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NgxSelectboxComponent.prototype.clickout = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.toggle(false);
        }
        else {
            this.updateLabel();
        }
    };
    /**
     * @return {?}
     */
    NgxSelectboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.updateLabel();
        }), 1000);
    };
    /**
     * @return {?}
     */
    NgxSelectboxComponent.prototype.updateLabel = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var items = Array.prototype.slice.call(this.items.nativeElement.children[0].children);
        // console.log(items.filter(x => x.children[0].checked));
        if (items.length > 0) {
            this.label = items.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.children[0].checked; })).map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.innerText.replace(/^\s+|\s+$/g, ''); })).join(', ');
        }
        else {
            this.label = null;
        }
    };
    /**
     * @param {?=} status
     * @return {?}
     */
    NgxSelectboxComponent.prototype.toggle = /**
     * @param {?=} status
     * @return {?}
     */
    function (status) {
        this.open = typeof (status) !== 'undefined' ? status : !this.open;
        this.searchQuery = null;
        this.search();
    };
    /**
     * @return {?}
     */
    NgxSelectboxComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Array.prototype.slice.call(this.items.nativeElement.children[0].children).forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (element.innerText.toLowerCase().indexOf(_this.searchQuery ? _this.searchQuery.toLowerCase() : '') === -1) {
                element.style.display = 'none';
            }
            else {
                element.style.display = 'block';
            }
        }));
    };
    NgxSelectboxComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngx-selectbox',
                    template: template + '',
                    styles: [style + '']
                }] }
    ];
    /** @nocollapse */
    NgxSelectboxComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NgxSelectboxComponent.propDecorators = {
        placeholder: [{ type: Input, args: ['placeholder',] }],
        hideSearch: [{ type: Input, args: ['hideSearch',] }],
        wrapper: [{ type: ViewChild, args: ['wrapper', null,] }],
        items: [{ type: ViewChild, args: ['items', null,] }],
        clickout: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return NgxSelectboxComponent;
}());
export { NgxSelectboxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNlbGVjdGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2VsZWN0Ym94LyIsInNvdXJjZXMiOlsibGliL25neC1zZWxlY3Rib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWpFO0lBNEJFLCtCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBaEJwQyxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBZ0IyQixDQUFDOzs7OztJQVJ6Qyx3Q0FBUTs7OztJQURSLFVBQ1MsS0FBSztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7SUFJRCx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhDLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7O1lBQ1EsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFO1FBQ3pGLHlEQUF5RDtRQUN6RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFyQixDQUFxQixFQUFDLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFyQyxDQUFxQyxFQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xIO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNILENBQUM7Ozs7O0lBRUQsc0NBQU07Ozs7SUFBTixVQUFPLE1BQWdCO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxzQ0FBTTs7O0lBQU47UUFBQSxpQkFRQztRQVBDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUN2RixJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUMxRyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkE1REYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLFFBQVEsR0FBRyxFQUFFOzZCQUNkLEtBQUssR0FBRyxFQUFFO2lCQUNwQjs7OztnQkFSNkMsVUFBVTs7OzhCQVdyRCxLQUFLLFNBQUMsYUFBYTs2QkFFbkIsS0FBSyxTQUFDLFlBQVk7MEJBTWxCLFNBQVMsU0FBQyxTQUFTLEVBQUUsSUFBSTt3QkFDekIsU0FBUyxTQUFDLE9BQU8sRUFBRSxJQUFJOzJCQUV2QixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBMEM1Qyw0QkFBQztDQUFBLEFBN0RELElBNkRDO1NBdkRZLHFCQUFxQjs7O0lBRWhDLDRDQUEwQzs7SUFFMUMsMkNBQXdDOztJQUV4QyxxQ0FBYTs7SUFDYixzQ0FBYzs7SUFDZCw0Q0FBb0I7O0lBRXBCLHdDQUFnRDs7SUFDaEQsc0NBQTRDOzs7OztJQVdoQyxxQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0ZW1wbGF0ZSwgc3R5bGUgfSBmcm9tICcuL25neC1zZWxlY3Rib3guY29tcG9uZW50Lmh0bWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25neC1zZWxlY3Rib3gnLFxuICB0ZW1wbGF0ZTogdGVtcGxhdGUgKyAnJyxcbiAgc3R5bGVzOiBbc3R5bGUgKyAnJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4U2VsZWN0Ym94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2hpZGVTZWFyY2gnKSBoaWRlU2VhcmNoOiBzdHJpbmc7XG5cbiAgb3BlbiA9IGZhbHNlO1xuICBsYWJlbDogc3RyaW5nO1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ3dyYXBwZXInLCBudWxsKSB3cmFwcGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpdGVtcycsIG51bGwpIGl0ZW1zOiBFbGVtZW50UmVmO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tvdXQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMudG9nZ2xlKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZVJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICB1cGRhdGVMYWJlbCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCB0aGlzLml0ZW1zLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW4gKTtcbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtcy5maWx0ZXIoeCA9PiB4LmNoaWxkcmVuWzBdLmNoZWNrZWQpKTtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5sYWJlbCA9IGl0ZW1zLmZpbHRlcih4ID0+IHguY2hpbGRyZW5bMF0uY2hlY2tlZCkubWFwKHggPT4geC5pbm5lclRleHQucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpKS5qb2luKCcsICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoc3RhdHVzPzogYm9vbGVhbikge1xuICAgIHRoaXMub3BlbiA9IHR5cGVvZihzdGF0dXMpICE9PSAndW5kZWZpbmVkJyA/IHN0YXR1cyA6ICF0aGlzLm9wZW47XG4gICAgdGhpcy5zZWFyY2hRdWVyeSA9IG51bGw7XG4gICAgdGhpcy5zZWFyY2goKTtcbiAgfVxuXG4gIHNlYXJjaCgpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLml0ZW1zLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW4pLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoUXVlcnkgPyB0aGlzLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkgOiAnJykgPT09IC0xKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==