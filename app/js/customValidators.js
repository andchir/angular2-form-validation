System.register([], function(exports_1) {
    var CustomValidators;
    return {
        setters:[],
        execute: function() {
            CustomValidators = (function () {
                function CustomValidators() {
                }
                CustomValidators.email = function (control) {
                    if (control.value == '' || !/^([\w-\.*]+@([\w-]+\.)+[\w-]{2,4})?$/.test(control.value)) {
                        return { "email": true };
                    }
                    return null;
                };
                CustomValidators.livr = function (control, rules) {
                    var validator = new LIVR.Validator({
                        value: rules
                    });
                    var validData = validator.validate({ value: control.value });
                    if (!validData) {
                        return { "livr": true };
                    }
                    return null;
                };
                return CustomValidators;
            })();
            exports_1("CustomValidators", CustomValidators);
        }
    }
});
//# sourceMappingURL=customValidators.js.map