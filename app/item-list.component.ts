import {Component} from '@angular/core';
import {ItemComponent} from './item.component';
import {CategoryListPipe} from './category-list.pipe';
import {ItemService} from './item.service';

@Component({
    selector : 'item-list',
    directives : [ItemComponent],
    pipes : [CategoryListPipe],
    templateUrl : 'app/item-list.component.html',
    styleUrls : ['app/item-list.component.css']
})

export class ItemListComponent {

    items;

    constructor(private itemService : ItemService){ }

    ngOnInit(){
        
        this.itemService.get()
        .map(res => res.json())
        .subscribe(
          data => {
              this.items = this.itemService.dummyGet();
              console.log('response',data);

          }
          
        );
    }

    onItemDelete(item) {
        this.itemService.delete(item);
    }

}