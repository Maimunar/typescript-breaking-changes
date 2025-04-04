import { Defaults as GeneralDefaults } from "../../defaults";
import { Defaults as ArrayDefaults } from "../defaults";

// ParenthesizedType

const ArrayTypeParenthesizedTypeWithLiteral: ArrayDefaults["ParenthesizedType"]["Literal"] =
  [1];
const RemoveArrayTypeFromParenthesizedTypeWithLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] =
  [1];

const ArrayTypeParenthesizedTypeWithObject: ArrayDefaults["ParenthesizedType"]["Object"] =
  [{}];
const RemoveArrayTypeFromParenthesizedTypeWithObject: GeneralDefaults["ParenthesizedType"]["Object"] =
  [{}];

const ArrayTypeParenthesizedTypeWithString: ArrayDefaults["ParenthesizedType"]["String"] =
  ["two"];
const RemoveArrayTypeFromParenthesizedTypeWithString: GeneralDefaults["ParenthesizedType"]["String"] =
  ["two"];

const ArrayTypeParenthesizedTypeWithNumber: ArrayDefaults["ParenthesizedType"]["Number"] =
  [2];
const RemoveArrayTypeFromParenthesizedTypeWithNumber: GeneralDefaults["ParenthesizedType"]["Number"] =
  [2];

const ArrayTypeParenthesizedTypeWithBoolean: ArrayDefaults["ParenthesizedType"]["Boolean"] =
  [true];
const RemoveArrayTypeFromParenthesizedTypeWithBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] =
  [true];

const ArrayTypeParenthesizedTypeWithAny: ArrayDefaults["ParenthesizedType"]["Any"] =
  [2];
const RemoveArrayTypeFromParenthesizedTypeWithAny: GeneralDefaults["ParenthesizedType"]["Any"] =
  [2];

// TypeReferenceBuiltin

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

const ArrayTypeTypeReferenceBuiltinWithLiteral: ArrayDefaults["TypeReferenceBuiltin"]["Literal"] =
  [promisify(1)];
const RemoveArrayTypeFromTypeReferenceBuiltinWithLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] =
  [promisify(1)];

const ArrayTypeTypeReferenceBuiltinWithObject: ArrayDefaults["TypeReferenceBuiltin"]["Object"] =
  [promisify({})];
const RemoveArrayTypeFromTypeReferenceBuiltinWithObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] =
  [promisify({})];

const ArrayTypeTypeReferenceBuiltinWithString: ArrayDefaults["TypeReferenceBuiltin"]["String"] =
  [promisify("two")];
const RemoveArrayTypeFromTypeReferenceBuiltinWithString: GeneralDefaults["TypeReferenceBuiltin"]["String"] =
  [promisify("two")];

const ArrayTypeTypeReferenceBuiltinWithNumber: ArrayDefaults["TypeReferenceBuiltin"]["Number"] =
  [promisify(2)];
const RemoveArrayTypeFromTypeReferenceBuiltinWithNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] =
  [promisify(2)];

const ArrayTypeTypeReferenceBuiltinWithBoolean: ArrayDefaults["TypeReferenceBuiltin"]["Boolean"] =
  [promisify(true)];
const RemoveArrayTypeFromTypeReferenceBuiltinWithBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  [promisify(true)];

const ArrayTypeTypeReferenceBuiltinWithAny: ArrayDefaults["TypeReferenceBuiltin"]["Any"] =
  [promisify(2)];
const RemoveArrayTypeFromTypeReferenceBuiltinWithAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] =
  [promisify(2)];

// TypeReferencePredefined

const ArrayTypeTypeReferencePredefinedWithLiteral: ArrayDefaults["TypeReferencePredefined"]["Literal"] =
  [1];
const RemoveArrayTypeFromTypeReferencePredefinedWithLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] =
  [1];

const ArrayTypeTypeReferencePredefinedWithObject: ArrayDefaults["TypeReferencePredefined"]["Object"] =
  [{}];
const RemoveArrayTypeFromTypeReferencePredefinedWithObject: GeneralDefaults["TypeReferencePredefined"]["Object"] =
  [{}];

const ArrayTypeTypeReferencePredefinedWithString: ArrayDefaults["TypeReferencePredefined"]["String"] =
  ["two"];
