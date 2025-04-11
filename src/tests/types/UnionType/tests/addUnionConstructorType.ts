import { Defaults } from "../../defaults";

/*
 * UnionType
 */

// Add Union - ConstructorType
// Initial Value
const TypeConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = 1

// Changes
const AddUnionParenthesizedTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ParenthesizedType"]["Literal"] = 1;
const AddUnionParenthesizedTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ParenthesizedType"]["Object"] = 1;
const AddUnionParenthesizedTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ParenthesizedType"]["String"] = 1;
const AddUnionParenthesizedTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ParenthesizedType"]["Number"] = 1;
const AddUnionParenthesizedTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ParenthesizedType"]["Boolean"] = 1;
const AddUnionParenthesizedTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ParenthesizedType"]["Any"] = 1;

const AddUnionTypeReferenceBuiltinLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 1;
const AddUnionTypeReferenceBuiltinObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Object"] = 1;
const AddUnionTypeReferenceBuiltinStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["String"] = 1;
const AddUnionTypeReferenceBuiltinNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Number"] = 1;
const AddUnionTypeReferenceBuiltinBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 1;
const AddUnionTypeReferenceBuiltinAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Any"] = 1;

const AddUnionTypeReferencePredefinedLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeReferencePredefined"]["Literal"] = 1;
const AddUnionTypeReferencePredefinedObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeReferencePredefined"]["Object"] = 1;
const AddUnionTypeReferencePredefinedStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeReferencePredefined"]["String"] = 1;
const AddUnionTypeReferencePredefinedNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeReferencePredefined"]["Number"] = 1;
const AddUnionTypeReferencePredefinedBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeReferencePredefined"]["Boolean"] = 1;
const AddUnionTypeReferencePredefinedAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeReferencePredefined"]["Any"] = 1;

const AddUnionUnionTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["UnionType"]["Literal"] = 1;
const AddUnionUnionTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["UnionType"]["Object"] = 1;
const AddUnionUnionTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["UnionType"]["String"] = 1;
const AddUnionUnionTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["UnionType"]["Number"] = 1;
const AddUnionUnionTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["UnionType"]["Boolean"] = 1;
const AddUnionUnionTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["UnionType"]["Any"] = 1;

const AddUnionIntersectionTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["IntersectionType"]["Literal"] = 1;
const AddUnionIntersectionTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["IntersectionType"]["Object"] = 1;
const AddUnionIntersectionTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["IntersectionType"]["String"] = 1;
const AddUnionIntersectionTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["IntersectionType"]["Number"] = 1;
const AddUnionIntersectionTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["IntersectionType"]["Boolean"] = 1;
const AddUnionIntersectionTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["IntersectionType"]["Any"] = 1;

const AddUnionTypeLiteralLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeLiteral"]["Literal"] = 1;
const AddUnionTypeLiteralObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeLiteral"]["Object"] = 1;
const AddUnionTypeLiteralStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeLiteral"]["String"] = 1;
const AddUnionTypeLiteralNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeLiteral"]["Number"] = 1;
const AddUnionTypeLiteralBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeLiteral"]["Boolean"] = 1;
const AddUnionTypeLiteralAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TypeLiteral"]["Any"] = 1;

const AddUnionTupleTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TupleType"]["Literal"] = 1;
const AddUnionTupleTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TupleType"]["Object"] = 1;
const AddUnionTupleTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TupleType"]["String"] = 1;
const AddUnionTupleTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TupleType"]["Number"] = 1;
const AddUnionTupleTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TupleType"]["Boolean"] = 1;
const AddUnionTupleTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["TupleType"]["Any"] = 1;

const AddUnionArrayTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ArrayType"]["Literal"] = 1;
const AddUnionArrayTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ArrayType"]["Object"] = 1;
const AddUnionArrayTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ArrayType"]["String"] = 1;
const AddUnionArrayTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ArrayType"]["Number"] = 1;
const AddUnionArrayTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ArrayType"]["Boolean"] = 1;
const AddUnionArrayTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ArrayType"]["Any"] = 1;

const AddUnionFunctionTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["FunctionType"]["Literal"] = 1;
const AddUnionFunctionTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["FunctionType"]["Object"] = 1;
const AddUnionFunctionTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["FunctionType"]["String"] = 1;
const AddUnionFunctionTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["FunctionType"]["Number"] = 1;
const AddUnionFunctionTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["FunctionType"]["Boolean"] = 1;
const AddUnionFunctionTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["FunctionType"]["Any"] = 1;

const AddUnionConstructorTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ConstructorType"]["Literal"] = 1;
const AddUnionConstructorTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ConstructorType"]["Object"] = 1;
const AddUnionConstructorTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ConstructorType"]["String"] = 1;
const AddUnionConstructorTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ConstructorType"]["Number"] = 1;
const AddUnionConstructorTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ConstructorType"]["Boolean"] = 1;
const AddUnionConstructorTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] | Defaults["ConstructorType"]["Any"] = 1;

// Initial Value
const TypeConstructorTypeObject: Defaults["ConstructorType"]["Object"] = {}

// Changes
const AddUnionParenthesizedTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ParenthesizedType"]["Literal"] = {};
const AddUnionParenthesizedTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ParenthesizedType"]["Object"] = {};
const AddUnionParenthesizedTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ParenthesizedType"]["String"] = {};
const AddUnionParenthesizedTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ParenthesizedType"]["Number"] = {};
const AddUnionParenthesizedTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ParenthesizedType"]["Boolean"] = {};
const AddUnionParenthesizedTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ParenthesizedType"]["Any"] = {};

const AddUnionTypeReferenceBuiltinLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddUnionTypeReferenceBuiltinObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddUnionTypeReferenceBuiltinStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddUnionTypeReferenceBuiltinNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddUnionTypeReferenceBuiltinBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddUnionTypeReferenceBuiltinAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddUnionTypeReferencePredefinedLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddUnionTypeReferencePredefinedObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeReferencePredefined"]["Object"] = {};
const AddUnionTypeReferencePredefinedStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeReferencePredefined"]["String"] = {};
const AddUnionTypeReferencePredefinedNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeReferencePredefined"]["Number"] = {};
const AddUnionTypeReferencePredefinedBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddUnionTypeReferencePredefinedAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeReferencePredefined"]["Any"] = {};

const AddUnionUnionTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["UnionType"]["Literal"] = {};
const AddUnionUnionTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["UnionType"]["Object"] = {};
const AddUnionUnionTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["UnionType"]["String"] = {};
const AddUnionUnionTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["UnionType"]["Number"] = {};
const AddUnionUnionTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["UnionType"]["Boolean"] = {};
const AddUnionUnionTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["UnionType"]["Any"] = {};

const AddUnionIntersectionTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["IntersectionType"]["Literal"] = {};
const AddUnionIntersectionTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["IntersectionType"]["Object"] = {};
const AddUnionIntersectionTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["IntersectionType"]["String"] = {};
const AddUnionIntersectionTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["IntersectionType"]["Number"] = {};
const AddUnionIntersectionTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["IntersectionType"]["Boolean"] = {};
const AddUnionIntersectionTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["IntersectionType"]["Any"] = {};

const AddUnionTypeLiteralLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeLiteral"]["Literal"] = {};
const AddUnionTypeLiteralObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeLiteral"]["Object"] = {};
const AddUnionTypeLiteralStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeLiteral"]["String"] = {};
const AddUnionTypeLiteralNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeLiteral"]["Number"] = {};
const AddUnionTypeLiteralBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeLiteral"]["Boolean"] = {};
const AddUnionTypeLiteralAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TypeLiteral"]["Any"] = {};

const AddUnionTupleTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TupleType"]["Literal"] = {};
const AddUnionTupleTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TupleType"]["Object"] = {};
const AddUnionTupleTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TupleType"]["String"] = {};
const AddUnionTupleTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TupleType"]["Number"] = {};
const AddUnionTupleTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TupleType"]["Boolean"] = {};
const AddUnionTupleTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["TupleType"]["Any"] = {};

const AddUnionArrayTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ArrayType"]["Literal"] = {};
const AddUnionArrayTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ArrayType"]["Object"] = {};
const AddUnionArrayTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ArrayType"]["String"] = {};
const AddUnionArrayTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ArrayType"]["Number"] = {};
const AddUnionArrayTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ArrayType"]["Boolean"] = {};
const AddUnionArrayTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ArrayType"]["Any"] = {};

const AddUnionFunctionTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["FunctionType"]["Literal"] = {};
const AddUnionFunctionTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["FunctionType"]["Object"] = {};
const AddUnionFunctionTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["FunctionType"]["String"] = {};
const AddUnionFunctionTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["FunctionType"]["Number"] = {};
const AddUnionFunctionTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["FunctionType"]["Boolean"] = {};
const AddUnionFunctionTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["FunctionType"]["Any"] = {};

const AddUnionConstructorTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ConstructorType"]["Literal"] = {};
const AddUnionConstructorTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ConstructorType"]["Object"] = {};
const AddUnionConstructorTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ConstructorType"]["String"] = {};
const AddUnionConstructorTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ConstructorType"]["Number"] = {};
const AddUnionConstructorTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ConstructorType"]["Boolean"] = {};
const AddUnionConstructorTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] | Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeConstructorTypeString: Defaults["ConstructorType"]["String"] = "two"

// Changes
const AddUnionParenthesizedTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ParenthesizedType"]["Literal"] = "two";
const AddUnionParenthesizedTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ParenthesizedType"]["Object"] = "two";
const AddUnionParenthesizedTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ParenthesizedType"]["String"] = "two";
const AddUnionParenthesizedTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ParenthesizedType"]["Number"] = "two";
const AddUnionParenthesizedTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ParenthesizedType"]["Boolean"] = "two";
const AddUnionParenthesizedTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ParenthesizedType"]["Any"] = "two";

const AddUnionTypeReferenceBuiltinLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeReferenceBuiltin"]["Literal"] = "two";
const AddUnionTypeReferenceBuiltinObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeReferenceBuiltin"]["Object"] = "two";
const AddUnionTypeReferenceBuiltinStringToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeReferenceBuiltin"]["String"] = "two";
const AddUnionTypeReferenceBuiltinNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeReferenceBuiltin"]["Number"] = "two";
const AddUnionTypeReferenceBuiltinBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = "two";
const AddUnionTypeReferenceBuiltinAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeReferenceBuiltin"]["Any"] = "two";

const AddUnionTypeReferencePredefinedLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeReferencePredefined"]["Literal"] = "two";
const AddUnionTypeReferencePredefinedObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeReferencePredefined"]["Object"] = "two";
const AddUnionTypeReferencePredefinedStringToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeReferencePredefined"]["String"] = "two";
const AddUnionTypeReferencePredefinedNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeReferencePredefined"]["Number"] = "two";
const AddUnionTypeReferencePredefinedBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeReferencePredefined"]["Boolean"] = "two";
const AddUnionTypeReferencePredefinedAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeReferencePredefined"]["Any"] = "two";

const AddUnionUnionTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["UnionType"]["Literal"] = "two";
const AddUnionUnionTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["UnionType"]["Object"] = "two";
const AddUnionUnionTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["UnionType"]["String"] = "two";
const AddUnionUnionTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["UnionType"]["Number"] = "two";
const AddUnionUnionTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["UnionType"]["Boolean"] = "two";
const AddUnionUnionTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["UnionType"]["Any"] = "two";

const AddUnionIntersectionTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["IntersectionType"]["Literal"] = "two";
const AddUnionIntersectionTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["IntersectionType"]["Object"] = "two";
const AddUnionIntersectionTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["IntersectionType"]["String"] = "two";
const AddUnionIntersectionTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["IntersectionType"]["Number"] = "two";
const AddUnionIntersectionTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["IntersectionType"]["Boolean"] = "two";
const AddUnionIntersectionTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["IntersectionType"]["Any"] = "two";

const AddUnionTypeLiteralLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeLiteral"]["Literal"] = "two";
const AddUnionTypeLiteralObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeLiteral"]["Object"] = "two";
const AddUnionTypeLiteralStringToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeLiteral"]["String"] = "two";
const AddUnionTypeLiteralNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeLiteral"]["Number"] = "two";
const AddUnionTypeLiteralBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeLiteral"]["Boolean"] = "two";
const AddUnionTypeLiteralAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TypeLiteral"]["Any"] = "two";

const AddUnionTupleTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TupleType"]["Literal"] = "two";
const AddUnionTupleTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TupleType"]["Object"] = "two";
const AddUnionTupleTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TupleType"]["String"] = "two";
const AddUnionTupleTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TupleType"]["Number"] = "two";
const AddUnionTupleTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TupleType"]["Boolean"] = "two";
const AddUnionTupleTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["TupleType"]["Any"] = "two";

const AddUnionArrayTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ArrayType"]["Literal"] = "two";
const AddUnionArrayTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ArrayType"]["Object"] = "two";
const AddUnionArrayTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ArrayType"]["String"] = "two";
const AddUnionArrayTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ArrayType"]["Number"] = "two";
const AddUnionArrayTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ArrayType"]["Boolean"] = "two";
const AddUnionArrayTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ArrayType"]["Any"] = "two";

const AddUnionFunctionTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["FunctionType"]["Literal"] = "two";
const AddUnionFunctionTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["FunctionType"]["Object"] = "two";
const AddUnionFunctionTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["FunctionType"]["String"] = "two";
const AddUnionFunctionTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["FunctionType"]["Number"] = "two";
const AddUnionFunctionTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["FunctionType"]["Boolean"] = "two";
const AddUnionFunctionTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["FunctionType"]["Any"] = "two";

const AddUnionConstructorTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ConstructorType"]["Literal"] = "two";
const AddUnionConstructorTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ConstructorType"]["Object"] = "two";
const AddUnionConstructorTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ConstructorType"]["String"] = "two";
const AddUnionConstructorTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ConstructorType"]["Number"] = "two";
const AddUnionConstructorTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ConstructorType"]["Boolean"] = "two";
const AddUnionConstructorTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] | Defaults["ConstructorType"]["Any"] = "two";

// Initial Value
const TypeConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = 2

// Changes
const AddUnionParenthesizedTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ParenthesizedType"]["Literal"] = 2;
const AddUnionParenthesizedTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ParenthesizedType"]["Object"] = 2;
const AddUnionParenthesizedTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ParenthesizedType"]["String"] = 2;
const AddUnionParenthesizedTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ParenthesizedType"]["Number"] = 2;
const AddUnionParenthesizedTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddUnionParenthesizedTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ParenthesizedType"]["Any"] = 2;

const AddUnionTypeReferenceBuiltinLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddUnionTypeReferenceBuiltinObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddUnionTypeReferenceBuiltinStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddUnionTypeReferenceBuiltinNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddUnionTypeReferenceBuiltinBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddUnionTypeReferenceBuiltinAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddUnionTypeReferencePredefinedLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddUnionTypeReferencePredefinedObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddUnionTypeReferencePredefinedStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeReferencePredefined"]["String"] = 2;
const AddUnionTypeReferencePredefinedNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddUnionTypeReferencePredefinedBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddUnionTypeReferencePredefinedAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddUnionUnionTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["UnionType"]["Literal"] = 2;
const AddUnionUnionTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["UnionType"]["Object"] = 2;
const AddUnionUnionTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["UnionType"]["String"] = 2;
const AddUnionUnionTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["UnionType"]["Number"] = 2;
const AddUnionUnionTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["UnionType"]["Boolean"] = 2;
const AddUnionUnionTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["UnionType"]["Any"] = 2;

const AddUnionIntersectionTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["IntersectionType"]["Literal"] = 2;
const AddUnionIntersectionTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["IntersectionType"]["Object"] = 2;
const AddUnionIntersectionTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["IntersectionType"]["String"] = 2;
const AddUnionIntersectionTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["IntersectionType"]["Number"] = 2;
const AddUnionIntersectionTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["IntersectionType"]["Boolean"] = 2;
const AddUnionIntersectionTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["IntersectionType"]["Any"] = 2;

const AddUnionTypeLiteralLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeLiteral"]["Literal"] = 2;
const AddUnionTypeLiteralObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeLiteral"]["Object"] = 2;
const AddUnionTypeLiteralStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeLiteral"]["String"] = 2;
const AddUnionTypeLiteralNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeLiteral"]["Number"] = 2;
const AddUnionTypeLiteralBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeLiteral"]["Boolean"] = 2;
const AddUnionTypeLiteralAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TypeLiteral"]["Any"] = 2;

const AddUnionTupleTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TupleType"]["Literal"] = 2;
const AddUnionTupleTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TupleType"]["Object"] = 2;
const AddUnionTupleTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TupleType"]["String"] = 2;
const AddUnionTupleTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TupleType"]["Number"] = 2;
const AddUnionTupleTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TupleType"]["Boolean"] = 2;
const AddUnionTupleTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["TupleType"]["Any"] = 2;

const AddUnionArrayTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ArrayType"]["Literal"] = 2;
const AddUnionArrayTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ArrayType"]["Object"] = 2;
const AddUnionArrayTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ArrayType"]["String"] = 2;
const AddUnionArrayTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ArrayType"]["Number"] = 2;
const AddUnionArrayTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ArrayType"]["Boolean"] = 2;
const AddUnionArrayTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ArrayType"]["Any"] = 2;

const AddUnionFunctionTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["FunctionType"]["Literal"] = 2;
const AddUnionFunctionTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["FunctionType"]["Object"] = 2;
const AddUnionFunctionTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["FunctionType"]["String"] = 2;
const AddUnionFunctionTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["FunctionType"]["Number"] = 2;
const AddUnionFunctionTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["FunctionType"]["Boolean"] = 2;
const AddUnionFunctionTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["FunctionType"]["Any"] = 2;

const AddUnionConstructorTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ConstructorType"]["Literal"] = 2;
const AddUnionConstructorTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ConstructorType"]["Object"] = 2;
const AddUnionConstructorTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ConstructorType"]["String"] = 2;
const AddUnionConstructorTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ConstructorType"]["Number"] = 2;
const AddUnionConstructorTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ConstructorType"]["Boolean"] = 2;
const AddUnionConstructorTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] | Defaults["ConstructorType"]["Any"] = 2;

// Initial Value
const TypeConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = true

// Changes
const AddUnionParenthesizedTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ParenthesizedType"]["Literal"] = true;
const AddUnionParenthesizedTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ParenthesizedType"]["Object"] = true;
const AddUnionParenthesizedTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ParenthesizedType"]["String"] = true;
const AddUnionParenthesizedTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ParenthesizedType"]["Number"] = true;
const AddUnionParenthesizedTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ParenthesizedType"]["Boolean"] = true;
const AddUnionParenthesizedTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ParenthesizedType"]["Any"] = true;

const AddUnionTypeReferenceBuiltinLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Literal"] = true;
const AddUnionTypeReferenceBuiltinObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Object"] = true;
const AddUnionTypeReferenceBuiltinStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["String"] = true;
const AddUnionTypeReferenceBuiltinNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Number"] = true;
const AddUnionTypeReferenceBuiltinBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = true;
const AddUnionTypeReferenceBuiltinAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Any"] = true;

const AddUnionTypeReferencePredefinedLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Literal"] = true;
const AddUnionTypeReferencePredefinedObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Object"] = true;
const AddUnionTypeReferencePredefinedStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeReferencePredefined"]["String"] = true;
const AddUnionTypeReferencePredefinedNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Number"] = true;
const AddUnionTypeReferencePredefinedBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Boolean"] = true;
const AddUnionTypeReferencePredefinedAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Any"] = true;

const AddUnionUnionTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["UnionType"]["Literal"] = true;
const AddUnionUnionTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["UnionType"]["Object"] = true;
const AddUnionUnionTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["UnionType"]["String"] = true;
const AddUnionUnionTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["UnionType"]["Number"] = true;
const AddUnionUnionTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["UnionType"]["Boolean"] = true;
const AddUnionUnionTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["UnionType"]["Any"] = true;

const AddUnionIntersectionTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["IntersectionType"]["Literal"] = true;
const AddUnionIntersectionTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["IntersectionType"]["Object"] = true;
const AddUnionIntersectionTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["IntersectionType"]["String"] = true;
const AddUnionIntersectionTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["IntersectionType"]["Number"] = true;
const AddUnionIntersectionTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["IntersectionType"]["Boolean"] = true;
const AddUnionIntersectionTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["IntersectionType"]["Any"] = true;

const AddUnionTypeLiteralLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeLiteral"]["Literal"] = true;
const AddUnionTypeLiteralObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeLiteral"]["Object"] = true;
const AddUnionTypeLiteralStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeLiteral"]["String"] = true;
const AddUnionTypeLiteralNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeLiteral"]["Number"] = true;
const AddUnionTypeLiteralBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeLiteral"]["Boolean"] = true;
const AddUnionTypeLiteralAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TypeLiteral"]["Any"] = true;

const AddUnionTupleTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TupleType"]["Literal"] = true;
const AddUnionTupleTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TupleType"]["Object"] = true;
const AddUnionTupleTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TupleType"]["String"] = true;
const AddUnionTupleTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TupleType"]["Number"] = true;
const AddUnionTupleTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TupleType"]["Boolean"] = true;
const AddUnionTupleTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["TupleType"]["Any"] = true;

const AddUnionArrayTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ArrayType"]["Literal"] = true;
const AddUnionArrayTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ArrayType"]["Object"] = true;
const AddUnionArrayTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ArrayType"]["String"] = true;
const AddUnionArrayTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ArrayType"]["Number"] = true;
const AddUnionArrayTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ArrayType"]["Boolean"] = true;
const AddUnionArrayTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ArrayType"]["Any"] = true;

const AddUnionFunctionTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["FunctionType"]["Literal"] = true;
const AddUnionFunctionTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["FunctionType"]["Object"] = true;
const AddUnionFunctionTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["FunctionType"]["String"] = true;
const AddUnionFunctionTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["FunctionType"]["Number"] = true;
const AddUnionFunctionTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["FunctionType"]["Boolean"] = true;
const AddUnionFunctionTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["FunctionType"]["Any"] = true;

const AddUnionConstructorTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ConstructorType"]["Literal"] = true;
const AddUnionConstructorTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ConstructorType"]["Object"] = true;
const AddUnionConstructorTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ConstructorType"]["String"] = true;
const AddUnionConstructorTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ConstructorType"]["Number"] = true;
const AddUnionConstructorTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ConstructorType"]["Boolean"] = true;
const AddUnionConstructorTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] | Defaults["ConstructorType"]["Any"] = true;

// Initial Value
const TypeConstructorTypeAny: Defaults["ConstructorType"]["Any"] = 2

// Changes
const AddUnionParenthesizedTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ParenthesizedType"]["Literal"] = 2;
const AddUnionParenthesizedTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ParenthesizedType"]["Object"] = 2;
const AddUnionParenthesizedTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ParenthesizedType"]["String"] = 2;
const AddUnionParenthesizedTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ParenthesizedType"]["Number"] = 2;
const AddUnionParenthesizedTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddUnionParenthesizedTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ParenthesizedType"]["Any"] = 2;

const AddUnionTypeReferenceBuiltinLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddUnionTypeReferenceBuiltinObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddUnionTypeReferenceBuiltinStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddUnionTypeReferenceBuiltinNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddUnionTypeReferenceBuiltinBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddUnionTypeReferenceBuiltinAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddUnionTypeReferencePredefinedLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddUnionTypeReferencePredefinedObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddUnionTypeReferencePredefinedStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeReferencePredefined"]["String"] = 2;
const AddUnionTypeReferencePredefinedNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddUnionTypeReferencePredefinedBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddUnionTypeReferencePredefinedAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddUnionUnionTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["UnionType"]["Literal"] = 2;
const AddUnionUnionTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["UnionType"]["Object"] = 2;
const AddUnionUnionTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["UnionType"]["String"] = 2;
const AddUnionUnionTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["UnionType"]["Number"] = 2;
const AddUnionUnionTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["UnionType"]["Boolean"] = 2;
const AddUnionUnionTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["UnionType"]["Any"] = 2;

const AddUnionIntersectionTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["IntersectionType"]["Literal"] = 2;
const AddUnionIntersectionTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["IntersectionType"]["Object"] = 2;
const AddUnionIntersectionTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["IntersectionType"]["String"] = 2;
const AddUnionIntersectionTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["IntersectionType"]["Number"] = 2;
const AddUnionIntersectionTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["IntersectionType"]["Boolean"] = 2;
const AddUnionIntersectionTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["IntersectionType"]["Any"] = 2;

const AddUnionTypeLiteralLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeLiteral"]["Literal"] = 2;
const AddUnionTypeLiteralObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeLiteral"]["Object"] = 2;
const AddUnionTypeLiteralStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeLiteral"]["String"] = 2;
const AddUnionTypeLiteralNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeLiteral"]["Number"] = 2;
const AddUnionTypeLiteralBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeLiteral"]["Boolean"] = 2;
const AddUnionTypeLiteralAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TypeLiteral"]["Any"] = 2;

const AddUnionTupleTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TupleType"]["Literal"] = 2;
const AddUnionTupleTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TupleType"]["Object"] = 2;
const AddUnionTupleTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TupleType"]["String"] = 2;
const AddUnionTupleTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TupleType"]["Number"] = 2;
const AddUnionTupleTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TupleType"]["Boolean"] = 2;
const AddUnionTupleTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["TupleType"]["Any"] = 2;

const AddUnionArrayTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ArrayType"]["Literal"] = 2;
const AddUnionArrayTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ArrayType"]["Object"] = 2;
const AddUnionArrayTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ArrayType"]["String"] = 2;
const AddUnionArrayTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ArrayType"]["Number"] = 2;
const AddUnionArrayTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ArrayType"]["Boolean"] = 2;
const AddUnionArrayTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ArrayType"]["Any"] = 2;

const AddUnionFunctionTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["FunctionType"]["Literal"] = 2;
const AddUnionFunctionTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["FunctionType"]["Object"] = 2;
const AddUnionFunctionTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["FunctionType"]["String"] = 2;
const AddUnionFunctionTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["FunctionType"]["Number"] = 2;
const AddUnionFunctionTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["FunctionType"]["Boolean"] = 2;
const AddUnionFunctionTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["FunctionType"]["Any"] = 2;

const AddUnionConstructorTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ConstructorType"]["Literal"] = 2;
const AddUnionConstructorTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ConstructorType"]["Object"] = 2;
const AddUnionConstructorTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ConstructorType"]["String"] = 2;
const AddUnionConstructorTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ConstructorType"]["Number"] = 2;
const AddUnionConstructorTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ConstructorType"]["Boolean"] = 2;
const AddUnionConstructorTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] | Defaults["ConstructorType"]["Any"] = 2;

