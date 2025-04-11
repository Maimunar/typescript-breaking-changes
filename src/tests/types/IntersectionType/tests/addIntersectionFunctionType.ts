import { Defaults } from "../../defaults";

/*
 * IntersectionType
 */

// Add Intersection - FunctionType
// Initial Value
const TypeFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = (
  param,
) => {};

// Changes
const AddIntersectionParenthesizedTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ParenthesizedType"]["Literal"] = (param: 1) => {};
const AddIntersectionParenthesizedTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ParenthesizedType"]["Object"] = (param: 1) => {};
const AddIntersectionParenthesizedTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ParenthesizedType"]["String"] = (param: 1) => {};
const AddIntersectionParenthesizedTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ParenthesizedType"]["Number"] = (param: 1) => {};
const AddIntersectionParenthesizedTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ParenthesizedType"]["Boolean"] = (param: 1) => {};
const AddIntersectionParenthesizedTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ParenthesizedType"]["Any"] = (param: 1) => {};

const AddIntersectionTypeReferenceBuiltinLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeReferenceBuiltin"]["Object"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeReferenceBuiltin"]["String"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeReferenceBuiltin"]["Number"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeReferenceBuiltin"]["Any"] = (param) => {};

const AddIntersectionTypeReferencePredefinedLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeReferencePredefined"]["Literal"] = (param) => {};
const AddIntersectionTypeReferencePredefinedObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeReferencePredefined"]["Object"] = (param) => {};
const AddIntersectionTypeReferencePredefinedStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeReferencePredefined"]["String"] = (param) => {};
const AddIntersectionTypeReferencePredefinedNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeReferencePredefined"]["Number"] = (param) => {};
const AddIntersectionTypeReferencePredefinedBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeReferencePredefined"]["Boolean"] = (param) => {};
const AddIntersectionTypeReferencePredefinedAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeReferencePredefined"]["Any"] = (param) => {};

const AddIntersectionUnionTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["UnionType"]["Literal"] = (param) => {};
const AddIntersectionUnionTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["UnionType"]["Object"] = (param) => {};
const AddIntersectionUnionTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["UnionType"]["String"] = (param) => {};
const AddIntersectionUnionTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["UnionType"]["Number"] = (param) => {};
const AddIntersectionUnionTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["UnionType"]["Boolean"] = (param) => {};
const AddIntersectionUnionTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["UnionType"]["Any"] = (param) => {};

const AddIntersectionIntersectionTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["IntersectionType"]["Literal"] = (param) => {};
const AddIntersectionIntersectionTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["IntersectionType"]["Object"] = (param) => {};
const AddIntersectionIntersectionTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["IntersectionType"]["String"] = (param) => {};
const AddIntersectionIntersectionTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["IntersectionType"]["Number"] = (param) => {};
const AddIntersectionIntersectionTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["IntersectionType"]["Boolean"] = (param) => {};
const AddIntersectionIntersectionTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["IntersectionType"]["Any"] = (param) => {};

const AddIntersectionTypeLiteralLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeLiteral"]["Literal"] = (param) => {};
const AddIntersectionTypeLiteralObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeLiteral"]["Object"] = (param) => {};
const AddIntersectionTypeLiteralStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeLiteral"]["String"] = (param) => {};
const AddIntersectionTypeLiteralNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeLiteral"]["Number"] = (param) => {};
const AddIntersectionTypeLiteralBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeLiteral"]["Boolean"] = (param) => {};
const AddIntersectionTypeLiteralAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TypeLiteral"]["Any"] = (param) => {};

const AddIntersectionTupleTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TupleType"]["Literal"] = (param) => {};
const AddIntersectionTupleTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TupleType"]["Object"] = (param) => {};
const AddIntersectionTupleTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TupleType"]["String"] = (param) => {};
const AddIntersectionTupleTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TupleType"]["Number"] = (param) => {};
const AddIntersectionTupleTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TupleType"]["Boolean"] = (param) => {};
const AddIntersectionTupleTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["TupleType"]["Any"] = (param) => {};

const AddIntersectionArrayTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ArrayType"]["Literal"] = (param) => {};
const AddIntersectionArrayTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ArrayType"]["Object"] = (param) => {};
const AddIntersectionArrayTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ArrayType"]["String"] = (param) => {};
const AddIntersectionArrayTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ArrayType"]["Number"] = (param) => {};
const AddIntersectionArrayTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ArrayType"]["Boolean"] = (param) => {};
const AddIntersectionArrayTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ArrayType"]["Any"] = (param) => {};

const AddIntersectionFunctionTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["FunctionType"]["Literal"] = (param) => {};
const AddIntersectionFunctionTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["FunctionType"]["Object"] = (param) => {};
const AddIntersectionFunctionTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["FunctionType"]["String"] = (param) => {};
const AddIntersectionFunctionTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["FunctionType"]["Number"] = (param: number) => {};
const AddIntersectionFunctionTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["FunctionType"]["Boolean"] = (param) => {};
const AddIntersectionFunctionTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["FunctionType"]["Any"] = (param) => {};

const AddIntersectionConstructorTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ConstructorType"]["Literal"] = (param) => {};
const AddIntersectionConstructorTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ConstructorType"]["Object"] = (param) => {};
const AddIntersectionConstructorTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ConstructorType"]["String"] = (param) => {};
const AddIntersectionConstructorTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ConstructorType"]["Number"] = (param) => {};
const AddIntersectionConstructorTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ConstructorType"]["Boolean"] = (param) => {};
const AddIntersectionConstructorTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] &
  Defaults["ConstructorType"]["Any"] = (param) => {};

// Initial Value
const TypeFunctionTypeObject: Defaults["FunctionType"]["Object"] = (
  param,
) => {};

// Changes
const AddIntersectionParenthesizedTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ParenthesizedType"]["Literal"] = (param) => {};
const AddIntersectionParenthesizedTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ParenthesizedType"]["Object"] = (param) => {};
const AddIntersectionParenthesizedTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ParenthesizedType"]["String"] = (param) => {};
const AddIntersectionParenthesizedTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ParenthesizedType"]["Number"] = (param) => {};
const AddIntersectionParenthesizedTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ParenthesizedType"]["Boolean"] = (param) => {};
const AddIntersectionParenthesizedTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ParenthesizedType"]["Any"] = (param) => {};

const AddIntersectionTypeReferenceBuiltinLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeReferenceBuiltin"]["Object"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeReferenceBuiltin"]["String"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeReferenceBuiltin"]["Number"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeReferenceBuiltin"]["Any"] = (param) => {};

const AddIntersectionTypeReferencePredefinedLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeReferencePredefined"]["Literal"] = (param) => {};
const AddIntersectionTypeReferencePredefinedObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeReferencePredefined"]["Object"] = (param) => {};
const AddIntersectionTypeReferencePredefinedStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeReferencePredefined"]["String"] = (param) => {};
const AddIntersectionTypeReferencePredefinedNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeReferencePredefined"]["Number"] = (param) => {};
const AddIntersectionTypeReferencePredefinedBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeReferencePredefined"]["Boolean"] = (param) => {};
const AddIntersectionTypeReferencePredefinedAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeReferencePredefined"]["Any"] = (param) => {};

const AddIntersectionUnionTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["UnionType"]["Literal"] = (param) => {};
const AddIntersectionUnionTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["UnionType"]["Object"] = (param) => {};
const AddIntersectionUnionTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["UnionType"]["String"] = (param) => {};
const AddIntersectionUnionTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["UnionType"]["Number"] = (param) => {};
const AddIntersectionUnionTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["UnionType"]["Boolean"] = (param) => {};
const AddIntersectionUnionTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["UnionType"]["Any"] = (param) => {};

const AddIntersectionIntersectionTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["IntersectionType"]["Literal"] = (param) => {};
const AddIntersectionIntersectionTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["IntersectionType"]["Object"] = (param) => {};
const AddIntersectionIntersectionTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["IntersectionType"]["String"] = (param) => {};
const AddIntersectionIntersectionTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["IntersectionType"]["Number"] = (param) => {};
const AddIntersectionIntersectionTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["IntersectionType"]["Boolean"] = (param) => {};
const AddIntersectionIntersectionTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["IntersectionType"]["Any"] = (param) => {};

const AddIntersectionTypeLiteralLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeLiteral"]["Literal"] = (param) => {};
const AddIntersectionTypeLiteralObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeLiteral"]["Object"] = (param) => {};
const AddIntersectionTypeLiteralStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeLiteral"]["String"] = (param) => {};
const AddIntersectionTypeLiteralNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeLiteral"]["Number"] = (param) => {};
const AddIntersectionTypeLiteralBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeLiteral"]["Boolean"] = (param) => {};
const AddIntersectionTypeLiteralAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TypeLiteral"]["Any"] = (param) => {};

const AddIntersectionTupleTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TupleType"]["Literal"] = (param) => {};
const AddIntersectionTupleTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TupleType"]["Object"] = (param) => {};
const AddIntersectionTupleTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TupleType"]["String"] = (param) => {};
const AddIntersectionTupleTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TupleType"]["Number"] = (param) => {};
const AddIntersectionTupleTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TupleType"]["Boolean"] = (param) => {};
const AddIntersectionTupleTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["TupleType"]["Any"] = (param) => {};

const AddIntersectionArrayTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ArrayType"]["Literal"] = (param) => {};
const AddIntersectionArrayTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ArrayType"]["Object"] = (param) => {};
const AddIntersectionArrayTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ArrayType"]["String"] = (param) => {};
const AddIntersectionArrayTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ArrayType"]["Number"] = (param) => {};
const AddIntersectionArrayTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ArrayType"]["Boolean"] = (param) => {};
const AddIntersectionArrayTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ArrayType"]["Any"] = (param) => {};

const AddIntersectionFunctionTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["FunctionType"]["Literal"] = (param) => {};
const AddIntersectionFunctionTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["FunctionType"]["Object"] = (param) => {};
const AddIntersectionFunctionTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["FunctionType"]["String"] = (param) => {};
const AddIntersectionFunctionTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["FunctionType"]["Number"] = (param) => {};
const AddIntersectionFunctionTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["FunctionType"]["Boolean"] = (param) => {};
const AddIntersectionFunctionTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["FunctionType"]["Any"] = (param) => {};

const AddIntersectionConstructorTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ConstructorType"]["Literal"] = (param) => {};
const AddIntersectionConstructorTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ConstructorType"]["Object"] = (param) => {};
const AddIntersectionConstructorTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ConstructorType"]["String"] = (param) => {};
const AddIntersectionConstructorTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ConstructorType"]["Number"] = (param) => {};
const AddIntersectionConstructorTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ConstructorType"]["Boolean"] = (param) => {};
const AddIntersectionConstructorTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] &
  Defaults["ConstructorType"]["Any"] = (param) => {};

// Initial Value
const TypeFunctionTypeString: Defaults["FunctionType"]["String"] = (
  param,
) => {};

// Changes
const AddIntersectionParenthesizedTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ParenthesizedType"]["Literal"] = (param) => {};
const AddIntersectionParenthesizedTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ParenthesizedType"]["Object"] = (param) => {};
const AddIntersectionParenthesizedTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ParenthesizedType"]["String"] = (param) => {};
const AddIntersectionParenthesizedTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ParenthesizedType"]["Number"] = (param) => {};
const AddIntersectionParenthesizedTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ParenthesizedType"]["Boolean"] = (param) => {};
const AddIntersectionParenthesizedTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ParenthesizedType"]["Any"] = (param) => {};

const AddIntersectionTypeReferenceBuiltinLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinObjectToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeReferenceBuiltin"]["Object"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinStringToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeReferenceBuiltin"]["String"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinNumberToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeReferenceBuiltin"]["Number"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinAnyToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeReferenceBuiltin"]["Any"] = (param) => {};

const AddIntersectionTypeReferencePredefinedLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeReferencePredefined"]["Literal"] = (param) => {};
const AddIntersectionTypeReferencePredefinedObjectToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeReferencePredefined"]["Object"] = (param) => {};
const AddIntersectionTypeReferencePredefinedStringToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeReferencePredefined"]["String"] = (param) => {};
const AddIntersectionTypeReferencePredefinedNumberToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeReferencePredefined"]["Number"] = (param) => {};
const AddIntersectionTypeReferencePredefinedBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeReferencePredefined"]["Boolean"] = (param) => {};
const AddIntersectionTypeReferencePredefinedAnyToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeReferencePredefined"]["Any"] = (param) => {};

const AddIntersectionUnionTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["UnionType"]["Literal"] = (param) => {};
const AddIntersectionUnionTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["UnionType"]["Object"] = (param) => {};
const AddIntersectionUnionTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["UnionType"]["String"] = (param) => {};
const AddIntersectionUnionTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["UnionType"]["Number"] = (param) => {};
const AddIntersectionUnionTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["UnionType"]["Boolean"] = (param) => {};
const AddIntersectionUnionTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["UnionType"]["Any"] = (param) => {};

const AddIntersectionIntersectionTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["IntersectionType"]["Literal"] = (param) => {};
const AddIntersectionIntersectionTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["IntersectionType"]["Object"] = (param) => {};
const AddIntersectionIntersectionTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["IntersectionType"]["String"] = (param) => {};
const AddIntersectionIntersectionTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["IntersectionType"]["Number"] = (param) => {};
const AddIntersectionIntersectionTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["IntersectionType"]["Boolean"] = (param) => {};
const AddIntersectionIntersectionTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["IntersectionType"]["Any"] = (param) => {};

const AddIntersectionTypeLiteralLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeLiteral"]["Literal"] = (param) => {};
const AddIntersectionTypeLiteralObjectToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeLiteral"]["Object"] = (param) => {};
const AddIntersectionTypeLiteralStringToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeLiteral"]["String"] = (param) => {};
const AddIntersectionTypeLiteralNumberToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeLiteral"]["Number"] = (param) => {};
const AddIntersectionTypeLiteralBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeLiteral"]["Boolean"] = (param) => {};
const AddIntersectionTypeLiteralAnyToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TypeLiteral"]["Any"] = (param) => {};

const AddIntersectionTupleTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TupleType"]["Literal"] = (param) => {};
const AddIntersectionTupleTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TupleType"]["Object"] = (param) => {};
const AddIntersectionTupleTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TupleType"]["String"] = (param) => {};
const AddIntersectionTupleTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TupleType"]["Number"] = (param) => {};
const AddIntersectionTupleTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TupleType"]["Boolean"] = (param) => {};
const AddIntersectionTupleTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["TupleType"]["Any"] = (param) => {};

const AddIntersectionArrayTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ArrayType"]["Literal"] = (param) => {};
const AddIntersectionArrayTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ArrayType"]["Object"] = (param) => {};
const AddIntersectionArrayTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ArrayType"]["String"] = (param) => {};
const AddIntersectionArrayTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ArrayType"]["Number"] = (param) => {};
const AddIntersectionArrayTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ArrayType"]["Boolean"] = (param) => {};
const AddIntersectionArrayTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ArrayType"]["Any"] = (param) => {};

const AddIntersectionFunctionTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["FunctionType"]["Literal"] = (param: string) => {};
const AddIntersectionFunctionTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["FunctionType"]["Object"] = (param) => {};
const AddIntersectionFunctionTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["FunctionType"]["String"] = (param) => {};
const AddIntersectionFunctionTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["FunctionType"]["Number"] = (param) => {};
const AddIntersectionFunctionTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["FunctionType"]["Boolean"] = (param) => {};
const AddIntersectionFunctionTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["FunctionType"]["Any"] = (param: string) => {};

const AddIntersectionConstructorTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ConstructorType"]["Literal"] = (param) => {};
const AddIntersectionConstructorTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ConstructorType"]["Object"] = (param) => {};
const AddIntersectionConstructorTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ConstructorType"]["String"] = (param) => {};
const AddIntersectionConstructorTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ConstructorType"]["Number"] = (param) => {};
const AddIntersectionConstructorTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ConstructorType"]["Boolean"] = (param) => {};
const AddIntersectionConstructorTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] &
  Defaults["ConstructorType"]["Any"] = (param) => {};

