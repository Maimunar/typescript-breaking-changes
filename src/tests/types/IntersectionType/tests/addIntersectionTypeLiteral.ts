import { Defaults } from "../../defaults";

/*
 * IntersectionType
 */

// Add Intersection - TypeLiteral
// Initial Value
const TypeTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] = {"key":1}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ParenthesizedType"]["Literal"] = {"key":1};
const AddIntersectionParenthesizedTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ParenthesizedType"]["Object"] = {"key":1};
const AddIntersectionParenthesizedTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ParenthesizedType"]["String"] = {"key":1};
const AddIntersectionParenthesizedTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ParenthesizedType"]["Number"] = {"key":1};
const AddIntersectionParenthesizedTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ParenthesizedType"]["Boolean"] = {"key":1};
const AddIntersectionParenthesizedTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ParenthesizedType"]["Any"] = {"key":1};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":1};
const AddIntersectionTypeReferenceBuiltinObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Object"] = {"key":1};
const AddIntersectionTypeReferenceBuiltinStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeReferenceBuiltin"]["String"] = {"key":1};
const AddIntersectionTypeReferenceBuiltinNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Number"] = {"key":1};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":1};
const AddIntersectionTypeReferenceBuiltinAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Any"] = {"key":1};

const AddIntersectionTypeReferencePredefinedLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeReferencePredefined"]["Literal"] = {"key":1};
const AddIntersectionTypeReferencePredefinedObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeReferencePredefined"]["Object"] = {"key":1};
const AddIntersectionTypeReferencePredefinedStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeReferencePredefined"]["String"] = {"key":1};
const AddIntersectionTypeReferencePredefinedNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeReferencePredefined"]["Number"] = {"key":1};
const AddIntersectionTypeReferencePredefinedBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeReferencePredefined"]["Boolean"] = {"key":1};
const AddIntersectionTypeReferencePredefinedAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeReferencePredefined"]["Any"] = {"key":1};

const AddIntersectionUnionTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["UnionType"]["Literal"] = {"key":1};
const AddIntersectionUnionTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["UnionType"]["Object"] = {"key":1};
const AddIntersectionUnionTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["UnionType"]["String"] = {"key":1};
const AddIntersectionUnionTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["UnionType"]["Number"] = {"key":1};
const AddIntersectionUnionTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["UnionType"]["Boolean"] = {"key":1};
const AddIntersectionUnionTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["UnionType"]["Any"] = {"key":1};

const AddIntersectionIntersectionTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["IntersectionType"]["Literal"] = {"key":1};
const AddIntersectionIntersectionTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["IntersectionType"]["Object"] = {"key":1};
const AddIntersectionIntersectionTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["IntersectionType"]["String"] = {"key":1};
const AddIntersectionIntersectionTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["IntersectionType"]["Number"] = {"key":1};
const AddIntersectionIntersectionTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["IntersectionType"]["Boolean"] = {"key":1};
const AddIntersectionIntersectionTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["IntersectionType"]["Any"] = {"key":1};

const AddIntersectionTypeLiteralLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeLiteral"]["Literal"] = {"key":1};
const AddIntersectionTypeLiteralObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeLiteral"]["Object"] = {"key":1};
const AddIntersectionTypeLiteralStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeLiteral"]["String"] = {"key":1};
const AddIntersectionTypeLiteralNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeLiteral"]["Number"] = {"key":1};
const AddIntersectionTypeLiteralBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeLiteral"]["Boolean"] = {"key":1};
const AddIntersectionTypeLiteralAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TypeLiteral"]["Any"] = {"key":1};

const AddIntersectionTupleTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TupleType"]["Literal"] = {"key":1};
const AddIntersectionTupleTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TupleType"]["Object"] = {"key":1};
const AddIntersectionTupleTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TupleType"]["String"] = {"key":1};
const AddIntersectionTupleTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TupleType"]["Number"] = {"key":1};
const AddIntersectionTupleTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TupleType"]["Boolean"] = {"key":1};
const AddIntersectionTupleTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["TupleType"]["Any"] = {"key":1};

const AddIntersectionArrayTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ArrayType"]["Literal"] = {"key":1};
const AddIntersectionArrayTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ArrayType"]["Object"] = {"key":1};
const AddIntersectionArrayTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ArrayType"]["String"] = {"key":1};
const AddIntersectionArrayTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ArrayType"]["Number"] = {"key":1};
const AddIntersectionArrayTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ArrayType"]["Boolean"] = {"key":1};
const AddIntersectionArrayTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ArrayType"]["Any"] = {"key":1};

const AddIntersectionFunctionTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["FunctionType"]["Literal"] = {"key":1};
const AddIntersectionFunctionTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["FunctionType"]["Object"] = {"key":1};
const AddIntersectionFunctionTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["FunctionType"]["String"] = {"key":1};
const AddIntersectionFunctionTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["FunctionType"]["Number"] = {"key":1};
const AddIntersectionFunctionTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["FunctionType"]["Boolean"] = {"key":1};
const AddIntersectionFunctionTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["FunctionType"]["Any"] = {"key":1};

const AddIntersectionConstructorTypeLiteralToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ConstructorType"]["Literal"] = {"key":1};
const AddIntersectionConstructorTypeObjectToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ConstructorType"]["Object"] = {"key":1};
const AddIntersectionConstructorTypeStringToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ConstructorType"]["String"] = {"key":1};
const AddIntersectionConstructorTypeNumberToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ConstructorType"]["Number"] = {"key":1};
const AddIntersectionConstructorTypeBooleanToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ConstructorType"]["Boolean"] = {"key":1};
const AddIntersectionConstructorTypeAnyToTypeLiteralLiteral: Defaults["TypeLiteral"]["Literal"] & Defaults["ConstructorType"]["Any"] = {"key":1};

// Initial Value
const TypeTypeLiteralObject: Defaults["TypeLiteral"]["Object"] = {"key":{}}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ParenthesizedType"]["Literal"] = {"key":{}};
const AddIntersectionParenthesizedTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ParenthesizedType"]["Object"] = {"key":{}};
const AddIntersectionParenthesizedTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ParenthesizedType"]["String"] = {"key":{}};
const AddIntersectionParenthesizedTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ParenthesizedType"]["Number"] = {"key":{}};
const AddIntersectionParenthesizedTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ParenthesizedType"]["Boolean"] = {"key":{}};
const AddIntersectionParenthesizedTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ParenthesizedType"]["Any"] = {"key":{}};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":{}};
const AddIntersectionTypeReferenceBuiltinObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeReferenceBuiltin"]["Object"] = {"key":{}};
const AddIntersectionTypeReferenceBuiltinStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeReferenceBuiltin"]["String"] = {"key":{}};
const AddIntersectionTypeReferenceBuiltinNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeReferenceBuiltin"]["Number"] = {"key":{}};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":{}};
const AddIntersectionTypeReferenceBuiltinAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeReferenceBuiltin"]["Any"] = {"key":{}};

const AddIntersectionTypeReferencePredefinedLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeReferencePredefined"]["Literal"] = {"key":{}};
const AddIntersectionTypeReferencePredefinedObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeReferencePredefined"]["Object"] = {"key":{}};
const AddIntersectionTypeReferencePredefinedStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeReferencePredefined"]["String"] = {"key":{}};
const AddIntersectionTypeReferencePredefinedNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeReferencePredefined"]["Number"] = {"key":{}};
const AddIntersectionTypeReferencePredefinedBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeReferencePredefined"]["Boolean"] = {"key":{}};
const AddIntersectionTypeReferencePredefinedAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeReferencePredefined"]["Any"] = {"key":{}};

const AddIntersectionUnionTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["UnionType"]["Literal"] = {"key":{}};
const AddIntersectionUnionTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["UnionType"]["Object"] = {"key":{}};
const AddIntersectionUnionTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["UnionType"]["String"] = {"key":{}};
const AddIntersectionUnionTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["UnionType"]["Number"] = {"key":{}};
const AddIntersectionUnionTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["UnionType"]["Boolean"] = {"key":{}};
const AddIntersectionUnionTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["UnionType"]["Any"] = {"key":{}};

const AddIntersectionIntersectionTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["IntersectionType"]["Literal"] = {"key":{}};
const AddIntersectionIntersectionTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["IntersectionType"]["Object"] = {"key":{}};
const AddIntersectionIntersectionTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["IntersectionType"]["String"] = {"key":{}};
const AddIntersectionIntersectionTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["IntersectionType"]["Number"] = {"key":{}};
const AddIntersectionIntersectionTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["IntersectionType"]["Boolean"] = {"key":{}};
const AddIntersectionIntersectionTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["IntersectionType"]["Any"] = {"key":{}};

const AddIntersectionTypeLiteralLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeLiteral"]["Literal"] = {"key":{}};
const AddIntersectionTypeLiteralObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeLiteral"]["Object"] = {"key":{}};
const AddIntersectionTypeLiteralStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeLiteral"]["String"] = {"key":{}};
const AddIntersectionTypeLiteralNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeLiteral"]["Number"] = {"key":{}};
const AddIntersectionTypeLiteralBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeLiteral"]["Boolean"] = {"key":{}};
const AddIntersectionTypeLiteralAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TypeLiteral"]["Any"] = {"key":{}};

const AddIntersectionTupleTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TupleType"]["Literal"] = {"key":{}};
const AddIntersectionTupleTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TupleType"]["Object"] = {"key":{}};
const AddIntersectionTupleTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TupleType"]["String"] = {"key":{}};
const AddIntersectionTupleTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TupleType"]["Number"] = {"key":{}};
const AddIntersectionTupleTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TupleType"]["Boolean"] = {"key":{}};
const AddIntersectionTupleTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["TupleType"]["Any"] = {"key":{}};

const AddIntersectionArrayTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ArrayType"]["Literal"] = {"key":{}};
const AddIntersectionArrayTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ArrayType"]["Object"] = {"key":{}};
const AddIntersectionArrayTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ArrayType"]["String"] = {"key":{}};
const AddIntersectionArrayTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ArrayType"]["Number"] = {"key":{}};
const AddIntersectionArrayTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ArrayType"]["Boolean"] = {"key":{}};
const AddIntersectionArrayTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ArrayType"]["Any"] = {"key":{}};

const AddIntersectionFunctionTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["FunctionType"]["Literal"] = {"key":{}};
const AddIntersectionFunctionTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["FunctionType"]["Object"] = {"key":{}};
const AddIntersectionFunctionTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["FunctionType"]["String"] = {"key":{}};
const AddIntersectionFunctionTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["FunctionType"]["Number"] = {"key":{}};
const AddIntersectionFunctionTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["FunctionType"]["Boolean"] = {"key":{}};
const AddIntersectionFunctionTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["FunctionType"]["Any"] = {"key":{}};

const AddIntersectionConstructorTypeLiteralToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ConstructorType"]["Literal"] = {"key":{}};
const AddIntersectionConstructorTypeObjectToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ConstructorType"]["Object"] = {"key":{}};
const AddIntersectionConstructorTypeStringToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ConstructorType"]["String"] = {"key":{}};
const AddIntersectionConstructorTypeNumberToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ConstructorType"]["Number"] = {"key":{}};
const AddIntersectionConstructorTypeBooleanToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ConstructorType"]["Boolean"] = {"key":{}};
const AddIntersectionConstructorTypeAnyToTypeLiteralObject: Defaults["TypeLiteral"]["Object"] & Defaults["ConstructorType"]["Any"] = {"key":{}};

// Initial Value
const TypeTypeLiteralString: Defaults["TypeLiteral"]["String"] = {"key":"two"}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ParenthesizedType"]["Literal"] = {"key":"two"};
const AddIntersectionParenthesizedTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ParenthesizedType"]["Object"] = {"key":"two"};
const AddIntersectionParenthesizedTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ParenthesizedType"]["String"] = {"key":"two"};
const AddIntersectionParenthesizedTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ParenthesizedType"]["Number"] = {"key":"two"};
const AddIntersectionParenthesizedTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ParenthesizedType"]["Boolean"] = {"key":"two"};
const AddIntersectionParenthesizedTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ParenthesizedType"]["Any"] = {"key":"two"};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":"two"};
const AddIntersectionTypeReferenceBuiltinObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeReferenceBuiltin"]["Object"] = {"key":"two"};
const AddIntersectionTypeReferenceBuiltinStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeReferenceBuiltin"]["String"] = {"key":"two"};
const AddIntersectionTypeReferenceBuiltinNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeReferenceBuiltin"]["Number"] = {"key":"two"};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":"two"};
const AddIntersectionTypeReferenceBuiltinAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeReferenceBuiltin"]["Any"] = {"key":"two"};

const AddIntersectionTypeReferencePredefinedLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeReferencePredefined"]["Literal"] = {"key":"two"};
const AddIntersectionTypeReferencePredefinedObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeReferencePredefined"]["Object"] = {"key":"two"};
const AddIntersectionTypeReferencePredefinedStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeReferencePredefined"]["String"] = {"key":"two"};
const AddIntersectionTypeReferencePredefinedNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeReferencePredefined"]["Number"] = {"key":"two"};
const AddIntersectionTypeReferencePredefinedBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeReferencePredefined"]["Boolean"] = {"key":"two"};
const AddIntersectionTypeReferencePredefinedAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeReferencePredefined"]["Any"] = {"key":"two"};

const AddIntersectionUnionTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["UnionType"]["Literal"] = {"key":"two"};
const AddIntersectionUnionTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["UnionType"]["Object"] = {"key":"two"};
const AddIntersectionUnionTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["UnionType"]["String"] = {"key":"two"};
const AddIntersectionUnionTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["UnionType"]["Number"] = {"key":"two"};
const AddIntersectionUnionTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["UnionType"]["Boolean"] = {"key":"two"};
const AddIntersectionUnionTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["UnionType"]["Any"] = {"key":"two"};

const AddIntersectionIntersectionTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["IntersectionType"]["Literal"] = {"key":"two"};
const AddIntersectionIntersectionTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["IntersectionType"]["Object"] = {"key":"two"};
const AddIntersectionIntersectionTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["IntersectionType"]["String"] = {"key":"two"};
const AddIntersectionIntersectionTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["IntersectionType"]["Number"] = {"key":"two"};
const AddIntersectionIntersectionTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["IntersectionType"]["Boolean"] = {"key":"two"};
const AddIntersectionIntersectionTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["IntersectionType"]["Any"] = {"key":"two"};

const AddIntersectionTypeLiteralLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeLiteral"]["Literal"] = {"key":"two"};
const AddIntersectionTypeLiteralObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeLiteral"]["Object"] = {"key":"two"};
const AddIntersectionTypeLiteralStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeLiteral"]["String"] = {"key":"two"};
const AddIntersectionTypeLiteralNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeLiteral"]["Number"] = {"key":"two"};
const AddIntersectionTypeLiteralBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeLiteral"]["Boolean"] = {"key":"two"};
const AddIntersectionTypeLiteralAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TypeLiteral"]["Any"] = {"key":"two"};

const AddIntersectionTupleTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TupleType"]["Literal"] = {"key":"two"};
const AddIntersectionTupleTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TupleType"]["Object"] = {"key":"two"};
const AddIntersectionTupleTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TupleType"]["String"] = {"key":"two"};
const AddIntersectionTupleTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TupleType"]["Number"] = {"key":"two"};
const AddIntersectionTupleTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TupleType"]["Boolean"] = {"key":"two"};
const AddIntersectionTupleTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["TupleType"]["Any"] = {"key":"two"};

const AddIntersectionArrayTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ArrayType"]["Literal"] = {"key":"two"};
const AddIntersectionArrayTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ArrayType"]["Object"] = {"key":"two"};
const AddIntersectionArrayTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ArrayType"]["String"] = {"key":"two"};
const AddIntersectionArrayTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ArrayType"]["Number"] = {"key":"two"};
const AddIntersectionArrayTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ArrayType"]["Boolean"] = {"key":"two"};
const AddIntersectionArrayTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ArrayType"]["Any"] = {"key":"two"};

const AddIntersectionFunctionTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["FunctionType"]["Literal"] = {"key":"two"};
const AddIntersectionFunctionTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["FunctionType"]["Object"] = {"key":"two"};
const AddIntersectionFunctionTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["FunctionType"]["String"] = {"key":"two"};
const AddIntersectionFunctionTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["FunctionType"]["Number"] = {"key":"two"};
const AddIntersectionFunctionTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["FunctionType"]["Boolean"] = {"key":"two"};
const AddIntersectionFunctionTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["FunctionType"]["Any"] = {"key":"two"};

const AddIntersectionConstructorTypeLiteralToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ConstructorType"]["Literal"] = {"key":"two"};
const AddIntersectionConstructorTypeObjectToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ConstructorType"]["Object"] = {"key":"two"};
const AddIntersectionConstructorTypeStringToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ConstructorType"]["String"] = {"key":"two"};
const AddIntersectionConstructorTypeNumberToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ConstructorType"]["Number"] = {"key":"two"};
const AddIntersectionConstructorTypeBooleanToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ConstructorType"]["Boolean"] = {"key":"two"};
const AddIntersectionConstructorTypeAnyToTypeLiteralString: Defaults["TypeLiteral"]["String"] & Defaults["ConstructorType"]["Any"] = {"key":"two"};

