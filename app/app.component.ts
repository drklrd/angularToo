import { Component } from '@angular/core';
import {ItemComponent} from './item.component';
import {ItemListComponent} from './item-list.component';
import {ItemFormComponent} from './item-form.component';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HttpModule} from '@angular/http';



@Component({
    selector : 'app',
    //directives : [ItemListComponent,ItemFormComponent],
    directives : [ROUTER_DIRECTIVES],
    templateUrl : 'app/app.component.html',
    styleUrls : ['app/app.component.css']
})

export class AppComponent {



}