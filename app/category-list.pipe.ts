import {Pipe} from '@angular/core';


@Pipe({
    name : 'categoryList'
})

export class CategoryListPipe {

    transform(items){
        if(items && items.length){
            var categories = [];
            items.forEach(item => {
                if(categories.indexOf(item.category) === -1){
                    categories.push(item.category);
                }
            });
            return categories.join(',');
        }
        
    }

}