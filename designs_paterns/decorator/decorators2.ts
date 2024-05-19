function testDecorator3(constructor: Function) {
  console.log(`constructor: ${constructor}`);
  console.log(`constructor.name: ${(<any>constructor).name}`);
  constructor.prototype.newProperty = "new_property_value";
}

@testDecorator3
class NewClass {
  private message: string;
  constructor(msg: string) {
    this.message = msg;
    console.log(this.message);
  }
}
let x = new NewClass("Test");
console.log(<any>x.newProperty); // It works
