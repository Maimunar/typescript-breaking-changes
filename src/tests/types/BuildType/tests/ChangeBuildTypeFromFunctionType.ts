import { Defaults } from "../../defaults";

/*
 * Change Build Type from FunctionType  
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Change Build Type From FunctionType - Literal

// Initial Value
const FunctionTypeWithLiteral: Defaults["FunctionType"]["Literal"] = (param) => { }
// Changes
// ParenthesizedType With Literal
const ParenthesizedTypeWithLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const ParenthesizedTypeWithLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = (param) => { };
const ParenthesizedTypeWithLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = (param) => { };
const ParenthesizedTypeWithLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = (param) => { };
const ParenthesizedTypeWithLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const ParenthesizedTypeWithLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = (param) => { };
// TypeReferenceBuiltin With Literal
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const TypeReferenceBuiltinWithLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };
// TypeReferencePredefined With Literal
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = (param) => { };
// UnionType With Literal
const UnionTypeWithLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = (param) => { };
const UnionTypeWithLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] = (param) => { };
const UnionTypeWithLiteralToUnionTypeString: Defaults["UnionType"]["String"] = (param) => { };
const UnionTypeWithLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] = (param) => { };
const UnionTypeWithLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = (param) => { };
const UnionTypeWithLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] = (param) => { };
// IntersectionType With Literal
const IntersectionTypeWithLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = (param) => { };
const IntersectionTypeWithLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = (param) => { };
const IntersectionTypeWithLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] = (param) => { };
const IntersectionTypeWithLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = (param) => { };
const IntersectionTypeWithLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = (param) => { };
const IntersectionTypeWithLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = (param) => { };
// TypeLiteral With Literal
const TypeLiteralWithLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = (param) => { };
const TypeLiteralWithLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = (param) => { };
const TypeLiteralWithLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] = (param) => { };
const TypeLiteralWithLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = (param) => { };
const TypeLiteralWithLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const TypeLiteralWithLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = (param) => { };
// TupleType With Literal
const TupleTypeWithLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = (param) => { };
const TupleTypeWithLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] = (param) => { };
const TupleTypeWithLiteralToTupleTypeString: Defaults["TupleType"]["String"] = (param) => { };
const TupleTypeWithLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] = (param) => { };
const TupleTypeWithLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = (param) => { };
const TupleTypeWithLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] = (param) => { };
// ArrayType With Literal
const ArrayTypeWithLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = (param) => { };
const ArrayTypeWithLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] = (param) => { };
const ArrayTypeWithLiteralToArrayTypeString: Defaults["ArrayType"]["String"] = (param) => { };
const ArrayTypeWithLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] = (param) => { };
const ArrayTypeWithLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = (param) => { };
const ArrayTypeWithLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] = (param) => { };
// ConstructorType With Literal
const ConstructorTypeWithLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = (param) => { };
const ConstructorTypeWithLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = (param) => { };
const ConstructorTypeWithLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] = (param) => { };
const ConstructorTypeWithLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = (param) => { };
const ConstructorTypeWithLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = (param) => { };
const ConstructorTypeWithLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = (param) => { };

// Change Build Type From FunctionType - Object

// Initial Value
const FunctionTypeWithObject: Defaults["FunctionType"]["Object"] = (param) => { }
// Changes
// ParenthesizedType With Object
const ParenthesizedTypeWithObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const ParenthesizedTypeWithObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = (param) => { };
const ParenthesizedTypeWithObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = (param) => { };
const ParenthesizedTypeWithObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = (param) => { };
const ParenthesizedTypeWithObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const ParenthesizedTypeWithObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = (param) => { };
// TypeReferenceBuiltin With Object
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const TypeReferenceBuiltinWithObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };
// TypeReferencePredefined With Object
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = (param) => { };
// UnionType With Object
const UnionTypeWithObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = (param) => { };
const UnionTypeWithObjectToUnionTypeObject: Defaults["UnionType"]["Object"] = (param) => { };
const UnionTypeWithObjectToUnionTypeString: Defaults["UnionType"]["String"] = (param) => { };
const UnionTypeWithObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] = (param) => { };
const UnionTypeWithObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = (param) => { };
const UnionTypeWithObjectToUnionTypeAny: Defaults["UnionType"]["Any"] = (param) => { };
// IntersectionType With Object
const IntersectionTypeWithObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = (param) => { };
const IntersectionTypeWithObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = (param) => { };
const IntersectionTypeWithObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] = (param) => { };
const IntersectionTypeWithObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = (param) => { };
const IntersectionTypeWithObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = (param) => { };
const IntersectionTypeWithObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = (param) => { };
// TypeLiteral With Object
const TypeLiteralWithObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = (param) => { };
const TypeLiteralWithObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = (param) => { };
const TypeLiteralWithObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] = (param) => { };
const TypeLiteralWithObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = (param) => { };
const TypeLiteralWithObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const TypeLiteralWithObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = (param) => { };
// TupleType With Object
const TupleTypeWithObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = (param) => { };
const TupleTypeWithObjectToTupleTypeObject: Defaults["TupleType"]["Object"] = (param) => { };
const TupleTypeWithObjectToTupleTypeString: Defaults["TupleType"]["String"] = (param) => { };
const TupleTypeWithObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] = (param) => { };
const TupleTypeWithObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = (param) => { };
const TupleTypeWithObjectToTupleTypeAny: Defaults["TupleType"]["Any"] = (param) => { };
// ArrayType With Object
const ArrayTypeWithObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = (param) => { };
const ArrayTypeWithObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] = (param) => { };
const ArrayTypeWithObjectToArrayTypeString: Defaults["ArrayType"]["String"] = (param) => { };
const ArrayTypeWithObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] = (param) => { };
const ArrayTypeWithObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = (param) => { };
const ArrayTypeWithObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] = (param) => { };
// ConstructorType With Object
const ConstructorTypeWithObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = (param) => { };
const ConstructorTypeWithObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = (param) => { };
const ConstructorTypeWithObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] = (param) => { };
const ConstructorTypeWithObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = (param) => { };
const ConstructorTypeWithObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = (param) => { };
const ConstructorTypeWithObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = (param) => { };

// Change Build Type From FunctionType - String

// Initial Value
const FunctionTypeWithString: Defaults["FunctionType"]["String"] = (param) => { }
// Changes
// ParenthesizedType With String
const ParenthesizedTypeWithStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const ParenthesizedTypeWithStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = (param) => { };
const ParenthesizedTypeWithStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = (param) => { };
const ParenthesizedTypeWithStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = (param) => { };
const ParenthesizedTypeWithStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const ParenthesizedTypeWithStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = (param) => { };
// TypeReferenceBuiltin With String
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const TypeReferenceBuiltinWithStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };
// TypeReferencePredefined With String
const TypeReferencePredefinedWithStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const TypeReferencePredefinedWithStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const TypeReferencePredefinedWithStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const TypeReferencePredefinedWithStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const TypeReferencePredefinedWithStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const TypeReferencePredefinedWithStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = (param) => { };
// UnionType With String
const UnionTypeWithStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = (param) => { };
const UnionTypeWithStringToUnionTypeObject: Defaults["UnionType"]["Object"] = (param) => { };
const UnionTypeWithStringToUnionTypeString: Defaults["UnionType"]["String"] = (param) => { };
const UnionTypeWithStringToUnionTypeNumber: Defaults["UnionType"]["Number"] = (param) => { };
const UnionTypeWithStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = (param) => { };
const UnionTypeWithStringToUnionTypeAny: Defaults["UnionType"]["Any"] = (param) => { };
// IntersectionType With String
const IntersectionTypeWithStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = (param) => { };
const IntersectionTypeWithStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = (param) => { };
const IntersectionTypeWithStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] = (param) => { };
const IntersectionTypeWithStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = (param) => { };
const IntersectionTypeWithStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = (param) => { };
const IntersectionTypeWithStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = (param) => { };
// TypeLiteral With String
const TypeLiteralWithStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = (param) => { };
const TypeLiteralWithStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = (param) => { };
const TypeLiteralWithStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] = (param) => { };
const TypeLiteralWithStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = (param) => { };
const TypeLiteralWithStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const TypeLiteralWithStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = (param) => { };
// TupleType With String
const TupleTypeWithStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = (param) => { };
const TupleTypeWithStringToTupleTypeObject: Defaults["TupleType"]["Object"] = (param) => { };
const TupleTypeWithStringToTupleTypeString: Defaults["TupleType"]["String"] = (param) => { };
const TupleTypeWithStringToTupleTypeNumber: Defaults["TupleType"]["Number"] = (param) => { };
const TupleTypeWithStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = (param) => { };
const TupleTypeWithStringToTupleTypeAny: Defaults["TupleType"]["Any"] = (param) => { };
// ArrayType With String
const ArrayTypeWithStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = (param) => { };
const ArrayTypeWithStringToArrayTypeObject: Defaults["ArrayType"]["Object"] = (param) => { };
const ArrayTypeWithStringToArrayTypeString: Defaults["ArrayType"]["String"] = (param) => { };
const ArrayTypeWithStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] = (param) => { };
const ArrayTypeWithStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = (param) => { };
const ArrayTypeWithStringToArrayTypeAny: Defaults["ArrayType"]["Any"] = (param) => { };
// ConstructorType With String
const ConstructorTypeWithStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = (param) => { };
const ConstructorTypeWithStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = (param) => { };
const ConstructorTypeWithStringToConstructorTypeString: Defaults["ConstructorType"]["String"] = (param) => { };
const ConstructorTypeWithStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = (param) => { };
const ConstructorTypeWithStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = (param) => { };
const ConstructorTypeWithStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = (param) => { };

// Change Build Type From FunctionType - Number

// Initial Value
const FunctionTypeWithNumber: Defaults["FunctionType"]["Number"] = (param) => { }
// Changes
// ParenthesizedType With Number
const ParenthesizedTypeWithNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const ParenthesizedTypeWithNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = (param) => { };
const ParenthesizedTypeWithNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = (param) => { };
const ParenthesizedTypeWithNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = (param) => { };
const ParenthesizedTypeWithNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const ParenthesizedTypeWithNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = (param) => { };
// TypeReferenceBuiltin With Number
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const TypeReferenceBuiltinWithNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };
// TypeReferencePredefined With Number
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = (param) => { };
// UnionType With Number
const UnionTypeWithNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = (param) => { };
const UnionTypeWithNumberToUnionTypeObject: Defaults["UnionType"]["Object"] = (param) => { };
const UnionTypeWithNumberToUnionTypeString: Defaults["UnionType"]["String"] = (param) => { };
const UnionTypeWithNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] = (param) => { };
const UnionTypeWithNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = (param) => { };
const UnionTypeWithNumberToUnionTypeAny: Defaults["UnionType"]["Any"] = (param) => { };
// IntersectionType With Number
const IntersectionTypeWithNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = (param) => { };
const IntersectionTypeWithNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = (param) => { };
const IntersectionTypeWithNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] = (param) => { };
const IntersectionTypeWithNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = (param) => { };
const IntersectionTypeWithNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = (param) => { };
const IntersectionTypeWithNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = (param) => { };
// TypeLiteral With Number
const TypeLiteralWithNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = (param) => { };
const TypeLiteralWithNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = (param) => { };
const TypeLiteralWithNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] = (param) => { };
const TypeLiteralWithNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = (param) => { };
const TypeLiteralWithNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const TypeLiteralWithNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = (param) => { };
// TupleType With Number
const TupleTypeWithNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = (param) => { };
const TupleTypeWithNumberToTupleTypeObject: Defaults["TupleType"]["Object"] = (param) => { };
const TupleTypeWithNumberToTupleTypeString: Defaults["TupleType"]["String"] = (param) => { };
const TupleTypeWithNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] = (param) => { };
const TupleTypeWithNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = (param) => { };
const TupleTypeWithNumberToTupleTypeAny: Defaults["TupleType"]["Any"] = (param) => { };
// ArrayType With Number
const ArrayTypeWithNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = (param) => { };
const ArrayTypeWithNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] = (param) => { };
const ArrayTypeWithNumberToArrayTypeString: Defaults["ArrayType"]["String"] = (param) => { };
const ArrayTypeWithNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] = (param) => { };
const ArrayTypeWithNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = (param) => { };
const ArrayTypeWithNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] = (param) => { };
// ConstructorType With Number
const ConstructorTypeWithNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = (param) => { };
const ConstructorTypeWithNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = (param) => { };
const ConstructorTypeWithNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] = (param) => { };
const ConstructorTypeWithNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = (param) => { };
const ConstructorTypeWithNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = (param) => { };
const ConstructorTypeWithNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = (param) => { };

// Change Build Type From FunctionType - Boolean

// Initial Value
const FunctionTypeWithBoolean: Defaults["FunctionType"]["Boolean"] = (param) => { }
// Changes
// ParenthesizedType With Boolean
const ParenthesizedTypeWithBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const ParenthesizedTypeWithBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = (param) => { };
const ParenthesizedTypeWithBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = (param) => { };
const ParenthesizedTypeWithBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = (param) => { };
const ParenthesizedTypeWithBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const ParenthesizedTypeWithBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = (param) => { };
// TypeReferenceBuiltin With Boolean
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const TypeReferenceBuiltinWithBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };
// TypeReferencePredefined With Boolean
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = (param) => { };
// UnionType With Boolean
const UnionTypeWithBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = (param) => { };
const UnionTypeWithBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] = (param) => { };
const UnionTypeWithBooleanToUnionTypeString: Defaults["UnionType"]["String"] = (param) => { };
const UnionTypeWithBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] = (param) => { };
const UnionTypeWithBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = (param) => { };
const UnionTypeWithBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] = (param) => { };
// IntersectionType With Boolean
const IntersectionTypeWithBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = (param) => { };
const IntersectionTypeWithBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = (param) => { };
const IntersectionTypeWithBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] = (param) => { };
const IntersectionTypeWithBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = (param) => { };
const IntersectionTypeWithBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = (param) => { };
const IntersectionTypeWithBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = (param) => { };
// TypeLiteral With Boolean
const TypeLiteralWithBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = (param) => { };
const TypeLiteralWithBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = (param) => { };
const TypeLiteralWithBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] = (param) => { };
const TypeLiteralWithBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = (param) => { };
const TypeLiteralWithBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const TypeLiteralWithBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = (param) => { };
// TupleType With Boolean
const TupleTypeWithBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = (param) => { };
const TupleTypeWithBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] = (param) => { };
const TupleTypeWithBooleanToTupleTypeString: Defaults["TupleType"]["String"] = (param) => { };
const TupleTypeWithBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] = (param) => { };
const TupleTypeWithBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = (param) => { };
const TupleTypeWithBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] = (param) => { };
// ArrayType With Boolean
const ArrayTypeWithBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = (param) => { };
const ArrayTypeWithBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] = (param) => { };
const ArrayTypeWithBooleanToArrayTypeString: Defaults["ArrayType"]["String"] = (param) => { };
const ArrayTypeWithBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] = (param) => { };
const ArrayTypeWithBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = (param) => { };
const ArrayTypeWithBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] = (param) => { };
// ConstructorType With Boolean
const ConstructorTypeWithBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = (param) => { };
const ConstructorTypeWithBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = (param) => { };
const ConstructorTypeWithBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] = (param) => { };
const ConstructorTypeWithBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = (param) => { };
const ConstructorTypeWithBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = (param) => { };
const ConstructorTypeWithBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = (param) => { };

// Change Build Type From FunctionType - Any

// Initial Value
const FunctionTypeWithAny: Defaults["FunctionType"]["Any"] = (param) => { }
// Changes
// ParenthesizedType With Any
const ParenthesizedTypeWithAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const ParenthesizedTypeWithAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = (param) => { };
const ParenthesizedTypeWithAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = (param) => { };
const ParenthesizedTypeWithAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = (param) => { };
const ParenthesizedTypeWithAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const ParenthesizedTypeWithAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = (param) => { };
// TypeReferenceBuiltin With Any
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const TypeReferenceBuiltinWithAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };
// TypeReferencePredefined With Any
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = (param) => { };
// UnionType With Any
const UnionTypeWithAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = (param) => { };
const UnionTypeWithAnyToUnionTypeObject: Defaults["UnionType"]["Object"] = (param) => { };
const UnionTypeWithAnyToUnionTypeString: Defaults["UnionType"]["String"] = (param) => { };
const UnionTypeWithAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] = (param) => { };
const UnionTypeWithAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = (param) => { };
const UnionTypeWithAnyToUnionTypeAny: Defaults["UnionType"]["Any"] = (param) => { };
// IntersectionType With Any
const IntersectionTypeWithAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = (param) => { };
const IntersectionTypeWithAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = (param) => { };
const IntersectionTypeWithAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] = (param) => { };
const IntersectionTypeWithAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = (param) => { };
const IntersectionTypeWithAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = (param) => { };
const IntersectionTypeWithAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = (param) => { };
// TypeLiteral With Any
const TypeLiteralWithAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = (param) => { };
const TypeLiteralWithAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = (param) => { };
const TypeLiteralWithAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] = (param) => { };
const TypeLiteralWithAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = (param) => { };
const TypeLiteralWithAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const TypeLiteralWithAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = (param) => { };
// TupleType With Any
const TupleTypeWithAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = (param) => { };
const TupleTypeWithAnyToTupleTypeObject: Defaults["TupleType"]["Object"] = (param) => { };
const TupleTypeWithAnyToTupleTypeString: Defaults["TupleType"]["String"] = (param) => { };
const TupleTypeWithAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] = (param) => { };
const TupleTypeWithAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = (param) => { };
const TupleTypeWithAnyToTupleTypeAny: Defaults["TupleType"]["Any"] = (param) => { };
// ArrayType With Any
const ArrayTypeWithAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = (param) => { };
const ArrayTypeWithAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] = (param) => { };
const ArrayTypeWithAnyToArrayTypeString: Defaults["ArrayType"]["String"] = (param) => { };
const ArrayTypeWithAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] = (param) => { };
const ArrayTypeWithAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = (param) => { };
const ArrayTypeWithAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] = (param) => { };
// ConstructorType With Any
const ConstructorTypeWithAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = (param) => { };
const ConstructorTypeWithAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = (param) => { };
const ConstructorTypeWithAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] = (param) => { };
const ConstructorTypeWithAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = (param) => { };
const ConstructorTypeWithAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = (param) => { };
const ConstructorTypeWithAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = (param) => { };

