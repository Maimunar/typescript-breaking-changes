import { Defaults } from "../../defaults";

/*
 * IntersectionType
 */

// Add Intersection - TupleType
// Initial Value
const TypeTupleTypeLiteral: Defaults["TupleType"]["Literal"] = [1]

// Changes
const AddIntersectionParenthesizedTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ParenthesizedType"]["Literal"] = [1];
const AddIntersectionParenthesizedTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ParenthesizedType"]["Object"] = [1];
const AddIntersectionParenthesizedTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ParenthesizedType"]["String"] = [1];
const AddIntersectionParenthesizedTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ParenthesizedType"]["Number"] = [1];
const AddIntersectionParenthesizedTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ParenthesizedType"]["Boolean"] = [1];
const AddIntersectionParenthesizedTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ParenthesizedType"]["Any"] = [1];

const AddIntersectionTypeReferenceBuiltinLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Literal"] = [1];
const AddIntersectionTypeReferenceBuiltinObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Object"] = [1];
const AddIntersectionTypeReferenceBuiltinStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["String"] = [1];
const AddIntersectionTypeReferenceBuiltinNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Number"] = [1];
const AddIntersectionTypeReferenceBuiltinBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = [1];
const AddIntersectionTypeReferenceBuiltinAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Any"] = [1];

const AddIntersectionTypeReferencePredefinedLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeReferencePredefined"]["Literal"] = [1];
const AddIntersectionTypeReferencePredefinedObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeReferencePredefined"]["Object"] = [1];
const AddIntersectionTypeReferencePredefinedStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeReferencePredefined"]["String"] = [1];
const AddIntersectionTypeReferencePredefinedNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeReferencePredefined"]["Number"] = [1];
const AddIntersectionTypeReferencePredefinedBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeReferencePredefined"]["Boolean"] = [1];
const AddIntersectionTypeReferencePredefinedAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeReferencePredefined"]["Any"] = [1];

const AddIntersectionUnionTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["UnionType"]["Literal"] = [1];
const AddIntersectionUnionTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["UnionType"]["Object"] = [1];
const AddIntersectionUnionTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["UnionType"]["String"] = [1];
const AddIntersectionUnionTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["UnionType"]["Number"] = [1];
const AddIntersectionUnionTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["UnionType"]["Boolean"] = [1];
const AddIntersectionUnionTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["UnionType"]["Any"] = [1];

const AddIntersectionIntersectionTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["IntersectionType"]["Literal"] = [1];
const AddIntersectionIntersectionTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["IntersectionType"]["Object"] = [1];
const AddIntersectionIntersectionTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["IntersectionType"]["String"] = [1];
const AddIntersectionIntersectionTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["IntersectionType"]["Number"] = [1];
const AddIntersectionIntersectionTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["IntersectionType"]["Boolean"] = [1];
const AddIntersectionIntersectionTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["IntersectionType"]["Any"] = [1];

const AddIntersectionTypeLiteralLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeLiteral"]["Literal"] = [1];
const AddIntersectionTypeLiteralObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeLiteral"]["Object"] = [1];
const AddIntersectionTypeLiteralStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeLiteral"]["String"] = [1];
const AddIntersectionTypeLiteralNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeLiteral"]["Number"] = [1];
const AddIntersectionTypeLiteralBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeLiteral"]["Boolean"] = [1];
const AddIntersectionTypeLiteralAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TypeLiteral"]["Any"] = [1];

const AddIntersectionTupleTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TupleType"]["Literal"] = [1];
const AddIntersectionTupleTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TupleType"]["Object"] = [1];
const AddIntersectionTupleTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TupleType"]["String"] = [1];
const AddIntersectionTupleTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TupleType"]["Number"] = [1];
const AddIntersectionTupleTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TupleType"]["Boolean"] = [1];
const AddIntersectionTupleTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["TupleType"]["Any"] = [1];

const AddIntersectionArrayTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ArrayType"]["Literal"] = [1];
const AddIntersectionArrayTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ArrayType"]["Object"] = [1];
const AddIntersectionArrayTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ArrayType"]["String"] = [1];
const AddIntersectionArrayTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ArrayType"]["Number"] = [1];
const AddIntersectionArrayTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ArrayType"]["Boolean"] = [1];
const AddIntersectionArrayTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ArrayType"]["Any"] = [1];

const AddIntersectionFunctionTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["FunctionType"]["Literal"] = [1];
const AddIntersectionFunctionTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["FunctionType"]["Object"] = [1];
const AddIntersectionFunctionTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["FunctionType"]["String"] = [1];
const AddIntersectionFunctionTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["FunctionType"]["Number"] = [1];
const AddIntersectionFunctionTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["FunctionType"]["Boolean"] = [1];
const AddIntersectionFunctionTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["FunctionType"]["Any"] = [1];

const AddIntersectionConstructorTypeLiteralToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ConstructorType"]["Literal"] = [1];
const AddIntersectionConstructorTypeObjectToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ConstructorType"]["Object"] = [1];
const AddIntersectionConstructorTypeStringToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ConstructorType"]["String"] = [1];
const AddIntersectionConstructorTypeNumberToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ConstructorType"]["Number"] = [1];
const AddIntersectionConstructorTypeBooleanToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ConstructorType"]["Boolean"] = [1];
const AddIntersectionConstructorTypeAnyToTupleTypeLiteral: Defaults["TupleType"]["Literal"] & Defaults["ConstructorType"]["Any"] = [1];

// Initial Value
const TypeTupleTypeObject: Defaults["TupleType"]["Object"] = [{}]

// Changes
const AddIntersectionParenthesizedTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ParenthesizedType"]["Literal"] = [{}];
const AddIntersectionParenthesizedTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ParenthesizedType"]["Object"] = [{}];
const AddIntersectionParenthesizedTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ParenthesizedType"]["String"] = [{}];
const AddIntersectionParenthesizedTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ParenthesizedType"]["Number"] = [{}];
const AddIntersectionParenthesizedTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ParenthesizedType"]["Boolean"] = [{}];
const AddIntersectionParenthesizedTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ParenthesizedType"]["Any"] = [{}];

const AddIntersectionTypeReferenceBuiltinLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Literal"] = [{}];
const AddIntersectionTypeReferenceBuiltinObjectToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Object"] = [{}];
const AddIntersectionTypeReferenceBuiltinStringToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeReferenceBuiltin"]["String"] = [{}];
const AddIntersectionTypeReferenceBuiltinNumberToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Number"] = [{}];
const AddIntersectionTypeReferenceBuiltinBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = [{}];
const AddIntersectionTypeReferenceBuiltinAnyToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Any"] = [{}];

const AddIntersectionTypeReferencePredefinedLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeReferencePredefined"]["Literal"] = [{}];
const AddIntersectionTypeReferencePredefinedObjectToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeReferencePredefined"]["Object"] = [{}];
const AddIntersectionTypeReferencePredefinedStringToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeReferencePredefined"]["String"] = [{}];
const AddIntersectionTypeReferencePredefinedNumberToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeReferencePredefined"]["Number"] = [{}];
const AddIntersectionTypeReferencePredefinedBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeReferencePredefined"]["Boolean"] = [{}];
const AddIntersectionTypeReferencePredefinedAnyToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeReferencePredefined"]["Any"] = [{}];

const AddIntersectionUnionTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["UnionType"]["Literal"] = [{}];
const AddIntersectionUnionTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["UnionType"]["Object"] = [{}];
const AddIntersectionUnionTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["UnionType"]["String"] = [{}];
const AddIntersectionUnionTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["UnionType"]["Number"] = [{}];
const AddIntersectionUnionTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["UnionType"]["Boolean"] = [{}];
const AddIntersectionUnionTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["UnionType"]["Any"] = [{}];

const AddIntersectionIntersectionTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["IntersectionType"]["Literal"] = [{}];
const AddIntersectionIntersectionTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["IntersectionType"]["Object"] = [{}];
const AddIntersectionIntersectionTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["IntersectionType"]["String"] = [{}];
const AddIntersectionIntersectionTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["IntersectionType"]["Number"] = [{}];
const AddIntersectionIntersectionTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["IntersectionType"]["Boolean"] = [{}];
const AddIntersectionIntersectionTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["IntersectionType"]["Any"] = [{}];

const AddIntersectionTypeLiteralLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeLiteral"]["Literal"] = [{}];
const AddIntersectionTypeLiteralObjectToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeLiteral"]["Object"] = [{}];
const AddIntersectionTypeLiteralStringToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeLiteral"]["String"] = [{}];
const AddIntersectionTypeLiteralNumberToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeLiteral"]["Number"] = [{}];
const AddIntersectionTypeLiteralBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeLiteral"]["Boolean"] = [{}];
const AddIntersectionTypeLiteralAnyToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TypeLiteral"]["Any"] = [{}];

const AddIntersectionTupleTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TupleType"]["Literal"] = [{}];
const AddIntersectionTupleTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TupleType"]["Object"] = [{}];
const AddIntersectionTupleTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TupleType"]["String"] = [{}];
const AddIntersectionTupleTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TupleType"]["Number"] = [{}];
const AddIntersectionTupleTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TupleType"]["Boolean"] = [{}];
const AddIntersectionTupleTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["TupleType"]["Any"] = [{}];

const AddIntersectionArrayTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ArrayType"]["Literal"] = [{}];
const AddIntersectionArrayTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ArrayType"]["Object"] = [{}];
const AddIntersectionArrayTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ArrayType"]["String"] = [{}];
const AddIntersectionArrayTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ArrayType"]["Number"] = [{}];
const AddIntersectionArrayTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ArrayType"]["Boolean"] = [{}];
const AddIntersectionArrayTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ArrayType"]["Any"] = [{}];

const AddIntersectionFunctionTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["FunctionType"]["Literal"] = [{}];
const AddIntersectionFunctionTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["FunctionType"]["Object"] = [{}];
const AddIntersectionFunctionTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["FunctionType"]["String"] = [{}];
const AddIntersectionFunctionTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["FunctionType"]["Number"] = [{}];
const AddIntersectionFunctionTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["FunctionType"]["Boolean"] = [{}];
const AddIntersectionFunctionTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["FunctionType"]["Any"] = [{}];

const AddIntersectionConstructorTypeLiteralToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ConstructorType"]["Literal"] = [{}];
const AddIntersectionConstructorTypeObjectToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ConstructorType"]["Object"] = [{}];
const AddIntersectionConstructorTypeStringToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ConstructorType"]["String"] = [{}];
const AddIntersectionConstructorTypeNumberToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ConstructorType"]["Number"] = [{}];
const AddIntersectionConstructorTypeBooleanToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ConstructorType"]["Boolean"] = [{}];
const AddIntersectionConstructorTypeAnyToTupleTypeObject: Defaults["TupleType"]["Object"] & Defaults["ConstructorType"]["Any"] = [{}];

// Initial Value
const TypeTupleTypeString: Defaults["TupleType"]["String"] = ["two"]

// Changes
const AddIntersectionParenthesizedTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ParenthesizedType"]["Literal"] = ["two"];
const AddIntersectionParenthesizedTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ParenthesizedType"]["Object"] = ["two"];
const AddIntersectionParenthesizedTypeStringToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ParenthesizedType"]["String"] = ["two"];
const AddIntersectionParenthesizedTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ParenthesizedType"]["Number"] = ["two"];
const AddIntersectionParenthesizedTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ParenthesizedType"]["Boolean"] = ["two"];
const AddIntersectionParenthesizedTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ParenthesizedType"]["Any"] = ["two"];

const AddIntersectionTypeReferenceBuiltinLiteralToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeReferenceBuiltin"]["Literal"] = ["two"];
const AddIntersectionTypeReferenceBuiltinObjectToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeReferenceBuiltin"]["Object"] = ["two"];
const AddIntersectionTypeReferenceBuiltinStringToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeReferenceBuiltin"]["String"] = ["two"];
const AddIntersectionTypeReferenceBuiltinNumberToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeReferenceBuiltin"]["Number"] = ["two"];
const AddIntersectionTypeReferenceBuiltinBooleanToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = ["two"];
const AddIntersectionTypeReferenceBuiltinAnyToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeReferenceBuiltin"]["Any"] = ["two"];

