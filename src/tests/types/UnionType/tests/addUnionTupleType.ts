import { Defaults } from "../../defaults";

/*
 * UnionType
 */

// Add Union - TupleType
// Initial Value
const TypeTupleTypeLiteral: Defaults["TupleType"]["Literal"] = [1]

// Changes
const AddUnionParenthesizedTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ParenthesizedType"]["Literal"] = [1];
const AddUnionParenthesizedTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ParenthesizedType"]["Object"] = [1];
const AddUnionParenthesizedTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ParenthesizedType"]["String"] = [1];
const AddUnionParenthesizedTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ParenthesizedType"]["Number"] = [1];
const AddUnionParenthesizedTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ParenthesizedType"]["Boolean"] = [1];
const AddUnionParenthesizedTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ParenthesizedType"]["Any"] = [1];

const AddUnionTypeReferenceBuiltinLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Literal"] = [1];
const AddUnionTypeReferenceBuiltinObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Object"] = [1];
const AddUnionTypeReferenceBuiltinStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["String"] = [1];
const AddUnionTypeReferenceBuiltinNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Number"] = [1];
const AddUnionTypeReferenceBuiltinBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = [1];
const AddUnionTypeReferenceBuiltinAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Any"] = [1];

const AddUnionTypeReferencePredefinedLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeReferencePredefined"]["Literal"] = [1];
const AddUnionTypeReferencePredefinedObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeReferencePredefined"]["Object"] = [1];
const AddUnionTypeReferencePredefinedStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeReferencePredefined"]["String"] = [1];
const AddUnionTypeReferencePredefinedNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeReferencePredefined"]["Number"] = [1];
const AddUnionTypeReferencePredefinedBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeReferencePredefined"]["Boolean"] = [1];
const AddUnionTypeReferencePredefinedAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeReferencePredefined"]["Any"] = [1];

const AddUnionUnionTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["UnionType"]["Literal"] = [1];
const AddUnionUnionTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["UnionType"]["Object"] = [1];
const AddUnionUnionTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["UnionType"]["String"] = [1];
const AddUnionUnionTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["UnionType"]["Number"] = [1];
const AddUnionUnionTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["UnionType"]["Boolean"] = [1];
const AddUnionUnionTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["UnionType"]["Any"] = [1];

const AddUnionIntersectionTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["IntersectionType"]["Literal"] = [1];
const AddUnionIntersectionTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["IntersectionType"]["Object"] = [1];
const AddUnionIntersectionTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["IntersectionType"]["String"] = [1];
const AddUnionIntersectionTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["IntersectionType"]["Number"] = [1];
const AddUnionIntersectionTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["IntersectionType"]["Boolean"] = [1];
const AddUnionIntersectionTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["IntersectionType"]["Any"] = [1];

const AddUnionTypeLiteralLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeLiteral"]["Literal"] = [1];
const AddUnionTypeLiteralObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeLiteral"]["Object"] = [1];
const AddUnionTypeLiteralStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeLiteral"]["String"] = [1];
const AddUnionTypeLiteralNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeLiteral"]["Number"] = [1];
const AddUnionTypeLiteralBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeLiteral"]["Boolean"] = [1];
const AddUnionTypeLiteralAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TypeLiteral"]["Any"] = [1];

const AddUnionTupleTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TupleType"]["Literal"] = [1];
const AddUnionTupleTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TupleType"]["Object"] = [1];
const AddUnionTupleTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TupleType"]["String"] = [1];
const AddUnionTupleTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TupleType"]["Number"] = [1];
const AddUnionTupleTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TupleType"]["Boolean"] = [1];
const AddUnionTupleTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["TupleType"]["Any"] = [1];

const AddUnionArrayTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ArrayType"]["Literal"] = [1];
const AddUnionArrayTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ArrayType"]["Object"] = [1];
const AddUnionArrayTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ArrayType"]["String"] = [1];
const AddUnionArrayTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ArrayType"]["Number"] = [1];
const AddUnionArrayTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ArrayType"]["Boolean"] = [1];
const AddUnionArrayTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ArrayType"]["Any"] = [1];

const AddUnionFunctionTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["FunctionType"]["Literal"] = [1];
const AddUnionFunctionTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["FunctionType"]["Object"] = [1];
const AddUnionFunctionTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["FunctionType"]["String"] = [1];
const AddUnionFunctionTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["FunctionType"]["Number"] = [1];
const AddUnionFunctionTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["FunctionType"]["Boolean"] = [1];
const AddUnionFunctionTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["FunctionType"]["Any"] = [1];

const AddUnionConstructorTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ConstructorType"]["Literal"] = [1];
const AddUnionConstructorTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ConstructorType"]["Object"] = [1];
const AddUnionConstructorTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ConstructorType"]["String"] = [1];
const AddUnionConstructorTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ConstructorType"]["Number"] = [1];
const AddUnionConstructorTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ConstructorType"]["Boolean"] = [1];
const AddUnionConstructorTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] | Defaults["ConstructorType"]["Any"] = [1];

// Initial Value
const TypeTupleTypeObject: Defaults["TupleType"]["Object"] = [{}]

// Changes
const AddUnionParenthesizedTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ParenthesizedType"]["Literal"] = [{}];
const AddUnionParenthesizedTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ParenthesizedType"]["Object"] = [{}];
const AddUnionParenthesizedTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ParenthesizedType"]["String"] = [{}];
const AddUnionParenthesizedTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ParenthesizedType"]["Number"] = [{}];
const AddUnionParenthesizedTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ParenthesizedType"]["Boolean"] = [{}];
const AddUnionParenthesizedTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ParenthesizedType"]["Any"] = [{}];

const AddUnionTypeReferenceBuiltinLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Literal"] = [{}];
const AddUnionTypeReferenceBuiltinObjectToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Object"] = [{}];
const AddUnionTypeReferenceBuiltinStringToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeReferenceBuiltin"]["String"] = [{}];
const AddUnionTypeReferenceBuiltinNumberToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Number"] = [{}];
const AddUnionTypeReferenceBuiltinBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = [{}];
const AddUnionTypeReferenceBuiltinAnyToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Any"] = [{}];

const AddUnionTypeReferencePredefinedLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeReferencePredefined"]["Literal"] = [{}];
const AddUnionTypeReferencePredefinedObjectToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeReferencePredefined"]["Object"] = [{}];
const AddUnionTypeReferencePredefinedStringToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeReferencePredefined"]["String"] = [{}];
const AddUnionTypeReferencePredefinedNumberToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeReferencePredefined"]["Number"] = [{}];
const AddUnionTypeReferencePredefinedBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeReferencePredefined"]["Boolean"] = [{}];
const AddUnionTypeReferencePredefinedAnyToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeReferencePredefined"]["Any"] = [{}];

const AddUnionUnionTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["UnionType"]["Literal"] = [{}];
const AddUnionUnionTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["UnionType"]["Object"] = [{}];
const AddUnionUnionTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["UnionType"]["String"] = [{}];
const AddUnionUnionTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["UnionType"]["Number"] = [{}];
const AddUnionUnionTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["UnionType"]["Boolean"] = [{}];
const AddUnionUnionTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["UnionType"]["Any"] = [{}];

const AddUnionIntersectionTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["IntersectionType"]["Literal"] = [{}];
const AddUnionIntersectionTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["IntersectionType"]["Object"] = [{}];
const AddUnionIntersectionTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["IntersectionType"]["String"] = [{}];
const AddUnionIntersectionTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["IntersectionType"]["Number"] = [{}];
const AddUnionIntersectionTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["IntersectionType"]["Boolean"] = [{}];
const AddUnionIntersectionTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["IntersectionType"]["Any"] = [{}];

const AddUnionTypeLiteralLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeLiteral"]["Literal"] = [{}];
const AddUnionTypeLiteralObjectToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeLiteral"]["Object"] = [{}];
const AddUnionTypeLiteralStringToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeLiteral"]["String"] = [{}];
const AddUnionTypeLiteralNumberToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeLiteral"]["Number"] = [{}];
const AddUnionTypeLiteralBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeLiteral"]["Boolean"] = [{}];
const AddUnionTypeLiteralAnyToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TypeLiteral"]["Any"] = [{}];

const AddUnionTupleTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TupleType"]["Literal"] = [{}];
const AddUnionTupleTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TupleType"]["Object"] = [{}];
const AddUnionTupleTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TupleType"]["String"] = [{}];
const AddUnionTupleTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TupleType"]["Number"] = [{}];
const AddUnionTupleTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TupleType"]["Boolean"] = [{}];
const AddUnionTupleTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["TupleType"]["Any"] = [{}];

const AddUnionArrayTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ArrayType"]["Literal"] = [{}];
const AddUnionArrayTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ArrayType"]["Object"] = [{}];
const AddUnionArrayTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ArrayType"]["String"] = [{}];
const AddUnionArrayTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ArrayType"]["Number"] = [{}];
const AddUnionArrayTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ArrayType"]["Boolean"] = [{}];
const AddUnionArrayTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ArrayType"]["Any"] = [{}];

const AddUnionFunctionTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["FunctionType"]["Literal"] = [{}];
const AddUnionFunctionTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["FunctionType"]["Object"] = [{}];
const AddUnionFunctionTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["FunctionType"]["String"] = [{}];
const AddUnionFunctionTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["FunctionType"]["Number"] = [{}];
const AddUnionFunctionTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["FunctionType"]["Boolean"] = [{}];
const AddUnionFunctionTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["FunctionType"]["Any"] = [{}];

const AddUnionConstructorTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ConstructorType"]["Literal"] = [{}];
const AddUnionConstructorTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ConstructorType"]["Object"] = [{}];
const AddUnionConstructorTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ConstructorType"]["String"] = [{}];
const AddUnionConstructorTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ConstructorType"]["Number"] = [{}];
const AddUnionConstructorTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ConstructorType"]["Boolean"] = [{}];
const AddUnionConstructorTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] | Defaults["ConstructorType"]["Any"] = [{}];

// Initial Value
const TypeTupleTypeString: Defaults["TupleType"]["String"] = ["two"]

// Changes
const AddUnionParenthesizedTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ParenthesizedType"]["Literal"] = ["two"];
const AddUnionParenthesizedTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ParenthesizedType"]["Object"] = ["two"];
const AddUnionParenthesizedTypeStringToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ParenthesizedType"]["String"] = ["two"];
const AddUnionParenthesizedTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ParenthesizedType"]["Number"] = ["two"];
const AddUnionParenthesizedTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ParenthesizedType"]["Boolean"] = ["two"];
const AddUnionParenthesizedTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ParenthesizedType"]["Any"] = ["two"];

const AddUnionTypeReferenceBuiltinLiteralToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeReferenceBuiltin"]["Literal"] = ["two"];
const AddUnionTypeReferenceBuiltinObjectToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeReferenceBuiltin"]["Object"] = ["two"];
const AddUnionTypeReferenceBuiltinStringToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeReferenceBuiltin"]["String"] = ["two"];
const AddUnionTypeReferenceBuiltinNumberToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeReferenceBuiltin"]["Number"] = ["two"];
const AddUnionTypeReferenceBuiltinBooleanToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = ["two"];
const AddUnionTypeReferenceBuiltinAnyToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeReferenceBuiltin"]["Any"] = ["two"];

const AddUnionTypeReferencePredefinedLiteralToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeReferencePredefined"]["Literal"] = ["two"];
const AddUnionTypeReferencePredefinedObjectToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeReferencePredefined"]["Object"] = ["two"];
const AddUnionTypeReferencePredefinedStringToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeReferencePredefined"]["String"] = ["two"];
const AddUnionTypeReferencePredefinedNumberToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeReferencePredefined"]["Number"] = ["two"];
const AddUnionTypeReferencePredefinedBooleanToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeReferencePredefined"]["Boolean"] = ["two"];
const AddUnionTypeReferencePredefinedAnyToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeReferencePredefined"]["Any"] = ["two"];

const AddUnionUnionTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["UnionType"]["Literal"] = ["two"];
const AddUnionUnionTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["UnionType"]["Object"] = ["two"];
const AddUnionUnionTypeStringToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["UnionType"]["String"] = ["two"];
const AddUnionUnionTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["UnionType"]["Number"] = ["two"];
const AddUnionUnionTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["UnionType"]["Boolean"] = ["two"];
const AddUnionUnionTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["UnionType"]["Any"] = ["two"];

const AddUnionIntersectionTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["IntersectionType"]["Literal"] = ["two"];
const AddUnionIntersectionTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["IntersectionType"]["Object"] = ["two"];
const AddUnionIntersectionTypeStringToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["IntersectionType"]["String"] = ["two"];
const AddUnionIntersectionTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["IntersectionType"]["Number"] = ["two"];
const AddUnionIntersectionTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["IntersectionType"]["Boolean"] = ["two"];
const AddUnionIntersectionTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["IntersectionType"]["Any"] = ["two"];

const AddUnionTypeLiteralLiteralToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeLiteral"]["Literal"] = ["two"];
const AddUnionTypeLiteralObjectToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeLiteral"]["Object"] = ["two"];
const AddUnionTypeLiteralStringToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeLiteral"]["String"] = ["two"];
const AddUnionTypeLiteralNumberToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeLiteral"]["Number"] = ["two"];
const AddUnionTypeLiteralBooleanToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeLiteral"]["Boolean"] = ["two"];
const AddUnionTypeLiteralAnyToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TypeLiteral"]["Any"] = ["two"];

const AddUnionTupleTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TupleType"]["Literal"] = ["two"];
const AddUnionTupleTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TupleType"]["Object"] = ["two"];
const AddUnionTupleTypeStringToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TupleType"]["String"] = ["two"];
const AddUnionTupleTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TupleType"]["Number"] = ["two"];
const AddUnionTupleTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TupleType"]["Boolean"] = ["two"];
const AddUnionTupleTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["TupleType"]["Any"] = ["two"];

const AddUnionArrayTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ArrayType"]["Literal"] = ["two"];
const AddUnionArrayTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ArrayType"]["Object"] = ["two"];
const AddUnionArrayTypeStringToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ArrayType"]["String"] = ["two"];
const AddUnionArrayTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ArrayType"]["Number"] = ["two"];
const AddUnionArrayTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ArrayType"]["Boolean"] = ["two"];
const AddUnionArrayTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ArrayType"]["Any"] = ["two"];

const AddUnionFunctionTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["FunctionType"]["Literal"] = ["two"];
const AddUnionFunctionTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["FunctionType"]["Object"] = ["two"];
const AddUnionFunctionTypeStringToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["FunctionType"]["String"] = ["two"];
const AddUnionFunctionTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["FunctionType"]["Number"] = ["two"];
const AddUnionFunctionTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["FunctionType"]["Boolean"] = ["two"];
const AddUnionFunctionTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["FunctionType"]["Any"] = ["two"];

const AddUnionConstructorTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ConstructorType"]["Literal"] = ["two"];
const AddUnionConstructorTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ConstructorType"]["Object"] = ["two"];
const AddUnionConstructorTypeStringToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ConstructorType"]["String"] = ["two"];
const AddUnionConstructorTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ConstructorType"]["Number"] = ["two"];
const AddUnionConstructorTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ConstructorType"]["Boolean"] = ["two"];
const AddUnionConstructorTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] | Defaults["ConstructorType"]["Any"] = ["two"];

// Initial Value
const TypeTupleTypeNumber: Defaults["TupleType"]["Number"] = [2]

// Changes
const AddUnionParenthesizedTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ParenthesizedType"]["Literal"] = [2];
const AddUnionParenthesizedTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ParenthesizedType"]["Object"] = [2];
const AddUnionParenthesizedTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ParenthesizedType"]["String"] = [2];
const AddUnionParenthesizedTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ParenthesizedType"]["Number"] = [2];
const AddUnionParenthesizedTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ParenthesizedType"]["Boolean"] = [2];
const AddUnionParenthesizedTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ParenthesizedType"]["Any"] = [2];

const AddUnionTypeReferenceBuiltinLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Literal"] = [2];
const AddUnionTypeReferenceBuiltinObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Object"] = [2];
const AddUnionTypeReferenceBuiltinStringToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeReferenceBuiltin"]["String"] = [2];
const AddUnionTypeReferenceBuiltinNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Number"] = [2];
const AddUnionTypeReferenceBuiltinBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = [2];
const AddUnionTypeReferenceBuiltinAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Any"] = [2];

const AddUnionTypeReferencePredefinedLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeReferencePredefined"]["Literal"] = [2];
const AddUnionTypeReferencePredefinedObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeReferencePredefined"]["Object"] = [2];
const AddUnionTypeReferencePredefinedStringToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeReferencePredefined"]["String"] = [2];
const AddUnionTypeReferencePredefinedNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeReferencePredefined"]["Number"] = [2];
const AddUnionTypeReferencePredefinedBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeReferencePredefined"]["Boolean"] = [2];
const AddUnionTypeReferencePredefinedAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeReferencePredefined"]["Any"] = [2];

const AddUnionUnionTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["UnionType"]["Literal"] = [2];
const AddUnionUnionTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["UnionType"]["Object"] = [2];
const AddUnionUnionTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["UnionType"]["String"] = [2];
const AddUnionUnionTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["UnionType"]["Number"] = [2];
const AddUnionUnionTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["UnionType"]["Boolean"] = [2];
const AddUnionUnionTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["UnionType"]["Any"] = [2];

const AddUnionIntersectionTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["IntersectionType"]["Literal"] = [2];
const AddUnionIntersectionTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["IntersectionType"]["Object"] = [2];
const AddUnionIntersectionTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["IntersectionType"]["String"] = [2];
const AddUnionIntersectionTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["IntersectionType"]["Number"] = [2];
const AddUnionIntersectionTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["IntersectionType"]["Boolean"] = [2];
const AddUnionIntersectionTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["IntersectionType"]["Any"] = [2];

const AddUnionTypeLiteralLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeLiteral"]["Literal"] = [2];
const AddUnionTypeLiteralObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeLiteral"]["Object"] = [2];
const AddUnionTypeLiteralStringToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeLiteral"]["String"] = [2];
const AddUnionTypeLiteralNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeLiteral"]["Number"] = [2];
const AddUnionTypeLiteralBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeLiteral"]["Boolean"] = [2];
const AddUnionTypeLiteralAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TypeLiteral"]["Any"] = [2];

const AddUnionTupleTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TupleType"]["Literal"] = [2];
const AddUnionTupleTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TupleType"]["Object"] = [2];
const AddUnionTupleTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TupleType"]["String"] = [2];
const AddUnionTupleTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TupleType"]["Number"] = [2];
const AddUnionTupleTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TupleType"]["Boolean"] = [2];
const AddUnionTupleTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["TupleType"]["Any"] = [2];

const AddUnionArrayTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ArrayType"]["Literal"] = [2];
const AddUnionArrayTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ArrayType"]["Object"] = [2];
const AddUnionArrayTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ArrayType"]["String"] = [2];
const AddUnionArrayTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ArrayType"]["Number"] = [2];
const AddUnionArrayTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ArrayType"]["Boolean"] = [2];
const AddUnionArrayTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ArrayType"]["Any"] = [2];

const AddUnionFunctionTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["FunctionType"]["Literal"] = [2];
const AddUnionFunctionTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["FunctionType"]["Object"] = [2];
const AddUnionFunctionTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["FunctionType"]["String"] = [2];
const AddUnionFunctionTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["FunctionType"]["Number"] = [2];
const AddUnionFunctionTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["FunctionType"]["Boolean"] = [2];
const AddUnionFunctionTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["FunctionType"]["Any"] = [2];

const AddUnionConstructorTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ConstructorType"]["Literal"] = [2];
const AddUnionConstructorTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ConstructorType"]["Object"] = [2];
const AddUnionConstructorTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ConstructorType"]["String"] = [2];
const AddUnionConstructorTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ConstructorType"]["Number"] = [2];
const AddUnionConstructorTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ConstructorType"]["Boolean"] = [2];
const AddUnionConstructorTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] | Defaults["ConstructorType"]["Any"] = [2];

// Initial Value
const TypeTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = [true]

// Changes
const AddUnionParenthesizedTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ParenthesizedType"]["Literal"] = [true];
const AddUnionParenthesizedTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ParenthesizedType"]["Object"] = [true];
const AddUnionParenthesizedTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ParenthesizedType"]["String"] = [true];
const AddUnionParenthesizedTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ParenthesizedType"]["Number"] = [true];
const AddUnionParenthesizedTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ParenthesizedType"]["Boolean"] = [true];
const AddUnionParenthesizedTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ParenthesizedType"]["Any"] = [true];

const AddUnionTypeReferenceBuiltinLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Literal"] = [true];
const AddUnionTypeReferenceBuiltinObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Object"] = [true];
const AddUnionTypeReferenceBuiltinStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["String"] = [true];
const AddUnionTypeReferenceBuiltinNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Number"] = [true];
const AddUnionTypeReferenceBuiltinBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = [true];
const AddUnionTypeReferenceBuiltinAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Any"] = [true];

const AddUnionTypeReferencePredefinedLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Literal"] = [true];
const AddUnionTypeReferencePredefinedObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Object"] = [true];
const AddUnionTypeReferencePredefinedStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeReferencePredefined"]["String"] = [true];
const AddUnionTypeReferencePredefinedNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Number"] = [true];
const AddUnionTypeReferencePredefinedBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Boolean"] = [true];
const AddUnionTypeReferencePredefinedAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Any"] = [true];

const AddUnionUnionTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["UnionType"]["Literal"] = [true];
const AddUnionUnionTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["UnionType"]["Object"] = [true];
const AddUnionUnionTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["UnionType"]["String"] = [true];
const AddUnionUnionTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["UnionType"]["Number"] = [true];
const AddUnionUnionTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["UnionType"]["Boolean"] = [true];
const AddUnionUnionTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["UnionType"]["Any"] = [true];

const AddUnionIntersectionTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["IntersectionType"]["Literal"] = [true];
const AddUnionIntersectionTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["IntersectionType"]["Object"] = [true];
const AddUnionIntersectionTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["IntersectionType"]["String"] = [true];
const AddUnionIntersectionTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["IntersectionType"]["Number"] = [true];
const AddUnionIntersectionTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["IntersectionType"]["Boolean"] = [true];
const AddUnionIntersectionTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["IntersectionType"]["Any"] = [true];

const AddUnionTypeLiteralLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeLiteral"]["Literal"] = [true];
const AddUnionTypeLiteralObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeLiteral"]["Object"] = [true];
const AddUnionTypeLiteralStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeLiteral"]["String"] = [true];
const AddUnionTypeLiteralNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeLiteral"]["Number"] = [true];
const AddUnionTypeLiteralBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeLiteral"]["Boolean"] = [true];
const AddUnionTypeLiteralAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TypeLiteral"]["Any"] = [true];

const AddUnionTupleTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TupleType"]["Literal"] = [true];
const AddUnionTupleTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TupleType"]["Object"] = [true];
const AddUnionTupleTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TupleType"]["String"] = [true];
const AddUnionTupleTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TupleType"]["Number"] = [true];
const AddUnionTupleTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TupleType"]["Boolean"] = [true];
const AddUnionTupleTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["TupleType"]["Any"] = [true];

const AddUnionArrayTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ArrayType"]["Literal"] = [true];
const AddUnionArrayTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ArrayType"]["Object"] = [true];
const AddUnionArrayTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ArrayType"]["String"] = [true];
const AddUnionArrayTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ArrayType"]["Number"] = [true];
const AddUnionArrayTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ArrayType"]["Boolean"] = [true];
const AddUnionArrayTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ArrayType"]["Any"] = [true];

const AddUnionFunctionTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["FunctionType"]["Literal"] = [true];
const AddUnionFunctionTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["FunctionType"]["Object"] = [true];
const AddUnionFunctionTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["FunctionType"]["String"] = [true];
const AddUnionFunctionTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["FunctionType"]["Number"] = [true];
const AddUnionFunctionTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["FunctionType"]["Boolean"] = [true];
const AddUnionFunctionTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["FunctionType"]["Any"] = [true];

const AddUnionConstructorTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ConstructorType"]["Literal"] = [true];
const AddUnionConstructorTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ConstructorType"]["Object"] = [true];
const AddUnionConstructorTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ConstructorType"]["String"] = [true];
const AddUnionConstructorTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ConstructorType"]["Number"] = [true];
const AddUnionConstructorTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ConstructorType"]["Boolean"] = [true];
const AddUnionConstructorTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] | Defaults["ConstructorType"]["Any"] = [true];

// Initial Value
const TypeTupleTypeAny: Defaults["TupleType"]["Any"] = [2]

// Changes
const AddUnionParenthesizedTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ParenthesizedType"]["Literal"] = [2];
const AddUnionParenthesizedTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ParenthesizedType"]["Object"] = [2];
const AddUnionParenthesizedTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ParenthesizedType"]["String"] = [2];
const AddUnionParenthesizedTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ParenthesizedType"]["Number"] = [2];
const AddUnionParenthesizedTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ParenthesizedType"]["Boolean"] = [2];
const AddUnionParenthesizedTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ParenthesizedType"]["Any"] = [2];

const AddUnionTypeReferenceBuiltinLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Literal"] = [2];
const AddUnionTypeReferenceBuiltinObjectToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Object"] = [2];
const AddUnionTypeReferenceBuiltinStringToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeReferenceBuiltin"]["String"] = [2];
const AddUnionTypeReferenceBuiltinNumberToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Number"] = [2];
const AddUnionTypeReferenceBuiltinBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = [2];
const AddUnionTypeReferenceBuiltinAnyToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Any"] = [2];

const AddUnionTypeReferencePredefinedLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeReferencePredefined"]["Literal"] = [2];
const AddUnionTypeReferencePredefinedObjectToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeReferencePredefined"]["Object"] = [2];
const AddUnionTypeReferencePredefinedStringToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeReferencePredefined"]["String"] = [2];
const AddUnionTypeReferencePredefinedNumberToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeReferencePredefined"]["Number"] = [2];
const AddUnionTypeReferencePredefinedBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeReferencePredefined"]["Boolean"] = [2];
const AddUnionTypeReferencePredefinedAnyToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeReferencePredefined"]["Any"] = [2];

const AddUnionUnionTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["UnionType"]["Literal"] = [2];
const AddUnionUnionTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["UnionType"]["Object"] = [2];
const AddUnionUnionTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["UnionType"]["String"] = [2];
const AddUnionUnionTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["UnionType"]["Number"] = [2];
const AddUnionUnionTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["UnionType"]["Boolean"] = [2];
const AddUnionUnionTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["UnionType"]["Any"] = [2];

const AddUnionIntersectionTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["IntersectionType"]["Literal"] = [2];
const AddUnionIntersectionTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["IntersectionType"]["Object"] = [2];
const AddUnionIntersectionTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["IntersectionType"]["String"] = [2];
const AddUnionIntersectionTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["IntersectionType"]["Number"] = [2];
const AddUnionIntersectionTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["IntersectionType"]["Boolean"] = [2];
const AddUnionIntersectionTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["IntersectionType"]["Any"] = [2];

const AddUnionTypeLiteralLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeLiteral"]["Literal"] = [2];
const AddUnionTypeLiteralObjectToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeLiteral"]["Object"] = [2];
const AddUnionTypeLiteralStringToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeLiteral"]["String"] = [2];
const AddUnionTypeLiteralNumberToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeLiteral"]["Number"] = [2];
const AddUnionTypeLiteralBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeLiteral"]["Boolean"] = [2];
const AddUnionTypeLiteralAnyToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TypeLiteral"]["Any"] = [2];

const AddUnionTupleTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TupleType"]["Literal"] = [2];
const AddUnionTupleTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TupleType"]["Object"] = [2];
const AddUnionTupleTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TupleType"]["String"] = [2];
const AddUnionTupleTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TupleType"]["Number"] = [2];
const AddUnionTupleTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TupleType"]["Boolean"] = [2];
const AddUnionTupleTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["TupleType"]["Any"] = [2];

const AddUnionArrayTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ArrayType"]["Literal"] = [2];
const AddUnionArrayTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ArrayType"]["Object"] = [2];
const AddUnionArrayTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ArrayType"]["String"] = [2];
const AddUnionArrayTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ArrayType"]["Number"] = [2];
const AddUnionArrayTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ArrayType"]["Boolean"] = [2];
const AddUnionArrayTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ArrayType"]["Any"] = [2];

const AddUnionFunctionTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["FunctionType"]["Literal"] = [2];
const AddUnionFunctionTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["FunctionType"]["Object"] = [2];
const AddUnionFunctionTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["FunctionType"]["String"] = [2];
const AddUnionFunctionTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["FunctionType"]["Number"] = [2];
const AddUnionFunctionTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["FunctionType"]["Boolean"] = [2];
const AddUnionFunctionTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["FunctionType"]["Any"] = [2];

const AddUnionConstructorTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ConstructorType"]["Literal"] = [2];
const AddUnionConstructorTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ConstructorType"]["Object"] = [2];
const AddUnionConstructorTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ConstructorType"]["String"] = [2];
const AddUnionConstructorTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ConstructorType"]["Number"] = [2];
const AddUnionConstructorTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ConstructorType"]["Boolean"] = [2];
const AddUnionConstructorTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] | Defaults["ConstructorType"]["Any"] = [2];