const RemoveArrayTypeFromTypeReferencePredefinedWithString: GeneralDefaults["TypeReferencePredefined"]["String"] =
  ["two"];

const ArrayTypeTypeReferencePredefinedWithNumber: ArrayDefaults["TypeReferencePredefined"]["Number"] =
  [2];
const RemoveArrayTypeFromTypeReferencePredefinedWithNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] =
  [2];

const ArrayTypeTypeReferencePredefinedWithBoolean: ArrayDefaults["TypeReferencePredefined"]["Boolean"] =
  [true];
const RemoveArrayTypeFromTypeReferencePredefinedWithBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] =
  [true];

const ArrayTypeTypeReferencePredefinedWithAny: ArrayDefaults["TypeReferencePredefined"]["Any"] =
  [2];
const RemoveArrayTypeFromTypeReferencePredefinedWithAny: GeneralDefaults["TypeReferencePredefined"]["Any"] =
  [2];

// UnionType

const ArrayTypeUnionTypeWithLiteral: ArrayDefaults["UnionType"]["Literal"] = [
  1,
];
const RemoveArrayTypeFromUnionTypeWithLiteral: GeneralDefaults["UnionType"]["Literal"] =
  [1];

const ArrayTypeUnionTypeWithObject: ArrayDefaults["UnionType"]["Object"] = [{}];
const RemoveArrayTypeFromUnionTypeWithObject: GeneralDefaults["UnionType"]["Object"] =
  [{}];

const ArrayTypeUnionTypeWithString: ArrayDefaults["UnionType"]["String"] = [
  "two",
];
const RemoveArrayTypeFromUnionTypeWithString: GeneralDefaults["UnionType"]["String"] =
  ["two"];

const ArrayTypeUnionTypeWithNumber: ArrayDefaults["UnionType"]["Number"] = [2];
const RemoveArrayTypeFromUnionTypeWithNumber: GeneralDefaults["UnionType"]["Number"] =
  [2];

const ArrayTypeUnionTypeWithBoolean: ArrayDefaults["UnionType"]["Boolean"] = [
  true,
];
const RemoveArrayTypeFromUnionTypeWithBoolean: GeneralDefaults["UnionType"]["Boolean"] =
  [true];

const ArrayTypeUnionTypeWithAny: ArrayDefaults["UnionType"]["Any"] = [2];
const RemoveArrayTypeFromUnionTypeWithAny: GeneralDefaults["UnionType"]["Any"] =
  [2];

// IntersectionType

const ArrayTypeIntersectionTypeWithLiteral: ArrayDefaults["IntersectionType"]["Literal"] =
  [1];
const RemoveArrayTypeFromIntersectionTypeWithLiteral: GeneralDefaults["IntersectionType"]["Literal"] =
  [1];

const ArrayTypeIntersectionTypeWithObject: ArrayDefaults["IntersectionType"]["Object"] =
  [{}];
const RemoveArrayTypeFromIntersectionTypeWithObject: GeneralDefaults["IntersectionType"]["Object"] =
  [{}];

const ArrayTypeIntersectionTypeWithString: ArrayDefaults["IntersectionType"]["String"] =
  ["two"];
const RemoveArrayTypeFromIntersectionTypeWithString: GeneralDefaults["IntersectionType"]["String"] =
  ["two"];

const ArrayTypeIntersectionTypeWithNumber: ArrayDefaults["IntersectionType"]["Number"] =
  [2];
const RemoveArrayTypeFromIntersectionTypeWithNumber: GeneralDefaults["IntersectionType"]["Number"] =
  [2];

const ArrayTypeIntersectionTypeWithBoolean: ArrayDefaults["IntersectionType"]["Boolean"] =
  [true];
const RemoveArrayTypeFromIntersectionTypeWithBoolean: GeneralDefaults["IntersectionType"]["Boolean"] =
  [true];

const ArrayTypeIntersectionTypeWithAny: ArrayDefaults["IntersectionType"]["Any"] =
  [2];
const RemoveArrayTypeFromIntersectionTypeWithAny: GeneralDefaults["IntersectionType"]["Any"] =
  [2];

// TypeLiteral

