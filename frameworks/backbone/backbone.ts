import Backbone from "backbone";

interface INoteModel {
    initialize() :void
    author(): void
    coordinates(): void
    allowedToEdit(account: any): boolean
}

export class NoteModel extends Backbone.Model implements INoteModel {
    initialize(){
        alert("Initialize")
    }
    author() {}
    coordinates() {}
    allowedToEdit(account: any){
        return true
    }
}