const AddIntersectionTypeReferencePredefinedLiteralToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeReferencePredefined"]["Literal"] = ["two"];
const AddIntersectionTypeReferencePredefinedObjectToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeReferencePredefined"]["Object"] = ["two"];
const AddIntersectionTypeReferencePredefinedStringToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeReferencePredefined"]["String"] = ["two"];
const AddIntersectionTypeReferencePredefinedNumberToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeReferencePredefined"]["Number"] = ["two"];
const AddIntersectionTypeReferencePredefinedBooleanToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeReferencePredefined"]["Boolean"] = ["two"];
const AddIntersectionTypeReferencePredefinedAnyToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeReferencePredefined"]["Any"] = ["two"];

const AddIntersectionUnionTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["UnionType"]["Literal"] = ["two"];
const AddIntersectionUnionTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["UnionType"]["Object"] = ["two"];
const AddIntersectionUnionTypeStringToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["UnionType"]["String"] = ["two"];
const AddIntersectionUnionTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["UnionType"]["Number"] = ["two"];
const AddIntersectionUnionTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["UnionType"]["Boolean"] = ["two"];
const AddIntersectionUnionTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["UnionType"]["Any"] = ["two"];

const AddIntersectionIntersectionTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["IntersectionType"]["Literal"] = ["two"];
const AddIntersectionIntersectionTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["IntersectionType"]["Object"] = ["two"];
const AddIntersectionIntersectionTypeStringToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["IntersectionType"]["String"] = ["two"];
const AddIntersectionIntersectionTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["IntersectionType"]["Number"] = ["two"];
const AddIntersectionIntersectionTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["IntersectionType"]["Boolean"] = ["two"];
const AddIntersectionIntersectionTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["IntersectionType"]["Any"] = ["two"];

const AddIntersectionTypeLiteralLiteralToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeLiteral"]["Literal"] = ["two"];
const AddIntersectionTypeLiteralObjectToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeLiteral"]["Object"] = ["two"];
const AddIntersectionTypeLiteralStringToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeLiteral"]["String"] = ["two"];
const AddIntersectionTypeLiteralNumberToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeLiteral"]["Number"] = ["two"];
const AddIntersectionTypeLiteralBooleanToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeLiteral"]["Boolean"] = ["two"];
const AddIntersectionTypeLiteralAnyToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TypeLiteral"]["Any"] = ["two"];

const AddIntersectionTupleTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TupleType"]["Literal"] = ["two"];
const AddIntersectionTupleTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TupleType"]["Object"] = ["two"];
const AddIntersectionTupleTypeStringToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TupleType"]["String"] = ["two"];
const AddIntersectionTupleTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TupleType"]["Number"] = ["two"];
const AddIntersectionTupleTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TupleType"]["Boolean"] = ["two"];
const AddIntersectionTupleTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["TupleType"]["Any"] = ["two"];

const AddIntersectionArrayTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ArrayType"]["Literal"] = ["two"];
const AddIntersectionArrayTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ArrayType"]["Object"] = ["two"];
const AddIntersectionArrayTypeStringToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ArrayType"]["String"] = ["two"];
const AddIntersectionArrayTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ArrayType"]["Number"] = ["two"];
const AddIntersectionArrayTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ArrayType"]["Boolean"] = ["two"];
const AddIntersectionArrayTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ArrayType"]["Any"] = ["two"];

const AddIntersectionFunctionTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["FunctionType"]["Literal"] = ["two"];
const AddIntersectionFunctionTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["FunctionType"]["Object"] = ["two"];
const AddIntersectionFunctionTypeStringToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["FunctionType"]["String"] = ["two"];
const AddIntersectionFunctionTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["FunctionType"]["Number"] = ["two"];
const AddIntersectionFunctionTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["FunctionType"]["Boolean"] = ["two"];
const AddIntersectionFunctionTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["FunctionType"]["Any"] = ["two"];

const AddIntersectionConstructorTypeLiteralToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ConstructorType"]["Literal"] = ["two"];
const AddIntersectionConstructorTypeObjectToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ConstructorType"]["Object"] = ["two"];
const AddIntersectionConstructorTypeStringToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ConstructorType"]["String"] = ["two"];
const AddIntersectionConstructorTypeNumberToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ConstructorType"]["Number"] = ["two"];
const AddIntersectionConstructorTypeBooleanToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ConstructorType"]["Boolean"] = ["two"];
const AddIntersectionConstructorTypeAnyToTupleTypeString: Defaults["TupleType"]["String"] & Defaults["ConstructorType"]["Any"] = ["two"];

// Initial Value
const TypeTupleTypeNumber: Defaults["TupleType"]["Number"] = [2]

// Changes
const AddIntersectionParenthesizedTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ParenthesizedType"]["Literal"] = [2];
const AddIntersectionParenthesizedTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ParenthesizedType"]["Object"] = [2];
const AddIntersectionParenthesizedTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ParenthesizedType"]["String"] = [2];
const AddIntersectionParenthesizedTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ParenthesizedType"]["Number"] = [2];
const AddIntersectionParenthesizedTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ParenthesizedType"]["Boolean"] = [2];
const AddIntersectionParenthesizedTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ParenthesizedType"]["Any"] = [2];

const AddIntersectionTypeReferenceBuiltinLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Literal"] = [2];
const AddIntersectionTypeReferenceBuiltinObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Object"] = [2];
const AddIntersectionTypeReferenceBuiltinStringToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeReferenceBuiltin"]["String"] = [2];
const AddIntersectionTypeReferenceBuiltinNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Number"] = [2];
const AddIntersectionTypeReferenceBuiltinBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = [2];
const AddIntersectionTypeReferenceBuiltinAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Any"] = [2];

const AddIntersectionTypeReferencePredefinedLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeReferencePredefined"]["Literal"] = [2];
const AddIntersectionTypeReferencePredefinedObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeReferencePredefined"]["Object"] = [2];
const AddIntersectionTypeReferencePredefinedStringToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeReferencePredefined"]["String"] = [2];
const AddIntersectionTypeReferencePredefinedNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeReferencePredefined"]["Number"] = [2];
const AddIntersectionTypeReferencePredefinedBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeReferencePredefined"]["Boolean"] = [2];
const AddIntersectionTypeReferencePredefinedAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeReferencePredefined"]["Any"] = [2];

const AddIntersectionUnionTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["UnionType"]["Literal"] = [2];
const AddIntersectionUnionTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["UnionType"]["Object"] = [2];
const AddIntersectionUnionTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["UnionType"]["String"] = [2];
const AddIntersectionUnionTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["UnionType"]["Number"] = [2];
const AddIntersectionUnionTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["UnionType"]["Boolean"] = [2];
const AddIntersectionUnionTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["UnionType"]["Any"] = [2];

const AddIntersectionIntersectionTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["IntersectionType"]["Literal"] = [2];
const AddIntersectionIntersectionTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["IntersectionType"]["Object"] = [2];
const AddIntersectionIntersectionTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["IntersectionType"]["String"] = [2];
const AddIntersectionIntersectionTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["IntersectionType"]["Number"] = [2];
const AddIntersectionIntersectionTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["IntersectionType"]["Boolean"] = [2];
const AddIntersectionIntersectionTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["IntersectionType"]["Any"] = [2];

const AddIntersectionTypeLiteralLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeLiteral"]["Literal"] = [2];
const AddIntersectionTypeLiteralObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeLiteral"]["Object"] = [2];
const AddIntersectionTypeLiteralStringToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeLiteral"]["String"] = [2];
const AddIntersectionTypeLiteralNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeLiteral"]["Number"] = [2];
const AddIntersectionTypeLiteralBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeLiteral"]["Boolean"] = [2];
const AddIntersectionTypeLiteralAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TypeLiteral"]["Any"] = [2];

const AddIntersectionTupleTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TupleType"]["Literal"] = [2];
const AddIntersectionTupleTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TupleType"]["Object"] = [2];
const AddIntersectionTupleTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TupleType"]["String"] = [2];
const AddIntersectionTupleTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TupleType"]["Number"] = [2];
const AddIntersectionTupleTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TupleType"]["Boolean"] = [2];
const AddIntersectionTupleTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["TupleType"]["Any"] = [2];

const AddIntersectionArrayTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ArrayType"]["Literal"] = [2];
const AddIntersectionArrayTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ArrayType"]["Object"] = [2];
const AddIntersectionArrayTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ArrayType"]["String"] = [2];
const AddIntersectionArrayTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ArrayType"]["Number"] = [2];
const AddIntersectionArrayTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ArrayType"]["Boolean"] = [2];
const AddIntersectionArrayTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ArrayType"]["Any"] = [2];

const AddIntersectionFunctionTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["FunctionType"]["Literal"] = [2];
const AddIntersectionFunctionTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["FunctionType"]["Object"] = [2];
const AddIntersectionFunctionTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["FunctionType"]["String"] = [2];
const AddIntersectionFunctionTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["FunctionType"]["Number"] = [2];
const AddIntersectionFunctionTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["FunctionType"]["Boolean"] = [2];
const AddIntersectionFunctionTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["FunctionType"]["Any"] = [2];

const AddIntersectionConstructorTypeLiteralToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ConstructorType"]["Literal"] = [2];
const AddIntersectionConstructorTypeObjectToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ConstructorType"]["Object"] = [2];
const AddIntersectionConstructorTypeStringToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ConstructorType"]["String"] = [2];
const AddIntersectionConstructorTypeNumberToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ConstructorType"]["Number"] = [2];
const AddIntersectionConstructorTypeBooleanToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ConstructorType"]["Boolean"] = [2];
const AddIntersectionConstructorTypeAnyToTupleTypeNumber: Defaults["TupleType"]["Number"] & Defaults["ConstructorType"]["Any"] = [2];

// Initial Value
const TypeTupleTypeBoolean: Defaults["TupleType"]["Boolean"] = [true]

// Changes
const AddIntersectionParenthesizedTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ParenthesizedType"]["Literal"] = [true];
const AddIntersectionParenthesizedTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ParenthesizedType"]["Object"] = [true];
const AddIntersectionParenthesizedTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ParenthesizedType"]["String"] = [true];
const AddIntersectionParenthesizedTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ParenthesizedType"]["Number"] = [true];
const AddIntersectionParenthesizedTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ParenthesizedType"]["Boolean"] = [true];
const AddIntersectionParenthesizedTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ParenthesizedType"]["Any"] = [true];

const AddIntersectionTypeReferenceBuiltinLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Literal"] = [true];
const AddIntersectionTypeReferenceBuiltinObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Object"] = [true];
const AddIntersectionTypeReferenceBuiltinStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["String"] = [true];
const AddIntersectionTypeReferenceBuiltinNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Number"] = [true];
const AddIntersectionTypeReferenceBuiltinBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = [true];
const AddIntersectionTypeReferenceBuiltinAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Any"] = [true];

const AddIntersectionTypeReferencePredefinedLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Literal"] = [true];
const AddIntersectionTypeReferencePredefinedObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Object"] = [true];
const AddIntersectionTypeReferencePredefinedStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeReferencePredefined"]["String"] = [true];
const AddIntersectionTypeReferencePredefinedNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Number"] = [true];
const AddIntersectionTypeReferencePredefinedBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Boolean"] = [true];
const AddIntersectionTypeReferencePredefinedAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Any"] = [true];

const AddIntersectionUnionTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["UnionType"]["Literal"] = [true];
const AddIntersectionUnionTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["UnionType"]["Object"] = [true];
const AddIntersectionUnionTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["UnionType"]["String"] = [true];
const AddIntersectionUnionTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["UnionType"]["Number"] = [true];
const AddIntersectionUnionTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["UnionType"]["Boolean"] = [true];
const AddIntersectionUnionTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["UnionType"]["Any"] = [true];

const AddIntersectionIntersectionTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["IntersectionType"]["Literal"] = [true];
const AddIntersectionIntersectionTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["IntersectionType"]["Object"] = [true];
const AddIntersectionIntersectionTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["IntersectionType"]["String"] = [true];
const AddIntersectionIntersectionTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["IntersectionType"]["Number"] = [true];
const AddIntersectionIntersectionTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["IntersectionType"]["Boolean"] = [true];
const AddIntersectionIntersectionTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["IntersectionType"]["Any"] = [true];

const AddIntersectionTypeLiteralLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeLiteral"]["Literal"] = [true];
const AddIntersectionTypeLiteralObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeLiteral"]["Object"] = [true];
const AddIntersectionTypeLiteralStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeLiteral"]["String"] = [true];
const AddIntersectionTypeLiteralNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeLiteral"]["Number"] = [true];
const AddIntersectionTypeLiteralBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeLiteral"]["Boolean"] = [true];
const AddIntersectionTypeLiteralAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TypeLiteral"]["Any"] = [true];

const AddIntersectionTupleTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TupleType"]["Literal"] = [true];
const AddIntersectionTupleTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TupleType"]["Object"] = [true];
const AddIntersectionTupleTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TupleType"]["String"] = [true];
const AddIntersectionTupleTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TupleType"]["Number"] = [true];
const AddIntersectionTupleTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TupleType"]["Boolean"] = [true];
const AddIntersectionTupleTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["TupleType"]["Any"] = [true];

const AddIntersectionArrayTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ArrayType"]["Literal"] = [true];
const AddIntersectionArrayTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ArrayType"]["Object"] = [true];
const AddIntersectionArrayTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ArrayType"]["String"] = [true];
const AddIntersectionArrayTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ArrayType"]["Number"] = [true];
const AddIntersectionArrayTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ArrayType"]["Boolean"] = [true];
const AddIntersectionArrayTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ArrayType"]["Any"] = [true];

const AddIntersectionFunctionTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["FunctionType"]["Literal"] = [true];
const AddIntersectionFunctionTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["FunctionType"]["Object"] = [true];
const AddIntersectionFunctionTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["FunctionType"]["String"] = [true];
const AddIntersectionFunctionTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["FunctionType"]["Number"] = [true];
const AddIntersectionFunctionTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["FunctionType"]["Boolean"] = [true];
const AddIntersectionFunctionTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["FunctionType"]["Any"] = [true];

const AddIntersectionConstructorTypeLiteralToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ConstructorType"]["Literal"] = [true];
const AddIntersectionConstructorTypeObjectToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ConstructorType"]["Object"] = [true];
const AddIntersectionConstructorTypeStringToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ConstructorType"]["String"] = [true];
const AddIntersectionConstructorTypeNumberToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ConstructorType"]["Number"] = [true];
const AddIntersectionConstructorTypeBooleanToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ConstructorType"]["Boolean"] = [true];
const AddIntersectionConstructorTypeAnyToTupleTypeBoolean: Defaults["TupleType"]["Boolean"] & Defaults["ConstructorType"]["Any"] = [true];

// Initial Value
const TypeTupleTypeAny: Defaults["TupleType"]["Any"] = [2]

// Changes
const AddIntersectionParenthesizedTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ParenthesizedType"]["Literal"] = [2];
const AddIntersectionParenthesizedTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ParenthesizedType"]["Object"] = [2];
const AddIntersectionParenthesizedTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ParenthesizedType"]["String"] = [2];
const AddIntersectionParenthesizedTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ParenthesizedType"]["Number"] = [2];
const AddIntersectionParenthesizedTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ParenthesizedType"]["Boolean"] = [2];
const AddIntersectionParenthesizedTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ParenthesizedType"]["Any"] = [2];

const AddIntersectionTypeReferenceBuiltinLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Literal"] = [2];
const AddIntersectionTypeReferenceBuiltinObjectToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Object"] = [2];
const AddIntersectionTypeReferenceBuiltinStringToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeReferenceBuiltin"]["String"] = [2];
const AddIntersectionTypeReferenceBuiltinNumberToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Number"] = [2];
const AddIntersectionTypeReferenceBuiltinBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = [2];
const AddIntersectionTypeReferenceBuiltinAnyToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Any"] = [2];

const AddIntersectionTypeReferencePredefinedLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeReferencePredefined"]["Literal"] = [2];
const AddIntersectionTypeReferencePredefinedObjectToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeReferencePredefined"]["Object"] = [2];
const AddIntersectionTypeReferencePredefinedStringToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeReferencePredefined"]["String"] = [2];
const AddIntersectionTypeReferencePredefinedNumberToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeReferencePredefined"]["Number"] = [2];
const AddIntersectionTypeReferencePredefinedBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeReferencePredefined"]["Boolean"] = [2];
const AddIntersectionTypeReferencePredefinedAnyToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeReferencePredefined"]["Any"] = [2];

const AddIntersectionUnionTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["UnionType"]["Literal"] = [2];
const AddIntersectionUnionTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["UnionType"]["Object"] = [2];
const AddIntersectionUnionTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["UnionType"]["String"] = [2];
const AddIntersectionUnionTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["UnionType"]["Number"] = [2];
const AddIntersectionUnionTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["UnionType"]["Boolean"] = [2];
const AddIntersectionUnionTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["UnionType"]["Any"] = [2];

const AddIntersectionIntersectionTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["IntersectionType"]["Literal"] = [2];
const AddIntersectionIntersectionTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["IntersectionType"]["Object"] = [2];
const AddIntersectionIntersectionTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["IntersectionType"]["String"] = [2];
const AddIntersectionIntersectionTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["IntersectionType"]["Number"] = [2];
const AddIntersectionIntersectionTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["IntersectionType"]["Boolean"] = [2];
const AddIntersectionIntersectionTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["IntersectionType"]["Any"] = [2];

const AddIntersectionTypeLiteralLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeLiteral"]["Literal"] = [2];
const AddIntersectionTypeLiteralObjectToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeLiteral"]["Object"] = [2];
const AddIntersectionTypeLiteralStringToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeLiteral"]["String"] = [2];
const AddIntersectionTypeLiteralNumberToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeLiteral"]["Number"] = [2];
const AddIntersectionTypeLiteralBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeLiteral"]["Boolean"] = [2];
const AddIntersectionTypeLiteralAnyToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TypeLiteral"]["Any"] = [2];

const AddIntersectionTupleTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TupleType"]["Literal"] = [2];
const AddIntersectionTupleTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TupleType"]["Object"] = [2];
const AddIntersectionTupleTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TupleType"]["String"] = [2];
const AddIntersectionTupleTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TupleType"]["Number"] = [2];
const AddIntersectionTupleTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TupleType"]["Boolean"] = [2];
const AddIntersectionTupleTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["TupleType"]["Any"] = [2];

const AddIntersectionArrayTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ArrayType"]["Literal"] = [2];
const AddIntersectionArrayTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ArrayType"]["Object"] = [2];
const AddIntersectionArrayTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ArrayType"]["String"] = [2];
const AddIntersectionArrayTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ArrayType"]["Number"] = [2];
const AddIntersectionArrayTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ArrayType"]["Boolean"] = [2];
const AddIntersectionArrayTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ArrayType"]["Any"] = [2];

const AddIntersectionFunctionTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["FunctionType"]["Literal"] = [2];
const AddIntersectionFunctionTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["FunctionType"]["Object"] = [2];
const AddIntersectionFunctionTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["FunctionType"]["String"] = [2];
const AddIntersectionFunctionTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["FunctionType"]["Number"] = [2];
const AddIntersectionFunctionTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["FunctionType"]["Boolean"] = [2];
const AddIntersectionFunctionTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["FunctionType"]["Any"] = [2];

const AddIntersectionConstructorTypeLiteralToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ConstructorType"]["Literal"] = [2];
const AddIntersectionConstructorTypeObjectToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ConstructorType"]["Object"] = [2];
const AddIntersectionConstructorTypeStringToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ConstructorType"]["String"] = [2];
const AddIntersectionConstructorTypeNumberToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ConstructorType"]["Number"] = [2];
const AddIntersectionConstructorTypeBooleanToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ConstructorType"]["Boolean"] = [2];
const AddIntersectionConstructorTypeAnyToTupleTypeAny: Defaults["TupleType"]["Any"] & Defaults["ConstructorType"]["Any"] = [2];

