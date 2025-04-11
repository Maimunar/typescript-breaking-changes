import { Defaults } from "../../defaults";

/*
 * IntersectionType
 */

// Add Intersection - IntersectionType
// Initial Value
const TypeIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] = 1

// Changes
const AddIntersectionParenthesizedTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ParenthesizedType"]["Literal"] = 1;
const AddIntersectionParenthesizedTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ParenthesizedType"]["Object"] = 1;
const AddIntersectionParenthesizedTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ParenthesizedType"]["String"] = 1;
const AddIntersectionParenthesizedTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ParenthesizedType"]["Number"] = 1;
const AddIntersectionParenthesizedTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ParenthesizedType"]["Boolean"] = 1;
const AddIntersectionParenthesizedTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ParenthesizedType"]["Any"] = 1;

const AddIntersectionTypeReferenceBuiltinLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 1;
const AddIntersectionTypeReferenceBuiltinObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Object"] = 1;
const AddIntersectionTypeReferenceBuiltinStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["String"] = 1;
const AddIntersectionTypeReferenceBuiltinNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Number"] = 1;
const AddIntersectionTypeReferenceBuiltinBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 1;
const AddIntersectionTypeReferenceBuiltinAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Any"] = 1;

const AddIntersectionTypeReferencePredefinedLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeReferencePredefined"]["Literal"] = 1;
const AddIntersectionTypeReferencePredefinedObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeReferencePredefined"]["Object"] = 1;
const AddIntersectionTypeReferencePredefinedStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeReferencePredefined"]["String"] = 1;
const AddIntersectionTypeReferencePredefinedNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeReferencePredefined"]["Number"] = 1;
const AddIntersectionTypeReferencePredefinedBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeReferencePredefined"]["Boolean"] = 1;
const AddIntersectionTypeReferencePredefinedAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeReferencePredefined"]["Any"] = 1;

const AddIntersectionUnionTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["UnionType"]["Literal"] = 1;
const AddIntersectionUnionTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["UnionType"]["Object"] = 1;
const AddIntersectionUnionTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["UnionType"]["String"] = 1;
const AddIntersectionUnionTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["UnionType"]["Number"] = 1;
const AddIntersectionUnionTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["UnionType"]["Boolean"] = 1;
const AddIntersectionUnionTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["UnionType"]["Any"] = 1;

const AddIntersectionIntersectionTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["IntersectionType"]["Literal"] = 1;
const AddIntersectionIntersectionTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["IntersectionType"]["Object"] = 1;
const AddIntersectionIntersectionTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["IntersectionType"]["String"] = 1;
const AddIntersectionIntersectionTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["IntersectionType"]["Number"] = 1;
const AddIntersectionIntersectionTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["IntersectionType"]["Boolean"] = 1;
const AddIntersectionIntersectionTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["IntersectionType"]["Any"] = 1;

const AddIntersectionTypeLiteralLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeLiteral"]["Literal"] = 1;
const AddIntersectionTypeLiteralObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeLiteral"]["Object"] = 1;
const AddIntersectionTypeLiteralStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeLiteral"]["String"] = 1;
const AddIntersectionTypeLiteralNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeLiteral"]["Number"] = 1;
const AddIntersectionTypeLiteralBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeLiteral"]["Boolean"] = 1;
const AddIntersectionTypeLiteralAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TypeLiteral"]["Any"] = 1;

const AddIntersectionTupleTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TupleType"]["Literal"] = 1;
const AddIntersectionTupleTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TupleType"]["Object"] = 1;
const AddIntersectionTupleTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TupleType"]["String"] = 1;
const AddIntersectionTupleTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TupleType"]["Number"] = 1;
const AddIntersectionTupleTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TupleType"]["Boolean"] = 1;
const AddIntersectionTupleTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["TupleType"]["Any"] = 1;

const AddIntersectionArrayTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ArrayType"]["Literal"] = 1;
const AddIntersectionArrayTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ArrayType"]["Object"] = 1;
const AddIntersectionArrayTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ArrayType"]["String"] = 1;
const AddIntersectionArrayTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ArrayType"]["Number"] = 1;
const AddIntersectionArrayTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ArrayType"]["Boolean"] = 1;
const AddIntersectionArrayTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ArrayType"]["Any"] = 1;

const AddIntersectionFunctionTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["FunctionType"]["Literal"] = 1;
const AddIntersectionFunctionTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["FunctionType"]["Object"] = 1;
const AddIntersectionFunctionTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["FunctionType"]["String"] = 1;
const AddIntersectionFunctionTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["FunctionType"]["Number"] = 1;
const AddIntersectionFunctionTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["FunctionType"]["Boolean"] = 1;
const AddIntersectionFunctionTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["FunctionType"]["Any"] = 1;

const AddIntersectionConstructorTypeLiteralToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ConstructorType"]["Literal"] = 1;
const AddIntersectionConstructorTypeObjectToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ConstructorType"]["Object"] = 1;
const AddIntersectionConstructorTypeStringToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ConstructorType"]["String"] = 1;
const AddIntersectionConstructorTypeNumberToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ConstructorType"]["Number"] = 1;
const AddIntersectionConstructorTypeBooleanToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ConstructorType"]["Boolean"] = 1;
const AddIntersectionConstructorTypeAnyToIntersectionTypeLiteral: Defaults["IntersectionType"]["Literal"] & Defaults["ConstructorType"]["Any"] = 1;

// Initial Value
const TypeIntersectionTypeObject: Defaults["IntersectionType"]["Object"] = {}

// Changes
const AddIntersectionParenthesizedTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ParenthesizedType"]["Literal"] = {};
const AddIntersectionParenthesizedTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ParenthesizedType"]["Object"] = {};
const AddIntersectionParenthesizedTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ParenthesizedType"]["String"] = {};
const AddIntersectionParenthesizedTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ParenthesizedType"]["Number"] = {};
const AddIntersectionParenthesizedTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ParenthesizedType"]["Boolean"] = {};
const AddIntersectionParenthesizedTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ParenthesizedType"]["Any"] = {};

const AddIntersectionTypeReferenceBuiltinLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddIntersectionTypeReferenceBuiltinObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Object"] = {};
const AddIntersectionTypeReferenceBuiltinStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeReferenceBuiltin"]["String"] = {};
const AddIntersectionTypeReferenceBuiltinNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Number"] = {};
const AddIntersectionTypeReferenceBuiltinBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddIntersectionTypeReferenceBuiltinAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Any"] = {};

const AddIntersectionTypeReferencePredefinedLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeReferencePredefined"]["Literal"] = {};
const AddIntersectionTypeReferencePredefinedObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeReferencePredefined"]["Object"] = {};
const AddIntersectionTypeReferencePredefinedStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeReferencePredefined"]["String"] = {};
const AddIntersectionTypeReferencePredefinedNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeReferencePredefined"]["Number"] = {};
const AddIntersectionTypeReferencePredefinedBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeReferencePredefined"]["Boolean"] = {};
const AddIntersectionTypeReferencePredefinedAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeReferencePredefined"]["Any"] = {};

const AddIntersectionUnionTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["UnionType"]["Literal"] = {};
const AddIntersectionUnionTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["UnionType"]["Object"] = {};
const AddIntersectionUnionTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["UnionType"]["String"] = {};
const AddIntersectionUnionTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["UnionType"]["Number"] = {};
const AddIntersectionUnionTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["UnionType"]["Boolean"] = {};
const AddIntersectionUnionTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["UnionType"]["Any"] = {};

const AddIntersectionIntersectionTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["IntersectionType"]["Literal"] = {};
const AddIntersectionIntersectionTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["IntersectionType"]["Object"] = {};
const AddIntersectionIntersectionTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["IntersectionType"]["String"] = {};
const AddIntersectionIntersectionTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["IntersectionType"]["Number"] = {};
const AddIntersectionIntersectionTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["IntersectionType"]["Boolean"] = {};
const AddIntersectionIntersectionTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["IntersectionType"]["Any"] = {};

const AddIntersectionTypeLiteralLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeLiteral"]["Literal"] = {};
const AddIntersectionTypeLiteralObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeLiteral"]["Object"] = {};
const AddIntersectionTypeLiteralStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeLiteral"]["String"] = {};
const AddIntersectionTypeLiteralNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeLiteral"]["Number"] = {};
const AddIntersectionTypeLiteralBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeLiteral"]["Boolean"] = {};
const AddIntersectionTypeLiteralAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TypeLiteral"]["Any"] = {};

const AddIntersectionTupleTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TupleType"]["Literal"] = {};
const AddIntersectionTupleTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TupleType"]["Object"] = {};
const AddIntersectionTupleTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TupleType"]["String"] = {};
const AddIntersectionTupleTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TupleType"]["Number"] = {};
const AddIntersectionTupleTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TupleType"]["Boolean"] = {};
const AddIntersectionTupleTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["TupleType"]["Any"] = {};

const AddIntersectionArrayTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ArrayType"]["Literal"] = {};
const AddIntersectionArrayTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ArrayType"]["Object"] = {};
const AddIntersectionArrayTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ArrayType"]["String"] = {};
const AddIntersectionArrayTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ArrayType"]["Number"] = {};
const AddIntersectionArrayTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ArrayType"]["Boolean"] = {};
const AddIntersectionArrayTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ArrayType"]["Any"] = {};

const AddIntersectionFunctionTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["FunctionType"]["Literal"] = {};
const AddIntersectionFunctionTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["FunctionType"]["Object"] = {};
const AddIntersectionFunctionTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["FunctionType"]["String"] = {};
const AddIntersectionFunctionTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["FunctionType"]["Number"] = {};
const AddIntersectionFunctionTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["FunctionType"]["Boolean"] = {};
const AddIntersectionFunctionTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["FunctionType"]["Any"] = {};

const AddIntersectionConstructorTypeLiteralToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ConstructorType"]["Literal"] = {};
const AddIntersectionConstructorTypeObjectToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ConstructorType"]["Object"] = {};
const AddIntersectionConstructorTypeStringToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ConstructorType"]["String"] = {};
const AddIntersectionConstructorTypeNumberToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ConstructorType"]["Number"] = {};
const AddIntersectionConstructorTypeBooleanToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ConstructorType"]["Boolean"] = {};
const AddIntersectionConstructorTypeAnyToIntersectionTypeObject: Defaults["IntersectionType"]["Object"] & Defaults["ConstructorType"]["Any"] = {};

// Initial Value
const TypeIntersectionTypeString: Defaults["IntersectionType"]["String"] = "two"

// Changes
const AddIntersectionParenthesizedTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ParenthesizedType"]["Literal"] = "two";
const AddIntersectionParenthesizedTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ParenthesizedType"]["Object"] = "two";
const AddIntersectionParenthesizedTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ParenthesizedType"]["String"] = "two";
const AddIntersectionParenthesizedTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ParenthesizedType"]["Number"] = "two";
const AddIntersectionParenthesizedTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ParenthesizedType"]["Boolean"] = "two";
const AddIntersectionParenthesizedTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ParenthesizedType"]["Any"] = "two";

const AddIntersectionTypeReferenceBuiltinLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeReferenceBuiltin"]["Literal"] = "two";
const AddIntersectionTypeReferenceBuiltinObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeReferenceBuiltin"]["Object"] = "two";
const AddIntersectionTypeReferenceBuiltinStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeReferenceBuiltin"]["String"] = "two";
const AddIntersectionTypeReferenceBuiltinNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeReferenceBuiltin"]["Number"] = "two";
const AddIntersectionTypeReferenceBuiltinBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = "two";
const AddIntersectionTypeReferenceBuiltinAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeReferenceBuiltin"]["Any"] = "two";

const AddIntersectionTypeReferencePredefinedLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeReferencePredefined"]["Literal"] = "two";
const AddIntersectionTypeReferencePredefinedObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeReferencePredefined"]["Object"] = "two";
const AddIntersectionTypeReferencePredefinedStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeReferencePredefined"]["String"] = "two";
const AddIntersectionTypeReferencePredefinedNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeReferencePredefined"]["Number"] = "two";
const AddIntersectionTypeReferencePredefinedBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeReferencePredefined"]["Boolean"] = "two";
const AddIntersectionTypeReferencePredefinedAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeReferencePredefined"]["Any"] = "two";

const AddIntersectionUnionTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["UnionType"]["Literal"] = "two";
const AddIntersectionUnionTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["UnionType"]["Object"] = "two";
const AddIntersectionUnionTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["UnionType"]["String"] = "two";
const AddIntersectionUnionTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["UnionType"]["Number"] = "two";
const AddIntersectionUnionTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["UnionType"]["Boolean"] = "two";
const AddIntersectionUnionTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["UnionType"]["Any"] = "two";

const AddIntersectionIntersectionTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["IntersectionType"]["Literal"] = "two";
const AddIntersectionIntersectionTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["IntersectionType"]["Object"] = "two";
const AddIntersectionIntersectionTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["IntersectionType"]["String"] = "two";
const AddIntersectionIntersectionTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["IntersectionType"]["Number"] = "two";
const AddIntersectionIntersectionTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["IntersectionType"]["Boolean"] = "two";
const AddIntersectionIntersectionTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["IntersectionType"]["Any"] = "two";

const AddIntersectionTypeLiteralLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeLiteral"]["Literal"] = "two";
const AddIntersectionTypeLiteralObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeLiteral"]["Object"] = "two";
const AddIntersectionTypeLiteralStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeLiteral"]["String"] = "two";
const AddIntersectionTypeLiteralNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeLiteral"]["Number"] = "two";
const AddIntersectionTypeLiteralBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeLiteral"]["Boolean"] = "two";
const AddIntersectionTypeLiteralAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TypeLiteral"]["Any"] = "two";

const AddIntersectionTupleTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TupleType"]["Literal"] = "two";
const AddIntersectionTupleTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TupleType"]["Object"] = "two";
const AddIntersectionTupleTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TupleType"]["String"] = "two";
const AddIntersectionTupleTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TupleType"]["Number"] = "two";
const AddIntersectionTupleTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TupleType"]["Boolean"] = "two";
const AddIntersectionTupleTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["TupleType"]["Any"] = "two";

const AddIntersectionArrayTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ArrayType"]["Literal"] = "two";
const AddIntersectionArrayTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ArrayType"]["Object"] = "two";
const AddIntersectionArrayTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ArrayType"]["String"] = "two";
const AddIntersectionArrayTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ArrayType"]["Number"] = "two";
const AddIntersectionArrayTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ArrayType"]["Boolean"] = "two";
const AddIntersectionArrayTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ArrayType"]["Any"] = "two";

const AddIntersectionFunctionTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["FunctionType"]["Literal"] = "two";
const AddIntersectionFunctionTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["FunctionType"]["Object"] = "two";
const AddIntersectionFunctionTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["FunctionType"]["String"] = "two";
const AddIntersectionFunctionTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["FunctionType"]["Number"] = "two";
const AddIntersectionFunctionTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["FunctionType"]["Boolean"] = "two";
const AddIntersectionFunctionTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["FunctionType"]["Any"] = "two";

const AddIntersectionConstructorTypeLiteralToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ConstructorType"]["Literal"] = "two";
const AddIntersectionConstructorTypeObjectToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ConstructorType"]["Object"] = "two";
const AddIntersectionConstructorTypeStringToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ConstructorType"]["String"] = "two";
const AddIntersectionConstructorTypeNumberToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ConstructorType"]["Number"] = "two";
const AddIntersectionConstructorTypeBooleanToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ConstructorType"]["Boolean"] = "two";
const AddIntersectionConstructorTypeAnyToIntersectionTypeString: Defaults["IntersectionType"]["String"] & Defaults["ConstructorType"]["Any"] = "two";

// Initial Value
const TypeIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] = 2

// Changes
const AddIntersectionParenthesizedTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ParenthesizedType"]["Literal"] = 2;
const AddIntersectionParenthesizedTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ParenthesizedType"]["Object"] = 2;
const AddIntersectionParenthesizedTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ParenthesizedType"]["String"] = 2;
const AddIntersectionParenthesizedTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ParenthesizedType"]["Number"] = 2;
const AddIntersectionParenthesizedTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddIntersectionParenthesizedTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ParenthesizedType"]["Any"] = 2;

const AddIntersectionTypeReferenceBuiltinLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddIntersectionTypeReferenceBuiltinObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddIntersectionTypeReferenceBuiltinStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddIntersectionTypeReferenceBuiltinNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddIntersectionTypeReferenceBuiltinBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddIntersectionTypeReferenceBuiltinAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddIntersectionTypeReferencePredefinedLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddIntersectionTypeReferencePredefinedObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddIntersectionTypeReferencePredefinedStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeReferencePredefined"]["String"] = 2;
const AddIntersectionTypeReferencePredefinedNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddIntersectionTypeReferencePredefinedBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddIntersectionTypeReferencePredefinedAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddIntersectionUnionTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["UnionType"]["Literal"] = 2;
const AddIntersectionUnionTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["UnionType"]["Object"] = 2;
const AddIntersectionUnionTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["UnionType"]["String"] = 2;
const AddIntersectionUnionTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["UnionType"]["Number"] = 2;
const AddIntersectionUnionTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["UnionType"]["Boolean"] = 2;
const AddIntersectionUnionTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["UnionType"]["Any"] = 2;

const AddIntersectionIntersectionTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["IntersectionType"]["Literal"] = 2;
const AddIntersectionIntersectionTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["IntersectionType"]["Object"] = 2;
const AddIntersectionIntersectionTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["IntersectionType"]["String"] = 2;
const AddIntersectionIntersectionTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["IntersectionType"]["Number"] = 2;
const AddIntersectionIntersectionTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["IntersectionType"]["Boolean"] = 2;
const AddIntersectionIntersectionTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["IntersectionType"]["Any"] = 2;

const AddIntersectionTypeLiteralLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeLiteral"]["Literal"] = 2;
const AddIntersectionTypeLiteralObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeLiteral"]["Object"] = 2;
const AddIntersectionTypeLiteralStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeLiteral"]["String"] = 2;
const AddIntersectionTypeLiteralNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeLiteral"]["Number"] = 2;
const AddIntersectionTypeLiteralBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeLiteral"]["Boolean"] = 2;
const AddIntersectionTypeLiteralAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TypeLiteral"]["Any"] = 2;

const AddIntersectionTupleTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TupleType"]["Literal"] = 2;
const AddIntersectionTupleTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TupleType"]["Object"] = 2;
const AddIntersectionTupleTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TupleType"]["String"] = 2;
const AddIntersectionTupleTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TupleType"]["Number"] = 2;
const AddIntersectionTupleTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TupleType"]["Boolean"] = 2;
const AddIntersectionTupleTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["TupleType"]["Any"] = 2;

const AddIntersectionArrayTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ArrayType"]["Literal"] = 2;
const AddIntersectionArrayTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ArrayType"]["Object"] = 2;
const AddIntersectionArrayTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ArrayType"]["String"] = 2;
const AddIntersectionArrayTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ArrayType"]["Number"] = 2;
const AddIntersectionArrayTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ArrayType"]["Boolean"] = 2;
const AddIntersectionArrayTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ArrayType"]["Any"] = 2;

const AddIntersectionFunctionTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["FunctionType"]["Literal"] = 2;
const AddIntersectionFunctionTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["FunctionType"]["Object"] = 2;
const AddIntersectionFunctionTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["FunctionType"]["String"] = 2;
const AddIntersectionFunctionTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["FunctionType"]["Number"] = 2;
const AddIntersectionFunctionTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["FunctionType"]["Boolean"] = 2;
const AddIntersectionFunctionTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["FunctionType"]["Any"] = 2;

const AddIntersectionConstructorTypeLiteralToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ConstructorType"]["Literal"] = 2;
const AddIntersectionConstructorTypeObjectToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ConstructorType"]["Object"] = 2;
const AddIntersectionConstructorTypeStringToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ConstructorType"]["String"] = 2;
const AddIntersectionConstructorTypeNumberToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ConstructorType"]["Number"] = 2;
const AddIntersectionConstructorTypeBooleanToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ConstructorType"]["Boolean"] = 2;
const AddIntersectionConstructorTypeAnyToIntersectionTypeNumber: Defaults["IntersectionType"]["Number"] & Defaults["ConstructorType"]["Any"] = 2;

// Initial Value
const TypeIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] = true

// Changes
const AddIntersectionParenthesizedTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ParenthesizedType"]["Literal"] = true;
const AddIntersectionParenthesizedTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ParenthesizedType"]["Object"] = true;
const AddIntersectionParenthesizedTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ParenthesizedType"]["String"] = true;
const AddIntersectionParenthesizedTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ParenthesizedType"]["Number"] = true;
const AddIntersectionParenthesizedTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ParenthesizedType"]["Boolean"] = true;
const AddIntersectionParenthesizedTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ParenthesizedType"]["Any"] = true;

const AddIntersectionTypeReferenceBuiltinLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Literal"] = true;
const AddIntersectionTypeReferenceBuiltinObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Object"] = true;
const AddIntersectionTypeReferenceBuiltinStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["String"] = true;
const AddIntersectionTypeReferenceBuiltinNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Number"] = true;
const AddIntersectionTypeReferenceBuiltinBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = true;
const AddIntersectionTypeReferenceBuiltinAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Any"] = true;

const AddIntersectionTypeReferencePredefinedLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Literal"] = true;
const AddIntersectionTypeReferencePredefinedObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Object"] = true;
const AddIntersectionTypeReferencePredefinedStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeReferencePredefined"]["String"] = true;
const AddIntersectionTypeReferencePredefinedNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Number"] = true;
const AddIntersectionTypeReferencePredefinedBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Boolean"] = true;
const AddIntersectionTypeReferencePredefinedAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Any"] = true;

const AddIntersectionUnionTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["UnionType"]["Literal"] = true;
const AddIntersectionUnionTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["UnionType"]["Object"] = true;
const AddIntersectionUnionTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["UnionType"]["String"] = true;
const AddIntersectionUnionTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["UnionType"]["Number"] = true;
const AddIntersectionUnionTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["UnionType"]["Boolean"] = true;
const AddIntersectionUnionTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["UnionType"]["Any"] = true;

const AddIntersectionIntersectionTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["IntersectionType"]["Literal"] = true;
const AddIntersectionIntersectionTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["IntersectionType"]["Object"] = true;
const AddIntersectionIntersectionTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["IntersectionType"]["String"] = true;
const AddIntersectionIntersectionTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["IntersectionType"]["Number"] = true;
const AddIntersectionIntersectionTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["IntersectionType"]["Boolean"] = true;
const AddIntersectionIntersectionTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["IntersectionType"]["Any"] = true;

const AddIntersectionTypeLiteralLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeLiteral"]["Literal"] = true;
const AddIntersectionTypeLiteralObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeLiteral"]["Object"] = true;
const AddIntersectionTypeLiteralStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeLiteral"]["String"] = true;
const AddIntersectionTypeLiteralNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeLiteral"]["Number"] = true;
const AddIntersectionTypeLiteralBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeLiteral"]["Boolean"] = true;
const AddIntersectionTypeLiteralAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TypeLiteral"]["Any"] = true;

const AddIntersectionTupleTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TupleType"]["Literal"] = true;
const AddIntersectionTupleTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TupleType"]["Object"] = true;
const AddIntersectionTupleTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TupleType"]["String"] = true;
const AddIntersectionTupleTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TupleType"]["Number"] = true;
const AddIntersectionTupleTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TupleType"]["Boolean"] = true;
const AddIntersectionTupleTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["TupleType"]["Any"] = true;

const AddIntersectionArrayTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ArrayType"]["Literal"] = true;
const AddIntersectionArrayTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ArrayType"]["Object"] = true;
const AddIntersectionArrayTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ArrayType"]["String"] = true;
const AddIntersectionArrayTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ArrayType"]["Number"] = true;
const AddIntersectionArrayTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ArrayType"]["Boolean"] = true;
const AddIntersectionArrayTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ArrayType"]["Any"] = true;

const AddIntersectionFunctionTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["FunctionType"]["Literal"] = true;
const AddIntersectionFunctionTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["FunctionType"]["Object"] = true;
const AddIntersectionFunctionTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["FunctionType"]["String"] = true;
const AddIntersectionFunctionTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["FunctionType"]["Number"] = true;
const AddIntersectionFunctionTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["FunctionType"]["Boolean"] = true;
const AddIntersectionFunctionTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["FunctionType"]["Any"] = true;

const AddIntersectionConstructorTypeLiteralToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ConstructorType"]["Literal"] = true;
const AddIntersectionConstructorTypeObjectToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ConstructorType"]["Object"] = true;
const AddIntersectionConstructorTypeStringToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ConstructorType"]["String"] = true;
const AddIntersectionConstructorTypeNumberToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ConstructorType"]["Number"] = true;
const AddIntersectionConstructorTypeBooleanToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ConstructorType"]["Boolean"] = true;
const AddIntersectionConstructorTypeAnyToIntersectionTypeBoolean: Defaults["IntersectionType"]["Boolean"] & Defaults["ConstructorType"]["Any"] = true;

// Initial Value
const TypeIntersectionTypeAny: Defaults["IntersectionType"]["Any"] = 2

// Changes
const AddIntersectionParenthesizedTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ParenthesizedType"]["Literal"] = 2;
const AddIntersectionParenthesizedTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ParenthesizedType"]["Object"] = 2;
const AddIntersectionParenthesizedTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ParenthesizedType"]["String"] = 2;
const AddIntersectionParenthesizedTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ParenthesizedType"]["Number"] = 2;
const AddIntersectionParenthesizedTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ParenthesizedType"]["Boolean"] = 2;
const AddIntersectionParenthesizedTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ParenthesizedType"]["Any"] = 2;

const AddIntersectionTypeReferenceBuiltinLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Literal"] = 2;
const AddIntersectionTypeReferenceBuiltinObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Object"] = 2;
const AddIntersectionTypeReferenceBuiltinStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeReferenceBuiltin"]["String"] = 2;
const AddIntersectionTypeReferenceBuiltinNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Number"] = 2;
const AddIntersectionTypeReferenceBuiltinBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = 2;
const AddIntersectionTypeReferenceBuiltinAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Any"] = 2;

const AddIntersectionTypeReferencePredefinedLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeReferencePredefined"]["Literal"] = 2;
const AddIntersectionTypeReferencePredefinedObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeReferencePredefined"]["Object"] = 2;
const AddIntersectionTypeReferencePredefinedStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeReferencePredefined"]["String"] = 2;
const AddIntersectionTypeReferencePredefinedNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeReferencePredefined"]["Number"] = 2;
const AddIntersectionTypeReferencePredefinedBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeReferencePredefined"]["Boolean"] = 2;
const AddIntersectionTypeReferencePredefinedAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeReferencePredefined"]["Any"] = 2;

const AddIntersectionUnionTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["UnionType"]["Literal"] = 2;
const AddIntersectionUnionTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["UnionType"]["Object"] = 2;
const AddIntersectionUnionTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["UnionType"]["String"] = 2;
const AddIntersectionUnionTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["UnionType"]["Number"] = 2;
const AddIntersectionUnionTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["UnionType"]["Boolean"] = 2;
const AddIntersectionUnionTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["UnionType"]["Any"] = 2;

const AddIntersectionIntersectionTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["IntersectionType"]["Literal"] = 2;
const AddIntersectionIntersectionTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["IntersectionType"]["Object"] = 2;
const AddIntersectionIntersectionTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["IntersectionType"]["String"] = 2;
const AddIntersectionIntersectionTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["IntersectionType"]["Number"] = 2;
const AddIntersectionIntersectionTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["IntersectionType"]["Boolean"] = 2;
const AddIntersectionIntersectionTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["IntersectionType"]["Any"] = 2;

const AddIntersectionTypeLiteralLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeLiteral"]["Literal"] = 2;
const AddIntersectionTypeLiteralObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeLiteral"]["Object"] = 2;
const AddIntersectionTypeLiteralStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeLiteral"]["String"] = 2;
const AddIntersectionTypeLiteralNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeLiteral"]["Number"] = 2;
const AddIntersectionTypeLiteralBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeLiteral"]["Boolean"] = 2;
const AddIntersectionTypeLiteralAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TypeLiteral"]["Any"] = 2;

const AddIntersectionTupleTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TupleType"]["Literal"] = 2;
const AddIntersectionTupleTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TupleType"]["Object"] = 2;
const AddIntersectionTupleTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TupleType"]["String"] = 2;
const AddIntersectionTupleTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TupleType"]["Number"] = 2;
const AddIntersectionTupleTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TupleType"]["Boolean"] = 2;
const AddIntersectionTupleTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["TupleType"]["Any"] = 2;

const AddIntersectionArrayTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ArrayType"]["Literal"] = 2;
const AddIntersectionArrayTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ArrayType"]["Object"] = 2;
const AddIntersectionArrayTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ArrayType"]["String"] = 2;
const AddIntersectionArrayTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ArrayType"]["Number"] = 2;
const AddIntersectionArrayTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ArrayType"]["Boolean"] = 2;
const AddIntersectionArrayTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ArrayType"]["Any"] = 2;

const AddIntersectionFunctionTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["FunctionType"]["Literal"] = 2;
const AddIntersectionFunctionTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["FunctionType"]["Object"] = 2;
const AddIntersectionFunctionTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["FunctionType"]["String"] = 2;
const AddIntersectionFunctionTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["FunctionType"]["Number"] = 2;
const AddIntersectionFunctionTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["FunctionType"]["Boolean"] = 2;
const AddIntersectionFunctionTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["FunctionType"]["Any"] = 2;

const AddIntersectionConstructorTypeLiteralToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ConstructorType"]["Literal"] = 2;
const AddIntersectionConstructorTypeObjectToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ConstructorType"]["Object"] = 2;
const AddIntersectionConstructorTypeStringToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ConstructorType"]["String"] = 2;
const AddIntersectionConstructorTypeNumberToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ConstructorType"]["Number"] = 2;
const AddIntersectionConstructorTypeBooleanToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ConstructorType"]["Boolean"] = 2;
const AddIntersectionConstructorTypeAnyToIntersectionTypeAny: Defaults["IntersectionType"]["Any"] & Defaults["ConstructorType"]["Any"] = 2;

