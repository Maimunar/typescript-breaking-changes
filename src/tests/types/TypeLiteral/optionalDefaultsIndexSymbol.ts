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
  Literal?: { [key: symbol]: 1 };
  Object?: { [key: symbol]: object };
  String?: { [key: symbol]: string };
  Number?: { [key: symbol]: number };
  Boolean?: { [key: symbol]: boolean };
  Any?: { [key: symbol]: any };
}

// No changes here since parenthesis are removed by linter automatically
interface ParenthesizedTypes extends TypeFrame {
  Literal?: { [key: symbol]: 1 };
  Object?: { [key: symbol]: object };
  String?: { [key: symbol]: string };
  Number?: { [key: symbol]: number };
  Boolean?: { [key: symbol]: boolean };
  Any?: { [key: symbol]: any };
}

interface TypeReferenceTypesBuiltin extends TypeFrame {
  Literal?: { [key: symbol]: Promise<1> };
  Object?: { [key: symbol]: Promise<object> };
  String?: { [key: symbol]: Promise<string> };
  Number?: { [key: symbol]: Promise<number> };
  Boolean?: { [key: symbol]: Promise<boolean> };
  Any?: { [key: symbol]: Promise<any> };
}

type L = { [key: symbol]: 1 };
type O = { [key: symbol]: object };
type S = { [key: symbol]: string };
type N = { [key: symbol]: number };
type B = { [key: symbol]: boolean };
type A = { [key: symbol]: any };

interface TypeReferenceTypesPredefined extends TypeFrame {
  Literal?: L;
  Object?: O;
  String?: S;
  Number?: N;
  Boolean?: B;
  Any?: A;
}

interface UnionTypes extends TypeFrame {
  Literal?: { [key: symbol]: 1 | string };
  Object?: { [key: symbol]: object | string };
  String?: { [key: symbol]: string | number };
  Number?: { [key: symbol]: number | boolean };
  Boolean?: { [key: symbol]: boolean | any };
  Any?: { [key: symbol]: any | 1 };
}

interface IntersectionTypes extends TypeFrame {
  Literal?: { [key: symbol]: 1 & number };
  Object?: { [key: symbol]: object & {} };
  String?: { [key: symbol]: string & "two" };
  Number?: { [key: symbol]: number & 2 };
  Boolean?: { [key: symbol]: boolean & true };
  Any?: { [key: symbol]: any & 2 };
}

interface TypeLiterals extends TypeFrame {
  Literal?: { [key: symbol]: { key: 1 } };
  Object?: { [key: symbol]: { key: object } };
  String?: { [key: symbol]: { key: string } };
  Number?: { [key: symbol]: { key: number } };
  Boolean?: { [key: symbol]: { key: boolean } };
  Any?: { [key: symbol]: { key: any } };
}

interface TupleTypes extends TypeFrame {
  Literal?: { [key: symbol]: [1] };
  Object?: { [key: symbol]: [object] };
  String?: { [key: symbol]: [string] };
  Number?: { [key: symbol]: [number] };
  Boolean?: { [key: symbol]: [boolean] };
  Any?: { [key: symbol]: [any] };
}

interface ArrayTypes extends TypeFrame {
  Literal?: { [key: symbol]: 1[] };
  Object?: { [key: symbol]: object[] };
  String?: { [key: symbol]: string[] };
  Number?: { [key: symbol]: number[] };
  Boolean?: { [key: symbol]: boolean[] };
  Any?: { [key: symbol]: any[] };
}

interface FunctionTypes extends TypeFrame {
  Literal?: { [key: symbol]: (param: 1) => void };
  Object?: { [key: symbol]: (param: object) => void };
  String?: { [key: symbol]: (param: string) => void };
  Number?: { [key: symbol]: (param: number) => void };
  Boolean?: { [key: symbol]: (param: boolean) => void };
  Any?: { [key: symbol]: (param: any) => void };
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
