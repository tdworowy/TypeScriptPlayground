"use strict";
class SimpleClass {
    constructor(_id) {
        this.id = _id;
    }
    print() {
        console.log(`ID: ${this.id}`);
    }
}
let obj = new SimpleClass(2);
obj.print();
// ##############
class ComplexType {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    print() {
        console.log(`ID: ${this.id} NAME: ${this.name}`);
    }
    usingAnyKeyword(arg1) {
        this.id = arg1;
    }
    usingOptionalParameters(optionalArg1) {
        if (optionalArg1) {
            this.id = optionalArg1;
        }
    }
    usignDefaultParameters(defaultArg1 = 1) {
        this.id = defaultArg1;
    }
    usignRestSyntax(index = 0, ...argArray) {
        if (argArray.length >= index) {
            this.id = argArray[index];
        }
    }
    usingFunctionCallbacks(callback) {
        callback(this.id);
    }
}
