import { Defaults } from "../../defaults";

/*
 * IntersectionType
 */

// Add Intersection - ConstructorType
// Initial Value
const TypeConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] = 1

// Changes
const AddIntersectionParenthesizedTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ParenthesizedType"]["Literal"] = 1;
const AddIntersectionParenthesizedTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ParenthesizedType"]["Object"] = 1;
const AddIntersectionParenthesizedTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ParenthesizedType"]["String"] = 1;
const AddIntersectionParenthesizedTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ParenthesizedType"]["Number"] = 1;
const AddIntersectionParenthesizedTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ParenthesizedType"]["Boolean"] = 1;
const AddIntersectionParenthesizedTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ParenthesizedType"]["Any"] = 1;

const AddIntersectionTypeReferenceBuiltinLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 1;
const AddIntersectionTypeReferenceBuiltinObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Object"] = 1;
const AddIntersectionTypeReferenceBuiltinStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["String"] = 1;
const AddIntersectionTypeReferenceBuiltinNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Number"] = 1;
const AddIntersectionTypeReferenceBuiltinBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 1;
const AddIntersectionTypeReferenceBuiltinAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Any"] = 1;

const AddIntersectionTypeReferencePredefinedLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeReferencePredefined"]["Literal"] = 1;
const AddIntersectionTypeReferencePredefinedObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeReferencePredefined"]["Object"] = 1;
const AddIntersectionTypeReferencePredefinedStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeReferencePredefined"]["String"] = 1;
const AddIntersectionTypeReferencePredefinedNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeReferencePredefined"]["Number"] = 1;
const AddIntersectionTypeReferencePredefinedBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeReferencePredefined"]["Boolean"] = 1;
const AddIntersectionTypeReferencePredefinedAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeReferencePredefined"]["Any"] = 1;

const AddIntersectionUnionTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["UnionType"]["Literal"] = 1;
const AddIntersectionUnionTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["UnionType"]["Object"] = 1;
const AddIntersectionUnionTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["UnionType"]["String"] = 1;
const AddIntersectionUnionTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["UnionType"]["Number"] = 1;
const AddIntersectionUnionTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["UnionType"]["Boolean"] = 1;
const AddIntersectionUnionTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["UnionType"]["Any"] = 1;

const AddIntersectionIntersectionTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["IntersectionType"]["Literal"] = 1;
const AddIntersectionIntersectionTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["IntersectionType"]["Object"] = 1;
const AddIntersectionIntersectionTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["IntersectionType"]["String"] = 1;
const AddIntersectionIntersectionTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["IntersectionType"]["Number"] = 1;
const AddIntersectionIntersectionTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["IntersectionType"]["Boolean"] = 1;
const AddIntersectionIntersectionTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["IntersectionType"]["Any"] = 1;

const AddIntersectionTypeLiteralLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeLiteral"]["Literal"] = 1;
const AddIntersectionTypeLiteralObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeLiteral"]["Object"] = 1;
const AddIntersectionTypeLiteralStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeLiteral"]["String"] = 1;
const AddIntersectionTypeLiteralNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeLiteral"]["Number"] = 1;
const AddIntersectionTypeLiteralBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeLiteral"]["Boolean"] = 1;
const AddIntersectionTypeLiteralAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TypeLiteral"]["Any"] = 1;

const AddIntersectionTupleTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TupleType"]["Literal"] = 1;
const AddIntersectionTupleTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TupleType"]["Object"] = 1;
const AddIntersectionTupleTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TupleType"]["String"] = 1;
const AddIntersectionTupleTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TupleType"]["Number"] = 1;
const AddIntersectionTupleTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TupleType"]["Boolean"] = 1;
const AddIntersectionTupleTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["TupleType"]["Any"] = 1;

const AddIntersectionArrayTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ArrayType"]["Literal"] = 1;
const AddIntersectionArrayTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ArrayType"]["Object"] = 1;
const AddIntersectionArrayTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ArrayType"]["String"] = 1;
const AddIntersectionArrayTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ArrayType"]["Number"] = 1;
const AddIntersectionArrayTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ArrayType"]["Boolean"] = 1;
const AddIntersectionArrayTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ArrayType"]["Any"] = 1;

const AddIntersectionFunctionTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["FunctionType"]["Literal"] = 1;
const AddIntersectionFunctionTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["FunctionType"]["Object"] = 1;
const AddIntersectionFunctionTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["FunctionType"]["String"] = 1;
const AddIntersectionFunctionTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["FunctionType"]["Number"] = 1;
const AddIntersectionFunctionTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["FunctionType"]["Boolean"] = 1;
const AddIntersectionFunctionTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["FunctionType"]["Any"] = 1;

const AddIntersectionConstructorTypeLiteralToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ConstructorType"]["Literal"] = 1;
const AddIntersectionConstructorTypeObjectToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ConstructorType"]["Object"] = 1;
const AddIntersectionConstructorTypeStringToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ConstructorType"]["String"] = 1;
const AddIntersectionConstructorTypeNumberToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ConstructorType"]["Number"] = 1;
const AddIntersectionConstructorTypeBooleanToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ConstructorType"]["Boolean"] = 1;
const AddIntersectionConstructorTypeAnyToConstructorTypeLiteral: Defaults["ConstructorType"]["Literal"] & Defaults["ConstructorType"]["Any"] = 1;

// Initial Value
const TypeConstructorTypeObject: Defaults["ConstructorType"]["Object"] = {}

// Changes
const AddIntersectionParenthesizedTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ParenthesizedType"]["Literal"] = {};
const AddIntersectionParenthesizedTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ParenthesizedType"]["Object"] = {};
const AddIntersectionParenthesizedTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ParenthesizedType"]["String"] = {};
const AddIntersectionParenthesizedTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ParenthesizedType"]["Number"] = {};
const AddIntersectionParenthesizedTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ParenthesizedType"]["Boolean"] = {};
const AddIntersectionParenthesizedTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ParenthesizedType"]["Any"] = {};

const AddIntersectionTypeReferenceBuiltinLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddIntersectionTypeReferenceBuiltinObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddIntersectionTypeReferenceBuiltinStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddIntersectionTypeReferenceBuiltinNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddIntersectionTypeReferenceBuiltinBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddIntersectionTypeReferenceBuiltinAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddIntersectionTypeReferencePredefinedLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddIntersectionTypeReferencePredefinedObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeReferencePredefined"]["Object"] = {};
const AddIntersectionTypeReferencePredefinedStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeReferencePredefined"]["String"] = {};
const AddIntersectionTypeReferencePredefinedNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeReferencePredefined"]["Number"] = {};
const AddIntersectionTypeReferencePredefinedBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddIntersectionTypeReferencePredefinedAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeReferencePredefined"]["Any"] = {};

const AddIntersectionUnionTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["UnionType"]["Literal"] = {};
const AddIntersectionUnionTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["UnionType"]["Object"] = {};
const AddIntersectionUnionTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["UnionType"]["String"] = {};
const AddIntersectionUnionTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["UnionType"]["Number"] = {};
const AddIntersectionUnionTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["UnionType"]["Boolean"] = {};
const AddIntersectionUnionTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["UnionType"]["Any"] = {};

const AddIntersectionIntersectionTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["IntersectionType"]["Literal"] = {};
const AddIntersectionIntersectionTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["IntersectionType"]["Object"] = {};
const AddIntersectionIntersectionTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["IntersectionType"]["String"] = {};
const AddIntersectionIntersectionTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["IntersectionType"]["Number"] = {};
const AddIntersectionIntersectionTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["IntersectionType"]["Boolean"] = {};
const AddIntersectionIntersectionTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["IntersectionType"]["Any"] = {};

const AddIntersectionTypeLiteralLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeLiteral"]["Literal"] = {};
const AddIntersectionTypeLiteralObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeLiteral"]["Object"] = {};
const AddIntersectionTypeLiteralStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeLiteral"]["String"] = {};
const AddIntersectionTypeLiteralNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeLiteral"]["Number"] = {};
const AddIntersectionTypeLiteralBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeLiteral"]["Boolean"] = {};
const AddIntersectionTypeLiteralAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TypeLiteral"]["Any"] = {};

const AddIntersectionTupleTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TupleType"]["Literal"] = {};
const AddIntersectionTupleTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TupleType"]["Object"] = {};
const AddIntersectionTupleTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TupleType"]["String"] = {};
const AddIntersectionTupleTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TupleType"]["Number"] = {};
const AddIntersectionTupleTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TupleType"]["Boolean"] = {};
const AddIntersectionTupleTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["TupleType"]["Any"] = {};

const AddIntersectionArrayTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ArrayType"]["Literal"] = {};
const AddIntersectionArrayTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ArrayType"]["Object"] = {};
const AddIntersectionArrayTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ArrayType"]["String"] = {};
const AddIntersectionArrayTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ArrayType"]["Number"] = {};
const AddIntersectionArrayTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ArrayType"]["Boolean"] = {};
const AddIntersectionArrayTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ArrayType"]["Any"] = {};

const AddIntersectionFunctionTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["FunctionType"]["Literal"] = {};
const AddIntersectionFunctionTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["FunctionType"]["Object"] = {};
const AddIntersectionFunctionTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["FunctionType"]["String"] = {};
const AddIntersectionFunctionTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["FunctionType"]["Number"] = {};
const AddIntersectionFunctionTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["FunctionType"]["Boolean"] = {};
const AddIntersectionFunctionTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["FunctionType"]["Any"] = {};

const AddIntersectionConstructorTypeLiteralToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ConstructorType"]["Literal"] = {};
const AddIntersectionConstructorTypeObjectToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ConstructorType"]["Object"] = {};
const AddIntersectionConstructorTypeStringToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ConstructorType"]["String"] = {};
const AddIntersectionConstructorTypeNumberToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ConstructorType"]["Number"] = {};
const AddIntersectionConstructorTypeBooleanToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ConstructorType"]["Boolean"] = {};
const AddIntersectionConstructorTypeAnyToConstructorTypeObject: Defaults["ConstructorType"]["Object"] & Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeConstructorTypeString: Defaults["ConstructorType"]["String"] = "two"

// Changes
const AddIntersectionParenthesizedTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ParenthesizedType"]["Literal"] = "two";
const AddIntersectionParenthesizedTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ParenthesizedType"]["Object"] = "two";
const AddIntersectionParenthesizedTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ParenthesizedType"]["String"] = "two";
const AddIntersectionParenthesizedTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ParenthesizedType"]["Number"] = "two";
const AddIntersectionParenthesizedTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ParenthesizedType"]["Boolean"] = "two";
const AddIntersectionParenthesizedTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ParenthesizedType"]["Any"] = "two";

const AddIntersectionTypeReferenceBuiltinLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeReferenceBuiltin"]["Literal"] = "two";
const AddIntersectionTypeReferenceBuiltinObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeReferenceBuiltin"]["Object"] = "two";
const AddIntersectionTypeReferenceBuiltinStringToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeReferenceBuiltin"]["String"] = "two";
const AddIntersectionTypeReferenceBuiltinNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeReferenceBuiltin"]["Number"] = "two";
const AddIntersectionTypeReferenceBuiltinBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = "two";
const AddIntersectionTypeReferenceBuiltinAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeReferenceBuiltin"]["Any"] = "two";

const AddIntersectionTypeReferencePredefinedLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeReferencePredefined"]["Literal"] = "two";
const AddIntersectionTypeReferencePredefinedObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeReferencePredefined"]["Object"] = "two";
const AddIntersectionTypeReferencePredefinedStringToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeReferencePredefined"]["String"] = "two";
const AddIntersectionTypeReferencePredefinedNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeReferencePredefined"]["Number"] = "two";
const AddIntersectionTypeReferencePredefinedBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeReferencePredefined"]["Boolean"] = "two";
const AddIntersectionTypeReferencePredefinedAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeReferencePredefined"]["Any"] = "two";

const AddIntersectionUnionTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["UnionType"]["Literal"] = "two";
const AddIntersectionUnionTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["UnionType"]["Object"] = "two";
const AddIntersectionUnionTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["UnionType"]["String"] = "two";
const AddIntersectionUnionTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["UnionType"]["Number"] = "two";
const AddIntersectionUnionTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["UnionType"]["Boolean"] = "two";
const AddIntersectionUnionTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["UnionType"]["Any"] = "two";

const AddIntersectionIntersectionTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["IntersectionType"]["Literal"] = "two";
const AddIntersectionIntersectionTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["IntersectionType"]["Object"] = "two";
const AddIntersectionIntersectionTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["IntersectionType"]["String"] = "two";
const AddIntersectionIntersectionTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["IntersectionType"]["Number"] = "two";
const AddIntersectionIntersectionTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["IntersectionType"]["Boolean"] = "two";
const AddIntersectionIntersectionTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["IntersectionType"]["Any"] = "two";

const AddIntersectionTypeLiteralLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeLiteral"]["Literal"] = "two";
const AddIntersectionTypeLiteralObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeLiteral"]["Object"] = "two";
const AddIntersectionTypeLiteralStringToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeLiteral"]["String"] = "two";
const AddIntersectionTypeLiteralNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeLiteral"]["Number"] = "two";
const AddIntersectionTypeLiteralBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeLiteral"]["Boolean"] = "two";
const AddIntersectionTypeLiteralAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TypeLiteral"]["Any"] = "two";

const AddIntersectionTupleTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TupleType"]["Literal"] = "two";
const AddIntersectionTupleTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TupleType"]["Object"] = "two";
const AddIntersectionTupleTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TupleType"]["String"] = "two";
const AddIntersectionTupleTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TupleType"]["Number"] = "two";
const AddIntersectionTupleTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TupleType"]["Boolean"] = "two";
const AddIntersectionTupleTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["TupleType"]["Any"] = "two";

const AddIntersectionArrayTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ArrayType"]["Literal"] = "two";
const AddIntersectionArrayTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ArrayType"]["Object"] = "two";
const AddIntersectionArrayTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ArrayType"]["String"] = "two";
const AddIntersectionArrayTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ArrayType"]["Number"] = "two";
const AddIntersectionArrayTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ArrayType"]["Boolean"] = "two";
const AddIntersectionArrayTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ArrayType"]["Any"] = "two";

const AddIntersectionFunctionTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["FunctionType"]["Literal"] = "two";
const AddIntersectionFunctionTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["FunctionType"]["Object"] = "two";
const AddIntersectionFunctionTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["FunctionType"]["String"] = "two";
const AddIntersectionFunctionTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["FunctionType"]["Number"] = "two";
const AddIntersectionFunctionTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["FunctionType"]["Boolean"] = "two";
const AddIntersectionFunctionTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["FunctionType"]["Any"] = "two";

const AddIntersectionConstructorTypeLiteralToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ConstructorType"]["Literal"] = "two";
const AddIntersectionConstructorTypeObjectToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ConstructorType"]["Object"] = "two";
const AddIntersectionConstructorTypeStringToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ConstructorType"]["String"] = "two";
const AddIntersectionConstructorTypeNumberToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ConstructorType"]["Number"] = "two";
const AddIntersectionConstructorTypeBooleanToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ConstructorType"]["Boolean"] = "two";
const AddIntersectionConstructorTypeAnyToConstructorTypeString: Defaults["ConstructorType"]["String"] & Defaults["ConstructorType"]["Any"] = "two";

// Initial Value
const TypeConstructorTypeNumber: Defaults["ConstructorType"]["Number"] = 2

// Changes
const AddIntersectionParenthesizedTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ParenthesizedType"]["Literal"] = 2;
const AddIntersectionParenthesizedTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ParenthesizedType"]["Object"] = 2;
const AddIntersectionParenthesizedTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ParenthesizedType"]["String"] = 2;
const AddIntersectionParenthesizedTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ParenthesizedType"]["Number"] = 2;
const AddIntersectionParenthesizedTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddIntersectionParenthesizedTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ParenthesizedType"]["Any"] = 2;

const AddIntersectionTypeReferenceBuiltinLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddIntersectionTypeReferenceBuiltinObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddIntersectionTypeReferenceBuiltinStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddIntersectionTypeReferenceBuiltinNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddIntersectionTypeReferenceBuiltinBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddIntersectionTypeReferenceBuiltinAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddIntersectionTypeReferencePredefinedLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddIntersectionTypeReferencePredefinedObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddIntersectionTypeReferencePredefinedStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeReferencePredefined"]["String"] = 2;
const AddIntersectionTypeReferencePredefinedNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddIntersectionTypeReferencePredefinedBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddIntersectionTypeReferencePredefinedAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddIntersectionUnionTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["UnionType"]["Literal"] = 2;
const AddIntersectionUnionTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["UnionType"]["Object"] = 2;
const AddIntersectionUnionTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["UnionType"]["String"] = 2;
const AddIntersectionUnionTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["UnionType"]["Number"] = 2;
const AddIntersectionUnionTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["UnionType"]["Boolean"] = 2;
const AddIntersectionUnionTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["UnionType"]["Any"] = 2;

const AddIntersectionIntersectionTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["IntersectionType"]["Literal"] = 2;
const AddIntersectionIntersectionTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["IntersectionType"]["Object"] = 2;
const AddIntersectionIntersectionTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["IntersectionType"]["String"] = 2;
const AddIntersectionIntersectionTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["IntersectionType"]["Number"] = 2;
const AddIntersectionIntersectionTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["IntersectionType"]["Boolean"] = 2;
const AddIntersectionIntersectionTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["IntersectionType"]["Any"] = 2;

const AddIntersectionTypeLiteralLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeLiteral"]["Literal"] = 2;
const AddIntersectionTypeLiteralObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeLiteral"]["Object"] = 2;
const AddIntersectionTypeLiteralStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeLiteral"]["String"] = 2;
const AddIntersectionTypeLiteralNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeLiteral"]["Number"] = 2;
const AddIntersectionTypeLiteralBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeLiteral"]["Boolean"] = 2;
const AddIntersectionTypeLiteralAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TypeLiteral"]["Any"] = 2;

const AddIntersectionTupleTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TupleType"]["Literal"] = 2;
const AddIntersectionTupleTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TupleType"]["Object"] = 2;
const AddIntersectionTupleTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TupleType"]["String"] = 2;
const AddIntersectionTupleTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TupleType"]["Number"] = 2;
const AddIntersectionTupleTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TupleType"]["Boolean"] = 2;
const AddIntersectionTupleTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["TupleType"]["Any"] = 2;

const AddIntersectionArrayTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ArrayType"]["Literal"] = 2;
const AddIntersectionArrayTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ArrayType"]["Object"] = 2;
const AddIntersectionArrayTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ArrayType"]["String"] = 2;
const AddIntersectionArrayTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ArrayType"]["Number"] = 2;
const AddIntersectionArrayTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ArrayType"]["Boolean"] = 2;
const AddIntersectionArrayTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ArrayType"]["Any"] = 2;

const AddIntersectionFunctionTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["FunctionType"]["Literal"] = 2;
const AddIntersectionFunctionTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["FunctionType"]["Object"] = 2;
const AddIntersectionFunctionTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["FunctionType"]["String"] = 2;
const AddIntersectionFunctionTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["FunctionType"]["Number"] = 2;
const AddIntersectionFunctionTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["FunctionType"]["Boolean"] = 2;
const AddIntersectionFunctionTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["FunctionType"]["Any"] = 2;

const AddIntersectionConstructorTypeLiteralToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ConstructorType"]["Literal"] = 2;
const AddIntersectionConstructorTypeObjectToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ConstructorType"]["Object"] = 2;
const AddIntersectionConstructorTypeStringToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ConstructorType"]["String"] = 2;
const AddIntersectionConstructorTypeNumberToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ConstructorType"]["Number"] = 2;
const AddIntersectionConstructorTypeBooleanToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ConstructorType"]["Boolean"] = 2;
const AddIntersectionConstructorTypeAnyToConstructorTypeNumber: Defaults["ConstructorType"]["Number"] & Defaults["ConstructorType"]["Any"] = 2;

// Initial Value
const TypeConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] = true

// Changes
const AddIntersectionParenthesizedTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ParenthesizedType"]["Literal"] = true;
const AddIntersectionParenthesizedTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ParenthesizedType"]["Object"] = true;
const AddIntersectionParenthesizedTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ParenthesizedType"]["String"] = true;
const AddIntersectionParenthesizedTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ParenthesizedType"]["Number"] = true;
const AddIntersectionParenthesizedTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ParenthesizedType"]["Boolean"] = true;
const AddIntersectionParenthesizedTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ParenthesizedType"]["Any"] = true;

const AddIntersectionTypeReferenceBuiltinLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Literal"] = true;
const AddIntersectionTypeReferenceBuiltinObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Object"] = true;
const AddIntersectionTypeReferenceBuiltinStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["String"] = true;
const AddIntersectionTypeReferenceBuiltinNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Number"] = true;
const AddIntersectionTypeReferenceBuiltinBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = true;
const AddIntersectionTypeReferenceBuiltinAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Any"] = true;

const AddIntersectionTypeReferencePredefinedLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Literal"] = true;
const AddIntersectionTypeReferencePredefinedObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Object"] = true;
const AddIntersectionTypeReferencePredefinedStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeReferencePredefined"]["String"] = true;
const AddIntersectionTypeReferencePredefinedNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Number"] = true;
const AddIntersectionTypeReferencePredefinedBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Boolean"] = true;
const AddIntersectionTypeReferencePredefinedAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Any"] = true;

const AddIntersectionUnionTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["UnionType"]["Literal"] = true;
const AddIntersectionUnionTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["UnionType"]["Object"] = true;
const AddIntersectionUnionTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["UnionType"]["String"] = true;
const AddIntersectionUnionTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["UnionType"]["Number"] = true;
const AddIntersectionUnionTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["UnionType"]["Boolean"] = true;
const AddIntersectionUnionTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["UnionType"]["Any"] = true;

const AddIntersectionIntersectionTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["IntersectionType"]["Literal"] = true;
const AddIntersectionIntersectionTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["IntersectionType"]["Object"] = true;
const AddIntersectionIntersectionTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["IntersectionType"]["String"] = true;
const AddIntersectionIntersectionTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["IntersectionType"]["Number"] = true;
const AddIntersectionIntersectionTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["IntersectionType"]["Boolean"] = true;
const AddIntersectionIntersectionTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["IntersectionType"]["Any"] = true;

const AddIntersectionTypeLiteralLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeLiteral"]["Literal"] = true;
const AddIntersectionTypeLiteralObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeLiteral"]["Object"] = true;
const AddIntersectionTypeLiteralStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeLiteral"]["String"] = true;
const AddIntersectionTypeLiteralNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeLiteral"]["Number"] = true;
const AddIntersectionTypeLiteralBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeLiteral"]["Boolean"] = true;
const AddIntersectionTypeLiteralAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TypeLiteral"]["Any"] = true;

const AddIntersectionTupleTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TupleType"]["Literal"] = true;
const AddIntersectionTupleTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TupleType"]["Object"] = true;
const AddIntersectionTupleTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TupleType"]["String"] = true;
const AddIntersectionTupleTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TupleType"]["Number"] = true;
const AddIntersectionTupleTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TupleType"]["Boolean"] = true;
const AddIntersectionTupleTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["TupleType"]["Any"] = true;

const AddIntersectionArrayTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ArrayType"]["Literal"] = true;
const AddIntersectionArrayTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ArrayType"]["Object"] = true;
const AddIntersectionArrayTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ArrayType"]["String"] = true;
const AddIntersectionArrayTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ArrayType"]["Number"] = true;
const AddIntersectionArrayTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ArrayType"]["Boolean"] = true;
const AddIntersectionArrayTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ArrayType"]["Any"] = true;

const AddIntersectionFunctionTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["FunctionType"]["Literal"] = true;
const AddIntersectionFunctionTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["FunctionType"]["Object"] = true;
const AddIntersectionFunctionTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["FunctionType"]["String"] = true;
const AddIntersectionFunctionTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["FunctionType"]["Number"] = true;
const AddIntersectionFunctionTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["FunctionType"]["Boolean"] = true;
const AddIntersectionFunctionTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["FunctionType"]["Any"] = true;

const AddIntersectionConstructorTypeLiteralToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ConstructorType"]["Literal"] = true;
const AddIntersectionConstructorTypeObjectToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ConstructorType"]["Object"] = true;
const AddIntersectionConstructorTypeStringToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ConstructorType"]["String"] = true;
const AddIntersectionConstructorTypeNumberToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ConstructorType"]["Number"] = true;
const AddIntersectionConstructorTypeBooleanToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ConstructorType"]["Boolean"] = true;
const AddIntersectionConstructorTypeAnyToConstructorTypeBoolean: Defaults["ConstructorType"]["Boolean"] & Defaults["ConstructorType"]["Any"] = true;

// Initial Value
const TypeConstructorTypeAny: Defaults["ConstructorType"]["Any"] = 2

// Changes
const AddIntersectionParenthesizedTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ParenthesizedType"]["Literal"] = 2;
const AddIntersectionParenthesizedTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ParenthesizedType"]["Object"] = 2;
const AddIntersectionParenthesizedTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ParenthesizedType"]["String"] = 2;
const AddIntersectionParenthesizedTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ParenthesizedType"]["Number"] = 2;
const AddIntersectionParenthesizedTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddIntersectionParenthesizedTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ParenthesizedType"]["Any"] = 2;

const AddIntersectionTypeReferenceBuiltinLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddIntersectionTypeReferenceBuiltinObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddIntersectionTypeReferenceBuiltinStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddIntersectionTypeReferenceBuiltinNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddIntersectionTypeReferenceBuiltinBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddIntersectionTypeReferenceBuiltinAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddIntersectionTypeReferencePredefinedLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddIntersectionTypeReferencePredefinedObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddIntersectionTypeReferencePredefinedStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeReferencePredefined"]["String"] = 2;
const AddIntersectionTypeReferencePredefinedNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddIntersectionTypeReferencePredefinedBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddIntersectionTypeReferencePredefinedAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddIntersectionUnionTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["UnionType"]["Literal"] = 2;
const AddIntersectionUnionTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["UnionType"]["Object"] = 2;
const AddIntersectionUnionTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["UnionType"]["String"] = 2;
const AddIntersectionUnionTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["UnionType"]["Number"] = 2;
const AddIntersectionUnionTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["UnionType"]["Boolean"] = 2;
const AddIntersectionUnionTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["UnionType"]["Any"] = 2;

const AddIntersectionIntersectionTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["IntersectionType"]["Literal"] = 2;
const AddIntersectionIntersectionTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["IntersectionType"]["Object"] = 2;
const AddIntersectionIntersectionTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["IntersectionType"]["String"] = 2;
const AddIntersectionIntersectionTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["IntersectionType"]["Number"] = 2;
const AddIntersectionIntersectionTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["IntersectionType"]["Boolean"] = 2;
const AddIntersectionIntersectionTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["IntersectionType"]["Any"] = 2;

const AddIntersectionTypeLiteralLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeLiteral"]["Literal"] = 2;
const AddIntersectionTypeLiteralObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeLiteral"]["Object"] = 2;
const AddIntersectionTypeLiteralStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeLiteral"]["String"] = 2;
const AddIntersectionTypeLiteralNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeLiteral"]["Number"] = 2;
const AddIntersectionTypeLiteralBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeLiteral"]["Boolean"] = 2;
const AddIntersectionTypeLiteralAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TypeLiteral"]["Any"] = 2;

const AddIntersectionTupleTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TupleType"]["Literal"] = 2;
const AddIntersectionTupleTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TupleType"]["Object"] = 2;
const AddIntersectionTupleTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TupleType"]["String"] = 2;
const AddIntersectionTupleTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TupleType"]["Number"] = 2;
const AddIntersectionTupleTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TupleType"]["Boolean"] = 2;
const AddIntersectionTupleTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["TupleType"]["Any"] = 2;

const AddIntersectionArrayTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ArrayType"]["Literal"] = 2;
const AddIntersectionArrayTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ArrayType"]["Object"] = 2;
const AddIntersectionArrayTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ArrayType"]["String"] = 2;
const AddIntersectionArrayTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ArrayType"]["Number"] = 2;
const AddIntersectionArrayTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ArrayType"]["Boolean"] = 2;
const AddIntersectionArrayTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ArrayType"]["Any"] = 2;

const AddIntersectionFunctionTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["FunctionType"]["Literal"] = 2;
const AddIntersectionFunctionTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["FunctionType"]["Object"] = 2;
const AddIntersectionFunctionTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["FunctionType"]["String"] = 2;
const AddIntersectionFunctionTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["FunctionType"]["Number"] = 2;
const AddIntersectionFunctionTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["FunctionType"]["Boolean"] = 2;
const AddIntersectionFunctionTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["FunctionType"]["Any"] = 2;

const AddIntersectionConstructorTypeLiteralToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ConstructorType"]["Literal"] = 2;
const AddIntersectionConstructorTypeObjectToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ConstructorType"]["Object"] = 2;
const AddIntersectionConstructorTypeStringToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ConstructorType"]["String"] = 2;
const AddIntersectionConstructorTypeNumberToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ConstructorType"]["Number"] = 2;
const AddIntersectionConstructorTypeBooleanToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ConstructorType"]["Boolean"] = 2;
const AddIntersectionConstructorTypeAnyToConstructorTypeAny: Defaults["ConstructorType"]["Any"] & Defaults["ConstructorType"]["Any"] = 2;

