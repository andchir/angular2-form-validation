/// <reference path="typings/livr/livr.d.ts" />
import { Control } from "angular2/common";

interface ValidationResult{
    [key:string]:boolean;
}

export class CustomValidators {

    static email(control: Control): ValidationResult {
        if ( control.value == '' || !/^([\w-\.*]+@([\w-]+\.)+[\w-]{2,4})?$/.test(control.value) ){
            return {"email": true};
        }
        return null;
    }

    static livr(control: Control, rules: string | {}): ValidationResult {
        var validator = new LIVR.Validator({
            value: rules
        });
        var validData = validator.validate({value: control.value});
        if(!validData){
            return {"livr": true};
        }
        return null;
    }

}