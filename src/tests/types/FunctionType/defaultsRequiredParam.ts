type TypeKeys = "Literal" | "Object" | "String" | "Number" | "Boolean" | "Any";
type TypeFrame = { [Property in TypeKeys]: any };

interface ConstructorTypes extends TypeFrame {
  Literal: (param: 1) => void;
  Object: (param: object) => void;
  String: (param: string) => void;
  Number: (param: number) => void;
  Boolean: (param: boolean) => void;
  Any: (param: any) => void;
}

// No changes here since parenthesis are removed by linter automatically
interface ParenthesizedTypes extends TypeFrame {
  Literal: (param: 1) => void;
  Object: (param: object) => void;
  String: (param: string) => void;
  Number: (param: number) => void;
  Boolean: (param: boolean) => void;
  Any: (param: any) => void;
}

interface TypeReferenceTypesBuiltin extends TypeFrame {
  Literal: (param: Promise<1>) => void;
  Object: (param: Promise<object>) => void;
  String: (param: Promise<string>) => void;
  Number: (param: Promise<number>) => void;
  Boolean: (param: Promise<boolean>) => void;
  Any: (param: Promise<any>) => void;
}

type L = 1;
type O = object;
type S = string;
type N = number;
type B = boolean;
type A = any;

interface TypeReferenceTypesPredefined extends TypeFrame {
  Literal: (param: L) => void;
  Object: (param: O) => void;
  String: (param: S) => void;
  Number: (param: N) => void;
  Boolean: (param: B) => void;
  Any: (param: A) => void;
}

interface UnionTypes extends TypeFrame {
  Literal: (param: 1 | string) => void;
  Object: (param: object | string) => void;
  String: (param: string | number) => void;
  Number: (param: number | boolean) => void;
  Boolean: (param: boolean | any) => void;
  Any: (param: any | 1) => void;
}

interface IntersectionTypes extends TypeFrame {
  Literal: (param: 1 & number) => void;
  Object: (param: object & {}) => void;
  String: (param: string & "two") => void;
  Number: (param: number & 2) => void;
  Boolean: (param: boolean & true) => void;
  Any: (param: any & 2) => void;
}

interface TypeLiterals extends TypeFrame {
  Literal: (param: { key: 1 }) => void;
  Object: (param: { key: object }) => void;
  String: (param: { key: string }) => void;
  Number: (param: { key: number }) => void;
  Boolean: (param: { key: boolean }) => void;
  Any: (param: { key: any }) => void;
}

interface TupleTypes extends TypeFrame {
  Literal: (param: [1]) => void;
  Object: (param: [object]) => void;
  String: (param: [string]) => void;
  Number: (param: [number]) => void;
  Boolean: (param: [boolean]) => void;
  Any: (param: [any]) => void;
}

interface ArrayTypes extends TypeFrame {
  Literal: (param: 1[]) => void;
  Object: (param: object[]) => void;
  String: (param: string[]) => void;
  Number: (param: number[]) => void;
  Boolean: (param: boolean[]) => void;
  Any: (param: any[]) => void;
}

interface FunctionTypes extends TypeFrame {
  Literal: (param: (param: 1) => void) => void;
  Object: (param: (param: object) => void) => void;
  String: (param: (param: string) => void) => void;
  Number: (param: (param: number) => void) => void;
  Boolean: (param: (param: boolean) => void) => void;
  Any: (param: (param: any) => void) => void;
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

export const defaults: Defaults = {
  ParenthesizedType: {
    Literal: (param: 1) => {},
    Object: (param: object) => {},
    String: (param: string) => {},
    Number: (param: number) => {},
    Boolean: (param: boolean) => {},
    Any: (param: any) => {},
  },
  TypeReferenceBuiltin: {
    Literal: (param: Promise<1>) => {},
    Object: (param: Promise<object>) => {},
    String: (param: Promise<string>) => {},
    Number: (param: Promise<number>) => {},
    Boolean: (param: Promise<boolean>) => {},
    Any: (param: Promise<any>) => {},
  },
  TypeReferencePredefined: {
    Literal: (param: 1) => {},
    Object: (param: object) => {},
    String: (param: string) => {},
    Number: (param: number) => {},
    Boolean: (param: boolean) => {},
    Any: (param: any) => {},
  },
  UnionType: {
    Literal: (param: 1 | string) => {},
    Object: (param: object | string) => {},
    String: (param: string | number) => {},
    Number: (param: number | boolean) => {},
    Boolean: (param: boolean | any) => {},
    Any: (param: any) => {},
  },
  IntersectionType: {
    Literal: (param: 1) => {},
    Object: (param: object) => {},
    String: (param: string) => {},
    Number: (param: number) => {},
    Boolean: (param: boolean) => {},
    Any: (param: any) => {},
  },
  TypeLiteral: {
    Literal: (param: { key: 1 }) => {},
    Object: (param: { key: object }) => {},
    String: (param: { key: string }) => {},
    Number: (param: { key: number }) => {},
    Boolean: (param: { key: boolean }) => {},
    Any: (param: { key: any }) => {},
  },
  TupleType: {
    Literal: (param: [1]) => {},
    Object: (param: [object]) => {},
    String: (param: [string]) => {},
    Number: (param: [number]) => {},
    Boolean: (param: [boolean]) => {},
    Any: (param: [any]) => {},
  },
  ArrayType: {
    Literal: (param: 1[]) => {},
    Object: (param: object[]) => {},
    String: (param: string[]) => {},
    Number: (param: number[]) => {},
    Boolean: (param: boolean[]) => {},
    Any: (param: any[]) => {},
  },
  FunctionType: {
    Literal: (param: (param: 1) => void) => {},
    Object: (param: (param: object) => void) => {},
    String: (param: (param: string) => void) => {},
    Number: (param: (param: number) => void) => {},
    Boolean: (param: (param: boolean) => void) => {},
    Any: (param: (param: any) => void) => {},
  },
  ConstructorType: {
    Literal: (param: 1) => {},
    Object: (param: object) => {},
    String: (param: string) => {},
    Number: (param: number) => {},
    Boolean: (param: boolean) => {},
    Any: (param: any) => {},
  },
};
