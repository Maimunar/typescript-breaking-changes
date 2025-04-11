import { Defaults } from "../../defaults";

/*
 * UnionType
 */

// Add Union - IntersectionType
// Initial Value
const TypeIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = 1

// Changes
const AddUnionParenthesizedTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ParenthesizedType"]["Literal"] = 1;
const AddUnionParenthesizedTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ParenthesizedType"]["Object"] = 1;
const AddUnionParenthesizedTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ParenthesizedType"]["String"] = 1;
const AddUnionParenthesizedTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ParenthesizedType"]["Number"] = 1;
const AddUnionParenthesizedTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ParenthesizedType"]["Boolean"] = 1;
const AddUnionParenthesizedTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ParenthesizedType"]["Any"] = 1;

const AddUnionTypeReferenceBuiltinLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 1;
const AddUnionTypeReferenceBuiltinObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Object"] = 1;
const AddUnionTypeReferenceBuiltinStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["String"] = 1;
const AddUnionTypeReferenceBuiltinNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Number"] = 1;
const AddUnionTypeReferenceBuiltinBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 1;
const AddUnionTypeReferenceBuiltinAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Any"] = 1;

const AddUnionTypeReferencePredefinedLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Literal"] = 1;
const AddUnionTypeReferencePredefinedObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Object"] = 1;
const AddUnionTypeReferencePredefinedStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeReferencePredefined"]["String"] = 1;
const AddUnionTypeReferencePredefinedNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Number"] = 1;
const AddUnionTypeReferencePredefinedBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Boolean"] = 1;
const AddUnionTypeReferencePredefinedAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Any"] = 1;

const AddUnionUnionTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["UnionType"]["Literal"] = 1;
const AddUnionUnionTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["UnionType"]["Object"] = 1;
const AddUnionUnionTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["UnionType"]["String"] = 1;
const AddUnionUnionTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["UnionType"]["Number"] = 1;
const AddUnionUnionTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["UnionType"]["Boolean"] = 1;
const AddUnionUnionTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["UnionType"]["Any"] = 1;

const AddUnionIntersectionTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["IntersectionType"]["Literal"] = 1;
const AddUnionIntersectionTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["IntersectionType"]["Object"] = 1;
const AddUnionIntersectionTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["IntersectionType"]["String"] = 1;
const AddUnionIntersectionTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["IntersectionType"]["Number"] = 1;
const AddUnionIntersectionTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["IntersectionType"]["Boolean"] = 1;
const AddUnionIntersectionTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["IntersectionType"]["Any"] = 1;

const AddUnionTypeLiteralLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeLiteral"]["Literal"] = 1;
const AddUnionTypeLiteralObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeLiteral"]["Object"] = 1;
const AddUnionTypeLiteralStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeLiteral"]["String"] = 1;
const AddUnionTypeLiteralNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeLiteral"]["Number"] = 1;
const AddUnionTypeLiteralBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeLiteral"]["Boolean"] = 1;
const AddUnionTypeLiteralAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TypeLiteral"]["Any"] = 1;

const AddUnionTupleTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TupleType"]["Literal"] = 1;
const AddUnionTupleTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TupleType"]["Object"] = 1;
const AddUnionTupleTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TupleType"]["String"] = 1;
const AddUnionTupleTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TupleType"]["Number"] = 1;
const AddUnionTupleTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TupleType"]["Boolean"] = 1;
const AddUnionTupleTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["TupleType"]["Any"] = 1;

const AddUnionArrayTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ArrayType"]["Literal"] = 1;
const AddUnionArrayTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ArrayType"]["Object"] = 1;
const AddUnionArrayTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ArrayType"]["String"] = 1;
const AddUnionArrayTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ArrayType"]["Number"] = 1;
const AddUnionArrayTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ArrayType"]["Boolean"] = 1;
const AddUnionArrayTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ArrayType"]["Any"] = 1;

const AddUnionFunctionTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["FunctionType"]["Literal"] = 1;
const AddUnionFunctionTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["FunctionType"]["Object"] = 1;
const AddUnionFunctionTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["FunctionType"]["String"] = 1;
const AddUnionFunctionTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["FunctionType"]["Number"] = 1;
const AddUnionFunctionTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["FunctionType"]["Boolean"] = 1;
const AddUnionFunctionTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["FunctionType"]["Any"] = 1;

const AddUnionConstructorTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ConstructorType"]["Literal"] = 1;
const AddUnionConstructorTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ConstructorType"]["Object"] = 1;
const AddUnionConstructorTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ConstructorType"]["String"] = 1;
const AddUnionConstructorTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ConstructorType"]["Number"] = 1;
const AddUnionConstructorTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ConstructorType"]["Boolean"] = 1;
const AddUnionConstructorTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] | Defaults["ConstructorType"]["Any"] = 1;

// Initial Value
const TypeIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = {}

// Changes
const AddUnionParenthesizedTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ParenthesizedType"]["Literal"] = {};
const AddUnionParenthesizedTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ParenthesizedType"]["Object"] = {};
const AddUnionParenthesizedTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ParenthesizedType"]["String"] = {};
const AddUnionParenthesizedTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ParenthesizedType"]["Number"] = {};
const AddUnionParenthesizedTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ParenthesizedType"]["Boolean"] = {};
const AddUnionParenthesizedTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ParenthesizedType"]["Any"] = {};

const AddUnionTypeReferenceBuiltinLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddUnionTypeReferenceBuiltinObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddUnionTypeReferenceBuiltinStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddUnionTypeReferenceBuiltinNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddUnionTypeReferenceBuiltinBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddUnionTypeReferenceBuiltinAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddUnionTypeReferencePredefinedLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddUnionTypeReferencePredefinedObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeReferencePredefined"]["Object"] = {};
const AddUnionTypeReferencePredefinedStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeReferencePredefined"]["String"] = {};
const AddUnionTypeReferencePredefinedNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeReferencePredefined"]["Number"] = {};
const AddUnionTypeReferencePredefinedBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddUnionTypeReferencePredefinedAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeReferencePredefined"]["Any"] = {};

const AddUnionUnionTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["UnionType"]["Literal"] = {};
const AddUnionUnionTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["UnionType"]["Object"] = {};
const AddUnionUnionTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["UnionType"]["String"] = {};
const AddUnionUnionTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["UnionType"]["Number"] = {};
const AddUnionUnionTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["UnionType"]["Boolean"] = {};
const AddUnionUnionTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["UnionType"]["Any"] = {};

const AddUnionIntersectionTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["IntersectionType"]["Literal"] = {};
const AddUnionIntersectionTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["IntersectionType"]["Object"] = {};
const AddUnionIntersectionTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["IntersectionType"]["String"] = {};
const AddUnionIntersectionTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["IntersectionType"]["Number"] = {};
const AddUnionIntersectionTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["IntersectionType"]["Boolean"] = {};
const AddUnionIntersectionTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["IntersectionType"]["Any"] = {};

const AddUnionTypeLiteralLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeLiteral"]["Literal"] = {};
const AddUnionTypeLiteralObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeLiteral"]["Object"] = {};
const AddUnionTypeLiteralStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeLiteral"]["String"] = {};
const AddUnionTypeLiteralNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeLiteral"]["Number"] = {};
const AddUnionTypeLiteralBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeLiteral"]["Boolean"] = {};
const AddUnionTypeLiteralAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TypeLiteral"]["Any"] = {};

const AddUnionTupleTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TupleType"]["Literal"] = {};
const AddUnionTupleTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TupleType"]["Object"] = {};
const AddUnionTupleTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TupleType"]["String"] = {};
const AddUnionTupleTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TupleType"]["Number"] = {};
const AddUnionTupleTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TupleType"]["Boolean"] = {};
const AddUnionTupleTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["TupleType"]["Any"] = {};

const AddUnionArrayTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ArrayType"]["Literal"] = {};
const AddUnionArrayTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ArrayType"]["Object"] = {};
const AddUnionArrayTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ArrayType"]["String"] = {};
const AddUnionArrayTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ArrayType"]["Number"] = {};
const AddUnionArrayTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ArrayType"]["Boolean"] = {};
const AddUnionArrayTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ArrayType"]["Any"] = {};

const AddUnionFunctionTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["FunctionType"]["Literal"] = {};
const AddUnionFunctionTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["FunctionType"]["Object"] = {};
const AddUnionFunctionTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["FunctionType"]["String"] = {};
const AddUnionFunctionTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["FunctionType"]["Number"] = {};
const AddUnionFunctionTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["FunctionType"]["Boolean"] = {};
const AddUnionFunctionTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["FunctionType"]["Any"] = {};

const AddUnionConstructorTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ConstructorType"]["Literal"] = {};
const AddUnionConstructorTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ConstructorType"]["Object"] = {};
const AddUnionConstructorTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ConstructorType"]["String"] = {};
const AddUnionConstructorTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ConstructorType"]["Number"] = {};
const AddUnionConstructorTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ConstructorType"]["Boolean"] = {};
const AddUnionConstructorTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] | Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeIntersectionTypeString: Defaults["IntersectionType"]["String"] = "two"

