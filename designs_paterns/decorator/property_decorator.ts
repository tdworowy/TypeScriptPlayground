function proprtyDecorator(target: any, propertyKey: string) {
  console.log(`target: ${target}`);
  console.log(`target.constructor: ${target.constructor}`);
  if (typeof target === "function") {
    console.log(`class name: ${target.name}`);
  } else {
    console.log(`class name: ${target.constructor.name}`);
  }
  console.log(`property key: ${propertyKey}`);
}
class ClassWithPropertyDec {
  @proprtyDecorator
  someProperty: string = "Test";
}
class StaticClassWithPropertyDec {
  @proprtyDecorator
  static someProperty: string = "Test";
}
