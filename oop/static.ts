class StaticClass {
  static staticProperty = 0;
  static printSmt() {
    StaticClass.staticProperty++;
    console.log("asdf");
  }
  printSmt() {
    StaticClass.staticProperty++;
    console.log("asdf2");
  }
}

StaticClass.printSmt();
StaticClass.printSmt();

let test = new StaticClass();

console.log(StaticClass.staticProperty);

test.printSmt();
test.printSmt();

console.log(StaticClass.staticProperty);