const ArrayTypeTypeLiteralWithLiteral: ArrayDefaults["TypeLiteral"]["Literal"] =
  [{ key: 1 }];
const RemoveArrayTypeFromTypeLiteralWithLiteral: GeneralDefaults["TypeLiteral"]["Literal"] =
  [{ key: 1 }];

const ArrayTypeTypeLiteralWithObject: ArrayDefaults["TypeLiteral"]["Object"] = [
  { key: {} },
];
const RemoveArrayTypeFromTypeLiteralWithObject: GeneralDefaults["TypeLiteral"]["Object"] =
  [{ key: {} }];

const ArrayTypeTypeLiteralWithString: ArrayDefaults["TypeLiteral"]["String"] = [
  { key: "two" },
];
const RemoveArrayTypeFromTypeLiteralWithString: GeneralDefaults["TypeLiteral"]["String"] =
  [{ key: "two" }];

const ArrayTypeTypeLiteralWithNumber: ArrayDefaults["TypeLiteral"]["Number"] = [
  { key: 2 },
];
const RemoveArrayTypeFromTypeLiteralWithNumber: GeneralDefaults["TypeLiteral"]["Number"] =
  [{ key: 2 }];

const ArrayTypeTypeLiteralWithBoolean: ArrayDefaults["TypeLiteral"]["Boolean"] =
  [{ key: true }];
const RemoveArrayTypeFromTypeLiteralWithBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] =
  [{ key: true }];

const ArrayTypeTypeLiteralWithAny: ArrayDefaults["TypeLiteral"]["Any"] = [
  { key: 2 },
];
const RemoveArrayTypeFromTypeLiteralWithAny: GeneralDefaults["TypeLiteral"]["Any"] =
  [{ key: 2 }];

// TupleType

const ArrayTypeTupleTypeWithLiteral: ArrayDefaults["TupleType"]["Literal"] = [
  [1],
];
const RemoveArrayTypeFromTupleTypeWithLiteral: GeneralDefaults["TupleType"]["Literal"] =
  [[1]];

const ArrayTypeTupleTypeWithObject: ArrayDefaults["TupleType"]["Object"] = [
  [{}],
  [{}],
];
const RemoveArrayTypeFromTupleTypeWithObject: GeneralDefaults["TupleType"]["Object"] =
  [[{}], [{}]];

const ArrayTypeTupleTypeWithString: ArrayDefaults["TupleType"]["String"] = [
  ["two"],
];
const RemoveArrayTypeFromTupleTypeWithString: GeneralDefaults["TupleType"]["String"] =
  [["two"]];

const ArrayTypeTupleTypeWithNumber: ArrayDefaults["TupleType"]["Number"] = [
  [2],
];
const RemoveArrayTypeFromTupleTypeWithNumber: GeneralDefaults["TupleType"]["Number"] =
  [[2]];

const ArrayTypeTupleTypeWithBoolean: ArrayDefaults["TupleType"]["Boolean"] = [
  [true],
];
const RemoveArrayTypeFromTupleTypeWithBoolean: GeneralDefaults["TupleType"]["Boolean"] =
  [[true]];

const ArrayTypeTupleTypeWithAny: ArrayDefaults["TupleType"]["Any"] = [[2], [2]];
const RemoveArrayTypeFromTupleTypeWithAny: GeneralDefaults["TupleType"]["Any"] =
  [[2], [2]];

// ArrayType

const ArrayTypeArrayTypeWithLiteral: ArrayDefaults["ArrayType"]["Literal"] = [
  [1, 1],
];
const RemoveArrayTypeFromArrayTypeWithLiteral: GeneralDefaults["ArrayType"]["Literal"] =
  [[1, 1]];

const ArrayTypeArrayTypeWithObject: ArrayDefaults["ArrayType"]["Object"] = [
  [{}, {}],
];
const RemoveArrayTypeFromArrayTypeWithObject: GeneralDefaults["ArrayType"]["Object"] =
  [[{}, {}]];

const ArrayTypeArrayTypeWithString: ArrayDefaults["ArrayType"]["String"] = [
  ["two", "two"],
];
const RemoveArrayTypeFromArrayTypeWithString: GeneralDefaults["ArrayType"]["String"] =
  [["two", "two"]];

