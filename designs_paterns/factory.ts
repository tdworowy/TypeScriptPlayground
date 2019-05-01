enum PersonCategory {
    Infant,
    Child,
    Adult
}
interface IPerson {
    Category: PersonCategory | undefined
    canSignContracts(): boolean
    printDetails(): void;
}
abstract class Person implements IPerson {
    Category: PersonCategory | undefined
    private DateOfBirth: Date

    constructor(dateOfBirth: Date) {
        this.DateOfBirth = dateOfBirth
    }
    
    abstract canSignContracts(): boolean

    printDetails() :void {
        console.log(`Person: `)
        console.log(`Birth date: ${this.DateOfBirth.toDateString()}`)
        if(this.Category != undefined) {
            console.log(`Category: ${PersonCategory[this.Category]}`)
        }
        console.log(`Can sign?: ${this.canSignContracts()}`)
    }
}
class Infant extends Person {
    constructor (dateOfBirth: Date) {
        super(dateOfBirth)
        this.Category = PersonCategory.Infant
    }
    canSignContracts(): boolean { return false }
}
class Child extends Person {
    constructor (dateOfBirth: Date) {
        super(dateOfBirth)
        this.Category = PersonCategory.Child
    }
    canSignContracts(): boolean { return false }
}
class Adult extends Person {
    constructor (dateOfBirth: Date) {
        super(dateOfBirth)
        this.Category = PersonCategory.Adult
    }
    canSignContracts(): boolean { return true }
}
class PersonFactory {
  static getPerson(dateOfBirth: Date) : IPerson {
            let dateNow = new Date()
            let currentMonth = dateNow.getMonth() + 1
            let currentDate = dateNow.getDate();
            
            let dateTwoYearsAgo = new Date(
                dateNow.getFullYear() - 2,
                currentMonth, currentDate)
            
            let date18YearsAgo = new Date(
                    dateNow.getFullYear() - 18,
                    currentMonth, currentDate)
            
            if(dateOfBirth >= dateTwoYearsAgo) {
                return new Infant(dateOfBirth)
            }
            if(dateOfBirth >= date18YearsAgo) {
                return new Child(dateOfBirth)
            }
            return new Adult(dateOfBirth)
    }
}

let person1: IPerson = PersonFactory.getPerson(new Date(2018,0,20))
let person2: IPerson = PersonFactory.getPerson(new Date(2012,1,21))
let person3: IPerson = PersonFactory.getPerson(new Date(1969,2,22))

person1.printDetails()
person2.printDetails()
person3.printDetails()