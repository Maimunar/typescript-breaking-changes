import { Defaults } from "../../defaults";

/*
 * IntersectionType
 */

// Add Intersection - ParenthesizedType
// Initial Value
const TypeParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] = 1

// Changes
const AddIntersectionParenthesizedTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ParenthesizedType"]["Literal"] = 1;
const AddIntersectionParenthesizedTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ParenthesizedType"]["Object"] = 1;
const AddIntersectionParenthesizedTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ParenthesizedType"]["String"] = 1;
const AddIntersectionParenthesizedTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ParenthesizedType"]["Number"] = 1;
const AddIntersectionParenthesizedTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ParenthesizedType"]["Boolean"] = 1;
const AddIntersectionParenthesizedTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ParenthesizedType"]["Any"] = 1;

const AddIntersectionTypeReferenceBuiltinLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 1;
const AddIntersectionTypeReferenceBuiltinObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Object"] = 1;
const AddIntersectionTypeReferenceBuiltinStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["String"] = 1;
const AddIntersectionTypeReferenceBuiltinNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Number"] = 1;
const AddIntersectionTypeReferenceBuiltinBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 1;
const AddIntersectionTypeReferenceBuiltinAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Any"] = 1;

const AddIntersectionTypeReferencePredefinedLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeReferencePredefined"]["Literal"] = 1;
const AddIntersectionTypeReferencePredefinedObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeReferencePredefined"]["Object"] = 1;
const AddIntersectionTypeReferencePredefinedStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeReferencePredefined"]["String"] = 1;
const AddIntersectionTypeReferencePredefinedNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeReferencePredefined"]["Number"] = 1;
const AddIntersectionTypeReferencePredefinedBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeReferencePredefined"]["Boolean"] = 1;
const AddIntersectionTypeReferencePredefinedAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeReferencePredefined"]["Any"] = 1;

const AddIntersectionUnionTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["UnionType"]["Literal"] = 1;
const AddIntersectionUnionTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["UnionType"]["Object"] = 1;
const AddIntersectionUnionTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["UnionType"]["String"] = 1;
const AddIntersectionUnionTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["UnionType"]["Number"] = 1;
const AddIntersectionUnionTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["UnionType"]["Boolean"] = 1;
const AddIntersectionUnionTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["UnionType"]["Any"] = 1;

const AddIntersectionIntersectionTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["IntersectionType"]["Literal"] = 1;
const AddIntersectionIntersectionTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["IntersectionType"]["Object"] = 1;
const AddIntersectionIntersectionTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["IntersectionType"]["String"] = 1;
const AddIntersectionIntersectionTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["IntersectionType"]["Number"] = 1;
const AddIntersectionIntersectionTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["IntersectionType"]["Boolean"] = 1;
const AddIntersectionIntersectionTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["IntersectionType"]["Any"] = 1;

const AddIntersectionTypeLiteralLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeLiteral"]["Literal"] = 1;
const AddIntersectionTypeLiteralObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeLiteral"]["Object"] = 1;
const AddIntersectionTypeLiteralStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeLiteral"]["String"] = 1;
const AddIntersectionTypeLiteralNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeLiteral"]["Number"] = 1;
const AddIntersectionTypeLiteralBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeLiteral"]["Boolean"] = 1;
const AddIntersectionTypeLiteralAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TypeLiteral"]["Any"] = 1;

const AddIntersectionTupleTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TupleType"]["Literal"] = 1;
const AddIntersectionTupleTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TupleType"]["Object"] = 1;
const AddIntersectionTupleTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TupleType"]["String"] = 1;
const AddIntersectionTupleTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TupleType"]["Number"] = 1;
const AddIntersectionTupleTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TupleType"]["Boolean"] = 1;
const AddIntersectionTupleTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["TupleType"]["Any"] = 1;

const AddIntersectionArrayTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ArrayType"]["Literal"] = 1;
const AddIntersectionArrayTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ArrayType"]["Object"] = 1;
const AddIntersectionArrayTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ArrayType"]["String"] = 1;
const AddIntersectionArrayTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ArrayType"]["Number"] = 1;
const AddIntersectionArrayTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ArrayType"]["Boolean"] = 1;
const AddIntersectionArrayTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ArrayType"]["Any"] = 1;

const AddIntersectionFunctionTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["FunctionType"]["Literal"] = 1;
const AddIntersectionFunctionTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["FunctionType"]["Object"] = 1;
const AddIntersectionFunctionTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["FunctionType"]["String"] = 1;
const AddIntersectionFunctionTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["FunctionType"]["Number"] = 1;
const AddIntersectionFunctionTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["FunctionType"]["Boolean"] = 1;
const AddIntersectionFunctionTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["FunctionType"]["Any"] = 1;

const AddIntersectionConstructorTypeLiteralToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ConstructorType"]["Literal"] = 1;
const AddIntersectionConstructorTypeObjectToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ConstructorType"]["Object"] = 1;
const AddIntersectionConstructorTypeStringToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ConstructorType"]["String"] = 1;
const AddIntersectionConstructorTypeNumberToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ConstructorType"]["Number"] = 1;
const AddIntersectionConstructorTypeBooleanToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ConstructorType"]["Boolean"] = 1;
const AddIntersectionConstructorTypeAnyToParenthesizedTypeLiteral: Defaults["ParenthesizedType"]["Literal"] & Defaults["ConstructorType"]["Any"] = 1;

// Initial Value
const TypeParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] = {}

// Changes
const AddIntersectionParenthesizedTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ParenthesizedType"]["Literal"] = {};
const AddIntersectionParenthesizedTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ParenthesizedType"]["Object"] = {};
const AddIntersectionParenthesizedTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ParenthesizedType"]["String"] = {};
const AddIntersectionParenthesizedTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ParenthesizedType"]["Number"] = {};
const AddIntersectionParenthesizedTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ParenthesizedType"]["Boolean"] = {};
const AddIntersectionParenthesizedTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ParenthesizedType"]["Any"] = {};

const AddIntersectionTypeReferenceBuiltinLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddIntersectionTypeReferenceBuiltinObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddIntersectionTypeReferenceBuiltinStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddIntersectionTypeReferenceBuiltinNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddIntersectionTypeReferenceBuiltinBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddIntersectionTypeReferenceBuiltinAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddIntersectionTypeReferencePredefinedLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddIntersectionTypeReferencePredefinedObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeReferencePredefined"]["Object"] = {};
const AddIntersectionTypeReferencePredefinedStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeReferencePredefined"]["String"] = {};
const AddIntersectionTypeReferencePredefinedNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeReferencePredefined"]["Number"] = {};
const AddIntersectionTypeReferencePredefinedBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddIntersectionTypeReferencePredefinedAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeReferencePredefined"]["Any"] = {};

const AddIntersectionUnionTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["UnionType"]["Literal"] = {};
const AddIntersectionUnionTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["UnionType"]["Object"] = {};
const AddIntersectionUnionTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["UnionType"]["String"] = {};
const AddIntersectionUnionTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["UnionType"]["Number"] = {};
const AddIntersectionUnionTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["UnionType"]["Boolean"] = {};
const AddIntersectionUnionTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["UnionType"]["Any"] = {};

const AddIntersectionIntersectionTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["IntersectionType"]["Literal"] = {};
const AddIntersectionIntersectionTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["IntersectionType"]["Object"] = {};
const AddIntersectionIntersectionTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["IntersectionType"]["String"] = {};
const AddIntersectionIntersectionTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["IntersectionType"]["Number"] = {};
const AddIntersectionIntersectionTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["IntersectionType"]["Boolean"] = {};
const AddIntersectionIntersectionTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["IntersectionType"]["Any"] = {};

const AddIntersectionTypeLiteralLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeLiteral"]["Literal"] = {};
const AddIntersectionTypeLiteralObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeLiteral"]["Object"] = {};
const AddIntersectionTypeLiteralStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeLiteral"]["String"] = {};
const AddIntersectionTypeLiteralNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeLiteral"]["Number"] = {};
const AddIntersectionTypeLiteralBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeLiteral"]["Boolean"] = {};
const AddIntersectionTypeLiteralAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TypeLiteral"]["Any"] = {};

const AddIntersectionTupleTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TupleType"]["Literal"] = {};
const AddIntersectionTupleTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TupleType"]["Object"] = {};
const AddIntersectionTupleTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TupleType"]["String"] = {};
const AddIntersectionTupleTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TupleType"]["Number"] = {};
const AddIntersectionTupleTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TupleType"]["Boolean"] = {};
const AddIntersectionTupleTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["TupleType"]["Any"] = {};

const AddIntersectionArrayTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ArrayType"]["Literal"] = {};
const AddIntersectionArrayTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ArrayType"]["Object"] = {};
const AddIntersectionArrayTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ArrayType"]["String"] = {};
const AddIntersectionArrayTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ArrayType"]["Number"] = {};
const AddIntersectionArrayTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ArrayType"]["Boolean"] = {};
const AddIntersectionArrayTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ArrayType"]["Any"] = {};

const AddIntersectionFunctionTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["FunctionType"]["Literal"] = {};
const AddIntersectionFunctionTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["FunctionType"]["Object"] = {};
const AddIntersectionFunctionTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["FunctionType"]["String"] = {};
const AddIntersectionFunctionTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["FunctionType"]["Number"] = {};
const AddIntersectionFunctionTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["FunctionType"]["Boolean"] = {};
const AddIntersectionFunctionTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["FunctionType"]["Any"] = {};

const AddIntersectionConstructorTypeLiteralToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ConstructorType"]["Literal"] = {};
const AddIntersectionConstructorTypeObjectToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ConstructorType"]["Object"] = {};
const AddIntersectionConstructorTypeStringToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ConstructorType"]["String"] = {};
const AddIntersectionConstructorTypeNumberToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ConstructorType"]["Number"] = {};
const AddIntersectionConstructorTypeBooleanToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ConstructorType"]["Boolean"] = {};
const AddIntersectionConstructorTypeAnyToParenthesizedTypeObject: Defaults["ParenthesizedType"]["Object"] & Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] = "two"

// Changes
const AddIntersectionParenthesizedTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ParenthesizedType"]["Literal"] = "two";
const AddIntersectionParenthesizedTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ParenthesizedType"]["Object"] = "two";
const AddIntersectionParenthesizedTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ParenthesizedType"]["String"] = "two";
const AddIntersectionParenthesizedTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ParenthesizedType"]["Number"] = "two";
const AddIntersectionParenthesizedTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ParenthesizedType"]["Boolean"] = "two";
const AddIntersectionParenthesizedTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ParenthesizedType"]["Any"] = "two";

const AddIntersectionTypeReferenceBuiltinLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeReferenceBuiltin"]["Literal"] = "two";
const AddIntersectionTypeReferenceBuiltinObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeReferenceBuiltin"]["Object"] = "two";
const AddIntersectionTypeReferenceBuiltinStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeReferenceBuiltin"]["String"] = "two";
const AddIntersectionTypeReferenceBuiltinNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeReferenceBuiltin"]["Number"] = "two";
const AddIntersectionTypeReferenceBuiltinBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = "two";
const AddIntersectionTypeReferenceBuiltinAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeReferenceBuiltin"]["Any"] = "two";

const AddIntersectionTypeReferencePredefinedLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeReferencePredefined"]["Literal"] = "two";
const AddIntersectionTypeReferencePredefinedObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeReferencePredefined"]["Object"] = "two";
const AddIntersectionTypeReferencePredefinedStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeReferencePredefined"]["String"] = "two";
const AddIntersectionTypeReferencePredefinedNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeReferencePredefined"]["Number"] = "two";
const AddIntersectionTypeReferencePredefinedBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeReferencePredefined"]["Boolean"] = "two";
const AddIntersectionTypeReferencePredefinedAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeReferencePredefined"]["Any"] = "two";

const AddIntersectionUnionTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["UnionType"]["Literal"] = "two";
const AddIntersectionUnionTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["UnionType"]["Object"] = "two";
const AddIntersectionUnionTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["UnionType"]["String"] = "two";
const AddIntersectionUnionTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["UnionType"]["Number"] = "two";
const AddIntersectionUnionTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["UnionType"]["Boolean"] = "two";
const AddIntersectionUnionTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["UnionType"]["Any"] = "two";

const AddIntersectionIntersectionTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["IntersectionType"]["Literal"] = "two";
const AddIntersectionIntersectionTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["IntersectionType"]["Object"] = "two";
const AddIntersectionIntersectionTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["IntersectionType"]["String"] = "two";
const AddIntersectionIntersectionTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["IntersectionType"]["Number"] = "two";
const AddIntersectionIntersectionTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["IntersectionType"]["Boolean"] = "two";
const AddIntersectionIntersectionTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["IntersectionType"]["Any"] = "two";

const AddIntersectionTypeLiteralLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeLiteral"]["Literal"] = "two";
const AddIntersectionTypeLiteralObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeLiteral"]["Object"] = "two";
const AddIntersectionTypeLiteralStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeLiteral"]["String"] = "two";
const AddIntersectionTypeLiteralNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeLiteral"]["Number"] = "two";
const AddIntersectionTypeLiteralBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeLiteral"]["Boolean"] = "two";
const AddIntersectionTypeLiteralAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TypeLiteral"]["Any"] = "two";

const AddIntersectionTupleTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TupleType"]["Literal"] = "two";
const AddIntersectionTupleTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TupleType"]["Object"] = "two";
const AddIntersectionTupleTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TupleType"]["String"] = "two";
const AddIntersectionTupleTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TupleType"]["Number"] = "two";
const AddIntersectionTupleTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TupleType"]["Boolean"] = "two";
const AddIntersectionTupleTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["TupleType"]["Any"] = "two";

const AddIntersectionArrayTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ArrayType"]["Literal"] = "two";
const AddIntersectionArrayTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ArrayType"]["Object"] = "two";
const AddIntersectionArrayTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ArrayType"]["String"] = "two";
const AddIntersectionArrayTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ArrayType"]["Number"] = "two";
const AddIntersectionArrayTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ArrayType"]["Boolean"] = "two";
const AddIntersectionArrayTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ArrayType"]["Any"] = "two";

const AddIntersectionFunctionTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["FunctionType"]["Literal"] = "two";
const AddIntersectionFunctionTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["FunctionType"]["Object"] = "two";
const AddIntersectionFunctionTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["FunctionType"]["String"] = "two";
const AddIntersectionFunctionTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["FunctionType"]["Number"] = "two";
const AddIntersectionFunctionTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["FunctionType"]["Boolean"] = "two";
const AddIntersectionFunctionTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["FunctionType"]["Any"] = "two";

const AddIntersectionConstructorTypeLiteralToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ConstructorType"]["Literal"] = "two";
const AddIntersectionConstructorTypeObjectToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ConstructorType"]["Object"] = "two";
const AddIntersectionConstructorTypeStringToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ConstructorType"]["String"] = "two";
const AddIntersectionConstructorTypeNumberToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ConstructorType"]["Number"] = "two";
const AddIntersectionConstructorTypeBooleanToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ConstructorType"]["Boolean"] = "two";
const AddIntersectionConstructorTypeAnyToParenthesizedTypeString: Defaults["ParenthesizedType"]["String"] & Defaults["ConstructorType"]["Any"] = "two";

// Initial Value
const TypeParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] = 2

// Changes
const AddIntersectionParenthesizedTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ParenthesizedType"]["Literal"] = 2;
const AddIntersectionParenthesizedTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ParenthesizedType"]["Object"] = 2;
const AddIntersectionParenthesizedTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ParenthesizedType"]["String"] = 2;
const AddIntersectionParenthesizedTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ParenthesizedType"]["Number"] = 2;
const AddIntersectionParenthesizedTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddIntersectionParenthesizedTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ParenthesizedType"]["Any"] = 2;

const AddIntersectionTypeReferenceBuiltinLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddIntersectionTypeReferenceBuiltinObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddIntersectionTypeReferenceBuiltinStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddIntersectionTypeReferenceBuiltinNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddIntersectionTypeReferenceBuiltinBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddIntersectionTypeReferenceBuiltinAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddIntersectionTypeReferencePredefinedLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddIntersectionTypeReferencePredefinedObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddIntersectionTypeReferencePredefinedStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeReferencePredefined"]["String"] = 2;
const AddIntersectionTypeReferencePredefinedNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddIntersectionTypeReferencePredefinedBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddIntersectionTypeReferencePredefinedAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddIntersectionUnionTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["UnionType"]["Literal"] = 2;
const AddIntersectionUnionTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["UnionType"]["Object"] = 2;
const AddIntersectionUnionTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["UnionType"]["String"] = 2;
const AddIntersectionUnionTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["UnionType"]["Number"] = 2;
const AddIntersectionUnionTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["UnionType"]["Boolean"] = 2;
const AddIntersectionUnionTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["UnionType"]["Any"] = 2;

const AddIntersectionIntersectionTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["IntersectionType"]["Literal"] = 2;
const AddIntersectionIntersectionTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["IntersectionType"]["Object"] = 2;
const AddIntersectionIntersectionTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["IntersectionType"]["String"] = 2;
const AddIntersectionIntersectionTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["IntersectionType"]["Number"] = 2;
const AddIntersectionIntersectionTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["IntersectionType"]["Boolean"] = 2;
const AddIntersectionIntersectionTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["IntersectionType"]["Any"] = 2;

const AddIntersectionTypeLiteralLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeLiteral"]["Literal"] = 2;
const AddIntersectionTypeLiteralObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeLiteral"]["Object"] = 2;
const AddIntersectionTypeLiteralStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeLiteral"]["String"] = 2;
const AddIntersectionTypeLiteralNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeLiteral"]["Number"] = 2;
const AddIntersectionTypeLiteralBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeLiteral"]["Boolean"] = 2;
const AddIntersectionTypeLiteralAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TypeLiteral"]["Any"] = 2;

const AddIntersectionTupleTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TupleType"]["Literal"] = 2;
const AddIntersectionTupleTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TupleType"]["Object"] = 2;
const AddIntersectionTupleTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TupleType"]["String"] = 2;
const AddIntersectionTupleTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TupleType"]["Number"] = 2;
const AddIntersectionTupleTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TupleType"]["Boolean"] = 2;
const AddIntersectionTupleTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["TupleType"]["Any"] = 2;

const AddIntersectionArrayTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ArrayType"]["Literal"] = 2;
const AddIntersectionArrayTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ArrayType"]["Object"] = 2;
const AddIntersectionArrayTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ArrayType"]["String"] = 2;
const AddIntersectionArrayTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ArrayType"]["Number"] = 2;
const AddIntersectionArrayTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ArrayType"]["Boolean"] = 2;
const AddIntersectionArrayTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ArrayType"]["Any"] = 2;

const AddIntersectionFunctionTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["FunctionType"]["Literal"] = 2;
const AddIntersectionFunctionTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["FunctionType"]["Object"] = 2;
const AddIntersectionFunctionTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["FunctionType"]["String"] = 2;
const AddIntersectionFunctionTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["FunctionType"]["Number"] = 2;
const AddIntersectionFunctionTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["FunctionType"]["Boolean"] = 2;
const AddIntersectionFunctionTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["FunctionType"]["Any"] = 2;

const AddIntersectionConstructorTypeLiteralToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ConstructorType"]["Literal"] = 2;
const AddIntersectionConstructorTypeObjectToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ConstructorType"]["Object"] = 2;
const AddIntersectionConstructorTypeStringToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ConstructorType"]["String"] = 2;
const AddIntersectionConstructorTypeNumberToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ConstructorType"]["Number"] = 2;
const AddIntersectionConstructorTypeBooleanToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ConstructorType"]["Boolean"] = 2;
const AddIntersectionConstructorTypeAnyToParenthesizedTypeNumber: Defaults["ParenthesizedType"]["Number"] & Defaults["ConstructorType"]["Any"] = 2;

// Initial Value
const TypeParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] = true

// Changes
const AddIntersectionParenthesizedTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ParenthesizedType"]["Literal"] = true;
const AddIntersectionParenthesizedTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ParenthesizedType"]["Object"] = true;
const AddIntersectionParenthesizedTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ParenthesizedType"]["String"] = true;
const AddIntersectionParenthesizedTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ParenthesizedType"]["Number"] = true;
const AddIntersectionParenthesizedTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ParenthesizedType"]["Boolean"] = true;
const AddIntersectionParenthesizedTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ParenthesizedType"]["Any"] = true;

const AddIntersectionTypeReferenceBuiltinLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Literal"] = true;
const AddIntersectionTypeReferenceBuiltinObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Object"] = true;
const AddIntersectionTypeReferenceBuiltinStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["String"] = true;
const AddIntersectionTypeReferenceBuiltinNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Number"] = true;
const AddIntersectionTypeReferenceBuiltinBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = true;
const AddIntersectionTypeReferenceBuiltinAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Any"] = true;

const AddIntersectionTypeReferencePredefinedLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Literal"] = true;
const AddIntersectionTypeReferencePredefinedObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Object"] = true;
const AddIntersectionTypeReferencePredefinedStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeReferencePredefined"]["String"] = true;
const AddIntersectionTypeReferencePredefinedNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Number"] = true;
const AddIntersectionTypeReferencePredefinedBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Boolean"] = true;
const AddIntersectionTypeReferencePredefinedAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Any"] = true;

const AddIntersectionUnionTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["UnionType"]["Literal"] = true;
const AddIntersectionUnionTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["UnionType"]["Object"] = true;
const AddIntersectionUnionTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["UnionType"]["String"] = true;
const AddIntersectionUnionTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["UnionType"]["Number"] = true;
const AddIntersectionUnionTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["UnionType"]["Boolean"] = true;
const AddIntersectionUnionTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["UnionType"]["Any"] = true;

const AddIntersectionIntersectionTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["IntersectionType"]["Literal"] = true;
const AddIntersectionIntersectionTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["IntersectionType"]["Object"] = true;
const AddIntersectionIntersectionTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["IntersectionType"]["String"] = true;
const AddIntersectionIntersectionTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["IntersectionType"]["Number"] = true;
const AddIntersectionIntersectionTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["IntersectionType"]["Boolean"] = true;
const AddIntersectionIntersectionTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["IntersectionType"]["Any"] = true;

const AddIntersectionTypeLiteralLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeLiteral"]["Literal"] = true;
const AddIntersectionTypeLiteralObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeLiteral"]["Object"] = true;
const AddIntersectionTypeLiteralStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeLiteral"]["String"] = true;
const AddIntersectionTypeLiteralNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeLiteral"]["Number"] = true;
const AddIntersectionTypeLiteralBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeLiteral"]["Boolean"] = true;
const AddIntersectionTypeLiteralAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TypeLiteral"]["Any"] = true;

const AddIntersectionTupleTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TupleType"]["Literal"] = true;
const AddIntersectionTupleTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TupleType"]["Object"] = true;
const AddIntersectionTupleTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TupleType"]["String"] = true;
const AddIntersectionTupleTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TupleType"]["Number"] = true;
const AddIntersectionTupleTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TupleType"]["Boolean"] = true;
const AddIntersectionTupleTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["TupleType"]["Any"] = true;

const AddIntersectionArrayTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ArrayType"]["Literal"] = true;
const AddIntersectionArrayTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ArrayType"]["Object"] = true;
const AddIntersectionArrayTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ArrayType"]["String"] = true;
const AddIntersectionArrayTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ArrayType"]["Number"] = true;
const AddIntersectionArrayTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ArrayType"]["Boolean"] = true;
const AddIntersectionArrayTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ArrayType"]["Any"] = true;

const AddIntersectionFunctionTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["FunctionType"]["Literal"] = true;
const AddIntersectionFunctionTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["FunctionType"]["Object"] = true;
const AddIntersectionFunctionTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["FunctionType"]["String"] = true;
const AddIntersectionFunctionTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["FunctionType"]["Number"] = true;
const AddIntersectionFunctionTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["FunctionType"]["Boolean"] = true;
const AddIntersectionFunctionTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["FunctionType"]["Any"] = true;

const AddIntersectionConstructorTypeLiteralToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ConstructorType"]["Literal"] = true;
const AddIntersectionConstructorTypeObjectToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ConstructorType"]["Object"] = true;
const AddIntersectionConstructorTypeStringToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ConstructorType"]["String"] = true;
const AddIntersectionConstructorTypeNumberToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ConstructorType"]["Number"] = true;
const AddIntersectionConstructorTypeBooleanToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ConstructorType"]["Boolean"] = true;
const AddIntersectionConstructorTypeAnyToParenthesizedTypeBoolean: Defaults["ParenthesizedType"]["Boolean"] & Defaults["ConstructorType"]["Any"] = true;

// Initial Value
const TypeParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] = 2

// Changes
const AddIntersectionParenthesizedTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ParenthesizedType"]["Literal"] = 2;
const AddIntersectionParenthesizedTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ParenthesizedType"]["Object"] = 2;
const AddIntersectionParenthesizedTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ParenthesizedType"]["String"] = 2;
const AddIntersectionParenthesizedTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ParenthesizedType"]["Number"] = 2;
const AddIntersectionParenthesizedTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddIntersectionParenthesizedTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ParenthesizedType"]["Any"] = 2;

const AddIntersectionTypeReferenceBuiltinLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddIntersectionTypeReferenceBuiltinObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddIntersectionTypeReferenceBuiltinStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddIntersectionTypeReferenceBuiltinNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddIntersectionTypeReferenceBuiltinBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddIntersectionTypeReferenceBuiltinAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddIntersectionTypeReferencePredefinedLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddIntersectionTypeReferencePredefinedObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddIntersectionTypeReferencePredefinedStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeReferencePredefined"]["String"] = 2;
const AddIntersectionTypeReferencePredefinedNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddIntersectionTypeReferencePredefinedBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddIntersectionTypeReferencePredefinedAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddIntersectionUnionTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["UnionType"]["Literal"] = 2;
const AddIntersectionUnionTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["UnionType"]["Object"] = 2;
const AddIntersectionUnionTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["UnionType"]["String"] = 2;
const AddIntersectionUnionTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["UnionType"]["Number"] = 2;
const AddIntersectionUnionTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["UnionType"]["Boolean"] = 2;
const AddIntersectionUnionTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["UnionType"]["Any"] = 2;

const AddIntersectionIntersectionTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["IntersectionType"]["Literal"] = 2;
const AddIntersectionIntersectionTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["IntersectionType"]["Object"] = 2;
const AddIntersectionIntersectionTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["IntersectionType"]["String"] = 2;
const AddIntersectionIntersectionTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["IntersectionType"]["Number"] = 2;
const AddIntersectionIntersectionTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["IntersectionType"]["Boolean"] = 2;
const AddIntersectionIntersectionTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["IntersectionType"]["Any"] = 2;

const AddIntersectionTypeLiteralLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeLiteral"]["Literal"] = 2;
const AddIntersectionTypeLiteralObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeLiteral"]["Object"] = 2;
const AddIntersectionTypeLiteralStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeLiteral"]["String"] = 2;
const AddIntersectionTypeLiteralNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeLiteral"]["Number"] = 2;
const AddIntersectionTypeLiteralBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeLiteral"]["Boolean"] = 2;
const AddIntersectionTypeLiteralAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TypeLiteral"]["Any"] = 2;

const AddIntersectionTupleTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TupleType"]["Literal"] = 2;
const AddIntersectionTupleTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TupleType"]["Object"] = 2;
const AddIntersectionTupleTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TupleType"]["String"] = 2;
const AddIntersectionTupleTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TupleType"]["Number"] = 2;
const AddIntersectionTupleTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TupleType"]["Boolean"] = 2;
const AddIntersectionTupleTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["TupleType"]["Any"] = 2;

const AddIntersectionArrayTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ArrayType"]["Literal"] = 2;
const AddIntersectionArrayTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ArrayType"]["Object"] = 2;
const AddIntersectionArrayTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ArrayType"]["String"] = 2;
const AddIntersectionArrayTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ArrayType"]["Number"] = 2;
const AddIntersectionArrayTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ArrayType"]["Boolean"] = 2;
const AddIntersectionArrayTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ArrayType"]["Any"] = 2;

const AddIntersectionFunctionTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["FunctionType"]["Literal"] = 2;
const AddIntersectionFunctionTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["FunctionType"]["Object"] = 2;
const AddIntersectionFunctionTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["FunctionType"]["String"] = 2;
const AddIntersectionFunctionTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["FunctionType"]["Number"] = 2;
const AddIntersectionFunctionTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["FunctionType"]["Boolean"] = 2;
const AddIntersectionFunctionTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["FunctionType"]["Any"] = 2;

const AddIntersectionConstructorTypeLiteralToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ConstructorType"]["Literal"] = 2;
const AddIntersectionConstructorTypeObjectToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ConstructorType"]["Object"] = 2;
const AddIntersectionConstructorTypeStringToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ConstructorType"]["String"] = 2;
const AddIntersectionConstructorTypeNumberToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ConstructorType"]["Number"] = 2;
const AddIntersectionConstructorTypeBooleanToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ConstructorType"]["Boolean"] = 2;
const AddIntersectionConstructorTypeAnyToParenthesizedTypeAny: Defaults["ParenthesizedType"]["Any"] & Defaults["ConstructorType"]["Any"] = 2;

