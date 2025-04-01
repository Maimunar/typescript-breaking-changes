/* eslint @typescript-eslint/no-explicit-any: 0*/
interface ConstructorDefaults {
  Literal: 1;
  Object: object;
  String: string;
  Number: number;
  Boolean: boolean;
  AnyType: any;
}

const constructorDefaults: ConstructorDefaults = {
  Literal: 1,
  Object: {},
  String: "two",
  Number: 2,
  Boolean: true,
  AnyType: 2,
};

type ConstructorTypes = {
  [Property in keyof ConstructorDefaults]: any;
};

// No changes here since parenthesis are removed by linter automatically
interface ParenthesizedTypes extends ConstructorTypes {
  Literal: 1;
  Object: object;
  String: string;
  Number: number;
  Boolean: boolean;
  AnyType: any;
}

const parenthesizedDefaults: ParenthesizedTypes = {
  Literal: 1,
  Object: {},
  String: "two",
  Number: 2,
  Boolean: true,
  AnyType: 2,
};

interface TypeReferenceTypes extends ConstructorTypes {
  Literal: Promise<1>;
  Object: Promise<object>;
  String: Promise<string>;
  Number: Promise<number>;
  Boolean: Promise<boolean>;
  AnyType: Promise<any>;
}

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

const typeReferenceDefaults: TypeReferenceTypes = {
  Literal: promisify(1),
  Object: promisify({}),
  String: promisify("two"),
  Number: promisify(2),
  Boolean: promisify(true),
  AnyType: promisify(2),
};

interface UnionTypeTypes extends ConstructorTypes {
  Literal: 1 | string;
  Object: object | string;
  String: string | number;
  Number: number | boolean;
  Boolean: boolean | any;
  AnyType: any | 1;
}

const unionTypeDefaults: UnionTypeTypes = {
  Literal: 1,
  Object: {},
  String: "two",
  Number: 2,
  Boolean: true,
  AnyType: 2,
};

interface IntersectionTypeTypes extends ConstructorTypes {
  Literal: 1 & number;
  Object: object & {};
  String: string & "two";
  Number: number & 2;
  Boolean: boolean & true;
  AnyType: any & 2;
}

const intersectionTypeDefaults: IntersectionTypeTypes = {
  Literal: 1,
  Object: {},
  String: "two",
  Number: 2,
  Boolean: true,
  AnyType: 2,
};

interface TypeLiteralTypes extends ConstructorTypes {
  Literal: { key: 1 };
  Object: { key: object };
  String: { key: string };
  Number: { key: number };
  Boolean: { key: boolean };
  AnyType: { key: any };
}

const typeLiteralDefaults: TypeLiteralTypes = {
  Literal: { key: 1 },
  Object: { key: {} },
  String: { key: "two" },
  Number: { key: 2 },
  Boolean: { key: true },
  AnyType: { key: 2 },
};

interface TupleTypeTypes extends ConstructorTypes {
  Literal: [1];
  Object: [object];
  String: [string];
  Number: [number];
  Boolean: [boolean];
  AnyType: [any];
}

const tupleTypeDefaults: TupleTypeTypes = {
  Literal: [1],
  Object: [{}],
  String: ["two"],
  Number: [2],
  Boolean: [true],
  AnyType: [2],
};

interface ArrayTypeTypes extends ConstructorTypes {
  Literal: 1[];
  Object: object[];
  String: string[];
  Number: number[];
  Boolean: boolean[];
  AnyType: any[];
}

const arrayTypeDefaults: ArrayTypeTypes = {
  Literal: [1, 1],
  Object: [{}, {}],
  String: ["two", "two"],
  Number: [2, 2],
  Boolean: [true, true],
  AnyType: [2, 2],
};

interface FunctionTypeTypes extends ConstructorTypes {
  Literal: (param: 1) => void;
  Object: (param: object) => void;
  String: (param: string) => void;
  Number: (param: number) => void;
  Boolean: (param: boolean) => void;
  AnyType: (param: any) => void;
}

const functionTypeDefaults: FunctionTypeTypes = {
  Literal: (param: 1) => {},
  Object: (param: object) => {},
  String: (param: string) => {},
  Number: (param: number) => {},
  Boolean: (param: boolean) => {},
  AnyType: (param: any) => {},
};

export interface Defaults {
  ParenthesizedType: ParenthesizedTypes;
  TypeReference: TypeReferenceTypes;
  UnionType: UnionTypeTypes;
  IntersectionType: IntersectionTypeTypes;
  TypeLiteral: TypeLiteralTypes;
  TupleType: TupleTypeTypes;
  ArrayType: ArrayTypeTypes;
  FunctionType: FunctionTypeTypes;
  ConstructorType: ConstructorDefaults;
}

export const defaults: Defaults = {
  ParenthesizedType: parenthesizedDefaults,
  TypeReference: typeReferenceDefaults,
  UnionType: unionTypeDefaults,
  IntersectionType: intersectionTypeDefaults,
  TypeLiteral: typeLiteralDefaults,
  TupleType: tupleTypeDefaults,
  ArrayType: arrayTypeDefaults,
  FunctionType: functionTypeDefaults,
  ConstructorType: constructorDefaults,
};
