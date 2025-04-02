import { Defaults as GeneralDefaults } from "../../defaults";
import { Defaults as ArrayDefaults } from "../defaults";

// ParenthesizedType

const ParenthesizedTypeWithLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] = 1;
const AddArrayTypeToParenthesizedTypeWithLiteral: ArrayDefaults["ParenthesizedType"]["Literal"] = 1;

const ParenthesizedTypeWithObject: GeneralDefaults["ParenthesizedType"]["Object"] =
  {};
const AddArrayTypeToParenthesizedTypeWithObject: ArrayDefaults["ParenthesizedType"]["Object"] =
  {};

const ParenthesizedTypeWithString: GeneralDefaults["ParenthesizedType"]["String"] =
  "two";
const AddArrayTypeToParenthesizedTypeWithString: ArrayDefaults["ParenthesizedType"]["String"] =
  "two";

const ParenthesizedTypeWithNumber: GeneralDefaults["ParenthesizedType"]["Number"] = 2;
const AddArrayTypeToParenthesizedTypeWithNumber: ArrayDefaults["ParenthesizedType"]["Number"] = 2;

const ParenthesizedTypeWithBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] =
  true;
const AddArrayTypeToParenthesizedTypeWithBoolean: ArrayDefaults["ParenthesizedType"]["Boolean"] =
  true;

const ParenthesizedTypeWithAny: GeneralDefaults["ParenthesizedType"]["Any"] = 2;
const AddArrayTypeToParenthesizedTypeWithAny: ArrayDefaults["ParenthesizedType"]["Any"] = 2;

// TypeReferenceBuiltin

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

const TypeReferenceBuiltinWithLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(1);
const AddArrayTypeToTypeReferenceBuiltinWithLiteral: ArrayDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(1);

const TypeReferenceBuiltinWithObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({});
const AddArrayTypeToTypeReferenceBuiltinWithObject: ArrayDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({});

const TypeReferenceBuiltinWithString: GeneralDefaults["TypeReferenceBuiltin"]["String"] =
  promisify("two");
const AddArrayTypeToTypeReferenceBuiltinWithString: ArrayDefaults["TypeReferenceBuiltin"]["String"] =
  promisify("two");

const TypeReferenceBuiltinWithNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(2);
const AddArrayTypeToTypeReferenceBuiltinWithNumber: ArrayDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(2);

const TypeReferenceBuiltinWithBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(true);
const AddArrayTypeToTypeReferenceBuiltinWithBoolean: ArrayDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(true);

const TypeReferenceBuiltinWithAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(2);
const AddArrayTypeToTypeReferenceBuiltinWithAny: ArrayDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(2);

// TypeReferencePredefined

const TypeReferencePredefinedWithLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] = 1;
const AddArrayTypeToTypeReferencePredefinedWithLiteral: ArrayDefaults["TypeReferencePredefined"]["Literal"] = 1;

const TypeReferencePredefinedWithObject: GeneralDefaults["TypeReferencePredefined"]["Object"] =
  {};
const AddArrayTypeToTypeReferencePredefinedWithObject: ArrayDefaults["TypeReferencePredefined"]["Object"] =
  {};

const TypeReferencePredefinedWithString: GeneralDefaults["TypeReferencePredefined"]["String"] =
  "two";
const AddArrayTypeToTypeReferencePredefinedWithString: ArrayDefaults["TypeReferencePredefined"]["String"] =
  "two";

const TypeReferencePredefinedWithNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] = 2;
const AddArrayTypeToTypeReferencePredefinedWithNumber: ArrayDefaults["TypeReferencePredefined"]["Number"] = 2;

const TypeReferencePredefinedWithBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] =
  true;
const AddArrayTypeToTypeReferencePredefinedWithBoolean: ArrayDefaults["TypeReferencePredefined"]["Boolean"] =
  true;

const TypeReferencePredefinedWithAny: GeneralDefaults["TypeReferencePredefined"]["Any"] = 2;
const AddArrayTypeToTypeReferencePredefinedWithAny: ArrayDefaults["TypeReferencePredefined"]["Any"] = 2;

// UnionType

const UnionTypeWithLiteral: GeneralDefaults["UnionType"]["Literal"] = 1;
const AddArrayTypeToUnionTypeWithLiteral: ArrayDefaults["UnionType"]["Literal"] = 1;

const UnionTypeWithObject: GeneralDefaults["UnionType"]["Object"] = {};
const AddArrayTypeToUnionTypeWithObject: ArrayDefaults["UnionType"]["Object"] =
  {};

const UnionTypeWithString: GeneralDefaults["UnionType"]["String"] = "two";
const AddArrayTypeToUnionTypeWithString: ArrayDefaults["UnionType"]["String"] =
  "two";

