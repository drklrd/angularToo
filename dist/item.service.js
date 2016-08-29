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
var http_1 = require('@angular/http');
var core_1 = require("@angular/core");
var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        this.items = [
            {
                id: 1,
                name: 'First Item',
                description: 'This is the first item',
                availability: true,
                category: 'Electronics',
                addedOn: 1472373396105,
                isFavorite: true
            },
            {
                id: 2,
                name: 'Second Item',
                description: 'This is the second item',
                availability: true,
                category: 'Beauty Products',
                addedOn: 1472373396105,
                isFavorite: false
            }
        ];
    }
    ItemService.prototype.get = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
        // return this.items;
    };
    ItemService.prototype.dummyGet = function () {
        return this.items;
    };
    ItemService.prototype.add = function (item) {
        item.category = item.type;
        item.id = this.getMaxId();
        item.addedOn = item.addedDate;
        item.availability = true;
        this.items.push(item);
    };
    ItemService.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    ItemService.prototype.getMaxId = function () {
        var maxId = 0;
        this.items.forEach(function (item) {
            if (item.id >= maxId)
                maxId = item.id;
        });
        return maxId;
    };
    ItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map