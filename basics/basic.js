"use strict";
let arr = ['a', 'b', 'c'];
for (let index in arr) {
    console.log(`index: ${index} value: ${arr[index]}`);
}
for (let ele of arr) {
    console.log(`value: ${ele}`);
}
//Enumaration
var testEnum;
(function (testEnum) {
    testEnum[testEnum["value1"] = 0] = "value1";
    testEnum[testEnum["value2"] = 1] = "value2";
    testEnum[testEnum["value3"] = 12] = "value3";
})(testEnum || (testEnum = {}));
console.log(`Value1: ${testEnum['value1']}`);
console.log(`Value1: ${testEnum.value1}`);
console.log(`Value1: ${testEnum[0]}`);
console.log(`Value3: ${testEnum['value3']}`);
console.log(`Value3: ${testEnum[12]}`);
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(2, 3));
let addNumber2 = function (a, b) {
    return a + b;
};
console.log(addNumber2(2, 3));
let result = function (a, b) {
    return a + b;
}(2, 3);
console.log(result);
function concatenateStrings(a, b, c) {
    let restuls = a + b;
    if (c !== undefined) {
        restuls += c;
    }
    return restuls;
}
console.log(concatenateStrings('a', 'b', 'c'));
console.log(concatenateStrings('a', 'b'));
function concatenateStrings2(a, b, c = "default") {
    let restuls = a + b + c;
    return restuls;
}
console.log(concatenateStrings2('a', 'b', 'c'));
console.log(concatenateStrings2('a', 'b'));
function testArguments(...argArray) {
    if (argArray.length > 0) {
        for (let arg of argArray) {
            console.log(`${arg}`);
        }
    }
}
testArguments(1, 2, 3);
testArguments();
testArguments(3);
