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

    ngOnInit(): void {
      this.disabled$ = this.setupRules(this.form, this.rules);
    }

    setupRules(form: FormGroup, rules: Array<Array<string>>): Observable<Record<string, boolean>> {
        return form.valueChanges.pipe(
            startWith(form.value),
            map((form) => {
                let ruleSet: string[] = [];
                const conditions: Record<string, boolean> = {};
                Object.entries(form).map(([name, value]: [string, unknown]) => {
                    // Find the matching ruleset for the current control
                    if (value) {
                        ruleSet = rules.find((rules) => rules.indexOf(name) > -1) || [];
                    }
                    // Add to Record, default is not disabled
                    conditions[name] = false;
                });
                return { ruleSet, conditions };
            }),
            map(({ ruleSet, conditions }) => {
                // Loop through controls and determine if in ruleSet
                Object.entries(this.form.controls).map(([name, control]) => {
                    // Current control is in ruleset (or no ruleset is found), enable the control.
                    if (ruleSet.indexOf(name) > -1 || ruleSet.length === 0) {
                        control.enable({ onlySelf: true });
                        conditions[name] = false;
                    } else { // current control is not in ruleset. disable it.
                        control.disable({ onlySelf: true });
                        conditions[name] = true;
                    }
                });
                return conditions;
            })
        );
    }
}
