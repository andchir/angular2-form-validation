interface livrRules {

}

interface Validator {
    new (rules: any): Validator;
    validate({}): boolean | {}
}

interface LIVRStatic {
    Validator: Validator
}

declare var LIVR: LIVRStatic;