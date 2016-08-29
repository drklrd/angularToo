"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var item_service_1 = require("./item.service");
var core_1 = require("@angular/core");
var providers_1 = require('./providers');
//import  {Routes,RouterModule} from '@angular/router';
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    item_service_1.ItemService,
    core_1.provide(providers_1.LOOKUP_LISTS, { useValue: providers_1.lookupLists }),
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map