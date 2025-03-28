// Helpers
const x: number = 10;
const y: string = "string";
const z: boolean = true;
interface HelperInterface {
  x: number;
  y: string;
  z: boolean;
}

export interface Defaults {
  NumberLiteral: 1;
  StringLiteral: "one";
  BooleanLiteral: false;
  NumberTypequery: typeof x;
  StringTypequery: typeof y;
  BooleanTypequery: typeof z;
  NumberImportType: import("./helper").importNumberType;
  StringImportType: import("./helper").importStringType;
  BooleanImportType: import("./helper").importBooleanType;
  NumberIndexedAccessType: HelperInterface["x"];
  StringIndexedAccessType: HelperInterface["y"];
  BooleanIndexedAccessType: HelperInterface["z"];
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
  StringLiteral: "one",
  BooleanLiteral: false,
  NumberTypequery: 2,
  StringTypequery: "two",
  BooleanTypequery: true,
  NumberImportType: 2,
  StringImportType: "two",
  BooleanImportType: true,
  NumberIndexedAccessType: 2,
  StringIndexedAccessType: "two",
  BooleanIndexedAccessType: true,
  ObjectType: {},
  StringType: "two",
  NumberType: 2,
  BooleanType: true,
  AnyType: 2,
  UnknownType: 2,
  // @ts-expect-error never-not-allowed
  NeverType: null,
  VoidType: undefined,
  UndefinedType: undefined,
  SymbolType: Symbol("symbol"),
};

export const extraDefaults = {
  Literal: [
    { NumberLiteral: 1 },
    { StringLiteral: "one" },
    { BooleanLiteral: false },
  ],
  Typequery: [
    { NumberTypequery: 2 },
    { StringTypequery: "two" },
    { BooleanTypequery: true },
  ],
  ImportType: [
    { NumberImportType: 2 },
    { StringImportType: "two" },
    { BooleanImportType: true },
  ],
  IndexedAccessType: [
    { NumberIndexedAccessType: 2 },
    { StringIndexedAccessType: "two" },
    { BooleanIndexedAccessType: true },
  ],
};
