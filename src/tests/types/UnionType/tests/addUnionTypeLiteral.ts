import { Defaults } from "../../defaults";

/*
 * UnionType
 */

// Add Union - TypeLiteral
// Initial Value
const TypeTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = {"key":1}

// Changes
const AddUnionParenthesizedTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ParenthesizedType"]["Literal"] = {"key":1};
const AddUnionParenthesizedTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ParenthesizedType"]["Object"] = {"key":1};
const AddUnionParenthesizedTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ParenthesizedType"]["String"] = {"key":1};
const AddUnionParenthesizedTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ParenthesizedType"]["Number"] = {"key":1};
const AddUnionParenthesizedTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ParenthesizedType"]["Boolean"] = {"key":1};
const AddUnionParenthesizedTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ParenthesizedType"]["Any"] = {"key":1};

const AddUnionTypeReferenceBuiltinLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":1};
const AddUnionTypeReferenceBuiltinObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Object"] = {"key":1};
const AddUnionTypeReferenceBuiltinStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeReferenceBuiltin"]["String"] = {"key":1};
const AddUnionTypeReferenceBuiltinNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Number"] = {"key":1};
const AddUnionTypeReferenceBuiltinBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":1};
const AddUnionTypeReferenceBuiltinAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Any"] = {"key":1};

const AddUnionTypeReferencePredefinedLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeReferencePredefined"]["Literal"] = {"key":1};
const AddUnionTypeReferencePredefinedObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeReferencePredefined"]["Object"] = {"key":1};
const AddUnionTypeReferencePredefinedStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeReferencePredefined"]["String"] = {"key":1};
const AddUnionTypeReferencePredefinedNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeReferencePredefined"]["Number"] = {"key":1};
const AddUnionTypeReferencePredefinedBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeReferencePredefined"]["Boolean"] = {"key":1};
const AddUnionTypeReferencePredefinedAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeReferencePredefined"]["Any"] = {"key":1};

const AddUnionUnionTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["UnionType"]["Literal"] = {"key":1};
const AddUnionUnionTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["UnionType"]["Object"] = {"key":1};
const AddUnionUnionTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["UnionType"]["String"] = {"key":1};
const AddUnionUnionTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["UnionType"]["Number"] = {"key":1};
const AddUnionUnionTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["UnionType"]["Boolean"] = {"key":1};
const AddUnionUnionTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["UnionType"]["Any"] = {"key":1};

const AddUnionIntersectionTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["IntersectionType"]["Literal"] = {"key":1};
const AddUnionIntersectionTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["IntersectionType"]["Object"] = {"key":1};
const AddUnionIntersectionTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["IntersectionType"]["String"] = {"key":1};
const AddUnionIntersectionTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["IntersectionType"]["Number"] = {"key":1};
const AddUnionIntersectionTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["IntersectionType"]["Boolean"] = {"key":1};
const AddUnionIntersectionTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["IntersectionType"]["Any"] = {"key":1};

const AddUnionTypeLiteralLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeLiteral"]["Literal"] = {"key":1};
const AddUnionTypeLiteralObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeLiteral"]["Object"] = {"key":1};
const AddUnionTypeLiteralStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeLiteral"]["String"] = {"key":1};
const AddUnionTypeLiteralNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeLiteral"]["Number"] = {"key":1};
const AddUnionTypeLiteralBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeLiteral"]["Boolean"] = {"key":1};
const AddUnionTypeLiteralAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TypeLiteral"]["Any"] = {"key":1};

const AddUnionTupleTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TupleType"]["Literal"] = {"key":1};
const AddUnionTupleTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TupleType"]["Object"] = {"key":1};
const AddUnionTupleTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TupleType"]["String"] = {"key":1};
const AddUnionTupleTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TupleType"]["Number"] = {"key":1};
const AddUnionTupleTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TupleType"]["Boolean"] = {"key":1};
const AddUnionTupleTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["TupleType"]["Any"] = {"key":1};

const AddUnionArrayTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ArrayType"]["Literal"] = {"key":1};
const AddUnionArrayTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ArrayType"]["Object"] = {"key":1};
const AddUnionArrayTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ArrayType"]["String"] = {"key":1};
const AddUnionArrayTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ArrayType"]["Number"] = {"key":1};
const AddUnionArrayTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ArrayType"]["Boolean"] = {"key":1};
const AddUnionArrayTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ArrayType"]["Any"] = {"key":1};

const AddUnionFunctionTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["FunctionType"]["Literal"] = {"key":1};
const AddUnionFunctionTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["FunctionType"]["Object"] = {"key":1};
const AddUnionFunctionTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["FunctionType"]["String"] = {"key":1};
const AddUnionFunctionTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["FunctionType"]["Number"] = {"key":1};
const AddUnionFunctionTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["FunctionType"]["Boolean"] = {"key":1};
const AddUnionFunctionTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["FunctionType"]["Any"] = {"key":1};

const AddUnionConstructorTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ConstructorType"]["Literal"] = {"key":1};
const AddUnionConstructorTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ConstructorType"]["Object"] = {"key":1};
const AddUnionConstructorTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ConstructorType"]["String"] = {"key":1};
const AddUnionConstructorTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ConstructorType"]["Number"] = {"key":1};
const AddUnionConstructorTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ConstructorType"]["Boolean"] = {"key":1};
const AddUnionConstructorTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] | Defaults["ConstructorType"]["Any"] = {"key":1};

// Initial Value
const TypeTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = {"key":{}}

// Changes
const AddUnionParenthesizedTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ParenthesizedType"]["Literal"] = {"key":{}};
const AddUnionParenthesizedTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ParenthesizedType"]["Object"] = {"key":{}};
const AddUnionParenthesizedTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ParenthesizedType"]["String"] = {"key":{}};
const AddUnionParenthesizedTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ParenthesizedType"]["Number"] = {"key":{}};
const AddUnionParenthesizedTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ParenthesizedType"]["Boolean"] = {"key":{}};
const AddUnionParenthesizedTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ParenthesizedType"]["Any"] = {"key":{}};

const AddUnionTypeReferenceBuiltinLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":{}};
const AddUnionTypeReferenceBuiltinObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeReferenceBuiltin"]["Object"] = {"key":{}};
const AddUnionTypeReferenceBuiltinStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeReferenceBuiltin"]["String"] = {"key":{}};
const AddUnionTypeReferenceBuiltinNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeReferenceBuiltin"]["Number"] = {"key":{}};
const AddUnionTypeReferenceBuiltinBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":{}};
const AddUnionTypeReferenceBuiltinAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeReferenceBuiltin"]["Any"] = {"key":{}};

const AddUnionTypeReferencePredefinedLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeReferencePredefined"]["Literal"] = {"key":{}};
const AddUnionTypeReferencePredefinedObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeReferencePredefined"]["Object"] = {"key":{}};
const AddUnionTypeReferencePredefinedStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeReferencePredefined"]["String"] = {"key":{}};
const AddUnionTypeReferencePredefinedNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeReferencePredefined"]["Number"] = {"key":{}};
const AddUnionTypeReferencePredefinedBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeReferencePredefined"]["Boolean"] = {"key":{}};
const AddUnionTypeReferencePredefinedAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeReferencePredefined"]["Any"] = {"key":{}};

const AddUnionUnionTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["UnionType"]["Literal"] = {"key":{}};
const AddUnionUnionTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["UnionType"]["Object"] = {"key":{}};
const AddUnionUnionTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["UnionType"]["String"] = {"key":{}};
const AddUnionUnionTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["UnionType"]["Number"] = {"key":{}};
const AddUnionUnionTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["UnionType"]["Boolean"] = {"key":{}};
const AddUnionUnionTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["UnionType"]["Any"] = {"key":{}};

const AddUnionIntersectionTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["IntersectionType"]["Literal"] = {"key":{}};
const AddUnionIntersectionTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["IntersectionType"]["Object"] = {"key":{}};
const AddUnionIntersectionTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["IntersectionType"]["String"] = {"key":{}};
const AddUnionIntersectionTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["IntersectionType"]["Number"] = {"key":{}};
const AddUnionIntersectionTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["IntersectionType"]["Boolean"] = {"key":{}};
const AddUnionIntersectionTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["IntersectionType"]["Any"] = {"key":{}};

const AddUnionTypeLiteralLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeLiteral"]["Literal"] = {"key":{}};
const AddUnionTypeLiteralObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeLiteral"]["Object"] = {"key":{}};
const AddUnionTypeLiteralStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeLiteral"]["String"] = {"key":{}};
const AddUnionTypeLiteralNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeLiteral"]["Number"] = {"key":{}};
const AddUnionTypeLiteralBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeLiteral"]["Boolean"] = {"key":{}};
const AddUnionTypeLiteralAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TypeLiteral"]["Any"] = {"key":{}};

const AddUnionTupleTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TupleType"]["Literal"] = {"key":{}};
const AddUnionTupleTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TupleType"]["Object"] = {"key":{}};
const AddUnionTupleTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TupleType"]["String"] = {"key":{}};
const AddUnionTupleTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TupleType"]["Number"] = {"key":{}};
const AddUnionTupleTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TupleType"]["Boolean"] = {"key":{}};
const AddUnionTupleTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["TupleType"]["Any"] = {"key":{}};

const AddUnionArrayTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ArrayType"]["Literal"] = {"key":{}};
const AddUnionArrayTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ArrayType"]["Object"] = {"key":{}};
const AddUnionArrayTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ArrayType"]["String"] = {"key":{}};
const AddUnionArrayTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ArrayType"]["Number"] = {"key":{}};
const AddUnionArrayTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ArrayType"]["Boolean"] = {"key":{}};
const AddUnionArrayTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ArrayType"]["Any"] = {"key":{}};

const AddUnionFunctionTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["FunctionType"]["Literal"] = {"key":{}};
const AddUnionFunctionTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["FunctionType"]["Object"] = {"key":{}};
const AddUnionFunctionTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["FunctionType"]["String"] = {"key":{}};
const AddUnionFunctionTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["FunctionType"]["Number"] = {"key":{}};
const AddUnionFunctionTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["FunctionType"]["Boolean"] = {"key":{}};
const AddUnionFunctionTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["FunctionType"]["Any"] = {"key":{}};

const AddUnionConstructorTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ConstructorType"]["Literal"] = {"key":{}};
const AddUnionConstructorTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ConstructorType"]["Object"] = {"key":{}};
const AddUnionConstructorTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ConstructorType"]["String"] = {"key":{}};
const AddUnionConstructorTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ConstructorType"]["Number"] = {"key":{}};
const AddUnionConstructorTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ConstructorType"]["Boolean"] = {"key":{}};
const AddUnionConstructorTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] | Defaults["ConstructorType"]["Any"] = {"key":{}};

// Initial Value
const TypeTypeLiteralString: Defaults["TypeLiteral"]["String"] = {"key":"two"}

// Changes
const AddUnionParenthesizedTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ParenthesizedType"]["Literal"] = {"key":"two"};
const AddUnionParenthesizedTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ParenthesizedType"]["Object"] = {"key":"two"};
const AddUnionParenthesizedTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ParenthesizedType"]["String"] = {"key":"two"};
const AddUnionParenthesizedTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ParenthesizedType"]["Number"] = {"key":"two"};
const AddUnionParenthesizedTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ParenthesizedType"]["Boolean"] = {"key":"two"};
const AddUnionParenthesizedTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ParenthesizedType"]["Any"] = {"key":"two"};

const AddUnionTypeReferenceBuiltinLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":"two"};
const AddUnionTypeReferenceBuiltinObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeReferenceBuiltin"]["Object"] = {"key":"two"};
const AddUnionTypeReferenceBuiltinStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeReferenceBuiltin"]["String"] = {"key":"two"};
const AddUnionTypeReferenceBuiltinNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeReferenceBuiltin"]["Number"] = {"key":"two"};
const AddUnionTypeReferenceBuiltinBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":"two"};
const AddUnionTypeReferenceBuiltinAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeReferenceBuiltin"]["Any"] = {"key":"two"};

const AddUnionTypeReferencePredefinedLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeReferencePredefined"]["Literal"] = {"key":"two"};
const AddUnionTypeReferencePredefinedObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeReferencePredefined"]["Object"] = {"key":"two"};
const AddUnionTypeReferencePredefinedStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeReferencePredefined"]["String"] = {"key":"two"};
const AddUnionTypeReferencePredefinedNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeReferencePredefined"]["Number"] = {"key":"two"};
const AddUnionTypeReferencePredefinedBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeReferencePredefined"]["Boolean"] = {"key":"two"};
const AddUnionTypeReferencePredefinedAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeReferencePredefined"]["Any"] = {"key":"two"};

const AddUnionUnionTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["UnionType"]["Literal"] = {"key":"two"};
const AddUnionUnionTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["UnionType"]["Object"] = {"key":"two"};
const AddUnionUnionTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["UnionType"]["String"] = {"key":"two"};
const AddUnionUnionTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["UnionType"]["Number"] = {"key":"two"};
const AddUnionUnionTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["UnionType"]["Boolean"] = {"key":"two"};
const AddUnionUnionTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["UnionType"]["Any"] = {"key":"two"};

const AddUnionIntersectionTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["IntersectionType"]["Literal"] = {"key":"two"};
const AddUnionIntersectionTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["IntersectionType"]["Object"] = {"key":"two"};
const AddUnionIntersectionTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["IntersectionType"]["String"] = {"key":"two"};
const AddUnionIntersectionTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["IntersectionType"]["Number"] = {"key":"two"};
const AddUnionIntersectionTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["IntersectionType"]["Boolean"] = {"key":"two"};
const AddUnionIntersectionTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["IntersectionType"]["Any"] = {"key":"two"};

const AddUnionTypeLiteralLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeLiteral"]["Literal"] = {"key":"two"};
const AddUnionTypeLiteralObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeLiteral"]["Object"] = {"key":"two"};
const AddUnionTypeLiteralStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeLiteral"]["String"] = {"key":"two"};
const AddUnionTypeLiteralNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeLiteral"]["Number"] = {"key":"two"};
const AddUnionTypeLiteralBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeLiteral"]["Boolean"] = {"key":"two"};
const AddUnionTypeLiteralAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TypeLiteral"]["Any"] = {"key":"two"};

const AddUnionTupleTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TupleType"]["Literal"] = {"key":"two"};
const AddUnionTupleTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TupleType"]["Object"] = {"key":"two"};
const AddUnionTupleTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TupleType"]["String"] = {"key":"two"};
const AddUnionTupleTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TupleType"]["Number"] = {"key":"two"};
const AddUnionTupleTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TupleType"]["Boolean"] = {"key":"two"};
const AddUnionTupleTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["TupleType"]["Any"] = {"key":"two"};

const AddUnionArrayTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ArrayType"]["Literal"] = {"key":"two"};
const AddUnionArrayTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ArrayType"]["Object"] = {"key":"two"};
const AddUnionArrayTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ArrayType"]["String"] = {"key":"two"};
const AddUnionArrayTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ArrayType"]["Number"] = {"key":"two"};
const AddUnionArrayTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ArrayType"]["Boolean"] = {"key":"two"};
const AddUnionArrayTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ArrayType"]["Any"] = {"key":"two"};

const AddUnionFunctionTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["FunctionType"]["Literal"] = {"key":"two"};
const AddUnionFunctionTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["FunctionType"]["Object"] = {"key":"two"};
const AddUnionFunctionTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["FunctionType"]["String"] = {"key":"two"};
const AddUnionFunctionTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["FunctionType"]["Number"] = {"key":"two"};
const AddUnionFunctionTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["FunctionType"]["Boolean"] = {"key":"two"};
const AddUnionFunctionTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["FunctionType"]["Any"] = {"key":"two"};

const AddUnionConstructorTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ConstructorType"]["Literal"] = {"key":"two"};
const AddUnionConstructorTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ConstructorType"]["Object"] = {"key":"two"};
const AddUnionConstructorTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ConstructorType"]["String"] = {"key":"two"};
const AddUnionConstructorTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ConstructorType"]["Number"] = {"key":"two"};
const AddUnionConstructorTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ConstructorType"]["Boolean"] = {"key":"two"};
const AddUnionConstructorTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] | Defaults["ConstructorType"]["Any"] = {"key":"two"};

// Initial Value
const TypeTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = {"key":2}

// Changes
const AddUnionParenthesizedTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ParenthesizedType"]["Literal"] = {"key":2};
const AddUnionParenthesizedTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ParenthesizedType"]["Object"] = {"key":2};
const AddUnionParenthesizedTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ParenthesizedType"]["String"] = {"key":2};
const AddUnionParenthesizedTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ParenthesizedType"]["Number"] = {"key":2};
const AddUnionParenthesizedTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ParenthesizedType"]["Boolean"] = {"key":2};
const AddUnionParenthesizedTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ParenthesizedType"]["Any"] = {"key":2};

const AddUnionTypeReferenceBuiltinLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":2};
const AddUnionTypeReferenceBuiltinObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeReferenceBuiltin"]["Object"] = {"key":2};
const AddUnionTypeReferenceBuiltinStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeReferenceBuiltin"]["String"] = {"key":2};
const AddUnionTypeReferenceBuiltinNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeReferenceBuiltin"]["Number"] = {"key":2};
const AddUnionTypeReferenceBuiltinBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":2};
const AddUnionTypeReferenceBuiltinAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeReferenceBuiltin"]["Any"] = {"key":2};

const AddUnionTypeReferencePredefinedLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeReferencePredefined"]["Literal"] = {"key":2};
const AddUnionTypeReferencePredefinedObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeReferencePredefined"]["Object"] = {"key":2};
const AddUnionTypeReferencePredefinedStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeReferencePredefined"]["String"] = {"key":2};
const AddUnionTypeReferencePredefinedNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeReferencePredefined"]["Number"] = {"key":2};
const AddUnionTypeReferencePredefinedBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeReferencePredefined"]["Boolean"] = {"key":2};
const AddUnionTypeReferencePredefinedAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeReferencePredefined"]["Any"] = {"key":2};

const AddUnionUnionTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["UnionType"]["Literal"] = {"key":2};
const AddUnionUnionTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["UnionType"]["Object"] = {"key":2};
const AddUnionUnionTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["UnionType"]["String"] = {"key":2};
const AddUnionUnionTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["UnionType"]["Number"] = {"key":2};
const AddUnionUnionTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["UnionType"]["Boolean"] = {"key":2};
const AddUnionUnionTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["UnionType"]["Any"] = {"key":2};

const AddUnionIntersectionTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["IntersectionType"]["Literal"] = {"key":2};
const AddUnionIntersectionTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["IntersectionType"]["Object"] = {"key":2};
const AddUnionIntersectionTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["IntersectionType"]["String"] = {"key":2};
const AddUnionIntersectionTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["IntersectionType"]["Number"] = {"key":2};
const AddUnionIntersectionTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["IntersectionType"]["Boolean"] = {"key":2};
const AddUnionIntersectionTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["IntersectionType"]["Any"] = {"key":2};

const AddUnionTypeLiteralLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeLiteral"]["Literal"] = {"key":2};
const AddUnionTypeLiteralObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeLiteral"]["Object"] = {"key":2};
const AddUnionTypeLiteralStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeLiteral"]["String"] = {"key":2};
const AddUnionTypeLiteralNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeLiteral"]["Number"] = {"key":2};
const AddUnionTypeLiteralBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeLiteral"]["Boolean"] = {"key":2};
const AddUnionTypeLiteralAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TypeLiteral"]["Any"] = {"key":2};

const AddUnionTupleTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TupleType"]["Literal"] = {"key":2};
const AddUnionTupleTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TupleType"]["Object"] = {"key":2};
const AddUnionTupleTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TupleType"]["String"] = {"key":2};
const AddUnionTupleTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TupleType"]["Number"] = {"key":2};
const AddUnionTupleTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TupleType"]["Boolean"] = {"key":2};
const AddUnionTupleTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["TupleType"]["Any"] = {"key":2};

const AddUnionArrayTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ArrayType"]["Literal"] = {"key":2};
const AddUnionArrayTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ArrayType"]["Object"] = {"key":2};
const AddUnionArrayTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ArrayType"]["String"] = {"key":2};
const AddUnionArrayTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ArrayType"]["Number"] = {"key":2};
const AddUnionArrayTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ArrayType"]["Boolean"] = {"key":2};
const AddUnionArrayTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ArrayType"]["Any"] = {"key":2};

const AddUnionFunctionTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["FunctionType"]["Literal"] = {"key":2};
const AddUnionFunctionTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["FunctionType"]["Object"] = {"key":2};
const AddUnionFunctionTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["FunctionType"]["String"] = {"key":2};
const AddUnionFunctionTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["FunctionType"]["Number"] = {"key":2};
const AddUnionFunctionTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["FunctionType"]["Boolean"] = {"key":2};
const AddUnionFunctionTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["FunctionType"]["Any"] = {"key":2};

const AddUnionConstructorTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ConstructorType"]["Literal"] = {"key":2};
const AddUnionConstructorTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ConstructorType"]["Object"] = {"key":2};
const AddUnionConstructorTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ConstructorType"]["String"] = {"key":2};
const AddUnionConstructorTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ConstructorType"]["Number"] = {"key":2};
const AddUnionConstructorTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ConstructorType"]["Boolean"] = {"key":2};
const AddUnionConstructorTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] | Defaults["ConstructorType"]["Any"] = {"key":2};

// Initial Value
const TypeTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = {"key":true}

// Changes
const AddUnionParenthesizedTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ParenthesizedType"]["Literal"] = {"key":true};
const AddUnionParenthesizedTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ParenthesizedType"]["Object"] = {"key":true};
const AddUnionParenthesizedTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ParenthesizedType"]["String"] = {"key":true};
const AddUnionParenthesizedTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ParenthesizedType"]["Number"] = {"key":true};
const AddUnionParenthesizedTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ParenthesizedType"]["Boolean"] = {"key":true};
const AddUnionParenthesizedTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ParenthesizedType"]["Any"] = {"key":true};

const AddUnionTypeReferenceBuiltinLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":true};
const AddUnionTypeReferenceBuiltinObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Object"] = {"key":true};
const AddUnionTypeReferenceBuiltinStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["String"] = {"key":true};
const AddUnionTypeReferenceBuiltinNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Number"] = {"key":true};
const AddUnionTypeReferenceBuiltinBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":true};
const AddUnionTypeReferenceBuiltinAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Any"] = {"key":true};

const AddUnionTypeReferencePredefinedLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeReferencePredefined"]["Literal"] = {"key":true};
const AddUnionTypeReferencePredefinedObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeReferencePredefined"]["Object"] = {"key":true};
const AddUnionTypeReferencePredefinedStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeReferencePredefined"]["String"] = {"key":true};
const AddUnionTypeReferencePredefinedNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeReferencePredefined"]["Number"] = {"key":true};
const AddUnionTypeReferencePredefinedBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeReferencePredefined"]["Boolean"] = {"key":true};
const AddUnionTypeReferencePredefinedAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeReferencePredefined"]["Any"] = {"key":true};

const AddUnionUnionTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["UnionType"]["Literal"] = {"key":true};
const AddUnionUnionTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["UnionType"]["Object"] = {"key":true};
const AddUnionUnionTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["UnionType"]["String"] = {"key":true};
const AddUnionUnionTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["UnionType"]["Number"] = {"key":true};
const AddUnionUnionTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["UnionType"]["Boolean"] = {"key":true};
const AddUnionUnionTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["UnionType"]["Any"] = {"key":true};

const AddUnionIntersectionTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["IntersectionType"]["Literal"] = {"key":true};
const AddUnionIntersectionTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["IntersectionType"]["Object"] = {"key":true};
const AddUnionIntersectionTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["IntersectionType"]["String"] = {"key":true};
const AddUnionIntersectionTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["IntersectionType"]["Number"] = {"key":true};
const AddUnionIntersectionTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["IntersectionType"]["Boolean"] = {"key":true};
const AddUnionIntersectionTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["IntersectionType"]["Any"] = {"key":true};

const AddUnionTypeLiteralLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeLiteral"]["Literal"] = {"key":true};
const AddUnionTypeLiteralObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeLiteral"]["Object"] = {"key":true};
const AddUnionTypeLiteralStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeLiteral"]["String"] = {"key":true};
const AddUnionTypeLiteralNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeLiteral"]["Number"] = {"key":true};
const AddUnionTypeLiteralBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeLiteral"]["Boolean"] = {"key":true};
const AddUnionTypeLiteralAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TypeLiteral"]["Any"] = {"key":true};

const AddUnionTupleTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TupleType"]["Literal"] = {"key":true};
const AddUnionTupleTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TupleType"]["Object"] = {"key":true};
const AddUnionTupleTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TupleType"]["String"] = {"key":true};
const AddUnionTupleTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TupleType"]["Number"] = {"key":true};
const AddUnionTupleTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TupleType"]["Boolean"] = {"key":true};
const AddUnionTupleTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["TupleType"]["Any"] = {"key":true};

const AddUnionArrayTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ArrayType"]["Literal"] = {"key":true};
const AddUnionArrayTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ArrayType"]["Object"] = {"key":true};
const AddUnionArrayTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ArrayType"]["String"] = {"key":true};
const AddUnionArrayTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ArrayType"]["Number"] = {"key":true};
const AddUnionArrayTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ArrayType"]["Boolean"] = {"key":true};
const AddUnionArrayTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ArrayType"]["Any"] = {"key":true};

const AddUnionFunctionTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["FunctionType"]["Literal"] = {"key":true};
const AddUnionFunctionTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["FunctionType"]["Object"] = {"key":true};
const AddUnionFunctionTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["FunctionType"]["String"] = {"key":true};
const AddUnionFunctionTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["FunctionType"]["Number"] = {"key":true};
const AddUnionFunctionTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["FunctionType"]["Boolean"] = {"key":true};
const AddUnionFunctionTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["FunctionType"]["Any"] = {"key":true};

const AddUnionConstructorTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ConstructorType"]["Literal"] = {"key":true};
const AddUnionConstructorTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ConstructorType"]["Object"] = {"key":true};
const AddUnionConstructorTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ConstructorType"]["String"] = {"key":true};
const AddUnionConstructorTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ConstructorType"]["Number"] = {"key":true};
const AddUnionConstructorTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ConstructorType"]["Boolean"] = {"key":true};
const AddUnionConstructorTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] | Defaults["ConstructorType"]["Any"] = {"key":true};

// Initial Value
const TypeTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = {"key":2}

// Changes
const AddUnionParenthesizedTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ParenthesizedType"]["Literal"] = {"key":2};
const AddUnionParenthesizedTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ParenthesizedType"]["Object"] = {"key":2};
const AddUnionParenthesizedTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ParenthesizedType"]["String"] = {"key":2};
const AddUnionParenthesizedTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ParenthesizedType"]["Number"] = {"key":2};
const AddUnionParenthesizedTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ParenthesizedType"]["Boolean"] = {"key":2};
const AddUnionParenthesizedTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ParenthesizedType"]["Any"] = {"key":2};

const AddUnionTypeReferenceBuiltinLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":2};
const AddUnionTypeReferenceBuiltinObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeReferenceBuiltin"]["Object"] = {"key":2};
const AddUnionTypeReferenceBuiltinStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeReferenceBuiltin"]["String"] = {"key":2};
const AddUnionTypeReferenceBuiltinNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeReferenceBuiltin"]["Number"] = {"key":2};
const AddUnionTypeReferenceBuiltinBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":2};
const AddUnionTypeReferenceBuiltinAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeReferenceBuiltin"]["Any"] = {"key":2};

const AddUnionTypeReferencePredefinedLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeReferencePredefined"]["Literal"] = {"key":2};
const AddUnionTypeReferencePredefinedObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeReferencePredefined"]["Object"] = {"key":2};
const AddUnionTypeReferencePredefinedStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeReferencePredefined"]["String"] = {"key":2};
const AddUnionTypeReferencePredefinedNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeReferencePredefined"]["Number"] = {"key":2};
const AddUnionTypeReferencePredefinedBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeReferencePredefined"]["Boolean"] = {"key":2};
const AddUnionTypeReferencePredefinedAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeReferencePredefined"]["Any"] = {"key":2};

const AddUnionUnionTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["UnionType"]["Literal"] = {"key":2};
const AddUnionUnionTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["UnionType"]["Object"] = {"key":2};
const AddUnionUnionTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["UnionType"]["String"] = {"key":2};
const AddUnionUnionTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["UnionType"]["Number"] = {"key":2};
const AddUnionUnionTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["UnionType"]["Boolean"] = {"key":2};
const AddUnionUnionTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["UnionType"]["Any"] = {"key":2};

const AddUnionIntersectionTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["IntersectionType"]["Literal"] = {"key":2};
const AddUnionIntersectionTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["IntersectionType"]["Object"] = {"key":2};
const AddUnionIntersectionTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["IntersectionType"]["String"] = {"key":2};
const AddUnionIntersectionTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["IntersectionType"]["Number"] = {"key":2};
const AddUnionIntersectionTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["IntersectionType"]["Boolean"] = {"key":2};
const AddUnionIntersectionTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["IntersectionType"]["Any"] = {"key":2};

const AddUnionTypeLiteralLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeLiteral"]["Literal"] = {"key":2};
const AddUnionTypeLiteralObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeLiteral"]["Object"] = {"key":2};
const AddUnionTypeLiteralStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeLiteral"]["String"] = {"key":2};
const AddUnionTypeLiteralNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeLiteral"]["Number"] = {"key":2};
const AddUnionTypeLiteralBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeLiteral"]["Boolean"] = {"key":2};
const AddUnionTypeLiteralAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TypeLiteral"]["Any"] = {"key":2};

const AddUnionTupleTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TupleType"]["Literal"] = {"key":2};
const AddUnionTupleTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TupleType"]["Object"] = {"key":2};
const AddUnionTupleTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TupleType"]["String"] = {"key":2};
const AddUnionTupleTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TupleType"]["Number"] = {"key":2};
const AddUnionTupleTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TupleType"]["Boolean"] = {"key":2};
const AddUnionTupleTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["TupleType"]["Any"] = {"key":2};

const AddUnionArrayTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ArrayType"]["Literal"] = {"key":2};
const AddUnionArrayTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ArrayType"]["Object"] = {"key":2};
const AddUnionArrayTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ArrayType"]["String"] = {"key":2};
const AddUnionArrayTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ArrayType"]["Number"] = {"key":2};
const AddUnionArrayTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ArrayType"]["Boolean"] = {"key":2};
const AddUnionArrayTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ArrayType"]["Any"] = {"key":2};

const AddUnionFunctionTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["FunctionType"]["Literal"] = {"key":2};
const AddUnionFunctionTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["FunctionType"]["Object"] = {"key":2};
const AddUnionFunctionTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["FunctionType"]["String"] = {"key":2};
const AddUnionFunctionTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["FunctionType"]["Number"] = {"key":2};
const AddUnionFunctionTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["FunctionType"]["Boolean"] = {"key":2};
const AddUnionFunctionTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["FunctionType"]["Any"] = {"key":2};

const AddUnionConstructorTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ConstructorType"]["Literal"] = {"key":2};
const AddUnionConstructorTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ConstructorType"]["Object"] = {"key":2};
const AddUnionConstructorTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ConstructorType"]["String"] = {"key":2};
const AddUnionConstructorTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ConstructorType"]["Number"] = {"key":2};
const AddUnionConstructorTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ConstructorType"]["Boolean"] = {"key":2};
const AddUnionConstructorTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] | Defaults["ConstructorType"]["Any"] = {"key":2};

