/* eslint @typescript-eslint/no-explicit-any: 0*/

type TypeKeys = "Literal" | "Object" | "String" | "Number" | "Boolean" | "Any";
type TypeFrame = { [Property in TypeKeys]?: any };

export const typeKeys: TypeKeys[] = [
  "Literal",
  "Object",
  "String",
  "Number",
  "Boolean",
  "Any",
];

interface ConstructorTypes extends TypeFrame {
  Literal: { key?: 1 };
  Object: { key?: object };
  String: { key?: string };
  Number: { key?: number };
  Boolean: { key?: boolean };
  Any: { key?: any };
}

// No changes here since parenthesis are removed by linter automatically
interface ParenthesizedTypes extends TypeFrame {
  Literal: { key?: 1 };
  Object: { key?: object };
  String: { key?: string };
  Number: { key?: number };
  Boolean: { key?: boolean };
  Any: { key?: any };
}

interface TypeReferenceTypesBuiltin extends TypeFrame {
  Literal: { key?: Promise<1> };
  Object: { key?: Promise<object> };
  String: { key?: Promise<string> };
  Number: { key?: Promise<number> };
  Boolean: { key?: Promise<boolean> };
  Any: { key?: Promise<any> };
}

type L = { key?: 1 };
type O = { key?: object };
type S = { key?: string };
type N = { key?: number };
type B = { key?: boolean };
type A = { key?: any };

interface TypeReferenceTypesPredefined extends TypeFrame {
  Literal: L;
  Object: O;
  String: S;
  Number: N;
  Boolean: B;
  Any: A;
}

interface UnionTypes extends TypeFrame {
  Literal: { key?: 1 | string };
  Object: { key?: object | string };
  String: { key?: string | number };
  Number: { key?: number | boolean };
  Boolean: { key?: boolean | any };
  Any: { key?: any | 1 };
}

interface IntersectionTypes extends TypeFrame {
  Literal: { key?: 1 & number };
  Object: { key?: object & {} };
  String: { key?: string & "two" };
  Number: { key?: number & 2 };
  Boolean: { key?: boolean & true };
  Any: { key?: any & 2 };
}

interface TypeLiterals extends TypeFrame {
  Literal: { key: { key?: 1 } };
  Object: { key: { key?: object } };
  String: { key: { key?: string } };
  Number: { key: { key?: number } };
  Boolean: { key: { key?: boolean } };
  Any: { key: { key?: any } };
}

interface TupleTypes extends TypeFrame {
  Literal: { key?: [1] };
  Object: { key?: [object] };
  String: { key?: [string] };
  Number: { key?: [number] };
  Boolean: { key?: [boolean] };
  Any: { key?: [any] };
}

interface ArrayTypes extends TypeFrame {
  Literal: { key?: 1[] };
  Object: { key?: object[] };
  String: { key?: string[] };
  Number: { key?: number[] };
  Boolean: { key?: boolean[] };
  Any: { key?: any[] };
}

interface FunctionTypes extends TypeFrame {
  Literal: { key?: (param: 1) => void };
  Object: { key?: (param: object) => void };
  String: { key?: (param: string) => void };
  Number: { key?: (param: number) => void };
  Boolean: { key?: (param: boolean) => void };
  Any: { key?: (param: any) => void };
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
