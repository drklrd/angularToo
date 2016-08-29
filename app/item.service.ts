export class ItemService{


    get(){
        return this.items;
    }

    add(item){
        item.id = this.items.length + 1;
        item.availability = true;
        this.items.push(item);
    }

    delete(item){
        this.items.splice(this.items.indexOf(item),1);
    }

    items = [
        {
            id : 1,
            name : 'First Item',
            description : 'This is the first item',
            availability : true,
            category : 'Electronics',
            addedOn : 1472373396105,
            isFavorite : true
        },
        {
            id : 2,
            name : 'Second Item',
            description : 'This is the second item',
            availability : true,
            category : 'Beauty Products',
            addedOn : 1472373396105,
            isFavorite : false
        }
    ]

}