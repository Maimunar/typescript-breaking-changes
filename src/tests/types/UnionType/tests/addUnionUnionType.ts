import { Defaults } from "../../defaults";

/*
 * UnionType
 */

// Add Union - UnionType
// Initial Value
const TypeUnionTypeLiteral: Defaults["UnionType"]["Literal"] = 1

// Changes
const AddUnionParenthesizedTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ParenthesizedType"]["Literal"] = 1;
const AddUnionParenthesizedTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ParenthesizedType"]["Object"] = 1;
const AddUnionParenthesizedTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ParenthesizedType"]["String"] = 1;
const AddUnionParenthesizedTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ParenthesizedType"]["Number"] = 1;
const AddUnionParenthesizedTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ParenthesizedType"]["Boolean"] = 1;
const AddUnionParenthesizedTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ParenthesizedType"]["Any"] = 1;

const AddUnionTypeReferenceBuiltinLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 1;
const AddUnionTypeReferenceBuiltinObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Object"] = 1;
const AddUnionTypeReferenceBuiltinStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["String"] = 1;
const AddUnionTypeReferenceBuiltinNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Number"] = 1;
const AddUnionTypeReferenceBuiltinBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 1;
const AddUnionTypeReferenceBuiltinAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Any"] = 1;

const AddUnionTypeReferencePredefinedLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Literal"] = 1;
const AddUnionTypeReferencePredefinedObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Object"] = 1;
const AddUnionTypeReferencePredefinedStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeReferencePredefined"]["String"] = 1;
const AddUnionTypeReferencePredefinedNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Number"] = 1;
const AddUnionTypeReferencePredefinedBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Boolean"] = 1;
const AddUnionTypeReferencePredefinedAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Any"] = 1;

const AddUnionUnionTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["UnionType"]["Literal"] = 1;
const AddUnionUnionTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["UnionType"]["Object"] = 1;
const AddUnionUnionTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["UnionType"]["String"] = 1;
const AddUnionUnionTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["UnionType"]["Number"] = 1;
const AddUnionUnionTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["UnionType"]["Boolean"] = 1;
const AddUnionUnionTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["UnionType"]["Any"] = 1;

const AddUnionIntersectionTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["IntersectionType"]["Literal"] = 1;
const AddUnionIntersectionTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["IntersectionType"]["Object"] = 1;
const AddUnionIntersectionTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["IntersectionType"]["String"] = 1;
const AddUnionIntersectionTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["IntersectionType"]["Number"] = 1;
const AddUnionIntersectionTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["IntersectionType"]["Boolean"] = 1;
const AddUnionIntersectionTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["IntersectionType"]["Any"] = 1;

const AddUnionTypeLiteralLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeLiteral"]["Literal"] = 1;
const AddUnionTypeLiteralObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeLiteral"]["Object"] = 1;
const AddUnionTypeLiteralStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeLiteral"]["String"] = 1;
const AddUnionTypeLiteralNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeLiteral"]["Number"] = 1;
const AddUnionTypeLiteralBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeLiteral"]["Boolean"] = 1;
const AddUnionTypeLiteralAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TypeLiteral"]["Any"] = 1;

const AddUnionTupleTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TupleType"]["Literal"] = 1;
const AddUnionTupleTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TupleType"]["Object"] = 1;
const AddUnionTupleTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TupleType"]["String"] = 1;
const AddUnionTupleTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TupleType"]["Number"] = 1;
const AddUnionTupleTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TupleType"]["Boolean"] = 1;
const AddUnionTupleTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["TupleType"]["Any"] = 1;

const AddUnionArrayTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ArrayType"]["Literal"] = 1;
const AddUnionArrayTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ArrayType"]["Object"] = 1;
const AddUnionArrayTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ArrayType"]["String"] = 1;
const AddUnionArrayTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ArrayType"]["Number"] = 1;
const AddUnionArrayTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ArrayType"]["Boolean"] = 1;
const AddUnionArrayTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ArrayType"]["Any"] = 1;

const AddUnionFunctionTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["FunctionType"]["Literal"] = 1;
const AddUnionFunctionTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["FunctionType"]["Object"] = 1;
const AddUnionFunctionTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["FunctionType"]["String"] = 1;
const AddUnionFunctionTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["FunctionType"]["Number"] = 1;
const AddUnionFunctionTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["FunctionType"]["Boolean"] = 1;
const AddUnionFunctionTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["FunctionType"]["Any"] = 1;

const AddUnionConstructorTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ConstructorType"]["Literal"] = 1;
const AddUnionConstructorTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ConstructorType"]["Object"] = 1;
const AddUnionConstructorTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ConstructorType"]["String"] = 1;
const AddUnionConstructorTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ConstructorType"]["Number"] = 1;
const AddUnionConstructorTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ConstructorType"]["Boolean"] = 1;
const AddUnionConstructorTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] | Defaults["ConstructorType"]["Any"] = 1;

// Initial Value
const TypeUnionTypeObject: Defaults["UnionType"]["Object"] = {}

// Changes
const AddUnionParenthesizedTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ParenthesizedType"]["Literal"] = {};
const AddUnionParenthesizedTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ParenthesizedType"]["Object"] = {};
const AddUnionParenthesizedTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ParenthesizedType"]["String"] = {};
const AddUnionParenthesizedTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ParenthesizedType"]["Number"] = {};
const AddUnionParenthesizedTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ParenthesizedType"]["Boolean"] = {};
const AddUnionParenthesizedTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ParenthesizedType"]["Any"] = {};

const AddUnionTypeReferenceBuiltinLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddUnionTypeReferenceBuiltinObjectToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddUnionTypeReferenceBuiltinStringToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddUnionTypeReferenceBuiltinNumberToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddUnionTypeReferenceBuiltinBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddUnionTypeReferenceBuiltinAnyToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddUnionTypeReferencePredefinedLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddUnionTypeReferencePredefinedObjectToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeReferencePredefined"]["Object"] = {};
const AddUnionTypeReferencePredefinedStringToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeReferencePredefined"]["String"] = {};
const AddUnionTypeReferencePredefinedNumberToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeReferencePredefined"]["Number"] = {};
const AddUnionTypeReferencePredefinedBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddUnionTypeReferencePredefinedAnyToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeReferencePredefined"]["Any"] = {};

const AddUnionUnionTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["UnionType"]["Literal"] = {};
const AddUnionUnionTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["UnionType"]["Object"] = {};
const AddUnionUnionTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["UnionType"]["String"] = {};
const AddUnionUnionTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["UnionType"]["Number"] = {};
const AddUnionUnionTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["UnionType"]["Boolean"] = {};
const AddUnionUnionTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["UnionType"]["Any"] = {};

const AddUnionIntersectionTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["IntersectionType"]["Literal"] = {};
const AddUnionIntersectionTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["IntersectionType"]["Object"] = {};
const AddUnionIntersectionTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["IntersectionType"]["String"] = {};
const AddUnionIntersectionTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["IntersectionType"]["Number"] = {};
const AddUnionIntersectionTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["IntersectionType"]["Boolean"] = {};
const AddUnionIntersectionTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["IntersectionType"]["Any"] = {};

const AddUnionTypeLiteralLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeLiteral"]["Literal"] = {};
const AddUnionTypeLiteralObjectToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeLiteral"]["Object"] = {};
const AddUnionTypeLiteralStringToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeLiteral"]["String"] = {};
const AddUnionTypeLiteralNumberToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeLiteral"]["Number"] = {};
const AddUnionTypeLiteralBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeLiteral"]["Boolean"] = {};
const AddUnionTypeLiteralAnyToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TypeLiteral"]["Any"] = {};

const AddUnionTupleTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TupleType"]["Literal"] = {};
const AddUnionTupleTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TupleType"]["Object"] = {};
const AddUnionTupleTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TupleType"]["String"] = {};
const AddUnionTupleTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TupleType"]["Number"] = {};
const AddUnionTupleTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TupleType"]["Boolean"] = {};
const AddUnionTupleTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["TupleType"]["Any"] = {};

const AddUnionArrayTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ArrayType"]["Literal"] = {};
const AddUnionArrayTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ArrayType"]["Object"] = {};
const AddUnionArrayTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ArrayType"]["String"] = {};
const AddUnionArrayTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ArrayType"]["Number"] = {};
const AddUnionArrayTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ArrayType"]["Boolean"] = {};
const AddUnionArrayTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ArrayType"]["Any"] = {};

const AddUnionFunctionTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["FunctionType"]["Literal"] = {};
const AddUnionFunctionTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["FunctionType"]["Object"] = {};
const AddUnionFunctionTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["FunctionType"]["String"] = {};
const AddUnionFunctionTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["FunctionType"]["Number"] = {};
const AddUnionFunctionTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["FunctionType"]["Boolean"] = {};
const AddUnionFunctionTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["FunctionType"]["Any"] = {};

const AddUnionConstructorTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ConstructorType"]["Literal"] = {};
const AddUnionConstructorTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ConstructorType"]["Object"] = {};
const AddUnionConstructorTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ConstructorType"]["String"] = {};
const AddUnionConstructorTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ConstructorType"]["Number"] = {};
const AddUnionConstructorTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ConstructorType"]["Boolean"] = {};
const AddUnionConstructorTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] | Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeUnionTypeString: Defaults["UnionType"]["String"] = "two"

// Changes
const AddUnionParenthesizedTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ParenthesizedType"]["Literal"] = "two";
const AddUnionParenthesizedTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ParenthesizedType"]["Object"] = "two";
const AddUnionParenthesizedTypeStringToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ParenthesizedType"]["String"] = "two";
const AddUnionParenthesizedTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ParenthesizedType"]["Number"] = "two";
const AddUnionParenthesizedTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ParenthesizedType"]["Boolean"] = "two";
const AddUnionParenthesizedTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ParenthesizedType"]["Any"] = "two";

const AddUnionTypeReferenceBuiltinLiteralToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Literal"] = "two";
const AddUnionTypeReferenceBuiltinObjectToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Object"] = "two";
const AddUnionTypeReferenceBuiltinStringToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeReferenceBuiltin"]["String"] = "two";
const AddUnionTypeReferenceBuiltinNumberToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Number"] = "two";
const AddUnionTypeReferenceBuiltinBooleanToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = "two";
const AddUnionTypeReferenceBuiltinAnyToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Any"] = "two";

const AddUnionTypeReferencePredefinedLiteralToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeReferencePredefined"]["Literal"] = "two";
const AddUnionTypeReferencePredefinedObjectToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeReferencePredefined"]["Object"] = "two";
const AddUnionTypeReferencePredefinedStringToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeReferencePredefined"]["String"] = "two";
const AddUnionTypeReferencePredefinedNumberToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeReferencePredefined"]["Number"] = "two";
const AddUnionTypeReferencePredefinedBooleanToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeReferencePredefined"]["Boolean"] = "two";
const AddUnionTypeReferencePredefinedAnyToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeReferencePredefined"]["Any"] = "two";

const AddUnionUnionTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["UnionType"]["Literal"] = "two";
const AddUnionUnionTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["UnionType"]["Object"] = "two";
const AddUnionUnionTypeStringToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["UnionType"]["String"] = "two";
const AddUnionUnionTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["UnionType"]["Number"] = "two";
const AddUnionUnionTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["UnionType"]["Boolean"] = "two";
const AddUnionUnionTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["UnionType"]["Any"] = "two";

const AddUnionIntersectionTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["IntersectionType"]["Literal"] = "two";
const AddUnionIntersectionTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["IntersectionType"]["Object"] = "two";
const AddUnionIntersectionTypeStringToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["IntersectionType"]["String"] = "two";
const AddUnionIntersectionTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["IntersectionType"]["Number"] = "two";
const AddUnionIntersectionTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["IntersectionType"]["Boolean"] = "two";
const AddUnionIntersectionTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["IntersectionType"]["Any"] = "two";

const AddUnionTypeLiteralLiteralToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeLiteral"]["Literal"] = "two";
const AddUnionTypeLiteralObjectToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeLiteral"]["Object"] = "two";
const AddUnionTypeLiteralStringToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeLiteral"]["String"] = "two";
const AddUnionTypeLiteralNumberToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeLiteral"]["Number"] = "two";
const AddUnionTypeLiteralBooleanToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeLiteral"]["Boolean"] = "two";
const AddUnionTypeLiteralAnyToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TypeLiteral"]["Any"] = "two";

const AddUnionTupleTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TupleType"]["Literal"] = "two";
const AddUnionTupleTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TupleType"]["Object"] = "two";
const AddUnionTupleTypeStringToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TupleType"]["String"] = "two";
const AddUnionTupleTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TupleType"]["Number"] = "two";
const AddUnionTupleTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TupleType"]["Boolean"] = "two";
const AddUnionTupleTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["TupleType"]["Any"] = "two";

const AddUnionArrayTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ArrayType"]["Literal"] = "two";
const AddUnionArrayTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ArrayType"]["Object"] = "two";
const AddUnionArrayTypeStringToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ArrayType"]["String"] = "two";
const AddUnionArrayTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ArrayType"]["Number"] = "two";
const AddUnionArrayTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ArrayType"]["Boolean"] = "two";
const AddUnionArrayTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ArrayType"]["Any"] = "two";

const AddUnionFunctionTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["FunctionType"]["Literal"] = "two";
const AddUnionFunctionTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["FunctionType"]["Object"] = "two";
const AddUnionFunctionTypeStringToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["FunctionType"]["String"] = "two";
const AddUnionFunctionTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["FunctionType"]["Number"] = "two";
const AddUnionFunctionTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["FunctionType"]["Boolean"] = "two";
const AddUnionFunctionTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["FunctionType"]["Any"] = "two";

const AddUnionConstructorTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ConstructorType"]["Literal"] = "two";
const AddUnionConstructorTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ConstructorType"]["Object"] = "two";
const AddUnionConstructorTypeStringToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ConstructorType"]["String"] = "two";
const AddUnionConstructorTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ConstructorType"]["Number"] = "two";
const AddUnionConstructorTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ConstructorType"]["Boolean"] = "two";
const AddUnionConstructorTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] | Defaults["ConstructorType"]["Any"] = "two";

// Initial Value
const TypeUnionTypeNumber: Defaults["UnionType"]["Number"] = 2

// Changes
const AddUnionParenthesizedTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ParenthesizedType"]["Literal"] = 2;
const AddUnionParenthesizedTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ParenthesizedType"]["Object"] = 2;
const AddUnionParenthesizedTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ParenthesizedType"]["String"] = 2;
const AddUnionParenthesizedTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ParenthesizedType"]["Number"] = 2;
const AddUnionParenthesizedTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddUnionParenthesizedTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ParenthesizedType"]["Any"] = 2;

const AddUnionTypeReferenceBuiltinLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddUnionTypeReferenceBuiltinObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddUnionTypeReferenceBuiltinStringToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddUnionTypeReferenceBuiltinNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddUnionTypeReferenceBuiltinBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddUnionTypeReferenceBuiltinAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddUnionTypeReferencePredefinedLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddUnionTypeReferencePredefinedObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddUnionTypeReferencePredefinedStringToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeReferencePredefined"]["String"] = 2;
const AddUnionTypeReferencePredefinedNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddUnionTypeReferencePredefinedBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddUnionTypeReferencePredefinedAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddUnionUnionTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["UnionType"]["Literal"] = 2;
const AddUnionUnionTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["UnionType"]["Object"] = 2;
const AddUnionUnionTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["UnionType"]["String"] = 2;
const AddUnionUnionTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["UnionType"]["Number"] = 2;
const AddUnionUnionTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["UnionType"]["Boolean"] = 2;
const AddUnionUnionTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["UnionType"]["Any"] = 2;

const AddUnionIntersectionTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["IntersectionType"]["Literal"] = 2;
const AddUnionIntersectionTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["IntersectionType"]["Object"] = 2;
const AddUnionIntersectionTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["IntersectionType"]["String"] = 2;
const AddUnionIntersectionTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["IntersectionType"]["Number"] = 2;
const AddUnionIntersectionTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["IntersectionType"]["Boolean"] = 2;
const AddUnionIntersectionTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["IntersectionType"]["Any"] = 2;

const AddUnionTypeLiteralLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeLiteral"]["Literal"] = 2;
const AddUnionTypeLiteralObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeLiteral"]["Object"] = 2;
const AddUnionTypeLiteralStringToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeLiteral"]["String"] = 2;
const AddUnionTypeLiteralNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeLiteral"]["Number"] = 2;
const AddUnionTypeLiteralBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeLiteral"]["Boolean"] = 2;
const AddUnionTypeLiteralAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TypeLiteral"]["Any"] = 2;

const AddUnionTupleTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TupleType"]["Literal"] = 2;
const AddUnionTupleTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TupleType"]["Object"] = 2;
const AddUnionTupleTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TupleType"]["String"] = 2;
const AddUnionTupleTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TupleType"]["Number"] = 2;
const AddUnionTupleTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TupleType"]["Boolean"] = 2;
const AddUnionTupleTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["TupleType"]["Any"] = 2;

const AddUnionArrayTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ArrayType"]["Literal"] = 2;
const AddUnionArrayTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ArrayType"]["Object"] = 2;
const AddUnionArrayTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ArrayType"]["String"] = 2;
const AddUnionArrayTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ArrayType"]["Number"] = 2;
const AddUnionArrayTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ArrayType"]["Boolean"] = 2;
const AddUnionArrayTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ArrayType"]["Any"] = 2;

const AddUnionFunctionTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["FunctionType"]["Literal"] = 2;
const AddUnionFunctionTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["FunctionType"]["Object"] = 2;
const AddUnionFunctionTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["FunctionType"]["String"] = 2;
const AddUnionFunctionTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["FunctionType"]["Number"] = 2;
const AddUnionFunctionTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["FunctionType"]["Boolean"] = 2;
const AddUnionFunctionTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["FunctionType"]["Any"] = 2;

const AddUnionConstructorTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ConstructorType"]["Literal"] = 2;
const AddUnionConstructorTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ConstructorType"]["Object"] = 2;
const AddUnionConstructorTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ConstructorType"]["String"] = 2;
const AddUnionConstructorTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ConstructorType"]["Number"] = 2;
const AddUnionConstructorTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ConstructorType"]["Boolean"] = 2;
const AddUnionConstructorTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] | Defaults["ConstructorType"]["Any"] = 2;

// Initial Value
const TypeUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = true

// Changes
const AddUnionParenthesizedTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ParenthesizedType"]["Literal"] = true;
const AddUnionParenthesizedTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ParenthesizedType"]["Object"] = true;
const AddUnionParenthesizedTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ParenthesizedType"]["String"] = true;
const AddUnionParenthesizedTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ParenthesizedType"]["Number"] = true;
const AddUnionParenthesizedTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ParenthesizedType"]["Boolean"] = true;
const AddUnionParenthesizedTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ParenthesizedType"]["Any"] = true;

const AddUnionTypeReferenceBuiltinLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Literal"] = true;
const AddUnionTypeReferenceBuiltinObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Object"] = true;
const AddUnionTypeReferenceBuiltinStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["String"] = true;
const AddUnionTypeReferenceBuiltinNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Number"] = true;
const AddUnionTypeReferenceBuiltinBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = true;
const AddUnionTypeReferenceBuiltinAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Any"] = true;

const AddUnionTypeReferencePredefinedLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Literal"] = true;
const AddUnionTypeReferencePredefinedObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Object"] = true;
const AddUnionTypeReferencePredefinedStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["String"] = true;
const AddUnionTypeReferencePredefinedNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Number"] = true;
const AddUnionTypeReferencePredefinedBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Boolean"] = true;
const AddUnionTypeReferencePredefinedAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Any"] = true;

const AddUnionUnionTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["UnionType"]["Literal"] = true;
const AddUnionUnionTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["UnionType"]["Object"] = true;
const AddUnionUnionTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["UnionType"]["String"] = true;
const AddUnionUnionTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["UnionType"]["Number"] = true;
const AddUnionUnionTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["UnionType"]["Boolean"] = true;
const AddUnionUnionTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["UnionType"]["Any"] = true;

const AddUnionIntersectionTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["IntersectionType"]["Literal"] = true;
const AddUnionIntersectionTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["IntersectionType"]["Object"] = true;
const AddUnionIntersectionTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["IntersectionType"]["String"] = true;
const AddUnionIntersectionTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["IntersectionType"]["Number"] = true;
const AddUnionIntersectionTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["IntersectionType"]["Boolean"] = true;
const AddUnionIntersectionTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["IntersectionType"]["Any"] = true;

const AddUnionTypeLiteralLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeLiteral"]["Literal"] = true;
const AddUnionTypeLiteralObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeLiteral"]["Object"] = true;
const AddUnionTypeLiteralStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeLiteral"]["String"] = true;
const AddUnionTypeLiteralNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeLiteral"]["Number"] = true;
const AddUnionTypeLiteralBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeLiteral"]["Boolean"] = true;
const AddUnionTypeLiteralAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TypeLiteral"]["Any"] = true;

const AddUnionTupleTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TupleType"]["Literal"] = true;
const AddUnionTupleTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TupleType"]["Object"] = true;
const AddUnionTupleTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TupleType"]["String"] = true;
const AddUnionTupleTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TupleType"]["Number"] = true;
const AddUnionTupleTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TupleType"]["Boolean"] = true;
const AddUnionTupleTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["TupleType"]["Any"] = true;

const AddUnionArrayTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ArrayType"]["Literal"] = true;
const AddUnionArrayTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ArrayType"]["Object"] = true;
const AddUnionArrayTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ArrayType"]["String"] = true;
const AddUnionArrayTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ArrayType"]["Number"] = true;
const AddUnionArrayTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ArrayType"]["Boolean"] = true;
const AddUnionArrayTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ArrayType"]["Any"] = true;

const AddUnionFunctionTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["FunctionType"]["Literal"] = true;
const AddUnionFunctionTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["FunctionType"]["Object"] = true;
const AddUnionFunctionTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["FunctionType"]["String"] = true;
const AddUnionFunctionTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["FunctionType"]["Number"] = true;
const AddUnionFunctionTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["FunctionType"]["Boolean"] = true;
const AddUnionFunctionTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["FunctionType"]["Any"] = true;

const AddUnionConstructorTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ConstructorType"]["Literal"] = true;
const AddUnionConstructorTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ConstructorType"]["Object"] = true;
const AddUnionConstructorTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ConstructorType"]["String"] = true;
const AddUnionConstructorTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ConstructorType"]["Number"] = true;
const AddUnionConstructorTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ConstructorType"]["Boolean"] = true;
const AddUnionConstructorTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] | Defaults["ConstructorType"]["Any"] = true;

// Initial Value
const TypeUnionTypeAny: Defaults["UnionType"]["Any"] = 2

// Changes
const AddUnionParenthesizedTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ParenthesizedType"]["Literal"] = 2;
const AddUnionParenthesizedTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ParenthesizedType"]["Object"] = 2;
const AddUnionParenthesizedTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ParenthesizedType"]["String"] = 2;
const AddUnionParenthesizedTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ParenthesizedType"]["Number"] = 2;
const AddUnionParenthesizedTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddUnionParenthesizedTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ParenthesizedType"]["Any"] = 2;

const AddUnionTypeReferenceBuiltinLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddUnionTypeReferenceBuiltinObjectToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddUnionTypeReferenceBuiltinStringToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddUnionTypeReferenceBuiltinNumberToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddUnionTypeReferenceBuiltinBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddUnionTypeReferenceBuiltinAnyToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddUnionTypeReferencePredefinedLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddUnionTypeReferencePredefinedObjectToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddUnionTypeReferencePredefinedStringToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeReferencePredefined"]["String"] = 2;
const AddUnionTypeReferencePredefinedNumberToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddUnionTypeReferencePredefinedBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddUnionTypeReferencePredefinedAnyToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddUnionUnionTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["UnionType"]["Literal"] = 2;
const AddUnionUnionTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["UnionType"]["Object"] = 2;
const AddUnionUnionTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["UnionType"]["String"] = 2;
const AddUnionUnionTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["UnionType"]["Number"] = 2;
const AddUnionUnionTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["UnionType"]["Boolean"] = 2;
const AddUnionUnionTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["UnionType"]["Any"] = 2;

const AddUnionIntersectionTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["IntersectionType"]["Literal"] = 2;
const AddUnionIntersectionTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["IntersectionType"]["Object"] = 2;
const AddUnionIntersectionTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["IntersectionType"]["String"] = 2;
const AddUnionIntersectionTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["IntersectionType"]["Number"] = 2;
const AddUnionIntersectionTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["IntersectionType"]["Boolean"] = 2;
const AddUnionIntersectionTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["IntersectionType"]["Any"] = 2;

const AddUnionTypeLiteralLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeLiteral"]["Literal"] = 2;
const AddUnionTypeLiteralObjectToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeLiteral"]["Object"] = 2;
const AddUnionTypeLiteralStringToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeLiteral"]["String"] = 2;
const AddUnionTypeLiteralNumberToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeLiteral"]["Number"] = 2;
const AddUnionTypeLiteralBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeLiteral"]["Boolean"] = 2;
const AddUnionTypeLiteralAnyToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TypeLiteral"]["Any"] = 2;

const AddUnionTupleTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TupleType"]["Literal"] = 2;
const AddUnionTupleTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TupleType"]["Object"] = 2;
const AddUnionTupleTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TupleType"]["String"] = 2;
const AddUnionTupleTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TupleType"]["Number"] = 2;
const AddUnionTupleTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TupleType"]["Boolean"] = 2;
const AddUnionTupleTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["TupleType"]["Any"] = 2;

const AddUnionArrayTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ArrayType"]["Literal"] = 2;
const AddUnionArrayTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ArrayType"]["Object"] = 2;
const AddUnionArrayTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ArrayType"]["String"] = 2;
const AddUnionArrayTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ArrayType"]["Number"] = 2;
const AddUnionArrayTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ArrayType"]["Boolean"] = 2;
const AddUnionArrayTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ArrayType"]["Any"] = 2;

const AddUnionFunctionTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["FunctionType"]["Literal"] = 2;
const AddUnionFunctionTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["FunctionType"]["Object"] = 2;
const AddUnionFunctionTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["FunctionType"]["String"] = 2;
const AddUnionFunctionTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["FunctionType"]["Number"] = 2;
const AddUnionFunctionTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["FunctionType"]["Boolean"] = 2;
const AddUnionFunctionTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["FunctionType"]["Any"] = 2;

const AddUnionConstructorTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ConstructorType"]["Literal"] = 2;
const AddUnionConstructorTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ConstructorType"]["Object"] = 2;
const AddUnionConstructorTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ConstructorType"]["String"] = 2;
const AddUnionConstructorTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ConstructorType"]["Number"] = 2;
const AddUnionConstructorTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ConstructorType"]["Boolean"] = 2;
const AddUnionConstructorTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] | Defaults["ConstructorType"]["Any"] = 2;

