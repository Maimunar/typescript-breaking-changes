import { Defaults } from "../../defaults";

/*
 * Change Build Type from TypeReferenceBuiltin  
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Change Build Type From TypeReferenceBuiltin - Literal

// Initial Value
const TypeReferenceBuiltinWithLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = promisify(1)
// Changes
// ParenthesizedType With Literal
const ParenthesizedTypeWithLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = promisify(1);
const ParenthesizedTypeWithLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = promisify(1);
const ParenthesizedTypeWithLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = promisify(1);
const ParenthesizedTypeWithLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = promisify(1);
const ParenthesizedTypeWithLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = promisify(1);
const ParenthesizedTypeWithLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = promisify(1);
// TypeReferencePredefined With Literal
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = promisify(1);
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = promisify(1);
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = promisify(1);
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = promisify(1);
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = promisify(1);
const TypeReferencePredefinedWithLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = promisify(1);
// UnionType With Literal
const UnionTypeWithLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = promisify(1);
const UnionTypeWithLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] = promisify(1);
const UnionTypeWithLiteralToUnionTypeString: Defaults["UnionType"]["String"] = promisify(1);
const UnionTypeWithLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] = promisify(1);
const UnionTypeWithLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = promisify(1);
const UnionTypeWithLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] = promisify(1);
// IntersectionType With Literal
const IntersectionTypeWithLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = promisify(1);
const IntersectionTypeWithLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = promisify(1);
const IntersectionTypeWithLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] = promisify(1);
const IntersectionTypeWithLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = promisify(1);
const IntersectionTypeWithLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = promisify(1);
const IntersectionTypeWithLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = promisify(1);
// TypeLiteral With Literal
const TypeLiteralWithLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = promisify(1);
const TypeLiteralWithLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = promisify(1);
const TypeLiteralWithLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] = promisify(1);
const TypeLiteralWithLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = promisify(1);
const TypeLiteralWithLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = promisify(1);
const TypeLiteralWithLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = promisify(1);
// TupleType With Literal
const TupleTypeWithLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = promisify(1);
const TupleTypeWithLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] = promisify(1);
const TupleTypeWithLiteralToTupleTypeString: Defaults["TupleType"]["String"] = promisify(1);
const TupleTypeWithLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] = promisify(1);
const TupleTypeWithLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = promisify(1);
const TupleTypeWithLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] = promisify(1);
// ArrayType With Literal
const ArrayTypeWithLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = promisify(1);
const ArrayTypeWithLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] = promisify(1);
const ArrayTypeWithLiteralToArrayTypeString: Defaults["ArrayType"]["String"] = promisify(1);
const ArrayTypeWithLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] = promisify(1);
const ArrayTypeWithLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = promisify(1);
const ArrayTypeWithLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] = promisify(1);
// FunctionType With Literal
const FunctionTypeWithLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = promisify(1);
const FunctionTypeWithLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] = promisify(1);
const FunctionTypeWithLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] = promisify(1);
const FunctionTypeWithLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = promisify(1);
const FunctionTypeWithLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = promisify(1);
const FunctionTypeWithLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] = promisify(1);
// ConstructorType With Literal
const ConstructorTypeWithLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = promisify(1);
const ConstructorTypeWithLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = promisify(1);
const ConstructorTypeWithLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] = promisify(1);
const ConstructorTypeWithLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = promisify(1);
const ConstructorTypeWithLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = promisify(1);
const ConstructorTypeWithLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = promisify(1);

// Change Build Type From TypeReferenceBuiltin - Object

// Initial Value
const TypeReferenceBuiltinWithObject: Defaults["TypeReferenceBuiltin"]["Object"] = promisify({})
// Changes
// ParenthesizedType With Object
const ParenthesizedTypeWithObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = promisify({});
const ParenthesizedTypeWithObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = promisify({});
const ParenthesizedTypeWithObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = promisify({});
const ParenthesizedTypeWithObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = promisify({});
const ParenthesizedTypeWithObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = promisify({});
const ParenthesizedTypeWithObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = promisify({});
// TypeReferencePredefined With Object
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = promisify({});
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = promisify({});
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = promisify({});
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = promisify({});
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = promisify({});
const TypeReferencePredefinedWithObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = promisify({});
// UnionType With Object
const UnionTypeWithObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = promisify({});
const UnionTypeWithObjectToUnionTypeObject: Defaults["UnionType"]["Object"] = promisify({});
const UnionTypeWithObjectToUnionTypeString: Defaults["UnionType"]["String"] = promisify({});
const UnionTypeWithObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] = promisify({});
const UnionTypeWithObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = promisify({});
const UnionTypeWithObjectToUnionTypeAny: Defaults["UnionType"]["Any"] = promisify({});
// IntersectionType With Object
const IntersectionTypeWithObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = promisify({});
const IntersectionTypeWithObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = promisify({});
const IntersectionTypeWithObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] = promisify({});
const IntersectionTypeWithObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = promisify({});
const IntersectionTypeWithObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = promisify({});
const IntersectionTypeWithObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = promisify({});
// TypeLiteral With Object
const TypeLiteralWithObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = promisify({});
const TypeLiteralWithObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = promisify({});
const TypeLiteralWithObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] = promisify({});
const TypeLiteralWithObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = promisify({});
const TypeLiteralWithObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = promisify({});
const TypeLiteralWithObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = promisify({});
// TupleType With Object
const TupleTypeWithObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = promisify({});
const TupleTypeWithObjectToTupleTypeObject: Defaults["TupleType"]["Object"] = promisify({});
const TupleTypeWithObjectToTupleTypeString: Defaults["TupleType"]["String"] = promisify({});
const TupleTypeWithObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] = promisify({});
const TupleTypeWithObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = promisify({});
const TupleTypeWithObjectToTupleTypeAny: Defaults["TupleType"]["Any"] = promisify({});
// ArrayType With Object
const ArrayTypeWithObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = promisify({});
const ArrayTypeWithObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] = promisify({});
const ArrayTypeWithObjectToArrayTypeString: Defaults["ArrayType"]["String"] = promisify({});
const ArrayTypeWithObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] = promisify({});
const ArrayTypeWithObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = promisify({});
const ArrayTypeWithObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] = promisify({});
// FunctionType With Object
const FunctionTypeWithObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = promisify({});
const FunctionTypeWithObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] = promisify({});
const FunctionTypeWithObjectToFunctionTypeString: Defaults["FunctionType"]["String"] = promisify({});
const FunctionTypeWithObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = promisify({});
const FunctionTypeWithObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = promisify({});
const FunctionTypeWithObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] = promisify({});
// ConstructorType With Object
const ConstructorTypeWithObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = promisify({});
const ConstructorTypeWithObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = promisify({});
const ConstructorTypeWithObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] = promisify({});
const ConstructorTypeWithObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = promisify({});
const ConstructorTypeWithObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = promisify({});
const ConstructorTypeWithObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = promisify({});

// Change Build Type From TypeReferenceBuiltin - String

// Initial Value
const TypeReferenceBuiltinWithString: Defaults["TypeReferenceBuiltin"]["String"] = promisify("two")
// Changes
// ParenthesizedType With String
const ParenthesizedTypeWithStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = promisify("two");
const ParenthesizedTypeWithStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = promisify("two");
const ParenthesizedTypeWithStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = promisify("two");
const ParenthesizedTypeWithStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = promisify("two");
const ParenthesizedTypeWithStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = promisify("two");
const ParenthesizedTypeWithStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = promisify("two");
// TypeReferencePredefined With String
const TypeReferencePredefinedWithStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = promisify("two");
const TypeReferencePredefinedWithStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = promisify("two");
const TypeReferencePredefinedWithStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = promisify("two");
const TypeReferencePredefinedWithStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = promisify("two");
const TypeReferencePredefinedWithStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = promisify("two");
const TypeReferencePredefinedWithStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = promisify("two");
// UnionType With String
const UnionTypeWithStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = promisify("two");
const UnionTypeWithStringToUnionTypeObject: Defaults["UnionType"]["Object"] = promisify("two");
const UnionTypeWithStringToUnionTypeString: Defaults["UnionType"]["String"] = promisify("two");
const UnionTypeWithStringToUnionTypeNumber: Defaults["UnionType"]["Number"] = promisify("two");
const UnionTypeWithStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = promisify("two");
const UnionTypeWithStringToUnionTypeAny: Defaults["UnionType"]["Any"] = promisify("two");
// IntersectionType With String
const IntersectionTypeWithStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = promisify("two");
const IntersectionTypeWithStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = promisify("two");
const IntersectionTypeWithStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] = promisify("two");
const IntersectionTypeWithStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = promisify("two");
const IntersectionTypeWithStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = promisify("two");
const IntersectionTypeWithStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = promisify("two");
// TypeLiteral With String
const TypeLiteralWithStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = promisify("two");
const TypeLiteralWithStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = promisify("two");
const TypeLiteralWithStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] = promisify("two");
const TypeLiteralWithStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = promisify("two");
const TypeLiteralWithStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = promisify("two");
const TypeLiteralWithStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = promisify("two");
// TupleType With String
const TupleTypeWithStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = promisify("two");
const TupleTypeWithStringToTupleTypeObject: Defaults["TupleType"]["Object"] = promisify("two");
const TupleTypeWithStringToTupleTypeString: Defaults["TupleType"]["String"] = promisify("two");
const TupleTypeWithStringToTupleTypeNumber: Defaults["TupleType"]["Number"] = promisify("two");
const TupleTypeWithStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = promisify("two");
const TupleTypeWithStringToTupleTypeAny: Defaults["TupleType"]["Any"] = promisify("two");
// ArrayType With String
const ArrayTypeWithStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = promisify("two");
const ArrayTypeWithStringToArrayTypeObject: Defaults["ArrayType"]["Object"] = promisify("two");
const ArrayTypeWithStringToArrayTypeString: Defaults["ArrayType"]["String"] = promisify("two");
const ArrayTypeWithStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] = promisify("two");
const ArrayTypeWithStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = promisify("two");
const ArrayTypeWithStringToArrayTypeAny: Defaults["ArrayType"]["Any"] = promisify("two");
// FunctionType With String
const FunctionTypeWithStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = promisify("two");
const FunctionTypeWithStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] = promisify("two");
const FunctionTypeWithStringToFunctionTypeString: Defaults["FunctionType"]["String"] = promisify("two");
const FunctionTypeWithStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = promisify("two");
const FunctionTypeWithStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = promisify("two");
const FunctionTypeWithStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] = promisify("two");
// ConstructorType With String
const ConstructorTypeWithStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = promisify("two");
const ConstructorTypeWithStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = promisify("two");
const ConstructorTypeWithStringToConstructorTypeString: Defaults["ConstructorType"]["String"] = promisify("two");
const ConstructorTypeWithStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = promisify("two");
const ConstructorTypeWithStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = promisify("two");
const ConstructorTypeWithStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = promisify("two");

// Change Build Type From TypeReferenceBuiltin - Number

// Initial Value
const TypeReferenceBuiltinWithNumber: Defaults["TypeReferenceBuiltin"]["Number"] = promisify(2)
// Changes
// ParenthesizedType With Number
const ParenthesizedTypeWithNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = promisify(2);
const ParenthesizedTypeWithNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = promisify(2);
const ParenthesizedTypeWithNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = promisify(2);
const ParenthesizedTypeWithNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = promisify(2);
const ParenthesizedTypeWithNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = promisify(2);
const ParenthesizedTypeWithNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = promisify(2);
// TypeReferencePredefined With Number
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = promisify(2);
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = promisify(2);
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = promisify(2);
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = promisify(2);
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = promisify(2);
const TypeReferencePredefinedWithNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = promisify(2);
// UnionType With Number
const UnionTypeWithNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = promisify(2);
const UnionTypeWithNumberToUnionTypeObject: Defaults["UnionType"]["Object"] = promisify(2);
const UnionTypeWithNumberToUnionTypeString: Defaults["UnionType"]["String"] = promisify(2);
const UnionTypeWithNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] = promisify(2);
const UnionTypeWithNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = promisify(2);
const UnionTypeWithNumberToUnionTypeAny: Defaults["UnionType"]["Any"] = promisify(2);
// IntersectionType With Number
const IntersectionTypeWithNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = promisify(2);
const IntersectionTypeWithNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = promisify(2);
const IntersectionTypeWithNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] = promisify(2);
const IntersectionTypeWithNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = promisify(2);
const IntersectionTypeWithNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = promisify(2);
const IntersectionTypeWithNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = promisify(2);
// TypeLiteral With Number
const TypeLiteralWithNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = promisify(2);
const TypeLiteralWithNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = promisify(2);
const TypeLiteralWithNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] = promisify(2);
const TypeLiteralWithNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = promisify(2);
const TypeLiteralWithNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = promisify(2);
const TypeLiteralWithNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = promisify(2);
// TupleType With Number
const TupleTypeWithNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = promisify(2);
const TupleTypeWithNumberToTupleTypeObject: Defaults["TupleType"]["Object"] = promisify(2);
const TupleTypeWithNumberToTupleTypeString: Defaults["TupleType"]["String"] = promisify(2);
const TupleTypeWithNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] = promisify(2);
const TupleTypeWithNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = promisify(2);
const TupleTypeWithNumberToTupleTypeAny: Defaults["TupleType"]["Any"] = promisify(2);
// ArrayType With Number
const ArrayTypeWithNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = promisify(2);
const ArrayTypeWithNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] = promisify(2);
const ArrayTypeWithNumberToArrayTypeString: Defaults["ArrayType"]["String"] = promisify(2);
const ArrayTypeWithNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] = promisify(2);
const ArrayTypeWithNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = promisify(2);
const ArrayTypeWithNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] = promisify(2);
// FunctionType With Number
const FunctionTypeWithNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = promisify(2);
const FunctionTypeWithNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] = promisify(2);
const FunctionTypeWithNumberToFunctionTypeString: Defaults["FunctionType"]["String"] = promisify(2);
const FunctionTypeWithNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = promisify(2);
const FunctionTypeWithNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = promisify(2);
const FunctionTypeWithNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] = promisify(2);
// ConstructorType With Number
const ConstructorTypeWithNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = promisify(2);
const ConstructorTypeWithNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = promisify(2);
const ConstructorTypeWithNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] = promisify(2);
const ConstructorTypeWithNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = promisify(2);
const ConstructorTypeWithNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = promisify(2);
const ConstructorTypeWithNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = promisify(2);

// Change Build Type From TypeReferenceBuiltin - Boolean

// Initial Value
const TypeReferenceBuiltinWithBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true)
// Changes
// ParenthesizedType With Boolean
const ParenthesizedTypeWithBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = promisify(true);
const ParenthesizedTypeWithBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = promisify(true);
const ParenthesizedTypeWithBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = promisify(true);
const ParenthesizedTypeWithBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = promisify(true);
const ParenthesizedTypeWithBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = promisify(true);
const ParenthesizedTypeWithBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = promisify(true);
// TypeReferencePredefined With Boolean
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = promisify(true);
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = promisify(true);
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = promisify(true);
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = promisify(true);
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = promisify(true);
const TypeReferencePredefinedWithBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = promisify(true);
// UnionType With Boolean
const UnionTypeWithBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = promisify(true);
const UnionTypeWithBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] = promisify(true);
const UnionTypeWithBooleanToUnionTypeString: Defaults["UnionType"]["String"] = promisify(true);
const UnionTypeWithBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] = promisify(true);
const UnionTypeWithBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = promisify(true);
const UnionTypeWithBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] = promisify(true);
// IntersectionType With Boolean
const IntersectionTypeWithBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = promisify(true);
const IntersectionTypeWithBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = promisify(true);
const IntersectionTypeWithBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] = promisify(true);
const IntersectionTypeWithBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = promisify(true);
const IntersectionTypeWithBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = promisify(true);
const IntersectionTypeWithBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = promisify(true);
// TypeLiteral With Boolean
const TypeLiteralWithBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = promisify(true);
const TypeLiteralWithBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = promisify(true);
const TypeLiteralWithBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] = promisify(true);
const TypeLiteralWithBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = promisify(true);
const TypeLiteralWithBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = promisify(true);
const TypeLiteralWithBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = promisify(true);
// TupleType With Boolean
const TupleTypeWithBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = promisify(true);
const TupleTypeWithBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] = promisify(true);
const TupleTypeWithBooleanToTupleTypeString: Defaults["TupleType"]["String"] = promisify(true);
const TupleTypeWithBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] = promisify(true);
const TupleTypeWithBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = promisify(true);
const TupleTypeWithBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] = promisify(true);
// ArrayType With Boolean
const ArrayTypeWithBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = promisify(true);
const ArrayTypeWithBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] = promisify(true);
const ArrayTypeWithBooleanToArrayTypeString: Defaults["ArrayType"]["String"] = promisify(true);
const ArrayTypeWithBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] = promisify(true);
const ArrayTypeWithBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = promisify(true);
const ArrayTypeWithBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] = promisify(true);
// FunctionType With Boolean
const FunctionTypeWithBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = promisify(true);
const FunctionTypeWithBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] = promisify(true);
const FunctionTypeWithBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] = promisify(true);
const FunctionTypeWithBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = promisify(true);
const FunctionTypeWithBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = promisify(true);
const FunctionTypeWithBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] = promisify(true);
// ConstructorType With Boolean
const ConstructorTypeWithBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = promisify(true);
const ConstructorTypeWithBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = promisify(true);
const ConstructorTypeWithBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] = promisify(true);
const ConstructorTypeWithBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = promisify(true);
const ConstructorTypeWithBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = promisify(true);
const ConstructorTypeWithBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = promisify(true);

// Change Build Type From TypeReferenceBuiltin - Any

// Initial Value
const TypeReferenceBuiltinWithAny: Defaults["TypeReferenceBuiltin"]["Any"] = promisify(2)
// Changes
// ParenthesizedType With Any
const ParenthesizedTypeWithAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = promisify(2);
const ParenthesizedTypeWithAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = promisify(2);
const ParenthesizedTypeWithAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = promisify(2);
const ParenthesizedTypeWithAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = promisify(2);
const ParenthesizedTypeWithAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = promisify(2);
const ParenthesizedTypeWithAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = promisify(2);
// TypeReferencePredefined With Any
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = promisify(2);
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = promisify(2);
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = promisify(2);
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = promisify(2);
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = promisify(2);
const TypeReferencePredefinedWithAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = promisify(2);
// UnionType With Any
const UnionTypeWithAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] = promisify(2);
const UnionTypeWithAnyToUnionTypeObject: Defaults["UnionType"]["Object"] = promisify(2);
const UnionTypeWithAnyToUnionTypeString: Defaults["UnionType"]["String"] = promisify(2);
const UnionTypeWithAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] = promisify(2);
const UnionTypeWithAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = promisify(2);
const UnionTypeWithAnyToUnionTypeAny: Defaults["UnionType"]["Any"] = promisify(2);
// IntersectionType With Any
const IntersectionTypeWithAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = promisify(2);
const IntersectionTypeWithAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = promisify(2);
const IntersectionTypeWithAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] = promisify(2);
const IntersectionTypeWithAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = promisify(2);
const IntersectionTypeWithAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = promisify(2);
const IntersectionTypeWithAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = promisify(2);
// TypeLiteral With Any
const TypeLiteralWithAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = promisify(2);
const TypeLiteralWithAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = promisify(2);
const TypeLiteralWithAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] = promisify(2);
const TypeLiteralWithAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = promisify(2);
const TypeLiteralWithAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = promisify(2);
const TypeLiteralWithAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = promisify(2);
// TupleType With Any
const TupleTypeWithAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] = promisify(2);
const TupleTypeWithAnyToTupleTypeObject: Defaults["TupleType"]["Object"] = promisify(2);
const TupleTypeWithAnyToTupleTypeString: Defaults["TupleType"]["String"] = promisify(2);
const TupleTypeWithAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] = promisify(2);
const TupleTypeWithAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = promisify(2);
const TupleTypeWithAnyToTupleTypeAny: Defaults["TupleType"]["Any"] = promisify(2);
// ArrayType With Any
const ArrayTypeWithAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = promisify(2);
const ArrayTypeWithAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] = promisify(2);
const ArrayTypeWithAnyToArrayTypeString: Defaults["ArrayType"]["String"] = promisify(2);
const ArrayTypeWithAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] = promisify(2);
const ArrayTypeWithAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = promisify(2);
const ArrayTypeWithAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] = promisify(2);
// FunctionType With Any
const FunctionTypeWithAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = promisify(2);
const FunctionTypeWithAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] = promisify(2);
const FunctionTypeWithAnyToFunctionTypeString: Defaults["FunctionType"]["String"] = promisify(2);
const FunctionTypeWithAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] = promisify(2);
const FunctionTypeWithAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = promisify(2);
const FunctionTypeWithAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] = promisify(2);
// ConstructorType With Any
const ConstructorTypeWithAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = promisify(2);
const ConstructorTypeWithAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] = promisify(2);
const ConstructorTypeWithAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] = promisify(2);
const ConstructorTypeWithAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = promisify(2);
const ConstructorTypeWithAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = promisify(2);
const ConstructorTypeWithAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] = promisify(2);

