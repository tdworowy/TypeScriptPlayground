function methodDecorator(
  target: any,
  methodName: string,
  descriptor?: PropertyDescriptor
) {
  console.log(`target: ${target}`);
  console.log(`method name: ${methodName}`);
  console.log(`target[methodName]: ${target[methodName]}`);
  console.log(`descriptor: ${descriptor}`);
}
class ClassWhitMethodDec {
  @methodDecorator
  printSMT(output: string): boolean {
    console.log(output);
    return true;
  }
}
