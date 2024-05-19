function auditLogDec(
  target: any,
  methodName: string,
  descriptor?: PropertyDescriptor
) {
  let originalFunction = target[methodName];
  let auditFunction = function () {
    console.log(
      `auditLogDec: the changed version of the method ${methodName} was called.`
    );
    originalFunction.apply(this, arguments);
  };
  target[methodName] = auditFunction;
  return target;
}
class ClassWithAuditDec {
  @auditLogDec
  printSmt(output: string) {
    console.log(`printSmt was called.`);
    console.log(output);
  }
}
let auditDecObject = new ClassWithAuditDec();
auditDecObject.printSmt("Test");
