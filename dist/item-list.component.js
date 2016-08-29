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
var core_1 = require('@angular/core');
var item_component_1 = require('./item.component');
var category_list_pipe_1 = require('./category-list.pipe');
var item_service_1 = require('./item.service');
var ItemListComponent = (function () {
    function ItemListComponent(itemService) {
        this.itemService = itemService;
    }
    ItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.get()
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.items = _this.itemService.dummyGet();
            console.log('response', data);
        });
    };
    ItemListComponent.prototype.onItemDelete = function (item) {
        this.itemService.delete(item);
    };
    ItemListComponent = __decorate([
        core_1.Component({
            selector: 'item-list',
            directives: [item_component_1.ItemComponent],
            pipes: [category_list_pipe_1.CategoryListPipe],
            templateUrl: 'app/item-list.component.html',
            styleUrls: ['app/item-list.component.css']
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], ItemListComponent);
    return ItemListComponent;
}());
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=item-list.component.js.map