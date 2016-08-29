"use strict";
var item_list_component_1 = require('./item-list.component');
var item_form_component_1 = require('./item-form.component');
var router_1 = require('@angular/router');
// Route Configuration
exports.routes = [
    {
        path: 'add',
        component: item_form_component_1.ItemFormComponent
    },
    {
        path: ':type',
        component: item_list_component_1.ItemListComponent
    },
    {
        path: '',
        component: item_list_component_1.ItemListComponent
    }
];
// Export routes
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map