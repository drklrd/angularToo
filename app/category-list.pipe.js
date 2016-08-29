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
var CategoryListPipe = (function () {
    function CategoryListPipe() {
    }
    CategoryListPipe.prototype.transform = function (items) {
        if (items && items.length) {
            var categories = [];
            items.forEach(function (item) {
                if (categories.indexOf(item.category) === -1) {
                    categories.push(item.category);
                }
            });
            return categories.join(',');
        }
    };
    CategoryListPipe = __decorate([
        core_1.Pipe({
            name: 'categoryList'
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryListPipe);
    return CategoryListPipe;
}());
exports.CategoryListPipe = CategoryListPipe;
//# sourceMappingURL=category-list.pipe.js.map