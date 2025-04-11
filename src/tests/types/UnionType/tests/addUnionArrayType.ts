import { Defaults } from "../../defaults";

/*
 * UnionType
 */

// Add Union - ArrayType
// Initial Value
const TypeArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = [1,1]

// Changes
const AddUnionParenthesizedTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ParenthesizedType"]["Literal"] = [1,1];
const AddUnionParenthesizedTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ParenthesizedType"]["Object"] = [1,1];
const AddUnionParenthesizedTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ParenthesizedType"]["String"] = [1,1];
const AddUnionParenthesizedTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ParenthesizedType"]["Number"] = [1,1];
const AddUnionParenthesizedTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ParenthesizedType"]["Boolean"] = [1,1];
const AddUnionParenthesizedTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ParenthesizedType"]["Any"] = [1,1];

const AddUnionTypeReferenceBuiltinLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Literal"] = [1,1];
const AddUnionTypeReferenceBuiltinObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Object"] = [1,1];
const AddUnionTypeReferenceBuiltinStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["String"] = [1,1];
const AddUnionTypeReferenceBuiltinNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Number"] = [1,1];
const AddUnionTypeReferenceBuiltinBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = [1,1];
const AddUnionTypeReferenceBuiltinAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Any"] = [1,1];

const AddUnionTypeReferencePredefinedLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeReferencePredefined"]["Literal"] = [1,1];
const AddUnionTypeReferencePredefinedObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeReferencePredefined"]["Object"] = [1,1];
const AddUnionTypeReferencePredefinedStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeReferencePredefined"]["String"] = [1,1];
const AddUnionTypeReferencePredefinedNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeReferencePredefined"]["Number"] = [1,1];
const AddUnionTypeReferencePredefinedBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeReferencePredefined"]["Boolean"] = [1,1];
const AddUnionTypeReferencePredefinedAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeReferencePredefined"]["Any"] = [1,1];

const AddUnionUnionTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["UnionType"]["Literal"] = [1,1];
const AddUnionUnionTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["UnionType"]["Object"] = [1,1];
const AddUnionUnionTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["UnionType"]["String"] = [1,1];
const AddUnionUnionTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["UnionType"]["Number"] = [1,1];
const AddUnionUnionTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["UnionType"]["Boolean"] = [1,1];
const AddUnionUnionTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["UnionType"]["Any"] = [1,1];

const AddUnionIntersectionTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["IntersectionType"]["Literal"] = [1,1];
const AddUnionIntersectionTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["IntersectionType"]["Object"] = [1,1];
const AddUnionIntersectionTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["IntersectionType"]["String"] = [1,1];
const AddUnionIntersectionTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["IntersectionType"]["Number"] = [1,1];
const AddUnionIntersectionTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["IntersectionType"]["Boolean"] = [1,1];
const AddUnionIntersectionTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["IntersectionType"]["Any"] = [1,1];

const AddUnionTypeLiteralLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeLiteral"]["Literal"] = [1,1];
const AddUnionTypeLiteralObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeLiteral"]["Object"] = [1,1];
const AddUnionTypeLiteralStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeLiteral"]["String"] = [1,1];
const AddUnionTypeLiteralNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeLiteral"]["Number"] = [1,1];
const AddUnionTypeLiteralBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeLiteral"]["Boolean"] = [1,1];
const AddUnionTypeLiteralAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TypeLiteral"]["Any"] = [1,1];

const AddUnionTupleTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TupleType"]["Literal"] = [1,1];
const AddUnionTupleTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TupleType"]["Object"] = [1,1];
const AddUnionTupleTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TupleType"]["String"] = [1,1];
const AddUnionTupleTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TupleType"]["Number"] = [1,1];
const AddUnionTupleTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TupleType"]["Boolean"] = [1,1];
const AddUnionTupleTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["TupleType"]["Any"] = [1,1];

const AddUnionArrayTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ArrayType"]["Literal"] = [1,1];
const AddUnionArrayTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ArrayType"]["Object"] = [1,1];
const AddUnionArrayTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ArrayType"]["String"] = [1,1];
const AddUnionArrayTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ArrayType"]["Number"] = [1,1];
const AddUnionArrayTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ArrayType"]["Boolean"] = [1,1];
const AddUnionArrayTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ArrayType"]["Any"] = [1,1];

const AddUnionFunctionTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["FunctionType"]["Literal"] = [1,1];
const AddUnionFunctionTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["FunctionType"]["Object"] = [1,1];
const AddUnionFunctionTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["FunctionType"]["String"] = [1,1];
const AddUnionFunctionTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["FunctionType"]["Number"] = [1,1];
const AddUnionFunctionTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["FunctionType"]["Boolean"] = [1,1];
const AddUnionFunctionTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["FunctionType"]["Any"] = [1,1];

const AddUnionConstructorTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ConstructorType"]["Literal"] = [1,1];
const AddUnionConstructorTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ConstructorType"]["Object"] = [1,1];
const AddUnionConstructorTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ConstructorType"]["String"] = [1,1];
const AddUnionConstructorTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ConstructorType"]["Number"] = [1,1];
const AddUnionConstructorTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ConstructorType"]["Boolean"] = [1,1];
const AddUnionConstructorTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] | Defaults["ConstructorType"]["Any"] = [1,1];

// Initial Value
const TypeArrayTypeObject: Defaults["ArrayType"]["Object"] = [{},{}]

// Changes
const AddUnionParenthesizedTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ParenthesizedType"]["Literal"] = [{},{}];
const AddUnionParenthesizedTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ParenthesizedType"]["Object"] = [{},{}];
const AddUnionParenthesizedTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ParenthesizedType"]["String"] = [{},{}];
const AddUnionParenthesizedTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ParenthesizedType"]["Number"] = [{},{}];
const AddUnionParenthesizedTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ParenthesizedType"]["Boolean"] = [{},{}];
const AddUnionParenthesizedTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ParenthesizedType"]["Any"] = [{},{}];

const AddUnionTypeReferenceBuiltinLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Literal"] = [{},{}];
const AddUnionTypeReferenceBuiltinObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Object"] = [{},{}];
const AddUnionTypeReferenceBuiltinStringToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeReferenceBuiltin"]["String"] = [{},{}];
const AddUnionTypeReferenceBuiltinNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Number"] = [{},{}];
const AddUnionTypeReferenceBuiltinBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = [{},{}];
const AddUnionTypeReferenceBuiltinAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Any"] = [{},{}];

const AddUnionTypeReferencePredefinedLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeReferencePredefined"]["Literal"] = [{},{}];
const AddUnionTypeReferencePredefinedObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeReferencePredefined"]["Object"] = [{},{}];
const AddUnionTypeReferencePredefinedStringToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeReferencePredefined"]["String"] = [{},{}];
const AddUnionTypeReferencePredefinedNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeReferencePredefined"]["Number"] = [{},{}];
const AddUnionTypeReferencePredefinedBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeReferencePredefined"]["Boolean"] = [{},{}];
const AddUnionTypeReferencePredefinedAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeReferencePredefined"]["Any"] = [{},{}];

const AddUnionUnionTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["UnionType"]["Literal"] = [{},{}];
const AddUnionUnionTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["UnionType"]["Object"] = [{},{}];
const AddUnionUnionTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["UnionType"]["String"] = [{},{}];
const AddUnionUnionTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["UnionType"]["Number"] = [{},{}];
const AddUnionUnionTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["UnionType"]["Boolean"] = [{},{}];
const AddUnionUnionTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["UnionType"]["Any"] = [{},{}];

const AddUnionIntersectionTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["IntersectionType"]["Literal"] = [{},{}];
const AddUnionIntersectionTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["IntersectionType"]["Object"] = [{},{}];
const AddUnionIntersectionTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["IntersectionType"]["String"] = [{},{}];
const AddUnionIntersectionTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["IntersectionType"]["Number"] = [{},{}];
const AddUnionIntersectionTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["IntersectionType"]["Boolean"] = [{},{}];
const AddUnionIntersectionTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["IntersectionType"]["Any"] = [{},{}];

const AddUnionTypeLiteralLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeLiteral"]["Literal"] = [{},{}];
const AddUnionTypeLiteralObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeLiteral"]["Object"] = [{},{}];
const AddUnionTypeLiteralStringToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeLiteral"]["String"] = [{},{}];
const AddUnionTypeLiteralNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeLiteral"]["Number"] = [{},{}];
const AddUnionTypeLiteralBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeLiteral"]["Boolean"] = [{},{}];
const AddUnionTypeLiteralAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TypeLiteral"]["Any"] = [{},{}];

const AddUnionTupleTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TupleType"]["Literal"] = [{},{}];
const AddUnionTupleTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TupleType"]["Object"] = [{},{}];
const AddUnionTupleTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TupleType"]["String"] = [{},{}];
const AddUnionTupleTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TupleType"]["Number"] = [{},{}];
const AddUnionTupleTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TupleType"]["Boolean"] = [{},{}];
const AddUnionTupleTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["TupleType"]["Any"] = [{},{}];

const AddUnionArrayTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ArrayType"]["Literal"] = [{},{}];
const AddUnionArrayTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ArrayType"]["Object"] = [{},{}];
const AddUnionArrayTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ArrayType"]["String"] = [{},{}];
const AddUnionArrayTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ArrayType"]["Number"] = [{},{}];
const AddUnionArrayTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ArrayType"]["Boolean"] = [{},{}];
const AddUnionArrayTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ArrayType"]["Any"] = [{},{}];

const AddUnionFunctionTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["FunctionType"]["Literal"] = [{},{}];
const AddUnionFunctionTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["FunctionType"]["Object"] = [{},{}];
const AddUnionFunctionTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["FunctionType"]["String"] = [{},{}];
const AddUnionFunctionTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["FunctionType"]["Number"] = [{},{}];
const AddUnionFunctionTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["FunctionType"]["Boolean"] = [{},{}];
const AddUnionFunctionTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["FunctionType"]["Any"] = [{},{}];

const AddUnionConstructorTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ConstructorType"]["Literal"] = [{},{}];
const AddUnionConstructorTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ConstructorType"]["Object"] = [{},{}];
const AddUnionConstructorTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ConstructorType"]["String"] = [{},{}];
const AddUnionConstructorTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ConstructorType"]["Number"] = [{},{}];
const AddUnionConstructorTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ConstructorType"]["Boolean"] = [{},{}];
const AddUnionConstructorTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] | Defaults["ConstructorType"]["Any"] = [{},{}];

// Initial Value
const TypeArrayTypeString: Defaults["ArrayType"]["String"] = ["two","two"]

// Changes
const AddUnionParenthesizedTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ParenthesizedType"]["Literal"] = ["two","two"];
const AddUnionParenthesizedTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ParenthesizedType"]["Object"] = ["two","two"];
const AddUnionParenthesizedTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ParenthesizedType"]["String"] = ["two","two"];
const AddUnionParenthesizedTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ParenthesizedType"]["Number"] = ["two","two"];
const AddUnionParenthesizedTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ParenthesizedType"]["Boolean"] = ["two","two"];
const AddUnionParenthesizedTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ParenthesizedType"]["Any"] = ["two","two"];

const AddUnionTypeReferenceBuiltinLiteralToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeReferenceBuiltin"]["Literal"] = ["two","two"];
const AddUnionTypeReferenceBuiltinObjectToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeReferenceBuiltin"]["Object"] = ["two","two"];
const AddUnionTypeReferenceBuiltinStringToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeReferenceBuiltin"]["String"] = ["two","two"];
const AddUnionTypeReferenceBuiltinNumberToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeReferenceBuiltin"]["Number"] = ["two","two"];
const AddUnionTypeReferenceBuiltinBooleanToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = ["two","two"];
const AddUnionTypeReferenceBuiltinAnyToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeReferenceBuiltin"]["Any"] = ["two","two"];