const UnionTypeWithNumber: GeneralDefaults["UnionType"]["Number"] = 2;
const AddArrayTypeToUnionTypeWithNumber: ArrayDefaults["UnionType"]["Number"] = 2;

const UnionTypeWithBoolean: GeneralDefaults["UnionType"]["Boolean"] = true;
const AddArrayTypeToUnionTypeWithBoolean: ArrayDefaults["UnionType"]["Boolean"] =
  true;

const UnionTypeWithAny: GeneralDefaults["UnionType"]["Any"] = 2;
const AddArrayTypeToUnionTypeWithAny: ArrayDefaults["UnionType"]["Any"] = 2;

// IntersectionType

const IntersectionTypeWithLiteral: GeneralDefaults["IntersectionType"]["Literal"] = 1;
const AddArrayTypeToIntersectionTypeWithLiteral: ArrayDefaults["IntersectionType"]["Literal"] = 1;

const IntersectionTypeWithObject: GeneralDefaults["IntersectionType"]["Object"] =
  {};
const AddArrayTypeToIntersectionTypeWithObject: ArrayDefaults["IntersectionType"]["Object"] =
  {};

const IntersectionTypeWithString: GeneralDefaults["IntersectionType"]["String"] =
  "two";
const AddArrayTypeToIntersectionTypeWithString: ArrayDefaults["IntersectionType"]["String"] =
  "two";

const IntersectionTypeWithNumber: GeneralDefaults["IntersectionType"]["Number"] = 2;
const AddArrayTypeToIntersectionTypeWithNumber: ArrayDefaults["IntersectionType"]["Number"] = 2;

const IntersectionTypeWithBoolean: GeneralDefaults["IntersectionType"]["Boolean"] =
  true;
const AddArrayTypeToIntersectionTypeWithBoolean: ArrayDefaults["IntersectionType"]["Boolean"] =
  true;

const IntersectionTypeWithAny: GeneralDefaults["IntersectionType"]["Any"] = 2;
const AddArrayTypeToIntersectionTypeWithAny: ArrayDefaults["IntersectionType"]["Any"] = 2;

// TypeLiteral

const TypeLiteralWithLiteral: GeneralDefaults["TypeLiteral"]["Literal"] = {
  key: 1,
};
const AddArrayTypeToTypeLiteralWithLiteral: ArrayDefaults["TypeLiteral"]["Literal"] =
  { key: 1 };

const TypeLiteralWithObject: GeneralDefaults["TypeLiteral"]["Object"] = {
  key: {},
};
const AddArrayTypeToTypeLiteralWithObject: ArrayDefaults["TypeLiteral"]["Object"] =
  { key: {} };

const TypeLiteralWithString: GeneralDefaults["TypeLiteral"]["String"] = {
  key: "two",
};
const AddArrayTypeToTypeLiteralWithString: ArrayDefaults["TypeLiteral"]["String"] =
  { key: "two" };

const TypeLiteralWithNumber: GeneralDefaults["TypeLiteral"]["Number"] = {
  key: 2,
};
const AddArrayTypeToTypeLiteralWithNumber: ArrayDefaults["TypeLiteral"]["Number"] =
  { key: 2 };

const TypeLiteralWithBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] = {
  key: true,
};
const AddArrayTypeToTypeLiteralWithBoolean: ArrayDefaults["TypeLiteral"]["Boolean"] =
  { key: true };

const TypeLiteralWithAny: GeneralDefaults["TypeLiteral"]["Any"] = { key: 2 };
const AddArrayTypeToTypeLiteralWithAny: ArrayDefaults["TypeLiteral"]["Any"] = {
  key: 2,
};

// TupleType

const TupleTypeWithLiteral: GeneralDefaults["TupleType"]["Literal"] = [1];
const AddArrayTypeToTupleTypeWithLiteral: ArrayDefaults["TupleType"]["Literal"] =
  [1];

const TupleTypeWithObject: GeneralDefaults["TupleType"]["Object"] = [{}];
const AddArrayTypeToTupleTypeWithObject: ArrayDefaults["TupleType"]["Object"] =
  [{}];

const TupleTypeWithString: GeneralDefaults["TupleType"]["String"] = ["two"];
const AddArrayTypeToTupleTypeWithString: ArrayDefaults["TupleType"]["String"] =
  ["two"];

const TupleTypeWithNumber: GeneralDefaults["TupleType"]["Number"] = [2];
const AddArrayTypeToTupleTypeWithNumber: ArrayDefaults["TupleType"]["Number"] =
  [2];

const TupleTypeWithBoolean: GeneralDefaults["TupleType"]["Boolean"] = [true];
const AddArrayTypeToTupleTypeWithBoolean: ArrayDefaults["TupleType"]["Boolean"] =
  [true];

