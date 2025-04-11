import { Defaults } from "../../defaults";

/*
 * UnionType
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);// Add Union - TypeReferenceBuiltin
// Initial Value
const TypeTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] = promisify(1)

// Changes
const AddUnionParenthesizedTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ParenthesizedType"]["Literal"] = promisify(1);
const AddUnionParenthesizedTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ParenthesizedType"]["Object"] = promisify(1);
const AddUnionParenthesizedTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ParenthesizedType"]["String"] = promisify(1);
const AddUnionParenthesizedTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ParenthesizedType"]["Number"] = promisify(1);
const AddUnionParenthesizedTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ParenthesizedType"]["Boolean"] = promisify(1);
const AddUnionParenthesizedTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ParenthesizedType"]["Any"] = promisify(1);

const AddUnionTypeReferenceBuiltinLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Literal"] = promisify(1);
const AddUnionTypeReferenceBuiltinObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Object"] = promisify(1);
const AddUnionTypeReferenceBuiltinStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeReferenceBuiltin"]["String"] = promisify(1);
const AddUnionTypeReferenceBuiltinNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Number"] = promisify(1);
const AddUnionTypeReferenceBuiltinBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify(1);
const AddUnionTypeReferenceBuiltinAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Any"] = promisify(1);

const AddUnionTypeReferencePredefinedLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeReferencePredefined"]["Literal"] = promisify(1);
const AddUnionTypeReferencePredefinedObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeReferencePredefined"]["Object"] = promisify(1);
const AddUnionTypeReferencePredefinedStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeReferencePredefined"]["String"] = promisify(1);
const AddUnionTypeReferencePredefinedNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeReferencePredefined"]["Number"] = promisify(1);
const AddUnionTypeReferencePredefinedBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeReferencePredefined"]["Boolean"] = promisify(1);
const AddUnionTypeReferencePredefinedAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeReferencePredefined"]["Any"] = promisify(1);

const AddUnionUnionTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["UnionType"]["Literal"] = promisify(1);
const AddUnionUnionTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["UnionType"]["Object"] = promisify(1);
const AddUnionUnionTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["UnionType"]["String"] = promisify(1);
const AddUnionUnionTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["UnionType"]["Number"] = promisify(1);
const AddUnionUnionTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["UnionType"]["Boolean"] = promisify(1);
const AddUnionUnionTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["UnionType"]["Any"] = promisify(1);

const AddUnionIntersectionTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["IntersectionType"]["Literal"] = promisify(1);
const AddUnionIntersectionTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["IntersectionType"]["Object"] = promisify(1);
const AddUnionIntersectionTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["IntersectionType"]["String"] = promisify(1);
const AddUnionIntersectionTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["IntersectionType"]["Number"] = promisify(1);
const AddUnionIntersectionTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["IntersectionType"]["Boolean"] = promisify(1);
const AddUnionIntersectionTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["IntersectionType"]["Any"] = promisify(1);

const AddUnionTypeLiteralLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeLiteral"]["Literal"] = promisify(1);
const AddUnionTypeLiteralObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeLiteral"]["Object"] = promisify(1);
const AddUnionTypeLiteralStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeLiteral"]["String"] = promisify(1);
const AddUnionTypeLiteralNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeLiteral"]["Number"] = promisify(1);
const AddUnionTypeLiteralBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeLiteral"]["Boolean"] = promisify(1);
const AddUnionTypeLiteralAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TypeLiteral"]["Any"] = promisify(1);

const AddUnionTupleTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TupleType"]["Literal"] = promisify(1);
const AddUnionTupleTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TupleType"]["Object"] = promisify(1);
const AddUnionTupleTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TupleType"]["String"] = promisify(1);
const AddUnionTupleTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TupleType"]["Number"] = promisify(1);
const AddUnionTupleTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TupleType"]["Boolean"] = promisify(1);
const AddUnionTupleTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["TupleType"]["Any"] = promisify(1);

const AddUnionArrayTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ArrayType"]["Literal"] = promisify(1);
const AddUnionArrayTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ArrayType"]["Object"] = promisify(1);
const AddUnionArrayTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ArrayType"]["String"] = promisify(1);
const AddUnionArrayTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ArrayType"]["Number"] = promisify(1);
const AddUnionArrayTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ArrayType"]["Boolean"] = promisify(1);
const AddUnionArrayTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ArrayType"]["Any"] = promisify(1);

const AddUnionFunctionTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["FunctionType"]["Literal"] = promisify(1);
const AddUnionFunctionTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["FunctionType"]["Object"] = promisify(1);
const AddUnionFunctionTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["FunctionType"]["String"] = promisify(1);
const AddUnionFunctionTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["FunctionType"]["Number"] = promisify(1);
const AddUnionFunctionTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["FunctionType"]["Boolean"] = promisify(1);
const AddUnionFunctionTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["FunctionType"]["Any"] = promisify(1);

const AddUnionConstructorTypeLiteralToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ConstructorType"]["Literal"] = promisify(1);
const AddUnionConstructorTypeObjectToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ConstructorType"]["Object"] = promisify(1);
const AddUnionConstructorTypeStringToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ConstructorType"]["String"] = promisify(1);
const AddUnionConstructorTypeNumberToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ConstructorType"]["Number"] = promisify(1);
const AddUnionConstructorTypeBooleanToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ConstructorType"]["Boolean"] = promisify(1);
const AddUnionConstructorTypeAnyToTypeReferenceBuiltinLiteral: Defaults["TypeReferenceBuiltin"]["Literal"] | Defaults["ConstructorType"]["Any"] = promisify(1);

// Initial Value
const TypeTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] = promisify({})

// Changes
const AddUnionParenthesizedTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ParenthesizedType"]["Literal"] = promisify({});
const AddUnionParenthesizedTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ParenthesizedType"]["Object"] = promisify({});
const AddUnionParenthesizedTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ParenthesizedType"]["String"] = promisify({});
const AddUnionParenthesizedTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ParenthesizedType"]["Number"] = promisify({});
const AddUnionParenthesizedTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ParenthesizedType"]["Boolean"] = promisify({});
const AddUnionParenthesizedTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ParenthesizedType"]["Any"] = promisify({});

const AddUnionTypeReferenceBuiltinLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeReferenceBuiltin"]["Literal"] = promisify({});
const AddUnionTypeReferenceBuiltinObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeReferenceBuiltin"]["Object"] = promisify({});
const AddUnionTypeReferenceBuiltinStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeReferenceBuiltin"]["String"] = promisify({});
const AddUnionTypeReferenceBuiltinNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeReferenceBuiltin"]["Number"] = promisify({});
const AddUnionTypeReferenceBuiltinBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify({});
const AddUnionTypeReferenceBuiltinAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeReferenceBuiltin"]["Any"] = promisify({});

const AddUnionTypeReferencePredefinedLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeReferencePredefined"]["Literal"] = promisify({});
const AddUnionTypeReferencePredefinedObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeReferencePredefined"]["Object"] = promisify({});
const AddUnionTypeReferencePredefinedStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeReferencePredefined"]["String"] = promisify({});
const AddUnionTypeReferencePredefinedNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeReferencePredefined"]["Number"] = promisify({});
const AddUnionTypeReferencePredefinedBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeReferencePredefined"]["Boolean"] = promisify({});
const AddUnionTypeReferencePredefinedAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeReferencePredefined"]["Any"] = promisify({});

const AddUnionUnionTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["UnionType"]["Literal"] = promisify({});
const AddUnionUnionTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["UnionType"]["Object"] = promisify({});
const AddUnionUnionTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["UnionType"]["String"] = promisify({});
const AddUnionUnionTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["UnionType"]["Number"] = promisify({});
const AddUnionUnionTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["UnionType"]["Boolean"] = promisify({});
const AddUnionUnionTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["UnionType"]["Any"] = promisify({});

const AddUnionIntersectionTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["IntersectionType"]["Literal"] = promisify({});
const AddUnionIntersectionTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["IntersectionType"]["Object"] = promisify({});
const AddUnionIntersectionTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["IntersectionType"]["String"] = promisify({});
const AddUnionIntersectionTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["IntersectionType"]["Number"] = promisify({});
const AddUnionIntersectionTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["IntersectionType"]["Boolean"] = promisify({});
const AddUnionIntersectionTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["IntersectionType"]["Any"] = promisify({});

const AddUnionTypeLiteralLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeLiteral"]["Literal"] = promisify({});
const AddUnionTypeLiteralObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeLiteral"]["Object"] = promisify({});
const AddUnionTypeLiteralStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeLiteral"]["String"] = promisify({});
const AddUnionTypeLiteralNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeLiteral"]["Number"] = promisify({});
const AddUnionTypeLiteralBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeLiteral"]["Boolean"] = promisify({});
const AddUnionTypeLiteralAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TypeLiteral"]["Any"] = promisify({});

const AddUnionTupleTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TupleType"]["Literal"] = promisify({});
const AddUnionTupleTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TupleType"]["Object"] = promisify({});
const AddUnionTupleTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TupleType"]["String"] = promisify({});
const AddUnionTupleTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TupleType"]["Number"] = promisify({});
const AddUnionTupleTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TupleType"]["Boolean"] = promisify({});
const AddUnionTupleTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["TupleType"]["Any"] = promisify({});

const AddUnionArrayTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ArrayType"]["Literal"] = promisify({});
const AddUnionArrayTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ArrayType"]["Object"] = promisify({});
const AddUnionArrayTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ArrayType"]["String"] = promisify({});
const AddUnionArrayTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ArrayType"]["Number"] = promisify({});
const AddUnionArrayTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ArrayType"]["Boolean"] = promisify({});
const AddUnionArrayTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ArrayType"]["Any"] = promisify({});

const AddUnionFunctionTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["FunctionType"]["Literal"] = promisify({});
const AddUnionFunctionTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["FunctionType"]["Object"] = promisify({});
const AddUnionFunctionTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["FunctionType"]["String"] = promisify({});
const AddUnionFunctionTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["FunctionType"]["Number"] = promisify({});
const AddUnionFunctionTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["FunctionType"]["Boolean"] = promisify({});
const AddUnionFunctionTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["FunctionType"]["Any"] = promisify({});

const AddUnionConstructorTypeLiteralToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ConstructorType"]["Literal"] = promisify({});
const AddUnionConstructorTypeObjectToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ConstructorType"]["Object"] = promisify({});
const AddUnionConstructorTypeStringToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ConstructorType"]["String"] = promisify({});
const AddUnionConstructorTypeNumberToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ConstructorType"]["Number"] = promisify({});
const AddUnionConstructorTypeBooleanToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ConstructorType"]["Boolean"] = promisify({});
const AddUnionConstructorTypeAnyToTypeReferenceBuiltinObject: Defaults["TypeReferenceBuiltin"]["Object"] | Defaults["ConstructorType"]["Any"] = promisify({});

// Initial Value
const TypeTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] = promisify("two")

// Changes
const AddUnionParenthesizedTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ParenthesizedType"]["Literal"] = promisify("two");
const AddUnionParenthesizedTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ParenthesizedType"]["Object"] = promisify("two");
const AddUnionParenthesizedTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ParenthesizedType"]["String"] = promisify("two");
const AddUnionParenthesizedTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ParenthesizedType"]["Number"] = promisify("two");
const AddUnionParenthesizedTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ParenthesizedType"]["Boolean"] = promisify("two");
const AddUnionParenthesizedTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ParenthesizedType"]["Any"] = promisify("two");

const AddUnionTypeReferenceBuiltinLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeReferenceBuiltin"]["Literal"] = promisify("two");
const AddUnionTypeReferenceBuiltinObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeReferenceBuiltin"]["Object"] = promisify("two");
const AddUnionTypeReferenceBuiltinStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeReferenceBuiltin"]["String"] = promisify("two");
const AddUnionTypeReferenceBuiltinNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeReferenceBuiltin"]["Number"] = promisify("two");
const AddUnionTypeReferenceBuiltinBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify("two");
const AddUnionTypeReferenceBuiltinAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeReferenceBuiltin"]["Any"] = promisify("two");

const AddUnionTypeReferencePredefinedLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeReferencePredefined"]["Literal"] = promisify("two");
const AddUnionTypeReferencePredefinedObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeReferencePredefined"]["Object"] = promisify("two");
const AddUnionTypeReferencePredefinedStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeReferencePredefined"]["String"] = promisify("two");
const AddUnionTypeReferencePredefinedNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeReferencePredefined"]["Number"] = promisify("two");
const AddUnionTypeReferencePredefinedBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeReferencePredefined"]["Boolean"] = promisify("two");
const AddUnionTypeReferencePredefinedAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeReferencePredefined"]["Any"] = promisify("two");

const AddUnionUnionTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["UnionType"]["Literal"] = promisify("two");
const AddUnionUnionTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["UnionType"]["Object"] = promisify("two");
const AddUnionUnionTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["UnionType"]["String"] = promisify("two");
const AddUnionUnionTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["UnionType"]["Number"] = promisify("two");
const AddUnionUnionTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["UnionType"]["Boolean"] = promisify("two");
const AddUnionUnionTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["UnionType"]["Any"] = promisify("two");

const AddUnionIntersectionTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["IntersectionType"]["Literal"] = promisify("two");
const AddUnionIntersectionTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["IntersectionType"]["Object"] = promisify("two");
const AddUnionIntersectionTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["IntersectionType"]["String"] = promisify("two");
const AddUnionIntersectionTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["IntersectionType"]["Number"] = promisify("two");
const AddUnionIntersectionTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["IntersectionType"]["Boolean"] = promisify("two");
const AddUnionIntersectionTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["IntersectionType"]["Any"] = promisify("two");

const AddUnionTypeLiteralLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeLiteral"]["Literal"] = promisify("two");
const AddUnionTypeLiteralObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeLiteral"]["Object"] = promisify("two");
const AddUnionTypeLiteralStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeLiteral"]["String"] = promisify("two");
const AddUnionTypeLiteralNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeLiteral"]["Number"] = promisify("two");
const AddUnionTypeLiteralBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeLiteral"]["Boolean"] = promisify("two");
const AddUnionTypeLiteralAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TypeLiteral"]["Any"] = promisify("two");

const AddUnionTupleTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TupleType"]["Literal"] = promisify("two");
const AddUnionTupleTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TupleType"]["Object"] = promisify("two");
const AddUnionTupleTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TupleType"]["String"] = promisify("two");
const AddUnionTupleTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TupleType"]["Number"] = promisify("two");
const AddUnionTupleTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TupleType"]["Boolean"] = promisify("two");
const AddUnionTupleTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["TupleType"]["Any"] = promisify("two");

const AddUnionArrayTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ArrayType"]["Literal"] = promisify("two");
const AddUnionArrayTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ArrayType"]["Object"] = promisify("two");
const AddUnionArrayTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ArrayType"]["String"] = promisify("two");
const AddUnionArrayTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ArrayType"]["Number"] = promisify("two");
const AddUnionArrayTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ArrayType"]["Boolean"] = promisify("two");
const AddUnionArrayTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ArrayType"]["Any"] = promisify("two");

const AddUnionFunctionTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["FunctionType"]["Literal"] = promisify("two");
const AddUnionFunctionTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["FunctionType"]["Object"] = promisify("two");
const AddUnionFunctionTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["FunctionType"]["String"] = promisify("two");
const AddUnionFunctionTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["FunctionType"]["Number"] = promisify("two");
const AddUnionFunctionTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["FunctionType"]["Boolean"] = promisify("two");
const AddUnionFunctionTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["FunctionType"]["Any"] = promisify("two");

const AddUnionConstructorTypeLiteralToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ConstructorType"]["Literal"] = promisify("two");
const AddUnionConstructorTypeObjectToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ConstructorType"]["Object"] = promisify("two");
const AddUnionConstructorTypeStringToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ConstructorType"]["String"] = promisify("two");
const AddUnionConstructorTypeNumberToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ConstructorType"]["Number"] = promisify("two");
const AddUnionConstructorTypeBooleanToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ConstructorType"]["Boolean"] = promisify("two");
const AddUnionConstructorTypeAnyToTypeReferenceBuiltinString: Defaults["TypeReferenceBuiltin"]["String"] | Defaults["ConstructorType"]["Any"] = promisify("two");

// Initial Value
const TypeTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] = promisify(2)

// Changes
const AddUnionParenthesizedTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ParenthesizedType"]["Literal"] = promisify(2);
const AddUnionParenthesizedTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ParenthesizedType"]["Object"] = promisify(2);
const AddUnionParenthesizedTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ParenthesizedType"]["String"] = promisify(2);
const AddUnionParenthesizedTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ParenthesizedType"]["Number"] = promisify(2);
const AddUnionParenthesizedTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ParenthesizedType"]["Boolean"] = promisify(2);
const AddUnionParenthesizedTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ParenthesizedType"]["Any"] = promisify(2);

const AddUnionTypeReferenceBuiltinLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeReferenceBuiltin"]["Literal"] = promisify(2);
const AddUnionTypeReferenceBuiltinObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeReferenceBuiltin"]["Object"] = promisify(2);
const AddUnionTypeReferenceBuiltinStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeReferenceBuiltin"]["String"] = promisify(2);
const AddUnionTypeReferenceBuiltinNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeReferenceBuiltin"]["Number"] = promisify(2);
const AddUnionTypeReferenceBuiltinBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify(2);
const AddUnionTypeReferenceBuiltinAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeReferenceBuiltin"]["Any"] = promisify(2);

const AddUnionTypeReferencePredefinedLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeReferencePredefined"]["Literal"] = promisify(2);
const AddUnionTypeReferencePredefinedObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeReferencePredefined"]["Object"] = promisify(2);
const AddUnionTypeReferencePredefinedStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeReferencePredefined"]["String"] = promisify(2);
const AddUnionTypeReferencePredefinedNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeReferencePredefined"]["Number"] = promisify(2);
const AddUnionTypeReferencePredefinedBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeReferencePredefined"]["Boolean"] = promisify(2);
const AddUnionTypeReferencePredefinedAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeReferencePredefined"]["Any"] = promisify(2);

const AddUnionUnionTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["UnionType"]["Literal"] = promisify(2);
const AddUnionUnionTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["UnionType"]["Object"] = promisify(2);
const AddUnionUnionTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["UnionType"]["String"] = promisify(2);
const AddUnionUnionTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["UnionType"]["Number"] = promisify(2);
const AddUnionUnionTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["UnionType"]["Boolean"] = promisify(2);
const AddUnionUnionTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["UnionType"]["Any"] = promisify(2);

const AddUnionIntersectionTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["IntersectionType"]["Literal"] = promisify(2);
const AddUnionIntersectionTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["IntersectionType"]["Object"] = promisify(2);
const AddUnionIntersectionTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["IntersectionType"]["String"] = promisify(2);
const AddUnionIntersectionTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["IntersectionType"]["Number"] = promisify(2);
const AddUnionIntersectionTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["IntersectionType"]["Boolean"] = promisify(2);
const AddUnionIntersectionTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["IntersectionType"]["Any"] = promisify(2);

const AddUnionTypeLiteralLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeLiteral"]["Literal"] = promisify(2);
const AddUnionTypeLiteralObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeLiteral"]["Object"] = promisify(2);
const AddUnionTypeLiteralStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeLiteral"]["String"] = promisify(2);
const AddUnionTypeLiteralNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeLiteral"]["Number"] = promisify(2);
const AddUnionTypeLiteralBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeLiteral"]["Boolean"] = promisify(2);
const AddUnionTypeLiteralAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TypeLiteral"]["Any"] = promisify(2);

const AddUnionTupleTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TupleType"]["Literal"] = promisify(2);
const AddUnionTupleTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TupleType"]["Object"] = promisify(2);
const AddUnionTupleTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TupleType"]["String"] = promisify(2);
const AddUnionTupleTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TupleType"]["Number"] = promisify(2);
const AddUnionTupleTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TupleType"]["Boolean"] = promisify(2);
const AddUnionTupleTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["TupleType"]["Any"] = promisify(2);

const AddUnionArrayTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ArrayType"]["Literal"] = promisify(2);
const AddUnionArrayTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ArrayType"]["Object"] = promisify(2);
const AddUnionArrayTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ArrayType"]["String"] = promisify(2);
const AddUnionArrayTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ArrayType"]["Number"] = promisify(2);
const AddUnionArrayTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ArrayType"]["Boolean"] = promisify(2);
const AddUnionArrayTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ArrayType"]["Any"] = promisify(2);

const AddUnionFunctionTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["FunctionType"]["Literal"] = promisify(2);
const AddUnionFunctionTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["FunctionType"]["Object"] = promisify(2);
const AddUnionFunctionTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["FunctionType"]["String"] = promisify(2);
const AddUnionFunctionTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["FunctionType"]["Number"] = promisify(2);
const AddUnionFunctionTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["FunctionType"]["Boolean"] = promisify(2);
const AddUnionFunctionTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["FunctionType"]["Any"] = promisify(2);

const AddUnionConstructorTypeLiteralToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ConstructorType"]["Literal"] = promisify(2);
const AddUnionConstructorTypeObjectToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ConstructorType"]["Object"] = promisify(2);
const AddUnionConstructorTypeStringToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ConstructorType"]["String"] = promisify(2);
const AddUnionConstructorTypeNumberToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ConstructorType"]["Number"] = promisify(2);
const AddUnionConstructorTypeBooleanToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ConstructorType"]["Boolean"] = promisify(2);
const AddUnionConstructorTypeAnyToTypeReferenceBuiltinNumber: Defaults["TypeReferenceBuiltin"]["Number"] | Defaults["ConstructorType"]["Any"] = promisify(2);

// Initial Value
const TypeTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true)

// Changes
const AddUnionParenthesizedTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ParenthesizedType"]["Literal"] = promisify(true);
const AddUnionParenthesizedTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ParenthesizedType"]["Object"] = promisify(true);
const AddUnionParenthesizedTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ParenthesizedType"]["String"] = promisify(true);
const AddUnionParenthesizedTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ParenthesizedType"]["Number"] = promisify(true);
const AddUnionParenthesizedTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ParenthesizedType"]["Boolean"] = promisify(true);
const AddUnionParenthesizedTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ParenthesizedType"]["Any"] = promisify(true);

const AddUnionTypeReferenceBuiltinLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Literal"] = promisify(true);
const AddUnionTypeReferenceBuiltinObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Object"] = promisify(true);
const AddUnionTypeReferenceBuiltinStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["String"] = promisify(true);
const AddUnionTypeReferenceBuiltinNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Number"] = promisify(true);
const AddUnionTypeReferenceBuiltinBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true);
const AddUnionTypeReferenceBuiltinAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Any"] = promisify(true);

const AddUnionTypeReferencePredefinedLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeReferencePredefined"]["Literal"] = promisify(true);
const AddUnionTypeReferencePredefinedObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeReferencePredefined"]["Object"] = promisify(true);
const AddUnionTypeReferencePredefinedStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeReferencePredefined"]["String"] = promisify(true);
const AddUnionTypeReferencePredefinedNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeReferencePredefined"]["Number"] = promisify(true);
const AddUnionTypeReferencePredefinedBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeReferencePredefined"]["Boolean"] = promisify(true);
const AddUnionTypeReferencePredefinedAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeReferencePredefined"]["Any"] = promisify(true);

const AddUnionUnionTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["UnionType"]["Literal"] = promisify(true);
const AddUnionUnionTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["UnionType"]["Object"] = promisify(true);
const AddUnionUnionTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["UnionType"]["String"] = promisify(true);
const AddUnionUnionTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["UnionType"]["Number"] = promisify(true);
const AddUnionUnionTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["UnionType"]["Boolean"] = promisify(true);
const AddUnionUnionTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["UnionType"]["Any"] = promisify(true);

const AddUnionIntersectionTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["IntersectionType"]["Literal"] = promisify(true);
const AddUnionIntersectionTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["IntersectionType"]["Object"] = promisify(true);
const AddUnionIntersectionTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["IntersectionType"]["String"] = promisify(true);
const AddUnionIntersectionTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["IntersectionType"]["Number"] = promisify(true);
const AddUnionIntersectionTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["IntersectionType"]["Boolean"] = promisify(true);
const AddUnionIntersectionTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["IntersectionType"]["Any"] = promisify(true);

const AddUnionTypeLiteralLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeLiteral"]["Literal"] = promisify(true);
const AddUnionTypeLiteralObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeLiteral"]["Object"] = promisify(true);
const AddUnionTypeLiteralStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeLiteral"]["String"] = promisify(true);
const AddUnionTypeLiteralNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeLiteral"]["Number"] = promisify(true);
const AddUnionTypeLiteralBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeLiteral"]["Boolean"] = promisify(true);
const AddUnionTypeLiteralAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TypeLiteral"]["Any"] = promisify(true);

const AddUnionTupleTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TupleType"]["Literal"] = promisify(true);
const AddUnionTupleTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TupleType"]["Object"] = promisify(true);
const AddUnionTupleTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TupleType"]["String"] = promisify(true);
const AddUnionTupleTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TupleType"]["Number"] = promisify(true);
const AddUnionTupleTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TupleType"]["Boolean"] = promisify(true);
const AddUnionTupleTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["TupleType"]["Any"] = promisify(true);

const AddUnionArrayTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ArrayType"]["Literal"] = promisify(true);
const AddUnionArrayTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ArrayType"]["Object"] = promisify(true);
const AddUnionArrayTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ArrayType"]["String"] = promisify(true);
const AddUnionArrayTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ArrayType"]["Number"] = promisify(true);
const AddUnionArrayTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ArrayType"]["Boolean"] = promisify(true);
const AddUnionArrayTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ArrayType"]["Any"] = promisify(true);

const AddUnionFunctionTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["FunctionType"]["Literal"] = promisify(true);
const AddUnionFunctionTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["FunctionType"]["Object"] = promisify(true);
const AddUnionFunctionTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["FunctionType"]["String"] = promisify(true);
const AddUnionFunctionTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["FunctionType"]["Number"] = promisify(true);
const AddUnionFunctionTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["FunctionType"]["Boolean"] = promisify(true);
const AddUnionFunctionTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["FunctionType"]["Any"] = promisify(true);

const AddUnionConstructorTypeLiteralToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ConstructorType"]["Literal"] = promisify(true);
const AddUnionConstructorTypeObjectToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ConstructorType"]["Object"] = promisify(true);
const AddUnionConstructorTypeStringToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ConstructorType"]["String"] = promisify(true);
const AddUnionConstructorTypeNumberToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ConstructorType"]["Number"] = promisify(true);
const AddUnionConstructorTypeBooleanToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ConstructorType"]["Boolean"] = promisify(true);
const AddUnionConstructorTypeAnyToTypeReferenceBuiltinBoolean: Defaults["TypeReferenceBuiltin"]["Boolean"] | Defaults["ConstructorType"]["Any"] = promisify(true);

// Initial Value
const TypeTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] = promisify(2)

// Changes
const AddUnionParenthesizedTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ParenthesizedType"]["Literal"] = promisify(2);
const AddUnionParenthesizedTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ParenthesizedType"]["Object"] = promisify(2);
const AddUnionParenthesizedTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ParenthesizedType"]["String"] = promisify(2);
const AddUnionParenthesizedTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ParenthesizedType"]["Number"] = promisify(2);
const AddUnionParenthesizedTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ParenthesizedType"]["Boolean"] = promisify(2);
const AddUnionParenthesizedTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ParenthesizedType"]["Any"] = promisify(2);

const AddUnionTypeReferenceBuiltinLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeReferenceBuiltin"]["Literal"] = promisify(2);
const AddUnionTypeReferenceBuiltinObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeReferenceBuiltin"]["Object"] = promisify(2);
const AddUnionTypeReferenceBuiltinStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeReferenceBuiltin"]["String"] = promisify(2);
const AddUnionTypeReferenceBuiltinNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeReferenceBuiltin"]["Number"] = promisify(2);
const AddUnionTypeReferenceBuiltinBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify(2);
const AddUnionTypeReferenceBuiltinAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeReferenceBuiltin"]["Any"] = promisify(2);

const AddUnionTypeReferencePredefinedLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeReferencePredefined"]["Literal"] = promisify(2);
const AddUnionTypeReferencePredefinedObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeReferencePredefined"]["Object"] = promisify(2);
const AddUnionTypeReferencePredefinedStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeReferencePredefined"]["String"] = promisify(2);
const AddUnionTypeReferencePredefinedNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeReferencePredefined"]["Number"] = promisify(2);
const AddUnionTypeReferencePredefinedBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeReferencePredefined"]["Boolean"] = promisify(2);
const AddUnionTypeReferencePredefinedAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeReferencePredefined"]["Any"] = promisify(2);

const AddUnionUnionTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["UnionType"]["Literal"] = promisify(2);
const AddUnionUnionTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["UnionType"]["Object"] = promisify(2);
const AddUnionUnionTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["UnionType"]["String"] = promisify(2);
const AddUnionUnionTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["UnionType"]["Number"] = promisify(2);
const AddUnionUnionTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["UnionType"]["Boolean"] = promisify(2);
const AddUnionUnionTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["UnionType"]["Any"] = promisify(2);

const AddUnionIntersectionTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["IntersectionType"]["Literal"] = promisify(2);
const AddUnionIntersectionTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["IntersectionType"]["Object"] = promisify(2);
const AddUnionIntersectionTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["IntersectionType"]["String"] = promisify(2);
const AddUnionIntersectionTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["IntersectionType"]["Number"] = promisify(2);
const AddUnionIntersectionTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["IntersectionType"]["Boolean"] = promisify(2);
const AddUnionIntersectionTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["IntersectionType"]["Any"] = promisify(2);

const AddUnionTypeLiteralLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeLiteral"]["Literal"] = promisify(2);
const AddUnionTypeLiteralObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeLiteral"]["Object"] = promisify(2);
const AddUnionTypeLiteralStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeLiteral"]["String"] = promisify(2);
const AddUnionTypeLiteralNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeLiteral"]["Number"] = promisify(2);
const AddUnionTypeLiteralBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeLiteral"]["Boolean"] = promisify(2);
const AddUnionTypeLiteralAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TypeLiteral"]["Any"] = promisify(2);

const AddUnionTupleTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TupleType"]["Literal"] = promisify(2);
const AddUnionTupleTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TupleType"]["Object"] = promisify(2);
const AddUnionTupleTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TupleType"]["String"] = promisify(2);
const AddUnionTupleTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TupleType"]["Number"] = promisify(2);
const AddUnionTupleTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TupleType"]["Boolean"] = promisify(2);
const AddUnionTupleTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["TupleType"]["Any"] = promisify(2);

const AddUnionArrayTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ArrayType"]["Literal"] = promisify(2);
const AddUnionArrayTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ArrayType"]["Object"] = promisify(2);
const AddUnionArrayTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ArrayType"]["String"] = promisify(2);
const AddUnionArrayTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ArrayType"]["Number"] = promisify(2);
const AddUnionArrayTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ArrayType"]["Boolean"] = promisify(2);
const AddUnionArrayTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ArrayType"]["Any"] = promisify(2);

const AddUnionFunctionTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["FunctionType"]["Literal"] = promisify(2);
const AddUnionFunctionTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["FunctionType"]["Object"] = promisify(2);
const AddUnionFunctionTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["FunctionType"]["String"] = promisify(2);
const AddUnionFunctionTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["FunctionType"]["Number"] = promisify(2);
const AddUnionFunctionTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["FunctionType"]["Boolean"] = promisify(2);
const AddUnionFunctionTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["FunctionType"]["Any"] = promisify(2);

const AddUnionConstructorTypeLiteralToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ConstructorType"]["Literal"] = promisify(2);
const AddUnionConstructorTypeObjectToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ConstructorType"]["Object"] = promisify(2);
const AddUnionConstructorTypeStringToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ConstructorType"]["String"] = promisify(2);
const AddUnionConstructorTypeNumberToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ConstructorType"]["Number"] = promisify(2);
const AddUnionConstructorTypeBooleanToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ConstructorType"]["Boolean"] = promisify(2);
const AddUnionConstructorTypeAnyToTypeReferenceBuiltinAny: Defaults["TypeReferenceBuiltin"]["Any"] | Defaults["ConstructorType"]["Any"] = promisify(2);

