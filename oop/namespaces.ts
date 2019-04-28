namespace TestNameSpace {
class NotExported {} // invisible outside namespace
export class Exported { // visible outsice nmasepace
    printsmt(){
        console.log("SMT")
    }
} 
}
let testObj =  new TestNameSpace.Exported()
testObj.printsmt()