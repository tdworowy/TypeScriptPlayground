import { ServiceLocatorGeneric } from "./ServiceLocator";
import "reflect-metadata";

export function ConstructorInject(classDefinition: Function) {
  console.log(`classDefinition:`);
  console.log(`================`);
  console.log(`${classDefinition}`);
  console.log(`================`);

  let firstIdx = classDefinition.toString().indexOf("(") + 1;
  let lastIdx = classDefinition.toString().indexOf(")");
  let arr = classDefinition.toString().substr(firstIdx, lastIdx - firstIdx);

  console.log(`${arr}`);
  console.log(`==================`);

  let splitArr = arr.split(", ");

  for (let paramName of splitArr) {
    console.log(`${paramName}`);
  }

  let parameterTypeArray = Reflect.getMetadata(
    "design:paramtypes",
    classDefinition
  );
  console.log(`parameterTypeArray:`);
  console.log(`===================`);
  console.log(`${parameterTypeArray}`);
  console.log(`===================`);

  for (let type of parameterTypeArray) {
    console.log(`${type.name}`);
  }

  for (let i = 0; i < splitArr.length; i++) {
    let propertyName = splitArr[i];
    let typeName = parameterTypeArray[i];

    console.log(`
      name : ${propertyName} 
      type : ${typeName.name}`);

    Object.defineProperty(classDefinition.prototype, propertyName, {
      // Important part
      get: function () {
        return ServiceLocatorGeneric.resolve(eval(typeName));
      },
    });
  }
}
