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

}