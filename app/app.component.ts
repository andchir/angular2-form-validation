import {Component} from 'angular2/core';
import {MyFormComponent} from './my-form.component'

@Component({
    selector: 'my-app',
    template: '<my-form></my-form>',
    directives: [ MyFormComponent ]
})
export class AppComponent { }