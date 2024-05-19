class ClassWithAccessors {
  private _id: number | undefined;
  get id(): number | undefined {
    console.log("inside get id.");
    return this._id;
  }
  set id(value: number | undefined) {
    console.log("inside set id.");
    this._id = value;
  }
}

let objct = new ClassWithAccessors();
objct.id = 10;
objct.id;
