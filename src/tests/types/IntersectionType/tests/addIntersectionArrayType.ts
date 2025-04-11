import { Defaults } from "../../defaults";

/*
 * IntersectionType
 */

// Add Intersection - ArrayType
// Initial Value
const TypeArrayTypeLiteral: Defaults["ArrayType"]["Literal"] = [1,1]

// Changes
const AddIntersectionParenthesizedTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ParenthesizedType"]["Literal"] = [1,1];
const AddIntersectionParenthesizedTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ParenthesizedType"]["Object"] = [1,1];
const AddIntersectionParenthesizedTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ParenthesizedType"]["String"] = [1,1];
const AddIntersectionParenthesizedTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ParenthesizedType"]["Number"] = [1,1];
const AddIntersectionParenthesizedTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ParenthesizedType"]["Boolean"] = [1,1];
const AddIntersectionParenthesizedTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ParenthesizedType"]["Any"] = [1,1];

const AddIntersectionTypeReferenceBuiltinLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Literal"] = [1,1];
const AddIntersectionTypeReferenceBuiltinObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Object"] = [1,1];
const AddIntersectionTypeReferenceBuiltinStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["String"] = [1,1];
const AddIntersectionTypeReferenceBuiltinNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Number"] = [1,1];
const AddIntersectionTypeReferenceBuiltinBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = [1,1];
const AddIntersectionTypeReferenceBuiltinAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeReferenceBuiltin"]["Any"] = [1,1];

const AddIntersectionTypeReferencePredefinedLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeReferencePredefined"]["Literal"] = [1,1];
const AddIntersectionTypeReferencePredefinedObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeReferencePredefined"]["Object"] = [1,1];
const AddIntersectionTypeReferencePredefinedStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeReferencePredefined"]["String"] = [1,1];
const AddIntersectionTypeReferencePredefinedNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeReferencePredefined"]["Number"] = [1,1];
const AddIntersectionTypeReferencePredefinedBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeReferencePredefined"]["Boolean"] = [1,1];
const AddIntersectionTypeReferencePredefinedAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeReferencePredefined"]["Any"] = [1,1];

const AddIntersectionUnionTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["UnionType"]["Literal"] = [1,1];
const AddIntersectionUnionTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["UnionType"]["Object"] = [1,1];
const AddIntersectionUnionTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["UnionType"]["String"] = [1,1];
const AddIntersectionUnionTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["UnionType"]["Number"] = [1,1];
const AddIntersectionUnionTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["UnionType"]["Boolean"] = [1,1];
const AddIntersectionUnionTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["UnionType"]["Any"] = [1,1];

const AddIntersectionIntersectionTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["IntersectionType"]["Literal"] = [1,1];
const AddIntersectionIntersectionTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["IntersectionType"]["Object"] = [1,1];
const AddIntersectionIntersectionTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["IntersectionType"]["String"] = [1,1];
const AddIntersectionIntersectionTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["IntersectionType"]["Number"] = [1,1];
const AddIntersectionIntersectionTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["IntersectionType"]["Boolean"] = [1,1];
const AddIntersectionIntersectionTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["IntersectionType"]["Any"] = [1,1];

const AddIntersectionTypeLiteralLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeLiteral"]["Literal"] = [1,1];
const AddIntersectionTypeLiteralObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeLiteral"]["Object"] = [1,1];
const AddIntersectionTypeLiteralStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeLiteral"]["String"] = [1,1];
const AddIntersectionTypeLiteralNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeLiteral"]["Number"] = [1,1];
const AddIntersectionTypeLiteralBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeLiteral"]["Boolean"] = [1,1];
const AddIntersectionTypeLiteralAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TypeLiteral"]["Any"] = [1,1];

const AddIntersectionTupleTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TupleType"]["Literal"] = [1,1];
const AddIntersectionTupleTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TupleType"]["Object"] = [1,1];
const AddIntersectionTupleTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TupleType"]["String"] = [1,1];
const AddIntersectionTupleTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TupleType"]["Number"] = [1,1];
const AddIntersectionTupleTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TupleType"]["Boolean"] = [1,1];
const AddIntersectionTupleTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["TupleType"]["Any"] = [1,1];

const AddIntersectionArrayTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ArrayType"]["Literal"] = [1,1];
const AddIntersectionArrayTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ArrayType"]["Object"] = [1,1];
const AddIntersectionArrayTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ArrayType"]["String"] = [1,1];
const AddIntersectionArrayTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ArrayType"]["Number"] = [1,1];
const AddIntersectionArrayTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ArrayType"]["Boolean"] = [1,1];
const AddIntersectionArrayTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ArrayType"]["Any"] = [1,1];

const AddIntersectionFunctionTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["FunctionType"]["Literal"] = [1,1];
const AddIntersectionFunctionTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["FunctionType"]["Object"] = [1,1];
const AddIntersectionFunctionTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["FunctionType"]["String"] = [1,1];
const AddIntersectionFunctionTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["FunctionType"]["Number"] = [1,1];
const AddIntersectionFunctionTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["FunctionType"]["Boolean"] = [1,1];
const AddIntersectionFunctionTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["FunctionType"]["Any"] = [1,1];

const AddIntersectionConstructorTypeLiteralToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ConstructorType"]["Literal"] = [1,1];
const AddIntersectionConstructorTypeObjectToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ConstructorType"]["Object"] = [1,1];
const AddIntersectionConstructorTypeStringToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ConstructorType"]["String"] = [1,1];
const AddIntersectionConstructorTypeNumberToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ConstructorType"]["Number"] = [1,1];
const AddIntersectionConstructorTypeBooleanToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ConstructorType"]["Boolean"] = [1,1];
const AddIntersectionConstructorTypeAnyToArrayTypeLiteral: Defaults["ArrayType"]["Literal"] & Defaults["ConstructorType"]["Any"] = [1,1];

// Initial Value
const TypeArrayTypeObject: Defaults["ArrayType"]["Object"] = [{},{}]

// Changes
const AddIntersectionParenthesizedTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ParenthesizedType"]["Literal"] = [{},{}];
const AddIntersectionParenthesizedTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ParenthesizedType"]["Object"] = [{},{}];
const AddIntersectionParenthesizedTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ParenthesizedType"]["String"] = [{},{}];
const AddIntersectionParenthesizedTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ParenthesizedType"]["Number"] = [{},{}];
const AddIntersectionParenthesizedTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ParenthesizedType"]["Boolean"] = [{},{}];
const AddIntersectionParenthesizedTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ParenthesizedType"]["Any"] = [{},{}];

const AddIntersectionTypeReferenceBuiltinLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Literal"] = [{},{}];
const AddIntersectionTypeReferenceBuiltinObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Object"] = [{},{}];
const AddIntersectionTypeReferenceBuiltinStringToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeReferenceBuiltin"]["String"] = [{},{}];
const AddIntersectionTypeReferenceBuiltinNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Number"] = [{},{}];
const AddIntersectionTypeReferenceBuiltinBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = [{},{}];
const AddIntersectionTypeReferenceBuiltinAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeReferenceBuiltin"]["Any"] = [{},{}];

const AddIntersectionTypeReferencePredefinedLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeReferencePredefined"]["Literal"] = [{},{}];
const AddIntersectionTypeReferencePredefinedObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeReferencePredefined"]["Object"] = [{},{}];
const AddIntersectionTypeReferencePredefinedStringToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeReferencePredefined"]["String"] = [{},{}];
const AddIntersectionTypeReferencePredefinedNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeReferencePredefined"]["Number"] = [{},{}];
const AddIntersectionTypeReferencePredefinedBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeReferencePredefined"]["Boolean"] = [{},{}];
const AddIntersectionTypeReferencePredefinedAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeReferencePredefined"]["Any"] = [{},{}];

const AddIntersectionUnionTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["UnionType"]["Literal"] = [{},{}];
const AddIntersectionUnionTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["UnionType"]["Object"] = [{},{}];
const AddIntersectionUnionTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["UnionType"]["String"] = [{},{}];
const AddIntersectionUnionTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["UnionType"]["Number"] = [{},{}];
const AddIntersectionUnionTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["UnionType"]["Boolean"] = [{},{}];
const AddIntersectionUnionTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["UnionType"]["Any"] = [{},{}];

const AddIntersectionIntersectionTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["IntersectionType"]["Literal"] = [{},{}];
const AddIntersectionIntersectionTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["IntersectionType"]["Object"] = [{},{}];
const AddIntersectionIntersectionTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["IntersectionType"]["String"] = [{},{}];
const AddIntersectionIntersectionTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["IntersectionType"]["Number"] = [{},{}];
const AddIntersectionIntersectionTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["IntersectionType"]["Boolean"] = [{},{}];
const AddIntersectionIntersectionTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["IntersectionType"]["Any"] = [{},{}];

const AddIntersectionTypeLiteralLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeLiteral"]["Literal"] = [{},{}];
const AddIntersectionTypeLiteralObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeLiteral"]["Object"] = [{},{}];
const AddIntersectionTypeLiteralStringToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeLiteral"]["String"] = [{},{}];
const AddIntersectionTypeLiteralNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeLiteral"]["Number"] = [{},{}];
const AddIntersectionTypeLiteralBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeLiteral"]["Boolean"] = [{},{}];
const AddIntersectionTypeLiteralAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TypeLiteral"]["Any"] = [{},{}];

const AddIntersectionTupleTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TupleType"]["Literal"] = [{},{}];
const AddIntersectionTupleTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TupleType"]["Object"] = [{},{}];
const AddIntersectionTupleTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TupleType"]["String"] = [{},{}];
const AddIntersectionTupleTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TupleType"]["Number"] = [{},{}];
const AddIntersectionTupleTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TupleType"]["Boolean"] = [{},{}];
const AddIntersectionTupleTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["TupleType"]["Any"] = [{},{}];

const AddIntersectionArrayTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ArrayType"]["Literal"] = [{},{}];
const AddIntersectionArrayTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ArrayType"]["Object"] = [{},{}];
const AddIntersectionArrayTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ArrayType"]["String"] = [{},{}];
const AddIntersectionArrayTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ArrayType"]["Number"] = [{},{}];
const AddIntersectionArrayTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ArrayType"]["Boolean"] = [{},{}];
const AddIntersectionArrayTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ArrayType"]["Any"] = [{},{}];

const AddIntersectionFunctionTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["FunctionType"]["Literal"] = [{},{}];
const AddIntersectionFunctionTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["FunctionType"]["Object"] = [{},{}];
const AddIntersectionFunctionTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["FunctionType"]["String"] = [{},{}];
const AddIntersectionFunctionTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["FunctionType"]["Number"] = [{},{}];
const AddIntersectionFunctionTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["FunctionType"]["Boolean"] = [{},{}];
const AddIntersectionFunctionTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["FunctionType"]["Any"] = [{},{}];

const AddIntersectionConstructorTypeLiteralToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ConstructorType"]["Literal"] = [{},{}];
const AddIntersectionConstructorTypeObjectToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ConstructorType"]["Object"] = [{},{}];
const AddIntersectionConstructorTypeStringToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ConstructorType"]["String"] = [{},{}];
const AddIntersectionConstructorTypeNumberToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ConstructorType"]["Number"] = [{},{}];
const AddIntersectionConstructorTypeBooleanToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ConstructorType"]["Boolean"] = [{},{}];
const AddIntersectionConstructorTypeAnyToArrayTypeObject: Defaults["ArrayType"]["Object"] & Defaults["ConstructorType"]["Any"] = [{},{}];

// Initial Value
const TypeArrayTypeString: Defaults["ArrayType"]["String"] = ["two","two"]

// Changes
const AddIntersectionParenthesizedTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ParenthesizedType"]["Literal"] = ["two","two"];
const AddIntersectionParenthesizedTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ParenthesizedType"]["Object"] = ["two","two"];
const AddIntersectionParenthesizedTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ParenthesizedType"]["String"] = ["two","two"];
const AddIntersectionParenthesizedTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ParenthesizedType"]["Number"] = ["two","two"];
const AddIntersectionParenthesizedTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ParenthesizedType"]["Boolean"] = ["two","two"];
const AddIntersectionParenthesizedTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ParenthesizedType"]["Any"] = ["two","two"];

const AddIntersectionTypeReferenceBuiltinLiteralToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeReferenceBuiltin"]["Literal"] = ["two","two"];
const AddIntersectionTypeReferenceBuiltinObjectToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeReferenceBuiltin"]["Object"] = ["two","two"];
const AddIntersectionTypeReferenceBuiltinStringToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeReferenceBuiltin"]["String"] = ["two","two"];
const AddIntersectionTypeReferenceBuiltinNumberToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeReferenceBuiltin"]["Number"] = ["two","two"];
const AddIntersectionTypeReferenceBuiltinBooleanToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = ["two","two"];
const AddIntersectionTypeReferenceBuiltinAnyToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeReferenceBuiltin"]["Any"] = ["two","two"];

