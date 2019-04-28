class BaseClass {
    private id :number
    protected message: string = "Test"

    constructor(_id: number) {
        this.id = _id
    }
}
class ChildClass extends BaseClass{
    private name: string

    constructor(_id: number, _name: string) {
        super(_id)
        this.name = _name
        console.log(this.message)
    }
}

let testObject = new ChildClass(1,"Dupa")
