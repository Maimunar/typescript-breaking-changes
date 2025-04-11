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
  Literal?: { [key: `foo${string}`]: 1 };
  Object?: { [key: `foo${string}`]: object };
  String?: { [key: `foo${string}`]: string };
  Number?: { [key: `foo${string}`]: number };
  Boolean?: { [key: `foo${string}`]: boolean };
  Any?: { [key: `foo${string}`]: any };
}

// No changes here since parenthesis are removed by linter automatically
interface ParenthesizedTypes extends TypeFrame {
  Literal?: { [key: `foo${string}`]: 1 };
  Object?: { [key: `foo${string}`]: object };
  String?: { [key: `foo${string}`]: string };
  Number?: { [key: `foo${string}`]: number };
  Boolean?: { [key: `foo${string}`]: boolean };
  Any?: { [key: `foo${string}`]: any };
}

interface TypeReferenceTypesBuiltin extends TypeFrame {
  Literal?: { [key: `foo${string}`]: Promise<1> };
  Object?: { [key: `foo${string}`]: Promise<object> };
  String?: { [key: `foo${string}`]: Promise<string> };
  Number?: { [key: `foo${string}`]: Promise<number> };
  Boolean?: { [key: `foo${string}`]: Promise<boolean> };
  Any?: { [key: `foo${string}`]: Promise<any> };
}

type L = { [key: `foo${string}`]: 1 };
type O = { [key: `foo${string}`]: object };
type S = { [key: `foo${string}`]: string };
type N = { [key: `foo${string}`]: number };
type B = { [key: `foo${string}`]: boolean };
type A = { [key: `foo${string}`]: any };

interface TypeReferenceTypesPredefined extends TypeFrame {
  Literal?: L;
  Object?: O;
  String?: S;
  Number?: N;
  Boolean?: B;
  Any?: A;
}

interface UnionTypes extends TypeFrame {
  Literal?: { [key: `foo${string}`]: 1 | string };
  Object?: { [key: `foo${string}`]: object | string };
  String?: { [key: `foo${string}`]: string | number };
  Number?: { [key: `foo${string}`]: number | boolean };
  Boolean?: { [key: `foo${string}`]: boolean | any };
  Any?: { [key: `foo${string}`]: any | 1 };
}

interface IntersectionTypes extends TypeFrame {
  Literal?: { [key: `foo${string}`]: 1 & number };
  Object?: { [key: `foo${string}`]: object & {} };
  String?: { [key: `foo${string}`]: string & "two" };
  Number?: { [key: `foo${string}`]: number & 2 };
  Boolean?: { [key: `foo${string}`]: boolean & true };
  Any?: { [key: `foo${string}`]: any & 2 };
}

interface TypeLiterals extends TypeFrame {
  Literal?: { [key: `foo${string}`]: { key: 1 } };
  Object?: { [key: `foo${string}`]: { key: object } };
  String?: { [key: `foo${string}`]: { key: string } };
  Number?: { [key: `foo${string}`]: { key: number } };
  Boolean?: { [key: `foo${string}`]: { key: boolean } };
  Any?: { [key: `foo${string}`]: { key: any } };
}

interface TupleTypes extends TypeFrame {
  Literal?: { [key: `foo${string}`]: [1] };
  Object?: { [key: `foo${string}`]: [object] };
  String?: { [key: `foo${string}`]: [string] };
  Number?: { [key: `foo${string}`]: [number] };
  Boolean?: { [key: `foo${string}`]: [boolean] };
  Any?: { [key: `foo${string}`]: [any] };
}

interface ArrayTypes extends TypeFrame {
  Literal?: { [key: `foo${string}`]: 1[] };
  Object?: { [key: `foo${string}`]: object[] };
  String?: { [key: `foo${string}`]: string[] };
  Number?: { [key: `foo${string}`]: number[] };
  Boolean?: { [key: `foo${string}`]: boolean[] };
  Any?: { [key: `foo${string}`]: any[] };
}

interface FunctionTypes extends TypeFrame {
  Literal?: { [key: `foo${string}`]: (param: 1) => void };
  Object?: { [key: `foo${string}`]: (param: object) => void };
  String?: { [key: `foo${string}`]: (param: string) => void };
  Number?: { [key: `foo${string}`]: (param: number) => void };
  Boolean?: { [key: `foo${string}`]: (param: boolean) => void };
  Any?: { [key: `foo${string}`]: (param: any) => void };
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
