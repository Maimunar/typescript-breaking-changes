const testFn = () => {};
// Helpers
const x: number = 10;
const y: string = "string";
const z: boolean = true;
const t: object = {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const q: any = 2;
const r: unknown = 2;
const v: void = testFn();
const s: undefined = undefined;
const u: symbol = Symbol("symbol");

interface HelperInterface {
  x: number;
  y: string;
  z: boolean;
  t: object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  q: any;
  r: unknown;
  v: void;
  s: undefined;
  u: symbol;
}

export interface Defaults {
  NumberLiteral: 1;
  StringLiteral: "one";
  BooleanLiteral: false;
  NumberTypequery: typeof x;
  StringTypequery: typeof y;
  BooleanTypequery: typeof z;
  ObjectTypequery: typeof t;
  AnyTypequery: typeof q;
  UnknownTypequery: typeof r;
  VoidTypequery: typeof v;
  UndefinedTypequery: typeof s;
  SymbolTypequery: typeof u;
  NumberImportType: import("./helper").importNumberType;
  StringImportType: import("./helper").importStringType;
  BooleanImportType: import("./helper").importBooleanType;
  ObjectImportType: import("./helper").importObjectType;
  AnyImportType: import("./helper").importAnyType;
  UnknownImportType: import("./helper").importUnknownType;
  VoidImportType: import("./helper").importVoidType;
  UndefinedImportType: import("./helper").importUndefinedType;
  SymbolImportType: import("./helper").importSymbolType;
  NumberIndexedAccessType: HelperInterface["x"];
  StringIndexedAccessType: HelperInterface["y"];
  BooleanIndexedAccessType: HelperInterface["z"];
  ObjectIndexedAccessType: HelperInterface["t"];
  AnyIndexedAccessType: HelperInterface["q"];
  UnknownIndexedAccessType: HelperInterface["r"];
  VoidIndexedAccessType: HelperInterface["v"];
  UndefinedIndexedAccessType: HelperInterface["s"];
  SymbolIndexedAccessType: HelperInterface["u"];
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
  ObjectTypequery: {},
  AnyTypequery: 2,
  UnknownTypequery: 2,
  VoidTypequery: testFn(),
  UndefinedTypequery: undefined,
  SymbolTypequery: Symbol("symbol"),
  NumberImportType: 2,
  StringImportType: "two",
  BooleanImportType: true,
  ObjectImportType: {},
  AnyImportType: 2,
  UnknownImportType: 2,
  NeverImportType: 2,
  VoidImportType: testFn(),
  UndefinedImportType: undefined,
  SymbolImportType: Symbol("symbol"),
  NumberIndexedAccessType: 2,
  StringIndexedAccessType: "two",
  BooleanIndexedAccessType: true,
  ObjectIndexedAccessType: {},
  AnyIndexedAccessType: 2,
  UnknownIndexedAccessType: 2,
  VoidIndexedAccessType: testFn(),
  UndefinedIndexedAccessType: undefined,
  SymbolIndexedAccessType: Symbol("symbol"),
  NeverIndexedAccessType: 2,
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
  AnyType: [
    ["NumberAnyType", 2],
    ["StringAnyType", "two"],
    ["BooleanAnyType", true],
    ["ObjectAnyType", {}],
    ["UndefinedAnyType", undefined],
    ["SymbolAnyType", Symbol("symbol")],
  ],
  UnknownType: [
    ["NumberUnknownType", 2],
    ["StringUnknownType", "two"],
    ["BooleanUnknownType", true],
    ["ObjectUnknownType", {}],
    ["UndefinedUnknownType", undefined],
    ["SymbolUnknownType", Symbol("symbol")],
  ],
};
