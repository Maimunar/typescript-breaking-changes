import { Defaults } from "../../defaults";

/*
 * IntersectionType
 */

// Add Intersection - TypeReferenceBuiltin
// Initial Value
const TypeTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = {}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ParenthesizedType"]["Literal"] = {};
const AddIntersectionParenthesizedTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ParenthesizedType"]["Object"] = {};
const AddIntersectionParenthesizedTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ParenthesizedType"]["String"] = {};
const AddIntersectionParenthesizedTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ParenthesizedType"]["Number"] = {};
const AddIntersectionParenthesizedTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ParenthesizedType"]["Boolean"] = {};
const AddIntersectionParenthesizedTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ParenthesizedType"]["Any"] = {};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddIntersectionTypeReferenceBuiltinObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddIntersectionTypeReferenceBuiltinStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddIntersectionTypeReferenceBuiltinNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddIntersectionTypeReferenceBuiltinAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddIntersectionTypeReferencePredefinedLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddIntersectionTypeReferencePredefinedObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeReferencePredefined"]["Object"] = {};
const AddIntersectionTypeReferencePredefinedStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeReferencePredefined"]["String"] = {};
const AddIntersectionTypeReferencePredefinedNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeReferencePredefined"]["Number"] = {};
const AddIntersectionTypeReferencePredefinedBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddIntersectionTypeReferencePredefinedAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeReferencePredefined"]["Any"] = {};

const AddIntersectionUnionTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["UnionType"]["Literal"] = {};
const AddIntersectionUnionTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["UnionType"]["Object"] = {};
const AddIntersectionUnionTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["UnionType"]["String"] = {};
const AddIntersectionUnionTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["UnionType"]["Number"] = {};
const AddIntersectionUnionTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["UnionType"]["Boolean"] = {};
const AddIntersectionUnionTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["UnionType"]["Any"] = {};

const AddIntersectionIntersectionTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["IntersectionType"]["Literal"] = {};
const AddIntersectionIntersectionTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["IntersectionType"]["Object"] = {};
const AddIntersectionIntersectionTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["IntersectionType"]["String"] = {};
const AddIntersectionIntersectionTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["IntersectionType"]["Number"] = {};
const AddIntersectionIntersectionTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["IntersectionType"]["Boolean"] = {};
const AddIntersectionIntersectionTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["IntersectionType"]["Any"] = {};

const AddIntersectionTypeLiteralLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeLiteral"]["Literal"] = {};
const AddIntersectionTypeLiteralObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeLiteral"]["Object"] = {};
const AddIntersectionTypeLiteralStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeLiteral"]["String"] = {};
const AddIntersectionTypeLiteralNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeLiteral"]["Number"] = {};
const AddIntersectionTypeLiteralBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeLiteral"]["Boolean"] = {};
const AddIntersectionTypeLiteralAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TypeLiteral"]["Any"] = {};

const AddIntersectionTupleTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TupleType"]["Literal"] = {};
const AddIntersectionTupleTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TupleType"]["Object"] = {};
const AddIntersectionTupleTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TupleType"]["String"] = {};
const AddIntersectionTupleTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TupleType"]["Number"] = {};
const AddIntersectionTupleTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TupleType"]["Boolean"] = {};
const AddIntersectionTupleTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["TupleType"]["Any"] = {};

const AddIntersectionArrayTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ArrayType"]["Literal"] = {};
const AddIntersectionArrayTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ArrayType"]["Object"] = {};
const AddIntersectionArrayTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ArrayType"]["String"] = {};
const AddIntersectionArrayTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ArrayType"]["Number"] = {};
const AddIntersectionArrayTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ArrayType"]["Boolean"] = {};
const AddIntersectionArrayTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ArrayType"]["Any"] = {};

const AddIntersectionFunctionTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["FunctionType"]["Literal"] = {};
const AddIntersectionFunctionTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["FunctionType"]["Object"] = {};
const AddIntersectionFunctionTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["FunctionType"]["String"] = {};
const AddIntersectionFunctionTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["FunctionType"]["Number"] = {};
const AddIntersectionFunctionTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["FunctionType"]["Boolean"] = {};
const AddIntersectionFunctionTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["FunctionType"]["Any"] = {};

const AddIntersectionConstructorTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ConstructorType"]["Literal"] = {};
const AddIntersectionConstructorTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ConstructorType"]["Object"] = {};
const AddIntersectionConstructorTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ConstructorType"]["String"] = {};
const AddIntersectionConstructorTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ConstructorType"]["Number"] = {};
const AddIntersectionConstructorTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ConstructorType"]["Boolean"] = {};
const AddIntersectionConstructorTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] & Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = {}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ParenthesizedType"]["Literal"] = {};
const AddIntersectionParenthesizedTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ParenthesizedType"]["Object"] = {};
const AddIntersectionParenthesizedTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ParenthesizedType"]["String"] = {};
const AddIntersectionParenthesizedTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ParenthesizedType"]["Number"] = {};
const AddIntersectionParenthesizedTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ParenthesizedType"]["Boolean"] = {};
const AddIntersectionParenthesizedTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ParenthesizedType"]["Any"] = {};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddIntersectionTypeReferenceBuiltinObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddIntersectionTypeReferenceBuiltinStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddIntersectionTypeReferenceBuiltinNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddIntersectionTypeReferenceBuiltinAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddIntersectionTypeReferencePredefinedLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddIntersectionTypeReferencePredefinedObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeReferencePredefined"]["Object"] = {};
const AddIntersectionTypeReferencePredefinedStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeReferencePredefined"]["String"] = {};
const AddIntersectionTypeReferencePredefinedNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeReferencePredefined"]["Number"] = {};
const AddIntersectionTypeReferencePredefinedBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddIntersectionTypeReferencePredefinedAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeReferencePredefined"]["Any"] = {};

const AddIntersectionUnionTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["UnionType"]["Literal"] = {};
const AddIntersectionUnionTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["UnionType"]["Object"] = {};
const AddIntersectionUnionTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["UnionType"]["String"] = {};
const AddIntersectionUnionTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["UnionType"]["Number"] = {};
const AddIntersectionUnionTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["UnionType"]["Boolean"] = {};
const AddIntersectionUnionTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["UnionType"]["Any"] = {};

const AddIntersectionIntersectionTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["IntersectionType"]["Literal"] = {};
const AddIntersectionIntersectionTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["IntersectionType"]["Object"] = {};
const AddIntersectionIntersectionTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["IntersectionType"]["String"] = {};
const AddIntersectionIntersectionTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["IntersectionType"]["Number"] = {};
const AddIntersectionIntersectionTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["IntersectionType"]["Boolean"] = {};
const AddIntersectionIntersectionTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["IntersectionType"]["Any"] = {};

const AddIntersectionTypeLiteralLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeLiteral"]["Literal"] = {};
const AddIntersectionTypeLiteralObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeLiteral"]["Object"] = {};
const AddIntersectionTypeLiteralStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeLiteral"]["String"] = {};
const AddIntersectionTypeLiteralNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeLiteral"]["Number"] = {};
const AddIntersectionTypeLiteralBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeLiteral"]["Boolean"] = {};
const AddIntersectionTypeLiteralAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TypeLiteral"]["Any"] = {};

const AddIntersectionTupleTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TupleType"]["Literal"] = {};
const AddIntersectionTupleTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TupleType"]["Object"] = {};
const AddIntersectionTupleTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TupleType"]["String"] = {};
const AddIntersectionTupleTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TupleType"]["Number"] = {};
const AddIntersectionTupleTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TupleType"]["Boolean"] = {};
const AddIntersectionTupleTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["TupleType"]["Any"] = {};

const AddIntersectionArrayTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ArrayType"]["Literal"] = {};
const AddIntersectionArrayTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ArrayType"]["Object"] = {};
const AddIntersectionArrayTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ArrayType"]["String"] = {};
const AddIntersectionArrayTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ArrayType"]["Number"] = {};
const AddIntersectionArrayTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ArrayType"]["Boolean"] = {};
const AddIntersectionArrayTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ArrayType"]["Any"] = {};

const AddIntersectionFunctionTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["FunctionType"]["Literal"] = {};
const AddIntersectionFunctionTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["FunctionType"]["Object"] = {};
const AddIntersectionFunctionTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["FunctionType"]["String"] = {};
const AddIntersectionFunctionTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["FunctionType"]["Number"] = {};
const AddIntersectionFunctionTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["FunctionType"]["Boolean"] = {};
const AddIntersectionFunctionTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["FunctionType"]["Any"] = {};

const AddIntersectionConstructorTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ConstructorType"]["Literal"] = {};
const AddIntersectionConstructorTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ConstructorType"]["Object"] = {};
const AddIntersectionConstructorTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ConstructorType"]["String"] = {};
const AddIntersectionConstructorTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ConstructorType"]["Number"] = {};
const AddIntersectionConstructorTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ConstructorType"]["Boolean"] = {};
const AddIntersectionConstructorTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] & Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = {}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ParenthesizedType"]["Literal"] = {};
const AddIntersectionParenthesizedTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ParenthesizedType"]["Object"] = {};
const AddIntersectionParenthesizedTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ParenthesizedType"]["String"] = {};
const AddIntersectionParenthesizedTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ParenthesizedType"]["Number"] = {};
const AddIntersectionParenthesizedTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ParenthesizedType"]["Boolean"] = {};
const AddIntersectionParenthesizedTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ParenthesizedType"]["Any"] = {};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddIntersectionTypeReferenceBuiltinObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddIntersectionTypeReferenceBuiltinStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddIntersectionTypeReferenceBuiltinNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddIntersectionTypeReferenceBuiltinAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddIntersectionTypeReferencePredefinedLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddIntersectionTypeReferencePredefinedObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeReferencePredefined"]["Object"] = {};
const AddIntersectionTypeReferencePredefinedStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeReferencePredefined"]["String"] = {};
const AddIntersectionTypeReferencePredefinedNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeReferencePredefined"]["Number"] = {};
const AddIntersectionTypeReferencePredefinedBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddIntersectionTypeReferencePredefinedAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeReferencePredefined"]["Any"] = {};

const AddIntersectionUnionTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["UnionType"]["Literal"] = {};
const AddIntersectionUnionTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["UnionType"]["Object"] = {};
const AddIntersectionUnionTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["UnionType"]["String"] = {};
const AddIntersectionUnionTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["UnionType"]["Number"] = {};
const AddIntersectionUnionTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["UnionType"]["Boolean"] = {};
const AddIntersectionUnionTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["UnionType"]["Any"] = {};

const AddIntersectionIntersectionTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["IntersectionType"]["Literal"] = {};
const AddIntersectionIntersectionTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["IntersectionType"]["Object"] = {};
const AddIntersectionIntersectionTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["IntersectionType"]["String"] = {};
const AddIntersectionIntersectionTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["IntersectionType"]["Number"] = {};
const AddIntersectionIntersectionTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["IntersectionType"]["Boolean"] = {};
const AddIntersectionIntersectionTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["IntersectionType"]["Any"] = {};

const AddIntersectionTypeLiteralLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeLiteral"]["Literal"] = {};
const AddIntersectionTypeLiteralObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeLiteral"]["Object"] = {};
const AddIntersectionTypeLiteralStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeLiteral"]["String"] = {};
const AddIntersectionTypeLiteralNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeLiteral"]["Number"] = {};
const AddIntersectionTypeLiteralBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeLiteral"]["Boolean"] = {};
const AddIntersectionTypeLiteralAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TypeLiteral"]["Any"] = {};

const AddIntersectionTupleTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TupleType"]["Literal"] = {};
const AddIntersectionTupleTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TupleType"]["Object"] = {};
const AddIntersectionTupleTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TupleType"]["String"] = {};
const AddIntersectionTupleTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TupleType"]["Number"] = {};
const AddIntersectionTupleTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TupleType"]["Boolean"] = {};
const AddIntersectionTupleTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["TupleType"]["Any"] = {};

const AddIntersectionArrayTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ArrayType"]["Literal"] = {};
const AddIntersectionArrayTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ArrayType"]["Object"] = {};
const AddIntersectionArrayTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ArrayType"]["String"] = {};
const AddIntersectionArrayTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ArrayType"]["Number"] = {};
const AddIntersectionArrayTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ArrayType"]["Boolean"] = {};
const AddIntersectionArrayTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ArrayType"]["Any"] = {};

const AddIntersectionFunctionTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["FunctionType"]["Literal"] = {};
const AddIntersectionFunctionTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["FunctionType"]["Object"] = {};
const AddIntersectionFunctionTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["FunctionType"]["String"] = {};
const AddIntersectionFunctionTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["FunctionType"]["Number"] = {};
const AddIntersectionFunctionTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["FunctionType"]["Boolean"] = {};
const AddIntersectionFunctionTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["FunctionType"]["Any"] = {};

const AddIntersectionConstructorTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ConstructorType"]["Literal"] = {};
const AddIntersectionConstructorTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ConstructorType"]["Object"] = {};
const AddIntersectionConstructorTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ConstructorType"]["String"] = {};
const AddIntersectionConstructorTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ConstructorType"]["Number"] = {};
const AddIntersectionConstructorTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ConstructorType"]["Boolean"] = {};
const AddIntersectionConstructorTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] & Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = {}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ParenthesizedType"]["Literal"] = {};
const AddIntersectionParenthesizedTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ParenthesizedType"]["Object"] = {};
const AddIntersectionParenthesizedTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ParenthesizedType"]["String"] = {};
const AddIntersectionParenthesizedTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ParenthesizedType"]["Number"] = {};
const AddIntersectionParenthesizedTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ParenthesizedType"]["Boolean"] = {};
const AddIntersectionParenthesizedTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ParenthesizedType"]["Any"] = {};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddIntersectionTypeReferenceBuiltinObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddIntersectionTypeReferenceBuiltinStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddIntersectionTypeReferenceBuiltinNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddIntersectionTypeReferenceBuiltinAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddIntersectionTypeReferencePredefinedLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddIntersectionTypeReferencePredefinedObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeReferencePredefined"]["Object"] = {};
const AddIntersectionTypeReferencePredefinedStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeReferencePredefined"]["String"] = {};
const AddIntersectionTypeReferencePredefinedNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeReferencePredefined"]["Number"] = {};
const AddIntersectionTypeReferencePredefinedBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddIntersectionTypeReferencePredefinedAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeReferencePredefined"]["Any"] = {};

const AddIntersectionUnionTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["UnionType"]["Literal"] = {};
const AddIntersectionUnionTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["UnionType"]["Object"] = {};
const AddIntersectionUnionTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["UnionType"]["String"] = {};
const AddIntersectionUnionTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["UnionType"]["Number"] = {};
const AddIntersectionUnionTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["UnionType"]["Boolean"] = {};
const AddIntersectionUnionTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["UnionType"]["Any"] = {};

const AddIntersectionIntersectionTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["IntersectionType"]["Literal"] = {};
const AddIntersectionIntersectionTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["IntersectionType"]["Object"] = {};
const AddIntersectionIntersectionTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["IntersectionType"]["String"] = {};
const AddIntersectionIntersectionTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["IntersectionType"]["Number"] = {};
const AddIntersectionIntersectionTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["IntersectionType"]["Boolean"] = {};
const AddIntersectionIntersectionTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["IntersectionType"]["Any"] = {};

const AddIntersectionTypeLiteralLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeLiteral"]["Literal"] = {};
const AddIntersectionTypeLiteralObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeLiteral"]["Object"] = {};
const AddIntersectionTypeLiteralStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeLiteral"]["String"] = {};
const AddIntersectionTypeLiteralNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeLiteral"]["Number"] = {};
const AddIntersectionTypeLiteralBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeLiteral"]["Boolean"] = {};
const AddIntersectionTypeLiteralAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TypeLiteral"]["Any"] = {};

const AddIntersectionTupleTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TupleType"]["Literal"] = {};
const AddIntersectionTupleTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TupleType"]["Object"] = {};
const AddIntersectionTupleTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TupleType"]["String"] = {};
const AddIntersectionTupleTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TupleType"]["Number"] = {};
const AddIntersectionTupleTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TupleType"]["Boolean"] = {};
const AddIntersectionTupleTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["TupleType"]["Any"] = {};

const AddIntersectionArrayTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ArrayType"]["Literal"] = {};
const AddIntersectionArrayTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ArrayType"]["Object"] = {};
const AddIntersectionArrayTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ArrayType"]["String"] = {};
const AddIntersectionArrayTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ArrayType"]["Number"] = {};
const AddIntersectionArrayTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ArrayType"]["Boolean"] = {};
const AddIntersectionArrayTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ArrayType"]["Any"] = {};

const AddIntersectionFunctionTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["FunctionType"]["Literal"] = {};
const AddIntersectionFunctionTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["FunctionType"]["Object"] = {};
const AddIntersectionFunctionTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["FunctionType"]["String"] = {};
const AddIntersectionFunctionTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["FunctionType"]["Number"] = {};
const AddIntersectionFunctionTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["FunctionType"]["Boolean"] = {};
const AddIntersectionFunctionTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["FunctionType"]["Any"] = {};

const AddIntersectionConstructorTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ConstructorType"]["Literal"] = {};
const AddIntersectionConstructorTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ConstructorType"]["Object"] = {};
const AddIntersectionConstructorTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ConstructorType"]["String"] = {};
const AddIntersectionConstructorTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ConstructorType"]["Number"] = {};
const AddIntersectionConstructorTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ConstructorType"]["Boolean"] = {};
const AddIntersectionConstructorTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] & Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = {}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ParenthesizedType"]["Literal"] = {};
const AddIntersectionParenthesizedTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ParenthesizedType"]["Object"] = {};
const AddIntersectionParenthesizedTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ParenthesizedType"]["String"] = {};
const AddIntersectionParenthesizedTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ParenthesizedType"]["Number"] = {};
const AddIntersectionParenthesizedTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ParenthesizedType"]["Boolean"] = {};
const AddIntersectionParenthesizedTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ParenthesizedType"]["Any"] = {};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddIntersectionTypeReferenceBuiltinObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddIntersectionTypeReferenceBuiltinStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddIntersectionTypeReferenceBuiltinNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddIntersectionTypeReferenceBuiltinAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddIntersectionTypeReferencePredefinedLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddIntersectionTypeReferencePredefinedObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeReferencePredefined"]["Object"] = {};
const AddIntersectionTypeReferencePredefinedStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeReferencePredefined"]["String"] = {};
const AddIntersectionTypeReferencePredefinedNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeReferencePredefined"]["Number"] = {};
const AddIntersectionTypeReferencePredefinedBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddIntersectionTypeReferencePredefinedAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeReferencePredefined"]["Any"] = {};

const AddIntersectionUnionTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["UnionType"]["Literal"] = {};
const AddIntersectionUnionTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["UnionType"]["Object"] = {};
const AddIntersectionUnionTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["UnionType"]["String"] = {};
const AddIntersectionUnionTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["UnionType"]["Number"] = {};
const AddIntersectionUnionTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["UnionType"]["Boolean"] = {};
const AddIntersectionUnionTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["UnionType"]["Any"] = {};

const AddIntersectionIntersectionTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["IntersectionType"]["Literal"] = {};
const AddIntersectionIntersectionTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["IntersectionType"]["Object"] = {};
const AddIntersectionIntersectionTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["IntersectionType"]["String"] = {};
const AddIntersectionIntersectionTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["IntersectionType"]["Number"] = {};
const AddIntersectionIntersectionTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["IntersectionType"]["Boolean"] = {};
const AddIntersectionIntersectionTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["IntersectionType"]["Any"] = {};

const AddIntersectionTypeLiteralLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeLiteral"]["Literal"] = {};
const AddIntersectionTypeLiteralObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeLiteral"]["Object"] = {};
const AddIntersectionTypeLiteralStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeLiteral"]["String"] = {};
const AddIntersectionTypeLiteralNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeLiteral"]["Number"] = {};
const AddIntersectionTypeLiteralBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeLiteral"]["Boolean"] = {};
const AddIntersectionTypeLiteralAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TypeLiteral"]["Any"] = {};

const AddIntersectionTupleTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TupleType"]["Literal"] = {};
const AddIntersectionTupleTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TupleType"]["Object"] = {};
const AddIntersectionTupleTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TupleType"]["String"] = {};
const AddIntersectionTupleTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TupleType"]["Number"] = {};
const AddIntersectionTupleTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TupleType"]["Boolean"] = {};
const AddIntersectionTupleTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["TupleType"]["Any"] = {};

const AddIntersectionArrayTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ArrayType"]["Literal"] = {};
const AddIntersectionArrayTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ArrayType"]["Object"] = {};
const AddIntersectionArrayTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ArrayType"]["String"] = {};
const AddIntersectionArrayTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ArrayType"]["Number"] = {};
const AddIntersectionArrayTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ArrayType"]["Boolean"] = {};
const AddIntersectionArrayTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ArrayType"]["Any"] = {};

const AddIntersectionFunctionTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["FunctionType"]["Literal"] = {};
const AddIntersectionFunctionTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["FunctionType"]["Object"] = {};
const AddIntersectionFunctionTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["FunctionType"]["String"] = {};
const AddIntersectionFunctionTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["FunctionType"]["Number"] = {};
const AddIntersectionFunctionTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["FunctionType"]["Boolean"] = {};
const AddIntersectionFunctionTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["FunctionType"]["Any"] = {};

const AddIntersectionConstructorTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ConstructorType"]["Literal"] = {};
const AddIntersectionConstructorTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ConstructorType"]["Object"] = {};
const AddIntersectionConstructorTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ConstructorType"]["String"] = {};
const AddIntersectionConstructorTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ConstructorType"]["Number"] = {};
const AddIntersectionConstructorTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ConstructorType"]["Boolean"] = {};
const AddIntersectionConstructorTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] & Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = {}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ParenthesizedType"]["Literal"] = {};
const AddIntersectionParenthesizedTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ParenthesizedType"]["Object"] = {};
const AddIntersectionParenthesizedTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ParenthesizedType"]["String"] = {};
const AddIntersectionParenthesizedTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ParenthesizedType"]["Number"] = {};
const AddIntersectionParenthesizedTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ParenthesizedType"]["Boolean"] = {};
const AddIntersectionParenthesizedTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ParenthesizedType"]["Any"] = {};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddIntersectionTypeReferenceBuiltinObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddIntersectionTypeReferenceBuiltinStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddIntersectionTypeReferenceBuiltinNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddIntersectionTypeReferenceBuiltinAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddIntersectionTypeReferencePredefinedLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddIntersectionTypeReferencePredefinedObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeReferencePredefined"]["Object"] = {};
const AddIntersectionTypeReferencePredefinedStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeReferencePredefined"]["String"] = {};
const AddIntersectionTypeReferencePredefinedNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeReferencePredefined"]["Number"] = {};
const AddIntersectionTypeReferencePredefinedBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddIntersectionTypeReferencePredefinedAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeReferencePredefined"]["Any"] = {};

const AddIntersectionUnionTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["UnionType"]["Literal"] = {};
const AddIntersectionUnionTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["UnionType"]["Object"] = {};
const AddIntersectionUnionTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["UnionType"]["String"] = {};
const AddIntersectionUnionTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["UnionType"]["Number"] = {};
const AddIntersectionUnionTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["UnionType"]["Boolean"] = {};
const AddIntersectionUnionTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["UnionType"]["Any"] = {};

const AddIntersectionIntersectionTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["IntersectionType"]["Literal"] = {};
const AddIntersectionIntersectionTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["IntersectionType"]["Object"] = {};
const AddIntersectionIntersectionTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["IntersectionType"]["String"] = {};
const AddIntersectionIntersectionTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["IntersectionType"]["Number"] = {};
const AddIntersectionIntersectionTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["IntersectionType"]["Boolean"] = {};
const AddIntersectionIntersectionTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["IntersectionType"]["Any"] = {};

const AddIntersectionTypeLiteralLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeLiteral"]["Literal"] = {};
const AddIntersectionTypeLiteralObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeLiteral"]["Object"] = {};
const AddIntersectionTypeLiteralStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeLiteral"]["String"] = {};
const AddIntersectionTypeLiteralNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeLiteral"]["Number"] = {};
const AddIntersectionTypeLiteralBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeLiteral"]["Boolean"] = {};
const AddIntersectionTypeLiteralAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TypeLiteral"]["Any"] = {};

const AddIntersectionTupleTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TupleType"]["Literal"] = {};
const AddIntersectionTupleTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TupleType"]["Object"] = {};
const AddIntersectionTupleTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TupleType"]["String"] = {};
const AddIntersectionTupleTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TupleType"]["Number"] = {};
const AddIntersectionTupleTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TupleType"]["Boolean"] = {};
const AddIntersectionTupleTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["TupleType"]["Any"] = {};

const AddIntersectionArrayTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ArrayType"]["Literal"] = {};
const AddIntersectionArrayTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ArrayType"]["Object"] = {};
const AddIntersectionArrayTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ArrayType"]["String"] = {};
const AddIntersectionArrayTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ArrayType"]["Number"] = {};
const AddIntersectionArrayTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ArrayType"]["Boolean"] = {};
const AddIntersectionArrayTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ArrayType"]["Any"] = {};

const AddIntersectionFunctionTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["FunctionType"]["Literal"] = {};
const AddIntersectionFunctionTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["FunctionType"]["Object"] = {};
const AddIntersectionFunctionTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["FunctionType"]["String"] = {};
const AddIntersectionFunctionTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["FunctionType"]["Number"] = {};
const AddIntersectionFunctionTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["FunctionType"]["Boolean"] = {};
const AddIntersectionFunctionTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["FunctionType"]["Any"] = {};

const AddIntersectionConstructorTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ConstructorType"]["Literal"] = {};
const AddIntersectionConstructorTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ConstructorType"]["Object"] = {};
const AddIntersectionConstructorTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ConstructorType"]["String"] = {};
const AddIntersectionConstructorTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ConstructorType"]["Number"] = {};
const AddIntersectionConstructorTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ConstructorType"]["Boolean"] = {};
const AddIntersectionConstructorTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] & Defaults["ConstructorType"]["Any"] = {};

