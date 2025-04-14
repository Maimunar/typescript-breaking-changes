import { Defaults } from "../../defaults";

/*
 * Change Build Type from ArrayType  
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Change Build Type From ArrayType - Literal

// Initial Value
const ArrayTypeWithLiteral: Defaults["ArrayType"]["Literal"] = [1,1]
// Changes
// ParenthesizedType With Literal
const ParenthesizedTypeWithLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = [1,1];
const ParenthesizedTypeWithLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = [1,1];
const ParenthesizedTypeWithLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = [1,1];
const ParenthesizedTypeWithLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = [1,1];
const ParenthesizedTypeWithLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = [1,1];
const ParenthesizedTypeWithLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = [1,1];
// TypeReferenceBuiltin With Literal
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = [1,1];
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = [1,1];
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = [1,1];
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = [1,1];
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = [1,1];
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = [1,1];
// TypeReferencePredefined With Literal
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = [1,1];
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = [1,1];
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = [1,1];
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = [1,1];
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = [1,1];
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = [1,1];
// UnionType With Literal
const UnionTypeWithLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = [1,1];
const UnionTypeWithLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] = [1,1];
const UnionTypeWithLiteralToUnionTypeString: Defaults["UnionType"]["String"] = [1,1];
const UnionTypeWithLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] = [1,1];
const UnionTypeWithLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = [1,1];
const UnionTypeWithLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] = [1,1];
// IntersectionType With Literal
const IntersectionTypeWithLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = [1,1];
const IntersectionTypeWithLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = [1,1];
const IntersectionTypeWithLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] = [1,1];
const IntersectionTypeWithLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = [1,1];
const IntersectionTypeWithLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = [1,1];
const IntersectionTypeWithLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = [1,1];
// TypeLiteral With Literal
const TypeLiteralWithLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = [1,1];
const TypeLiteralWithLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = [1,1];
const TypeLiteralWithLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] = [1,1];
const TypeLiteralWithLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = [1,1];
const TypeLiteralWithLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = [1,1];
const TypeLiteralWithLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = [1,1];
// TupleType With Literal
const TupleTypeWithLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = [1,1];
const TupleTypeWithLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] = [1,1];
const TupleTypeWithLiteralToTupleTypeString: Defaults["TupleType"]["String"] = [1,1];
const TupleTypeWithLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] = [1,1];
const TupleTypeWithLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = [1,1];
const TupleTypeWithLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] = [1,1];
// FunctionType With Literal
const FunctionTypeWithLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = [1,1];
const FunctionTypeWithLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] = [1,1];
const FunctionTypeWithLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] = [1,1];
const FunctionTypeWithLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = [1,1];
const FunctionTypeWithLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = [1,1];
const FunctionTypeWithLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] = [1,1];
// ConstructorType With Literal
const ConstructorTypeWithLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = [1,1];
const ConstructorTypeWithLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = [1,1];
const ConstructorTypeWithLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] = [1,1];
const ConstructorTypeWithLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = [1,1];
const ConstructorTypeWithLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = [1,1];
const ConstructorTypeWithLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = [1,1];

// Change Build Type From ArrayType - Object

// Initial Value
const ArrayTypeWithObject: Defaults["ArrayType"]["Object"] = [{},{}]
// Changes
// ParenthesizedType With Object
const ParenthesizedTypeWithObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = [{},{}];
const ParenthesizedTypeWithObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = [{},{}];
const ParenthesizedTypeWithObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = [{},{}];
const ParenthesizedTypeWithObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = [{},{}];
const ParenthesizedTypeWithObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = [{},{}];
const ParenthesizedTypeWithObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = [{},{}];
// TypeReferenceBuiltin With Object
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = [{},{}];
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = [{},{}];
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = [{},{}];
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = [{},{}];
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = [{},{}];
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = [{},{}];
// TypeReferencePredefined With Object
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = [{},{}];
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = [{},{}];
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = [{},{}];
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = [{},{}];
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = [{},{}];
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = [{},{}];
// UnionType With Object
const UnionTypeWithObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = [{},{}];
const UnionTypeWithObjectToUnionTypeObject: Defaults["UnionType"]["Object"] = [{},{}];
const UnionTypeWithObjectToUnionTypeString: Defaults["UnionType"]["String"] = [{},{}];
const UnionTypeWithObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] = [{},{}];
const UnionTypeWithObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = [{},{}];
const UnionTypeWithObjectToUnionTypeAny: Defaults["UnionType"]["Any"] = [{},{}];
// IntersectionType With Object
const IntersectionTypeWithObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = [{},{}];
const IntersectionTypeWithObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = [{},{}];
const IntersectionTypeWithObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] = [{},{}];
const IntersectionTypeWithObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = [{},{}];
const IntersectionTypeWithObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = [{},{}];
const IntersectionTypeWithObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = [{},{}];
// TypeLiteral With Object
const TypeLiteralWithObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = [{},{}];
const TypeLiteralWithObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = [{},{}];
const TypeLiteralWithObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] = [{},{}];
const TypeLiteralWithObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = [{},{}];
const TypeLiteralWithObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = [{},{}];
const TypeLiteralWithObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = [{},{}];
// TupleType With Object
const TupleTypeWithObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = [{},{}];
const TupleTypeWithObjectToTupleTypeObject: Defaults["TupleType"]["Object"] = [{},{}];
const TupleTypeWithObjectToTupleTypeString: Defaults["TupleType"]["String"] = [{},{}];
const TupleTypeWithObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] = [{},{}];
const TupleTypeWithObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = [{},{}];
const TupleTypeWithObjectToTupleTypeAny: Defaults["TupleType"]["Any"] = [{},{}];
// FunctionType With Object
const FunctionTypeWithObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = [{},{}];
const FunctionTypeWithObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] = [{},{}];
const FunctionTypeWithObjectToFunctionTypeString: Defaults["FunctionType"]["String"] = [{},{}];
const FunctionTypeWithObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = [{},{}];
const FunctionTypeWithObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = [{},{}];
const FunctionTypeWithObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] = [{},{}];
// ConstructorType With Object
const ConstructorTypeWithObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = [{},{}];
const ConstructorTypeWithObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = [{},{}];
const ConstructorTypeWithObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] = [{},{}];
const ConstructorTypeWithObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = [{},{}];
const ConstructorTypeWithObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = [{},{}];
const ConstructorTypeWithObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = [{},{}];

// Change Build Type From ArrayType - String

// Initial Value
const ArrayTypeWithString: Defaults["ArrayType"]["String"] = ["two","two"]
// Changes
// ParenthesizedType With String
const ParenthesizedTypeWithStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = ["two","two"];
const ParenthesizedTypeWithStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = ["two","two"];
const ParenthesizedTypeWithStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = ["two","two"];
const ParenthesizedTypeWithStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = ["two","two"];
const ParenthesizedTypeWithStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = ["two","two"];
const ParenthesizedTypeWithStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = ["two","two"];
// TypeReferenceBuiltin With String
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = ["two","two"];
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = ["two","two"];
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = ["two","two"];
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = ["two","two"];
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = ["two","two"];
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = ["two","two"];
// TypeReferencePredefined With String
const TypeReferencePredefinedWithStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = ["two","two"];
const TypeReferencePredefinedWithStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = ["two","two"];
const TypeReferencePredefinedWithStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = ["two","two"];
const TypeReferencePredefinedWithStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = ["two","two"];
const TypeReferencePredefinedWithStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = ["two","two"];
const TypeReferencePredefinedWithStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = ["two","two"];
// UnionType With String
const UnionTypeWithStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = ["two","two"];
const UnionTypeWithStringToUnionTypeObject: Defaults["UnionType"]["Object"] = ["two","two"];
const UnionTypeWithStringToUnionTypeString: Defaults["UnionType"]["String"] = ["two","two"];
const UnionTypeWithStringToUnionTypeNumber: Defaults["UnionType"]["Number"] = ["two","two"];
const UnionTypeWithStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = ["two","two"];
const UnionTypeWithStringToUnionTypeAny: Defaults["UnionType"]["Any"] = ["two","two"];
// IntersectionType With String
const IntersectionTypeWithStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = ["two","two"];
const IntersectionTypeWithStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = ["two","two"];
const IntersectionTypeWithStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] = ["two","two"];
const IntersectionTypeWithStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = ["two","two"];
const IntersectionTypeWithStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = ["two","two"];
const IntersectionTypeWithStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = ["two","two"];
// TypeLiteral With String
const TypeLiteralWithStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = ["two","two"];
const TypeLiteralWithStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = ["two","two"];
const TypeLiteralWithStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] = ["two","two"];
const TypeLiteralWithStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = ["two","two"];
const TypeLiteralWithStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = ["two","two"];
const TypeLiteralWithStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = ["two","two"];
// TupleType With String
const TupleTypeWithStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = ["two","two"];
const TupleTypeWithStringToTupleTypeObject: Defaults["TupleType"]["Object"] = ["two","two"];
const TupleTypeWithStringToTupleTypeString: Defaults["TupleType"]["String"] = ["two","two"];
const TupleTypeWithStringToTupleTypeNumber: Defaults["TupleType"]["Number"] = ["two","two"];
const TupleTypeWithStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = ["two","two"];
const TupleTypeWithStringToTupleTypeAny: Defaults["TupleType"]["Any"] = ["two","two"];
// FunctionType With String
const FunctionTypeWithStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = ["two","two"];
const FunctionTypeWithStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] = ["two","two"];
const FunctionTypeWithStringToFunctionTypeString: Defaults["FunctionType"]["String"] = ["two","two"];
const FunctionTypeWithStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = ["two","two"];
const FunctionTypeWithStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = ["two","two"];
const FunctionTypeWithStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] = ["two","two"];
// ConstructorType With String
const ConstructorTypeWithStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = ["two","two"];
const ConstructorTypeWithStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = ["two","two"];
const ConstructorTypeWithStringToConstructorTypeString: Defaults["ConstructorType"]["String"] = ["two","two"];
const ConstructorTypeWithStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = ["two","two"];
const ConstructorTypeWithStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = ["two","two"];
const ConstructorTypeWithStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = ["two","two"];

// Change Build Type From ArrayType - Number

// Initial Value
const ArrayTypeWithNumber: Defaults["ArrayType"]["Number"] = [2,2]
// Changes
// ParenthesizedType With Number
const ParenthesizedTypeWithNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = [2,2];
const ParenthesizedTypeWithNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = [2,2];
const ParenthesizedTypeWithNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = [2,2];
const ParenthesizedTypeWithNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = [2,2];
const ParenthesizedTypeWithNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = [2,2];
const ParenthesizedTypeWithNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = [2,2];
// TypeReferenceBuiltin With Number
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = [2,2];
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = [2,2];
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = [2,2];
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = [2,2];
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = [2,2];
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = [2,2];
// TypeReferencePredefined With Number
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = [2,2];
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = [2,2];
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = [2,2];
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = [2,2];
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = [2,2];
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = [2,2];
// UnionType With Number
const UnionTypeWithNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = [2,2];
const UnionTypeWithNumberToUnionTypeObject: Defaults["UnionType"]["Object"] = [2,2];
const UnionTypeWithNumberToUnionTypeString: Defaults["UnionType"]["String"] = [2,2];
const UnionTypeWithNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] = [2,2];
const UnionTypeWithNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = [2,2];
const UnionTypeWithNumberToUnionTypeAny: Defaults["UnionType"]["Any"] = [2,2];
// IntersectionType With Number
const IntersectionTypeWithNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = [2,2];
const IntersectionTypeWithNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = [2,2];
const IntersectionTypeWithNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] = [2,2];
const IntersectionTypeWithNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = [2,2];
const IntersectionTypeWithNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = [2,2];
const IntersectionTypeWithNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = [2,2];
// TypeLiteral With Number
const TypeLiteralWithNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = [2,2];
const TypeLiteralWithNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = [2,2];
const TypeLiteralWithNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] = [2,2];
const TypeLiteralWithNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = [2,2];
const TypeLiteralWithNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = [2,2];
const TypeLiteralWithNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = [2,2];
// TupleType With Number
const TupleTypeWithNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = [2,2];
const TupleTypeWithNumberToTupleTypeObject: Defaults["TupleType"]["Object"] = [2,2];
const TupleTypeWithNumberToTupleTypeString: Defaults["TupleType"]["String"] = [2,2];
const TupleTypeWithNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] = [2,2];
const TupleTypeWithNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = [2,2];
const TupleTypeWithNumberToTupleTypeAny: Defaults["TupleType"]["Any"] = [2,2];
// FunctionType With Number
const FunctionTypeWithNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = [2,2];
const FunctionTypeWithNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] = [2,2];
const FunctionTypeWithNumberToFunctionTypeString: Defaults["FunctionType"]["String"] = [2,2];
const FunctionTypeWithNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = [2,2];
const FunctionTypeWithNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = [2,2];
const FunctionTypeWithNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] = [2,2];
// ConstructorType With Number
const ConstructorTypeWithNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = [2,2];
const ConstructorTypeWithNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = [2,2];
const ConstructorTypeWithNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] = [2,2];
const ConstructorTypeWithNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = [2,2];
const ConstructorTypeWithNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = [2,2];
const ConstructorTypeWithNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = [2,2];

// Change Build Type From ArrayType - Boolean

// Initial Value
const ArrayTypeWithBoolean: Defaults["ArrayType"]["Boolean"] = [true,true]
// Changes
// ParenthesizedType With Boolean
const ParenthesizedTypeWithBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = [true,true];
const ParenthesizedTypeWithBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = [true,true];
const ParenthesizedTypeWithBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = [true,true];
const ParenthesizedTypeWithBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = [true,true];
const ParenthesizedTypeWithBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = [true,true];
const ParenthesizedTypeWithBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = [true,true];
// TypeReferenceBuiltin With Boolean
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = [true,true];
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = [true,true];
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = [true,true];
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = [true,true];
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = [true,true];
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = [true,true];
// TypeReferencePredefined With Boolean
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = [true,true];
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = [true,true];
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = [true,true];
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = [true,true];
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = [true,true];
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = [true,true];
// UnionType With Boolean
const UnionTypeWithBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = [true,true];
const UnionTypeWithBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] = [true,true];
const UnionTypeWithBooleanToUnionTypeString: Defaults["UnionType"]["String"] = [true,true];
const UnionTypeWithBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] = [true,true];
const UnionTypeWithBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = [true,true];
const UnionTypeWithBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] = [true,true];
// IntersectionType With Boolean
const IntersectionTypeWithBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = [true,true];
const IntersectionTypeWithBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = [true,true];
const IntersectionTypeWithBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] = [true,true];
const IntersectionTypeWithBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = [true,true];
const IntersectionTypeWithBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = [true,true];
const IntersectionTypeWithBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = [true,true];
// TypeLiteral With Boolean
const TypeLiteralWithBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = [true,true];
const TypeLiteralWithBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = [true,true];
const TypeLiteralWithBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] = [true,true];
const TypeLiteralWithBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = [true,true];
const TypeLiteralWithBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = [true,true];
const TypeLiteralWithBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = [true,true];
// TupleType With Boolean
const TupleTypeWithBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = [true,true];
const TupleTypeWithBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] = [true,true];
const TupleTypeWithBooleanToTupleTypeString: Defaults["TupleType"]["String"] = [true,true];
const TupleTypeWithBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] = [true,true];
const TupleTypeWithBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = [true,true];
const TupleTypeWithBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] = [true,true];
// FunctionType With Boolean
const FunctionTypeWithBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = [true,true];
const FunctionTypeWithBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] = [true,true];
const FunctionTypeWithBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] = [true,true];
const FunctionTypeWithBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = [true,true];
const FunctionTypeWithBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = [true,true];
const FunctionTypeWithBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] = [true,true];
// ConstructorType With Boolean
const ConstructorTypeWithBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = [true,true];
const ConstructorTypeWithBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = [true,true];
const ConstructorTypeWithBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] = [true,true];
const ConstructorTypeWithBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = [true,true];
const ConstructorTypeWithBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = [true,true];
const ConstructorTypeWithBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = [true,true];

// Change Build Type From ArrayType - Any

// Initial Value
const ArrayTypeWithAny: Defaults["ArrayType"]["Any"] = [2,2]
// Changes
// ParenthesizedType With Any
const ParenthesizedTypeWithAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = [2,2];
const ParenthesizedTypeWithAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = [2,2];
const ParenthesizedTypeWithAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = [2,2];
const ParenthesizedTypeWithAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = [2,2];
const ParenthesizedTypeWithAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = [2,2];
const ParenthesizedTypeWithAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = [2,2];
// TypeReferenceBuiltin With Any
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = [2,2];
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = [2,2];
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = [2,2];
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = [2,2];
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = [2,2];
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = [2,2];
// TypeReferencePredefined With Any
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = [2,2];
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = [2,2];
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = [2,2];
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = [2,2];
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = [2,2];
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = [2,2];
// UnionType With Any
const UnionTypeWithAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = [2,2];
const UnionTypeWithAnyToUnionTypeObject: Defaults["UnionType"]["Object"] = [2,2];
const UnionTypeWithAnyToUnionTypeString: Defaults["UnionType"]["String"] = [2,2];
const UnionTypeWithAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] = [2,2];
const UnionTypeWithAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = [2,2];
const UnionTypeWithAnyToUnionTypeAny: Defaults["UnionType"]["Any"] = [2,2];
// IntersectionType With Any
const IntersectionTypeWithAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = [2,2];
const IntersectionTypeWithAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = [2,2];
const IntersectionTypeWithAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] = [2,2];
const IntersectionTypeWithAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = [2,2];
const IntersectionTypeWithAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = [2,2];
const IntersectionTypeWithAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = [2,2];
// TypeLiteral With Any
const TypeLiteralWithAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = [2,2];
const TypeLiteralWithAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = [2,2];
const TypeLiteralWithAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] = [2,2];
const TypeLiteralWithAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = [2,2];
const TypeLiteralWithAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = [2,2];
const TypeLiteralWithAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = [2,2];
// TupleType With Any
const TupleTypeWithAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = [2,2];
const TupleTypeWithAnyToTupleTypeObject: Defaults["TupleType"]["Object"] = [2,2];
const TupleTypeWithAnyToTupleTypeString: Defaults["TupleType"]["String"] = [2,2];
const TupleTypeWithAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] = [2,2];
const TupleTypeWithAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = [2,2];
const TupleTypeWithAnyToTupleTypeAny: Defaults["TupleType"]["Any"] = [2,2];
// FunctionType With Any
const FunctionTypeWithAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = [2,2];
const FunctionTypeWithAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] = [2,2];
const FunctionTypeWithAnyToFunctionTypeString: Defaults["FunctionType"]["String"] = [2,2];
const FunctionTypeWithAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = [2,2];
const FunctionTypeWithAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = [2,2];
const FunctionTypeWithAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] = [2,2];
// ConstructorType With Any
const ConstructorTypeWithAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = [2,2];
const ConstructorTypeWithAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = [2,2];
const ConstructorTypeWithAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] = [2,2];
const ConstructorTypeWithAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = [2,2];
const ConstructorTypeWithAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = [2,2];
const ConstructorTypeWithAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = [2,2];

