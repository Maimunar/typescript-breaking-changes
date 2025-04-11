import { Defaults } from "../../defaults";

/*
 * IntersectionType
 */

// Add Intersection - TypeReferencePredefined
// Initial Value
const TypeTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] = 1

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ParenthesizedType"]["Literal"] = 1;
const AddIntersectionParenthesizedTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ParenthesizedType"]["Object"] = 1;
const AddIntersectionParenthesizedTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ParenthesizedType"]["String"] = 1;
const AddIntersectionParenthesizedTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ParenthesizedType"]["Number"] = 1;
const AddIntersectionParenthesizedTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ParenthesizedType"]["Boolean"] = 1;
const AddIntersectionParenthesizedTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ParenthesizedType"]["Any"] = 1;

const AddIntersectionTypeReferenceBuiltinLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 1;
const AddIntersectionTypeReferenceBuiltinObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Object"] = 1;
const AddIntersectionTypeReferenceBuiltinStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeReferenceBuiltin"]["String"] = 1;
const AddIntersectionTypeReferenceBuiltinNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Number"] = 1;
const AddIntersectionTypeReferenceBuiltinBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 1;
const AddIntersectionTypeReferenceBuiltinAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Any"] = 1;

const AddIntersectionTypeReferencePredefinedLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeReferencePredefined"]["Literal"] = 1;
const AddIntersectionTypeReferencePredefinedObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeReferencePredefined"]["Object"] = 1;
const AddIntersectionTypeReferencePredefinedStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeReferencePredefined"]["String"] = 1;
const AddIntersectionTypeReferencePredefinedNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeReferencePredefined"]["Number"] = 1;
const AddIntersectionTypeReferencePredefinedBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeReferencePredefined"]["Boolean"] = 1;
const AddIntersectionTypeReferencePredefinedAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeReferencePredefined"]["Any"] = 1;

const AddIntersectionUnionTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["UnionType"]["Literal"] = 1;
const AddIntersectionUnionTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["UnionType"]["Object"] = 1;
const AddIntersectionUnionTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["UnionType"]["String"] = 1;
const AddIntersectionUnionTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["UnionType"]["Number"] = 1;
const AddIntersectionUnionTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["UnionType"]["Boolean"] = 1;
const AddIntersectionUnionTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["UnionType"]["Any"] = 1;

const AddIntersectionIntersectionTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["IntersectionType"]["Literal"] = 1;
const AddIntersectionIntersectionTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["IntersectionType"]["Object"] = 1;
const AddIntersectionIntersectionTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["IntersectionType"]["String"] = 1;
const AddIntersectionIntersectionTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["IntersectionType"]["Number"] = 1;
const AddIntersectionIntersectionTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["IntersectionType"]["Boolean"] = 1;
const AddIntersectionIntersectionTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["IntersectionType"]["Any"] = 1;

const AddIntersectionTypeLiteralLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeLiteral"]["Literal"] = 1;
const AddIntersectionTypeLiteralObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeLiteral"]["Object"] = 1;
const AddIntersectionTypeLiteralStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeLiteral"]["String"] = 1;
const AddIntersectionTypeLiteralNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeLiteral"]["Number"] = 1;
const AddIntersectionTypeLiteralBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeLiteral"]["Boolean"] = 1;
const AddIntersectionTypeLiteralAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TypeLiteral"]["Any"] = 1;

const AddIntersectionTupleTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TupleType"]["Literal"] = 1;
const AddIntersectionTupleTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TupleType"]["Object"] = 1;
const AddIntersectionTupleTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TupleType"]["String"] = 1;
const AddIntersectionTupleTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TupleType"]["Number"] = 1;
const AddIntersectionTupleTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TupleType"]["Boolean"] = 1;
const AddIntersectionTupleTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["TupleType"]["Any"] = 1;

const AddIntersectionArrayTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ArrayType"]["Literal"] = 1;
const AddIntersectionArrayTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ArrayType"]["Object"] = 1;
const AddIntersectionArrayTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ArrayType"]["String"] = 1;
const AddIntersectionArrayTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ArrayType"]["Number"] = 1;
const AddIntersectionArrayTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ArrayType"]["Boolean"] = 1;
const AddIntersectionArrayTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ArrayType"]["Any"] = 1;

const AddIntersectionFunctionTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["FunctionType"]["Literal"] = 1;
const AddIntersectionFunctionTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["FunctionType"]["Object"] = 1;
const AddIntersectionFunctionTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["FunctionType"]["String"] = 1;
const AddIntersectionFunctionTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["FunctionType"]["Number"] = 1;
const AddIntersectionFunctionTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["FunctionType"]["Boolean"] = 1;
const AddIntersectionFunctionTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["FunctionType"]["Any"] = 1;

const AddIntersectionConstructorTypeLiteralToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ConstructorType"]["Literal"] = 1;
const AddIntersectionConstructorTypeObjectToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ConstructorType"]["Object"] = 1;
const AddIntersectionConstructorTypeStringToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ConstructorType"]["String"] = 1;
const AddIntersectionConstructorTypeNumberToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ConstructorType"]["Number"] = 1;
const AddIntersectionConstructorTypeBooleanToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ConstructorType"]["Boolean"] = 1;
const AddIntersectionConstructorTypeAnyToTypeReferencePredefinedLiteral: Defaults["TypeReferencePredefined"]["Literal"] & Defaults["ConstructorType"]["Any"] = 1;

// Initial Value
const TypeTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] = {}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ParenthesizedType"]["Literal"] = {};
const AddIntersectionParenthesizedTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ParenthesizedType"]["Object"] = {};
const AddIntersectionParenthesizedTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ParenthesizedType"]["String"] = {};
const AddIntersectionParenthesizedTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ParenthesizedType"]["Number"] = {};
const AddIntersectionParenthesizedTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ParenthesizedType"]["Boolean"] = {};
const AddIntersectionParenthesizedTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ParenthesizedType"]["Any"] = {};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddIntersectionTypeReferenceBuiltinObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddIntersectionTypeReferenceBuiltinStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddIntersectionTypeReferenceBuiltinNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddIntersectionTypeReferenceBuiltinAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddIntersectionTypeReferencePredefinedLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddIntersectionTypeReferencePredefinedObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeReferencePredefined"]["Object"] = {};
const AddIntersectionTypeReferencePredefinedStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeReferencePredefined"]["String"] = {};
const AddIntersectionTypeReferencePredefinedNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeReferencePredefined"]["Number"] = {};
const AddIntersectionTypeReferencePredefinedBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddIntersectionTypeReferencePredefinedAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeReferencePredefined"]["Any"] = {};

const AddIntersectionUnionTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["UnionType"]["Literal"] = {};
const AddIntersectionUnionTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["UnionType"]["Object"] = {};
const AddIntersectionUnionTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["UnionType"]["String"] = {};
const AddIntersectionUnionTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["UnionType"]["Number"] = {};
const AddIntersectionUnionTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["UnionType"]["Boolean"] = {};
const AddIntersectionUnionTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["UnionType"]["Any"] = {};

const AddIntersectionIntersectionTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["IntersectionType"]["Literal"] = {};
const AddIntersectionIntersectionTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["IntersectionType"]["Object"] = {};
const AddIntersectionIntersectionTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["IntersectionType"]["String"] = {};
const AddIntersectionIntersectionTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["IntersectionType"]["Number"] = {};
const AddIntersectionIntersectionTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["IntersectionType"]["Boolean"] = {};
const AddIntersectionIntersectionTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["IntersectionType"]["Any"] = {};

const AddIntersectionTypeLiteralLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeLiteral"]["Literal"] = {};
const AddIntersectionTypeLiteralObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeLiteral"]["Object"] = {};
const AddIntersectionTypeLiteralStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeLiteral"]["String"] = {};
const AddIntersectionTypeLiteralNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeLiteral"]["Number"] = {};
const AddIntersectionTypeLiteralBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeLiteral"]["Boolean"] = {};
const AddIntersectionTypeLiteralAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TypeLiteral"]["Any"] = {};

const AddIntersectionTupleTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TupleType"]["Literal"] = {};
const AddIntersectionTupleTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TupleType"]["Object"] = {};
const AddIntersectionTupleTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TupleType"]["String"] = {};
const AddIntersectionTupleTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TupleType"]["Number"] = {};
const AddIntersectionTupleTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TupleType"]["Boolean"] = {};
const AddIntersectionTupleTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["TupleType"]["Any"] = {};

const AddIntersectionArrayTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ArrayType"]["Literal"] = {};
const AddIntersectionArrayTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ArrayType"]["Object"] = {};
const AddIntersectionArrayTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ArrayType"]["String"] = {};
const AddIntersectionArrayTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ArrayType"]["Number"] = {};
const AddIntersectionArrayTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ArrayType"]["Boolean"] = {};
const AddIntersectionArrayTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ArrayType"]["Any"] = {};

const AddIntersectionFunctionTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["FunctionType"]["Literal"] = {};
const AddIntersectionFunctionTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["FunctionType"]["Object"] = {};
const AddIntersectionFunctionTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["FunctionType"]["String"] = {};
const AddIntersectionFunctionTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["FunctionType"]["Number"] = {};
const AddIntersectionFunctionTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["FunctionType"]["Boolean"] = {};
const AddIntersectionFunctionTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["FunctionType"]["Any"] = {};

const AddIntersectionConstructorTypeLiteralToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ConstructorType"]["Literal"] = {};
const AddIntersectionConstructorTypeObjectToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ConstructorType"]["Object"] = {};
const AddIntersectionConstructorTypeStringToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ConstructorType"]["String"] = {};
const AddIntersectionConstructorTypeNumberToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ConstructorType"]["Number"] = {};
const AddIntersectionConstructorTypeBooleanToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ConstructorType"]["Boolean"] = {};
const AddIntersectionConstructorTypeAnyToTypeReferencePredefinedObject: Defaults["TypeReferencePredefined"]["Object"] & Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] = "two"

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ParenthesizedType"]["Literal"] = "two";
const AddIntersectionParenthesizedTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ParenthesizedType"]["Object"] = "two";
const AddIntersectionParenthesizedTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ParenthesizedType"]["String"] = "two";
const AddIntersectionParenthesizedTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ParenthesizedType"]["Number"] = "two";
const AddIntersectionParenthesizedTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ParenthesizedType"]["Boolean"] = "two";
const AddIntersectionParenthesizedTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ParenthesizedType"]["Any"] = "two";

const AddIntersectionTypeReferenceBuiltinLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeReferenceBuiltin"]["Literal"] = "two";
const AddIntersectionTypeReferenceBuiltinObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeReferenceBuiltin"]["Object"] = "two";
const AddIntersectionTypeReferenceBuiltinStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeReferenceBuiltin"]["String"] = "two";
const AddIntersectionTypeReferenceBuiltinNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeReferenceBuiltin"]["Number"] = "two";
const AddIntersectionTypeReferenceBuiltinBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = "two";
const AddIntersectionTypeReferenceBuiltinAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeReferenceBuiltin"]["Any"] = "two";

const AddIntersectionTypeReferencePredefinedLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeReferencePredefined"]["Literal"] = "two";
const AddIntersectionTypeReferencePredefinedObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeReferencePredefined"]["Object"] = "two";
const AddIntersectionTypeReferencePredefinedStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeReferencePredefined"]["String"] = "two";
const AddIntersectionTypeReferencePredefinedNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeReferencePredefined"]["Number"] = "two";
const AddIntersectionTypeReferencePredefinedBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeReferencePredefined"]["Boolean"] = "two";
const AddIntersectionTypeReferencePredefinedAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeReferencePredefined"]["Any"] = "two";

const AddIntersectionUnionTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["UnionType"]["Literal"] = "two";
const AddIntersectionUnionTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["UnionType"]["Object"] = "two";
const AddIntersectionUnionTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["UnionType"]["String"] = "two";
const AddIntersectionUnionTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["UnionType"]["Number"] = "two";
const AddIntersectionUnionTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["UnionType"]["Boolean"] = "two";
const AddIntersectionUnionTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["UnionType"]["Any"] = "two";

const AddIntersectionIntersectionTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["IntersectionType"]["Literal"] = "two";
const AddIntersectionIntersectionTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["IntersectionType"]["Object"] = "two";
const AddIntersectionIntersectionTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["IntersectionType"]["String"] = "two";
const AddIntersectionIntersectionTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["IntersectionType"]["Number"] = "two";
const AddIntersectionIntersectionTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["IntersectionType"]["Boolean"] = "two";
const AddIntersectionIntersectionTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["IntersectionType"]["Any"] = "two";

const AddIntersectionTypeLiteralLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeLiteral"]["Literal"] = "two";
const AddIntersectionTypeLiteralObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeLiteral"]["Object"] = "two";
const AddIntersectionTypeLiteralStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeLiteral"]["String"] = "two";
const AddIntersectionTypeLiteralNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeLiteral"]["Number"] = "two";
const AddIntersectionTypeLiteralBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeLiteral"]["Boolean"] = "two";
const AddIntersectionTypeLiteralAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TypeLiteral"]["Any"] = "two";

const AddIntersectionTupleTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TupleType"]["Literal"] = "two";
const AddIntersectionTupleTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TupleType"]["Object"] = "two";
const AddIntersectionTupleTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TupleType"]["String"] = "two";
const AddIntersectionTupleTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TupleType"]["Number"] = "two";
const AddIntersectionTupleTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TupleType"]["Boolean"] = "two";
const AddIntersectionTupleTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["TupleType"]["Any"] = "two";

const AddIntersectionArrayTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ArrayType"]["Literal"] = "two";
const AddIntersectionArrayTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ArrayType"]["Object"] = "two";
const AddIntersectionArrayTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ArrayType"]["String"] = "two";
const AddIntersectionArrayTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ArrayType"]["Number"] = "two";
const AddIntersectionArrayTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ArrayType"]["Boolean"] = "two";
const AddIntersectionArrayTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ArrayType"]["Any"] = "two";

const AddIntersectionFunctionTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["FunctionType"]["Literal"] = "two";
const AddIntersectionFunctionTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["FunctionType"]["Object"] = "two";
const AddIntersectionFunctionTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["FunctionType"]["String"] = "two";
const AddIntersectionFunctionTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["FunctionType"]["Number"] = "two";
const AddIntersectionFunctionTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["FunctionType"]["Boolean"] = "two";
const AddIntersectionFunctionTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["FunctionType"]["Any"] = "two";

const AddIntersectionConstructorTypeLiteralToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ConstructorType"]["Literal"] = "two";
const AddIntersectionConstructorTypeObjectToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ConstructorType"]["Object"] = "two";
const AddIntersectionConstructorTypeStringToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ConstructorType"]["String"] = "two";
const AddIntersectionConstructorTypeNumberToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ConstructorType"]["Number"] = "two";
const AddIntersectionConstructorTypeBooleanToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ConstructorType"]["Boolean"] = "two";
const AddIntersectionConstructorTypeAnyToTypeReferencePredefinedString: Defaults["TypeReferencePredefined"]["String"] & Defaults["ConstructorType"]["Any"] = "two";

// Initial Value
const TypeTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] = 2

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ParenthesizedType"]["Literal"] = 2;
const AddIntersectionParenthesizedTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ParenthesizedType"]["Object"] = 2;
const AddIntersectionParenthesizedTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ParenthesizedType"]["String"] = 2;
const AddIntersectionParenthesizedTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ParenthesizedType"]["Number"] = 2;
const AddIntersectionParenthesizedTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddIntersectionParenthesizedTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ParenthesizedType"]["Any"] = 2;

const AddIntersectionTypeReferenceBuiltinLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddIntersectionTypeReferenceBuiltinObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddIntersectionTypeReferenceBuiltinStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddIntersectionTypeReferenceBuiltinNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddIntersectionTypeReferenceBuiltinBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddIntersectionTypeReferenceBuiltinAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddIntersectionTypeReferencePredefinedLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddIntersectionTypeReferencePredefinedObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddIntersectionTypeReferencePredefinedStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeReferencePredefined"]["String"] = 2;
const AddIntersectionTypeReferencePredefinedNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddIntersectionTypeReferencePredefinedBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddIntersectionTypeReferencePredefinedAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddIntersectionUnionTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["UnionType"]["Literal"] = 2;
const AddIntersectionUnionTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["UnionType"]["Object"] = 2;
const AddIntersectionUnionTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["UnionType"]["String"] = 2;
const AddIntersectionUnionTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["UnionType"]["Number"] = 2;
const AddIntersectionUnionTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["UnionType"]["Boolean"] = 2;
const AddIntersectionUnionTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["UnionType"]["Any"] = 2;

const AddIntersectionIntersectionTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["IntersectionType"]["Literal"] = 2;
const AddIntersectionIntersectionTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["IntersectionType"]["Object"] = 2;
const AddIntersectionIntersectionTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["IntersectionType"]["String"] = 2;
const AddIntersectionIntersectionTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["IntersectionType"]["Number"] = 2;
const AddIntersectionIntersectionTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["IntersectionType"]["Boolean"] = 2;
const AddIntersectionIntersectionTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["IntersectionType"]["Any"] = 2;

const AddIntersectionTypeLiteralLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeLiteral"]["Literal"] = 2;
const AddIntersectionTypeLiteralObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeLiteral"]["Object"] = 2;
const AddIntersectionTypeLiteralStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeLiteral"]["String"] = 2;
const AddIntersectionTypeLiteralNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeLiteral"]["Number"] = 2;
const AddIntersectionTypeLiteralBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeLiteral"]["Boolean"] = 2;
const AddIntersectionTypeLiteralAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TypeLiteral"]["Any"] = 2;

const AddIntersectionTupleTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TupleType"]["Literal"] = 2;
const AddIntersectionTupleTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TupleType"]["Object"] = 2;
const AddIntersectionTupleTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TupleType"]["String"] = 2;
const AddIntersectionTupleTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TupleType"]["Number"] = 2;
const AddIntersectionTupleTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TupleType"]["Boolean"] = 2;
const AddIntersectionTupleTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["TupleType"]["Any"] = 2;

const AddIntersectionArrayTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ArrayType"]["Literal"] = 2;
const AddIntersectionArrayTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ArrayType"]["Object"] = 2;
const AddIntersectionArrayTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ArrayType"]["String"] = 2;
const AddIntersectionArrayTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ArrayType"]["Number"] = 2;
const AddIntersectionArrayTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ArrayType"]["Boolean"] = 2;
const AddIntersectionArrayTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ArrayType"]["Any"] = 2;

const AddIntersectionFunctionTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["FunctionType"]["Literal"] = 2;
const AddIntersectionFunctionTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["FunctionType"]["Object"] = 2;
const AddIntersectionFunctionTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["FunctionType"]["String"] = 2;
const AddIntersectionFunctionTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["FunctionType"]["Number"] = 2;
const AddIntersectionFunctionTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["FunctionType"]["Boolean"] = 2;
const AddIntersectionFunctionTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["FunctionType"]["Any"] = 2;

const AddIntersectionConstructorTypeLiteralToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ConstructorType"]["Literal"] = 2;
const AddIntersectionConstructorTypeObjectToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ConstructorType"]["Object"] = 2;
const AddIntersectionConstructorTypeStringToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ConstructorType"]["String"] = 2;
const AddIntersectionConstructorTypeNumberToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ConstructorType"]["Number"] = 2;
const AddIntersectionConstructorTypeBooleanToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ConstructorType"]["Boolean"] = 2;
const AddIntersectionConstructorTypeAnyToTypeReferencePredefinedNumber: Defaults["TypeReferencePredefined"]["Number"] & Defaults["ConstructorType"]["Any"] = 2;

// Initial Value
const TypeTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] = true

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ParenthesizedType"]["Literal"] = true;
const AddIntersectionParenthesizedTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ParenthesizedType"]["Object"] = true;
const AddIntersectionParenthesizedTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ParenthesizedType"]["String"] = true;
const AddIntersectionParenthesizedTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ParenthesizedType"]["Number"] = true;
const AddIntersectionParenthesizedTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ParenthesizedType"]["Boolean"] = true;
const AddIntersectionParenthesizedTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ParenthesizedType"]["Any"] = true;

const AddIntersectionTypeReferenceBuiltinLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Literal"] = true;
const AddIntersectionTypeReferenceBuiltinObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Object"] = true;
const AddIntersectionTypeReferenceBuiltinStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["String"] = true;
const AddIntersectionTypeReferenceBuiltinNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Number"] = true;
const AddIntersectionTypeReferenceBuiltinBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = true;
const AddIntersectionTypeReferenceBuiltinAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Any"] = true;

const AddIntersectionTypeReferencePredefinedLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeReferencePredefined"]["Literal"] = true;
const AddIntersectionTypeReferencePredefinedObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeReferencePredefined"]["Object"] = true;
const AddIntersectionTypeReferencePredefinedStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeReferencePredefined"]["String"] = true;
const AddIntersectionTypeReferencePredefinedNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeReferencePredefined"]["Number"] = true;
const AddIntersectionTypeReferencePredefinedBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeReferencePredefined"]["Boolean"] = true;
const AddIntersectionTypeReferencePredefinedAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeReferencePredefined"]["Any"] = true;

const AddIntersectionUnionTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["UnionType"]["Literal"] = true;
const AddIntersectionUnionTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["UnionType"]["Object"] = true;
const AddIntersectionUnionTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["UnionType"]["String"] = true;
const AddIntersectionUnionTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["UnionType"]["Number"] = true;
const AddIntersectionUnionTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["UnionType"]["Boolean"] = true;
const AddIntersectionUnionTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["UnionType"]["Any"] = true;

const AddIntersectionIntersectionTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["IntersectionType"]["Literal"] = true;
const AddIntersectionIntersectionTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["IntersectionType"]["Object"] = true;
const AddIntersectionIntersectionTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["IntersectionType"]["String"] = true;
const AddIntersectionIntersectionTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["IntersectionType"]["Number"] = true;
const AddIntersectionIntersectionTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["IntersectionType"]["Boolean"] = true;
const AddIntersectionIntersectionTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["IntersectionType"]["Any"] = true;

const AddIntersectionTypeLiteralLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeLiteral"]["Literal"] = true;
const AddIntersectionTypeLiteralObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeLiteral"]["Object"] = true;
const AddIntersectionTypeLiteralStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeLiteral"]["String"] = true;
const AddIntersectionTypeLiteralNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeLiteral"]["Number"] = true;
const AddIntersectionTypeLiteralBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeLiteral"]["Boolean"] = true;
const AddIntersectionTypeLiteralAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TypeLiteral"]["Any"] = true;

const AddIntersectionTupleTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TupleType"]["Literal"] = true;
const AddIntersectionTupleTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TupleType"]["Object"] = true;
const AddIntersectionTupleTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TupleType"]["String"] = true;
const AddIntersectionTupleTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TupleType"]["Number"] = true;
const AddIntersectionTupleTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TupleType"]["Boolean"] = true;
const AddIntersectionTupleTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["TupleType"]["Any"] = true;

const AddIntersectionArrayTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ArrayType"]["Literal"] = true;
const AddIntersectionArrayTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ArrayType"]["Object"] = true;
const AddIntersectionArrayTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ArrayType"]["String"] = true;
const AddIntersectionArrayTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ArrayType"]["Number"] = true;
const AddIntersectionArrayTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ArrayType"]["Boolean"] = true;
const AddIntersectionArrayTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ArrayType"]["Any"] = true;

const AddIntersectionFunctionTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["FunctionType"]["Literal"] = true;
const AddIntersectionFunctionTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["FunctionType"]["Object"] = true;
const AddIntersectionFunctionTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["FunctionType"]["String"] = true;
const AddIntersectionFunctionTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["FunctionType"]["Number"] = true;
const AddIntersectionFunctionTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["FunctionType"]["Boolean"] = true;
const AddIntersectionFunctionTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["FunctionType"]["Any"] = true;

const AddIntersectionConstructorTypeLiteralToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ConstructorType"]["Literal"] = true;
const AddIntersectionConstructorTypeObjectToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ConstructorType"]["Object"] = true;
const AddIntersectionConstructorTypeStringToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ConstructorType"]["String"] = true;
const AddIntersectionConstructorTypeNumberToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ConstructorType"]["Number"] = true;
const AddIntersectionConstructorTypeBooleanToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ConstructorType"]["Boolean"] = true;
const AddIntersectionConstructorTypeAnyToTypeReferencePredefinedBoolean: Defaults["TypeReferencePredefined"]["Boolean"] & Defaults["ConstructorType"]["Any"] = true;

// Initial Value
const TypeTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] = 2

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ParenthesizedType"]["Literal"] = 2;
const AddIntersectionParenthesizedTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ParenthesizedType"]["Object"] = 2;
const AddIntersectionParenthesizedTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ParenthesizedType"]["String"] = 2;
const AddIntersectionParenthesizedTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ParenthesizedType"]["Number"] = 2;
const AddIntersectionParenthesizedTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddIntersectionParenthesizedTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ParenthesizedType"]["Any"] = 2;

const AddIntersectionTypeReferenceBuiltinLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddIntersectionTypeReferenceBuiltinObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddIntersectionTypeReferenceBuiltinStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddIntersectionTypeReferenceBuiltinNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddIntersectionTypeReferenceBuiltinBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddIntersectionTypeReferenceBuiltinAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddIntersectionTypeReferencePredefinedLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddIntersectionTypeReferencePredefinedObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddIntersectionTypeReferencePredefinedStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeReferencePredefined"]["String"] = 2;
const AddIntersectionTypeReferencePredefinedNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddIntersectionTypeReferencePredefinedBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddIntersectionTypeReferencePredefinedAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddIntersectionUnionTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["UnionType"]["Literal"] = 2;
const AddIntersectionUnionTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["UnionType"]["Object"] = 2;
const AddIntersectionUnionTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["UnionType"]["String"] = 2;
const AddIntersectionUnionTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["UnionType"]["Number"] = 2;
const AddIntersectionUnionTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["UnionType"]["Boolean"] = 2;
const AddIntersectionUnionTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["UnionType"]["Any"] = 2;

const AddIntersectionIntersectionTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["IntersectionType"]["Literal"] = 2;
const AddIntersectionIntersectionTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["IntersectionType"]["Object"] = 2;
const AddIntersectionIntersectionTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["IntersectionType"]["String"] = 2;
const AddIntersectionIntersectionTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["IntersectionType"]["Number"] = 2;
const AddIntersectionIntersectionTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["IntersectionType"]["Boolean"] = 2;
const AddIntersectionIntersectionTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["IntersectionType"]["Any"] = 2;

const AddIntersectionTypeLiteralLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeLiteral"]["Literal"] = 2;
const AddIntersectionTypeLiteralObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeLiteral"]["Object"] = 2;
const AddIntersectionTypeLiteralStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeLiteral"]["String"] = 2;
const AddIntersectionTypeLiteralNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeLiteral"]["Number"] = 2;
const AddIntersectionTypeLiteralBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeLiteral"]["Boolean"] = 2;
const AddIntersectionTypeLiteralAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TypeLiteral"]["Any"] = 2;

const AddIntersectionTupleTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TupleType"]["Literal"] = 2;
const AddIntersectionTupleTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TupleType"]["Object"] = 2;
const AddIntersectionTupleTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TupleType"]["String"] = 2;
const AddIntersectionTupleTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TupleType"]["Number"] = 2;
const AddIntersectionTupleTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TupleType"]["Boolean"] = 2;
const AddIntersectionTupleTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["TupleType"]["Any"] = 2;

const AddIntersectionArrayTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ArrayType"]["Literal"] = 2;
const AddIntersectionArrayTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ArrayType"]["Object"] = 2;
const AddIntersectionArrayTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ArrayType"]["String"] = 2;
const AddIntersectionArrayTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ArrayType"]["Number"] = 2;
const AddIntersectionArrayTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ArrayType"]["Boolean"] = 2;
const AddIntersectionArrayTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ArrayType"]["Any"] = 2;

const AddIntersectionFunctionTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["FunctionType"]["Literal"] = 2;
const AddIntersectionFunctionTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["FunctionType"]["Object"] = 2;
const AddIntersectionFunctionTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["FunctionType"]["String"] = 2;
const AddIntersectionFunctionTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["FunctionType"]["Number"] = 2;
const AddIntersectionFunctionTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["FunctionType"]["Boolean"] = 2;
const AddIntersectionFunctionTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["FunctionType"]["Any"] = 2;

const AddIntersectionConstructorTypeLiteralToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ConstructorType"]["Literal"] = 2;
const AddIntersectionConstructorTypeObjectToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ConstructorType"]["Object"] = 2;
const AddIntersectionConstructorTypeStringToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ConstructorType"]["String"] = 2;
const AddIntersectionConstructorTypeNumberToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ConstructorType"]["Number"] = 2;
const AddIntersectionConstructorTypeBooleanToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ConstructorType"]["Boolean"] = 2;
const AddIntersectionConstructorTypeAnyToTypeReferencePredefinedAny: Defaults["TypeReferencePredefined"]["Any"] & Defaults["ConstructorType"]["Any"] = 2;