// Initial Value
const TypeTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] = {"key":2}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ParenthesizedType"]["Literal"] = {"key":2};
const AddIntersectionParenthesizedTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ParenthesizedType"]["Object"] = {"key":2};
const AddIntersectionParenthesizedTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ParenthesizedType"]["String"] = {"key":2};
const AddIntersectionParenthesizedTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ParenthesizedType"]["Number"] = {"key":2};
const AddIntersectionParenthesizedTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ParenthesizedType"]["Boolean"] = {"key":2};
const AddIntersectionParenthesizedTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ParenthesizedType"]["Any"] = {"key":2};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":2};
const AddIntersectionTypeReferenceBuiltinObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeReferenceBuiltin"]["Object"] = {"key":2};
const AddIntersectionTypeReferenceBuiltinStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeReferenceBuiltin"]["String"] = {"key":2};
const AddIntersectionTypeReferenceBuiltinNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeReferenceBuiltin"]["Number"] = {"key":2};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":2};
const AddIntersectionTypeReferenceBuiltinAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeReferenceBuiltin"]["Any"] = {"key":2};

const AddIntersectionTypeReferencePredefinedLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeReferencePredefined"]["Literal"] = {"key":2};
const AddIntersectionTypeReferencePredefinedObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeReferencePredefined"]["Object"] = {"key":2};
const AddIntersectionTypeReferencePredefinedStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeReferencePredefined"]["String"] = {"key":2};
const AddIntersectionTypeReferencePredefinedNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeReferencePredefined"]["Number"] = {"key":2};
const AddIntersectionTypeReferencePredefinedBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeReferencePredefined"]["Boolean"] = {"key":2};
const AddIntersectionTypeReferencePredefinedAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeReferencePredefined"]["Any"] = {"key":2};

const AddIntersectionUnionTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["UnionType"]["Literal"] = {"key":2};
const AddIntersectionUnionTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["UnionType"]["Object"] = {"key":2};
const AddIntersectionUnionTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["UnionType"]["String"] = {"key":2};
const AddIntersectionUnionTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["UnionType"]["Number"] = {"key":2};
const AddIntersectionUnionTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["UnionType"]["Boolean"] = {"key":2};
const AddIntersectionUnionTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["UnionType"]["Any"] = {"key":2};

const AddIntersectionIntersectionTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["IntersectionType"]["Literal"] = {"key":2};
const AddIntersectionIntersectionTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["IntersectionType"]["Object"] = {"key":2};
const AddIntersectionIntersectionTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["IntersectionType"]["String"] = {"key":2};
const AddIntersectionIntersectionTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["IntersectionType"]["Number"] = {"key":2};
const AddIntersectionIntersectionTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["IntersectionType"]["Boolean"] = {"key":2};
const AddIntersectionIntersectionTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["IntersectionType"]["Any"] = {"key":2};

const AddIntersectionTypeLiteralLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeLiteral"]["Literal"] = {"key":2};
const AddIntersectionTypeLiteralObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeLiteral"]["Object"] = {"key":2};
const AddIntersectionTypeLiteralStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeLiteral"]["String"] = {"key":2};
const AddIntersectionTypeLiteralNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeLiteral"]["Number"] = {"key":2};
const AddIntersectionTypeLiteralBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeLiteral"]["Boolean"] = {"key":2};
const AddIntersectionTypeLiteralAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TypeLiteral"]["Any"] = {"key":2};

const AddIntersectionTupleTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TupleType"]["Literal"] = {"key":2};
const AddIntersectionTupleTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TupleType"]["Object"] = {"key":2};
const AddIntersectionTupleTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TupleType"]["String"] = {"key":2};
const AddIntersectionTupleTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TupleType"]["Number"] = {"key":2};
const AddIntersectionTupleTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TupleType"]["Boolean"] = {"key":2};
const AddIntersectionTupleTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["TupleType"]["Any"] = {"key":2};

const AddIntersectionArrayTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ArrayType"]["Literal"] = {"key":2};
const AddIntersectionArrayTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ArrayType"]["Object"] = {"key":2};
const AddIntersectionArrayTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ArrayType"]["String"] = {"key":2};
const AddIntersectionArrayTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ArrayType"]["Number"] = {"key":2};
const AddIntersectionArrayTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ArrayType"]["Boolean"] = {"key":2};
const AddIntersectionArrayTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ArrayType"]["Any"] = {"key":2};

const AddIntersectionFunctionTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["FunctionType"]["Literal"] = {"key":2};
const AddIntersectionFunctionTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["FunctionType"]["Object"] = {"key":2};
const AddIntersectionFunctionTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["FunctionType"]["String"] = {"key":2};
const AddIntersectionFunctionTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["FunctionType"]["Number"] = {"key":2};
const AddIntersectionFunctionTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["FunctionType"]["Boolean"] = {"key":2};
const AddIntersectionFunctionTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["FunctionType"]["Any"] = {"key":2};

const AddIntersectionConstructorTypeLiteralToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ConstructorType"]["Literal"] = {"key":2};
const AddIntersectionConstructorTypeObjectToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ConstructorType"]["Object"] = {"key":2};
const AddIntersectionConstructorTypeStringToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ConstructorType"]["String"] = {"key":2};
const AddIntersectionConstructorTypeNumberToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ConstructorType"]["Number"] = {"key":2};
const AddIntersectionConstructorTypeBooleanToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ConstructorType"]["Boolean"] = {"key":2};
const AddIntersectionConstructorTypeAnyToTypeLiteralNumber: Defaults["TypeLiteral"]["Number"] & Defaults["ConstructorType"]["Any"] = {"key":2};

// Initial Value
const TypeTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] = {"key":true}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ParenthesizedType"]["Literal"] = {"key":true};
const AddIntersectionParenthesizedTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ParenthesizedType"]["Object"] = {"key":true};
const AddIntersectionParenthesizedTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ParenthesizedType"]["String"] = {"key":true};
const AddIntersectionParenthesizedTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ParenthesizedType"]["Number"] = {"key":true};
const AddIntersectionParenthesizedTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ParenthesizedType"]["Boolean"] = {"key":true};
const AddIntersectionParenthesizedTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ParenthesizedType"]["Any"] = {"key":true};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":true};
const AddIntersectionTypeReferenceBuiltinObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Object"] = {"key":true};
const AddIntersectionTypeReferenceBuiltinStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["String"] = {"key":true};
const AddIntersectionTypeReferenceBuiltinNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Number"] = {"key":true};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":true};
const AddIntersectionTypeReferenceBuiltinAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Any"] = {"key":true};

const AddIntersectionTypeReferencePredefinedLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeReferencePredefined"]["Literal"] = {"key":true};
const AddIntersectionTypeReferencePredefinedObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeReferencePredefined"]["Object"] = {"key":true};
const AddIntersectionTypeReferencePredefinedStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeReferencePredefined"]["String"] = {"key":true};
const AddIntersectionTypeReferencePredefinedNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeReferencePredefined"]["Number"] = {"key":true};
const AddIntersectionTypeReferencePredefinedBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeReferencePredefined"]["Boolean"] = {"key":true};
const AddIntersectionTypeReferencePredefinedAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeReferencePredefined"]["Any"] = {"key":true};

const AddIntersectionUnionTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["UnionType"]["Literal"] = {"key":true};
const AddIntersectionUnionTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["UnionType"]["Object"] = {"key":true};
const AddIntersectionUnionTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["UnionType"]["String"] = {"key":true};
const AddIntersectionUnionTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["UnionType"]["Number"] = {"key":true};
const AddIntersectionUnionTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["UnionType"]["Boolean"] = {"key":true};
const AddIntersectionUnionTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["UnionType"]["Any"] = {"key":true};

const AddIntersectionIntersectionTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["IntersectionType"]["Literal"] = {"key":true};
const AddIntersectionIntersectionTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["IntersectionType"]["Object"] = {"key":true};
const AddIntersectionIntersectionTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["IntersectionType"]["String"] = {"key":true};
const AddIntersectionIntersectionTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["IntersectionType"]["Number"] = {"key":true};
const AddIntersectionIntersectionTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["IntersectionType"]["Boolean"] = {"key":true};
const AddIntersectionIntersectionTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["IntersectionType"]["Any"] = {"key":true};

const AddIntersectionTypeLiteralLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeLiteral"]["Literal"] = {"key":true};
const AddIntersectionTypeLiteralObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeLiteral"]["Object"] = {"key":true};
const AddIntersectionTypeLiteralStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeLiteral"]["String"] = {"key":true};
const AddIntersectionTypeLiteralNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeLiteral"]["Number"] = {"key":true};
const AddIntersectionTypeLiteralBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeLiteral"]["Boolean"] = {"key":true};
const AddIntersectionTypeLiteralAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TypeLiteral"]["Any"] = {"key":true};

const AddIntersectionTupleTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TupleType"]["Literal"] = {"key":true};
const AddIntersectionTupleTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TupleType"]["Object"] = {"key":true};
const AddIntersectionTupleTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TupleType"]["String"] = {"key":true};
const AddIntersectionTupleTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TupleType"]["Number"] = {"key":true};
const AddIntersectionTupleTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TupleType"]["Boolean"] = {"key":true};
const AddIntersectionTupleTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["TupleType"]["Any"] = {"key":true};

const AddIntersectionArrayTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ArrayType"]["Literal"] = {"key":true};
const AddIntersectionArrayTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ArrayType"]["Object"] = {"key":true};
const AddIntersectionArrayTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ArrayType"]["String"] = {"key":true};
const AddIntersectionArrayTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ArrayType"]["Number"] = {"key":true};
const AddIntersectionArrayTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ArrayType"]["Boolean"] = {"key":true};
const AddIntersectionArrayTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ArrayType"]["Any"] = {"key":true};

const AddIntersectionFunctionTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["FunctionType"]["Literal"] = {"key":true};
const AddIntersectionFunctionTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["FunctionType"]["Object"] = {"key":true};
const AddIntersectionFunctionTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["FunctionType"]["String"] = {"key":true};
const AddIntersectionFunctionTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["FunctionType"]["Number"] = {"key":true};
const AddIntersectionFunctionTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["FunctionType"]["Boolean"] = {"key":true};
const AddIntersectionFunctionTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["FunctionType"]["Any"] = {"key":true};

const AddIntersectionConstructorTypeLiteralToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ConstructorType"]["Literal"] = {"key":true};
const AddIntersectionConstructorTypeObjectToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ConstructorType"]["Object"] = {"key":true};
const AddIntersectionConstructorTypeStringToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ConstructorType"]["String"] = {"key":true};
const AddIntersectionConstructorTypeNumberToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ConstructorType"]["Number"] = {"key":true};
const AddIntersectionConstructorTypeBooleanToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ConstructorType"]["Boolean"] = {"key":true};
const AddIntersectionConstructorTypeAnyToTypeLiteralBoolean: Defaults["TypeLiteral"]["Boolean"] & Defaults["ConstructorType"]["Any"] = {"key":true};

// Initial Value
const TypeTypeLiteralAny: Defaults["TypeLiteral"]["Any"] = {"key":2}

// Changes
const AddIntersectionParenthesizedTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ParenthesizedType"]["Literal"] = {"key":2};
const AddIntersectionParenthesizedTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ParenthesizedType"]["Object"] = {"key":2};
const AddIntersectionParenthesizedTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ParenthesizedType"]["String"] = {"key":2};
const AddIntersectionParenthesizedTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ParenthesizedType"]["Number"] = {"key":2};
const AddIntersectionParenthesizedTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ParenthesizedType"]["Boolean"] = {"key":2};
const AddIntersectionParenthesizedTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ParenthesizedType"]["Any"] = {"key":2};

const AddIntersectionTypeReferenceBuiltinLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeReferenceBuiltin"]["Literal"] = {"key":2};
const AddIntersectionTypeReferenceBuiltinObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeReferenceBuiltin"]["Object"] = {"key":2};
const AddIntersectionTypeReferenceBuiltinStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeReferenceBuiltin"]["String"] = {"key":2};
const AddIntersectionTypeReferenceBuiltinNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeReferenceBuiltin"]["Number"] = {"key":2};
const AddIntersectionTypeReferenceBuiltinBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = {"key":2};
const AddIntersectionTypeReferenceBuiltinAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeReferenceBuiltin"]["Any"] = {"key":2};

const AddIntersectionTypeReferencePredefinedLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeReferencePredefined"]["Literal"] = {"key":2};
const AddIntersectionTypeReferencePredefinedObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeReferencePredefined"]["Object"] = {"key":2};
const AddIntersectionTypeReferencePredefinedStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeReferencePredefined"]["String"] = {"key":2};
const AddIntersectionTypeReferencePredefinedNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeReferencePredefined"]["Number"] = {"key":2};
const AddIntersectionTypeReferencePredefinedBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeReferencePredefined"]["Boolean"] = {"key":2};
const AddIntersectionTypeReferencePredefinedAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeReferencePredefined"]["Any"] = {"key":2};

const AddIntersectionUnionTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["UnionType"]["Literal"] = {"key":2};
const AddIntersectionUnionTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["UnionType"]["Object"] = {"key":2};
const AddIntersectionUnionTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["UnionType"]["String"] = {"key":2};
const AddIntersectionUnionTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["UnionType"]["Number"] = {"key":2};
const AddIntersectionUnionTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["UnionType"]["Boolean"] = {"key":2};
const AddIntersectionUnionTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["UnionType"]["Any"] = {"key":2};

const AddIntersectionIntersectionTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["IntersectionType"]["Literal"] = {"key":2};
const AddIntersectionIntersectionTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["IntersectionType"]["Object"] = {"key":2};
const AddIntersectionIntersectionTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["IntersectionType"]["String"] = {"key":2};
const AddIntersectionIntersectionTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["IntersectionType"]["Number"] = {"key":2};
const AddIntersectionIntersectionTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["IntersectionType"]["Boolean"] = {"key":2};
const AddIntersectionIntersectionTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["IntersectionType"]["Any"] = {"key":2};

const AddIntersectionTypeLiteralLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeLiteral"]["Literal"] = {"key":2};
const AddIntersectionTypeLiteralObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeLiteral"]["Object"] = {"key":2};
const AddIntersectionTypeLiteralStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeLiteral"]["String"] = {"key":2};
const AddIntersectionTypeLiteralNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeLiteral"]["Number"] = {"key":2};
const AddIntersectionTypeLiteralBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeLiteral"]["Boolean"] = {"key":2};
const AddIntersectionTypeLiteralAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TypeLiteral"]["Any"] = {"key":2};

const AddIntersectionTupleTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TupleType"]["Literal"] = {"key":2};
const AddIntersectionTupleTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TupleType"]["Object"] = {"key":2};
const AddIntersectionTupleTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TupleType"]["String"] = {"key":2};
const AddIntersectionTupleTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TupleType"]["Number"] = {"key":2};
const AddIntersectionTupleTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TupleType"]["Boolean"] = {"key":2};
const AddIntersectionTupleTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["TupleType"]["Any"] = {"key":2};

const AddIntersectionArrayTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ArrayType"]["Literal"] = {"key":2};
const AddIntersectionArrayTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ArrayType"]["Object"] = {"key":2};
const AddIntersectionArrayTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ArrayType"]["String"] = {"key":2};
const AddIntersectionArrayTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ArrayType"]["Number"] = {"key":2};
const AddIntersectionArrayTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ArrayType"]["Boolean"] = {"key":2};
const AddIntersectionArrayTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ArrayType"]["Any"] = {"key":2};

const AddIntersectionFunctionTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["FunctionType"]["Literal"] = {"key":2};
const AddIntersectionFunctionTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["FunctionType"]["Object"] = {"key":2};
const AddIntersectionFunctionTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["FunctionType"]["String"] = {"key":2};
const AddIntersectionFunctionTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["FunctionType"]["Number"] = {"key":2};
const AddIntersectionFunctionTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["FunctionType"]["Boolean"] = {"key":2};
const AddIntersectionFunctionTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["FunctionType"]["Any"] = {"key":2};

const AddIntersectionConstructorTypeLiteralToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ConstructorType"]["Literal"] = {"key":2};
const AddIntersectionConstructorTypeObjectToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ConstructorType"]["Object"] = {"key":2};
const AddIntersectionConstructorTypeStringToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ConstructorType"]["String"] = {"key":2};
const AddIntersectionConstructorTypeNumberToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ConstructorType"]["Number"] = {"key":2};
const AddIntersectionConstructorTypeBooleanToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ConstructorType"]["Boolean"] = {"key":2};
const AddIntersectionConstructorTypeAnyToTypeLiteralAny: Defaults["TypeLiteral"]["Any"] & Defaults["ConstructorType"]["Any"] = {"key":2};

