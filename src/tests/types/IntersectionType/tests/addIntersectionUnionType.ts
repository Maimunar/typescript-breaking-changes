import { Defaults } from "../../defaults";

/*
 * IntersectionType
 */

// Add Intersection - UnionType
// Initial Value
const TypeUnionTypeLiteral: Defaults["UnionType"]["Literal"] = 1

// Changes
const AddIntersectionParenthesizedTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ParenthesizedType"]["Literal"] = 1;
const AddIntersectionParenthesizedTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ParenthesizedType"]["Object"] = 1;
const AddIntersectionParenthesizedTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ParenthesizedType"]["String"] = 1;
const AddIntersectionParenthesizedTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ParenthesizedType"]["Number"] = 1;
const AddIntersectionParenthesizedTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ParenthesizedType"]["Boolean"] = 1;
const AddIntersectionParenthesizedTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ParenthesizedType"]["Any"] = 1;

const AddIntersectionTypeReferenceBuiltinLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 1;
const AddIntersectionTypeReferenceBuiltinObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Object"] = 1;
const AddIntersectionTypeReferenceBuiltinStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["String"] = 1;
const AddIntersectionTypeReferenceBuiltinNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Number"] = 1;
const AddIntersectionTypeReferenceBuiltinBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 1;
const AddIntersectionTypeReferenceBuiltinAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Any"] = 1;

const AddIntersectionTypeReferencePredefinedLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeReferencePredefined"]["Literal"] = 1;
const AddIntersectionTypeReferencePredefinedObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeReferencePredefined"]["Object"] = 1;
const AddIntersectionTypeReferencePredefinedStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeReferencePredefined"]["String"] = 1;
const AddIntersectionTypeReferencePredefinedNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeReferencePredefined"]["Number"] = 1;
const AddIntersectionTypeReferencePredefinedBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeReferencePredefined"]["Boolean"] = 1;
const AddIntersectionTypeReferencePredefinedAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeReferencePredefined"]["Any"] = 1;

const AddIntersectionUnionTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["UnionType"]["Literal"] = 1;
const AddIntersectionUnionTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["UnionType"]["Object"] = 1;
const AddIntersectionUnionTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["UnionType"]["String"] = 1;
const AddIntersectionUnionTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["UnionType"]["Number"] = 1;
const AddIntersectionUnionTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["UnionType"]["Boolean"] = 1;
const AddIntersectionUnionTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["UnionType"]["Any"] = 1;

const AddIntersectionIntersectionTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["IntersectionType"]["Literal"] = 1;
const AddIntersectionIntersectionTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["IntersectionType"]["Object"] = 1;
const AddIntersectionIntersectionTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["IntersectionType"]["String"] = 1;
const AddIntersectionIntersectionTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["IntersectionType"]["Number"] = 1;
const AddIntersectionIntersectionTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["IntersectionType"]["Boolean"] = 1;
const AddIntersectionIntersectionTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["IntersectionType"]["Any"] = 1;

const AddIntersectionTypeLiteralLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeLiteral"]["Literal"] = 1;
const AddIntersectionTypeLiteralObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeLiteral"]["Object"] = 1;
const AddIntersectionTypeLiteralStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeLiteral"]["String"] = 1;
const AddIntersectionTypeLiteralNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeLiteral"]["Number"] = 1;
const AddIntersectionTypeLiteralBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeLiteral"]["Boolean"] = 1;
const AddIntersectionTypeLiteralAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TypeLiteral"]["Any"] = 1;

const AddIntersectionTupleTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TupleType"]["Literal"] = 1;
const AddIntersectionTupleTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TupleType"]["Object"] = 1;
const AddIntersectionTupleTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TupleType"]["String"] = 1;
const AddIntersectionTupleTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TupleType"]["Number"] = 1;
const AddIntersectionTupleTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TupleType"]["Boolean"] = 1;
const AddIntersectionTupleTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["TupleType"]["Any"] = 1;

const AddIntersectionArrayTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ArrayType"]["Literal"] = 1;
const AddIntersectionArrayTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ArrayType"]["Object"] = 1;
const AddIntersectionArrayTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ArrayType"]["String"] = 1;
const AddIntersectionArrayTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ArrayType"]["Number"] = 1;
const AddIntersectionArrayTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ArrayType"]["Boolean"] = 1;
const AddIntersectionArrayTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ArrayType"]["Any"] = 1;

const AddIntersectionFunctionTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["FunctionType"]["Literal"] = 1;
const AddIntersectionFunctionTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["FunctionType"]["Object"] = 1;
const AddIntersectionFunctionTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["FunctionType"]["String"] = 1;
const AddIntersectionFunctionTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["FunctionType"]["Number"] = 1;
const AddIntersectionFunctionTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["FunctionType"]["Boolean"] = 1;
const AddIntersectionFunctionTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["FunctionType"]["Any"] = 1;

const AddIntersectionConstructorTypeLiteralToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ConstructorType"]["Literal"] = 1;
const AddIntersectionConstructorTypeObjectToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ConstructorType"]["Object"] = 1;
const AddIntersectionConstructorTypeStringToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ConstructorType"]["String"] = 1;
const AddIntersectionConstructorTypeNumberToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ConstructorType"]["Number"] = 1;
const AddIntersectionConstructorTypeBooleanToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ConstructorType"]["Boolean"] = 1;
const AddIntersectionConstructorTypeAnyToUnionTypeLiteral: Defaults["UnionType"]["Literal"] & Defaults["ConstructorType"]["Any"] = 1;

// Initial Value
const TypeUnionTypeObject: Defaults["UnionType"]["Object"] = {}

// Changes
const AddIntersectionParenthesizedTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ParenthesizedType"]["Literal"] = {};
const AddIntersectionParenthesizedTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ParenthesizedType"]["Object"] = {};
const AddIntersectionParenthesizedTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ParenthesizedType"]["String"] = {};
const AddIntersectionParenthesizedTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ParenthesizedType"]["Number"] = {};
const AddIntersectionParenthesizedTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ParenthesizedType"]["Boolean"] = {};
const AddIntersectionParenthesizedTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ParenthesizedType"]["Any"] = {};

const AddIntersectionTypeReferenceBuiltinLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddIntersectionTypeReferenceBuiltinObjectToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddIntersectionTypeReferenceBuiltinStringToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddIntersectionTypeReferenceBuiltinNumberToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddIntersectionTypeReferenceBuiltinBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddIntersectionTypeReferenceBuiltinAnyToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddIntersectionTypeReferencePredefinedLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddIntersectionTypeReferencePredefinedObjectToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeReferencePredefined"]["Object"] = {};
const AddIntersectionTypeReferencePredefinedStringToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeReferencePredefined"]["String"] = {};
const AddIntersectionTypeReferencePredefinedNumberToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeReferencePredefined"]["Number"] = {};
const AddIntersectionTypeReferencePredefinedBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddIntersectionTypeReferencePredefinedAnyToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeReferencePredefined"]["Any"] = {};

const AddIntersectionUnionTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["UnionType"]["Literal"] = {};
const AddIntersectionUnionTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["UnionType"]["Object"] = {};
const AddIntersectionUnionTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["UnionType"]["String"] = {};
const AddIntersectionUnionTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["UnionType"]["Number"] = {};
const AddIntersectionUnionTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["UnionType"]["Boolean"] = {};
const AddIntersectionUnionTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["UnionType"]["Any"] = {};

const AddIntersectionIntersectionTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["IntersectionType"]["Literal"] = {};
const AddIntersectionIntersectionTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["IntersectionType"]["Object"] = {};
const AddIntersectionIntersectionTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["IntersectionType"]["String"] = {};
const AddIntersectionIntersectionTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["IntersectionType"]["Number"] = {};
const AddIntersectionIntersectionTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["IntersectionType"]["Boolean"] = {};
const AddIntersectionIntersectionTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["IntersectionType"]["Any"] = {};

const AddIntersectionTypeLiteralLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeLiteral"]["Literal"] = {};
const AddIntersectionTypeLiteralObjectToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeLiteral"]["Object"] = {};
const AddIntersectionTypeLiteralStringToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeLiteral"]["String"] = {};
const AddIntersectionTypeLiteralNumberToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeLiteral"]["Number"] = {};
const AddIntersectionTypeLiteralBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeLiteral"]["Boolean"] = {};
const AddIntersectionTypeLiteralAnyToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TypeLiteral"]["Any"] = {};

const AddIntersectionTupleTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TupleType"]["Literal"] = {};
const AddIntersectionTupleTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TupleType"]["Object"] = {};
const AddIntersectionTupleTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TupleType"]["String"] = {};
const AddIntersectionTupleTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TupleType"]["Number"] = {};
const AddIntersectionTupleTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TupleType"]["Boolean"] = {};
const AddIntersectionTupleTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["TupleType"]["Any"] = {};

const AddIntersectionArrayTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ArrayType"]["Literal"] = {};
const AddIntersectionArrayTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ArrayType"]["Object"] = {};
const AddIntersectionArrayTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ArrayType"]["String"] = {};
const AddIntersectionArrayTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ArrayType"]["Number"] = {};
const AddIntersectionArrayTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ArrayType"]["Boolean"] = {};
const AddIntersectionArrayTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ArrayType"]["Any"] = {};

const AddIntersectionFunctionTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["FunctionType"]["Literal"] = {};
const AddIntersectionFunctionTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["FunctionType"]["Object"] = {};
const AddIntersectionFunctionTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["FunctionType"]["String"] = {};
const AddIntersectionFunctionTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["FunctionType"]["Number"] = {};
const AddIntersectionFunctionTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["FunctionType"]["Boolean"] = {};
const AddIntersectionFunctionTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["FunctionType"]["Any"] = {};

const AddIntersectionConstructorTypeLiteralToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ConstructorType"]["Literal"] = {};
const AddIntersectionConstructorTypeObjectToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ConstructorType"]["Object"] = {};
const AddIntersectionConstructorTypeStringToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ConstructorType"]["String"] = {};
const AddIntersectionConstructorTypeNumberToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ConstructorType"]["Number"] = {};
const AddIntersectionConstructorTypeBooleanToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ConstructorType"]["Boolean"] = {};
const AddIntersectionConstructorTypeAnyToUnionTypeObject: Defaults["UnionType"]["Object"] & Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeUnionTypeString: Defaults["UnionType"]["String"] = "two"

// Changes
const AddIntersectionParenthesizedTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ParenthesizedType"]["Literal"] = "two";
const AddIntersectionParenthesizedTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ParenthesizedType"]["Object"] = "two";
const AddIntersectionParenthesizedTypeStringToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ParenthesizedType"]["String"] = "two";
const AddIntersectionParenthesizedTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ParenthesizedType"]["Number"] = "two";
const AddIntersectionParenthesizedTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ParenthesizedType"]["Boolean"] = "two";
const AddIntersectionParenthesizedTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ParenthesizedType"]["Any"] = "two";

const AddIntersectionTypeReferenceBuiltinLiteralToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeReferenceBuiltin"]["Literal"] = "two";
const AddIntersectionTypeReferenceBuiltinObjectToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeReferenceBuiltin"]["Object"] = "two";
const AddIntersectionTypeReferenceBuiltinStringToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeReferenceBuiltin"]["String"] = "two";
const AddIntersectionTypeReferenceBuiltinNumberToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeReferenceBuiltin"]["Number"] = "two";
const AddIntersectionTypeReferenceBuiltinBooleanToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = "two";
const AddIntersectionTypeReferenceBuiltinAnyToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeReferenceBuiltin"]["Any"] = "two";

const AddIntersectionTypeReferencePredefinedLiteralToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeReferencePredefined"]["Literal"] = "two";
const AddIntersectionTypeReferencePredefinedObjectToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeReferencePredefined"]["Object"] = "two";
const AddIntersectionTypeReferencePredefinedStringToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeReferencePredefined"]["String"] = "two";
const AddIntersectionTypeReferencePredefinedNumberToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeReferencePredefined"]["Number"] = "two";
const AddIntersectionTypeReferencePredefinedBooleanToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeReferencePredefined"]["Boolean"] = "two";
const AddIntersectionTypeReferencePredefinedAnyToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeReferencePredefined"]["Any"] = "two";

const AddIntersectionUnionTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["UnionType"]["Literal"] = "two";
const AddIntersectionUnionTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["UnionType"]["Object"] = "two";
const AddIntersectionUnionTypeStringToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["UnionType"]["String"] = "two";
const AddIntersectionUnionTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["UnionType"]["Number"] = "two";
const AddIntersectionUnionTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["UnionType"]["Boolean"] = "two";
const AddIntersectionUnionTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["UnionType"]["Any"] = "two";

const AddIntersectionIntersectionTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["IntersectionType"]["Literal"] = "two";
const AddIntersectionIntersectionTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["IntersectionType"]["Object"] = "two";
const AddIntersectionIntersectionTypeStringToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["IntersectionType"]["String"] = "two";
const AddIntersectionIntersectionTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["IntersectionType"]["Number"] = "two";
const AddIntersectionIntersectionTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["IntersectionType"]["Boolean"] = "two";
const AddIntersectionIntersectionTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["IntersectionType"]["Any"] = "two";

const AddIntersectionTypeLiteralLiteralToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeLiteral"]["Literal"] = "two";
const AddIntersectionTypeLiteralObjectToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeLiteral"]["Object"] = "two";
const AddIntersectionTypeLiteralStringToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeLiteral"]["String"] = "two";
const AddIntersectionTypeLiteralNumberToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeLiteral"]["Number"] = "two";
const AddIntersectionTypeLiteralBooleanToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeLiteral"]["Boolean"] = "two";
const AddIntersectionTypeLiteralAnyToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TypeLiteral"]["Any"] = "two";

const AddIntersectionTupleTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TupleType"]["Literal"] = "two";
const AddIntersectionTupleTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TupleType"]["Object"] = "two";
const AddIntersectionTupleTypeStringToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TupleType"]["String"] = "two";
const AddIntersectionTupleTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TupleType"]["Number"] = "two";
const AddIntersectionTupleTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TupleType"]["Boolean"] = "two";
const AddIntersectionTupleTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["TupleType"]["Any"] = "two";

const AddIntersectionArrayTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ArrayType"]["Literal"] = "two";
const AddIntersectionArrayTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ArrayType"]["Object"] = "two";
const AddIntersectionArrayTypeStringToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ArrayType"]["String"] = "two";
const AddIntersectionArrayTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ArrayType"]["Number"] = "two";
const AddIntersectionArrayTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ArrayType"]["Boolean"] = "two";
const AddIntersectionArrayTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ArrayType"]["Any"] = "two";

const AddIntersectionFunctionTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["FunctionType"]["Literal"] = "two";
const AddIntersectionFunctionTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["FunctionType"]["Object"] = "two";
const AddIntersectionFunctionTypeStringToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["FunctionType"]["String"] = "two";
const AddIntersectionFunctionTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["FunctionType"]["Number"] = "two";
const AddIntersectionFunctionTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["FunctionType"]["Boolean"] = "two";
const AddIntersectionFunctionTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["FunctionType"]["Any"] = "two";

const AddIntersectionConstructorTypeLiteralToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ConstructorType"]["Literal"] = "two";
const AddIntersectionConstructorTypeObjectToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ConstructorType"]["Object"] = "two";
const AddIntersectionConstructorTypeStringToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ConstructorType"]["String"] = "two";
const AddIntersectionConstructorTypeNumberToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ConstructorType"]["Number"] = "two";
const AddIntersectionConstructorTypeBooleanToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ConstructorType"]["Boolean"] = "two";
const AddIntersectionConstructorTypeAnyToUnionTypeString: Defaults["UnionType"]["String"] & Defaults["ConstructorType"]["Any"] = "two";

// Initial Value
const TypeUnionTypeNumber: Defaults["UnionType"]["Number"] = 2

// Changes
const AddIntersectionParenthesizedTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ParenthesizedType"]["Literal"] = 2;
const AddIntersectionParenthesizedTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ParenthesizedType"]["Object"] = 2;
const AddIntersectionParenthesizedTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ParenthesizedType"]["String"] = 2;
const AddIntersectionParenthesizedTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ParenthesizedType"]["Number"] = 2;
const AddIntersectionParenthesizedTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddIntersectionParenthesizedTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ParenthesizedType"]["Any"] = 2;

const AddIntersectionTypeReferenceBuiltinLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddIntersectionTypeReferenceBuiltinObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddIntersectionTypeReferenceBuiltinStringToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddIntersectionTypeReferenceBuiltinNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddIntersectionTypeReferenceBuiltinBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddIntersectionTypeReferenceBuiltinAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddIntersectionTypeReferencePredefinedLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddIntersectionTypeReferencePredefinedObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddIntersectionTypeReferencePredefinedStringToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeReferencePredefined"]["String"] = 2;
const AddIntersectionTypeReferencePredefinedNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddIntersectionTypeReferencePredefinedBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddIntersectionTypeReferencePredefinedAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddIntersectionUnionTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["UnionType"]["Literal"] = 2;
const AddIntersectionUnionTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["UnionType"]["Object"] = 2;
const AddIntersectionUnionTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["UnionType"]["String"] = 2;
const AddIntersectionUnionTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["UnionType"]["Number"] = 2;
const AddIntersectionUnionTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["UnionType"]["Boolean"] = 2;
const AddIntersectionUnionTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["UnionType"]["Any"] = 2;

const AddIntersectionIntersectionTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["IntersectionType"]["Literal"] = 2;
const AddIntersectionIntersectionTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["IntersectionType"]["Object"] = 2;
const AddIntersectionIntersectionTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["IntersectionType"]["String"] = 2;
const AddIntersectionIntersectionTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["IntersectionType"]["Number"] = 2;
const AddIntersectionIntersectionTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["IntersectionType"]["Boolean"] = 2;
const AddIntersectionIntersectionTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["IntersectionType"]["Any"] = 2;

const AddIntersectionTypeLiteralLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeLiteral"]["Literal"] = 2;
const AddIntersectionTypeLiteralObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeLiteral"]["Object"] = 2;
const AddIntersectionTypeLiteralStringToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeLiteral"]["String"] = 2;
const AddIntersectionTypeLiteralNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeLiteral"]["Number"] = 2;
const AddIntersectionTypeLiteralBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeLiteral"]["Boolean"] = 2;
const AddIntersectionTypeLiteralAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TypeLiteral"]["Any"] = 2;

const AddIntersectionTupleTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TupleType"]["Literal"] = 2;
const AddIntersectionTupleTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TupleType"]["Object"] = 2;
const AddIntersectionTupleTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TupleType"]["String"] = 2;
const AddIntersectionTupleTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TupleType"]["Number"] = 2;
const AddIntersectionTupleTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TupleType"]["Boolean"] = 2;
const AddIntersectionTupleTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["TupleType"]["Any"] = 2;

const AddIntersectionArrayTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ArrayType"]["Literal"] = 2;
const AddIntersectionArrayTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ArrayType"]["Object"] = 2;
const AddIntersectionArrayTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ArrayType"]["String"] = 2;
const AddIntersectionArrayTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ArrayType"]["Number"] = 2;
const AddIntersectionArrayTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ArrayType"]["Boolean"] = 2;
const AddIntersectionArrayTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ArrayType"]["Any"] = 2;

const AddIntersectionFunctionTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["FunctionType"]["Literal"] = 2;
const AddIntersectionFunctionTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["FunctionType"]["Object"] = 2;
const AddIntersectionFunctionTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["FunctionType"]["String"] = 2;
const AddIntersectionFunctionTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["FunctionType"]["Number"] = 2;
const AddIntersectionFunctionTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["FunctionType"]["Boolean"] = 2;
const AddIntersectionFunctionTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["FunctionType"]["Any"] = 2;

const AddIntersectionConstructorTypeLiteralToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ConstructorType"]["Literal"] = 2;
const AddIntersectionConstructorTypeObjectToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ConstructorType"]["Object"] = 2;
const AddIntersectionConstructorTypeStringToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ConstructorType"]["String"] = 2;
const AddIntersectionConstructorTypeNumberToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ConstructorType"]["Number"] = 2;
const AddIntersectionConstructorTypeBooleanToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ConstructorType"]["Boolean"] = 2;
const AddIntersectionConstructorTypeAnyToUnionTypeNumber: Defaults["UnionType"]["Number"] & Defaults["ConstructorType"]["Any"] = 2;

// Initial Value
const TypeUnionTypeBoolean: Defaults["UnionType"]["Boolean"] = true

// Changes
const AddIntersectionParenthesizedTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ParenthesizedType"]["Literal"] = true;
const AddIntersectionParenthesizedTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ParenthesizedType"]["Object"] = true;
const AddIntersectionParenthesizedTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ParenthesizedType"]["String"] = true;
const AddIntersectionParenthesizedTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ParenthesizedType"]["Number"] = true;
const AddIntersectionParenthesizedTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ParenthesizedType"]["Boolean"] = true;
const AddIntersectionParenthesizedTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ParenthesizedType"]["Any"] = true;

const AddIntersectionTypeReferenceBuiltinLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Literal"] = true;
const AddIntersectionTypeReferenceBuiltinObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Object"] = true;
const AddIntersectionTypeReferenceBuiltinStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["String"] = true;
const AddIntersectionTypeReferenceBuiltinNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Number"] = true;
const AddIntersectionTypeReferenceBuiltinBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = true;
const AddIntersectionTypeReferenceBuiltinAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Any"] = true;

const AddIntersectionTypeReferencePredefinedLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Literal"] = true;
const AddIntersectionTypeReferencePredefinedObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Object"] = true;
const AddIntersectionTypeReferencePredefinedStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeReferencePredefined"]["String"] = true;
const AddIntersectionTypeReferencePredefinedNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Number"] = true;
const AddIntersectionTypeReferencePredefinedBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Boolean"] = true;
const AddIntersectionTypeReferencePredefinedAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Any"] = true;

const AddIntersectionUnionTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["UnionType"]["Literal"] = true;
const AddIntersectionUnionTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["UnionType"]["Object"] = true;
const AddIntersectionUnionTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["UnionType"]["String"] = true;
const AddIntersectionUnionTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["UnionType"]["Number"] = true;
const AddIntersectionUnionTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["UnionType"]["Boolean"] = true;
const AddIntersectionUnionTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["UnionType"]["Any"] = true;

const AddIntersectionIntersectionTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["IntersectionType"]["Literal"] = true;
const AddIntersectionIntersectionTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["IntersectionType"]["Object"] = true;
const AddIntersectionIntersectionTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["IntersectionType"]["String"] = true;
const AddIntersectionIntersectionTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["IntersectionType"]["Number"] = true;
const AddIntersectionIntersectionTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["IntersectionType"]["Boolean"] = true;
const AddIntersectionIntersectionTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["IntersectionType"]["Any"] = true;

const AddIntersectionTypeLiteralLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeLiteral"]["Literal"] = true;
const AddIntersectionTypeLiteralObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeLiteral"]["Object"] = true;
const AddIntersectionTypeLiteralStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeLiteral"]["String"] = true;
const AddIntersectionTypeLiteralNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeLiteral"]["Number"] = true;
const AddIntersectionTypeLiteralBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeLiteral"]["Boolean"] = true;
const AddIntersectionTypeLiteralAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TypeLiteral"]["Any"] = true;

const AddIntersectionTupleTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TupleType"]["Literal"] = true;
const AddIntersectionTupleTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TupleType"]["Object"] = true;
const AddIntersectionTupleTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TupleType"]["String"] = true;
const AddIntersectionTupleTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TupleType"]["Number"] = true;
const AddIntersectionTupleTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TupleType"]["Boolean"] = true;
const AddIntersectionTupleTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["TupleType"]["Any"] = true;

const AddIntersectionArrayTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ArrayType"]["Literal"] = true;
const AddIntersectionArrayTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ArrayType"]["Object"] = true;
const AddIntersectionArrayTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ArrayType"]["String"] = true;
const AddIntersectionArrayTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ArrayType"]["Number"] = true;
const AddIntersectionArrayTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ArrayType"]["Boolean"] = true;
const AddIntersectionArrayTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ArrayType"]["Any"] = true;

const AddIntersectionFunctionTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["FunctionType"]["Literal"] = true;
const AddIntersectionFunctionTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["FunctionType"]["Object"] = true;
const AddIntersectionFunctionTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["FunctionType"]["String"] = true;
const AddIntersectionFunctionTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["FunctionType"]["Number"] = true;
const AddIntersectionFunctionTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["FunctionType"]["Boolean"] = true;
const AddIntersectionFunctionTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["FunctionType"]["Any"] = true;

const AddIntersectionConstructorTypeLiteralToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ConstructorType"]["Literal"] = true;
const AddIntersectionConstructorTypeObjectToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ConstructorType"]["Object"] = true;
const AddIntersectionConstructorTypeStringToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ConstructorType"]["String"] = true;
const AddIntersectionConstructorTypeNumberToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ConstructorType"]["Number"] = true;
const AddIntersectionConstructorTypeBooleanToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ConstructorType"]["Boolean"] = true;
const AddIntersectionConstructorTypeAnyToUnionTypeBoolean: Defaults["UnionType"]["Boolean"] & Defaults["ConstructorType"]["Any"] = true;

// Initial Value
const TypeUnionTypeAny: Defaults["UnionType"]["Any"] = 2

// Changes
const AddIntersectionParenthesizedTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ParenthesizedType"]["Literal"] = 2;
const AddIntersectionParenthesizedTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ParenthesizedType"]["Object"] = 2;
const AddIntersectionParenthesizedTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ParenthesizedType"]["String"] = 2;
const AddIntersectionParenthesizedTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ParenthesizedType"]["Number"] = 2;
const AddIntersectionParenthesizedTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddIntersectionParenthesizedTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ParenthesizedType"]["Any"] = 2;

const AddIntersectionTypeReferenceBuiltinLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddIntersectionTypeReferenceBuiltinObjectToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddIntersectionTypeReferenceBuiltinStringToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddIntersectionTypeReferenceBuiltinNumberToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddIntersectionTypeReferenceBuiltinBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddIntersectionTypeReferenceBuiltinAnyToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddIntersectionTypeReferencePredefinedLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddIntersectionTypeReferencePredefinedObjectToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddIntersectionTypeReferencePredefinedStringToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeReferencePredefined"]["String"] = 2;
const AddIntersectionTypeReferencePredefinedNumberToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddIntersectionTypeReferencePredefinedBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddIntersectionTypeReferencePredefinedAnyToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddIntersectionUnionTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["UnionType"]["Literal"] = 2;
const AddIntersectionUnionTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["UnionType"]["Object"] = 2;
const AddIntersectionUnionTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["UnionType"]["String"] = 2;
const AddIntersectionUnionTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["UnionType"]["Number"] = 2;
const AddIntersectionUnionTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["UnionType"]["Boolean"] = 2;
const AddIntersectionUnionTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["UnionType"]["Any"] = 2;

const AddIntersectionIntersectionTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["IntersectionType"]["Literal"] = 2;
const AddIntersectionIntersectionTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["IntersectionType"]["Object"] = 2;
const AddIntersectionIntersectionTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["IntersectionType"]["String"] = 2;
const AddIntersectionIntersectionTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["IntersectionType"]["Number"] = 2;
const AddIntersectionIntersectionTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["IntersectionType"]["Boolean"] = 2;
const AddIntersectionIntersectionTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["IntersectionType"]["Any"] = 2;

const AddIntersectionTypeLiteralLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeLiteral"]["Literal"] = 2;
const AddIntersectionTypeLiteralObjectToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeLiteral"]["Object"] = 2;
const AddIntersectionTypeLiteralStringToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeLiteral"]["String"] = 2;
const AddIntersectionTypeLiteralNumberToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeLiteral"]["Number"] = 2;
const AddIntersectionTypeLiteralBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeLiteral"]["Boolean"] = 2;
const AddIntersectionTypeLiteralAnyToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TypeLiteral"]["Any"] = 2;

const AddIntersectionTupleTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TupleType"]["Literal"] = 2;
const AddIntersectionTupleTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TupleType"]["Object"] = 2;
const AddIntersectionTupleTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TupleType"]["String"] = 2;
const AddIntersectionTupleTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TupleType"]["Number"] = 2;
const AddIntersectionTupleTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TupleType"]["Boolean"] = 2;
const AddIntersectionTupleTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["TupleType"]["Any"] = 2;

const AddIntersectionArrayTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ArrayType"]["Literal"] = 2;
const AddIntersectionArrayTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ArrayType"]["Object"] = 2;
const AddIntersectionArrayTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ArrayType"]["String"] = 2;
const AddIntersectionArrayTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ArrayType"]["Number"] = 2;
const AddIntersectionArrayTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ArrayType"]["Boolean"] = 2;
const AddIntersectionArrayTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ArrayType"]["Any"] = 2;

const AddIntersectionFunctionTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["FunctionType"]["Literal"] = 2;
const AddIntersectionFunctionTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["FunctionType"]["Object"] = 2;
const AddIntersectionFunctionTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["FunctionType"]["String"] = 2;
const AddIntersectionFunctionTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["FunctionType"]["Number"] = 2;
const AddIntersectionFunctionTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["FunctionType"]["Boolean"] = 2;
const AddIntersectionFunctionTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["FunctionType"]["Any"] = 2;

const AddIntersectionConstructorTypeLiteralToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ConstructorType"]["Literal"] = 2;
const AddIntersectionConstructorTypeObjectToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ConstructorType"]["Object"] = 2;
const AddIntersectionConstructorTypeStringToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ConstructorType"]["String"] = 2;
const AddIntersectionConstructorTypeNumberToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ConstructorType"]["Number"] = 2;
const AddIntersectionConstructorTypeBooleanToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ConstructorType"]["Boolean"] = 2;
const AddIntersectionConstructorTypeAnyToUnionTypeAny: Defaults["UnionType"]["Any"] & Defaults["ConstructorType"]["Any"] = 2;

