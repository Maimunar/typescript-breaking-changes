import { Defaults } from "../../defaults";

/*
 * UnionType
 */

// Add Union - TypeReferencePredefined
// Initial Value
const TypeTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = 1

// Changes
const AddUnionParenthesizedTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ParenthesizedType"]["Literal"] = 1;
const AddUnionParenthesizedTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ParenthesizedType"]["Object"] = 1;
const AddUnionParenthesizedTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ParenthesizedType"]["String"] = 1;
const AddUnionParenthesizedTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ParenthesizedType"]["Number"] = 1;
const AddUnionParenthesizedTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ParenthesizedType"]["Boolean"] = 1;
const AddUnionParenthesizedTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ParenthesizedType"]["Any"] = 1;

const AddUnionTypeReferenceBuiltinLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 1;
const AddUnionTypeReferenceBuiltinObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Object"] = 1;
const AddUnionTypeReferenceBuiltinStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeReferenceBuiltin"]["String"] = 1;
const AddUnionTypeReferenceBuiltinNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Number"] = 1;
const AddUnionTypeReferenceBuiltinBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 1;
const AddUnionTypeReferenceBuiltinAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Any"] = 1;

const AddUnionTypeReferencePredefinedLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeReferencePredefined"]["Literal"] = 1;
const AddUnionTypeReferencePredefinedObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeReferencePredefined"]["Object"] = 1;
const AddUnionTypeReferencePredefinedStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeReferencePredefined"]["String"] = 1;
const AddUnionTypeReferencePredefinedNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeReferencePredefined"]["Number"] = 1;
const AddUnionTypeReferencePredefinedBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeReferencePredefined"]["Boolean"] = 1;
const AddUnionTypeReferencePredefinedAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeReferencePredefined"]["Any"] = 1;

const AddUnionUnionTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["UnionType"]["Literal"] = 1;
const AddUnionUnionTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["UnionType"]["Object"] = 1;
const AddUnionUnionTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["UnionType"]["String"] = 1;
const AddUnionUnionTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["UnionType"]["Number"] = 1;
const AddUnionUnionTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["UnionType"]["Boolean"] = 1;
const AddUnionUnionTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["UnionType"]["Any"] = 1;

const AddUnionIntersectionTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["IntersectionType"]["Literal"] = 1;
const AddUnionIntersectionTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["IntersectionType"]["Object"] = 1;
const AddUnionIntersectionTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["IntersectionType"]["String"] = 1;
const AddUnionIntersectionTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["IntersectionType"]["Number"] = 1;
const AddUnionIntersectionTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["IntersectionType"]["Boolean"] = 1;
const AddUnionIntersectionTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["IntersectionType"]["Any"] = 1;

const AddUnionTypeLiteralLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeLiteral"]["Literal"] = 1;
const AddUnionTypeLiteralObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeLiteral"]["Object"] = 1;
const AddUnionTypeLiteralStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeLiteral"]["String"] = 1;
const AddUnionTypeLiteralNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeLiteral"]["Number"] = 1;
const AddUnionTypeLiteralBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeLiteral"]["Boolean"] = 1;
const AddUnionTypeLiteralAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TypeLiteral"]["Any"] = 1;

const AddUnionTupleTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TupleType"]["Literal"] = 1;
const AddUnionTupleTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TupleType"]["Object"] = 1;
const AddUnionTupleTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TupleType"]["String"] = 1;
const AddUnionTupleTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TupleType"]["Number"] = 1;
const AddUnionTupleTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TupleType"]["Boolean"] = 1;
const AddUnionTupleTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["TupleType"]["Any"] = 1;

const AddUnionArrayTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ArrayType"]["Literal"] = 1;
const AddUnionArrayTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ArrayType"]["Object"] = 1;
const AddUnionArrayTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ArrayType"]["String"] = 1;
const AddUnionArrayTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ArrayType"]["Number"] = 1;
const AddUnionArrayTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ArrayType"]["Boolean"] = 1;
const AddUnionArrayTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ArrayType"]["Any"] = 1;

const AddUnionFunctionTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["FunctionType"]["Literal"] = 1;
const AddUnionFunctionTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["FunctionType"]["Object"] = 1;
const AddUnionFunctionTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["FunctionType"]["String"] = 1;
const AddUnionFunctionTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["FunctionType"]["Number"] = 1;
const AddUnionFunctionTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["FunctionType"]["Boolean"] = 1;
const AddUnionFunctionTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["FunctionType"]["Any"] = 1;

const AddUnionConstructorTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ConstructorType"]["Literal"] = 1;
const AddUnionConstructorTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ConstructorType"]["Object"] = 1;
const AddUnionConstructorTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ConstructorType"]["String"] = 1;
const AddUnionConstructorTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ConstructorType"]["Number"] = 1;
const AddUnionConstructorTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ConstructorType"]["Boolean"] = 1;
const AddUnionConstructorTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] | Defaults["ConstructorType"]["Any"] = 1;

// Initial Value
const TypeTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = {}

// Changes
const AddUnionParenthesizedTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ParenthesizedType"]["Literal"] = {};
const AddUnionParenthesizedTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ParenthesizedType"]["Object"] = {};
const AddUnionParenthesizedTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ParenthesizedType"]["String"] = {};
const AddUnionParenthesizedTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ParenthesizedType"]["Number"] = {};
const AddUnionParenthesizedTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ParenthesizedType"]["Boolean"] = {};
const AddUnionParenthesizedTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ParenthesizedType"]["Any"] = {};

const AddUnionTypeReferenceBuiltinLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddUnionTypeReferenceBuiltinObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddUnionTypeReferenceBuiltinStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddUnionTypeReferenceBuiltinNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddUnionTypeReferenceBuiltinBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddUnionTypeReferenceBuiltinAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddUnionTypeReferencePredefinedLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddUnionTypeReferencePredefinedObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeReferencePredefined"]["Object"] = {};
const AddUnionTypeReferencePredefinedStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeReferencePredefined"]["String"] = {};
const AddUnionTypeReferencePredefinedNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeReferencePredefined"]["Number"] = {};
const AddUnionTypeReferencePredefinedBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddUnionTypeReferencePredefinedAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeReferencePredefined"]["Any"] = {};

const AddUnionUnionTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["UnionType"]["Literal"] = {};
const AddUnionUnionTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["UnionType"]["Object"] = {};
const AddUnionUnionTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["UnionType"]["String"] = {};
const AddUnionUnionTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["UnionType"]["Number"] = {};
const AddUnionUnionTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["UnionType"]["Boolean"] = {};
const AddUnionUnionTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["UnionType"]["Any"] = {};

const AddUnionIntersectionTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["IntersectionType"]["Literal"] = {};
const AddUnionIntersectionTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["IntersectionType"]["Object"] = {};
const AddUnionIntersectionTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["IntersectionType"]["String"] = {};
const AddUnionIntersectionTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["IntersectionType"]["Number"] = {};
const AddUnionIntersectionTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["IntersectionType"]["Boolean"] = {};
const AddUnionIntersectionTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["IntersectionType"]["Any"] = {};

const AddUnionTypeLiteralLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeLiteral"]["Literal"] = {};
const AddUnionTypeLiteralObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeLiteral"]["Object"] = {};
const AddUnionTypeLiteralStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeLiteral"]["String"] = {};
const AddUnionTypeLiteralNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeLiteral"]["Number"] = {};
const AddUnionTypeLiteralBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeLiteral"]["Boolean"] = {};
const AddUnionTypeLiteralAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TypeLiteral"]["Any"] = {};

const AddUnionTupleTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TupleType"]["Literal"] = {};
const AddUnionTupleTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TupleType"]["Object"] = {};
const AddUnionTupleTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TupleType"]["String"] = {};
const AddUnionTupleTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TupleType"]["Number"] = {};
const AddUnionTupleTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TupleType"]["Boolean"] = {};
const AddUnionTupleTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["TupleType"]["Any"] = {};

const AddUnionArrayTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ArrayType"]["Literal"] = {};
const AddUnionArrayTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ArrayType"]["Object"] = {};
const AddUnionArrayTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ArrayType"]["String"] = {};
const AddUnionArrayTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ArrayType"]["Number"] = {};
const AddUnionArrayTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ArrayType"]["Boolean"] = {};
const AddUnionArrayTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ArrayType"]["Any"] = {};

const AddUnionFunctionTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["FunctionType"]["Literal"] = {};
const AddUnionFunctionTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["FunctionType"]["Object"] = {};
const AddUnionFunctionTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["FunctionType"]["String"] = {};
const AddUnionFunctionTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["FunctionType"]["Number"] = {};
const AddUnionFunctionTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["FunctionType"]["Boolean"] = {};
const AddUnionFunctionTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["FunctionType"]["Any"] = {};

const AddUnionConstructorTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ConstructorType"]["Literal"] = {};
const AddUnionConstructorTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ConstructorType"]["Object"] = {};
const AddUnionConstructorTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ConstructorType"]["String"] = {};
const AddUnionConstructorTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ConstructorType"]["Number"] = {};
const AddUnionConstructorTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ConstructorType"]["Boolean"] = {};
const AddUnionConstructorTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] | Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = "two"

// Changes
const AddUnionParenthesizedTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ParenthesizedType"]["Literal"] = "two";
const AddUnionParenthesizedTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ParenthesizedType"]["Object"] = "two";
const AddUnionParenthesizedTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ParenthesizedType"]["String"] = "two";
const AddUnionParenthesizedTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ParenthesizedType"]["Number"] = "two";
const AddUnionParenthesizedTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ParenthesizedType"]["Boolean"] = "two";
const AddUnionParenthesizedTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ParenthesizedType"]["Any"] = "two";

const AddUnionTypeReferenceBuiltinLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeReferenceBuiltin"]["Literal"] = "two";
const AddUnionTypeReferenceBuiltinObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeReferenceBuiltin"]["Object"] = "two";
const AddUnionTypeReferenceBuiltinStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeReferenceBuiltin"]["String"] = "two";
const AddUnionTypeReferenceBuiltinNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeReferenceBuiltin"]["Number"] = "two";
const AddUnionTypeReferenceBuiltinBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = "two";
const AddUnionTypeReferenceBuiltinAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeReferenceBuiltin"]["Any"] = "two";

const AddUnionTypeReferencePredefinedLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeReferencePredefined"]["Literal"] = "two";
const AddUnionTypeReferencePredefinedObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeReferencePredefined"]["Object"] = "two";
const AddUnionTypeReferencePredefinedStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeReferencePredefined"]["String"] = "two";
const AddUnionTypeReferencePredefinedNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeReferencePredefined"]["Number"] = "two";
const AddUnionTypeReferencePredefinedBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeReferencePredefined"]["Boolean"] = "two";
const AddUnionTypeReferencePredefinedAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeReferencePredefined"]["Any"] = "two";

const AddUnionUnionTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["UnionType"]["Literal"] = "two";
const AddUnionUnionTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["UnionType"]["Object"] = "two";
const AddUnionUnionTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["UnionType"]["String"] = "two";
const AddUnionUnionTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["UnionType"]["Number"] = "two";
const AddUnionUnionTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["UnionType"]["Boolean"] = "two";
const AddUnionUnionTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["UnionType"]["Any"] = "two";

const AddUnionIntersectionTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["IntersectionType"]["Literal"] = "two";
const AddUnionIntersectionTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["IntersectionType"]["Object"] = "two";
const AddUnionIntersectionTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["IntersectionType"]["String"] = "two";
const AddUnionIntersectionTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["IntersectionType"]["Number"] = "two";
const AddUnionIntersectionTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["IntersectionType"]["Boolean"] = "two";
const AddUnionIntersectionTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["IntersectionType"]["Any"] = "two";

const AddUnionTypeLiteralLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeLiteral"]["Literal"] = "two";
const AddUnionTypeLiteralObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeLiteral"]["Object"] = "two";
const AddUnionTypeLiteralStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeLiteral"]["String"] = "two";
const AddUnionTypeLiteralNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeLiteral"]["Number"] = "two";
const AddUnionTypeLiteralBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeLiteral"]["Boolean"] = "two";
const AddUnionTypeLiteralAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TypeLiteral"]["Any"] = "two";

const AddUnionTupleTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TupleType"]["Literal"] = "two";
const AddUnionTupleTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TupleType"]["Object"] = "two";
const AddUnionTupleTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TupleType"]["String"] = "two";
const AddUnionTupleTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TupleType"]["Number"] = "two";
const AddUnionTupleTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TupleType"]["Boolean"] = "two";
const AddUnionTupleTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["TupleType"]["Any"] = "two";

const AddUnionArrayTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ArrayType"]["Literal"] = "two";
const AddUnionArrayTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ArrayType"]["Object"] = "two";
const AddUnionArrayTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ArrayType"]["String"] = "two";
const AddUnionArrayTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ArrayType"]["Number"] = "two";
const AddUnionArrayTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ArrayType"]["Boolean"] = "two";
const AddUnionArrayTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ArrayType"]["Any"] = "two";

const AddUnionFunctionTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["FunctionType"]["Literal"] = "two";
const AddUnionFunctionTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["FunctionType"]["Object"] = "two";
const AddUnionFunctionTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["FunctionType"]["String"] = "two";
const AddUnionFunctionTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["FunctionType"]["Number"] = "two";
const AddUnionFunctionTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["FunctionType"]["Boolean"] = "two";
const AddUnionFunctionTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["FunctionType"]["Any"] = "two";

const AddUnionConstructorTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ConstructorType"]["Literal"] = "two";
const AddUnionConstructorTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ConstructorType"]["Object"] = "two";
const AddUnionConstructorTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ConstructorType"]["String"] = "two";
const AddUnionConstructorTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ConstructorType"]["Number"] = "two";
const AddUnionConstructorTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ConstructorType"]["Boolean"] = "two";
const AddUnionConstructorTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] | Defaults["ConstructorType"]["Any"] = "two";

// Initial Value
const TypeTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = 2

// Changes
const AddUnionParenthesizedTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ParenthesizedType"]["Literal"] = 2;
const AddUnionParenthesizedTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ParenthesizedType"]["Object"] = 2;
const AddUnionParenthesizedTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ParenthesizedType"]["String"] = 2;
const AddUnionParenthesizedTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ParenthesizedType"]["Number"] = 2;
const AddUnionParenthesizedTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddUnionParenthesizedTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ParenthesizedType"]["Any"] = 2;

const AddUnionTypeReferenceBuiltinLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddUnionTypeReferenceBuiltinObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddUnionTypeReferenceBuiltinStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddUnionTypeReferenceBuiltinNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddUnionTypeReferenceBuiltinBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddUnionTypeReferenceBuiltinAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddUnionTypeReferencePredefinedLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddUnionTypeReferencePredefinedObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddUnionTypeReferencePredefinedStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeReferencePredefined"]["String"] = 2;
const AddUnionTypeReferencePredefinedNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddUnionTypeReferencePredefinedBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddUnionTypeReferencePredefinedAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddUnionUnionTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["UnionType"]["Literal"] = 2;
const AddUnionUnionTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["UnionType"]["Object"] = 2;
const AddUnionUnionTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["UnionType"]["String"] = 2;
const AddUnionUnionTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["UnionType"]["Number"] = 2;
const AddUnionUnionTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["UnionType"]["Boolean"] = 2;
const AddUnionUnionTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["UnionType"]["Any"] = 2;

const AddUnionIntersectionTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["IntersectionType"]["Literal"] = 2;
const AddUnionIntersectionTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["IntersectionType"]["Object"] = 2;
const AddUnionIntersectionTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["IntersectionType"]["String"] = 2;
const AddUnionIntersectionTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["IntersectionType"]["Number"] = 2;
const AddUnionIntersectionTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["IntersectionType"]["Boolean"] = 2;
const AddUnionIntersectionTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["IntersectionType"]["Any"] = 2;

const AddUnionTypeLiteralLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeLiteral"]["Literal"] = 2;
const AddUnionTypeLiteralObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeLiteral"]["Object"] = 2;
const AddUnionTypeLiteralStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeLiteral"]["String"] = 2;
const AddUnionTypeLiteralNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeLiteral"]["Number"] = 2;
const AddUnionTypeLiteralBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeLiteral"]["Boolean"] = 2;
const AddUnionTypeLiteralAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TypeLiteral"]["Any"] = 2;

const AddUnionTupleTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TupleType"]["Literal"] = 2;
const AddUnionTupleTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TupleType"]["Object"] = 2;
const AddUnionTupleTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TupleType"]["String"] = 2;
const AddUnionTupleTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TupleType"]["Number"] = 2;
const AddUnionTupleTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TupleType"]["Boolean"] = 2;
const AddUnionTupleTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["TupleType"]["Any"] = 2;

const AddUnionArrayTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ArrayType"]["Literal"] = 2;
const AddUnionArrayTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ArrayType"]["Object"] = 2;
const AddUnionArrayTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ArrayType"]["String"] = 2;
const AddUnionArrayTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ArrayType"]["Number"] = 2;
const AddUnionArrayTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ArrayType"]["Boolean"] = 2;
const AddUnionArrayTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ArrayType"]["Any"] = 2;

const AddUnionFunctionTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["FunctionType"]["Literal"] = 2;
const AddUnionFunctionTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["FunctionType"]["Object"] = 2;
const AddUnionFunctionTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["FunctionType"]["String"] = 2;
const AddUnionFunctionTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["FunctionType"]["Number"] = 2;
const AddUnionFunctionTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["FunctionType"]["Boolean"] = 2;
const AddUnionFunctionTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["FunctionType"]["Any"] = 2;

const AddUnionConstructorTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ConstructorType"]["Literal"] = 2;
const AddUnionConstructorTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ConstructorType"]["Object"] = 2;
const AddUnionConstructorTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ConstructorType"]["String"] = 2;
const AddUnionConstructorTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ConstructorType"]["Number"] = 2;
const AddUnionConstructorTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ConstructorType"]["Boolean"] = 2;
const AddUnionConstructorTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] | Defaults["ConstructorType"]["Any"] = 2;

// Initial Value
const TypeTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = true

// Changes
const AddUnionParenthesizedTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ParenthesizedType"]["Literal"] = true;
const AddUnionParenthesizedTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ParenthesizedType"]["Object"] = true;
const AddUnionParenthesizedTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ParenthesizedType"]["String"] = true;
const AddUnionParenthesizedTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ParenthesizedType"]["Number"] = true;
const AddUnionParenthesizedTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ParenthesizedType"]["Boolean"] = true;
const AddUnionParenthesizedTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ParenthesizedType"]["Any"] = true;

const AddUnionTypeReferenceBuiltinLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Literal"] = true;
const AddUnionTypeReferenceBuiltinObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Object"] = true;
const AddUnionTypeReferenceBuiltinStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["String"] = true;
const AddUnionTypeReferenceBuiltinNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Number"] = true;
const AddUnionTypeReferenceBuiltinBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = true;
const AddUnionTypeReferenceBuiltinAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Any"] = true;

const AddUnionTypeReferencePredefinedLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeReferencePredefined"]["Literal"] = true;
const AddUnionTypeReferencePredefinedObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeReferencePredefined"]["Object"] = true;
const AddUnionTypeReferencePredefinedStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeReferencePredefined"]["String"] = true;
const AddUnionTypeReferencePredefinedNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeReferencePredefined"]["Number"] = true;
const AddUnionTypeReferencePredefinedBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeReferencePredefined"]["Boolean"] = true;
const AddUnionTypeReferencePredefinedAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeReferencePredefined"]["Any"] = true;

const AddUnionUnionTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["UnionType"]["Literal"] = true;
const AddUnionUnionTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["UnionType"]["Object"] = true;
const AddUnionUnionTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["UnionType"]["String"] = true;
const AddUnionUnionTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["UnionType"]["Number"] = true;
const AddUnionUnionTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["UnionType"]["Boolean"] = true;
const AddUnionUnionTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["UnionType"]["Any"] = true;

const AddUnionIntersectionTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["IntersectionType"]["Literal"] = true;
const AddUnionIntersectionTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["IntersectionType"]["Object"] = true;
const AddUnionIntersectionTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["IntersectionType"]["String"] = true;
const AddUnionIntersectionTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["IntersectionType"]["Number"] = true;
const AddUnionIntersectionTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["IntersectionType"]["Boolean"] = true;
const AddUnionIntersectionTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["IntersectionType"]["Any"] = true;

const AddUnionTypeLiteralLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeLiteral"]["Literal"] = true;
const AddUnionTypeLiteralObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeLiteral"]["Object"] = true;
const AddUnionTypeLiteralStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeLiteral"]["String"] = true;
const AddUnionTypeLiteralNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeLiteral"]["Number"] = true;
const AddUnionTypeLiteralBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeLiteral"]["Boolean"] = true;
const AddUnionTypeLiteralAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TypeLiteral"]["Any"] = true;

const AddUnionTupleTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TupleType"]["Literal"] = true;
const AddUnionTupleTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TupleType"]["Object"] = true;
const AddUnionTupleTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TupleType"]["String"] = true;
const AddUnionTupleTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TupleType"]["Number"] = true;
const AddUnionTupleTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TupleType"]["Boolean"] = true;
const AddUnionTupleTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["TupleType"]["Any"] = true;

const AddUnionArrayTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ArrayType"]["Literal"] = true;
const AddUnionArrayTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ArrayType"]["Object"] = true;
const AddUnionArrayTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ArrayType"]["String"] = true;
const AddUnionArrayTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ArrayType"]["Number"] = true;
const AddUnionArrayTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ArrayType"]["Boolean"] = true;
const AddUnionArrayTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ArrayType"]["Any"] = true;

const AddUnionFunctionTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["FunctionType"]["Literal"] = true;
const AddUnionFunctionTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["FunctionType"]["Object"] = true;
const AddUnionFunctionTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["FunctionType"]["String"] = true;
const AddUnionFunctionTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["FunctionType"]["Number"] = true;
const AddUnionFunctionTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["FunctionType"]["Boolean"] = true;
const AddUnionFunctionTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["FunctionType"]["Any"] = true;

const AddUnionConstructorTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ConstructorType"]["Literal"] = true;
const AddUnionConstructorTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ConstructorType"]["Object"] = true;
const AddUnionConstructorTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ConstructorType"]["String"] = true;
const AddUnionConstructorTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ConstructorType"]["Number"] = true;
const AddUnionConstructorTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ConstructorType"]["Boolean"] = true;
const AddUnionConstructorTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] | Defaults["ConstructorType"]["Any"] = true;

// Initial Value
const TypeTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = 2

// Changes
const AddUnionParenthesizedTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ParenthesizedType"]["Literal"] = 2;
const AddUnionParenthesizedTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ParenthesizedType"]["Object"] = 2;
const AddUnionParenthesizedTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ParenthesizedType"]["String"] = 2;
const AddUnionParenthesizedTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ParenthesizedType"]["Number"] = 2;
const AddUnionParenthesizedTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddUnionParenthesizedTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ParenthesizedType"]["Any"] = 2;

const AddUnionTypeReferenceBuiltinLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddUnionTypeReferenceBuiltinObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddUnionTypeReferenceBuiltinStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddUnionTypeReferenceBuiltinNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddUnionTypeReferenceBuiltinBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddUnionTypeReferenceBuiltinAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddUnionTypeReferencePredefinedLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddUnionTypeReferencePredefinedObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddUnionTypeReferencePredefinedStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeReferencePredefined"]["String"] = 2;
const AddUnionTypeReferencePredefinedNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddUnionTypeReferencePredefinedBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddUnionTypeReferencePredefinedAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddUnionUnionTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["UnionType"]["Literal"] = 2;
const AddUnionUnionTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["UnionType"]["Object"] = 2;
const AddUnionUnionTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["UnionType"]["String"] = 2;
const AddUnionUnionTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["UnionType"]["Number"] = 2;
const AddUnionUnionTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["UnionType"]["Boolean"] = 2;
const AddUnionUnionTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["UnionType"]["Any"] = 2;

const AddUnionIntersectionTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["IntersectionType"]["Literal"] = 2;
const AddUnionIntersectionTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["IntersectionType"]["Object"] = 2;
const AddUnionIntersectionTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["IntersectionType"]["String"] = 2;
const AddUnionIntersectionTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["IntersectionType"]["Number"] = 2;
const AddUnionIntersectionTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["IntersectionType"]["Boolean"] = 2;
const AddUnionIntersectionTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["IntersectionType"]["Any"] = 2;

const AddUnionTypeLiteralLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeLiteral"]["Literal"] = 2;
const AddUnionTypeLiteralObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeLiteral"]["Object"] = 2;
const AddUnionTypeLiteralStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeLiteral"]["String"] = 2;
const AddUnionTypeLiteralNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeLiteral"]["Number"] = 2;
const AddUnionTypeLiteralBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeLiteral"]["Boolean"] = 2;
const AddUnionTypeLiteralAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TypeLiteral"]["Any"] = 2;

const AddUnionTupleTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TupleType"]["Literal"] = 2;
const AddUnionTupleTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TupleType"]["Object"] = 2;
const AddUnionTupleTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TupleType"]["String"] = 2;
const AddUnionTupleTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TupleType"]["Number"] = 2;
const AddUnionTupleTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TupleType"]["Boolean"] = 2;
const AddUnionTupleTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["TupleType"]["Any"] = 2;

const AddUnionArrayTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ArrayType"]["Literal"] = 2;
const AddUnionArrayTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ArrayType"]["Object"] = 2;
const AddUnionArrayTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ArrayType"]["String"] = 2;
const AddUnionArrayTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ArrayType"]["Number"] = 2;
const AddUnionArrayTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ArrayType"]["Boolean"] = 2;
const AddUnionArrayTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ArrayType"]["Any"] = 2;

const AddUnionFunctionTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["FunctionType"]["Literal"] = 2;
const AddUnionFunctionTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["FunctionType"]["Object"] = 2;
const AddUnionFunctionTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["FunctionType"]["String"] = 2;
const AddUnionFunctionTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["FunctionType"]["Number"] = 2;
const AddUnionFunctionTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["FunctionType"]["Boolean"] = 2;
const AddUnionFunctionTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["FunctionType"]["Any"] = 2;

const AddUnionConstructorTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ConstructorType"]["Literal"] = 2;
const AddUnionConstructorTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ConstructorType"]["Object"] = 2;
const AddUnionConstructorTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ConstructorType"]["String"] = 2;
const AddUnionConstructorTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ConstructorType"]["Number"] = 2;
const AddUnionConstructorTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ConstructorType"]["Boolean"] = 2;
const AddUnionConstructorTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] | Defaults["ConstructorType"]["Any"] = 2;

