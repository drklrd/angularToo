export class ItemService{


    get(){
        return this.items;
    }

    add(item){
        
        item.category = item.type;
        item.id = this.getMaxId();
        item.addedOn = item.addedDate;
        item.availability = true;
        this.items.push(item);
    }

    delete(item){
        this.items.splice(this.items.indexOf(item),1);
    }

    getMaxId(){

        var maxId = 0;
        this.items.forEach(item => {
            if(item.id>= maxId) maxId = item.id;
        })
        return maxId;

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