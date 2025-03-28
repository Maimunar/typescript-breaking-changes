// Helpers
const x: number = 10;
interface HelperInterface {
  x: number;
}

export interface Defaults {
  NumberLiteral: 1;
  StringLiteral: "two";
  Typequery: typeof x;
  ImportType: import("./helper").importType;
  IndexedAccessType: HelperInterface["x"];
  ObjectType: object;
  StringType: string;
  NumberType: number;
  BooleanType: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AnyType: any;
  UnknownType: unknown;
  NeverType: never;
  VoidType: void;
  UndefinedType: undefined;
  SymbolType: symbol;
}

export const defaults: Defaults = {
  NumberLiteral: 1,
  StringLiteral: "two",
  Typequery: 2,
  ImportType: 3,
  IndexedAccessType: 4,
  ObjectType: {},
  StringType: "three",
  NumberType: 4,
  BooleanType: true,
  AnyType: 5,
  UnknownType: 6,
  // @ts-expect-error never-not-allowed
  NeverType: null,
  VoidType: undefined,
  UndefinedType: undefined,
  SymbolType: Symbol("symbol"),
};
