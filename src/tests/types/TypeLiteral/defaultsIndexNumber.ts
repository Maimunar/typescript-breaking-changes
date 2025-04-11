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
  Literal: { [key: number]: 1 };
  Object: { [key: number]: object };
  String: { [key: number]: string };
  Number: { [key: number]: number };
  Boolean: { [key: number]: boolean };
  Any: { [key: number]: any };
}

// No changes here since parenthesis are removed by linter automatically
interface ParenthesizedTypes extends TypeFrame {
  Literal: { [key: number]: 1 };
  Object: { [key: number]: object };
  String: { [key: number]: string };
  Number: { [key: number]: number };
  Boolean: { [key: number]: boolean };
  Any: { [key: number]: any };
}

interface TypeReferenceTypesBuiltin extends TypeFrame {
  Literal: { [key: number]: Promise<1> };
  Object: { [key: number]: Promise<object> };
  String: { [key: number]: Promise<string> };
  Number: { [key: number]: Promise<number> };
  Boolean: { [key: number]: Promise<boolean> };
  Any: { [key: number]: Promise<any> };
}

type L = { [key: number]: 1 };
type O = { [key: number]: object };
type S = { [key: number]: string };
type N = { [key: number]: number };
type B = { [key: number]: boolean };
type A = { [key: number]: any };

interface TypeReferenceTypesPredefined extends TypeFrame {
  Literal: L;
  Object: O;
  String: S;
  Number: N;
  Boolean: B;
  Any: A;
}

interface UnionTypes extends TypeFrame {
  Literal: { [key: number]: 1 | string };
  Object: { [key: number]: object | string };
  String: { [key: number]: string | number };
  Number: { [key: number]: number | boolean };
  Boolean: { [key: number]: boolean | any };
  Any: { [key: number]: any | 1 };
}

interface IntersectionTypes extends TypeFrame {
  Literal: { [key: number]: 1 & number };
  Object: { [key: number]: object & {} };
  String: { [key: number]: string & "two" };
  Number: { [key: number]: number & 2 };
  Boolean: { [key: number]: boolean & true };
  Any: { [key: number]: any & 2 };
}

interface TypeLiterals extends TypeFrame {
  Literal: { [key: number]: { key: 1 } };
  Object: { [key: number]: { key: object } };
  String: { [key: number]: { key: string } };
  Number: { [key: number]: { key: number } };
  Boolean: { [key: number]: { key: boolean } };
  Any: { [key: number]: { key: any } };
}

interface TupleTypes extends TypeFrame {
  Literal: { [key: number]: [1] };
  Object: { [key: number]: [object] };
  String: { [key: number]: [string] };
  Number: { [key: number]: [number] };
  Boolean: { [key: number]: [boolean] };
  Any: { [key: number]: [any] };
}

interface ArrayTypes extends TypeFrame {
  Literal: { [key: number]: 1[] };
  Object: { [key: number]: object[] };
  String: { [key: number]: string[] };
  Number: { [key: number]: number[] };
  Boolean: { [key: number]: boolean[] };
  Any: { [key: number]: any[] };
}

interface FunctionTypes extends TypeFrame {
  Literal: { [key: number]: (param: 1) => void };
  Object: { [key: number]: (param: object) => void };
  String: { [key: number]: (param: string) => void };
  Number: { [key: number]: (param: number) => void };
  Boolean: { [key: number]: (param: boolean) => void };
  Any: { [key: number]: (param: any) => void };
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
    Literal: { 3: 1 },
    Object: { 3: {} },
    String: { 3: "two" },
    Number: { 3: 2 },
    Boolean: { 3: true },
    Any: { 3: 2 },
  },
  TypeReferenceBuiltin: {
    Literal: { 3: promisify(1) },
    Object: { 3: promisify({}) },
    String: { 3: promisify("two") },
    Number: { 3: promisify(2) },
    Boolean: { 3: promisify(true) },
    Any: { 3: promisify(2) },
  },
  TypeReferencePredefined: {
    Literal: { 3: 1 },
    Object: { 3: {} },
    String: { 3: "two" },
    Number: { 3: 2 },
    Boolean: { 3: true },
    Any: { 3: 2 },
  },
  UnionType: {
    Literal: { 3: 1 },
    Object: { 3: {} },
    String: { 3: "two" },
    Number: { 3: 2 },
    Boolean: { 3: true },
    Any: { 3: 2 },
  },
  IntersectionType: {
    Literal: { 3: 1 },
    Object: { 3: {} },
    String: { 3: "two" },
    Number: { 3: 2 },
    Boolean: { 3: true },
    Any: { 3: 2 },
  },
  TypeLiteral: {
    Literal: { 3: { key: 1 } },
    Object: { 3: { key: {} } },
    String: { 3: { key: "two" } },
    Number: { 3: { key: 2 } },
    Boolean: { 3: { key: true } },
    Any: { 3: { key: 2 } },
  },
  TupleType: {
    Literal: { 3: [1] },
    Object: { 3: [{}] },
    String: { 3: ["two"] },
    Number: { 3: [2] },
    Boolean: { 3: [true] },
    Any: { 3: [2] },
  },
  ArrayType: {
    Literal: { 3: [1, 1] },
    Object: { 3: [{}, {}] },
    String: { 3: ["two", "two"] },
    Number: { 3: [2, 2] },
    Boolean: { 3: [true, true] },
    Any: { 3: [2, 2] },
  },
  FunctionType: {
    Literal: { 3: (param: 1) => {} },
    Object: { 3: (param: object) => {} },
    String: { 3: (param: string) => {} },
    Number: { 3: (param: number) => {} },
    Boolean: { 3: (param: boolean) => {} },
    Any: { 3: (param: any) => {} },
  },
  ConstructorType: {
    Literal: { 3: 1 },
    Object: { 3: {} },
    String: { 3: "two" },
    Number: { 3: 2 },
    Boolean: { 3: true },
    Any: { 3: 2 },
  },
};