// Changes
const AddUnionParenthesizedTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ParenthesizedType"]["Literal"] = "two";
const AddUnionParenthesizedTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ParenthesizedType"]["Object"] = "two";
const AddUnionParenthesizedTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ParenthesizedType"]["String"] = "two";
const AddUnionParenthesizedTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ParenthesizedType"]["Number"] = "two";
const AddUnionParenthesizedTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ParenthesizedType"]["Boolean"] = "two";
const AddUnionParenthesizedTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ParenthesizedType"]["Any"] = "two";

const AddUnionTypeReferenceBuiltinLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Literal"] = "two";
const AddUnionTypeReferenceBuiltinObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Object"] = "two";
const AddUnionTypeReferenceBuiltinStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeReferenceBuiltin"]["String"] = "two";
const AddUnionTypeReferenceBuiltinNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Number"] = "two";
const AddUnionTypeReferenceBuiltinBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = "two";
const AddUnionTypeReferenceBuiltinAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Any"] = "two";

const AddUnionTypeReferencePredefinedLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeReferencePredefined"]["Literal"] = "two";
const AddUnionTypeReferencePredefinedObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeReferencePredefined"]["Object"] = "two";
const AddUnionTypeReferencePredefinedStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeReferencePredefined"]["String"] = "two";
const AddUnionTypeReferencePredefinedNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeReferencePredefined"]["Number"] = "two";
const AddUnionTypeReferencePredefinedBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeReferencePredefined"]["Boolean"] = "two";
const AddUnionTypeReferencePredefinedAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeReferencePredefined"]["Any"] = "two";

const AddUnionUnionTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["UnionType"]["Literal"] = "two";
const AddUnionUnionTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["UnionType"]["Object"] = "two";
const AddUnionUnionTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["UnionType"]["String"] = "two";
const AddUnionUnionTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["UnionType"]["Number"] = "two";
const AddUnionUnionTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["UnionType"]["Boolean"] = "two";
const AddUnionUnionTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["UnionType"]["Any"] = "two";

const AddUnionIntersectionTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["IntersectionType"]["Literal"] = "two";
const AddUnionIntersectionTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["IntersectionType"]["Object"] = "two";
const AddUnionIntersectionTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["IntersectionType"]["String"] = "two";
const AddUnionIntersectionTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["IntersectionType"]["Number"] = "two";
const AddUnionIntersectionTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["IntersectionType"]["Boolean"] = "two";
const AddUnionIntersectionTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["IntersectionType"]["Any"] = "two";

const AddUnionTypeLiteralLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeLiteral"]["Literal"] = "two";
const AddUnionTypeLiteralObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeLiteral"]["Object"] = "two";
const AddUnionTypeLiteralStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeLiteral"]["String"] = "two";
const AddUnionTypeLiteralNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeLiteral"]["Number"] = "two";
const AddUnionTypeLiteralBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeLiteral"]["Boolean"] = "two";
const AddUnionTypeLiteralAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TypeLiteral"]["Any"] = "two";

const AddUnionTupleTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TupleType"]["Literal"] = "two";
const AddUnionTupleTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TupleType"]["Object"] = "two";
const AddUnionTupleTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TupleType"]["String"] = "two";
const AddUnionTupleTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TupleType"]["Number"] = "two";
const AddUnionTupleTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TupleType"]["Boolean"] = "two";
const AddUnionTupleTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["TupleType"]["Any"] = "two";

const AddUnionArrayTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ArrayType"]["Literal"] = "two";
const AddUnionArrayTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ArrayType"]["Object"] = "two";
const AddUnionArrayTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ArrayType"]["String"] = "two";
const AddUnionArrayTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ArrayType"]["Number"] = "two";
const AddUnionArrayTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ArrayType"]["Boolean"] = "two";
const AddUnionArrayTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ArrayType"]["Any"] = "two";

const AddUnionFunctionTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["FunctionType"]["Literal"] = "two";
const AddUnionFunctionTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["FunctionType"]["Object"] = "two";
const AddUnionFunctionTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["FunctionType"]["String"] = "two";
const AddUnionFunctionTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["FunctionType"]["Number"] = "two";
const AddUnionFunctionTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["FunctionType"]["Boolean"] = "two";
const AddUnionFunctionTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["FunctionType"]["Any"] = "two";

const AddUnionConstructorTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ConstructorType"]["Literal"] = "two";
const AddUnionConstructorTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ConstructorType"]["Object"] = "two";
const AddUnionConstructorTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ConstructorType"]["String"] = "two";
const AddUnionConstructorTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ConstructorType"]["Number"] = "two";
const AddUnionConstructorTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ConstructorType"]["Boolean"] = "two";
const AddUnionConstructorTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] | Defaults["ConstructorType"]["Any"] = "two";

// Initial Value
const TypeIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = 2

// Changes
const AddUnionParenthesizedTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ParenthesizedType"]["Literal"] = 2;
const AddUnionParenthesizedTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ParenthesizedType"]["Object"] = 2;
const AddUnionParenthesizedTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ParenthesizedType"]["String"] = 2;
const AddUnionParenthesizedTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ParenthesizedType"]["Number"] = 2;
const AddUnionParenthesizedTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddUnionParenthesizedTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ParenthesizedType"]["Any"] = 2;

const AddUnionTypeReferenceBuiltinLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddUnionTypeReferenceBuiltinObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddUnionTypeReferenceBuiltinStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddUnionTypeReferenceBuiltinNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddUnionTypeReferenceBuiltinBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddUnionTypeReferenceBuiltinAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddUnionTypeReferencePredefinedLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddUnionTypeReferencePredefinedObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddUnionTypeReferencePredefinedStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeReferencePredefined"]["String"] = 2;
const AddUnionTypeReferencePredefinedNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddUnionTypeReferencePredefinedBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddUnionTypeReferencePredefinedAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddUnionUnionTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["UnionType"]["Literal"] = 2;
const AddUnionUnionTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["UnionType"]["Object"] = 2;
const AddUnionUnionTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["UnionType"]["String"] = 2;
const AddUnionUnionTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["UnionType"]["Number"] = 2;
const AddUnionUnionTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["UnionType"]["Boolean"] = 2;
const AddUnionUnionTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["UnionType"]["Any"] = 2;

const AddUnionIntersectionTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["IntersectionType"]["Literal"] = 2;
const AddUnionIntersectionTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["IntersectionType"]["Object"] = 2;
const AddUnionIntersectionTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["IntersectionType"]["String"] = 2;
const AddUnionIntersectionTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["IntersectionType"]["Number"] = 2;
const AddUnionIntersectionTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["IntersectionType"]["Boolean"] = 2;
const AddUnionIntersectionTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["IntersectionType"]["Any"] = 2;

const AddUnionTypeLiteralLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeLiteral"]["Literal"] = 2;
const AddUnionTypeLiteralObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeLiteral"]["Object"] = 2;
const AddUnionTypeLiteralStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeLiteral"]["String"] = 2;
const AddUnionTypeLiteralNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeLiteral"]["Number"] = 2;
const AddUnionTypeLiteralBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeLiteral"]["Boolean"] = 2;
const AddUnionTypeLiteralAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TypeLiteral"]["Any"] = 2;

const AddUnionTupleTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TupleType"]["Literal"] = 2;
const AddUnionTupleTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TupleType"]["Object"] = 2;
const AddUnionTupleTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TupleType"]["String"] = 2;
const AddUnionTupleTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TupleType"]["Number"] = 2;
const AddUnionTupleTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TupleType"]["Boolean"] = 2;
const AddUnionTupleTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["TupleType"]["Any"] = 2;

const AddUnionArrayTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ArrayType"]["Literal"] = 2;
const AddUnionArrayTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ArrayType"]["Object"] = 2;
const AddUnionArrayTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ArrayType"]["String"] = 2;
const AddUnionArrayTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ArrayType"]["Number"] = 2;
const AddUnionArrayTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ArrayType"]["Boolean"] = 2;
const AddUnionArrayTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ArrayType"]["Any"] = 2;

const AddUnionFunctionTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["FunctionType"]["Literal"] = 2;
const AddUnionFunctionTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["FunctionType"]["Object"] = 2;
const AddUnionFunctionTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["FunctionType"]["String"] = 2;
const AddUnionFunctionTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["FunctionType"]["Number"] = 2;
const AddUnionFunctionTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["FunctionType"]["Boolean"] = 2;
const AddUnionFunctionTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["FunctionType"]["Any"] = 2;

const AddUnionConstructorTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ConstructorType"]["Literal"] = 2;
const AddUnionConstructorTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ConstructorType"]["Object"] = 2;
const AddUnionConstructorTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ConstructorType"]["String"] = 2;
const AddUnionConstructorTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ConstructorType"]["Number"] = 2;
const AddUnionConstructorTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ConstructorType"]["Boolean"] = 2;
const AddUnionConstructorTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] | Defaults["ConstructorType"]["Any"] = 2;

// Initial Value
const TypeIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = true

// Changes
const AddUnionParenthesizedTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ParenthesizedType"]["Literal"] = true;
const AddUnionParenthesizedTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ParenthesizedType"]["Object"] = true;
const AddUnionParenthesizedTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ParenthesizedType"]["String"] = true;
const AddUnionParenthesizedTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ParenthesizedType"]["Number"] = true;
const AddUnionParenthesizedTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ParenthesizedType"]["Boolean"] = true;
const AddUnionParenthesizedTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ParenthesizedType"]["Any"] = true;

const AddUnionTypeReferenceBuiltinLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Literal"] = true;
const AddUnionTypeReferenceBuiltinObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Object"] = true;
const AddUnionTypeReferenceBuiltinStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["String"] = true;
const AddUnionTypeReferenceBuiltinNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Number"] = true;
const AddUnionTypeReferenceBuiltinBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = true;
const AddUnionTypeReferenceBuiltinAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Any"] = true;

const AddUnionTypeReferencePredefinedLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Literal"] = true;
const AddUnionTypeReferencePredefinedObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Object"] = true;
const AddUnionTypeReferencePredefinedStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["String"] = true;
const AddUnionTypeReferencePredefinedNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Number"] = true;
const AddUnionTypeReferencePredefinedBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Boolean"] = true;
const AddUnionTypeReferencePredefinedAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Any"] = true;

const AddUnionUnionTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["UnionType"]["Literal"] = true;
const AddUnionUnionTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["UnionType"]["Object"] = true;
const AddUnionUnionTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["UnionType"]["String"] = true;
const AddUnionUnionTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["UnionType"]["Number"] = true;
const AddUnionUnionTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["UnionType"]["Boolean"] = true;
const AddUnionUnionTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["UnionType"]["Any"] = true;

const AddUnionIntersectionTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["IntersectionType"]["Literal"] = true;
const AddUnionIntersectionTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["IntersectionType"]["Object"] = true;
const AddUnionIntersectionTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["IntersectionType"]["String"] = true;
const AddUnionIntersectionTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["IntersectionType"]["Number"] = true;
const AddUnionIntersectionTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["IntersectionType"]["Boolean"] = true;
const AddUnionIntersectionTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["IntersectionType"]["Any"] = true;

const AddUnionTypeLiteralLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeLiteral"]["Literal"] = true;
const AddUnionTypeLiteralObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeLiteral"]["Object"] = true;
const AddUnionTypeLiteralStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeLiteral"]["String"] = true;
const AddUnionTypeLiteralNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeLiteral"]["Number"] = true;
const AddUnionTypeLiteralBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeLiteral"]["Boolean"] = true;
const AddUnionTypeLiteralAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TypeLiteral"]["Any"] = true;

const AddUnionTupleTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TupleType"]["Literal"] = true;
const AddUnionTupleTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TupleType"]["Object"] = true;
const AddUnionTupleTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TupleType"]["String"] = true;
const AddUnionTupleTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TupleType"]["Number"] = true;
const AddUnionTupleTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TupleType"]["Boolean"] = true;
const AddUnionTupleTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["TupleType"]["Any"] = true;

const AddUnionArrayTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ArrayType"]["Literal"] = true;
const AddUnionArrayTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ArrayType"]["Object"] = true;
const AddUnionArrayTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ArrayType"]["String"] = true;
const AddUnionArrayTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ArrayType"]["Number"] = true;
const AddUnionArrayTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ArrayType"]["Boolean"] = true;
const AddUnionArrayTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ArrayType"]["Any"] = true;

const AddUnionFunctionTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["FunctionType"]["Literal"] = true;
const AddUnionFunctionTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["FunctionType"]["Object"] = true;
const AddUnionFunctionTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["FunctionType"]["String"] = true;
const AddUnionFunctionTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["FunctionType"]["Number"] = true;
const AddUnionFunctionTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["FunctionType"]["Boolean"] = true;
const AddUnionFunctionTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["FunctionType"]["Any"] = true;

const AddUnionConstructorTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ConstructorType"]["Literal"] = true;
const AddUnionConstructorTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ConstructorType"]["Object"] = true;
const AddUnionConstructorTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ConstructorType"]["String"] = true;
const AddUnionConstructorTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ConstructorType"]["Number"] = true;
const AddUnionConstructorTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ConstructorType"]["Boolean"] = true;
const AddUnionConstructorTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] | Defaults["ConstructorType"]["Any"] = true;

