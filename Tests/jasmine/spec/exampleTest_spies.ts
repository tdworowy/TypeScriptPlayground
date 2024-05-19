class MySpiedClass {
  testFunction(arg1: string) {
    console.log(arg1);
  }
}
class CallbackClass {
  doCallBack(id: number, callback: (result: string) => void) {
    let callbackValue = `id:${id.toString()}`;
    callback(callbackValue);
  }
}
class DoCallBack {
  logValue(value: string) {
    console.log(value);
  }
}
class ClassToFake {
  getValue(): number {
    return 2;
  }
}
describe("Simple Spy", () => {
  it("Should call spied function", () => {
    let classInstance = new MySpiedClass();
    let testFunctionSpy = spyOn(classInstance, "testFunction");
    classInstance.testFunction("Test");
    expect(testFunctionSpy).toHaveBeenCalled;
  });
});
describe("Spy callback", () => {
  it("Should call callback function with correct string", () => {
    let doCallBack = new DoCallBack();
    let classUnderTest = new CallbackClass();
    let callBackSpy = spyOn(doCallBack, "logValue");

    classUnderTest.doCallBack(1, doCallBack.logValue);

    expect(callBackSpy).toHaveBeenCalled();
    expect(callBackSpy).toHaveBeenCalledWith("id:1");
  });
});
describe("Use spy as mock", () => {
  it("Should call mock", () => {
    let classToFake = new ClassToFake();
    spyOn(classToFake, "getValue").and.callFake(() => {
      return 5;
    });
    expect(classToFake.getValue()).toBe(5);
  });
});
