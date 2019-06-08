import { OnInit, ElementRef } from '@angular/core';
export declare class NgxSelectboxComponent implements OnInit {
    private eRef;
    placeholder: string;
    hideSearch: string;
    open: boolean;
    label: string;
    searchQuery: string;
    wrapper: ElementRef;
    items: ElementRef;
    clickout(event: any): void;
    constructor(eRef: ElementRef);
    ngOnInit(): void;
    updateLabel(): void;
    toggle(status?: boolean): void;
    search(): void;
}