const AddUnionTypeReferencePredefinedLiteralToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeReferencePredefined"]["Literal"] = ["two","two"];
const AddUnionTypeReferencePredefinedObjectToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeReferencePredefined"]["Object"] = ["two","two"];
const AddUnionTypeReferencePredefinedStringToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeReferencePredefined"]["String"] = ["two","two"];
const AddUnionTypeReferencePredefinedNumberToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeReferencePredefined"]["Number"] = ["two","two"];
const AddUnionTypeReferencePredefinedBooleanToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeReferencePredefined"]["Boolean"] = ["two","two"];
const AddUnionTypeReferencePredefinedAnyToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeReferencePredefined"]["Any"] = ["two","two"];

const AddUnionUnionTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["UnionType"]["Literal"] = ["two","two"];
const AddUnionUnionTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["UnionType"]["Object"] = ["two","two"];
const AddUnionUnionTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["UnionType"]["String"] = ["two","two"];
const AddUnionUnionTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["UnionType"]["Number"] = ["two","two"];
const AddUnionUnionTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["UnionType"]["Boolean"] = ["two","two"];
const AddUnionUnionTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["UnionType"]["Any"] = ["two","two"];

const AddUnionIntersectionTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["IntersectionType"]["Literal"] = ["two","two"];
const AddUnionIntersectionTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["IntersectionType"]["Object"] = ["two","two"];
const AddUnionIntersectionTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["IntersectionType"]["String"] = ["two","two"];
const AddUnionIntersectionTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["IntersectionType"]["Number"] = ["two","two"];
const AddUnionIntersectionTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["IntersectionType"]["Boolean"] = ["two","two"];
const AddUnionIntersectionTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["IntersectionType"]["Any"] = ["two","two"];

const AddUnionTypeLiteralLiteralToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeLiteral"]["Literal"] = ["two","two"];
const AddUnionTypeLiteralObjectToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeLiteral"]["Object"] = ["two","two"];
const AddUnionTypeLiteralStringToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeLiteral"]["String"] = ["two","two"];
const AddUnionTypeLiteralNumberToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeLiteral"]["Number"] = ["two","two"];
const AddUnionTypeLiteralBooleanToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeLiteral"]["Boolean"] = ["two","two"];
const AddUnionTypeLiteralAnyToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TypeLiteral"]["Any"] = ["two","two"];

const AddUnionTupleTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TupleType"]["Literal"] = ["two","two"];
const AddUnionTupleTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TupleType"]["Object"] = ["two","two"];
const AddUnionTupleTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TupleType"]["String"] = ["two","two"];
const AddUnionTupleTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TupleType"]["Number"] = ["two","two"];
const AddUnionTupleTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TupleType"]["Boolean"] = ["two","two"];
const AddUnionTupleTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["TupleType"]["Any"] = ["two","two"];

const AddUnionArrayTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ArrayType"]["Literal"] = ["two","two"];
const AddUnionArrayTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ArrayType"]["Object"] = ["two","two"];
const AddUnionArrayTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ArrayType"]["String"] = ["two","two"];
const AddUnionArrayTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ArrayType"]["Number"] = ["two","two"];
const AddUnionArrayTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ArrayType"]["Boolean"] = ["two","two"];
const AddUnionArrayTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ArrayType"]["Any"] = ["two","two"];

const AddUnionFunctionTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["FunctionType"]["Literal"] = ["two","two"];
const AddUnionFunctionTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["FunctionType"]["Object"] = ["two","two"];
const AddUnionFunctionTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["FunctionType"]["String"] = ["two","two"];
const AddUnionFunctionTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["FunctionType"]["Number"] = ["two","two"];
const AddUnionFunctionTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["FunctionType"]["Boolean"] = ["two","two"];
const AddUnionFunctionTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["FunctionType"]["Any"] = ["two","two"];

const AddUnionConstructorTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ConstructorType"]["Literal"] = ["two","two"];
const AddUnionConstructorTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ConstructorType"]["Object"] = ["two","two"];
const AddUnionConstructorTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ConstructorType"]["String"] = ["two","two"];
const AddUnionConstructorTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ConstructorType"]["Number"] = ["two","two"];
const AddUnionConstructorTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ConstructorType"]["Boolean"] = ["two","two"];
const AddUnionConstructorTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] | Defaults["ConstructorType"]["Any"] = ["two","two"];

// Initial Value
const TypeArrayTypeNumber: Defaults["ArrayType"]["Number"] = [2,2]

// Changes
const AddUnionParenthesizedTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ParenthesizedType"]["Literal"] = [2,2];
const AddUnionParenthesizedTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ParenthesizedType"]["Object"] = [2,2];
const AddUnionParenthesizedTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ParenthesizedType"]["String"] = [2,2];
const AddUnionParenthesizedTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ParenthesizedType"]["Number"] = [2,2];
const AddUnionParenthesizedTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ParenthesizedType"]["Boolean"] = [2,2];
const AddUnionParenthesizedTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ParenthesizedType"]["Any"] = [2,2];

const AddUnionTypeReferenceBuiltinLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Literal"] = [2,2];
const AddUnionTypeReferenceBuiltinObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Object"] = [2,2];
const AddUnionTypeReferenceBuiltinStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeReferenceBuiltin"]["String"] = [2,2];
const AddUnionTypeReferenceBuiltinNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Number"] = [2,2];
const AddUnionTypeReferenceBuiltinBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = [2,2];
const AddUnionTypeReferenceBuiltinAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Any"] = [2,2];

const AddUnionTypeReferencePredefinedLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeReferencePredefined"]["Literal"] = [2,2];
const AddUnionTypeReferencePredefinedObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeReferencePredefined"]["Object"] = [2,2];
const AddUnionTypeReferencePredefinedStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeReferencePredefined"]["String"] = [2,2];
const AddUnionTypeReferencePredefinedNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeReferencePredefined"]["Number"] = [2,2];
const AddUnionTypeReferencePredefinedBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeReferencePredefined"]["Boolean"] = [2,2];
const AddUnionTypeReferencePredefinedAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeReferencePredefined"]["Any"] = [2,2];

const AddUnionUnionTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["UnionType"]["Literal"] = [2,2];
const AddUnionUnionTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["UnionType"]["Object"] = [2,2];
const AddUnionUnionTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["UnionType"]["String"] = [2,2];
const AddUnionUnionTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["UnionType"]["Number"] = [2,2];
const AddUnionUnionTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["UnionType"]["Boolean"] = [2,2];
const AddUnionUnionTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["UnionType"]["Any"] = [2,2];

const AddUnionIntersectionTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["IntersectionType"]["Literal"] = [2,2];
const AddUnionIntersectionTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["IntersectionType"]["Object"] = [2,2];
const AddUnionIntersectionTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["IntersectionType"]["String"] = [2,2];
const AddUnionIntersectionTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["IntersectionType"]["Number"] = [2,2];
const AddUnionIntersectionTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["IntersectionType"]["Boolean"] = [2,2];
const AddUnionIntersectionTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["IntersectionType"]["Any"] = [2,2];

const AddUnionTypeLiteralLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeLiteral"]["Literal"] = [2,2];
const AddUnionTypeLiteralObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeLiteral"]["Object"] = [2,2];
const AddUnionTypeLiteralStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeLiteral"]["String"] = [2,2];
const AddUnionTypeLiteralNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeLiteral"]["Number"] = [2,2];
const AddUnionTypeLiteralBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeLiteral"]["Boolean"] = [2,2];
const AddUnionTypeLiteralAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TypeLiteral"]["Any"] = [2,2];

const AddUnionTupleTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TupleType"]["Literal"] = [2,2];
const AddUnionTupleTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TupleType"]["Object"] = [2,2];
const AddUnionTupleTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TupleType"]["String"] = [2,2];
const AddUnionTupleTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TupleType"]["Number"] = [2,2];
const AddUnionTupleTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TupleType"]["Boolean"] = [2,2];
const AddUnionTupleTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["TupleType"]["Any"] = [2,2];

const AddUnionArrayTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ArrayType"]["Literal"] = [2,2];
const AddUnionArrayTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ArrayType"]["Object"] = [2,2];
const AddUnionArrayTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ArrayType"]["String"] = [2,2];
const AddUnionArrayTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ArrayType"]["Number"] = [2,2];
const AddUnionArrayTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ArrayType"]["Boolean"] = [2,2];
const AddUnionArrayTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ArrayType"]["Any"] = [2,2];

const AddUnionFunctionTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["FunctionType"]["Literal"] = [2,2];
const AddUnionFunctionTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["FunctionType"]["Object"] = [2,2];
const AddUnionFunctionTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["FunctionType"]["String"] = [2,2];
const AddUnionFunctionTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["FunctionType"]["Number"] = [2,2];
const AddUnionFunctionTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["FunctionType"]["Boolean"] = [2,2];
const AddUnionFunctionTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["FunctionType"]["Any"] = [2,2];

const AddUnionConstructorTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ConstructorType"]["Literal"] = [2,2];
const AddUnionConstructorTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ConstructorType"]["Object"] = [2,2];
const AddUnionConstructorTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ConstructorType"]["String"] = [2,2];
const AddUnionConstructorTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ConstructorType"]["Number"] = [2,2];
const AddUnionConstructorTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ConstructorType"]["Boolean"] = [2,2];
const AddUnionConstructorTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] | Defaults["ConstructorType"]["Any"] = [2,2];

// Initial Value
const TypeArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = [true,true]

// Changes
const AddUnionParenthesizedTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ParenthesizedType"]["Literal"] = [true,true];
const AddUnionParenthesizedTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ParenthesizedType"]["Object"] = [true,true];
const AddUnionParenthesizedTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ParenthesizedType"]["String"] = [true,true];
const AddUnionParenthesizedTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ParenthesizedType"]["Number"] = [true,true];
const AddUnionParenthesizedTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ParenthesizedType"]["Boolean"] = [true,true];
const AddUnionParenthesizedTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ParenthesizedType"]["Any"] = [true,true];

const AddUnionTypeReferenceBuiltinLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Literal"] = [true,true];
const AddUnionTypeReferenceBuiltinObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Object"] = [true,true];
const AddUnionTypeReferenceBuiltinStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["String"] = [true,true];
const AddUnionTypeReferenceBuiltinNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Number"] = [true,true];
const AddUnionTypeReferenceBuiltinBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = [true,true];
const AddUnionTypeReferenceBuiltinAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Any"] = [true,true];

const AddUnionTypeReferencePredefinedLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Literal"] = [true,true];
const AddUnionTypeReferencePredefinedObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Object"] = [true,true];
const AddUnionTypeReferencePredefinedStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeReferencePredefined"]["String"] = [true,true];
const AddUnionTypeReferencePredefinedNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Number"] = [true,true];
const AddUnionTypeReferencePredefinedBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Boolean"] = [true,true];
const AddUnionTypeReferencePredefinedAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Any"] = [true,true];

const AddUnionUnionTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["UnionType"]["Literal"] = [true,true];
const AddUnionUnionTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["UnionType"]["Object"] = [true,true];
const AddUnionUnionTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["UnionType"]["String"] = [true,true];
const AddUnionUnionTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["UnionType"]["Number"] = [true,true];
const AddUnionUnionTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["UnionType"]["Boolean"] = [true,true];
const AddUnionUnionTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["UnionType"]["Any"] = [true,true];

const AddUnionIntersectionTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["IntersectionType"]["Literal"] = [true,true];
const AddUnionIntersectionTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["IntersectionType"]["Object"] = [true,true];
const AddUnionIntersectionTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["IntersectionType"]["String"] = [true,true];
const AddUnionIntersectionTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["IntersectionType"]["Number"] = [true,true];
const AddUnionIntersectionTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["IntersectionType"]["Boolean"] = [true,true];
const AddUnionIntersectionTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["IntersectionType"]["Any"] = [true,true];

const AddUnionTypeLiteralLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeLiteral"]["Literal"] = [true,true];
const AddUnionTypeLiteralObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeLiteral"]["Object"] = [true,true];
const AddUnionTypeLiteralStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeLiteral"]["String"] = [true,true];
const AddUnionTypeLiteralNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeLiteral"]["Number"] = [true,true];
const AddUnionTypeLiteralBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeLiteral"]["Boolean"] = [true,true];
const AddUnionTypeLiteralAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TypeLiteral"]["Any"] = [true,true];

const AddUnionTupleTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TupleType"]["Literal"] = [true,true];
const AddUnionTupleTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TupleType"]["Object"] = [true,true];
const AddUnionTupleTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TupleType"]["String"] = [true,true];
const AddUnionTupleTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TupleType"]["Number"] = [true,true];
const AddUnionTupleTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TupleType"]["Boolean"] = [true,true];
const AddUnionTupleTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["TupleType"]["Any"] = [true,true];

const AddUnionArrayTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ArrayType"]["Literal"] = [true,true];
const AddUnionArrayTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ArrayType"]["Object"] = [true,true];
const AddUnionArrayTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ArrayType"]["String"] = [true,true];
const AddUnionArrayTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ArrayType"]["Number"] = [true,true];
const AddUnionArrayTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ArrayType"]["Boolean"] = [true,true];
const AddUnionArrayTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ArrayType"]["Any"] = [true,true];

const AddUnionFunctionTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["FunctionType"]["Literal"] = [true,true];
const AddUnionFunctionTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["FunctionType"]["Object"] = [true,true];
const AddUnionFunctionTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["FunctionType"]["String"] = [true,true];
const AddUnionFunctionTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["FunctionType"]["Number"] = [true,true];
const AddUnionFunctionTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["FunctionType"]["Boolean"] = [true,true];
const AddUnionFunctionTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["FunctionType"]["Any"] = [true,true];

const AddUnionConstructorTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ConstructorType"]["Literal"] = [true,true];
const AddUnionConstructorTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ConstructorType"]["Object"] = [true,true];
const AddUnionConstructorTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ConstructorType"]["String"] = [true,true];
const AddUnionConstructorTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ConstructorType"]["Number"] = [true,true];
const AddUnionConstructorTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ConstructorType"]["Boolean"] = [true,true];
const AddUnionConstructorTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] | Defaults["ConstructorType"]["Any"] = [true,true];

// Initial Value
const TypeArrayTypeAny: Defaults["ArrayType"]["Any"] = [2,2]

// Changes
const AddUnionParenthesizedTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ParenthesizedType"]["Literal"] = [2,2];
const AddUnionParenthesizedTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ParenthesizedType"]["Object"] = [2,2];
const AddUnionParenthesizedTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ParenthesizedType"]["String"] = [2,2];
const AddUnionParenthesizedTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ParenthesizedType"]["Number"] = [2,2];
const AddUnionParenthesizedTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ParenthesizedType"]["Boolean"] = [2,2];
const AddUnionParenthesizedTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ParenthesizedType"]["Any"] = [2,2];

const AddUnionTypeReferenceBuiltinLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Literal"] = [2,2];
const AddUnionTypeReferenceBuiltinObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Object"] = [2,2];
const AddUnionTypeReferenceBuiltinStringToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeReferenceBuiltin"]["String"] = [2,2];
const AddUnionTypeReferenceBuiltinNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Number"] = [2,2];
const AddUnionTypeReferenceBuiltinBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = [2,2];
const AddUnionTypeReferenceBuiltinAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Any"] = [2,2];

const AddUnionTypeReferencePredefinedLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeReferencePredefined"]["Literal"] = [2,2];
const AddUnionTypeReferencePredefinedObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeReferencePredefined"]["Object"] = [2,2];
const AddUnionTypeReferencePredefinedStringToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeReferencePredefined"]["String"] = [2,2];
const AddUnionTypeReferencePredefinedNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeReferencePredefined"]["Number"] = [2,2];
const AddUnionTypeReferencePredefinedBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeReferencePredefined"]["Boolean"] = [2,2];
const AddUnionTypeReferencePredefinedAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeReferencePredefined"]["Any"] = [2,2];

const AddUnionUnionTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["UnionType"]["Literal"] = [2,2];
const AddUnionUnionTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["UnionType"]["Object"] = [2,2];
const AddUnionUnionTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["UnionType"]["String"] = [2,2];
const AddUnionUnionTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["UnionType"]["Number"] = [2,2];
const AddUnionUnionTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["UnionType"]["Boolean"] = [2,2];
const AddUnionUnionTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["UnionType"]["Any"] = [2,2];

const AddUnionIntersectionTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["IntersectionType"]["Literal"] = [2,2];
const AddUnionIntersectionTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["IntersectionType"]["Object"] = [2,2];
const AddUnionIntersectionTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["IntersectionType"]["String"] = [2,2];
const AddUnionIntersectionTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["IntersectionType"]["Number"] = [2,2];
const AddUnionIntersectionTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["IntersectionType"]["Boolean"] = [2,2];
const AddUnionIntersectionTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["IntersectionType"]["Any"] = [2,2];

const AddUnionTypeLiteralLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeLiteral"]["Literal"] = [2,2];
const AddUnionTypeLiteralObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeLiteral"]["Object"] = [2,2];
const AddUnionTypeLiteralStringToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeLiteral"]["String"] = [2,2];
const AddUnionTypeLiteralNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeLiteral"]["Number"] = [2,2];
const AddUnionTypeLiteralBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeLiteral"]["Boolean"] = [2,2];
const AddUnionTypeLiteralAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TypeLiteral"]["Any"] = [2,2];

const AddUnionTupleTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TupleType"]["Literal"] = [2,2];
const AddUnionTupleTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TupleType"]["Object"] = [2,2];
const AddUnionTupleTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TupleType"]["String"] = [2,2];
const AddUnionTupleTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TupleType"]["Number"] = [2,2];
const AddUnionTupleTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TupleType"]["Boolean"] = [2,2];
const AddUnionTupleTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["TupleType"]["Any"] = [2,2];

const AddUnionArrayTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ArrayType"]["Literal"] = [2,2];
const AddUnionArrayTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ArrayType"]["Object"] = [2,2];
const AddUnionArrayTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ArrayType"]["String"] = [2,2];
const AddUnionArrayTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ArrayType"]["Number"] = [2,2];
const AddUnionArrayTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ArrayType"]["Boolean"] = [2,2];
const AddUnionArrayTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ArrayType"]["Any"] = [2,2];

const AddUnionFunctionTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["FunctionType"]["Literal"] = [2,2];
const AddUnionFunctionTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["FunctionType"]["Object"] = [2,2];
const AddUnionFunctionTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["FunctionType"]["String"] = [2,2];
const AddUnionFunctionTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["FunctionType"]["Number"] = [2,2];
const AddUnionFunctionTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["FunctionType"]["Boolean"] = [2,2];
const AddUnionFunctionTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["FunctionType"]["Any"] = [2,2];

const AddUnionConstructorTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ConstructorType"]["Literal"] = [2,2];
const AddUnionConstructorTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ConstructorType"]["Object"] = [2,2];
const AddUnionConstructorTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ConstructorType"]["String"] = [2,2];
const AddUnionConstructorTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ConstructorType"]["Number"] = [2,2];
const AddUnionConstructorTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ConstructorType"]["Boolean"] = [2,2];
const AddUnionConstructorTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] | Defaults["ConstructorType"]["Any"] = [2,2];

