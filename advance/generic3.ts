class GenericCreator <T> {
    create(arg : {new(): T}) : T{
        return new arg()
    }
}
class AsdClass {
    private id: number = 0

    constructor (_id:number = 1) {
        this.id = _id
    }
}
let creator: GenericCreator<AsdClass> = new GenericCreator<AsdClass>()
let asdObj:AsdClass = creator.create(AsdClass)
