interface SimpleInterFace {
    print(): void;
}

class SimpleClass implements SimpleInterFace {
    id: number;
    constructor(_id: number) {
        this.id = _id
    }
    print() : void {
        console.log(`ID: ${this.id}`)
    }
}

let obj = new SimpleClass(2)
obj.print()

// ##############

class ComplexType {
    public id: number;
    private name: string;
    constructor(_id: number, _name: string)
    constructor(_id: string, _name: string)
    constructor(_id: any, _name: any) {
        this.id = _id
        this.name = _name
    }
    print(): void {
        console.log(`ID: ${this.id} NAME: ${this.name}`)
    }
    usingAnyKeyword(arg1: any): any {
        this.id = arg1
    }
    usingOptionalParameters(optionalArg1?: number) {
        if(optionalArg1) {
            this.id = optionalArg1
        }
    }
    usignDefaultParameters(defaultArg1: number = 1) {
        this.id = defaultArg1
    }
    usignRestSyntax(index:number = 0, ...argArray: number[]) {
        if(argArray.length >= index){
            this.id = argArray[index]
        }
    }
    usingFunctionCallbacks(callback : (id:number)=> string){
        callback(this.id)
    }
}