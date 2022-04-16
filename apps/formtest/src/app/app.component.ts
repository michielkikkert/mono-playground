import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
    selector: 'mono-playground-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    form: FormGroup = new FormGroup({
        control1: new FormControl(''),
        control2: new FormControl(''),
        control3: new FormControl(''),
        control4: new FormControl(''),
        control5: new FormControl(''),
        control6: new FormControl(''),
    });

    rules: Array<Array<string>> = [['control1', 'control2'], ['control3'], ['control4', 'control5', 'control6']];

    disabled$!: Observable<Record<string, boolean>>;

    ngOnInit() {
        // setup
        console.log('init');

        this.disabled$ = this.form.valueChanges.pipe(
            startWith(this.form.value),
            map((form) => {
              let ruleSet: string[] = [];
              const conditions: Record<string, boolean> = {};
                Object.entries(form).map(([name, value]: [string, unknown]) => {
                    // find the matching ruleset for the current control
                    if (value) {
                        ruleSet = this.rules.find((rules) => rules.indexOf(name) > -1) || [];
                    }
                    // default is not disabled
                    conditions[name] = false;

                });
                return {ruleSet, conditions};
            }),
            map(({ruleSet, conditions}) => {
                // Loop through controls and determine if in ruleSet
                Object.entries(this.form.controls).map( ([name, control]) => {
                    if( ruleSet.indexOf(name) > -1 || ruleSet.length === 0) {
                        control.enable({onlySelf: true});
                        conditions[name] = false;
                    } else {
                      control.disable({onlySelf: true});
                      conditions[name] = true;
                    }
                })

                return conditions;
            })
        );
    }
}
