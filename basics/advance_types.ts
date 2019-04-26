// union type
let unin_type: number | string // is string or number
unin_type = 10
console.log(unin_type)
unin_type = "DUPA"
console.log(unin_type)

// Type guard

function addWithTypeGuard ( arg1: number | string,
                            arg2: number | string ): string | number {
      if(typeof arg1 === 'string') {
          console.log("First argument is string")
          return arg1 + arg2
      }
      if(typeof arg1 === 'number' && typeof arg2 === 'number') {
          console.log("Both arguments are numbers")
          return arg1 + arg2
      }                          
      console.log("Default way")
      return arg1.toString() + arg2.toString()
}
console.log(addWithTypeGuard(1,2))
console.log(addWithTypeGuard('a','a'))
console.log(addWithTypeGuard('a',2))
console.log(addWithTypeGuard(1,'b'))

//type substitute name
type numberOrString = number | string

function addWithTypeGuard2 ( arg1: numberOrString,
    arg2: numberOrString ): numberOrString {
if(typeof arg1 === 'string') {
console.log("First argument is string")
return arg1 + arg2
}
if(typeof arg1 === 'number' && typeof arg2 === 'number') {
console.log("Both arguments are numbers")
return arg1 + arg2
}                          
console.log("Default way")
return arg1.toString() + arg2.toString()
}
console.log(addWithTypeGuard2(1,2))
console.log(addWithTypeGuard2('a','a'))
console.log(addWithTypeGuard2('a',2))
console.log(addWithTypeGuard2(1,'b'))

//objects
let obj1 = {id :1}
let obj2 = {name: "Test"}
let obj3 = {... obj1, ... obj2}
console.log(obj3)