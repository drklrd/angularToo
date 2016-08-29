import { Component,Input, Output,EventEmitter } from '@angular/core';
import {FavoriteDirective} from './favorite.directive';
@Component({
    selector : 'item',
    directives : [FavoriteDirective],
    templateUrl : 'app/item.component.html',
    styleUrls : ['app/item.component.css']
})

export class ItemComponent {

    @Input() item;
    @Output() deleteItem = new EventEmitter;


    onDelete(){
        this.deleteItem.emit(this.item);
    }

}