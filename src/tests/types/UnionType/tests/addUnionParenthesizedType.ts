import { Defaults } from "../../defaults";

/*
 * UnionType
 */

// Add Union - ParenthesizedType
// Initial Value
const TypeParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = 1

// Changes
const AddUnionParenthesizedTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ParenthesizedType"]["Literal"] = 1;
const AddUnionParenthesizedTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ParenthesizedType"]["Object"] = 1;
const AddUnionParenthesizedTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ParenthesizedType"]["String"] = 1;
const AddUnionParenthesizedTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ParenthesizedType"]["Number"] = 1;
const AddUnionParenthesizedTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ParenthesizedType"]["Boolean"] = 1;
const AddUnionParenthesizedTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ParenthesizedType"]["Any"] = 1;

const AddUnionTypeReferenceBuiltinLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 1;
const AddUnionTypeReferenceBuiltinObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Object"] = 1;
const AddUnionTypeReferenceBuiltinStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["String"] = 1;
const AddUnionTypeReferenceBuiltinNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Number"] = 1;
const AddUnionTypeReferenceBuiltinBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 1;
const AddUnionTypeReferenceBuiltinAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Any"] = 1;

const AddUnionTypeReferencePredefinedLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeReferencePredefined"]["Literal"] = 1;
const AddUnionTypeReferencePredefinedObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeReferencePredefined"]["Object"] = 1;
const AddUnionTypeReferencePredefinedStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeReferencePredefined"]["String"] = 1;
const AddUnionTypeReferencePredefinedNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeReferencePredefined"]["Number"] = 1;
const AddUnionTypeReferencePredefinedBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeReferencePredefined"]["Boolean"] = 1;
const AddUnionTypeReferencePredefinedAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeReferencePredefined"]["Any"] = 1;

const AddUnionUnionTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["UnionType"]["Literal"] = 1;
const AddUnionUnionTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["UnionType"]["Object"] = 1;
const AddUnionUnionTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["UnionType"]["String"] = 1;
const AddUnionUnionTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["UnionType"]["Number"] = 1;
const AddUnionUnionTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["UnionType"]["Boolean"] = 1;
const AddUnionUnionTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["UnionType"]["Any"] = 1;

const AddUnionIntersectionTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["IntersectionType"]["Literal"] = 1;
const AddUnionIntersectionTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["IntersectionType"]["Object"] = 1;
const AddUnionIntersectionTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["IntersectionType"]["String"] = 1;
const AddUnionIntersectionTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["IntersectionType"]["Number"] = 1;
const AddUnionIntersectionTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["IntersectionType"]["Boolean"] = 1;
const AddUnionIntersectionTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["IntersectionType"]["Any"] = 1;

const AddUnionTypeLiteralLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeLiteral"]["Literal"] = 1;
const AddUnionTypeLiteralObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeLiteral"]["Object"] = 1;
const AddUnionTypeLiteralStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeLiteral"]["String"] = 1;
const AddUnionTypeLiteralNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeLiteral"]["Number"] = 1;
const AddUnionTypeLiteralBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeLiteral"]["Boolean"] = 1;
const AddUnionTypeLiteralAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TypeLiteral"]["Any"] = 1;

const AddUnionTupleTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TupleType"]["Literal"] = 1;
const AddUnionTupleTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TupleType"]["Object"] = 1;
const AddUnionTupleTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TupleType"]["String"] = 1;
const AddUnionTupleTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TupleType"]["Number"] = 1;
const AddUnionTupleTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TupleType"]["Boolean"] = 1;
const AddUnionTupleTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["TupleType"]["Any"] = 1;

const AddUnionArrayTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ArrayType"]["Literal"] = 1;
const AddUnionArrayTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ArrayType"]["Object"] = 1;
const AddUnionArrayTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ArrayType"]["String"] = 1;
const AddUnionArrayTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ArrayType"]["Number"] = 1;
const AddUnionArrayTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ArrayType"]["Boolean"] = 1;
const AddUnionArrayTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ArrayType"]["Any"] = 1;

const AddUnionFunctionTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["FunctionType"]["Literal"] = 1;
const AddUnionFunctionTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["FunctionType"]["Object"] = 1;
const AddUnionFunctionTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["FunctionType"]["String"] = 1;
const AddUnionFunctionTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["FunctionType"]["Number"] = 1;
const AddUnionFunctionTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["FunctionType"]["Boolean"] = 1;
const AddUnionFunctionTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["FunctionType"]["Any"] = 1;

const AddUnionConstructorTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ConstructorType"]["Literal"] = 1;
const AddUnionConstructorTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ConstructorType"]["Object"] = 1;
const AddUnionConstructorTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ConstructorType"]["String"] = 1;
const AddUnionConstructorTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ConstructorType"]["Number"] = 1;
const AddUnionConstructorTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ConstructorType"]["Boolean"] = 1;
const AddUnionConstructorTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] | Defaults["ConstructorType"]["Any"] = 1;

// Initial Value
const TypeParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = {}

// Changes
const AddUnionParenthesizedTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ParenthesizedType"]["Literal"] = {};
const AddUnionParenthesizedTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ParenthesizedType"]["Object"] = {};
const AddUnionParenthesizedTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ParenthesizedType"]["String"] = {};
const AddUnionParenthesizedTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ParenthesizedType"]["Number"] = {};
const AddUnionParenthesizedTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ParenthesizedType"]["Boolean"] = {};
const AddUnionParenthesizedTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ParenthesizedType"]["Any"] = {};

const AddUnionTypeReferenceBuiltinLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddUnionTypeReferenceBuiltinObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddUnionTypeReferenceBuiltinStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddUnionTypeReferenceBuiltinNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddUnionTypeReferenceBuiltinBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddUnionTypeReferenceBuiltinAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddUnionTypeReferencePredefinedLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddUnionTypeReferencePredefinedObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeReferencePredefined"]["Object"] = {};
const AddUnionTypeReferencePredefinedStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeReferencePredefined"]["String"] = {};
const AddUnionTypeReferencePredefinedNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeReferencePredefined"]["Number"] = {};
const AddUnionTypeReferencePredefinedBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddUnionTypeReferencePredefinedAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeReferencePredefined"]["Any"] = {};

const AddUnionUnionTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["UnionType"]["Literal"] = {};
const AddUnionUnionTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["UnionType"]["Object"] = {};
const AddUnionUnionTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["UnionType"]["String"] = {};
const AddUnionUnionTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["UnionType"]["Number"] = {};
const AddUnionUnionTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["UnionType"]["Boolean"] = {};
const AddUnionUnionTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["UnionType"]["Any"] = {};

const AddUnionIntersectionTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["IntersectionType"]["Literal"] = {};
const AddUnionIntersectionTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["IntersectionType"]["Object"] = {};
const AddUnionIntersectionTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["IntersectionType"]["String"] = {};
const AddUnionIntersectionTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["IntersectionType"]["Number"] = {};
const AddUnionIntersectionTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["IntersectionType"]["Boolean"] = {};
const AddUnionIntersectionTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["IntersectionType"]["Any"] = {};

const AddUnionTypeLiteralLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeLiteral"]["Literal"] = {};
const AddUnionTypeLiteralObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeLiteral"]["Object"] = {};
const AddUnionTypeLiteralStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeLiteral"]["String"] = {};
const AddUnionTypeLiteralNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeLiteral"]["Number"] = {};
const AddUnionTypeLiteralBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeLiteral"]["Boolean"] = {};
const AddUnionTypeLiteralAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TypeLiteral"]["Any"] = {};

const AddUnionTupleTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TupleType"]["Literal"] = {};
const AddUnionTupleTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TupleType"]["Object"] = {};
const AddUnionTupleTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TupleType"]["String"] = {};
const AddUnionTupleTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TupleType"]["Number"] = {};
const AddUnionTupleTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TupleType"]["Boolean"] = {};
const AddUnionTupleTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["TupleType"]["Any"] = {};

const AddUnionArrayTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ArrayType"]["Literal"] = {};
const AddUnionArrayTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ArrayType"]["Object"] = {};
const AddUnionArrayTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ArrayType"]["String"] = {};
const AddUnionArrayTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ArrayType"]["Number"] = {};
const AddUnionArrayTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ArrayType"]["Boolean"] = {};
const AddUnionArrayTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ArrayType"]["Any"] = {};

const AddUnionFunctionTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["FunctionType"]["Literal"] = {};
const AddUnionFunctionTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["FunctionType"]["Object"] = {};
const AddUnionFunctionTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["FunctionType"]["String"] = {};
const AddUnionFunctionTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["FunctionType"]["Number"] = {};
const AddUnionFunctionTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["FunctionType"]["Boolean"] = {};
const AddUnionFunctionTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["FunctionType"]["Any"] = {};

const AddUnionConstructorTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ConstructorType"]["Literal"] = {};
const AddUnionConstructorTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ConstructorType"]["Object"] = {};
const AddUnionConstructorTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ConstructorType"]["String"] = {};
const AddUnionConstructorTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ConstructorType"]["Number"] = {};
const AddUnionConstructorTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ConstructorType"]["Boolean"] = {};
const AddUnionConstructorTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] | Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = "two"

// Changes
const AddUnionParenthesizedTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ParenthesizedType"]["Literal"] = "two";
const AddUnionParenthesizedTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ParenthesizedType"]["Object"] = "two";
const AddUnionParenthesizedTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ParenthesizedType"]["String"] = "two";
const AddUnionParenthesizedTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ParenthesizedType"]["Number"] = "two";
const AddUnionParenthesizedTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ParenthesizedType"]["Boolean"] = "two";
const AddUnionParenthesizedTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ParenthesizedType"]["Any"] = "two";

const AddUnionTypeReferenceBuiltinLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeReferenceBuiltin"]["Literal"] = "two";
const AddUnionTypeReferenceBuiltinObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeReferenceBuiltin"]["Object"] = "two";
const AddUnionTypeReferenceBuiltinStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeReferenceBuiltin"]["String"] = "two";
const AddUnionTypeReferenceBuiltinNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeReferenceBuiltin"]["Number"] = "two";
const AddUnionTypeReferenceBuiltinBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = "two";
const AddUnionTypeReferenceBuiltinAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeReferenceBuiltin"]["Any"] = "two";

const AddUnionTypeReferencePredefinedLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeReferencePredefined"]["Literal"] = "two";
const AddUnionTypeReferencePredefinedObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeReferencePredefined"]["Object"] = "two";
const AddUnionTypeReferencePredefinedStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeReferencePredefined"]["String"] = "two";
const AddUnionTypeReferencePredefinedNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeReferencePredefined"]["Number"] = "two";
const AddUnionTypeReferencePredefinedBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeReferencePredefined"]["Boolean"] = "two";
const AddUnionTypeReferencePredefinedAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeReferencePredefined"]["Any"] = "two";

const AddUnionUnionTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["UnionType"]["Literal"] = "two";
const AddUnionUnionTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["UnionType"]["Object"] = "two";
const AddUnionUnionTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["UnionType"]["String"] = "two";
const AddUnionUnionTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["UnionType"]["Number"] = "two";
const AddUnionUnionTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["UnionType"]["Boolean"] = "two";
const AddUnionUnionTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["UnionType"]["Any"] = "two";

const AddUnionIntersectionTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["IntersectionType"]["Literal"] = "two";
const AddUnionIntersectionTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["IntersectionType"]["Object"] = "two";
const AddUnionIntersectionTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["IntersectionType"]["String"] = "two";
const AddUnionIntersectionTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["IntersectionType"]["Number"] = "two";
const AddUnionIntersectionTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["IntersectionType"]["Boolean"] = "two";
const AddUnionIntersectionTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["IntersectionType"]["Any"] = "two";

const AddUnionTypeLiteralLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeLiteral"]["Literal"] = "two";
const AddUnionTypeLiteralObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeLiteral"]["Object"] = "two";
const AddUnionTypeLiteralStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeLiteral"]["String"] = "two";
const AddUnionTypeLiteralNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeLiteral"]["Number"] = "two";
const AddUnionTypeLiteralBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeLiteral"]["Boolean"] = "two";
const AddUnionTypeLiteralAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TypeLiteral"]["Any"] = "two";

const AddUnionTupleTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TupleType"]["Literal"] = "two";
const AddUnionTupleTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TupleType"]["Object"] = "two";
const AddUnionTupleTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TupleType"]["String"] = "two";
const AddUnionTupleTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TupleType"]["Number"] = "two";
const AddUnionTupleTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TupleType"]["Boolean"] = "two";
const AddUnionTupleTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["TupleType"]["Any"] = "two";

const AddUnionArrayTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ArrayType"]["Literal"] = "two";
const AddUnionArrayTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ArrayType"]["Object"] = "two";
const AddUnionArrayTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ArrayType"]["String"] = "two";
const AddUnionArrayTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ArrayType"]["Number"] = "two";
const AddUnionArrayTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ArrayType"]["Boolean"] = "two";
const AddUnionArrayTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ArrayType"]["Any"] = "two";

const AddUnionFunctionTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["FunctionType"]["Literal"] = "two";
const AddUnionFunctionTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["FunctionType"]["Object"] = "two";
const AddUnionFunctionTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["FunctionType"]["String"] = "two";
const AddUnionFunctionTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["FunctionType"]["Number"] = "two";
const AddUnionFunctionTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["FunctionType"]["Boolean"] = "two";
const AddUnionFunctionTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["FunctionType"]["Any"] = "two";

const AddUnionConstructorTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ConstructorType"]["Literal"] = "two";
const AddUnionConstructorTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ConstructorType"]["Object"] = "two";
const AddUnionConstructorTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ConstructorType"]["String"] = "two";
const AddUnionConstructorTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ConstructorType"]["Number"] = "two";
const AddUnionConstructorTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ConstructorType"]["Boolean"] = "two";
const AddUnionConstructorTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] | Defaults["ConstructorType"]["Any"] = "two";

// Initial Value
const TypeParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = 2

// Changes
const AddUnionParenthesizedTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ParenthesizedType"]["Literal"] = 2;
const AddUnionParenthesizedTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ParenthesizedType"]["Object"] = 2;
const AddUnionParenthesizedTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ParenthesizedType"]["String"] = 2;
const AddUnionParenthesizedTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ParenthesizedType"]["Number"] = 2;
const AddUnionParenthesizedTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddUnionParenthesizedTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ParenthesizedType"]["Any"] = 2;

const AddUnionTypeReferenceBuiltinLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddUnionTypeReferenceBuiltinObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddUnionTypeReferenceBuiltinStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddUnionTypeReferenceBuiltinNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddUnionTypeReferenceBuiltinBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddUnionTypeReferenceBuiltinAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddUnionTypeReferencePredefinedLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddUnionTypeReferencePredefinedObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddUnionTypeReferencePredefinedStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeReferencePredefined"]["String"] = 2;
const AddUnionTypeReferencePredefinedNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddUnionTypeReferencePredefinedBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddUnionTypeReferencePredefinedAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddUnionUnionTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["UnionType"]["Literal"] = 2;
const AddUnionUnionTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["UnionType"]["Object"] = 2;
const AddUnionUnionTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["UnionType"]["String"] = 2;
const AddUnionUnionTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["UnionType"]["Number"] = 2;
const AddUnionUnionTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["UnionType"]["Boolean"] = 2;
const AddUnionUnionTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["UnionType"]["Any"] = 2;

const AddUnionIntersectionTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["IntersectionType"]["Literal"] = 2;
const AddUnionIntersectionTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["IntersectionType"]["Object"] = 2;
const AddUnionIntersectionTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["IntersectionType"]["String"] = 2;
const AddUnionIntersectionTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["IntersectionType"]["Number"] = 2;
const AddUnionIntersectionTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["IntersectionType"]["Boolean"] = 2;
const AddUnionIntersectionTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["IntersectionType"]["Any"] = 2;

const AddUnionTypeLiteralLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeLiteral"]["Literal"] = 2;
const AddUnionTypeLiteralObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeLiteral"]["Object"] = 2;
const AddUnionTypeLiteralStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeLiteral"]["String"] = 2;
const AddUnionTypeLiteralNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeLiteral"]["Number"] = 2;
const AddUnionTypeLiteralBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeLiteral"]["Boolean"] = 2;
const AddUnionTypeLiteralAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TypeLiteral"]["Any"] = 2;

const AddUnionTupleTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TupleType"]["Literal"] = 2;
const AddUnionTupleTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TupleType"]["Object"] = 2;
const AddUnionTupleTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TupleType"]["String"] = 2;
const AddUnionTupleTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TupleType"]["Number"] = 2;
const AddUnionTupleTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TupleType"]["Boolean"] = 2;
const AddUnionTupleTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["TupleType"]["Any"] = 2;

const AddUnionArrayTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ArrayType"]["Literal"] = 2;
const AddUnionArrayTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ArrayType"]["Object"] = 2;
const AddUnionArrayTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ArrayType"]["String"] = 2;
const AddUnionArrayTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ArrayType"]["Number"] = 2;
const AddUnionArrayTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ArrayType"]["Boolean"] = 2;
const AddUnionArrayTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ArrayType"]["Any"] = 2;

const AddUnionFunctionTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["FunctionType"]["Literal"] = 2;
const AddUnionFunctionTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["FunctionType"]["Object"] = 2;
const AddUnionFunctionTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["FunctionType"]["String"] = 2;
const AddUnionFunctionTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["FunctionType"]["Number"] = 2;
const AddUnionFunctionTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["FunctionType"]["Boolean"] = 2;
const AddUnionFunctionTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["FunctionType"]["Any"] = 2;

const AddUnionConstructorTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ConstructorType"]["Literal"] = 2;
const AddUnionConstructorTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ConstructorType"]["Object"] = 2;
const AddUnionConstructorTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ConstructorType"]["String"] = 2;
const AddUnionConstructorTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ConstructorType"]["Number"] = 2;
const AddUnionConstructorTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ConstructorType"]["Boolean"] = 2;
const AddUnionConstructorTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] | Defaults["ConstructorType"]["Any"] = 2;

// Initial Value
const TypeParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = true

// Changes
const AddUnionParenthesizedTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ParenthesizedType"]["Literal"] = true;
const AddUnionParenthesizedTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ParenthesizedType"]["Object"] = true;
const AddUnionParenthesizedTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ParenthesizedType"]["String"] = true;
const AddUnionParenthesizedTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ParenthesizedType"]["Number"] = true;
const AddUnionParenthesizedTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ParenthesizedType"]["Boolean"] = true;
const AddUnionParenthesizedTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ParenthesizedType"]["Any"] = true;

const AddUnionTypeReferenceBuiltinLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Literal"] = true;
const AddUnionTypeReferenceBuiltinObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Object"] = true;
const AddUnionTypeReferenceBuiltinStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["String"] = true;
const AddUnionTypeReferenceBuiltinNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Number"] = true;
const AddUnionTypeReferenceBuiltinBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = true;
const AddUnionTypeReferenceBuiltinAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Any"] = true;

const AddUnionTypeReferencePredefinedLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Literal"] = true;
const AddUnionTypeReferencePredefinedObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Object"] = true;
const AddUnionTypeReferencePredefinedStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeReferencePredefined"]["String"] = true;
const AddUnionTypeReferencePredefinedNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Number"] = true;
const AddUnionTypeReferencePredefinedBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Boolean"] = true;
const AddUnionTypeReferencePredefinedAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Any"] = true;

const AddUnionUnionTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["UnionType"]["Literal"] = true;
const AddUnionUnionTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["UnionType"]["Object"] = true;
const AddUnionUnionTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["UnionType"]["String"] = true;
const AddUnionUnionTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["UnionType"]["Number"] = true;
const AddUnionUnionTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["UnionType"]["Boolean"] = true;
const AddUnionUnionTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["UnionType"]["Any"] = true;

const AddUnionIntersectionTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["IntersectionType"]["Literal"] = true;
const AddUnionIntersectionTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["IntersectionType"]["Object"] = true;
const AddUnionIntersectionTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["IntersectionType"]["String"] = true;
const AddUnionIntersectionTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["IntersectionType"]["Number"] = true;
const AddUnionIntersectionTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["IntersectionType"]["Boolean"] = true;
const AddUnionIntersectionTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["IntersectionType"]["Any"] = true;

const AddUnionTypeLiteralLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeLiteral"]["Literal"] = true;
const AddUnionTypeLiteralObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeLiteral"]["Object"] = true;
const AddUnionTypeLiteralStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeLiteral"]["String"] = true;
const AddUnionTypeLiteralNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeLiteral"]["Number"] = true;
const AddUnionTypeLiteralBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeLiteral"]["Boolean"] = true;
const AddUnionTypeLiteralAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TypeLiteral"]["Any"] = true;

const AddUnionTupleTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TupleType"]["Literal"] = true;
const AddUnionTupleTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TupleType"]["Object"] = true;
const AddUnionTupleTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TupleType"]["String"] = true;
const AddUnionTupleTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TupleType"]["Number"] = true;
const AddUnionTupleTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TupleType"]["Boolean"] = true;
const AddUnionTupleTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["TupleType"]["Any"] = true;

const AddUnionArrayTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ArrayType"]["Literal"] = true;
const AddUnionArrayTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ArrayType"]["Object"] = true;
const AddUnionArrayTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ArrayType"]["String"] = true;
const AddUnionArrayTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ArrayType"]["Number"] = true;
const AddUnionArrayTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ArrayType"]["Boolean"] = true;
const AddUnionArrayTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ArrayType"]["Any"] = true;

const AddUnionFunctionTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["FunctionType"]["Literal"] = true;
const AddUnionFunctionTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["FunctionType"]["Object"] = true;
const AddUnionFunctionTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["FunctionType"]["String"] = true;
const AddUnionFunctionTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["FunctionType"]["Number"] = true;
const AddUnionFunctionTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["FunctionType"]["Boolean"] = true;
const AddUnionFunctionTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["FunctionType"]["Any"] = true;

const AddUnionConstructorTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ConstructorType"]["Literal"] = true;
const AddUnionConstructorTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ConstructorType"]["Object"] = true;
const AddUnionConstructorTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ConstructorType"]["String"] = true;
const AddUnionConstructorTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ConstructorType"]["Number"] = true;
const AddUnionConstructorTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ConstructorType"]["Boolean"] = true;
const AddUnionConstructorTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] | Defaults["ConstructorType"]["Any"] = true;

// Initial Value
const TypeParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = 2

// Changes
const AddUnionParenthesizedTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ParenthesizedType"]["Literal"] = 2;
const AddUnionParenthesizedTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ParenthesizedType"]["Object"] = 2;
const AddUnionParenthesizedTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ParenthesizedType"]["String"] = 2;
const AddUnionParenthesizedTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ParenthesizedType"]["Number"] = 2;
const AddUnionParenthesizedTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddUnionParenthesizedTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ParenthesizedType"]["Any"] = 2;

const AddUnionTypeReferenceBuiltinLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddUnionTypeReferenceBuiltinObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddUnionTypeReferenceBuiltinStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddUnionTypeReferenceBuiltinNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddUnionTypeReferenceBuiltinBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddUnionTypeReferenceBuiltinAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddUnionTypeReferencePredefinedLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddUnionTypeReferencePredefinedObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddUnionTypeReferencePredefinedStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeReferencePredefined"]["String"] = 2;
const AddUnionTypeReferencePredefinedNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddUnionTypeReferencePredefinedBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddUnionTypeReferencePredefinedAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddUnionUnionTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["UnionType"]["Literal"] = 2;
const AddUnionUnionTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["UnionType"]["Object"] = 2;
const AddUnionUnionTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["UnionType"]["String"] = 2;
const AddUnionUnionTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["UnionType"]["Number"] = 2;
const AddUnionUnionTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["UnionType"]["Boolean"] = 2;
const AddUnionUnionTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["UnionType"]["Any"] = 2;

const AddUnionIntersectionTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["IntersectionType"]["Literal"] = 2;
const AddUnionIntersectionTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["IntersectionType"]["Object"] = 2;
const AddUnionIntersectionTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["IntersectionType"]["String"] = 2;
const AddUnionIntersectionTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["IntersectionType"]["Number"] = 2;
const AddUnionIntersectionTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["IntersectionType"]["Boolean"] = 2;
const AddUnionIntersectionTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["IntersectionType"]["Any"] = 2;

const AddUnionTypeLiteralLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeLiteral"]["Literal"] = 2;
const AddUnionTypeLiteralObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeLiteral"]["Object"] = 2;
const AddUnionTypeLiteralStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeLiteral"]["String"] = 2;
const AddUnionTypeLiteralNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeLiteral"]["Number"] = 2;
const AddUnionTypeLiteralBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeLiteral"]["Boolean"] = 2;
const AddUnionTypeLiteralAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TypeLiteral"]["Any"] = 2;

const AddUnionTupleTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TupleType"]["Literal"] = 2;
const AddUnionTupleTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TupleType"]["Object"] = 2;
const AddUnionTupleTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TupleType"]["String"] = 2;
const AddUnionTupleTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TupleType"]["Number"] = 2;
const AddUnionTupleTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TupleType"]["Boolean"] = 2;
const AddUnionTupleTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["TupleType"]["Any"] = 2;

const AddUnionArrayTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ArrayType"]["Literal"] = 2;
const AddUnionArrayTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ArrayType"]["Object"] = 2;
const AddUnionArrayTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ArrayType"]["String"] = 2;
const AddUnionArrayTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ArrayType"]["Number"] = 2;
const AddUnionArrayTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ArrayType"]["Boolean"] = 2;
const AddUnionArrayTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ArrayType"]["Any"] = 2;

const AddUnionFunctionTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["FunctionType"]["Literal"] = 2;
const AddUnionFunctionTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["FunctionType"]["Object"] = 2;
const AddUnionFunctionTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["FunctionType"]["String"] = 2;
const AddUnionFunctionTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["FunctionType"]["Number"] = 2;
const AddUnionFunctionTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["FunctionType"]["Boolean"] = 2;
const AddUnionFunctionTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["FunctionType"]["Any"] = 2;

const AddUnionConstructorTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ConstructorType"]["Literal"] = 2;
const AddUnionConstructorTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ConstructorType"]["Object"] = 2;
const AddUnionConstructorTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ConstructorType"]["String"] = 2;
const AddUnionConstructorTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ConstructorType"]["Number"] = 2;
const AddUnionConstructorTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ConstructorType"]["Boolean"] = 2;
const AddUnionConstructorTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] | Defaults["ConstructorType"]["Any"] = 2;

