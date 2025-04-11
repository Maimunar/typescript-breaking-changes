type TypeKeys = "Literal" | "Object" | "String" | "Number" | "Boolean" | "Any";
type TypeFrame = { [Property in TypeKeys]: any };

export type VoidFunctionNoParam = () => void;

interface ConstructorTypes extends TypeFrame {
  Literal: () => 1;
  Object: () => object;
  String: () => string;
  Number: () => number;
  Boolean: () => boolean;
  Any: () => any;
}

// No changes here since parenthesis are removed by linter automatically
interface ParenthesizedTypes extends TypeFrame {
  Literal: () => 1;
  Object: () => object;
  String: () => string;
  Number: () => number;
  Boolean: () => boolean;
  Any: () => any;
}

interface TypeReferenceTypesBuiltin extends TypeFrame {
  Literal: () => Promise<1>;
  Object: () => Promise<object>;
  String: () => Promise<string>;
  Number: () => Promise<number>;
  Boolean: () => Promise<boolean>;
  Any: () => Promise<any>;
}

type L = 1;
type O = object;
type S = string;
type N = number;
type B = boolean;
type A = any;

interface TypeReferenceTypesPredefined extends TypeFrame {
  Literal: () => L;
  Object: () => O;
  String: () => S;
  Number: () => N;
  Boolean: () => B;
  Any: () => A;
}

interface UnionTypes extends TypeFrame {
  Literal: () => 1 | string;
  Object: () => object | string;
  String: () => string | number;
  Number: () => number | boolean;
  Boolean: () => boolean | any;
  Any: () => any | 1;
}

interface IntersectionTypes extends TypeFrame {
  Literal: () => 1 & number;
  Object: () => object & {};
  String: () => string & "two";
  Number: () => number & 2;
  Boolean: () => boolean & true;
  Any: () => any & 2;
}

interface TypeLiterals extends TypeFrame {
  Literal: () => { key: 1 };
  Object: () => { key: object };
  String: () => { key: string };
  Number: () => { key: number };
  Boolean: () => { key: boolean };
  Any: () => { key: any };
}

interface TupleTypes extends TypeFrame {
  Literal: () => [1];
  Object: () => [object];
  String: () => [string];
  Number: () => [number];
  Boolean: () => [boolean];
  Any: () => [any];
}

interface ArrayTypes extends TypeFrame {
  Literal: () => 1[];
  Object: () => object[];
  String: () => string[];
  Number: () => number[];
  Boolean: () => boolean[];
  Any: () => any[];
}

interface FunctionTypes extends TypeFrame {
  Literal: () => (param: 1) => void;
  Object: () => (param: object) => void;
  String: () => (param: string) => void;
  Number: () => (param: number) => void;
  Boolean: () => (param: boolean) => void;
  Any: () => (param: any) => void;
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

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

export const defaults: Defaults = {
  ParenthesizedType: {
    Literal: () => 1,
    Object: () => ({}),
    String: () => "two",
    Number: () => 2,
    Boolean: () => true,
    Any: () => 2,
  },
  TypeReferenceBuiltin: {
    Literal: () => promisify(1),
    Object: () => promisify({}),
    String: () => promisify("two"),
    Number: () => promisify(2),
    Boolean: () => promisify(true),
    Any: () => promisify(2),
  },
  TypeReferencePredefined: {
    Literal: () => 1,
    Object: () => ({}),
    String: () => "two",
    Number: () => 2,
    Boolean: () => true,
    Any: () => 2,
  },
  UnionType: {
    Literal: () => 1,
    Object: () => ({}),
    String: () => "two",
    Number: () => 2,
    Boolean: () => true,
    Any: () => 2,
  },
  IntersectionType: {
    Literal: () => 1,
    Object: () => ({}),
    String: () => "two",
    Number: () => 2,
    Boolean: () => true,
    Any: () => 2,
  },
  TypeLiteral: {
    Literal: () => ({ key: 1 }),
    Object: () => ({ key: {} }),
    String: () => ({ key: "two" }),
    Number: () => ({ key: 2 }),
    Boolean: () => ({ key: true }),
    Any: () => ({ key: 2 }),
  },
  TupleType: {
    Literal: () => [1],
    Object: () => [{}],
    String: () => ["two"],
    Number: () => [2],
    Boolean: () => [true],
    Any: () => [2],
  },
  ArrayType: {
    Literal: () => [1, 1],
    Object: () => [{}, {}],
    String: () => ["two", "two"],
    Number: () => [2, 2],
    Boolean: () => [true, true],
    Any: () => [2, 2],
  },
  FunctionType: {
    Literal: () => (param: 1) => {},
    Object: () => (param: object) => {},
    String: () => (param: string) => {},
    Number: () => (param: number) => {},
    Boolean: () => (param: boolean) => {},
    Any: () => (param: any) => {},
  },
  ConstructorType: {
    Literal: () => 1,
    Object: () => ({}),
    String: () => "two",
    Number: () => 2,
    Boolean: () => true,
    Any: () => 2,
  },
};
