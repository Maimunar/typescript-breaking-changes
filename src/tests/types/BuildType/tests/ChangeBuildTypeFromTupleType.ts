import { Defaults } from "../../defaults";

/*
 * Change Build Type from TupleType  
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Change Build Type From TupleType - Literal

// Initial Value
const TupleTypeWithLiteral: Defaults["TupleType"]["Literal"] = [1]
// Changes
// ParenthesizedType With Literal
const ParenthesizedTypeWithLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = [1];
const ParenthesizedTypeWithLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = [1];
const ParenthesizedTypeWithLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = [1];
const ParenthesizedTypeWithLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = [1];
const ParenthesizedTypeWithLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = [1];
const ParenthesizedTypeWithLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = [1];
// TypeReferenceBuiltin With Literal
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = [1];
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = [1];
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = [1];
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = [1];
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = [1];
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = [1];
// TypeReferencePredefined With Literal
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = [1];
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = [1];
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = [1];
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = [1];
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = [1];
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = [1];
// UnionType With Literal
const UnionTypeWithLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = [1];
const UnionTypeWithLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] = [1];
const UnionTypeWithLiteralToUnionTypeString: Defaults["UnionType"]["String"] = [1];
const UnionTypeWithLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] = [1];
const UnionTypeWithLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = [1];
const UnionTypeWithLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] = [1];
// IntersectionType With Literal
const IntersectionTypeWithLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = [1];
const IntersectionTypeWithLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = [1];
const IntersectionTypeWithLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] = [1];
const IntersectionTypeWithLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = [1];
const IntersectionTypeWithLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = [1];
const IntersectionTypeWithLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = [1];
// TypeLiteral With Literal
const TypeLiteralWithLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = [1];
const TypeLiteralWithLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = [1];
const TypeLiteralWithLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] = [1];
const TypeLiteralWithLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = [1];
const TypeLiteralWithLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = [1];
const TypeLiteralWithLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = [1];
// ArrayType With Literal
const ArrayTypeWithLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = [1];
const ArrayTypeWithLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] = [1];
const ArrayTypeWithLiteralToArrayTypeString: Defaults["ArrayType"]["String"] = [1];
const ArrayTypeWithLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] = [1];
const ArrayTypeWithLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = [1];
const ArrayTypeWithLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] = [1];
// FunctionType With Literal
const FunctionTypeWithLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = [1];
const FunctionTypeWithLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] = [1];
const FunctionTypeWithLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] = [1];
const FunctionTypeWithLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = [1];
const FunctionTypeWithLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = [1];
const FunctionTypeWithLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] = [1];
// ConstructorType With Literal
const ConstructorTypeWithLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = [1];
const ConstructorTypeWithLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = [1];
const ConstructorTypeWithLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] = [1];
const ConstructorTypeWithLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = [1];
const ConstructorTypeWithLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = [1];
const ConstructorTypeWithLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = [1];

// Change Build Type From TupleType - Object

// Initial Value
const TupleTypeWithObject: Defaults["TupleType"]["Object"] = [{}]
// Changes
// ParenthesizedType With Object
const ParenthesizedTypeWithObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = [{}];
const ParenthesizedTypeWithObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = [{}];
const ParenthesizedTypeWithObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = [{}];
const ParenthesizedTypeWithObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = [{}];
const ParenthesizedTypeWithObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = [{}];
const ParenthesizedTypeWithObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = [{}];
// TypeReferenceBuiltin With Object
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = [{}];
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = [{}];
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = [{}];
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = [{}];
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = [{}];
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = [{}];
// TypeReferencePredefined With Object
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = [{}];
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = [{}];
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = [{}];
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = [{}];
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = [{}];
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = [{}];
// UnionType With Object
const UnionTypeWithObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = [{}];
const UnionTypeWithObjectToUnionTypeObject: Defaults["UnionType"]["Object"] = [{}];
const UnionTypeWithObjectToUnionTypeString: Defaults["UnionType"]["String"] = [{}];
const UnionTypeWithObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] = [{}];
const UnionTypeWithObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = [{}];
const UnionTypeWithObjectToUnionTypeAny: Defaults["UnionType"]["Any"] = [{}];
// IntersectionType With Object
const IntersectionTypeWithObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = [{}];
const IntersectionTypeWithObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = [{}];
const IntersectionTypeWithObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] = [{}];
const IntersectionTypeWithObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = [{}];
const IntersectionTypeWithObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = [{}];
const IntersectionTypeWithObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = [{}];
// TypeLiteral With Object
const TypeLiteralWithObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = [{}];
const TypeLiteralWithObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = [{}];
const TypeLiteralWithObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] = [{}];
const TypeLiteralWithObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = [{}];
const TypeLiteralWithObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = [{}];
const TypeLiteralWithObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = [{}];
// ArrayType With Object
const ArrayTypeWithObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = [{}];
const ArrayTypeWithObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] = [{}];
const ArrayTypeWithObjectToArrayTypeString: Defaults["ArrayType"]["String"] = [{}];
const ArrayTypeWithObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] = [{}];
const ArrayTypeWithObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = [{}];
const ArrayTypeWithObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] = [{}];
// FunctionType With Object
const FunctionTypeWithObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = [{}];
const FunctionTypeWithObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] = [{}];
const FunctionTypeWithObjectToFunctionTypeString: Defaults["FunctionType"]["String"] = [{}];
const FunctionTypeWithObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = [{}];
const FunctionTypeWithObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = [{}];
const FunctionTypeWithObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] = [{}];
// ConstructorType With Object
const ConstructorTypeWithObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = [{}];
const ConstructorTypeWithObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = [{}];
const ConstructorTypeWithObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] = [{}];
const ConstructorTypeWithObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = [{}];
const ConstructorTypeWithObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = [{}];
const ConstructorTypeWithObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = [{}];

// Change Build Type From TupleType - String

// Initial Value
const TupleTypeWithString: Defaults["TupleType"]["String"] = ["two"]
// Changes
// ParenthesizedType With String
const ParenthesizedTypeWithStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = ["two"];
const ParenthesizedTypeWithStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = ["two"];
const ParenthesizedTypeWithStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = ["two"];
const ParenthesizedTypeWithStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = ["two"];
const ParenthesizedTypeWithStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = ["two"];
const ParenthesizedTypeWithStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = ["two"];
// TypeReferenceBuiltin With String
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = ["two"];
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = ["two"];
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = ["two"];
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = ["two"];
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = ["two"];
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = ["two"];
// TypeReferencePredefined With String
const TypeReferencePredefinedWithStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = ["two"];
const TypeReferencePredefinedWithStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = ["two"];
const TypeReferencePredefinedWithStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = ["two"];
const TypeReferencePredefinedWithStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = ["two"];
const TypeReferencePredefinedWithStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = ["two"];
const TypeReferencePredefinedWithStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = ["two"];
// UnionType With String
const UnionTypeWithStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = ["two"];
const UnionTypeWithStringToUnionTypeObject: Defaults["UnionType"]["Object"] = ["two"];
const UnionTypeWithStringToUnionTypeString: Defaults["UnionType"]["String"] = ["two"];
const UnionTypeWithStringToUnionTypeNumber: Defaults["UnionType"]["Number"] = ["two"];
const UnionTypeWithStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = ["two"];
const UnionTypeWithStringToUnionTypeAny: Defaults["UnionType"]["Any"] = ["two"];
// IntersectionType With String
const IntersectionTypeWithStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = ["two"];
const IntersectionTypeWithStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = ["two"];
const IntersectionTypeWithStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] = ["two"];
const IntersectionTypeWithStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = ["two"];
const IntersectionTypeWithStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = ["two"];
const IntersectionTypeWithStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = ["two"];
// TypeLiteral With String
const TypeLiteralWithStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = ["two"];
const TypeLiteralWithStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = ["two"];
const TypeLiteralWithStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] = ["two"];
const TypeLiteralWithStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = ["two"];
const TypeLiteralWithStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = ["two"];
const TypeLiteralWithStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = ["two"];
// ArrayType With String
const ArrayTypeWithStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = ["two"];
const ArrayTypeWithStringToArrayTypeObject: Defaults["ArrayType"]["Object"] = ["two"];
const ArrayTypeWithStringToArrayTypeString: Defaults["ArrayType"]["String"] = ["two"];
const ArrayTypeWithStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] = ["two"];
const ArrayTypeWithStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = ["two"];
const ArrayTypeWithStringToArrayTypeAny: Defaults["ArrayType"]["Any"] = ["two"];
// FunctionType With String
const FunctionTypeWithStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = ["two"];
const FunctionTypeWithStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] = ["two"];
const FunctionTypeWithStringToFunctionTypeString: Defaults["FunctionType"]["String"] = ["two"];
const FunctionTypeWithStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = ["two"];
const FunctionTypeWithStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = ["two"];
const FunctionTypeWithStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] = ["two"];
// ConstructorType With String
const ConstructorTypeWithStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = ["two"];
const ConstructorTypeWithStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = ["two"];
const ConstructorTypeWithStringToConstructorTypeString: Defaults["ConstructorType"]["String"] = ["two"];
const ConstructorTypeWithStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = ["two"];
const ConstructorTypeWithStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = ["two"];
const ConstructorTypeWithStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = ["two"];

// Change Build Type From TupleType - Number

// Initial Value
const TupleTypeWithNumber: Defaults["TupleType"]["Number"] = [2]
// Changes
// ParenthesizedType With Number
const ParenthesizedTypeWithNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = [2];
const ParenthesizedTypeWithNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = [2];
const ParenthesizedTypeWithNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = [2];
const ParenthesizedTypeWithNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = [2];
const ParenthesizedTypeWithNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = [2];
const ParenthesizedTypeWithNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = [2];
// TypeReferenceBuiltin With Number
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = [2];
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = [2];
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = [2];
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = [2];
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = [2];
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = [2];
// TypeReferencePredefined With Number
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = [2];
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = [2];
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = [2];
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = [2];
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = [2];
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = [2];
// UnionType With Number
const UnionTypeWithNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = [2];
const UnionTypeWithNumberToUnionTypeObject: Defaults["UnionType"]["Object"] = [2];
const UnionTypeWithNumberToUnionTypeString: Defaults["UnionType"]["String"] = [2];
const UnionTypeWithNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] = [2];
const UnionTypeWithNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = [2];
const UnionTypeWithNumberToUnionTypeAny: Defaults["UnionType"]["Any"] = [2];
// IntersectionType With Number
const IntersectionTypeWithNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = [2];
const IntersectionTypeWithNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = [2];
const IntersectionTypeWithNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] = [2];
const IntersectionTypeWithNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = [2];
const IntersectionTypeWithNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = [2];
const IntersectionTypeWithNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = [2];
// TypeLiteral With Number
const TypeLiteralWithNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = [2];
const TypeLiteralWithNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = [2];
const TypeLiteralWithNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] = [2];
const TypeLiteralWithNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = [2];
const TypeLiteralWithNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = [2];
const TypeLiteralWithNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = [2];
// ArrayType With Number
const ArrayTypeWithNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = [2];
const ArrayTypeWithNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] = [2];
const ArrayTypeWithNumberToArrayTypeString: Defaults["ArrayType"]["String"] = [2];
const ArrayTypeWithNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] = [2];
const ArrayTypeWithNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = [2];
const ArrayTypeWithNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] = [2];
// FunctionType With Number
const FunctionTypeWithNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = [2];
const FunctionTypeWithNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] = [2];
const FunctionTypeWithNumberToFunctionTypeString: Defaults["FunctionType"]["String"] = [2];
const FunctionTypeWithNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = [2];
const FunctionTypeWithNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = [2];
const FunctionTypeWithNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] = [2];
// ConstructorType With Number
const ConstructorTypeWithNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = [2];
const ConstructorTypeWithNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = [2];
const ConstructorTypeWithNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] = [2];
const ConstructorTypeWithNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = [2];
const ConstructorTypeWithNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = [2];
const ConstructorTypeWithNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = [2];

// Change Build Type From TupleType - Boolean

// Initial Value
const TupleTypeWithBoolean: Defaults["TupleType"]["Boolean"] = [true]
// Changes
// ParenthesizedType With Boolean
const ParenthesizedTypeWithBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = [true];
const ParenthesizedTypeWithBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = [true];
const ParenthesizedTypeWithBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = [true];
const ParenthesizedTypeWithBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = [true];
const ParenthesizedTypeWithBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = [true];
const ParenthesizedTypeWithBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = [true];
// TypeReferenceBuiltin With Boolean
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = [true];
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = [true];
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = [true];
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = [true];
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = [true];
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = [true];
// TypeReferencePredefined With Boolean
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = [true];
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = [true];
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = [true];
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = [true];
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = [true];
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = [true];
// UnionType With Boolean
const UnionTypeWithBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = [true];
const UnionTypeWithBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] = [true];
const UnionTypeWithBooleanToUnionTypeString: Defaults["UnionType"]["String"] = [true];
const UnionTypeWithBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] = [true];
const UnionTypeWithBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = [true];
const UnionTypeWithBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] = [true];
// IntersectionType With Boolean
const IntersectionTypeWithBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = [true];
const IntersectionTypeWithBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = [true];
const IntersectionTypeWithBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] = [true];
const IntersectionTypeWithBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = [true];
const IntersectionTypeWithBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = [true];
const IntersectionTypeWithBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = [true];
// TypeLiteral With Boolean
const TypeLiteralWithBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = [true];
const TypeLiteralWithBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = [true];
const TypeLiteralWithBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] = [true];
const TypeLiteralWithBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = [true];
const TypeLiteralWithBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = [true];
const TypeLiteralWithBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = [true];
// ArrayType With Boolean
const ArrayTypeWithBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = [true];
const ArrayTypeWithBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] = [true];
const ArrayTypeWithBooleanToArrayTypeString: Defaults["ArrayType"]["String"] = [true];
const ArrayTypeWithBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] = [true];
const ArrayTypeWithBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = [true];
const ArrayTypeWithBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] = [true];
// FunctionType With Boolean
const FunctionTypeWithBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = [true];
const FunctionTypeWithBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] = [true];
const FunctionTypeWithBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] = [true];
const FunctionTypeWithBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = [true];
const FunctionTypeWithBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = [true];
const FunctionTypeWithBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] = [true];
// ConstructorType With Boolean
const ConstructorTypeWithBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = [true];
const ConstructorTypeWithBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = [true];
const ConstructorTypeWithBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] = [true];
const ConstructorTypeWithBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = [true];
const ConstructorTypeWithBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = [true];
const ConstructorTypeWithBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = [true];

// Change Build Type From TupleType - Any

// Initial Value
const TupleTypeWithAny: Defaults["TupleType"]["Any"] = [2]
// Changes
// ParenthesizedType With Any
const ParenthesizedTypeWithAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = [2];
const ParenthesizedTypeWithAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = [2];
const ParenthesizedTypeWithAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = [2];
const ParenthesizedTypeWithAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = [2];
const ParenthesizedTypeWithAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = [2];
const ParenthesizedTypeWithAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = [2];
// TypeReferenceBuiltin With Any
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = [2];
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = [2];
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = [2];
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = [2];
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = [2];
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = [2];
// TypeReferencePredefined With Any
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = [2];
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = [2];
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = [2];
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = [2];
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = [2];
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = [2];
// UnionType With Any
const UnionTypeWithAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = [2];
const UnionTypeWithAnyToUnionTypeObject: Defaults["UnionType"]["Object"] = [2];
const UnionTypeWithAnyToUnionTypeString: Defaults["UnionType"]["String"] = [2];
const UnionTypeWithAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] = [2];
const UnionTypeWithAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = [2];
const UnionTypeWithAnyToUnionTypeAny: Defaults["UnionType"]["Any"] = [2];
// IntersectionType With Any
const IntersectionTypeWithAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = [2];
const IntersectionTypeWithAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = [2];
const IntersectionTypeWithAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] = [2];
const IntersectionTypeWithAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = [2];
const IntersectionTypeWithAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = [2];
const IntersectionTypeWithAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = [2];
// TypeLiteral With Any
const TypeLiteralWithAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = [2];
const TypeLiteralWithAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = [2];
const TypeLiteralWithAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] = [2];
const TypeLiteralWithAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = [2];
const TypeLiteralWithAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = [2];
const TypeLiteralWithAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = [2];
// ArrayType With Any
const ArrayTypeWithAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = [2];
const ArrayTypeWithAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] = [2];
const ArrayTypeWithAnyToArrayTypeString: Defaults["ArrayType"]["String"] = [2];
const ArrayTypeWithAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] = [2];
const ArrayTypeWithAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = [2];
const ArrayTypeWithAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] = [2];
// FunctionType With Any
const FunctionTypeWithAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = [2];
const FunctionTypeWithAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] = [2];
const FunctionTypeWithAnyToFunctionTypeString: Defaults["FunctionType"]["String"] = [2];
const FunctionTypeWithAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = [2];
const FunctionTypeWithAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = [2];
const FunctionTypeWithAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] = [2];
// ConstructorType With Any
const ConstructorTypeWithAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = [2];
const ConstructorTypeWithAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = [2];
const ConstructorTypeWithAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] = [2];
const ConstructorTypeWithAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = [2];
const ConstructorTypeWithAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = [2];
const ConstructorTypeWithAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = [2];

