import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from './models/user';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'stockholder';
        this.user = new User(101, 'tanu', 'tanu@gmail.com', 999999999);
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map