const TupleTypeWithAny: GeneralDefaults["TupleType"]["Any"] = [2];
const AddArrayTypeToTupleTypeWithAny: ArrayDefaults["TupleType"]["Any"] = [2];

// ArrayType

const ArrayTypeWithLiteral: GeneralDefaults["ArrayType"]["Literal"] = [1, 1];
const AddArrayTypeToArrayTypeWithLiteral: ArrayDefaults["ArrayType"]["Literal"] =
  [1, 1];

const ArrayTypeWithObject: GeneralDefaults["ArrayType"]["Object"] = [{}, {}];
const AddArrayTypeToArrayTypeWithObject: ArrayDefaults["ArrayType"]["Object"] =
  [{}, {}];

const ArrayTypeWithString: GeneralDefaults["ArrayType"]["String"] = [
  "two",
  "two",
];
const AddArrayTypeToArrayTypeWithString: ArrayDefaults["ArrayType"]["String"] =
  ["two", "two"];

const ArrayTypeWithNumber: GeneralDefaults["ArrayType"]["Number"] = [2, 2];
const AddArrayTypeToArrayTypeWithNumber: ArrayDefaults["ArrayType"]["Number"] =
  [2, 2];

const ArrayTypeWithBoolean: GeneralDefaults["ArrayType"]["Boolean"] = [
  true,
  true,
];
const AddArrayTypeToArrayTypeWithBoolean: ArrayDefaults["ArrayType"]["Boolean"] =
  [true, true];

const ArrayTypeWithAny: GeneralDefaults["ArrayType"]["Any"] = [2, 2];
const AddArrayTypeToArrayTypeWithAny: ArrayDefaults["ArrayType"]["Any"] = [
  2, 2,
];

// FunctionType

const FunctionTypeWithLiteral: GeneralDefaults["FunctionType"]["Literal"] = (
  param: 1,
) => {};
const AddArrayTypeToFunctionTypeWithLiteral: ArrayDefaults["FunctionType"]["Literal"] =
  (param: 1) => {};

const FunctionTypeWithObject: GeneralDefaults["FunctionType"]["Object"] = (
  param: object,
) => {};
const AddArrayTypeToFunctionTypeWithObject: ArrayDefaults["FunctionType"]["Object"] =
  (param: object) => {};

const FunctionTypeWithString: GeneralDefaults["FunctionType"]["String"] = (
  param: string,
) => {};
const AddArrayTypeToFunctionTypeWithString: ArrayDefaults["FunctionType"]["String"] =
  (param: string) => {};

const FunctionTypeWithNumber: GeneralDefaults["FunctionType"]["Number"] = (
  param: number,
) => {};
const AddArrayTypeToFunctionTypeWithNumber: ArrayDefaults["FunctionType"]["Number"] =
  (param: number) => {};

const FunctionTypeWithBoolean: GeneralDefaults["FunctionType"]["Boolean"] = (
  param: boolean,
) => {};
const AddArrayTypeToFunctionTypeWithBoolean: ArrayDefaults["FunctionType"]["Boolean"] =
  (param: boolean) => {};

const FunctionTypeWithAny: GeneralDefaults["FunctionType"]["Any"] = (
  param: any,
) => {};
const AddArrayTypeToFunctionTypeWithAny: ArrayDefaults["FunctionType"]["Any"] =
  (param: any) => {};

// ConstructorType

const ConstructorTypeWithLiteral: GeneralDefaults["ConstructorType"]["Literal"] = 1;
const AddArrayTypeToConstructorTypeWithLiteral: ArrayDefaults["ConstructorType"]["Literal"] = 1;

const ConstructorTypeWithObject: GeneralDefaults["ConstructorType"]["Object"] =
  {};
const AddArrayTypeToConstructorTypeWithObject: ArrayDefaults["ConstructorType"]["Object"] =
  {};

const ConstructorTypeWithString: GeneralDefaults["ConstructorType"]["String"] =
  "two";
const AddArrayTypeToConstructorTypeWithString: ArrayDefaults["ConstructorType"]["String"] =
  "two";

const ConstructorTypeWithNumber: GeneralDefaults["ConstructorType"]["Number"] = 2;
const AddArrayTypeToConstructorTypeWithNumber: ArrayDefaults["ConstructorType"]["Number"] = 2;

const ConstructorTypeWithBoolean: GeneralDefaults["ConstructorType"]["Boolean"] =
  true;
const AddArrayTypeToConstructorTypeWithBoolean: ArrayDefaults["ConstructorType"]["Boolean"] =
  true;

const ConstructorTypeWithAny: GeneralDefaults["ConstructorType"]["Any"] = 2;
const AddArrayTypeToConstructorTypeWithAny: ArrayDefaults["ConstructorType"]["Any"] = 2;