const AddIntersectionTypeReferencePredefinedLiteralToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeReferencePredefined"]["Literal"] = ["two","two"];
const AddIntersectionTypeReferencePredefinedObjectToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeReferencePredefined"]["Object"] = ["two","two"];
const AddIntersectionTypeReferencePredefinedStringToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeReferencePredefined"]["String"] = ["two","two"];
const AddIntersectionTypeReferencePredefinedNumberToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeReferencePredefined"]["Number"] = ["two","two"];
const AddIntersectionTypeReferencePredefinedBooleanToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeReferencePredefined"]["Boolean"] = ["two","two"];
const AddIntersectionTypeReferencePredefinedAnyToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeReferencePredefined"]["Any"] = ["two","two"];

const AddIntersectionUnionTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["UnionType"]["Literal"] = ["two","two"];
const AddIntersectionUnionTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["UnionType"]["Object"] = ["two","two"];
const AddIntersectionUnionTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["UnionType"]["String"] = ["two","two"];
const AddIntersectionUnionTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["UnionType"]["Number"] = ["two","two"];
const AddIntersectionUnionTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["UnionType"]["Boolean"] = ["two","two"];
const AddIntersectionUnionTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["UnionType"]["Any"] = ["two","two"];

const AddIntersectionIntersectionTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["IntersectionType"]["Literal"] = ["two","two"];
const AddIntersectionIntersectionTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["IntersectionType"]["Object"] = ["two","two"];
const AddIntersectionIntersectionTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["IntersectionType"]["String"] = ["two","two"];
const AddIntersectionIntersectionTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["IntersectionType"]["Number"] = ["two","two"];
const AddIntersectionIntersectionTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["IntersectionType"]["Boolean"] = ["two","two"];
const AddIntersectionIntersectionTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["IntersectionType"]["Any"] = ["two","two"];

const AddIntersectionTypeLiteralLiteralToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeLiteral"]["Literal"] = ["two","two"];
const AddIntersectionTypeLiteralObjectToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeLiteral"]["Object"] = ["two","two"];
const AddIntersectionTypeLiteralStringToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeLiteral"]["String"] = ["two","two"];
const AddIntersectionTypeLiteralNumberToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeLiteral"]["Number"] = ["two","two"];
const AddIntersectionTypeLiteralBooleanToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeLiteral"]["Boolean"] = ["two","two"];
const AddIntersectionTypeLiteralAnyToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TypeLiteral"]["Any"] = ["two","two"];

const AddIntersectionTupleTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TupleType"]["Literal"] = ["two","two"];
const AddIntersectionTupleTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TupleType"]["Object"] = ["two","two"];
const AddIntersectionTupleTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TupleType"]["String"] = ["two","two"];
const AddIntersectionTupleTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TupleType"]["Number"] = ["two","two"];
const AddIntersectionTupleTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TupleType"]["Boolean"] = ["two","two"];
const AddIntersectionTupleTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["TupleType"]["Any"] = ["two","two"];

const AddIntersectionArrayTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ArrayType"]["Literal"] = ["two","two"];
const AddIntersectionArrayTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ArrayType"]["Object"] = ["two","two"];
const AddIntersectionArrayTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ArrayType"]["String"] = ["two","two"];
const AddIntersectionArrayTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ArrayType"]["Number"] = ["two","two"];
const AddIntersectionArrayTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ArrayType"]["Boolean"] = ["two","two"];
const AddIntersectionArrayTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ArrayType"]["Any"] = ["two","two"];

const AddIntersectionFunctionTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["FunctionType"]["Literal"] = ["two","two"];
const AddIntersectionFunctionTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["FunctionType"]["Object"] = ["two","two"];
const AddIntersectionFunctionTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["FunctionType"]["String"] = ["two","two"];
const AddIntersectionFunctionTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["FunctionType"]["Number"] = ["two","two"];
const AddIntersectionFunctionTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["FunctionType"]["Boolean"] = ["two","two"];
const AddIntersectionFunctionTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["FunctionType"]["Any"] = ["two","two"];

const AddIntersectionConstructorTypeLiteralToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ConstructorType"]["Literal"] = ["two","two"];
const AddIntersectionConstructorTypeObjectToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ConstructorType"]["Object"] = ["two","two"];
const AddIntersectionConstructorTypeStringToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ConstructorType"]["String"] = ["two","two"];
const AddIntersectionConstructorTypeNumberToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ConstructorType"]["Number"] = ["two","two"];
const AddIntersectionConstructorTypeBooleanToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ConstructorType"]["Boolean"] = ["two","two"];
const AddIntersectionConstructorTypeAnyToArrayTypeString: Defaults["ArrayType"]["String"] & Defaults["ConstructorType"]["Any"] = ["two","two"];

// Initial Value
const TypeArrayTypeNumber: Defaults["ArrayType"]["Number"] = [2,2]

// Changes
const AddIntersectionParenthesizedTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ParenthesizedType"]["Literal"] = [2,2];
const AddIntersectionParenthesizedTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ParenthesizedType"]["Object"] = [2,2];
const AddIntersectionParenthesizedTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ParenthesizedType"]["String"] = [2,2];
const AddIntersectionParenthesizedTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ParenthesizedType"]["Number"] = [2,2];
const AddIntersectionParenthesizedTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ParenthesizedType"]["Boolean"] = [2,2];
const AddIntersectionParenthesizedTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ParenthesizedType"]["Any"] = [2,2];

const AddIntersectionTypeReferenceBuiltinLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Literal"] = [2,2];
const AddIntersectionTypeReferenceBuiltinObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Object"] = [2,2];
const AddIntersectionTypeReferenceBuiltinStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeReferenceBuiltin"]["String"] = [2,2];
const AddIntersectionTypeReferenceBuiltinNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Number"] = [2,2];
const AddIntersectionTypeReferenceBuiltinBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = [2,2];
const AddIntersectionTypeReferenceBuiltinAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeReferenceBuiltin"]["Any"] = [2,2];

const AddIntersectionTypeReferencePredefinedLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeReferencePredefined"]["Literal"] = [2,2];
const AddIntersectionTypeReferencePredefinedObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeReferencePredefined"]["Object"] = [2,2];
const AddIntersectionTypeReferencePredefinedStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeReferencePredefined"]["String"] = [2,2];
const AddIntersectionTypeReferencePredefinedNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeReferencePredefined"]["Number"] = [2,2];
const AddIntersectionTypeReferencePredefinedBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeReferencePredefined"]["Boolean"] = [2,2];
const AddIntersectionTypeReferencePredefinedAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeReferencePredefined"]["Any"] = [2,2];

const AddIntersectionUnionTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["UnionType"]["Literal"] = [2,2];
const AddIntersectionUnionTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["UnionType"]["Object"] = [2,2];
const AddIntersectionUnionTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["UnionType"]["String"] = [2,2];
const AddIntersectionUnionTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["UnionType"]["Number"] = [2,2];
const AddIntersectionUnionTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["UnionType"]["Boolean"] = [2,2];
const AddIntersectionUnionTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["UnionType"]["Any"] = [2,2];

const AddIntersectionIntersectionTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["IntersectionType"]["Literal"] = [2,2];
const AddIntersectionIntersectionTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["IntersectionType"]["Object"] = [2,2];
const AddIntersectionIntersectionTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["IntersectionType"]["String"] = [2,2];
const AddIntersectionIntersectionTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["IntersectionType"]["Number"] = [2,2];
const AddIntersectionIntersectionTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["IntersectionType"]["Boolean"] = [2,2];
const AddIntersectionIntersectionTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["IntersectionType"]["Any"] = [2,2];

const AddIntersectionTypeLiteralLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeLiteral"]["Literal"] = [2,2];
const AddIntersectionTypeLiteralObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeLiteral"]["Object"] = [2,2];
const AddIntersectionTypeLiteralStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeLiteral"]["String"] = [2,2];
const AddIntersectionTypeLiteralNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeLiteral"]["Number"] = [2,2];
const AddIntersectionTypeLiteralBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeLiteral"]["Boolean"] = [2,2];
const AddIntersectionTypeLiteralAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TypeLiteral"]["Any"] = [2,2];

const AddIntersectionTupleTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TupleType"]["Literal"] = [2,2];
const AddIntersectionTupleTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TupleType"]["Object"] = [2,2];
const AddIntersectionTupleTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TupleType"]["String"] = [2,2];
const AddIntersectionTupleTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TupleType"]["Number"] = [2,2];
const AddIntersectionTupleTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TupleType"]["Boolean"] = [2,2];
const AddIntersectionTupleTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["TupleType"]["Any"] = [2,2];

const AddIntersectionArrayTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ArrayType"]["Literal"] = [2,2];
const AddIntersectionArrayTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ArrayType"]["Object"] = [2,2];
const AddIntersectionArrayTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ArrayType"]["String"] = [2,2];
const AddIntersectionArrayTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ArrayType"]["Number"] = [2,2];
const AddIntersectionArrayTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ArrayType"]["Boolean"] = [2,2];
const AddIntersectionArrayTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ArrayType"]["Any"] = [2,2];

const AddIntersectionFunctionTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["FunctionType"]["Literal"] = [2,2];
const AddIntersectionFunctionTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["FunctionType"]["Object"] = [2,2];
const AddIntersectionFunctionTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["FunctionType"]["String"] = [2,2];
const AddIntersectionFunctionTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["FunctionType"]["Number"] = [2,2];
const AddIntersectionFunctionTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["FunctionType"]["Boolean"] = [2,2];
const AddIntersectionFunctionTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["FunctionType"]["Any"] = [2,2];

const AddIntersectionConstructorTypeLiteralToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ConstructorType"]["Literal"] = [2,2];
const AddIntersectionConstructorTypeObjectToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ConstructorType"]["Object"] = [2,2];
const AddIntersectionConstructorTypeStringToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ConstructorType"]["String"] = [2,2];
const AddIntersectionConstructorTypeNumberToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ConstructorType"]["Number"] = [2,2];
const AddIntersectionConstructorTypeBooleanToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ConstructorType"]["Boolean"] = [2,2];
const AddIntersectionConstructorTypeAnyToArrayTypeNumber: Defaults["ArrayType"]["Number"] & Defaults["ConstructorType"]["Any"] = [2,2];

// Initial Value
const TypeArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] = [true,true]

// Changes
const AddIntersectionParenthesizedTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ParenthesizedType"]["Literal"] = [true,true];
const AddIntersectionParenthesizedTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ParenthesizedType"]["Object"] = [true,true];
const AddIntersectionParenthesizedTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ParenthesizedType"]["String"] = [true,true];
const AddIntersectionParenthesizedTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ParenthesizedType"]["Number"] = [true,true];
const AddIntersectionParenthesizedTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ParenthesizedType"]["Boolean"] = [true,true];
const AddIntersectionParenthesizedTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ParenthesizedType"]["Any"] = [true,true];

const AddIntersectionTypeReferenceBuiltinLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Literal"] = [true,true];
const AddIntersectionTypeReferenceBuiltinObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Object"] = [true,true];
const AddIntersectionTypeReferenceBuiltinStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["String"] = [true,true];
const AddIntersectionTypeReferenceBuiltinNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Number"] = [true,true];
const AddIntersectionTypeReferenceBuiltinBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = [true,true];
const AddIntersectionTypeReferenceBuiltinAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeReferenceBuiltin"]["Any"] = [true,true];

const AddIntersectionTypeReferencePredefinedLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Literal"] = [true,true];
const AddIntersectionTypeReferencePredefinedObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Object"] = [true,true];
const AddIntersectionTypeReferencePredefinedStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeReferencePredefined"]["String"] = [true,true];
const AddIntersectionTypeReferencePredefinedNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Number"] = [true,true];
const AddIntersectionTypeReferencePredefinedBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Boolean"] = [true,true];
const AddIntersectionTypeReferencePredefinedAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeReferencePredefined"]["Any"] = [true,true];

const AddIntersectionUnionTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["UnionType"]["Literal"] = [true,true];
const AddIntersectionUnionTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["UnionType"]["Object"] = [true,true];
const AddIntersectionUnionTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["UnionType"]["String"] = [true,true];
const AddIntersectionUnionTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["UnionType"]["Number"] = [true,true];
const AddIntersectionUnionTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["UnionType"]["Boolean"] = [true,true];
const AddIntersectionUnionTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["UnionType"]["Any"] = [true,true];

const AddIntersectionIntersectionTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["IntersectionType"]["Literal"] = [true,true];
const AddIntersectionIntersectionTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["IntersectionType"]["Object"] = [true,true];
const AddIntersectionIntersectionTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["IntersectionType"]["String"] = [true,true];
const AddIntersectionIntersectionTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["IntersectionType"]["Number"] = [true,true];
const AddIntersectionIntersectionTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["IntersectionType"]["Boolean"] = [true,true];
const AddIntersectionIntersectionTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["IntersectionType"]["Any"] = [true,true];

const AddIntersectionTypeLiteralLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeLiteral"]["Literal"] = [true,true];
const AddIntersectionTypeLiteralObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeLiteral"]["Object"] = [true,true];
const AddIntersectionTypeLiteralStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeLiteral"]["String"] = [true,true];
const AddIntersectionTypeLiteralNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeLiteral"]["Number"] = [true,true];
const AddIntersectionTypeLiteralBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeLiteral"]["Boolean"] = [true,true];
const AddIntersectionTypeLiteralAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TypeLiteral"]["Any"] = [true,true];

const AddIntersectionTupleTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TupleType"]["Literal"] = [true,true];
const AddIntersectionTupleTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TupleType"]["Object"] = [true,true];
const AddIntersectionTupleTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TupleType"]["String"] = [true,true];
const AddIntersectionTupleTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TupleType"]["Number"] = [true,true];
const AddIntersectionTupleTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TupleType"]["Boolean"] = [true,true];
const AddIntersectionTupleTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["TupleType"]["Any"] = [true,true];

const AddIntersectionArrayTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ArrayType"]["Literal"] = [true,true];
const AddIntersectionArrayTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ArrayType"]["Object"] = [true,true];
const AddIntersectionArrayTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ArrayType"]["String"] = [true,true];
const AddIntersectionArrayTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ArrayType"]["Number"] = [true,true];
const AddIntersectionArrayTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ArrayType"]["Boolean"] = [true,true];
const AddIntersectionArrayTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ArrayType"]["Any"] = [true,true];

const AddIntersectionFunctionTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["FunctionType"]["Literal"] = [true,true];
const AddIntersectionFunctionTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["FunctionType"]["Object"] = [true,true];
const AddIntersectionFunctionTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["FunctionType"]["String"] = [true,true];
const AddIntersectionFunctionTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["FunctionType"]["Number"] = [true,true];
const AddIntersectionFunctionTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["FunctionType"]["Boolean"] = [true,true];
const AddIntersectionFunctionTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["FunctionType"]["Any"] = [true,true];

const AddIntersectionConstructorTypeLiteralToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ConstructorType"]["Literal"] = [true,true];
const AddIntersectionConstructorTypeObjectToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ConstructorType"]["Object"] = [true,true];
const AddIntersectionConstructorTypeStringToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ConstructorType"]["String"] = [true,true];
const AddIntersectionConstructorTypeNumberToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ConstructorType"]["Number"] = [true,true];
const AddIntersectionConstructorTypeBooleanToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ConstructorType"]["Boolean"] = [true,true];
const AddIntersectionConstructorTypeAnyToArrayTypeBoolean: Defaults["ArrayType"]["Boolean"] & Defaults["ConstructorType"]["Any"] = [true,true];

// Initial Value
const TypeArrayTypeAny: Defaults["ArrayType"]["Any"] = [2,2]

// Changes
const AddIntersectionParenthesizedTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ParenthesizedType"]["Literal"] = [2,2];
const AddIntersectionParenthesizedTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ParenthesizedType"]["Object"] = [2,2];
const AddIntersectionParenthesizedTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ParenthesizedType"]["String"] = [2,2];
const AddIntersectionParenthesizedTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ParenthesizedType"]["Number"] = [2,2];
const AddIntersectionParenthesizedTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ParenthesizedType"]["Boolean"] = [2,2];
const AddIntersectionParenthesizedTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ParenthesizedType"]["Any"] = [2,2];

const AddIntersectionTypeReferenceBuiltinLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Literal"] = [2,2];
const AddIntersectionTypeReferenceBuiltinObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Object"] = [2,2];
const AddIntersectionTypeReferenceBuiltinStringToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeReferenceBuiltin"]["String"] = [2,2];
const AddIntersectionTypeReferenceBuiltinNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Number"] = [2,2];
const AddIntersectionTypeReferenceBuiltinBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Boolean"] = [2,2];
const AddIntersectionTypeReferenceBuiltinAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeReferenceBuiltin"]["Any"] = [2,2];

const AddIntersectionTypeReferencePredefinedLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeReferencePredefined"]["Literal"] = [2,2];
const AddIntersectionTypeReferencePredefinedObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeReferencePredefined"]["Object"] = [2,2];
const AddIntersectionTypeReferencePredefinedStringToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeReferencePredefined"]["String"] = [2,2];
const AddIntersectionTypeReferencePredefinedNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeReferencePredefined"]["Number"] = [2,2];
const AddIntersectionTypeReferencePredefinedBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeReferencePredefined"]["Boolean"] = [2,2];
const AddIntersectionTypeReferencePredefinedAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeReferencePredefined"]["Any"] = [2,2];

const AddIntersectionUnionTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["UnionType"]["Literal"] = [2,2];
const AddIntersectionUnionTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["UnionType"]["Object"] = [2,2];
const AddIntersectionUnionTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["UnionType"]["String"] = [2,2];
const AddIntersectionUnionTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["UnionType"]["Number"] = [2,2];
const AddIntersectionUnionTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["UnionType"]["Boolean"] = [2,2];
const AddIntersectionUnionTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["UnionType"]["Any"] = [2,2];

const AddIntersectionIntersectionTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["IntersectionType"]["Literal"] = [2,2];
const AddIntersectionIntersectionTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["IntersectionType"]["Object"] = [2,2];
const AddIntersectionIntersectionTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["IntersectionType"]["String"] = [2,2];
const AddIntersectionIntersectionTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["IntersectionType"]["Number"] = [2,2];
const AddIntersectionIntersectionTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["IntersectionType"]["Boolean"] = [2,2];
const AddIntersectionIntersectionTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["IntersectionType"]["Any"] = [2,2];

const AddIntersectionTypeLiteralLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeLiteral"]["Literal"] = [2,2];
const AddIntersectionTypeLiteralObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeLiteral"]["Object"] = [2,2];
const AddIntersectionTypeLiteralStringToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeLiteral"]["String"] = [2,2];
const AddIntersectionTypeLiteralNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeLiteral"]["Number"] = [2,2];
const AddIntersectionTypeLiteralBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeLiteral"]["Boolean"] = [2,2];
const AddIntersectionTypeLiteralAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TypeLiteral"]["Any"] = [2,2];

const AddIntersectionTupleTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TupleType"]["Literal"] = [2,2];
const AddIntersectionTupleTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TupleType"]["Object"] = [2,2];
const AddIntersectionTupleTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TupleType"]["String"] = [2,2];
const AddIntersectionTupleTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TupleType"]["Number"] = [2,2];
const AddIntersectionTupleTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TupleType"]["Boolean"] = [2,2];
const AddIntersectionTupleTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["TupleType"]["Any"] = [2,2];

const AddIntersectionArrayTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ArrayType"]["Literal"] = [2,2];
const AddIntersectionArrayTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ArrayType"]["Object"] = [2,2];
const AddIntersectionArrayTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ArrayType"]["String"] = [2,2];
const AddIntersectionArrayTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ArrayType"]["Number"] = [2,2];
const AddIntersectionArrayTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ArrayType"]["Boolean"] = [2,2];
const AddIntersectionArrayTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ArrayType"]["Any"] = [2,2];

const AddIntersectionFunctionTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["FunctionType"]["Literal"] = [2,2];
const AddIntersectionFunctionTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["FunctionType"]["Object"] = [2,2];
const AddIntersectionFunctionTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["FunctionType"]["String"] = [2,2];
const AddIntersectionFunctionTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["FunctionType"]["Number"] = [2,2];
const AddIntersectionFunctionTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["FunctionType"]["Boolean"] = [2,2];
const AddIntersectionFunctionTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["FunctionType"]["Any"] = [2,2];

const AddIntersectionConstructorTypeLiteralToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ConstructorType"]["Literal"] = [2,2];
const AddIntersectionConstructorTypeObjectToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ConstructorType"]["Object"] = [2,2];
const AddIntersectionConstructorTypeStringToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ConstructorType"]["String"] = [2,2];
const AddIntersectionConstructorTypeNumberToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ConstructorType"]["Number"] = [2,2];
const AddIntersectionConstructorTypeBooleanToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ConstructorType"]["Boolean"] = [2,2];
const AddIntersectionConstructorTypeAnyToArrayTypeAny: Defaults["ArrayType"]["Any"] & Defaults["ConstructorType"]["Any"] = [2,2];

