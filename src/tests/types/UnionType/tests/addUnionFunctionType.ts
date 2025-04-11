import { Defaults } from "../../defaults";

/*
 * UnionType
 */

// Add Union - FunctionType
// Initial Value
const TypeFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] = (param) => { }

// Changes
const AddUnionParenthesizedTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const AddUnionParenthesizedTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Object"] = (param) => { };
const AddUnionParenthesizedTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["String"] = (param) => { };
const AddUnionParenthesizedTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Number"] = (param) => { };
const AddUnionParenthesizedTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const AddUnionParenthesizedTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Any"] = (param) => { };

const AddUnionTypeReferenceBuiltinLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const AddUnionTypeReferenceBuiltinObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const AddUnionTypeReferenceBuiltinStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const AddUnionTypeReferenceBuiltinNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const AddUnionTypeReferenceBuiltinBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const AddUnionTypeReferenceBuiltinAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };

const AddUnionTypeReferencePredefinedLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const AddUnionTypeReferencePredefinedObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const AddUnionTypeReferencePredefinedStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const AddUnionTypeReferencePredefinedNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const AddUnionTypeReferencePredefinedBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const AddUnionTypeReferencePredefinedAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Any"] = (param) => { };

const AddUnionUnionTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Literal"] = (param) => { };
const AddUnionUnionTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Object"] = (param) => { };
const AddUnionUnionTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["String"] = (param) => { };
const AddUnionUnionTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Number"] = (param) => { };
const AddUnionUnionTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Boolean"] = (param) => { };
const AddUnionUnionTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Any"] = (param) => { };

const AddUnionIntersectionTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Literal"] = (param) => { };
const AddUnionIntersectionTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Object"] = (param) => { };
const AddUnionIntersectionTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["String"] = (param) => { };
const AddUnionIntersectionTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Number"] = (param) => { };
const AddUnionIntersectionTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Boolean"] = (param) => { };
const AddUnionIntersectionTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Any"] = (param) => { };

const AddUnionTypeLiteralLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Literal"] = (param) => { };
const AddUnionTypeLiteralObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Object"] = (param) => { };
const AddUnionTypeLiteralStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["String"] = (param) => { };
const AddUnionTypeLiteralNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Number"] = (param) => { };
const AddUnionTypeLiteralBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const AddUnionTypeLiteralAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Any"] = (param) => { };

const AddUnionTupleTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Literal"] = (param) => { };
const AddUnionTupleTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Object"] = (param) => { };
const AddUnionTupleTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["String"] = (param) => { };
const AddUnionTupleTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Number"] = (param) => { };
const AddUnionTupleTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Boolean"] = (param) => { };
const AddUnionTupleTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Any"] = (param) => { };

const AddUnionArrayTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Literal"] = (param) => { };
const AddUnionArrayTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Object"] = (param) => { };
const AddUnionArrayTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["String"] = (param) => { };
const AddUnionArrayTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Number"] = (param) => { };
const AddUnionArrayTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Boolean"] = (param) => { };
const AddUnionArrayTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Any"] = (param) => { };

const AddUnionFunctionTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const AddUnionFunctionTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Object"] = (param) => { };
const AddUnionFunctionTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["String"] = (param) => { };
const AddUnionFunctionTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Number"] = (param) => { };
const AddUnionFunctionTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const AddUnionFunctionTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Any"] = (param) => { };

const AddUnionConstructorTypeLiteralToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Literal"] = (param) => { };
const AddUnionConstructorTypeObjectToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Object"] = (param) => { };
const AddUnionConstructorTypeStringToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["String"] = (param) => { };
const AddUnionConstructorTypeNumberToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Number"] = (param) => { };
const AddUnionConstructorTypeBooleanToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Boolean"] = (param) => { };
const AddUnionConstructorTypeAnyToFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Any"] = (param) => { };

// Initial Value
const TypeFunctionTypeObject: Defaults["FunctionType"]["Object"] = (param) => { }

// Changes
const AddUnionParenthesizedTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const AddUnionParenthesizedTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Object"] = (param) => { };
const AddUnionParenthesizedTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["String"] = (param) => { };
const AddUnionParenthesizedTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Number"] = (param) => { };
const AddUnionParenthesizedTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const AddUnionParenthesizedTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Any"] = (param) => { };

const AddUnionTypeReferenceBuiltinLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const AddUnionTypeReferenceBuiltinObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const AddUnionTypeReferenceBuiltinStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const AddUnionTypeReferenceBuiltinNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const AddUnionTypeReferenceBuiltinBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const AddUnionTypeReferenceBuiltinAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };

const AddUnionTypeReferencePredefinedLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const AddUnionTypeReferencePredefinedObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const AddUnionTypeReferencePredefinedStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const AddUnionTypeReferencePredefinedNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const AddUnionTypeReferencePredefinedBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const AddUnionTypeReferencePredefinedAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Any"] = (param) => { };

const AddUnionUnionTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Literal"] = (param) => { };
const AddUnionUnionTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Object"] = (param) => { };
const AddUnionUnionTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["String"] = (param) => { };
const AddUnionUnionTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Number"] = (param) => { };
const AddUnionUnionTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Boolean"] = (param) => { };
const AddUnionUnionTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Any"] = (param) => { };

const AddUnionIntersectionTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Literal"] = (param) => { };
const AddUnionIntersectionTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Object"] = (param) => { };
const AddUnionIntersectionTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["String"] = (param) => { };
const AddUnionIntersectionTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Number"] = (param) => { };
const AddUnionIntersectionTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Boolean"] = (param) => { };
const AddUnionIntersectionTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Any"] = (param) => { };

const AddUnionTypeLiteralLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Literal"] = (param) => { };
const AddUnionTypeLiteralObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Object"] = (param) => { };
const AddUnionTypeLiteralStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["String"] = (param) => { };
const AddUnionTypeLiteralNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Number"] = (param) => { };
const AddUnionTypeLiteralBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const AddUnionTypeLiteralAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Any"] = (param) => { };

const AddUnionTupleTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Literal"] = (param) => { };
const AddUnionTupleTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Object"] = (param) => { };
const AddUnionTupleTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["String"] = (param) => { };
const AddUnionTupleTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Number"] = (param) => { };
const AddUnionTupleTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Boolean"] = (param) => { };
const AddUnionTupleTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Any"] = (param) => { };

const AddUnionArrayTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Literal"] = (param) => { };
const AddUnionArrayTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Object"] = (param) => { };
const AddUnionArrayTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["String"] = (param) => { };
const AddUnionArrayTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Number"] = (param) => { };
const AddUnionArrayTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Boolean"] = (param) => { };
const AddUnionArrayTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Any"] = (param) => { };

const AddUnionFunctionTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const AddUnionFunctionTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Object"] = (param) => { };
const AddUnionFunctionTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["String"] = (param) => { };
const AddUnionFunctionTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Number"] = (param) => { };
const AddUnionFunctionTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const AddUnionFunctionTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Any"] = (param) => { };

const AddUnionConstructorTypeLiteralToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Literal"] = (param) => { };
const AddUnionConstructorTypeObjectToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Object"] = (param) => { };
const AddUnionConstructorTypeStringToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["String"] = (param) => { };
const AddUnionConstructorTypeNumberToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Number"] = (param) => { };
const AddUnionConstructorTypeBooleanToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Boolean"] = (param) => { };
const AddUnionConstructorTypeAnyToFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Any"] = (param) => { };

// Initial Value
const TypeFunctionTypeString: Defaults["FunctionType"]["String"] = (param) => { }

// Changes
const AddUnionParenthesizedTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const AddUnionParenthesizedTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Object"] = (param) => { };
const AddUnionParenthesizedTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["String"] = (param) => { };
const AddUnionParenthesizedTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Number"] = (param) => { };
const AddUnionParenthesizedTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const AddUnionParenthesizedTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Any"] = (param) => { };

const AddUnionTypeReferenceBuiltinLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const AddUnionTypeReferenceBuiltinObjectToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const AddUnionTypeReferenceBuiltinStringToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const AddUnionTypeReferenceBuiltinNumberToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const AddUnionTypeReferenceBuiltinBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const AddUnionTypeReferenceBuiltinAnyToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };

const AddUnionTypeReferencePredefinedLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const AddUnionTypeReferencePredefinedObjectToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const AddUnionTypeReferencePredefinedStringToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const AddUnionTypeReferencePredefinedNumberToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const AddUnionTypeReferencePredefinedBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const AddUnionTypeReferencePredefinedAnyToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Any"] = (param) => { };

const AddUnionUnionTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Literal"] = (param) => { };
const AddUnionUnionTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Object"] = (param) => { };
const AddUnionUnionTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["String"] = (param) => { };
const AddUnionUnionTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Number"] = (param) => { };
const AddUnionUnionTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Boolean"] = (param) => { };
const AddUnionUnionTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Any"] = (param) => { };

const AddUnionIntersectionTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Literal"] = (param) => { };
const AddUnionIntersectionTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Object"] = (param) => { };
const AddUnionIntersectionTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["String"] = (param) => { };
const AddUnionIntersectionTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Number"] = (param) => { };
const AddUnionIntersectionTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Boolean"] = (param) => { };
const AddUnionIntersectionTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Any"] = (param) => { };

const AddUnionTypeLiteralLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Literal"] = (param) => { };
const AddUnionTypeLiteralObjectToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Object"] = (param) => { };
const AddUnionTypeLiteralStringToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["String"] = (param) => { };
const AddUnionTypeLiteralNumberToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Number"] = (param) => { };
const AddUnionTypeLiteralBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const AddUnionTypeLiteralAnyToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Any"] = (param) => { };

const AddUnionTupleTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Literal"] = (param) => { };
const AddUnionTupleTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Object"] = (param) => { };
const AddUnionTupleTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["String"] = (param) => { };
const AddUnionTupleTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Number"] = (param) => { };
const AddUnionTupleTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Boolean"] = (param) => { };
const AddUnionTupleTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Any"] = (param) => { };

const AddUnionArrayTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Literal"] = (param) => { };
const AddUnionArrayTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Object"] = (param) => { };
const AddUnionArrayTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["String"] = (param) => { };
const AddUnionArrayTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Number"] = (param) => { };
const AddUnionArrayTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Boolean"] = (param) => { };
const AddUnionArrayTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Any"] = (param) => { };

const AddUnionFunctionTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const AddUnionFunctionTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Object"] = (param) => { };
const AddUnionFunctionTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["String"] = (param) => { };
const AddUnionFunctionTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Number"] = (param) => { };
const AddUnionFunctionTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const AddUnionFunctionTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Any"] = (param) => { };

const AddUnionConstructorTypeLiteralToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Literal"] = (param) => { };
const AddUnionConstructorTypeObjectToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Object"] = (param) => { };
const AddUnionConstructorTypeStringToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["String"] = (param) => { };
const AddUnionConstructorTypeNumberToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Number"] = (param) => { };
const AddUnionConstructorTypeBooleanToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Boolean"] = (param) => { };
const AddUnionConstructorTypeAnyToFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Any"] = (param) => { };

// Initial Value
const TypeFunctionTypeNumber: Defaults["FunctionType"]["Number"] = (param) => { }

// Changes
const AddUnionParenthesizedTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const AddUnionParenthesizedTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Object"] = (param) => { };
const AddUnionParenthesizedTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["String"] = (param) => { };
const AddUnionParenthesizedTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Number"] = (param) => { };
const AddUnionParenthesizedTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const AddUnionParenthesizedTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Any"] = (param) => { };

const AddUnionTypeReferenceBuiltinLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const AddUnionTypeReferenceBuiltinObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const AddUnionTypeReferenceBuiltinStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const AddUnionTypeReferenceBuiltinNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const AddUnionTypeReferenceBuiltinBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const AddUnionTypeReferenceBuiltinAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };

const AddUnionTypeReferencePredefinedLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const AddUnionTypeReferencePredefinedObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const AddUnionTypeReferencePredefinedStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const AddUnionTypeReferencePredefinedNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const AddUnionTypeReferencePredefinedBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const AddUnionTypeReferencePredefinedAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Any"] = (param) => { };

const AddUnionUnionTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Literal"] = (param) => { };
const AddUnionUnionTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Object"] = (param) => { };
const AddUnionUnionTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["String"] = (param) => { };
const AddUnionUnionTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Number"] = (param) => { };
const AddUnionUnionTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Boolean"] = (param) => { };
const AddUnionUnionTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Any"] = (param) => { };

const AddUnionIntersectionTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Literal"] = (param) => { };
const AddUnionIntersectionTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Object"] = (param) => { };
const AddUnionIntersectionTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["String"] = (param) => { };
const AddUnionIntersectionTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Number"] = (param) => { };
const AddUnionIntersectionTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Boolean"] = (param) => { };
const AddUnionIntersectionTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Any"] = (param) => { };

const AddUnionTypeLiteralLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Literal"] = (param) => { };
const AddUnionTypeLiteralObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Object"] = (param) => { };
const AddUnionTypeLiteralStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["String"] = (param) => { };
const AddUnionTypeLiteralNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Number"] = (param) => { };
const AddUnionTypeLiteralBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const AddUnionTypeLiteralAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Any"] = (param) => { };

const AddUnionTupleTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Literal"] = (param) => { };
const AddUnionTupleTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Object"] = (param) => { };
const AddUnionTupleTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["String"] = (param) => { };
const AddUnionTupleTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Number"] = (param) => { };
const AddUnionTupleTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Boolean"] = (param) => { };
const AddUnionTupleTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Any"] = (param) => { };

const AddUnionArrayTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Literal"] = (param) => { };
const AddUnionArrayTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Object"] = (param) => { };
const AddUnionArrayTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["String"] = (param) => { };
const AddUnionArrayTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Number"] = (param) => { };
const AddUnionArrayTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Boolean"] = (param) => { };
const AddUnionArrayTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Any"] = (param) => { };

const AddUnionFunctionTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const AddUnionFunctionTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Object"] = (param) => { };
const AddUnionFunctionTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["String"] = (param) => { };
const AddUnionFunctionTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Number"] = (param) => { };
const AddUnionFunctionTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const AddUnionFunctionTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Any"] = (param) => { };

const AddUnionConstructorTypeLiteralToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Literal"] = (param) => { };
const AddUnionConstructorTypeObjectToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Object"] = (param) => { };
const AddUnionConstructorTypeStringToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["String"] = (param) => { };
const AddUnionConstructorTypeNumberToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Number"] = (param) => { };
const AddUnionConstructorTypeBooleanToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Boolean"] = (param) => { };
const AddUnionConstructorTypeAnyToFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Any"] = (param) => { };

// Initial Value
const TypeFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] = (param) => { }

// Changes
const AddUnionParenthesizedTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const AddUnionParenthesizedTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Object"] = (param) => { };
const AddUnionParenthesizedTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["String"] = (param) => { };
const AddUnionParenthesizedTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Number"] = (param) => { };
const AddUnionParenthesizedTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const AddUnionParenthesizedTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Any"] = (param) => { };

const AddUnionTypeReferenceBuiltinLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const AddUnionTypeReferenceBuiltinObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const AddUnionTypeReferenceBuiltinStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const AddUnionTypeReferenceBuiltinNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const AddUnionTypeReferenceBuiltinBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const AddUnionTypeReferenceBuiltinAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };

const AddUnionTypeReferencePredefinedLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const AddUnionTypeReferencePredefinedObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const AddUnionTypeReferencePredefinedStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const AddUnionTypeReferencePredefinedNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const AddUnionTypeReferencePredefinedBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const AddUnionTypeReferencePredefinedAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Any"] = (param) => { };

const AddUnionUnionTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Literal"] = (param) => { };
const AddUnionUnionTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Object"] = (param) => { };
const AddUnionUnionTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["String"] = (param) => { };
const AddUnionUnionTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Number"] = (param) => { };
const AddUnionUnionTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Boolean"] = (param) => { };
const AddUnionUnionTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Any"] = (param) => { };

const AddUnionIntersectionTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Literal"] = (param) => { };
const AddUnionIntersectionTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Object"] = (param) => { };
const AddUnionIntersectionTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["String"] = (param) => { };
const AddUnionIntersectionTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Number"] = (param) => { };
const AddUnionIntersectionTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Boolean"] = (param) => { };
const AddUnionIntersectionTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Any"] = (param) => { };

const AddUnionTypeLiteralLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Literal"] = (param) => { };
const AddUnionTypeLiteralObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Object"] = (param) => { };
const AddUnionTypeLiteralStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["String"] = (param) => { };
const AddUnionTypeLiteralNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Number"] = (param) => { };
const AddUnionTypeLiteralBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const AddUnionTypeLiteralAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Any"] = (param) => { };

const AddUnionTupleTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Literal"] = (param) => { };
const AddUnionTupleTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Object"] = (param) => { };
const AddUnionTupleTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["String"] = (param) => { };
const AddUnionTupleTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Number"] = (param) => { };
const AddUnionTupleTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Boolean"] = (param) => { };
const AddUnionTupleTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Any"] = (param) => { };

const AddUnionArrayTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Literal"] = (param) => { };
const AddUnionArrayTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Object"] = (param) => { };
const AddUnionArrayTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["String"] = (param) => { };
const AddUnionArrayTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Number"] = (param) => { };
const AddUnionArrayTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Boolean"] = (param) => { };
const AddUnionArrayTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Any"] = (param) => { };

const AddUnionFunctionTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const AddUnionFunctionTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Object"] = (param) => { };
const AddUnionFunctionTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["String"] = (param) => { };
const AddUnionFunctionTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Number"] = (param) => { };
const AddUnionFunctionTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const AddUnionFunctionTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Any"] = (param) => { };

const AddUnionConstructorTypeLiteralToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Literal"] = (param) => { };
const AddUnionConstructorTypeObjectToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Object"] = (param) => { };
const AddUnionConstructorTypeStringToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["String"] = (param) => { };
const AddUnionConstructorTypeNumberToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Number"] = (param) => { };
const AddUnionConstructorTypeBooleanToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Boolean"] = (param) => { };
const AddUnionConstructorTypeAnyToFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Any"] = (param) => { };

// Initial Value
const TypeFunctionTypeAny: Defaults["FunctionType"]["Any"] = (param) => { }

// Changes
const AddUnionParenthesizedTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const AddUnionParenthesizedTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Object"] = (param) => { };
const AddUnionParenthesizedTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["String"] = (param) => { };
const AddUnionParenthesizedTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Number"] = (param) => { };
const AddUnionParenthesizedTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const AddUnionParenthesizedTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Any"] = (param) => { };

const AddUnionTypeReferenceBuiltinLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const AddUnionTypeReferenceBuiltinObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const AddUnionTypeReferenceBuiltinStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const AddUnionTypeReferenceBuiltinNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const AddUnionTypeReferenceBuiltinBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const AddUnionTypeReferenceBuiltinAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };

const AddUnionTypeReferencePredefinedLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const AddUnionTypeReferencePredefinedObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const AddUnionTypeReferencePredefinedStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const AddUnionTypeReferencePredefinedNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const AddUnionTypeReferencePredefinedBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const AddUnionTypeReferencePredefinedAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Any"] = (param) => { };

const AddUnionUnionTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Literal"] = (param) => { };
const AddUnionUnionTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Object"] = (param) => { };
const AddUnionUnionTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["String"] = (param) => { };
const AddUnionUnionTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Number"] = (param) => { };
const AddUnionUnionTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Boolean"] = (param) => { };
const AddUnionUnionTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Any"] = (param) => { };

const AddUnionIntersectionTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Literal"] = (param) => { };
const AddUnionIntersectionTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Object"] = (param) => { };
const AddUnionIntersectionTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["String"] = (param) => { };
const AddUnionIntersectionTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Number"] = (param) => { };
const AddUnionIntersectionTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Boolean"] = (param) => { };
const AddUnionIntersectionTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Any"] = (param) => { };

const AddUnionTypeLiteralLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Literal"] = (param) => { };
const AddUnionTypeLiteralObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Object"] = (param) => { };
const AddUnionTypeLiteralStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["String"] = (param) => { };
const AddUnionTypeLiteralNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Number"] = (param) => { };
const AddUnionTypeLiteralBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const AddUnionTypeLiteralAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Any"] = (param) => { };

const AddUnionTupleTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Literal"] = (param) => { };
const AddUnionTupleTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Object"] = (param) => { };
const AddUnionTupleTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["String"] = (param) => { };
const AddUnionTupleTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Number"] = (param) => { };
const AddUnionTupleTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Boolean"] = (param) => { };
const AddUnionTupleTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Any"] = (param) => { };

const AddUnionArrayTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Literal"] = (param) => { };
const AddUnionArrayTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Object"] = (param) => { };
const AddUnionArrayTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["String"] = (param) => { };
const AddUnionArrayTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Number"] = (param) => { };
const AddUnionArrayTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Boolean"] = (param) => { };
const AddUnionArrayTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Any"] = (param) => { };

const AddUnionFunctionTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const AddUnionFunctionTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Object"] = (param) => { };
const AddUnionFunctionTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["String"] = (param) => { };
const AddUnionFunctionTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Number"] = (param) => { };
const AddUnionFunctionTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const AddUnionFunctionTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Any"] = (param) => { };

const AddUnionConstructorTypeLiteralToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Literal"] = (param) => { };
const AddUnionConstructorTypeObjectToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Object"] = (param) => { };
const AddUnionConstructorTypeStringToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["String"] = (param) => { };
const AddUnionConstructorTypeNumberToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Number"] = (param) => { };
const AddUnionConstructorTypeBooleanToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Boolean"] = (param) => { };
const AddUnionConstructorTypeAnyToFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Any"] = (param) => { };

