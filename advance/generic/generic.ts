class Concatenator<T> {
  concatenateArray(inputArray: Array<T>): string {
    let returnString: string = "";
    for (let i = 0; i < inputArray.length; i++) {
      if (i > 0) {
        returnString += ",";
      }
      returnString += inputArray[i].toString();
    }
    return returnString;
  }
}
class ExampleClass {
  private name: string;
  constructor(_name: string) {
    this.name = _name;
  }
  toString(): string {
    return this.name;
  }
}

let stringConcatenator: Concatenator<string> = new Concatenator<string>();
let numberConcatenator: Concatenator<number> = new Concatenator<number>();
let classConcatenator: Concatenator<ExampleClass> =
  new Concatenator<ExampleClass>();

let stringArray: string[] = ["one", "two", "three"];
let numberArray: number[] = [1, 2, 3];
let classArray: ExampleClass[] = [
  new ExampleClass("Test1"),
  new ExampleClass("Test2"),
  new ExampleClass("Test3"),
];
console.log(stringConcatenator.concatenateArray(stringArray));
console.log(numberConcatenator.concatenateArray(numberArray));
console.log(classConcatenator.concatenateArray(classArray));
