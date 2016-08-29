
import {ItemComponent} from './item.component';
import {ItemListComponent} from './item-list.component';
import {ItemFormComponent} from './item-form.component';
import {RouterConfig,provideRouter} from '@angular/router';

// Route Configuration
export const routes: RouterConfig = [
    {
        path : 'add',
        component : ItemFormComponent
    },
    {
        path : ':type' ,
        component : ItemListComponent
    },
    {
        path : '' ,
        component : ItemListComponent
    }
];

// Export routes
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];