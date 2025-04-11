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
  Literal?: { [key: string]: 1 };
  Object?: { [key: string]: object };
  String?: { [key: string]: string };
  Number?: { [key: string]: number };
  Boolean?: { [key: string]: boolean };
  Any?: { [key: string]: any };
}

// No changes here since parenthesis are removed by linter automatically
interface ParenthesizedTypes extends TypeFrame {
  Literal?: { [key: string]: 1 };
  Object?: { [key: string]: object };
  String?: { [key: string]: string };
  Number?: { [key: string]: number };
  Boolean?: { [key: string]: boolean };
  Any?: { [key: string]: any };
}

interface TypeReferenceTypesBuiltin extends TypeFrame {
  Literal?: { [key: string]: Promise<1> };
  Object?: { [key: string]: Promise<object> };
  String?: { [key: string]: Promise<string> };
  Number?: { [key: string]: Promise<number> };
  Boolean?: { [key: string]: Promise<boolean> };
  Any?: { [key: string]: Promise<any> };
}

type L = { [key: string]: 1 };
type O = { [key: string]: object };
type S = { [key: string]: string };
type N = { [key: string]: number };
type B = { [key: string]: boolean };
type A = { [key: string]: any };

interface TypeReferenceTypesPredefined extends TypeFrame {
  Literal?: L;
  Object?: O;
  String?: S;
  Number?: N;
  Boolean?: B;
  Any?: A;
}

interface UnionTypes extends TypeFrame {
  Literal?: { [key: string]: 1 | string };
  Object?: { [key: string]: object | string };
  String?: { [key: string]: string | number };
  Number?: { [key: string]: number | boolean };
  Boolean?: { [key: string]: boolean | any };
  Any?: { [key: string]: any | 1 };
}

interface IntersectionTypes extends TypeFrame {
  Literal?: { [key: string]: 1 & number };
  Object?: { [key: string]: object & {} };
  String?: { [key: string]: string & "two" };
  Number?: { [key: string]: number & 2 };
  Boolean?: { [key: string]: boolean & true };
  Any?: { [key: string]: any & 2 };
}

interface TypeLiterals extends TypeFrame {
  Literal?: { [key: string]: { key: 1 } };
  Object?: { [key: string]: { key: object } };
  String?: { [key: string]: { key: string } };
  Number?: { [key: string]: { key: number } };
  Boolean?: { [key: string]: { key: boolean } };
  Any?: { [key: string]: { key: any } };
}

interface TupleTypes extends TypeFrame {
  Literal?: { [key: string]: [1] };
  Object?: { [key: string]: [object] };
  String?: { [key: string]: [string] };
  Number?: { [key: string]: [number] };
  Boolean?: { [key: string]: [boolean] };
  Any?: { [key: string]: [any] };
}

interface ArrayTypes extends TypeFrame {
  Literal?: { [key: string]: 1[] };
  Object?: { [key: string]: object[] };
  String?: { [key: string]: string[] };
  Number?: { [key: string]: number[] };
  Boolean?: { [key: string]: boolean[] };
  Any?: { [key: string]: any[] };
}

interface FunctionTypes extends TypeFrame {
  Literal?: { [key: string]: (param: 1) => void };
  Object?: { [key: string]: (param: object) => void };
  String?: { [key: string]: (param: string) => void };
  Number?: { [key: string]: (param: number) => void };
  Boolean?: { [key: string]: (param: boolean) => void };
  Any?: { [key: string]: (param: any) => void };
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
