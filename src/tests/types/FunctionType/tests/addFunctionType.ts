import { Defaults as GeneralDefaults } from "../../defaults";
import { ReturnDefaults } from "../defaults";
/*
 * FunctionType
 */

// Add Function Type - ParenthesizedType
const VariableOfParenthesizedTypeLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] = 1;
const AddFunctionTypeParenthesizedTypeLiteral: ReturnDefaults["ParenthesizedType"]["Literal"] = 1;

const VariableOfParenthesizedTypeObject: GeneralDefaults["ParenthesizedType"]["Object"] =
  {};
const AddFunctionTypeParenthesizedTypeObject: ReturnDefaults["ParenthesizedType"]["Object"] =
  {};

const VariableOfParenthesizedTypeString: GeneralDefaults["ParenthesizedType"]["String"] =
  "two";
const AddFunctionTypeParenthesizedTypeString: ReturnDefaults["ParenthesizedType"]["String"] =
  "two";

const VariableOfParenthesizedTypeNumber: GeneralDefaults["ParenthesizedType"]["Number"] = 2;
const AddFunctionTypeParenthesizedTypeNumber: ReturnDefaults["ParenthesizedType"]["Number"] = 2;

const VariableOfParenthesizedTypeBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] =
  true;
const AddFunctionTypeParenthesizedTypeBoolean: ReturnDefaults["ParenthesizedType"]["Boolean"] =
  true;

const VariableOfParenthesizedTypeAny: GeneralDefaults["ParenthesizedType"]["Any"] = 2;
const AddFunctionTypeParenthesizedTypeAny: ReturnDefaults["ParenthesizedType"]["Any"] = 2;

// Add Function Type - TypeReferenceBuiltin
const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);
const VariableOfTypeReferenceBuiltinLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(1);
const AddFunctionTypeTypeReferenceBuiltinLiteral: ReturnDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(1);

const VariableOfTypeReferenceBuiltinObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({});
const AddFunctionTypeTypeReferenceBuiltinObject: ReturnDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({});

const VariableOfTypeReferenceBuiltinString: GeneralDefaults["TypeReferenceBuiltin"]["String"] =
  promisify("two");
const AddFunctionTypeTypeReferenceBuiltinString: ReturnDefaults["TypeReferenceBuiltin"]["String"] =
  promisify("two");

const VariableOfTypeReferenceBuiltinNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(2);
const AddFunctionTypeTypeReferenceBuiltinNumber: ReturnDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(2);

const VariableOfTypeReferenceBuiltinBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(true);
const AddFunctionTypeTypeReferenceBuiltinBoolean: ReturnDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(true);

const VariableOfTypeReferenceBuiltinAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(2);
const AddFunctionTypeTypeReferenceBuiltinAny: ReturnDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(2);

// Add Function Type - TypeReferencePredefined
const VariableOfTypeReferencePredefinedLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] = 1;
const AddFunctionTypeTypeReferencePredefinedLiteral: ReturnDefaults["TypeReferencePredefined"]["Literal"] = 1;

const VariableOfTypeReferencePredefinedObject: GeneralDefaults["TypeReferencePredefined"]["Object"] =
  {};
const AddFunctionTypeTypeReferencePredefinedObject: ReturnDefaults["TypeReferencePredefined"]["Object"] =
  {};

const VariableOfTypeReferencePredefinedString: GeneralDefaults["TypeReferencePredefined"]["String"] =
  "two";
const AddFunctionTypeTypeReferencePredefinedString: ReturnDefaults["TypeReferencePredefined"]["String"] =
  "two";

const VariableOfTypeReferencePredefinedNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] = 2;
const AddFunctionTypeTypeReferencePredefinedNumber: ReturnDefaults["TypeReferencePredefined"]["Number"] = 2;

const VariableOfTypeReferencePredefinedBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] =
  true;
const AddFunctionTypeTypeReferencePredefinedBoolean: ReturnDefaults["TypeReferencePredefined"]["Boolean"] =
  true;

const VariableOfTypeReferencePredefinedAny: GeneralDefaults["TypeReferencePredefined"]["Any"] = 2;
const AddFunctionTypeTypeReferencePredefinedAny: ReturnDefaults["TypeReferencePredefined"]["Any"] = 2;

// Add Function Type - UnionType
const VariableOfUnionTypeLiteral: GeneralDefaults["UnionType"]["Literal"] = 1;
const AddFunctionTypeUnionTypeLiteral: ReturnDefaults["UnionType"]["Literal"] = 1;

const VariableOfUnionTypeObject: GeneralDefaults["UnionType"]["Object"] = {};
const AddFunctionTypeUnionTypeObject: ReturnDefaults["UnionType"]["Object"] =
  {};

const VariableOfUnionTypeString: GeneralDefaults["UnionType"]["String"] = "two";
const AddFunctionTypeUnionTypeString: ReturnDefaults["UnionType"]["String"] =
  "two";

