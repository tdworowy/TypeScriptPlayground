interface IComplexType {
    id: Number;
    name : string;
}

let complexType: IComplexType
complexType = {id: 1, name: 'Test'}

console.log(complexType)


interface IComplexType2 {
    id: Number;
    name? : string; //optional
}

let complexType2: IComplexType2
complexType2 = {id: 1}

console.log(complexType2)
