import { Directive } from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
    selector: 'maf-select, maf-input',
    standalone: true,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: CvaDirective,
            multi: true,
        },
    ],
})
export class CvaDirective extends DefaultValueAccessor {}
