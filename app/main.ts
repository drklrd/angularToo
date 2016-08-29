import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ItemService} from "./item.service";
import  {provide} from "@angular/core";
import  {LOOKUP_LISTS,lookupLists} from './providers';
//import  {Routes,RouterModule} from '@angular/router';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent,[
    ItemService,
    provide(LOOKUP_LISTS,{useValue : lookupLists}),
    APP_ROUTER_PROVIDERS
]).catch(err => console.error(err));