import { ɵɵdefineInjectable, Injectable, Component, ElementRef, Input, ViewChild, HostListener, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxSelectboxService = /** @class */ (function () {
    function NgxSelectboxService() {
    }
    NgxSelectboxService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxSelectboxService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxSelectboxService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxSelectboxService_Factory() { return new NgxSelectboxService(); }, token: NgxSelectboxService, providedIn: "root" });
    return NgxSelectboxService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var template = "\n  <div #wrapper class=\"select-box\">\n    <div class=\"label\" (click)=\"toggle()\" [class.open]=\"open\">\n      <label [class.placeholder]=\"!label\">\n        {{ label ? label : placeholder }}\n        <svg version=\"1.1\" [attr.class]=\"open ? 'hide' : 'show'\" id=\"icon-arrow-down\" xmlns=\"http://www.w3.org/2000/svg\"\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n          width=\"16px\" height=\"16px\" viewBox=\"0 0 284.929 284.929\" style=\"enable-background:new 0 0 284.929 284.929;\"\n          xml:space=\"preserve\">\n          <g>\n            <path d=\"M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441\n              L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082\n              c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647\n              c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z\"/>\n          </g>\n        </svg>\n        <svg version=\"1.1\" [attr.class]=\"open ? 'show' : 'hide'\" id=\"icon-arrow-up\" xmlns=\"http://www.w3.org/2000/svg\"\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n          width=\"16px\" height=\"16px\" viewBox=\"0 0 284.929 284.929\" style=\"enable-background:new 0 0 284.929 284.929;\"\n          xml:space=\"preserve\">\n          <g>\n            <path d=\"M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285\n              C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854\n              c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848\n              c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566\n              C284.929,199.378,283.984,197.188,282.082,195.285z\"/>\n          </g>\n        </svg>\n      </label>\n    </div>\n    <div class=\"select-content\" [hidden]=\"!open\">\n      <input type=\"text\" class=\"search-box\" placeholder=\"Search\" [(ngModel)]=\"searchQuery\" (keyup)=\"search()\" [hidden]=\"hideSearch\" />\n      <div #items class=\"scroll-container margin-top-10\">\n        <ng-content select=\".items\"></ng-content>\n      </div>\n    </div>\n  </div>\n";
/** @type {?} */
var style = "\n.select-box {\n    position: relative;\n  }\n  .select-box .select-content {\n    position: absolute;\n    top: 42px;\n    left: 0;\n    right: 0;\n    border-radius: 0 0 4px 4px;\n    border: 1px solid #d2d2dc;\n    border-top: none;\n    padding: 0 15px 15px;\n    background-color: white;\n    z-index: 4;\n    box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.1);\n    -webkit-box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.1);\n  }\n  .select-box .select-content .search-box {\n    background-color: #f0f2f4;\n    display: block;\n    width: 100%;\n    border: 1px solid lightgray;\n    padding: 0 10px;\n    height: 36px;\n    border-radius: 3px;\n  }\n  .label {\n    font-size: 1.14rem;\n    padding: 0 15px;\n    border-radius: 4px;\n    border: 1px solid #d2d2dc;\n    width: 100%;\n    outline: 0;\n    height: 42px;\n    background-color: white;\n    position: relative;\n  }\n  .label.open {\n    border-radius: 4px 4px 0 0;\n    border-bottom: 0;\n    box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.1);\n    -webkit-box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.1);\n  }\n  .label label {\n    line-height: 42px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: 90%;\n    height: 42px;\n    white-space: nowrap;\n    display: inline-block;\n  }\n  .label label.placeholder {\n    color: #d9d9e1;\n  }\n  .label label svg {\n    position: absolute;\n    right: 15px;\n    top: 13px;\n    fill: #d9d9e1;\n  }\n  .label:hover, .label label:hover, .label svg:hover {\n    cursor: pointer;\n  }\n  .items {\n    list-style: none;\n  }\n  .scroll-container {\n    max-height: 95px;\n    margin-top: 10px;\n    overflow-y: auto;\n  }\n\n  .scroll-container::-webkit-scrollbar-track\n  {\n    background-color: #f0f2f4;\n  }\n\n  .scroll-container::-webkit-scrollbar\n  {\n    width: 5px;\n    background-color: #f0f2f4;\n  }\n\n  .scroll-container::-webkit-scrollbar-thumb\n  {\n    background-color: #ccc;\n  }\n\n  .show {\n    display: inline-block;\n  }\n\n  .hide {\n    display: none;\n  }\n\n\n  :host ::ng-deep ::placeholder {\n    color: lightgray;\n  }\n\n  :host ::ng-deep .custom-input {\n    display: block;\n    position: relative;\n    padding-left: 30px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 14px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  :host ::ng-deep .custom-input input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n\n  :host ::ng-deep .custom-input input[type=checkbox] ~  .checkmark {\n    position: absolute;\n    top: 3px;\n    left: 0;\n    height: 18px;\n    width: 18px;\n    background-color: #f0f2f4;\n    border-radius: 3px;\n  }\n  :host ::ng-deep .custom-input input[type=radio] ~  .checkmark {\n    position: absolute;\n    top: 3px;\n    left: 0;\n    height: 18px;\n    width: 18px;\n    background-color: #f0f2f4;\n    border-radius: 50%;\n  }\n\n  :host ::ng-deep .custom-input:hover input ~  .checkmark {\n    background-color: #ccc;\n  }\n\n  :host ::ng-deep .custom-input input[type=checkbox]:checked ~  .checkmark {\n    background: #1dbadf;\n  }\n\n  :host ::ng-deep .custom-input input[type=checkbox]:checked ~  .checkmark:after {\n    left: 6px;\n    top: 3px;\n    width: 6px;\n    height: 10px;\n    border: solid white;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  :host ::ng-deep .custom-input .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n\n  :host ::ng-deep .custom-input input:checked ~  .checkmark:after {\n    display: block;\n  }\n\n  :host ::ng-deep .custom-input input[type=radio] ~  .checkmark:after {\n    top: 4px;\n    left: 4px;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: #1dbadf;\n  }\n\n";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxSelectboxModule = /** @class */ (function () {
    function NgxSelectboxModule() {
    }
    NgxSelectboxModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxSelectboxComponent],
                    imports: [
                        FormsModule
                    ],
                    exports: [NgxSelectboxComponent]
                },] }
    ];
    return NgxSelectboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxSelectboxComponent, NgxSelectboxModule, NgxSelectboxService, template as ɵa, style as ɵb };
//# sourceMappingURL=ngx-selectbox.js.map
