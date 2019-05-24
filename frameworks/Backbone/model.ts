interface IClikableItem {
    DisplayName: string
    Id: number
   [key:string]: any;
}
interface IItemCollectionViewModel {
    Title: string
    SelectedItem: IClikableItem
    [key:string]: any;
}
let ClikableItemArray = ([
    { Id: 1, DisplayName: "FirstElement" },
    { Id: 2, DisplayName: "SecondElement" },
    { Id: 3, DisplayName: "ThirdElement" },
]);

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
        for (var key  in input) {
            if(key) { this[key] = input[key] }
        }
    }   
}

class ItemCollection extends Backbone.Collection<ItemModel> {
    model = ItemModel
}
class ItemCollectionViewModel extends Backbone.Model implements IItemCollectionViewModel {
    get Title(): string {
        return this.get('Title')
    }
    set Title(value: string) {
        this.set("Title", value)
    }
    get SelectedItem(): IClikableItem {
        return this.get("SelectedItem")
    }
    set SelectedItem(value: IClikableItem) {
        this.set("SelectedItem", value)
    } 
    constructor(input: IItemCollectionViewModel) {
        super()
        for (var key in input) {
            if (key) {this[key] = input[key]}
        }
    }
}