const VariableOfUnionTypeNumber: GeneralDefaults["UnionType"]["Number"] = 2;
const AddFunctionTypeUnionTypeNumber: ReturnDefaults["UnionType"]["Number"] = 2;

const VariableOfUnionTypeBoolean: GeneralDefaults["UnionType"]["Boolean"] =
  true;
const AddFunctionTypeUnionTypeBoolean: ReturnDefaults["UnionType"]["Boolean"] =
  true;

const VariableOfUnionTypeAny: GeneralDefaults["UnionType"]["Any"] = 2;
const AddFunctionTypeUnionTypeAny: ReturnDefaults["UnionType"]["Any"] = 2;

// Add Function Type - IntersectionType
const VariableOfIntersectionTypeLiteral: GeneralDefaults["IntersectionType"]["Literal"] = 1;
const AddFunctionTypeIntersectionTypeLiteral: ReturnDefaults["IntersectionType"]["Literal"] = 1;

const VariableOfIntersectionTypeObject: GeneralDefaults["IntersectionType"]["Object"] =
  {};
const AddFunctionTypeIntersectionTypeObject: ReturnDefaults["IntersectionType"]["Object"] =
  {};

const VariableOfIntersectionTypeString: GeneralDefaults["IntersectionType"]["String"] =
  "two";
const AddFunctionTypeIntersectionTypeString: ReturnDefaults["IntersectionType"]["String"] =
  "two";

const VariableOfIntersectionTypeNumber: GeneralDefaults["IntersectionType"]["Number"] = 2;
const AddFunctionTypeIntersectionTypeNumber: ReturnDefaults["IntersectionType"]["Number"] = 2;

const VariableOfIntersectionTypeBoolean: GeneralDefaults["IntersectionType"]["Boolean"] =
  true;
const AddFunctionTypeIntersectionTypeBoolean: ReturnDefaults["IntersectionType"]["Boolean"] =
  true;

const VariableOfIntersectionTypeAny: GeneralDefaults["IntersectionType"]["Any"] = 2;
const AddFunctionTypeIntersectionTypeAny: ReturnDefaults["IntersectionType"]["Any"] = 2;

// Add Function Type - TypeLiteral
const VariableOfTypeLiteralLiteral: GeneralDefaults["TypeLiteral"]["Literal"] =
  { key: 1 };
const AddFunctionTypeTypeLiteralLiteral: ReturnDefaults["TypeLiteral"]["Literal"] =
  { key: 1 };

const VariableOfTypeLiteralObject: GeneralDefaults["TypeLiteral"]["Object"] = {
  key: {},
};
const AddFunctionTypeTypeLiteralObject: ReturnDefaults["TypeLiteral"]["Object"] =
  { key: {} };

const VariableOfTypeLiteralString: GeneralDefaults["TypeLiteral"]["String"] = {
  key: "two",
};
const AddFunctionTypeTypeLiteralString: ReturnDefaults["TypeLiteral"]["String"] =
  { key: "two" };

const VariableOfTypeLiteralNumber: GeneralDefaults["TypeLiteral"]["Number"] = {
  key: 2,
};
const AddFunctionTypeTypeLiteralNumber: ReturnDefaults["TypeLiteral"]["Number"] =
  { key: 2 };

const VariableOfTypeLiteralBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] =
  { key: true };
const AddFunctionTypeTypeLiteralBoolean: ReturnDefaults["TypeLiteral"]["Boolean"] =
  { key: true };

const VariableOfTypeLiteralAny: GeneralDefaults["TypeLiteral"]["Any"] = {
  key: 2,
};
const AddFunctionTypeTypeLiteralAny: ReturnDefaults["TypeLiteral"]["Any"] = {
  key: 2,
};

// Add Function Type - TupleType
const VariableOfTupleTypeLiteral: GeneralDefaults["TupleType"]["Literal"] = [1];
const AddFunctionTypeTupleTypeLiteral: ReturnDefaults["TupleType"]["Literal"] =
  [1];

const VariableOfTupleTypeObject: GeneralDefaults["TupleType"]["Object"] = [{}];
const AddFunctionTypeTupleTypeObject: ReturnDefaults["TupleType"]["Object"] = [
  {},
];

const VariableOfTupleTypeString: GeneralDefaults["TupleType"]["String"] = [
  "two",
];
const AddFunctionTypeTupleTypeString: ReturnDefaults["TupleType"]["String"] = [
  "two",
];

const VariableOfTupleTypeNumber: GeneralDefaults["TupleType"]["Number"] = [2];
const AddFunctionTypeTupleTypeNumber: ReturnDefaults["TupleType"]["Number"] = [
  2,
];

const VariableOfTupleTypeBoolean: GeneralDefaults["TupleType"]["Boolean"] = [
  true,
];
const AddFunctionTypeTupleTypeBoolean: ReturnDefaults["TupleType"]["Boolean"] =
  [true];

