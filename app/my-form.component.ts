///<reference path="typings/tsd.d.ts" />
import { Component } from 'angular2/core';
import { NgForm, Control, ControlGroup, Validators, FormBuilder, FORM_DIRECTIVES } from 'angular2/common';
import { CustomValidators } from './customValidators'

@Component({
    selector: 'my-form',
    templateUrl: 'templates/form-template.html',
    directives: [ FORM_DIRECTIVES ]
})
export class MyFormComponent {

    submitted = false;
    form: ControlGroup;

    constructor(private builder: FormBuilder) {

        this.form = builder.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            email: ['', Validators.compose([Validators.required, CustomValidators.email])],
            address: ['', Validators.required]
        });
    }

    get diagnostic() {
        return JSON.stringify(this.form.value);
    }

    submitData(){
        this.submitted = true;
        console.log(JSON.stringify(this.form.value));
        console.log( this.form );
    }

}