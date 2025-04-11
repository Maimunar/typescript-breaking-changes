import { Defaults as GeneralDefaults } from "../../defaults";
import { Defaults as TupleDefaults, EmptyTuple } from "../defaults";

/*
 * TupleType
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Remove Tuple Item
// ParenthesizedType
const TupleItemParenthesizedTypeLiteral: TupleDefaults["ParenthesizedType"]["Literal"] =
  [1];
const RemoveTupleItemFromParenthesizedTypeLiteral: EmptyTuple = [1];
const TupleItemParenthesizedTypeObject: TupleDefaults["ParenthesizedType"]["Object"] =
  [{}];
const RemoveTupleItemFromParenthesizedTypeObject: EmptyTuple = [{}];
const TupleItemParenthesizedTypeString: TupleDefaults["ParenthesizedType"]["String"] =
  ["two"];
const RemoveTupleItemFromParenthesizedTypeString: EmptyTuple = ["two"];
const TupleItemParenthesizedTypeNumber: TupleDefaults["ParenthesizedType"]["Number"] =
  [2];
const RemoveTupleItemFromParenthesizedTypeNumber: EmptyTuple = [2];
const TupleItemParenthesizedTypeBoolean: TupleDefaults["ParenthesizedType"]["Boolean"] =
  [true];
const RemoveTupleItemFromParenthesizedTypeBoolean: EmptyTuple = [true];
const TupleItemParenthesizedTypeAny: TupleDefaults["ParenthesizedType"]["Any"] =
  [2];
const RemoveTupleItemFromParenthesizedTypeAny: EmptyTuple = [2];

// TypeReferenceBuiltin
const TupleItemTypeReferenceBuiltinLiteral: TupleDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify([1]);
const RemoveTupleItemFromTypeReferenceBuiltinLiteral: EmptyTuple = promisify([
  1,
]);
const TupleItemTypeReferenceBuiltinObject: TupleDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify([{}]);
const RemoveTupleItemFromTypeReferenceBuiltinObject: EmptyTuple = promisify([
  {},
]);
const TupleItemTypeReferenceBuiltinString: TupleDefaults["TypeReferenceBuiltin"]["String"] =
  promisify(["two"]);
const RemoveTupleItemFromTypeReferenceBuiltinString: EmptyTuple = promisify([
  "two",
]);
const TupleItemTypeReferenceBuiltinNumber: TupleDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify([2]);
const RemoveTupleItemFromTypeReferenceBuiltinNumber: EmptyTuple = promisify([
  2,
]);
const TupleItemTypeReferenceBuiltinBoolean: TupleDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify([true]);
const RemoveTupleItemFromTypeReferenceBuiltinBoolean: EmptyTuple = promisify([
  true,
]);
const TupleItemTypeReferenceBuiltinAny: TupleDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify([2]);
const RemoveTupleItemFromTypeReferenceBuiltinAny: EmptyTuple = promisify([2]);

// TypeReferencePredefined
const TupleItemTypeReferencePredefinedLiteral: TupleDefaults["TypeReferencePredefined"]["Literal"] =
  [1];
const RemoveTupleItemFromTypeReferencePredefinedLiteral: EmptyTuple = [1];
const TupleItemTypeReferencePredefinedObject: TupleDefaults["TypeReferencePredefined"]["Object"] =
  [{}];
const RemoveTupleItemFromTypeReferencePredefinedObject: EmptyTuple = [{}];
const TupleItemTypeReferencePredefinedString: TupleDefaults["TypeReferencePredefined"]["String"] =
  ["two"];
const RemoveTupleItemFromTypeReferencePredefinedString: EmptyTuple = ["two"];
const TupleItemTypeReferencePredefinedNumber: TupleDefaults["TypeReferencePredefined"]["Number"] =
  [2];
const RemoveTupleItemFromTypeReferencePredefinedNumber: EmptyTuple = [2];
const TupleItemTypeReferencePredefinedBoolean: TupleDefaults["TypeReferencePredefined"]["Boolean"] =
  [true];
const RemoveTupleItemFromTypeReferencePredefinedBoolean: EmptyTuple = [true];
const TupleItemTypeReferencePredefinedAny: TupleDefaults["TypeReferencePredefined"]["Any"] =
  [2];
const RemoveTupleItemFromTypeReferencePredefinedAny: EmptyTuple = [2];

// UnionType
const TupleItemUnionTypeLiteral: TupleDefaults["UnionType"]["Literal"] = [1];
const RemoveTupleItemFromUnionTypeLiteral: EmptyTuple = [1];
const TupleItemUnionTypeObject: TupleDefaults["UnionType"]["Object"] = [{}];
const RemoveTupleItemFromUnionTypeObject: EmptyTuple = [{}];
const TupleItemUnionTypeString: TupleDefaults["UnionType"]["String"] = ["two"];
const RemoveTupleItemFromUnionTypeString: EmptyTuple = ["two"];
const TupleItemUnionTypeNumber: TupleDefaults["UnionType"]["Number"] = [2];
const RemoveTupleItemFromUnionTypeNumber: EmptyTuple = [2];
const TupleItemUnionTypeBoolean: TupleDefaults["UnionType"]["Boolean"] = [true];
const RemoveTupleItemFromUnionTypeBoolean: EmptyTuple = [true];
const TupleItemUnionTypeAny: TupleDefaults["UnionType"]["Any"] = [2];
const RemoveTupleItemFromUnionTypeAny: EmptyTuple = [2];

// IntersectionType
const TupleItemIntersectionTypeLiteral: TupleDefaults["IntersectionType"]["Literal"] =
  [1];
const RemoveTupleItemFromIntersectionTypeLiteral: EmptyTuple = [1];
const TupleItemIntersectionTypeObject: TupleDefaults["IntersectionType"]["Object"] =
  [{}];
const RemoveTupleItemFromIntersectionTypeObject: EmptyTuple = [{}];
const TupleItemIntersectionTypeString: TupleDefaults["IntersectionType"]["String"] =
  ["two"];
const RemoveTupleItemFromIntersectionTypeString: EmptyTuple = ["two"];
const TupleItemIntersectionTypeNumber: TupleDefaults["IntersectionType"]["Number"] =
  [2];
const RemoveTupleItemFromIntersectionTypeNumber: EmptyTuple = [2];
const TupleItemIntersectionTypeBoolean: TupleDefaults["IntersectionType"]["Boolean"] =
  [true];
const RemoveTupleItemFromIntersectionTypeBoolean: EmptyTuple = [true];
const TupleItemIntersectionTypeAny: TupleDefaults["IntersectionType"]["Any"] = [
  2,
];
const RemoveTupleItemFromIntersectionTypeAny: EmptyTuple = [2];

// TypeLiteral
const TupleItemTypeLiteralLiteral: TupleDefaults["TypeLiteral"]["Literal"] = [
  { key: 1 },
];
const RemoveTupleItemFromTypeLiteralLiteral: EmptyTuple = [{ key: 1 }];
const TupleItemTypeLiteralObject: TupleDefaults["TypeLiteral"]["Object"] = [
  { key: {} },
];
const RemoveTupleItemFromTypeLiteralObject: EmptyTuple = [{ key: {} }];
const TupleItemTypeLiteralString: TupleDefaults["TypeLiteral"]["String"] = [
  { key: "two" },
];
const RemoveTupleItemFromTypeLiteralString: EmptyTuple = [{ key: "two" }];
const TupleItemTypeLiteralNumber: TupleDefaults["TypeLiteral"]["Number"] = [
  { key: 2 },
];
const RemoveTupleItemFromTypeLiteralNumber: EmptyTuple = [{ key: 2 }];
const TupleItemTypeLiteralBoolean: TupleDefaults["TypeLiteral"]["Boolean"] = [
  { key: true },
];
const RemoveTupleItemFromTypeLiteralBoolean: EmptyTuple = [{ key: true }];
const TupleItemTypeLiteralAny: TupleDefaults["TypeLiteral"]["Any"] = [
  { key: 2 },
];
const RemoveTupleItemFromTypeLiteralAny: EmptyTuple = [{ key: 2 }];

// TupleType
const TupleItemTupleTypeLiteral: TupleDefaults["TupleType"]["Literal"] = [[1]];
const RemoveTupleItemFromTupleTypeLiteral: EmptyTuple = [[1]];
const TupleItemTupleTypeObject: TupleDefaults["TupleType"]["Object"] = [[{}]];
const RemoveTupleItemFromTupleTypeObject: EmptyTuple = [[{}]];
const TupleItemTupleTypeString: TupleDefaults["TupleType"]["String"] = [
  ["two"],
];
const RemoveTupleItemFromTupleTypeString: EmptyTuple = [["two"]];
const TupleItemTupleTypeNumber: TupleDefaults["TupleType"]["Number"] = [[2]];
const RemoveTupleItemFromTupleTypeNumber: EmptyTuple = [[2]];
const TupleItemTupleTypeBoolean: TupleDefaults["TupleType"]["Boolean"] = [
  [true],
];
const RemoveTupleItemFromTupleTypeBoolean: EmptyTuple = [[true]];
const TupleItemTupleTypeAny: TupleDefaults["TupleType"]["Any"] = [[2]];
const RemoveTupleItemFromTupleTypeAny: EmptyTuple = [[2]];

// ArrayType
const TupleItemArrayTypeLiteral: TupleDefaults["ArrayType"]["Literal"] = [
  [1, 1],
];
const RemoveTupleItemFromArrayTypeLiteral: EmptyTuple = [[1, 1]];
const TupleItemArrayTypeObject: TupleDefaults["ArrayType"]["Object"] = [
  [{}, {}],
];
const RemoveTupleItemFromArrayTypeObject: EmptyTuple = [[{}, {}]];
const TupleItemArrayTypeString: TupleDefaults["ArrayType"]["String"] = [
  ["two", "two"],
];
const RemoveTupleItemFromArrayTypeString: EmptyTuple = [["two", "two"]];
const TupleItemArrayTypeNumber: TupleDefaults["ArrayType"]["Number"] = [[2, 2]];
const RemoveTupleItemFromArrayTypeNumber: EmptyTuple = [[2, 2]];
const TupleItemArrayTypeBoolean: TupleDefaults["ArrayType"]["Boolean"] = [
  [true, true],
];
const RemoveTupleItemFromArrayTypeBoolean: EmptyTuple = [[true, true]];
const TupleItemArrayTypeAny: TupleDefaults["ArrayType"]["Any"] = [[2, 2]];
const RemoveTupleItemFromArrayTypeAny: EmptyTuple = [[2, 2]];

// FunctionType
const TupleItemFunctionTypeLiteral: TupleDefaults["FunctionType"]["Literal"] = [
  (param) => {},
];
const RemoveTupleItemFromFunctionTypeLiteral: EmptyTuple = [(param) => {}];
const TupleItemFunctionTypeObject: TupleDefaults["FunctionType"]["Object"] = [
  (param) => {},
];
const RemoveTupleItemFromFunctionTypeObject: EmptyTuple = [(param) => {}];
const TupleItemFunctionTypeString: TupleDefaults["FunctionType"]["String"] = [
  (param) => {},
];
const RemoveTupleItemFromFunctionTypeString: EmptyTuple = [(param) => {}];
const TupleItemFunctionTypeNumber: TupleDefaults["FunctionType"]["Number"] = [
  (param) => {},
];
const RemoveTupleItemFromFunctionTypeNumber: EmptyTuple = [(param) => {}];
const TupleItemFunctionTypeBoolean: TupleDefaults["FunctionType"]["Boolean"] = [
  (param) => {},
];
const RemoveTupleItemFromFunctionTypeBoolean: EmptyTuple = [(param) => {}];
const TupleItemFunctionTypeAny: TupleDefaults["FunctionType"]["Any"] = [
  (param) => {},
];
const RemoveTupleItemFromFunctionTypeAny: EmptyTuple = [(param) => {}];

// ConstructorType
const TupleItemConstructorTypeLiteral: TupleDefaults["ConstructorType"]["Literal"] =
  [1];
const RemoveTupleItemFromConstructorTypeLiteral: EmptyTuple = [1];
const TupleItemConstructorTypeObject: TupleDefaults["ConstructorType"]["Object"] =
  [{}];
const RemoveTupleItemFromConstructorTypeObject: EmptyTuple = [{}];
const TupleItemConstructorTypeString: TupleDefaults["ConstructorType"]["String"] =
  ["two"];
const RemoveTupleItemFromConstructorTypeString: EmptyTuple = ["two"];
const TupleItemConstructorTypeNumber: TupleDefaults["ConstructorType"]["Number"] =
  [2];
const RemoveTupleItemFromConstructorTypeNumber: EmptyTuple = [2];
const TupleItemConstructorTypeBoolean: TupleDefaults["ConstructorType"]["Boolean"] =
  [true];
const RemoveTupleItemFromConstructorTypeBoolean: EmptyTuple = [true];
const TupleItemConstructorTypeAny: TupleDefaults["ConstructorType"]["Any"] = [
  2,
];
const RemoveTupleItemFromConstructorTypeAny: EmptyTuple = [2];
