import { ArrayAble, attribute, MapAble, SetAble, Params, NumberAble, StringAble } from "./ObjectTypes";
function DefaultValue(value: string) {
  return function (target: any, propertyName: string) {
    target[propertyName] = value;
    BaseObject.types.add(value);
  }
}

export class BaseObject {
  static types: Set<string> = new Set();
}


export class ArrayObject<T> extends Object implements ArrayAble<T> {
  static attributes: Set<string> = new Set();
  @DefaultValue(Object.prototype.toString.call([])) static type: string;
  _value: Array<T>;
  constructor(value: Array<T>) {
    super();
    this._value = value;
  }
  @attribute()
  len(): number {
    return this._value.length;
  }
  @attribute()
  first(): T {
    return this[0];
  }
  @attribute()
  last(): T {
    return this[this._value.length - 1]
  }
  @attribute()
  valueOfIndex(@Params("index") index: number): T {
    return this[index]
  }
  valueOf(): Array<T> {
    return this._value;
  }
}


export class MapObject<T, U> extends Object implements MapAble<T, U> {
  static attributes: Set<string> = new Set();
  @DefaultValue(Object.prototype.toString.call(new Map())) static type: string;
  _value: Map<T, U>;
  constructor(value: Map<T, U>) {
    super();
    this._value = value;
  }
  @attribute()
  len(): number {
    return this._value.size;
  }
  @attribute()
  get(@Params("key") key: T): U {
    return this.get(key);
  }
  valueOf(): Map<T, U> {
    throw this._value;
  }
}

export class SetObject<T> extends Object implements SetAble<T>{
  static attributes: Set<string> = new Set();
  @DefaultValue(Object.prototype.toString.call(new Set())) static type: string;
  _value: Set<T>;
  constructor(value: Set<T>) {
    super();
    this._value = value;
  }
  @attribute()
  len(): number {
    return this._value.size;
  }
  @attribute()
  has(@Params("value") value: T): boolean {
    return this._value.has(value);
  }
  valueOf(): Set<T> {
    throw this._value;
  }
}

export class NumberObj extends Number implements NumberAble {
  static attributes: Set<string> = new Set();
  _value: number;
  constructor(value: number) {
    super();
    this._value = value
  }
  @attribute()
  valueOf(): number {
    return this._value;
  }
}

export class StringObj extends String implements StringAble {
  static attributes: Set<string> = new Set();
  _value: string;
  constructor(value: string) {
    super();
    this._value = value
  }
  @attribute()
  valueOf(): string {
    return this._value;
  }
}