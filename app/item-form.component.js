"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var item_service_1 = require("./item.service");
var providers_1 = require('./providers');
var router_1 = require('@angular/router');
var ItemFormComponent = (function () {
    function ItemFormComponent(itemService, lookupLists, router) {
        this.itemService = itemService;
        this.lookupLists = lookupLists;
        this.router = router;
    }
    ItemFormComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            'type': new forms_1.FormControl(),
            'name': new forms_1.FormControl('', common_1.Validators.compose([
                common_1.Validators.required,
                common_1.Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            'description': new forms_1.FormControl(),
            'addedDate': new forms_1.FormControl('', this.yearValidator)
        });
    };
    ItemFormComponent.prototype.yearValidator = function (control) {
        if (control.value.trim().length === 0)
            return null;
        var dateUnix = new Date(control.value).getTime();
        if (dateUnix > new Date().getTime())
            return { 'date': true };
        return null;
    };
    ItemFormComponent.prototype.onSubmit = function (item) {
        this.itemService.add(item);
    };
    ItemFormComponent = __decorate([
        core_1.Component({
            selector: 'item-form',
            templateUrl: 'app/item-form.component.html',
            styleUrls: ['app/item-form.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
        }),
        __param(1, core_1.Inject(providers_1.LOOKUP_LISTS)), 
        __metadata('design:paramtypes', [item_service_1.ItemService, Object, router_1.Router])
    ], ItemFormComponent);
    return ItemFormComponent;
}());
exports.ItemFormComponent = ItemFormComponent;
//# sourceMappingURL=item-form.component.js.map