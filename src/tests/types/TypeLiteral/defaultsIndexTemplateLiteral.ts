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
  Literal: { [key: `foo${string}`]: 1 };
  Object: { [key: `foo${string}`]: object };
  String: { [key: `foo${string}`]: string };
  Number: { [key: `foo${string}`]: number };
  Boolean: { [key: `foo${string}`]: boolean };
  Any: { [key: `foo${string}`]: any };
}

// No changes here since parenthesis are removed by linter automatically
interface ParenthesizedTypes extends TypeFrame {
  Literal: { [key: `foo${string}`]: 1 };
  Object: { [key: `foo${string}`]: object };
  String: { [key: `foo${string}`]: string };
  Number: { [key: `foo${string}`]: number };
  Boolean: { [key: `foo${string}`]: boolean };
  Any: { [key: `foo${string}`]: any };
}

interface TypeReferenceTypesBuiltin extends TypeFrame {
  Literal: { [key: `foo${string}`]: Promise<1> };
  Object: { [key: `foo${string}`]: Promise<object> };
  String: { [key: `foo${string}`]: Promise<string> };
  Number: { [key: `foo${string}`]: Promise<number> };
  Boolean: { [key: `foo${string}`]: Promise<boolean> };
  Any: { [key: `foo${string}`]: Promise<any> };
}

type L = { [key: `foo${string}`]: 1 };
type O = { [key: `foo${string}`]: object };
type S = { [key: `foo${string}`]: string };
type N = { [key: `foo${string}`]: number };
type B = { [key: `foo${string}`]: boolean };
type A = { [key: `foo${string}`]: any };

interface TypeReferenceTypesPredefined extends TypeFrame {
  Literal: L;
  Object: O;
  String: S;
  Number: N;
  Boolean: B;
  Any: A;
}

interface UnionTypes extends TypeFrame {
  Literal: { [key: `foo${string}`]: 1 | string };
  Object: { [key: `foo${string}`]: object | string };
  String: { [key: `foo${string}`]: string | number };
  Number: { [key: `foo${string}`]: number | boolean };
  Boolean: { [key: `foo${string}`]: boolean | any };
  Any: { [key: `foo${string}`]: any | 1 };
}

interface IntersectionTypes extends TypeFrame {
  Literal: { [key: `foo${string}`]: 1 & number };
  Object: { [key: `foo${string}`]: object & {} };
  String: { [key: `foo${string}`]: string & "two" };
  Number: { [key: `foo${string}`]: number & 2 };
  Boolean: { [key: `foo${string}`]: boolean & true };
  Any: { [key: `foo${string}`]: any & 2 };
}

interface TypeLiterals extends TypeFrame {
  Literal: { [key: `foo${string}`]: { key: 1 } };
  Object: { [key: `foo${string}`]: { key: object } };
  String: { [key: `foo${string}`]: { key: string } };
  Number: { [key: `foo${string}`]: { key: number } };
  Boolean: { [key: `foo${string}`]: { key: boolean } };
  Any: { [key: `foo${string}`]: { key: any } };
}

interface TupleTypes extends TypeFrame {
  Literal: { [key: `foo${string}`]: [1] };
  Object: { [key: `foo${string}`]: [object] };
  String: { [key: `foo${string}`]: [string] };
  Number: { [key: `foo${string}`]: [number] };
  Boolean: { [key: `foo${string}`]: [boolean] };
  Any: { [key: `foo${string}`]: [any] };
}

interface ArrayTypes extends TypeFrame {
  Literal: { [key: `foo${string}`]: 1[] };
  Object: { [key: `foo${string}`]: object[] };
  String: { [key: `foo${string}`]: string[] };
  Number: { [key: `foo${string}`]: number[] };
  Boolean: { [key: `foo${string}`]: boolean[] };
  Any: { [key: `foo${string}`]: any[] };
}

interface FunctionTypes extends TypeFrame {
  Literal: { [key: `foo${string}`]: (param: 1) => void };
  Object: { [key: `foo${string}`]: (param: object) => void };
  String: { [key: `foo${string}`]: (param: string) => void };
  Number: { [key: `foo${string}`]: (param: number) => void };
  Boolean: { [key: `foo${string}`]: (param: boolean) => void };
  Any: { [key: `foo${string}`]: (param: any) => void };
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
    Literal: { fooKey: 1 },
    Object: { fooKey: {} },
    String: { fooKey: "two" },
    Number: { fooKey: 2 },
    Boolean: { fooKey: true },
    Any: { fooKey: 2 },
  },
  TypeReferenceBuiltin: {
    Literal: { fooKey: promisify(1) },
    Object: { fooKey: promisify({}) },
    String: { fooKey: promisify("two") },
    Number: { fooKey: promisify(2) },
    Boolean: { fooKey: promisify(true) },
    Any: { fooKey: promisify(2) },
  },
  TypeReferencePredefined: {
    Literal: { fooKey: 1 },
    Object: { fooKey: {} },
    String: { fooKey: "two" },
    Number: { fooKey: 2 },
    Boolean: { fooKey: true },
    Any: { fooKey: 2 },
  },
  UnionType: {
    Literal: { fooKey: 1 },
    Object: { fooKey: {} },
    String: { fooKey: "two" },
    Number: { fooKey: 2 },
    Boolean: { fooKey: true },
    Any: { fooKey: 2 },
  },
  IntersectionType: {
    Literal: { fooKey: 1 },
    Object: { fooKey: {} },
    String: { fooKey: "two" },
    Number: { fooKey: 2 },
    Boolean: { fooKey: true },
    Any: { fooKey: 2 },
  },
  TypeLiteral: {
    Literal: { fooKey: { key: 1 } },
    Object: { fooKey: { key: {} } },
    String: { fooKey: { key: "two" } },
    Number: { fooKey: { key: 2 } },
    Boolean: { fooKey: { key: true } },
    Any: { fooKey: { key: 2 } },
  },
  TupleType: {
    Literal: { fooKey: [1] },
    Object: { fooKey: [{}] },
    String: { fooKey: ["two"] },
    Number: { fooKey: [2] },
    Boolean: { fooKey: [true] },
    Any: { fooKey: [2] },
  },
  ArrayType: {
    Literal: { fooKey: [1, 1] },
    Object: { fooKey: [{}, {}] },
    String: { fooKey: ["two", "two"] },
    Number: { fooKey: [2, 2] },
    Boolean: { fooKey: [true, true] },
    Any: { fooKey: [2, 2] },
  },
  FunctionType: {
    Literal: { fooKey: (param: 1) => {} },
    Object: { fooKey: (param: object) => {} },
    String: { fooKey: (param: string) => {} },
    Number: { fooKey: (param: number) => {} },
    Boolean: { fooKey: (param: boolean) => {} },
    Any: { fooKey: (param: any) => {} },
  },
  ConstructorType: {
    Literal: { fooKey: 1 },
    Object: { fooKey: {} },
    String: { fooKey: "two" },
    Number: { fooKey: 2 },
    Boolean: { fooKey: true },
    Any: { fooKey: 2 },
  },
};
