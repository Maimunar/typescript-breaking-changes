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

interface ConstructorTypes extends TypeFrame {
  Literal: { [key: string]: 1 };
  Object: { [key: string]: object };
  String: { [key: string]: string };
  Number: { [key: string]: number };
  Boolean: { [key: string]: boolean };
  Any: { [key: string]: any };
}

// No changes here since parenthesis are removed by linter automatically
interface ParenthesizedTypes extends TypeFrame {
  Literal: { [key: string]: 1 };
  Object: { [key: string]: object };
  String: { [key: string]: string };
  Number: { [key: string]: number };
  Boolean: { [key: string]: boolean };
  Any: { [key: string]: any };
}

interface TypeReferenceTypesBuiltin extends TypeFrame {
  Literal: { [key: string]: Promise<1> };
  Object: { [key: string]: Promise<object> };
  String: { [key: string]: Promise<string> };
  Number: { [key: string]: Promise<number> };
  Boolean: { [key: string]: Promise<boolean> };
  Any: { [key: string]: Promise<any> };
}

type L = { [key: string]: 1 };
type O = { [key: string]: object };
type S = { [key: string]: string };
type N = { [key: string]: number };
type B = { [key: string]: boolean };
type A = { [key: string]: any };

interface TypeReferenceTypesPredefined extends TypeFrame {
  Literal: L;
  Object: O;
  String: S;
  Number: N;
  Boolean: B;
  Any: A;
}

interface UnionTypes extends TypeFrame {
  Literal: { [key: string]: 1 | string };
  Object: { [key: string]: object | string };
  String: { [key: string]: string | number };
  Number: { [key: string]: number | boolean };
  Boolean: { [key: string]: boolean | any };
  Any: { [key: string]: any | 1 };
}

interface IntersectionTypes extends TypeFrame {
  Literal: { [key: string]: 1 & number };
  Object: { [key: string]: object & {} };
  String: { [key: string]: string & "two" };
  Number: { [key: string]: number & 2 };
  Boolean: { [key: string]: boolean & true };
  Any: { [key: string]: any & 2 };
}

interface TypeLiterals extends TypeFrame {
  Literal: { [key: string]: { key: 1 } };
  Object: { [key: string]: { key: object } };
  String: { [key: string]: { key: string } };
  Number: { [key: string]: { key: number } };
  Boolean: { [key: string]: { key: boolean } };
  Any: { [key: string]: { key: any } };
}

interface TupleTypes extends TypeFrame {
  Literal: { [key: string]: [1] };
  Object: { [key: string]: [object] };
  String: { [key: string]: [string] };
  Number: { [key: string]: [number] };
  Boolean: { [key: string]: [boolean] };
  Any: { [key: string]: [any] };
}

interface ArrayTypes extends TypeFrame {
  Literal: { [key: string]: 1[] };
  Object: { [key: string]: object[] };
  String: { [key: string]: string[] };
  Number: { [key: string]: number[] };
  Boolean: { [key: string]: boolean[] };
  Any: { [key: string]: any[] };
}

interface FunctionTypes extends TypeFrame {
  Literal: { [key: string]: (param: 1) => void };
  Object: { [key: string]: (param: object) => void };
  String: { [key: string]: (param: string) => void };
  Number: { [key: string]: (param: number) => void };
  Boolean: { [key: string]: (param: boolean) => void };
  Any: { [key: string]: (param: any) => void };
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
    Literal: { otherKey: 1 },
    Object: { otherKey: {} },
    String: { otherKey: "two" },
    Number: { otherKey: 2 },
    Boolean: { otherKey: true },
    Any: { otherKey: 2 },
  },
  TypeReferenceBuiltin: {
    Literal: { otherKey: promisify(1) },
    Object: { otherKey: promisify({}) },
    String: { otherKey: promisify("two") },
    Number: { otherKey: promisify(2) },
    Boolean: { otherKey: promisify(true) },
    Any: { otherKey: promisify(2) },
  },
  TypeReferencePredefined: {
    Literal: { otherKey: 1 },
    Object: { otherKey: {} },
    String: { otherKey: "two" },
    Number: { otherKey: 2 },
    Boolean: { otherKey: true },
    Any: { otherKey: 2 },
  },
  UnionType: {
    Literal: { otherKey: 1 },
    Object: { otherKey: {} },
    String: { otherKey: "two" },
    Number: { otherKey: 2 },
    Boolean: { otherKey: true },
    Any: { otherKey: 2 },
  },
  IntersectionType: {
    Literal: { otherKey: 1 },
    Object: { otherKey: {} },
    String: { otherKey: "two" },
    Number: { otherKey: 2 },
    Boolean: { otherKey: true },
    Any: { otherKey: 2 },
  },
  TypeLiteral: {
    Literal: { otherKey: { key: 1 } },
    Object: { otherKey: { key: {} } },
    String: { otherKey: { key: "two" } },
    Number: { otherKey: { key: 2 } },
    Boolean: { otherKey: { key: true } },
    Any: { otherKey: { key: 2 } },
  },
  TupleType: {
    Literal: { otherKey: [1] },
    Object: { otherKey: [{}] },
    String: { otherKey: ["two"] },
    Number: { otherKey: [2] },
    Boolean: { otherKey: [true] },
    Any: { otherKey: [2] },
  },
  ArrayType: {
    Literal: { otherKey: [1, 1] },
    Object: { otherKey: [{}, {}] },
    String: { otherKey: ["two", "two"] },
    Number: { otherKey: [2, 2] },
    Boolean: { otherKey: [true, true] },
    Any: { otherKey: [2, 2] },
  },
  FunctionType: {
    Literal: { otherKey: (param: 1) => {} },
    Object: { otherKey: (param: object) => {} },
    String: { otherKey: (param: string) => {} },
    Number: { otherKey: (param: number) => {} },
    Boolean: { otherKey: (param: boolean) => {} },
    Any: { otherKey: (param: any) => {} },
  },
  ConstructorType: {
    Literal: { otherKey: 1 },
    Object: { otherKey: {} },
    String: { otherKey: "two" },
    Number: { otherKey: 2 },
    Boolean: { otherKey: true },
    Any: { otherKey: 2 },
  },
};
