System.register(['angular2/core', 'angular2/common', './customValidators'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, customValidators_1;
    var MyFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (customValidators_1_1) {
                customValidators_1 = customValidators_1_1;
            }],
        execute: function() {
            MyFormComponent = (function () {
                function MyFormComponent(builder) {
                    this.builder = builder;
                    this.submitted = false;
                    this.form = builder.group({
                        name: ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)])],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, customValidators_1.CustomValidators.email])],
                        address: ['', common_1.Validators.required]
                    });
                }
                Object.defineProperty(MyFormComponent.prototype, "diagnostic", {
                    get: function () {
                        return JSON.stringify(this.form.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                MyFormComponent.prototype.submitData = function () {
                    this.submitted = true;
                    console.log(JSON.stringify(this.form.value));
                    console.log(this.form);
                };
                MyFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-form',
                        templateUrl: 'templates/form-template.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], MyFormComponent);
                return MyFormComponent;
            })();
            exports_1("MyFormComponent", MyFormComponent);
        }
    }
});
//# sourceMappingURL=my-form.component.js.map