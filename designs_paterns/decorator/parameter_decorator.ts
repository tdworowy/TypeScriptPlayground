function parameterDecorator(
  target: any,
  methodName: string,
  parameterIndex: number
) {
  console.log(`target: ${target}`);
  console.log(`methodName: ${methodName}`);
  console.log(`parameterIndex: ${parameterIndex}`);
}
class ClassWithParamtDec {
  printSmt(@parameterDecorator output: string) {
    console.log(`printSmt was called.`);
    console.log(output);
  }
}