const VariableOfTupleTypeAny: GeneralDefaults["TupleType"]["Any"] = [2];
const AddFunctionTypeTupleTypeAny: ReturnDefaults["TupleType"]["Any"] = [2];

// Add Function Type - ArrayType
const VariableOfArrayTypeLiteral: GeneralDefaults["ArrayType"]["Literal"] = [
  1, 1,
];
const AddFunctionTypeArrayTypeLiteral: ReturnDefaults["ArrayType"]["Literal"] =
  [1, 1];

const VariableOfArrayTypeObject: GeneralDefaults["ArrayType"]["Object"] = [
  {},
  {},
];
const AddFunctionTypeArrayTypeObject: ReturnDefaults["ArrayType"]["Object"] = [
  {},
  {},
];

const VariableOfArrayTypeString: GeneralDefaults["ArrayType"]["String"] = [
  "two",
  "two",
];
const AddFunctionTypeArrayTypeString: ReturnDefaults["ArrayType"]["String"] = [
  "two",
  "two",
];

const VariableOfArrayTypeNumber: GeneralDefaults["ArrayType"]["Number"] = [
  2, 2,
];
const AddFunctionTypeArrayTypeNumber: ReturnDefaults["ArrayType"]["Number"] = [
  2, 2,
];

const VariableOfArrayTypeBoolean: GeneralDefaults["ArrayType"]["Boolean"] = [
  true,
  true,
];
const AddFunctionTypeArrayTypeBoolean: ReturnDefaults["ArrayType"]["Boolean"] =
  [true, true];

const VariableOfArrayTypeAny: GeneralDefaults["ArrayType"]["Any"] = [2, 2];
const AddFunctionTypeArrayTypeAny: ReturnDefaults["ArrayType"]["Any"] = [2, 2];

// Add Function Type - FunctionType
const VariableOfFunctionTypeLiteral: GeneralDefaults["FunctionType"]["Literal"] =
  (param: 1) => {};
const AddFunctionTypeFunctionTypeLiteral: ReturnDefaults["FunctionType"]["Literal"] =
  (param: 1) => {};

const VariableOfFunctionTypeObject: GeneralDefaults["FunctionType"]["Object"] =
  (param: object) => {};
const AddFunctionTypeFunctionTypeObject: ReturnDefaults["FunctionType"]["Object"] =
  (param: object) => {};

const VariableOfFunctionTypeString: GeneralDefaults["FunctionType"]["String"] =
  (param: string) => {};
const AddFunctionTypeFunctionTypeString: ReturnDefaults["FunctionType"]["String"] =
  (param: string) => {};

const VariableOfFunctionTypeNumber: GeneralDefaults["FunctionType"]["Number"] =
  (param: number) => {};
const AddFunctionTypeFunctionTypeNumber: ReturnDefaults["FunctionType"]["Number"] =
  (param: number) => {};

const VariableOfFunctionTypeBoolean: GeneralDefaults["FunctionType"]["Boolean"] =
  (param: boolean) => {};
const AddFunctionTypeFunctionTypeBoolean: ReturnDefaults["FunctionType"]["Boolean"] =
  (param: boolean) => {};

const VariableOfFunctionTypeAny: GeneralDefaults["FunctionType"]["Any"] = (
  param: any,
) => {};
const AddFunctionTypeFunctionTypeAny: ReturnDefaults["FunctionType"]["Any"] = (
  param: any,
) => {};

// Add Function Type - ConstructorType
const VariableOfConstructorTypeLiteral: GeneralDefaults["ConstructorType"]["Literal"] = 1;
const AddFunctionTypeConstructorTypeLiteral: ReturnDefaults["ConstructorType"]["Literal"] = 1;

const VariableOfConstructorTypeObject: GeneralDefaults["ConstructorType"]["Object"] =
  {};
const AddFunctionTypeConstructorTypeObject: ReturnDefaults["ConstructorType"]["Object"] =
  {};

const VariableOfConstructorTypeString: GeneralDefaults["ConstructorType"]["String"] =
  "two";
const AddFunctionTypeConstructorTypeString: ReturnDefaults["ConstructorType"]["String"] =
  "two";

const VariableOfConstructorTypeNumber: GeneralDefaults["ConstructorType"]["Number"] = 2;
const AddFunctionTypeConstructorTypeNumber: ReturnDefaults["ConstructorType"]["Number"] = 2;

const VariableOfConstructorTypeBoolean: GeneralDefaults["ConstructorType"]["Boolean"] =
  true;
const AddFunctionTypeConstructorTypeBoolean: ReturnDefaults["ConstructorType"]["Boolean"] =
  true;

const VariableOfConstructorTypeAny: GeneralDefaults["ConstructorType"]["Any"] = 2;
const AddFunctionTypeConstructorTypeAny: ReturnDefaults["ConstructorType"]["Any"] = 2;
