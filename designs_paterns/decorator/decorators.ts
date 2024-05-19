function testDecorator(constructor: Function) {
  console.log("in decorator function");
}

@testDecorator
class DecoratedClass1 {}

@testDecorator
@testDecorator
class DecoratedClass2 {}

function decoratorFactory(message: string) {
  return function (constructor: Function) {
    console.log(`in decorator function. ${message}`);
  };
}

@decoratorFactory("MESSAGE")
class DecoratedClass3 {}
