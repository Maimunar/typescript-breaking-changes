/* eslint @typescript-eslint/no-explicit-any: 0*/

type TypeKeys = "Literal" | "Object" | "String" | "Number" | "Boolean" | "Any";
type TypeFrame = { [Property in TypeKeys]: any };

export const typeKeys: TypeKeys[] = [
  "Literal",
  "Object",
  "String",
  "Number",
  "Boolean",
  "Any",
];

type KeysOfMap = "mappedKey";

interface ConstructorTypes extends TypeFrame {
  Literal: { [Property in KeysOfMap]: 1 };
  Object: { [Property in KeysOfMap]: object };
  String: { [Property in KeysOfMap]: string };
  Number: { [Property in KeysOfMap]: number };
  Boolean: { [Property in KeysOfMap]: boolean };
  Any: { [Property in KeysOfMap]: any };
}

// No changes here since parenthesis are removed by linter automatically
interface ParenthesizedTypes extends TypeFrame {
  Literal: { [Property in KeysOfMap]: 1 };
  Object: { [Property in KeysOfMap]: object };
  String: { [Property in KeysOfMap]: string };
  Number: { [Property in KeysOfMap]: number };
  Boolean: { [Property in KeysOfMap]: boolean };
  Any: { [Property in KeysOfMap]: any };
}

interface TypeReferenceTypesBuiltin extends TypeFrame {
  Literal: { [Property in KeysOfMap]: Promise<1> };
  Object: { [Property in KeysOfMap]: Promise<object> };
  String: { [Property in KeysOfMap]: Promise<string> };
  Number: { [Property in KeysOfMap]: Promise<number> };
  Boolean: { [Property in KeysOfMap]: Promise<boolean> };
  Any: { [Property in KeysOfMap]: Promise<any> };
}

type L = { [Property in KeysOfMap]: 1 };
type O = { [Property in KeysOfMap]: object };
type S = { [Property in KeysOfMap]: string };
type N = { [Property in KeysOfMap]: number };
type B = { [Property in KeysOfMap]: boolean };
type A = { [Property in KeysOfMap]: any };

interface TypeReferenceTypesPredefined extends TypeFrame {
  Literal: L;
  Object: O;
  String: S;
  Number: N;
  Boolean: B;
  Any: A;
}

interface UnionTypes extends TypeFrame {
  Literal: { [Property in KeysOfMap]: 1 | string };
  Object: { [Property in KeysOfMap]: object | string };
  String: { [Property in KeysOfMap]: string | number };
  Number: { [Property in KeysOfMap]: number | boolean };
  Boolean: { [Property in KeysOfMap]: boolean | any };
  Any: { [Property in KeysOfMap]: any | 1 };
}

interface IntersectionTypes extends TypeFrame {
  Literal: { [Property in KeysOfMap]: 1 & number };
  Object: { [Property in KeysOfMap]: object & {} };
  String: { [Property in KeysOfMap]: string & "two" };
  Number: { [Property in KeysOfMap]: number & 2 };
  Boolean: { [Property in KeysOfMap]: boolean & true };
  Any: { [Property in KeysOfMap]: any & 2 };
}

interface TypeLiterals extends TypeFrame {
  Literal: { [Property in KeysOfMap]: { key: 1 } };
  Object: { [Property in KeysOfMap]: { key: object } };
  String: { [Property in KeysOfMap]: { key: string } };
  Number: { [Property in KeysOfMap]: { key: number } };
  Boolean: { [Property in KeysOfMap]: { key: boolean } };
  Any: { [Property in KeysOfMap]: { key: any } };
}

interface TupleTypes extends TypeFrame {
  Literal: { [Property in KeysOfMap]: [1] };
  Object: { [Property in KeysOfMap]: [object] };
  String: { [Property in KeysOfMap]: [string] };
  Number: { [Property in KeysOfMap]: [number] };
  Boolean: { [Property in KeysOfMap]: [boolean] };
  Any: { [Property in KeysOfMap]: [any] };
}

interface ArrayTypes extends TypeFrame {
  Literal: { [Property in KeysOfMap]: 1[] };
  Object: { [Property in KeysOfMap]: object[] };
  String: { [Property in KeysOfMap]: string[] };
  Number: { [Property in KeysOfMap]: number[] };
  Boolean: { [Property in KeysOfMap]: boolean[] };
  Any: { [Property in KeysOfMap]: any[] };
}

