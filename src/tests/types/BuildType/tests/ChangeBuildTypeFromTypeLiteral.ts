import { Defaults } from "../../defaults";

/*
 * Change Build Type from TypeLiteral  
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Change Build Type From TypeLiteral - Literal

// Initial Value
const TypeLiteralWithLiteral: Defaults["TypeLiteral"]["Literal"] = {"key":1}
// Changes
// ParenthesizedType With Literal
const ParenthesizedTypeWithLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = {"key":1};
const ParenthesizedTypeWithLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = {"key":1};
const ParenthesizedTypeWithLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = {"key":1};
const ParenthesizedTypeWithLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = {"key":1};
const ParenthesizedTypeWithLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = {"key":1};
const ParenthesizedTypeWithLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = {"key":1};
// TypeReferenceBuiltin With Literal
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":1};
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = {"key":1};
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = {"key":1};
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = {"key":1};
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":1};
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = {"key":1};
// TypeReferencePredefined With Literal
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = {"key":1};
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = {"key":1};
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = {"key":1};
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = {"key":1};
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = {"key":1};
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = {"key":1};
// UnionType With Literal
const UnionTypeWithLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = {"key":1};
const UnionTypeWithLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] = {"key":1};
const UnionTypeWithLiteralToUnionTypeString: Defaults["UnionType"]["String"] = {"key":1};
const UnionTypeWithLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] = {"key":1};
const UnionTypeWithLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = {"key":1};
const UnionTypeWithLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] = {"key":1};
// IntersectionType With Literal
const IntersectionTypeWithLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = {"key":1};
const IntersectionTypeWithLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = {"key":1};
const IntersectionTypeWithLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] = {"key":1};
const IntersectionTypeWithLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = {"key":1};
const IntersectionTypeWithLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = {"key":1};
const IntersectionTypeWithLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = {"key":1};
// TupleType With Literal
const TupleTypeWithLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = {"key":1};
const TupleTypeWithLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] = {"key":1};
const TupleTypeWithLiteralToTupleTypeString: Defaults["TupleType"]["String"] = {"key":1};
const TupleTypeWithLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] = {"key":1};
const TupleTypeWithLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = {"key":1};
const TupleTypeWithLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] = {"key":1};
// ArrayType With Literal
const ArrayTypeWithLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = {"key":1};
const ArrayTypeWithLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] = {"key":1};
const ArrayTypeWithLiteralToArrayTypeString: Defaults["ArrayType"]["String"] = {"key":1};
const ArrayTypeWithLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] = {"key":1};
const ArrayTypeWithLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = {"key":1};
const ArrayTypeWithLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] = {"key":1};
// FunctionType With Literal
const FunctionTypeWithLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = {"key":1};
const FunctionTypeWithLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] = {"key":1};
const FunctionTypeWithLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] = {"key":1};
const FunctionTypeWithLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = {"key":1};
const FunctionTypeWithLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = {"key":1};
const FunctionTypeWithLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] = {"key":1};
// ConstructorType With Literal
const ConstructorTypeWithLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = {"key":1};
const ConstructorTypeWithLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = {"key":1};
const ConstructorTypeWithLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] = {"key":1};
const ConstructorTypeWithLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = {"key":1};
const ConstructorTypeWithLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = {"key":1};
const ConstructorTypeWithLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = {"key":1};

// Change Build Type From TypeLiteral - Object

// Initial Value
const TypeLiteralWithObject: Defaults["TypeLiteral"]["Object"] = {"key":{}}
// Changes
// ParenthesizedType With Object
const ParenthesizedTypeWithObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = {"key":{}};
const ParenthesizedTypeWithObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = {"key":{}};
const ParenthesizedTypeWithObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = {"key":{}};
const ParenthesizedTypeWithObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = {"key":{}};
const ParenthesizedTypeWithObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = {"key":{}};
const ParenthesizedTypeWithObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = {"key":{}};
// TypeReferenceBuiltin With Object
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":{}};
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = {"key":{}};
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = {"key":{}};
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = {"key":{}};
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":{}};
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = {"key":{}};
// TypeReferencePredefined With Object
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = {"key":{}};
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = {"key":{}};
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = {"key":{}};
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = {"key":{}};
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = {"key":{}};
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = {"key":{}};
// UnionType With Object
const UnionTypeWithObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = {"key":{}};
const UnionTypeWithObjectToUnionTypeObject: Defaults["UnionType"]["Object"] = {"key":{}};
const UnionTypeWithObjectToUnionTypeString: Defaults["UnionType"]["String"] = {"key":{}};
const UnionTypeWithObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] = {"key":{}};
const UnionTypeWithObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = {"key":{}};
const UnionTypeWithObjectToUnionTypeAny: Defaults["UnionType"]["Any"] = {"key":{}};
// IntersectionType With Object
const IntersectionTypeWithObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = {"key":{}};
const IntersectionTypeWithObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = {"key":{}};
const IntersectionTypeWithObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] = {"key":{}};
const IntersectionTypeWithObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = {"key":{}};
const IntersectionTypeWithObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = {"key":{}};
const IntersectionTypeWithObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = {"key":{}};
// TupleType With Object
const TupleTypeWithObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = {"key":{}};
const TupleTypeWithObjectToTupleTypeObject: Defaults["TupleType"]["Object"] = {"key":{}};
const TupleTypeWithObjectToTupleTypeString: Defaults["TupleType"]["String"] = {"key":{}};
const TupleTypeWithObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] = {"key":{}};
const TupleTypeWithObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = {"key":{}};
const TupleTypeWithObjectToTupleTypeAny: Defaults["TupleType"]["Any"] = {"key":{}};
// ArrayType With Object
const ArrayTypeWithObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = {"key":{}};
const ArrayTypeWithObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] = {"key":{}};
const ArrayTypeWithObjectToArrayTypeString: Defaults["ArrayType"]["String"] = {"key":{}};
const ArrayTypeWithObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] = {"key":{}};
const ArrayTypeWithObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = {"key":{}};
const ArrayTypeWithObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] = {"key":{}};
// FunctionType With Object
const FunctionTypeWithObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = {"key":{}};
const FunctionTypeWithObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] = {"key":{}};
const FunctionTypeWithObjectToFunctionTypeString: Defaults["FunctionType"]["String"] = {"key":{}};
const FunctionTypeWithObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = {"key":{}};
const FunctionTypeWithObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = {"key":{}};
const FunctionTypeWithObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] = {"key":{}};
// ConstructorType With Object
const ConstructorTypeWithObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = {"key":{}};
const ConstructorTypeWithObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = {"key":{}};
const ConstructorTypeWithObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] = {"key":{}};
const ConstructorTypeWithObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = {"key":{}};
const ConstructorTypeWithObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = {"key":{}};
const ConstructorTypeWithObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = {"key":{}};

// Change Build Type From TypeLiteral - String

// Initial Value
const TypeLiteralWithString: Defaults["TypeLiteral"]["String"] = {"key":"two"}
// Changes
// ParenthesizedType With String
const ParenthesizedTypeWithStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = {"key":"two"};
const ParenthesizedTypeWithStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = {"key":"two"};
const ParenthesizedTypeWithStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = {"key":"two"};
const ParenthesizedTypeWithStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = {"key":"two"};
const ParenthesizedTypeWithStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = {"key":"two"};
const ParenthesizedTypeWithStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = {"key":"two"};
// TypeReferenceBuiltin With String
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":"two"};
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = {"key":"two"};
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = {"key":"two"};
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = {"key":"two"};
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":"two"};
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = {"key":"two"};
// TypeReferencePredefined With String
const TypeReferencePredefinedWithStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = {"key":"two"};
const TypeReferencePredefinedWithStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = {"key":"two"};
const TypeReferencePredefinedWithStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = {"key":"two"};
const TypeReferencePredefinedWithStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = {"key":"two"};
const TypeReferencePredefinedWithStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = {"key":"two"};
const TypeReferencePredefinedWithStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = {"key":"two"};
// UnionType With String
const UnionTypeWithStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = {"key":"two"};
const UnionTypeWithStringToUnionTypeObject: Defaults["UnionType"]["Object"] = {"key":"two"};
const UnionTypeWithStringToUnionTypeString: Defaults["UnionType"]["String"] = {"key":"two"};
const UnionTypeWithStringToUnionTypeNumber: Defaults["UnionType"]["Number"] = {"key":"two"};
const UnionTypeWithStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = {"key":"two"};
const UnionTypeWithStringToUnionTypeAny: Defaults["UnionType"]["Any"] = {"key":"two"};
// IntersectionType With String
const IntersectionTypeWithStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = {"key":"two"};
const IntersectionTypeWithStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = {"key":"two"};
const IntersectionTypeWithStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] = {"key":"two"};
const IntersectionTypeWithStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = {"key":"two"};
const IntersectionTypeWithStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = {"key":"two"};
const IntersectionTypeWithStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = {"key":"two"};
// TupleType With String
const TupleTypeWithStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = {"key":"two"};
const TupleTypeWithStringToTupleTypeObject: Defaults["TupleType"]["Object"] = {"key":"two"};
const TupleTypeWithStringToTupleTypeString: Defaults["TupleType"]["String"] = {"key":"two"};
const TupleTypeWithStringToTupleTypeNumber: Defaults["TupleType"]["Number"] = {"key":"two"};
const TupleTypeWithStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = {"key":"two"};
const TupleTypeWithStringToTupleTypeAny: Defaults["TupleType"]["Any"] = {"key":"two"};
// ArrayType With String
const ArrayTypeWithStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = {"key":"two"};
const ArrayTypeWithStringToArrayTypeObject: Defaults["ArrayType"]["Object"] = {"key":"two"};
const ArrayTypeWithStringToArrayTypeString: Defaults["ArrayType"]["String"] = {"key":"two"};
const ArrayTypeWithStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] = {"key":"two"};
const ArrayTypeWithStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = {"key":"two"};
const ArrayTypeWithStringToArrayTypeAny: Defaults["ArrayType"]["Any"] = {"key":"two"};
// FunctionType With String
const FunctionTypeWithStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = {"key":"two"};
const FunctionTypeWithStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] = {"key":"two"};
const FunctionTypeWithStringToFunctionTypeString: Defaults["FunctionType"]["String"] = {"key":"two"};
const FunctionTypeWithStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = {"key":"two"};
const FunctionTypeWithStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = {"key":"two"};
const FunctionTypeWithStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] = {"key":"two"};
// ConstructorType With String
const ConstructorTypeWithStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = {"key":"two"};
const ConstructorTypeWithStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = {"key":"two"};
const ConstructorTypeWithStringToConstructorTypeString: Defaults["ConstructorType"]["String"] = {"key":"two"};
const ConstructorTypeWithStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = {"key":"two"};
const ConstructorTypeWithStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = {"key":"two"};
const ConstructorTypeWithStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = {"key":"two"};

// Change Build Type From TypeLiteral - Number

// Initial Value
const TypeLiteralWithNumber: Defaults["TypeLiteral"]["Number"] = {"key":2}
// Changes
// ParenthesizedType With Number
const ParenthesizedTypeWithNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = {"key":2};
const ParenthesizedTypeWithNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = {"key":2};
const ParenthesizedTypeWithNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = {"key":2};
const ParenthesizedTypeWithNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = {"key":2};
const ParenthesizedTypeWithNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = {"key":2};
const ParenthesizedTypeWithNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = {"key":2};
// TypeReferenceBuiltin With Number
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":2};
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = {"key":2};
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = {"key":2};
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = {"key":2};
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":2};
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = {"key":2};
// TypeReferencePredefined With Number
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = {"key":2};
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = {"key":2};
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = {"key":2};
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = {"key":2};
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = {"key":2};
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = {"key":2};
// UnionType With Number
const UnionTypeWithNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = {"key":2};
const UnionTypeWithNumberToUnionTypeObject: Defaults["UnionType"]["Object"] = {"key":2};
const UnionTypeWithNumberToUnionTypeString: Defaults["UnionType"]["String"] = {"key":2};
const UnionTypeWithNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] = {"key":2};
const UnionTypeWithNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = {"key":2};
const UnionTypeWithNumberToUnionTypeAny: Defaults["UnionType"]["Any"] = {"key":2};
// IntersectionType With Number
const IntersectionTypeWithNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = {"key":2};
const IntersectionTypeWithNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = {"key":2};
const IntersectionTypeWithNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] = {"key":2};
const IntersectionTypeWithNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = {"key":2};
const IntersectionTypeWithNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = {"key":2};
const IntersectionTypeWithNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = {"key":2};
// TupleType With Number
const TupleTypeWithNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = {"key":2};
const TupleTypeWithNumberToTupleTypeObject: Defaults["TupleType"]["Object"] = {"key":2};
const TupleTypeWithNumberToTupleTypeString: Defaults["TupleType"]["String"] = {"key":2};
const TupleTypeWithNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] = {"key":2};
const TupleTypeWithNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = {"key":2};
const TupleTypeWithNumberToTupleTypeAny: Defaults["TupleType"]["Any"] = {"key":2};
// ArrayType With Number
const ArrayTypeWithNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = {"key":2};
const ArrayTypeWithNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] = {"key":2};
const ArrayTypeWithNumberToArrayTypeString: Defaults["ArrayType"]["String"] = {"key":2};
const ArrayTypeWithNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] = {"key":2};
const ArrayTypeWithNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = {"key":2};
const ArrayTypeWithNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] = {"key":2};
// FunctionType With Number
const FunctionTypeWithNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = {"key":2};
const FunctionTypeWithNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] = {"key":2};
const FunctionTypeWithNumberToFunctionTypeString: Defaults["FunctionType"]["String"] = {"key":2};
const FunctionTypeWithNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = {"key":2};
const FunctionTypeWithNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = {"key":2};
const FunctionTypeWithNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] = {"key":2};
// ConstructorType With Number
const ConstructorTypeWithNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = {"key":2};
const ConstructorTypeWithNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = {"key":2};
const ConstructorTypeWithNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] = {"key":2};
const ConstructorTypeWithNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = {"key":2};
const ConstructorTypeWithNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = {"key":2};
const ConstructorTypeWithNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = {"key":2};

// Change Build Type From TypeLiteral - Boolean

// Initial Value
const TypeLiteralWithBoolean: Defaults["TypeLiteral"]["Boolean"] = {"key":true}
// Changes
// ParenthesizedType With Boolean
const ParenthesizedTypeWithBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = {"key":true};
const ParenthesizedTypeWithBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = {"key":true};
const ParenthesizedTypeWithBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = {"key":true};
const ParenthesizedTypeWithBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = {"key":true};
const ParenthesizedTypeWithBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = {"key":true};
const ParenthesizedTypeWithBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = {"key":true};
// TypeReferenceBuiltin With Boolean
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":true};
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = {"key":true};
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = {"key":true};
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = {"key":true};
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":true};
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = {"key":true};
// TypeReferencePredefined With Boolean
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = {"key":true};
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = {"key":true};
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = {"key":true};
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = {"key":true};
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = {"key":true};
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = {"key":true};
// UnionType With Boolean
const UnionTypeWithBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = {"key":true};
const UnionTypeWithBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] = {"key":true};
const UnionTypeWithBooleanToUnionTypeString: Defaults["UnionType"]["String"] = {"key":true};
const UnionTypeWithBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] = {"key":true};
const UnionTypeWithBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = {"key":true};
const UnionTypeWithBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] = {"key":true};
// IntersectionType With Boolean
const IntersectionTypeWithBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = {"key":true};
const IntersectionTypeWithBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = {"key":true};
const IntersectionTypeWithBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] = {"key":true};
const IntersectionTypeWithBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = {"key":true};
const IntersectionTypeWithBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = {"key":true};
const IntersectionTypeWithBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = {"key":true};
// TupleType With Boolean
const TupleTypeWithBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = {"key":true};
const TupleTypeWithBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] = {"key":true};
const TupleTypeWithBooleanToTupleTypeString: Defaults["TupleType"]["String"] = {"key":true};
const TupleTypeWithBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] = {"key":true};
const TupleTypeWithBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = {"key":true};
const TupleTypeWithBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] = {"key":true};
// ArrayType With Boolean
const ArrayTypeWithBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = {"key":true};
const ArrayTypeWithBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] = {"key":true};
const ArrayTypeWithBooleanToArrayTypeString: Defaults["ArrayType"]["String"] = {"key":true};
const ArrayTypeWithBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] = {"key":true};
const ArrayTypeWithBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = {"key":true};
const ArrayTypeWithBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] = {"key":true};
// FunctionType With Boolean
const FunctionTypeWithBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = {"key":true};
const FunctionTypeWithBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] = {"key":true};
const FunctionTypeWithBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] = {"key":true};
const FunctionTypeWithBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = {"key":true};
const FunctionTypeWithBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = {"key":true};
const FunctionTypeWithBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] = {"key":true};
// ConstructorType With Boolean
const ConstructorTypeWithBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = {"key":true};
const ConstructorTypeWithBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = {"key":true};
const ConstructorTypeWithBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] = {"key":true};
const ConstructorTypeWithBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = {"key":true};
const ConstructorTypeWithBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = {"key":true};
const ConstructorTypeWithBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = {"key":true};

// Change Build Type From TypeLiteral - Any

// Initial Value
const TypeLiteralWithAny: Defaults["TypeLiteral"]["Any"] = {"key":2}
// Changes
// ParenthesizedType With Any
const ParenthesizedTypeWithAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = {"key":2};
const ParenthesizedTypeWithAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = {"key":2};
const ParenthesizedTypeWithAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = {"key":2};
const ParenthesizedTypeWithAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = {"key":2};
const ParenthesizedTypeWithAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = {"key":2};
const ParenthesizedTypeWithAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = {"key":2};
// TypeReferenceBuiltin With Any
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":2};
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = {"key":2};
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = {"key":2};
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = {"key":2};
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":2};
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = {"key":2};
// TypeReferencePredefined With Any
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = {"key":2};
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = {"key":2};
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = {"key":2};
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = {"key":2};
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = {"key":2};
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = {"key":2};
// UnionType With Any
const UnionTypeWithAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = {"key":2};
const UnionTypeWithAnyToUnionTypeObject: Defaults["UnionType"]["Object"] = {"key":2};
const UnionTypeWithAnyToUnionTypeString: Defaults["UnionType"]["String"] = {"key":2};
const UnionTypeWithAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] = {"key":2};
const UnionTypeWithAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = {"key":2};
const UnionTypeWithAnyToUnionTypeAny: Defaults["UnionType"]["Any"] = {"key":2};
// IntersectionType With Any
const IntersectionTypeWithAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = {"key":2};
const IntersectionTypeWithAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = {"key":2};
const IntersectionTypeWithAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] = {"key":2};
const IntersectionTypeWithAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = {"key":2};
const IntersectionTypeWithAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = {"key":2};
const IntersectionTypeWithAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = {"key":2};
// TupleType With Any
const TupleTypeWithAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = {"key":2};
const TupleTypeWithAnyToTupleTypeObject: Defaults["TupleType"]["Object"] = {"key":2};
const TupleTypeWithAnyToTupleTypeString: Defaults["TupleType"]["String"] = {"key":2};
const TupleTypeWithAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] = {"key":2};
const TupleTypeWithAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = {"key":2};
const TupleTypeWithAnyToTupleTypeAny: Defaults["TupleType"]["Any"] = {"key":2};
// ArrayType With Any
const ArrayTypeWithAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = {"key":2};
const ArrayTypeWithAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] = {"key":2};
const ArrayTypeWithAnyToArrayTypeString: Defaults["ArrayType"]["String"] = {"key":2};
const ArrayTypeWithAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] = {"key":2};
const ArrayTypeWithAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = {"key":2};
const ArrayTypeWithAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] = {"key":2};
// FunctionType With Any
const FunctionTypeWithAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = {"key":2};
const FunctionTypeWithAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] = {"key":2};
const FunctionTypeWithAnyToFunctionTypeString: Defaults["FunctionType"]["String"] = {"key":2};
const FunctionTypeWithAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = {"key":2};
const FunctionTypeWithAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = {"key":2};
const FunctionTypeWithAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] = {"key":2};
// ConstructorType With Any
const ConstructorTypeWithAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = {"key":2};
const ConstructorTypeWithAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = {"key":2};
const ConstructorTypeWithAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] = {"key":2};
const ConstructorTypeWithAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = {"key":2};
const ConstructorTypeWithAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = {"key":2};
const ConstructorTypeWithAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = {"key":2};