// Initial Value
const TypeIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = 2

// Changes
const AddUnionParenthesizedTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ParenthesizedType"]["Literal"] = 2;
const AddUnionParenthesizedTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ParenthesizedType"]["Object"] = 2;
const AddUnionParenthesizedTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ParenthesizedType"]["String"] = 2;
const AddUnionParenthesizedTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ParenthesizedType"]["Number"] = 2;
const AddUnionParenthesizedTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddUnionParenthesizedTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ParenthesizedType"]["Any"] = 2;

const AddUnionTypeReferenceBuiltinLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddUnionTypeReferenceBuiltinObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddUnionTypeReferenceBuiltinStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddUnionTypeReferenceBuiltinNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddUnionTypeReferenceBuiltinBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddUnionTypeReferenceBuiltinAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddUnionTypeReferencePredefinedLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddUnionTypeReferencePredefinedObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddUnionTypeReferencePredefinedStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeReferencePredefined"]["String"] = 2;
const AddUnionTypeReferencePredefinedNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddUnionTypeReferencePredefinedBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddUnionTypeReferencePredefinedAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddUnionUnionTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["UnionType"]["Literal"] = 2;
const AddUnionUnionTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["UnionType"]["Object"] = 2;
const AddUnionUnionTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["UnionType"]["String"] = 2;
const AddUnionUnionTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["UnionType"]["Number"] = 2;
const AddUnionUnionTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["UnionType"]["Boolean"] = 2;
const AddUnionUnionTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["UnionType"]["Any"] = 2;

const AddUnionIntersectionTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["IntersectionType"]["Literal"] = 2;
const AddUnionIntersectionTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["IntersectionType"]["Object"] = 2;
const AddUnionIntersectionTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["IntersectionType"]["String"] = 2;
const AddUnionIntersectionTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["IntersectionType"]["Number"] = 2;
const AddUnionIntersectionTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["IntersectionType"]["Boolean"] = 2;
const AddUnionIntersectionTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["IntersectionType"]["Any"] = 2;

const AddUnionTypeLiteralLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeLiteral"]["Literal"] = 2;
const AddUnionTypeLiteralObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeLiteral"]["Object"] = 2;
const AddUnionTypeLiteralStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeLiteral"]["String"] = 2;
const AddUnionTypeLiteralNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeLiteral"]["Number"] = 2;
const AddUnionTypeLiteralBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeLiteral"]["Boolean"] = 2;
const AddUnionTypeLiteralAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TypeLiteral"]["Any"] = 2;

const AddUnionTupleTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TupleType"]["Literal"] = 2;
const AddUnionTupleTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TupleType"]["Object"] = 2;
const AddUnionTupleTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TupleType"]["String"] = 2;
const AddUnionTupleTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TupleType"]["Number"] = 2;
const AddUnionTupleTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TupleType"]["Boolean"] = 2;
const AddUnionTupleTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["TupleType"]["Any"] = 2;

const AddUnionArrayTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ArrayType"]["Literal"] = 2;
const AddUnionArrayTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ArrayType"]["Object"] = 2;
const AddUnionArrayTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ArrayType"]["String"] = 2;
const AddUnionArrayTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ArrayType"]["Number"] = 2;
const AddUnionArrayTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ArrayType"]["Boolean"] = 2;
const AddUnionArrayTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ArrayType"]["Any"] = 2;

const AddUnionFunctionTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["FunctionType"]["Literal"] = 2;
const AddUnionFunctionTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["FunctionType"]["Object"] = 2;
const AddUnionFunctionTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["FunctionType"]["String"] = 2;
const AddUnionFunctionTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["FunctionType"]["Number"] = 2;
const AddUnionFunctionTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["FunctionType"]["Boolean"] = 2;
const AddUnionFunctionTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["FunctionType"]["Any"] = 2;

const AddUnionConstructorTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ConstructorType"]["Literal"] = 2;
const AddUnionConstructorTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ConstructorType"]["Object"] = 2;
const AddUnionConstructorTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ConstructorType"]["String"] = 2;
const AddUnionConstructorTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ConstructorType"]["Number"] = 2;
const AddUnionConstructorTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ConstructorType"]["Boolean"] = 2;
const AddUnionConstructorTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] | Defaults["ConstructorType"]["Any"] = 2;

