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
  Literal: Promise<1>;
  Object: Promise<object>;
  String: Promise<string>;
  Number: Promise<number>;
  Boolean: Promise<boolean>;
  Any: Promise<any>;
}

// No changes here since parenthesis are removed by linter automatically
interface ParenthesizedTypes extends TypeFrame {
  Literal: Promise<1>;
  Object: Promise<object>;
  String: Promise<string>;
  Number: Promise<number>;
  Boolean: Promise<boolean>;
  Any: Promise<any>;
}

interface TypeReferenceTypesBuiltin extends TypeFrame {
  Literal: Promise<Promise<1>>;
  Object: Promise<Promise<object>>;
  String: Promise<Promise<string>>;
  Number: Promise<Promise<number>>;
  Boolean: Promise<Promise<boolean>>;
  Any: Promise<Promise<any>>;
}

type L = Promise<1>;
type O = Promise<object>;
type S = Promise<string>;
type N = Promise<number>;
type B = Promise<boolean>;
type A = Promise<any>;

interface TypeReferenceTypesPredefined extends TypeFrame {
  Literal: L;
  Object: O;
  String: S;
  Number: N;
  Boolean: B;
  Any: A;
}

interface UnionTypes extends TypeFrame {
  Literal: Promise<1 | string>;
  Object: Promise<object | string>;
  String: Promise<string | number>;
  Number: Promise<number | boolean>;
  Boolean: Promise<boolean | any>;
  Any: Promise<any | 1>;
}

interface IntersectionTypes extends TypeFrame {
  Literal: Promise<1 & number>;
  Object: Promise<object & {}>;
  String: Promise<string & "two">;
  Number: Promise<number & 2>;
  Boolean: Promise<boolean & true>;
  Any: Promise<any & 2>;
}

interface TypeLiterals extends TypeFrame {
  Literal: Promise<{ key: 1 }>;
  Object: Promise<{ key: object }>;
  String: Promise<{ key: string }>;
  Number: Promise<{ key: number }>;
  Boolean: Promise<{ key: boolean }>;
  Any: Promise<{ key: any }>;
}

interface TupleTypes extends TypeFrame {
  Literal: Promise<[1]>;
  Object: Promise<[object]>;
  String: Promise<[string]>;
  Number: Promise<[number]>;
  Boolean: Promise<[boolean]>;
  Any: Promise<[any]>;
}

interface ArrayTypes extends TypeFrame {
  Literal: Promise<1[]>;
  Object: Promise<object[]>;
  String: Promise<string[]>;
  Number: Promise<number[]>;
  Boolean: Promise<boolean[]>;
  Any: Promise<any[]>;
}

interface FunctionTypes extends TypeFrame {
  Literal: Promise<(param: 1) => void>;
  Object: Promise<(param: object) => void>;
  String: Promise<(param: string) => void>;
  Number: Promise<(param: number) => void>;
  Boolean: Promise<(param: boolean) => void>;
  Any: Promise<(param: any) => void>;
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
    Literal: promisify(1),
    Object: promisify({}),
    String: promisify("two"),
    Number: promisify(2),
    Boolean: promisify(true),
    Any: promisify(2),
  },
  TypeReferenceBuiltin: {
    Literal: promisify(promisify(1)),
    Object: promisify(promisify({})),
    String: promisify(promisify("two")),
    Number: promisify(promisify(2)),
    Boolean: promisify(promisify(true)),
    Any: promisify(promisify(2)),
  },
  TypeReferencePredefined: {
    Literal: promisify(1),
    Object: promisify({}),
    String: promisify("two"),
    Number: promisify(2),
    Boolean: promisify(true),
    Any: promisify(2),
  },
  UnionType: {
    Literal: promisify(1),
    Object: promisify({}),
    String: promisify("two"),
    Number: promisify(2),
    Boolean: promisify(true),
    Any: promisify(2),
  },
  IntersectionType: {
    Literal: promisify(1),
    Object: promisify({}),
    String: promisify("two"),
    Number: promisify(2),
    Boolean: promisify(true),
    Any: promisify(2),
  },
  TypeLiteral: {
    Literal: promisify({ key: 1 }),
    Object: promisify({ key: {} }),
    String: promisify({ key: "two" }),
    Number: promisify({ key: 2 }),
    Boolean: promisify({ key: true }),
    Any: promisify({ key: 2 }),
  },
  TupleType: {
    Literal: promisify([1]),
    Object: promisify([{}]),
    String: promisify(["two"]),
    Number: promisify([2]),
    Boolean: promisify([true]),
    Any: promisify([2]),
  },
  ArrayType: {
    Literal: promisify([1, 1]),
    Object: promisify([{}, {}]),
    String: promisify(["two", "two"]),
    Number: promisify([2, 2]),
    Boolean: promisify([true, true]),
    Any: promisify([2, 2]),
  },
  FunctionType: {
    Literal: promisify((param: 1) => {}),
    Object: promisify((param: object) => {}),
    String: promisify((param: string) => {}),
    Number: promisify((param: number) => {}),
    Boolean: promisify((param: boolean) => {}),
    Any: promisify((param: any) => {}),
  },
  ConstructorType: {
    Literal: promisify(1),
    Object: promisify({}),
    String: promisify("two"),
    Number: promisify(2),
    Boolean: promisify(true),
    Any: promisify(2),
  },
};