const ArrayTypeArrayTypeWithNumber: ArrayDefaults["ArrayType"]["Number"] = [
  [2, 2],
];
const RemoveArrayTypeFromArrayTypeWithNumber: GeneralDefaults["ArrayType"]["Number"] =
  [[2, 2]];

const ArrayTypeArrayTypeWithBoolean: ArrayDefaults["ArrayType"]["Boolean"] = [
  [true, true],
];
const RemoveArrayTypeFromArrayTypeWithBoolean: GeneralDefaults["ArrayType"]["Boolean"] =
  [[true, true]];

const ArrayTypeArrayTypeWithAny: ArrayDefaults["ArrayType"]["Any"] = [[2, 2]];
const RemoveArrayTypeFromArrayTypeWithAny: GeneralDefaults["ArrayType"]["Any"] =
  [[2, 2]];

// FunctionType

const ArrayTypeFunctionTypeWithLiteral: ArrayDefaults["FunctionType"]["Literal"] =
  [(param: 1) => {}];
const RemoveArrayTypeFromFunctionTypeWithLiteral: GeneralDefaults["FunctionType"]["Literal"] =
  [(param: 1) => {}];

const ArrayTypeFunctionTypeWithObject: ArrayDefaults["FunctionType"]["Object"] =
  [(param: object) => {}];
const RemoveArrayTypeFromFunctionTypeWithObject: GeneralDefaults["FunctionType"]["Object"] =
  [(param: object) => {}];

const ArrayTypeFunctionTypeWithString: ArrayDefaults["FunctionType"]["String"] =
  [(param: string) => {}];
const RemoveArrayTypeFromFunctionTypeWithString: GeneralDefaults["FunctionType"]["String"] =
  [(param: string) => {}];

const ArrayTypeFunctionTypeWithNumber: ArrayDefaults["FunctionType"]["Number"] =
  [(param: number) => {}];
const RemoveArrayTypeFromFunctionTypeWithNumber: GeneralDefaults["FunctionType"]["Number"] =
  [(param: number) => {}];

const ArrayTypeFunctionTypeWithBoolean: ArrayDefaults["FunctionType"]["Boolean"] =
  [(param: boolean) => {}];
const RemoveArrayTypeFromFunctionTypeWithBoolean: GeneralDefaults["FunctionType"]["Boolean"] =
  [(param: boolean) => {}];

const ArrayTypeFunctionTypeWithAny: ArrayDefaults["FunctionType"]["Any"] = [
  (param: any) => {},
];
const RemoveArrayTypeFromFunctionTypeWithAny: GeneralDefaults["FunctionType"]["Any"] =
  [(param: any) => {}];

// ConstructorType

const ArrayTypeConstructorTypeWithLiteral: ArrayDefaults["ConstructorType"]["Literal"] =
  [1];
const RemoveArrayTypeFromConstructorTypeWithLiteral: GeneralDefaults["ConstructorType"]["Literal"] =
  [1];

const ArrayTypeConstructorTypeWithObject: ArrayDefaults["ConstructorType"]["Object"] =
  [{}];
const RemoveArrayTypeFromConstructorTypeWithObject: GeneralDefaults["ConstructorType"]["Object"] =
  [{}];

const ArrayTypeConstructorTypeWithString: ArrayDefaults["ConstructorType"]["String"] =
  ["two"];
const RemoveArrayTypeFromConstructorTypeWithString: GeneralDefaults["ConstructorType"]["String"] =
  ["two"];

const ArrayTypeConstructorTypeWithNumber: ArrayDefaults["ConstructorType"]["Number"] =
  [2];
const RemoveArrayTypeFromConstructorTypeWithNumber: GeneralDefaults["ConstructorType"]["Number"] =
  [2];

const ArrayTypeConstructorTypeWithBoolean: ArrayDefaults["ConstructorType"]["Boolean"] =
  [true];
const RemoveArrayTypeFromConstructorTypeWithBoolean: GeneralDefaults["ConstructorType"]["Boolean"] =
  [true];

const ArrayTypeConstructorTypeWithAny: ArrayDefaults["ConstructorType"]["Any"] =
  [2];
const RemoveArrayTypeFromConstructorTypeWithAny: GeneralDefaults["ConstructorType"]["Any"] =
  [2];
