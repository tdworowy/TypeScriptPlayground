class ItemModel extends Backbone.Model implements IClikableItem {
    get DisplayName(): string {
        return this.get('DisplayName')
    }
    set DisplayName(value: string) {
        this.set('DisplayName', value)
    }
    get Id(): number {
        return this.get('Id')
    }
    set id(value: number) {
        this.set('Id', value)
    }
    [key:string]: any;
    
    constructor(input: IClikableItem) {
        super()
        for (let key  in input) {
            if(key) { this[key] = input[key] }
        }
    }   
}

class ItemCollection extends Backbone.Collection<ItemModel> {
    model = ItemModel
}