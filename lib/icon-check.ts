import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    selector: 'icon-check',
    template: `
        <ng-template #template>
            <svg [ngClass]="class" version="1.1" viewBox="0 0 17 12">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(-9 -11)" fill="currentColor" fill-rule="nonzero">
                        <path
                            d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                        />
                    </g>
                </g>
            </svg>
        </ng-template>
    `,
})
export class IconCheckComponent {
    @ViewChild('template', { static: true }) template: any;
    @Input() class: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
    }
}