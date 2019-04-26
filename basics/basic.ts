let arr : string[] = ['a', 'b', 'c']

for (let index in arr) {
    console.log(`index: ${index} value: ${arr[index]}`)
}

for (let ele of arr) {
    console.log(`value: ${ele}`)
}
//Enumaration

enum testEnum {
    value1,
    value2,
    value3 = 12
}
console.log(`Value1: ${testEnum['value1']}`)
console.log(`Value1: ${testEnum.value1}`)
console.log(`Value1: ${testEnum[0]}`)
console.log(`Value3: ${testEnum['value3']}`)
console.log(`Value3: ${testEnum[12]}`)


function addNumber(a: number, b: number): number {
        return a + b;
}
console.log(addNumber(2,3))

let addNumber2 = function (a: number, b: number): number {
    return a + b;
}
console.log(addNumber2(2,3))

let result = function (a: number, b: number): number {
    return a + b;
}(2,3)
console.log(result)

function concatenateStrings(a: string, b: string, c?:string): String {
    let restuls: string = a + b
    if(c !== undefined) { 
        restuls += c
     }
    return restuls;
}
console.log(concatenateStrings('a','b','c'))
console.log(concatenateStrings('a','b'))


function concatenateStrings2(a: string, b: string, c :string = "default"): String {
    let restuls: string = a + b + c
    return restuls;
}
console.log(concatenateStrings2('a','b','c'))
console.log(concatenateStrings2('a','b'))

function testArguments(... argArray: number []) {
    if(argArray.length >0) {
        for(let arg of argArray) {
            console.log(`${arg}`)
        }
    }
}
testArguments(1,2,3)
testArguments()
testArguments(3)