interface FunctionTypes extends TypeFrame {
  Literal: { [Property in KeysOfMap]: (param: 1) => void };
  Object: { [Property in KeysOfMap]: (param: object) => void };
  String: { [Property in KeysOfMap]: (param: string) => void };
  Number: { [Property in KeysOfMap]: (param: number) => void };
  Boolean: { [Property in KeysOfMap]: (param: boolean) => void };
  Any: { [Property in KeysOfMap]: (param: any) => void };
}

export interface Defaults {
  ParenthesizedType: ParenthesizedTypes;
  TypeReferenceBuiltin: TypeReferenceTypesBuiltin;
  TypeReferencePredefined: TypeReferenceTypesPredefined;
  UnionType: UnionTypes;
  IntersectionType: IntersectionTypes;
  TypeLiteral: TypeLiterals;
  TupleType: TupleTypes;
  ArrayType: ArrayTypes;
  FunctionType: FunctionTypes;
  ConstructorType: ConstructorTypes;
}

export const defaultsKeys: (keyof Defaults)[] = [
  "ParenthesizedType",
  "TypeReferenceBuiltin",
  "TypeReferencePredefined",
  "UnionType",
  "IntersectionType",
  "TypeLiteral",
  "TupleType",
  "ArrayType",
  "FunctionType",
  "ConstructorType",
];

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

export const defaults: Defaults = {
  ParenthesizedType: {
    Literal: { mappedKey: 1 },
    Object: { mappedKey: {} },
    String: { mappedKey: "two" },
    Number: { mappedKey: 2 },
    Boolean: { mappedKey: true },
    Any: { mappedKey: 2 },
  },
  TypeReferenceBuiltin: {
    Literal: { mappedKey: promisify(1) },
    Object: { mappedKey: promisify({}) },
    String: { mappedKey: promisify("two") },
    Number: { mappedKey: promisify(2) },
    Boolean: { mappedKey: promisify(true) },
    Any: { mappedKey: promisify(2) },
  },
  TypeReferencePredefined: {
    Literal: { mappedKey: 1 },
    Object: { mappedKey: {} },
    String: { mappedKey: "two" },
    Number: { mappedKey: 2 },
    Boolean: { mappedKey: true },
    Any: { mappedKey: 2 },
  },
  UnionType: {
    Literal: { mappedKey: 1 },
    Object: { mappedKey: {} },
    String: { mappedKey: "two" },
    Number: { mappedKey: 2 },
    Boolean: { mappedKey: true },
    Any: { mappedKey: 2 },
  },
  IntersectionType: {
    Literal: { mappedKey: 1 },
    Object: { mappedKey: {} },
    String: { mappedKey: "two" },
    Number: { mappedKey: 2 },
    Boolean: { mappedKey: true },
    Any: { mappedKey: 2 },
  },
  TypeLiteral: {
    Literal: { mappedKey: { key: 1 } },
    Object: { mappedKey: { key: {} } },
    String: { mappedKey: { key: "two" } },
    Number: { mappedKey: { key: 2 } },
    Boolean: { mappedKey: { key: true } },
    Any: { mappedKey: { key: 2 } },
  },
  TupleType: {
    Literal: { mappedKey: [1] },
    Object: { mappedKey: [{}] },
    String: { mappedKey: ["two"] },
    Number: { mappedKey: [2] },
    Boolean: { mappedKey: [true] },
    Any: { mappedKey: [2] },
  },
  ArrayType: {
    Literal: { mappedKey: [1, 1] },
    Object: { mappedKey: [{}, {}] },
    String: { mappedKey: ["two", "two"] },
    Number: { mappedKey: [2, 2] },
    Boolean: { mappedKey: [true, true] },
    Any: { mappedKey: [2, 2] },
  },
  FunctionType: {
    Literal: { mappedKey: (param: 1) => {} },
    Object: { mappedKey: (param: object) => {} },
    String: { mappedKey: (param: string) => {} },
    Number: { mappedKey: (param: number) => {} },
    Boolean: { mappedKey: (param: boolean) => {} },
    Any: { mappedKey: (param: any) => {} },
  },
  ConstructorType: {
    Literal: { mappedKey: 1 },
    Object: { mappedKey: {} },
    String: { mappedKey: "two" },
    Number: { mappedKey: 2 },
    Boolean: { mappedKey: true },
    Any: { mappedKey: 2 },
  },
};