// Initial Value
const TypeFunctionTypeNumber: Defaults["FunctionType"]["Number"] = (
  param,
) => {};

// Changes
const AddIntersectionParenthesizedTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ParenthesizedType"]["Literal"] = (param) => {};
const AddIntersectionParenthesizedTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ParenthesizedType"]["Object"] = (param) => {};
const AddIntersectionParenthesizedTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ParenthesizedType"]["String"] = (param) => {};
const AddIntersectionParenthesizedTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ParenthesizedType"]["Number"] = (param) => {};
const AddIntersectionParenthesizedTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ParenthesizedType"]["Boolean"] = (param) => {};
const AddIntersectionParenthesizedTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ParenthesizedType"]["Any"] = (param) => {};

const AddIntersectionTypeReferenceBuiltinLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeReferenceBuiltin"]["Object"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeReferenceBuiltin"]["String"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeReferenceBuiltin"]["Number"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeReferenceBuiltin"]["Any"] = (param) => {};

const AddIntersectionTypeReferencePredefinedLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeReferencePredefined"]["Literal"] = (param) => {};
const AddIntersectionTypeReferencePredefinedObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeReferencePredefined"]["Object"] = (param) => {};
const AddIntersectionTypeReferencePredefinedStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeReferencePredefined"]["String"] = (param) => {};
const AddIntersectionTypeReferencePredefinedNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeReferencePredefined"]["Number"] = (param) => {};
const AddIntersectionTypeReferencePredefinedBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeReferencePredefined"]["Boolean"] = (param) => {};
const AddIntersectionTypeReferencePredefinedAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeReferencePredefined"]["Any"] = (param) => {};

const AddIntersectionUnionTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["UnionType"]["Literal"] = (param) => {};
const AddIntersectionUnionTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["UnionType"]["Object"] = (param) => {};
const AddIntersectionUnionTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["UnionType"]["String"] = (param) => {};
const AddIntersectionUnionTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["UnionType"]["Number"] = (param) => {};
const AddIntersectionUnionTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["UnionType"]["Boolean"] = (param) => {};
const AddIntersectionUnionTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["UnionType"]["Any"] = (param) => {};

const AddIntersectionIntersectionTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["IntersectionType"]["Literal"] = (param) => {};
const AddIntersectionIntersectionTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["IntersectionType"]["Object"] = (param) => {};
const AddIntersectionIntersectionTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["IntersectionType"]["String"] = (param) => {};
const AddIntersectionIntersectionTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["IntersectionType"]["Number"] = (param) => {};
const AddIntersectionIntersectionTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["IntersectionType"]["Boolean"] = (param) => {};
const AddIntersectionIntersectionTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["IntersectionType"]["Any"] = (param) => {};

const AddIntersectionTypeLiteralLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeLiteral"]["Literal"] = (param) => {};
const AddIntersectionTypeLiteralObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeLiteral"]["Object"] = (param) => {};
const AddIntersectionTypeLiteralStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeLiteral"]["String"] = (param) => {};
const AddIntersectionTypeLiteralNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeLiteral"]["Number"] = (param) => {};
const AddIntersectionTypeLiteralBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeLiteral"]["Boolean"] = (param) => {};
const AddIntersectionTypeLiteralAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TypeLiteral"]["Any"] = (param) => {};

const AddIntersectionTupleTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TupleType"]["Literal"] = (param) => {};
const AddIntersectionTupleTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TupleType"]["Object"] = (param) => {};
const AddIntersectionTupleTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TupleType"]["String"] = (param) => {};
const AddIntersectionTupleTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TupleType"]["Number"] = (param) => {};
const AddIntersectionTupleTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TupleType"]["Boolean"] = (param) => {};
const AddIntersectionTupleTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["TupleType"]["Any"] = (param) => {};

const AddIntersectionArrayTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ArrayType"]["Literal"] = (param) => {};
const AddIntersectionArrayTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ArrayType"]["Object"] = (param) => {};
const AddIntersectionArrayTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ArrayType"]["String"] = (param) => {};
const AddIntersectionArrayTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ArrayType"]["Number"] = (param) => {};
const AddIntersectionArrayTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ArrayType"]["Boolean"] = (param) => {};
const AddIntersectionArrayTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ArrayType"]["Any"] = (param) => {};

const AddIntersectionFunctionTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["FunctionType"]["Literal"] = (param) => {};
const AddIntersectionFunctionTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["FunctionType"]["Object"] = (param) => {};
const AddIntersectionFunctionTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["FunctionType"]["String"] = (param) => {};
const AddIntersectionFunctionTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["FunctionType"]["Number"] = (param) => {};
const AddIntersectionFunctionTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["FunctionType"]["Boolean"] = (param) => {};
const AddIntersectionFunctionTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["FunctionType"]["Any"] = (param) => {};

const AddIntersectionConstructorTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ConstructorType"]["Literal"] = (param) => {};
const AddIntersectionConstructorTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ConstructorType"]["Object"] = (param) => {};
const AddIntersectionConstructorTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ConstructorType"]["String"] = (param) => {};
const AddIntersectionConstructorTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ConstructorType"]["Number"] = (param) => {};
const AddIntersectionConstructorTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ConstructorType"]["Boolean"] = (param) => {};
const AddIntersectionConstructorTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] &
  Defaults["ConstructorType"]["Any"] = (param) => {};

// Initial Value
const TypeFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = (
  param,
) => {};

// Changes
const AddIntersectionParenthesizedTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ParenthesizedType"]["Literal"] = (param) => {};
const AddIntersectionParenthesizedTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ParenthesizedType"]["Object"] = (param) => {};
const AddIntersectionParenthesizedTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ParenthesizedType"]["String"] = (param) => {};
const AddIntersectionParenthesizedTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ParenthesizedType"]["Number"] = (param) => {};
const AddIntersectionParenthesizedTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ParenthesizedType"]["Boolean"] = (param) => {};
const AddIntersectionParenthesizedTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ParenthesizedType"]["Any"] = (param) => {};

const AddIntersectionTypeReferenceBuiltinLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeReferenceBuiltin"]["Object"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeReferenceBuiltin"]["String"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeReferenceBuiltin"]["Number"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeReferenceBuiltin"]["Any"] = (param) => {};

const AddIntersectionTypeReferencePredefinedLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeReferencePredefined"]["Literal"] = (param) => {};
const AddIntersectionTypeReferencePredefinedObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeReferencePredefined"]["Object"] = (param) => {};
const AddIntersectionTypeReferencePredefinedStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeReferencePredefined"]["String"] = (param) => {};
const AddIntersectionTypeReferencePredefinedNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeReferencePredefined"]["Number"] = (param) => {};
const AddIntersectionTypeReferencePredefinedBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeReferencePredefined"]["Boolean"] = (param) => {};
const AddIntersectionTypeReferencePredefinedAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeReferencePredefined"]["Any"] = (param) => {};

const AddIntersectionUnionTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["UnionType"]["Literal"] = (param) => {};
const AddIntersectionUnionTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["UnionType"]["Object"] = (param) => {};
const AddIntersectionUnionTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["UnionType"]["String"] = (param) => {};
const AddIntersectionUnionTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["UnionType"]["Number"] = (param) => {};
const AddIntersectionUnionTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["UnionType"]["Boolean"] = (param) => {};
const AddIntersectionUnionTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["UnionType"]["Any"] = (param) => {};

const AddIntersectionIntersectionTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["IntersectionType"]["Literal"] = (param) => {};
const AddIntersectionIntersectionTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["IntersectionType"]["Object"] = (param) => {};
const AddIntersectionIntersectionTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["IntersectionType"]["String"] = (param) => {};
const AddIntersectionIntersectionTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["IntersectionType"]["Number"] = (param) => {};
const AddIntersectionIntersectionTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["IntersectionType"]["Boolean"] = (param) => {};
const AddIntersectionIntersectionTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["IntersectionType"]["Any"] = (param) => {};

const AddIntersectionTypeLiteralLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeLiteral"]["Literal"] = (param) => {};
const AddIntersectionTypeLiteralObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeLiteral"]["Object"] = (param) => {};
const AddIntersectionTypeLiteralStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeLiteral"]["String"] = (param) => {};
const AddIntersectionTypeLiteralNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeLiteral"]["Number"] = (param) => {};
const AddIntersectionTypeLiteralBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeLiteral"]["Boolean"] = (param) => {};
const AddIntersectionTypeLiteralAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TypeLiteral"]["Any"] = (param) => {};

const AddIntersectionTupleTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TupleType"]["Literal"] = (param) => {};
const AddIntersectionTupleTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TupleType"]["Object"] = (param) => {};
const AddIntersectionTupleTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TupleType"]["String"] = (param) => {};
const AddIntersectionTupleTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TupleType"]["Number"] = (param) => {};
const AddIntersectionTupleTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TupleType"]["Boolean"] = (param) => {};
const AddIntersectionTupleTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["TupleType"]["Any"] = (param) => {};

const AddIntersectionArrayTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ArrayType"]["Literal"] = (param) => {};
const AddIntersectionArrayTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ArrayType"]["Object"] = (param) => {};
const AddIntersectionArrayTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ArrayType"]["String"] = (param) => {};
const AddIntersectionArrayTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ArrayType"]["Number"] = (param) => {};
const AddIntersectionArrayTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ArrayType"]["Boolean"] = (param) => {};
const AddIntersectionArrayTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ArrayType"]["Any"] = (param) => {};

const AddIntersectionFunctionTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["FunctionType"]["Literal"] = (param) => {};
const AddIntersectionFunctionTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["FunctionType"]["Object"] = (param) => {};
const AddIntersectionFunctionTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["FunctionType"]["String"] = (param) => {};
const AddIntersectionFunctionTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["FunctionType"]["Number"] = (param) => {};
const AddIntersectionFunctionTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["FunctionType"]["Boolean"] = (param) => {};
const AddIntersectionFunctionTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["FunctionType"]["Any"] = (param) => {};

const AddIntersectionConstructorTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ConstructorType"]["Literal"] = (param) => {};
const AddIntersectionConstructorTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ConstructorType"]["Object"] = (param) => {};
const AddIntersectionConstructorTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ConstructorType"]["String"] = (param) => {};
const AddIntersectionConstructorTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ConstructorType"]["Number"] = (param) => {};
const AddIntersectionConstructorTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ConstructorType"]["Boolean"] = (param) => {};
const AddIntersectionConstructorTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] &
  Defaults["ConstructorType"]["Any"] = (param) => {};

// Initial Value
const TypeFunctionTypeAny: Defaults["FunctionType"]["Any"] = (param) => {};

// Changes
const AddIntersectionParenthesizedTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ParenthesizedType"]["Literal"] = (param) => {};
const AddIntersectionParenthesizedTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ParenthesizedType"]["Object"] = (param) => {};
const AddIntersectionParenthesizedTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ParenthesizedType"]["String"] = (param) => {};
const AddIntersectionParenthesizedTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ParenthesizedType"]["Number"] = (param) => {};
const AddIntersectionParenthesizedTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ParenthesizedType"]["Boolean"] = (param) => {};
const AddIntersectionParenthesizedTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ParenthesizedType"]["Any"] = (param) => {};

const AddIntersectionTypeReferenceBuiltinLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeReferenceBuiltin"]["Object"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeReferenceBuiltin"]["String"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeReferenceBuiltin"]["Number"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => {};
const AddIntersectionTypeReferenceBuiltinAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeReferenceBuiltin"]["Any"] = (param) => {};

const AddIntersectionTypeReferencePredefinedLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeReferencePredefined"]["Literal"] = (param) => {};
const AddIntersectionTypeReferencePredefinedObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeReferencePredefined"]["Object"] = (param) => {};
const AddIntersectionTypeReferencePredefinedStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeReferencePredefined"]["String"] = (param) => {};
const AddIntersectionTypeReferencePredefinedNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeReferencePredefined"]["Number"] = (param) => {};
const AddIntersectionTypeReferencePredefinedBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeReferencePredefined"]["Boolean"] = (param) => {};
const AddIntersectionTypeReferencePredefinedAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeReferencePredefined"]["Any"] = (param) => {};

const AddIntersectionUnionTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["UnionType"]["Literal"] = (param) => {};
const AddIntersectionUnionTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["UnionType"]["Object"] = (param) => {};
const AddIntersectionUnionTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["UnionType"]["String"] = (param) => {};
const AddIntersectionUnionTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["UnionType"]["Number"] = (param) => {};
const AddIntersectionUnionTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["UnionType"]["Boolean"] = (param) => {};
const AddIntersectionUnionTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["UnionType"]["Any"] = (param) => {};

const AddIntersectionIntersectionTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["IntersectionType"]["Literal"] = (param) => {};
const AddIntersectionIntersectionTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["IntersectionType"]["Object"] = (param) => {};
const AddIntersectionIntersectionTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["IntersectionType"]["String"] = (param) => {};
const AddIntersectionIntersectionTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["IntersectionType"]["Number"] = (param) => {};
const AddIntersectionIntersectionTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["IntersectionType"]["Boolean"] = (param) => {};
const AddIntersectionIntersectionTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["IntersectionType"]["Any"] = (param) => {};

const AddIntersectionTypeLiteralLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeLiteral"]["Literal"] = (param) => {};
const AddIntersectionTypeLiteralObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeLiteral"]["Object"] = (param) => {};
const AddIntersectionTypeLiteralStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeLiteral"]["String"] = (param) => {};
const AddIntersectionTypeLiteralNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeLiteral"]["Number"] = (param) => {};
const AddIntersectionTypeLiteralBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeLiteral"]["Boolean"] = (param) => {};
const AddIntersectionTypeLiteralAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TypeLiteral"]["Any"] = (param) => {};

const AddIntersectionTupleTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TupleType"]["Literal"] = (param) => {};
const AddIntersectionTupleTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TupleType"]["Object"] = (param) => {};
const AddIntersectionTupleTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TupleType"]["String"] = (param) => {};
const AddIntersectionTupleTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TupleType"]["Number"] = (param) => {};
const AddIntersectionTupleTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TupleType"]["Boolean"] = (param) => {};
const AddIntersectionTupleTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["TupleType"]["Any"] = (param) => {};

const AddIntersectionArrayTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ArrayType"]["Literal"] = (param) => {};
const AddIntersectionArrayTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ArrayType"]["Object"] = (param) => {};
const AddIntersectionArrayTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ArrayType"]["String"] = (param) => {};
const AddIntersectionArrayTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ArrayType"]["Number"] = (param) => {};
const AddIntersectionArrayTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ArrayType"]["Boolean"] = (param) => {};
const AddIntersectionArrayTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ArrayType"]["Any"] = (param) => {};

const AddIntersectionFunctionTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["FunctionType"]["Literal"] = (param) => {};
const AddIntersectionFunctionTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["FunctionType"]["Object"] = (param) => {};
const AddIntersectionFunctionTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["FunctionType"]["String"] = (param) => {};
const AddIntersectionFunctionTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["FunctionType"]["Number"] = (param) => {};
const AddIntersectionFunctionTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["FunctionType"]["Boolean"] = (param) => {};
const AddIntersectionFunctionTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["FunctionType"]["Any"] = (param) => {};

const AddIntersectionConstructorTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ConstructorType"]["Literal"] = (param) => {};
const AddIntersectionConstructorTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ConstructorType"]["Object"] = (param) => {};
const AddIntersectionConstructorTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ConstructorType"]["String"] = (param) => {};
const AddIntersectionConstructorTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ConstructorType"]["Number"] = (param) => {};
const AddIntersectionConstructorTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ConstructorType"]["Boolean"] = (param) => {};
const AddIntersectionConstructorTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] &
  Defaults["ConstructorType"]["Any"] = (param) => {};
