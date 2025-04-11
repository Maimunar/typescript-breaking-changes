import { Defaults as GeneralDefaults } from "../../defaults";
import { RequiredParamDefaults, OptionalParamDefaults, VoidFunctionNoParam } from "../defaults"
/*
 * FunctionType
 */

// Initial State
const FunctionTypeWithNoParams: VoidFunctionNoParam = () => {};
FunctionTypeWithNoParams();

// Changes

// Add Parameter - ParenthesizedType
// Required
const AddRequiredParamParenthesizedTypeLiteral: RequiredParamDefaults["ParenthesizedType"]["Literal"] = () => {};
AddRequiredParamParenthesizedTypeLiteral();
const AddRequiredParamParenthesizedTypeObject: RequiredParamDefaults["ParenthesizedType"]["Object"] = () => {};
AddRequiredParamParenthesizedTypeObject();
const AddRequiredParamParenthesizedTypeString: RequiredParamDefaults["ParenthesizedType"]["String"] = () => {};
AddRequiredParamParenthesizedTypeString();
const AddRequiredParamParenthesizedTypeNumber: RequiredParamDefaults["ParenthesizedType"]["Number"] = () => {};
AddRequiredParamParenthesizedTypeNumber();
const AddRequiredParamParenthesizedTypeBoolean: RequiredParamDefaults["ParenthesizedType"]["Boolean"] = () => {};
AddRequiredParamParenthesizedTypeBoolean();
const AddRequiredParamParenthesizedTypeAny: RequiredParamDefaults["ParenthesizedType"]["Any"] = () => {};
AddRequiredParamParenthesizedTypeAny();

// Optional
const AddOptionalParamParenthesizedTypeLiteral: OptionalParamDefaults["ParenthesizedType"]["Literal"] = () => {};
AddOptionalParamParenthesizedTypeLiteral();
const AddOptionalParamParenthesizedTypeObject: OptionalParamDefaults["ParenthesizedType"]["Object"] = () => {};
AddOptionalParamParenthesizedTypeObject();
const AddOptionalParamParenthesizedTypeString: OptionalParamDefaults["ParenthesizedType"]["String"] = () => {};
AddOptionalParamParenthesizedTypeString();
const AddOptionalParamParenthesizedTypeNumber: OptionalParamDefaults["ParenthesizedType"]["Number"] = () => {};
AddOptionalParamParenthesizedTypeNumber();
const AddOptionalParamParenthesizedTypeBoolean: OptionalParamDefaults["ParenthesizedType"]["Boolean"] = () => {};
AddOptionalParamParenthesizedTypeBoolean();
const AddOptionalParamParenthesizedTypeAny: OptionalParamDefaults["ParenthesizedType"]["Any"] = () => {};
AddOptionalParamParenthesizedTypeAny();
// Add Parameter - TypeReferenceBuiltin
// Required
const AddRequiredParamTypeReferenceBuiltinLiteral: RequiredParamDefaults["TypeReferenceBuiltin"]["Literal"] = () => {};
AddRequiredParamTypeReferenceBuiltinLiteral();
const AddRequiredParamTypeReferenceBuiltinObject: RequiredParamDefaults["TypeReferenceBuiltin"]["Object"] = () => {};
AddRequiredParamTypeReferenceBuiltinObject();
const AddRequiredParamTypeReferenceBuiltinString: RequiredParamDefaults["TypeReferenceBuiltin"]["String"] = () => {};
AddRequiredParamTypeReferenceBuiltinString();
const AddRequiredParamTypeReferenceBuiltinNumber: RequiredParamDefaults["TypeReferenceBuiltin"]["Number"] = () => {};
AddRequiredParamTypeReferenceBuiltinNumber();
const AddRequiredParamTypeReferenceBuiltinBoolean: RequiredParamDefaults["TypeReferenceBuiltin"]["Boolean"] = () => {};
AddRequiredParamTypeReferenceBuiltinBoolean();
const AddRequiredParamTypeReferenceBuiltinAny: RequiredParamDefaults["TypeReferenceBuiltin"]["Any"] = () => {};
AddRequiredParamTypeReferenceBuiltinAny();

// Optional
const AddOptionalParamTypeReferenceBuiltinLiteral: OptionalParamDefaults["TypeReferenceBuiltin"]["Literal"] = () => {};
AddOptionalParamTypeReferenceBuiltinLiteral();
const AddOptionalParamTypeReferenceBuiltinObject: OptionalParamDefaults["TypeReferenceBuiltin"]["Object"] = () => {};
AddOptionalParamTypeReferenceBuiltinObject();
const AddOptionalParamTypeReferenceBuiltinString: OptionalParamDefaults["TypeReferenceBuiltin"]["String"] = () => {};
AddOptionalParamTypeReferenceBuiltinString();
const AddOptionalParamTypeReferenceBuiltinNumber: OptionalParamDefaults["TypeReferenceBuiltin"]["Number"] = () => {};
AddOptionalParamTypeReferenceBuiltinNumber();
const AddOptionalParamTypeReferenceBuiltinBoolean: OptionalParamDefaults["TypeReferenceBuiltin"]["Boolean"] = () => {};
AddOptionalParamTypeReferenceBuiltinBoolean();
const AddOptionalParamTypeReferenceBuiltinAny: OptionalParamDefaults["TypeReferenceBuiltin"]["Any"] = () => {};
AddOptionalParamTypeReferenceBuiltinAny();
// Add Parameter - TypeReferencePredefined
// Required
const AddRequiredParamTypeReferencePredefinedLiteral: RequiredParamDefaults["TypeReferencePredefined"]["Literal"] = () => {};
AddRequiredParamTypeReferencePredefinedLiteral();
const AddRequiredParamTypeReferencePredefinedObject: RequiredParamDefaults["TypeReferencePredefined"]["Object"] = () => {};
AddRequiredParamTypeReferencePredefinedObject();
const AddRequiredParamTypeReferencePredefinedString: RequiredParamDefaults["TypeReferencePredefined"]["String"] = () => {};
AddRequiredParamTypeReferencePredefinedString();
const AddRequiredParamTypeReferencePredefinedNumber: RequiredParamDefaults["TypeReferencePredefined"]["Number"] = () => {};
AddRequiredParamTypeReferencePredefinedNumber();
const AddRequiredParamTypeReferencePredefinedBoolean: RequiredParamDefaults["TypeReferencePredefined"]["Boolean"] = () => {};
AddRequiredParamTypeReferencePredefinedBoolean();
const AddRequiredParamTypeReferencePredefinedAny: RequiredParamDefaults["TypeReferencePredefined"]["Any"] = () => {};
AddRequiredParamTypeReferencePredefinedAny();

// Optional
const AddOptionalParamTypeReferencePredefinedLiteral: OptionalParamDefaults["TypeReferencePredefined"]["Literal"] = () => {};
AddOptionalParamTypeReferencePredefinedLiteral();
const AddOptionalParamTypeReferencePredefinedObject: OptionalParamDefaults["TypeReferencePredefined"]["Object"] = () => {};
AddOptionalParamTypeReferencePredefinedObject();
const AddOptionalParamTypeReferencePredefinedString: OptionalParamDefaults["TypeReferencePredefined"]["String"] = () => {};
AddOptionalParamTypeReferencePredefinedString();
const AddOptionalParamTypeReferencePredefinedNumber: OptionalParamDefaults["TypeReferencePredefined"]["Number"] = () => {};
AddOptionalParamTypeReferencePredefinedNumber();
const AddOptionalParamTypeReferencePredefinedBoolean: OptionalParamDefaults["TypeReferencePredefined"]["Boolean"] = () => {};
AddOptionalParamTypeReferencePredefinedBoolean();
const AddOptionalParamTypeReferencePredefinedAny: OptionalParamDefaults["TypeReferencePredefined"]["Any"] = () => {};
AddOptionalParamTypeReferencePredefinedAny();
// Add Parameter - UnionType
// Required
const AddRequiredParamUnionTypeLiteral: RequiredParamDefaults["UnionType"]["Literal"] = () => {};
AddRequiredParamUnionTypeLiteral();
const AddRequiredParamUnionTypeObject: RequiredParamDefaults["UnionType"]["Object"] = () => {};
AddRequiredParamUnionTypeObject();
const AddRequiredParamUnionTypeString: RequiredParamDefaults["UnionType"]["String"] = () => {};
AddRequiredParamUnionTypeString();
const AddRequiredParamUnionTypeNumber: RequiredParamDefaults["UnionType"]["Number"] = () => {};
AddRequiredParamUnionTypeNumber();
const AddRequiredParamUnionTypeBoolean: RequiredParamDefaults["UnionType"]["Boolean"] = () => {};
AddRequiredParamUnionTypeBoolean();
const AddRequiredParamUnionTypeAny: RequiredParamDefaults["UnionType"]["Any"] = () => {};
AddRequiredParamUnionTypeAny();

// Optional
const AddOptionalParamUnionTypeLiteral: OptionalParamDefaults["UnionType"]["Literal"] = () => {};
AddOptionalParamUnionTypeLiteral();
const AddOptionalParamUnionTypeObject: OptionalParamDefaults["UnionType"]["Object"] = () => {};
AddOptionalParamUnionTypeObject();
const AddOptionalParamUnionTypeString: OptionalParamDefaults["UnionType"]["String"] = () => {};
AddOptionalParamUnionTypeString();
const AddOptionalParamUnionTypeNumber: OptionalParamDefaults["UnionType"]["Number"] = () => {};
AddOptionalParamUnionTypeNumber();
const AddOptionalParamUnionTypeBoolean: OptionalParamDefaults["UnionType"]["Boolean"] = () => {};
AddOptionalParamUnionTypeBoolean();
const AddOptionalParamUnionTypeAny: OptionalParamDefaults["UnionType"]["Any"] = () => {};
AddOptionalParamUnionTypeAny();
// Add Parameter - IntersectionType
// Required
const AddRequiredParamIntersectionTypeLiteral: RequiredParamDefaults["IntersectionType"]["Literal"] = () => {};
AddRequiredParamIntersectionTypeLiteral();
const AddRequiredParamIntersectionTypeObject: RequiredParamDefaults["IntersectionType"]["Object"] = () => {};
AddRequiredParamIntersectionTypeObject();
const AddRequiredParamIntersectionTypeString: RequiredParamDefaults["IntersectionType"]["String"] = () => {};
AddRequiredParamIntersectionTypeString();
const AddRequiredParamIntersectionTypeNumber: RequiredParamDefaults["IntersectionType"]["Number"] = () => {};
AddRequiredParamIntersectionTypeNumber();
const AddRequiredParamIntersectionTypeBoolean: RequiredParamDefaults["IntersectionType"]["Boolean"] = () => {};
AddRequiredParamIntersectionTypeBoolean();
const AddRequiredParamIntersectionTypeAny: RequiredParamDefaults["IntersectionType"]["Any"] = () => {};
AddRequiredParamIntersectionTypeAny();

// Optional
const AddOptionalParamIntersectionTypeLiteral: OptionalParamDefaults["IntersectionType"]["Literal"] = () => {};
AddOptionalParamIntersectionTypeLiteral();
const AddOptionalParamIntersectionTypeObject: OptionalParamDefaults["IntersectionType"]["Object"] = () => {};
AddOptionalParamIntersectionTypeObject();
const AddOptionalParamIntersectionTypeString: OptionalParamDefaults["IntersectionType"]["String"] = () => {};
AddOptionalParamIntersectionTypeString();
const AddOptionalParamIntersectionTypeNumber: OptionalParamDefaults["IntersectionType"]["Number"] = () => {};
AddOptionalParamIntersectionTypeNumber();
const AddOptionalParamIntersectionTypeBoolean: OptionalParamDefaults["IntersectionType"]["Boolean"] = () => {};
AddOptionalParamIntersectionTypeBoolean();
const AddOptionalParamIntersectionTypeAny: OptionalParamDefaults["IntersectionType"]["Any"] = () => {};
AddOptionalParamIntersectionTypeAny();
// Add Parameter - TypeLiteral
// Required
const AddRequiredParamTypeLiteralLiteral: RequiredParamDefaults["TypeLiteral"]["Literal"] = () => {};
AddRequiredParamTypeLiteralLiteral();
const AddRequiredParamTypeLiteralObject: RequiredParamDefaults["TypeLiteral"]["Object"] = () => {};
AddRequiredParamTypeLiteralObject();
const AddRequiredParamTypeLiteralString: RequiredParamDefaults["TypeLiteral"]["String"] = () => {};
AddRequiredParamTypeLiteralString();
const AddRequiredParamTypeLiteralNumber: RequiredParamDefaults["TypeLiteral"]["Number"] = () => {};
AddRequiredParamTypeLiteralNumber();
const AddRequiredParamTypeLiteralBoolean: RequiredParamDefaults["TypeLiteral"]["Boolean"] = () => {};
AddRequiredParamTypeLiteralBoolean();
const AddRequiredParamTypeLiteralAny: RequiredParamDefaults["TypeLiteral"]["Any"] = () => {};
AddRequiredParamTypeLiteralAny();

// Optional
const AddOptionalParamTypeLiteralLiteral: OptionalParamDefaults["TypeLiteral"]["Literal"] = () => {};
AddOptionalParamTypeLiteralLiteral();
const AddOptionalParamTypeLiteralObject: OptionalParamDefaults["TypeLiteral"]["Object"] = () => {};
AddOptionalParamTypeLiteralObject();
const AddOptionalParamTypeLiteralString: OptionalParamDefaults["TypeLiteral"]["String"] = () => {};
AddOptionalParamTypeLiteralString();
const AddOptionalParamTypeLiteralNumber: OptionalParamDefaults["TypeLiteral"]["Number"] = () => {};
AddOptionalParamTypeLiteralNumber();
const AddOptionalParamTypeLiteralBoolean: OptionalParamDefaults["TypeLiteral"]["Boolean"] = () => {};
AddOptionalParamTypeLiteralBoolean();
const AddOptionalParamTypeLiteralAny: OptionalParamDefaults["TypeLiteral"]["Any"] = () => {};
AddOptionalParamTypeLiteralAny();
// Add Parameter - TupleType
// Required
const AddRequiredParamTupleTypeLiteral: RequiredParamDefaults["TupleType"]["Literal"] = () => {};
AddRequiredParamTupleTypeLiteral();
const AddRequiredParamTupleTypeObject: RequiredParamDefaults["TupleType"]["Object"] = () => {};
AddRequiredParamTupleTypeObject();
const AddRequiredParamTupleTypeString: RequiredParamDefaults["TupleType"]["String"] = () => {};
AddRequiredParamTupleTypeString();
const AddRequiredParamTupleTypeNumber: RequiredParamDefaults["TupleType"]["Number"] = () => {};
AddRequiredParamTupleTypeNumber();
const AddRequiredParamTupleTypeBoolean: RequiredParamDefaults["TupleType"]["Boolean"] = () => {};
AddRequiredParamTupleTypeBoolean();
const AddRequiredParamTupleTypeAny: RequiredParamDefaults["TupleType"]["Any"] = () => {};
AddRequiredParamTupleTypeAny();

// Optional
const AddOptionalParamTupleTypeLiteral: OptionalParamDefaults["TupleType"]["Literal"] = () => {};
AddOptionalParamTupleTypeLiteral();
const AddOptionalParamTupleTypeObject: OptionalParamDefaults["TupleType"]["Object"] = () => {};
AddOptionalParamTupleTypeObject();
const AddOptionalParamTupleTypeString: OptionalParamDefaults["TupleType"]["String"] = () => {};
AddOptionalParamTupleTypeString();
const AddOptionalParamTupleTypeNumber: OptionalParamDefaults["TupleType"]["Number"] = () => {};
AddOptionalParamTupleTypeNumber();
const AddOptionalParamTupleTypeBoolean: OptionalParamDefaults["TupleType"]["Boolean"] = () => {};
AddOptionalParamTupleTypeBoolean();
const AddOptionalParamTupleTypeAny: OptionalParamDefaults["TupleType"]["Any"] = () => {};
AddOptionalParamTupleTypeAny();
// Add Parameter - ArrayType
// Required
const AddRequiredParamArrayTypeLiteral: RequiredParamDefaults["ArrayType"]["Literal"] = () => {};
AddRequiredParamArrayTypeLiteral();
const AddRequiredParamArrayTypeObject: RequiredParamDefaults["ArrayType"]["Object"] = () => {};
AddRequiredParamArrayTypeObject();
const AddRequiredParamArrayTypeString: RequiredParamDefaults["ArrayType"]["String"] = () => {};
AddRequiredParamArrayTypeString();
const AddRequiredParamArrayTypeNumber: RequiredParamDefaults["ArrayType"]["Number"] = () => {};
AddRequiredParamArrayTypeNumber();
const AddRequiredParamArrayTypeBoolean: RequiredParamDefaults["ArrayType"]["Boolean"] = () => {};
AddRequiredParamArrayTypeBoolean();
const AddRequiredParamArrayTypeAny: RequiredParamDefaults["ArrayType"]["Any"] = () => {};
AddRequiredParamArrayTypeAny();

// Optional
const AddOptionalParamArrayTypeLiteral: OptionalParamDefaults["ArrayType"]["Literal"] = () => {};
AddOptionalParamArrayTypeLiteral();
const AddOptionalParamArrayTypeObject: OptionalParamDefaults["ArrayType"]["Object"] = () => {};
AddOptionalParamArrayTypeObject();
const AddOptionalParamArrayTypeString: OptionalParamDefaults["ArrayType"]["String"] = () => {};
AddOptionalParamArrayTypeString();
const AddOptionalParamArrayTypeNumber: OptionalParamDefaults["ArrayType"]["Number"] = () => {};
AddOptionalParamArrayTypeNumber();
const AddOptionalParamArrayTypeBoolean: OptionalParamDefaults["ArrayType"]["Boolean"] = () => {};
AddOptionalParamArrayTypeBoolean();
const AddOptionalParamArrayTypeAny: OptionalParamDefaults["ArrayType"]["Any"] = () => {};
AddOptionalParamArrayTypeAny();
// Add Parameter - FunctionType
// Required
const AddRequiredParamFunctionTypeLiteral: RequiredParamDefaults["FunctionType"]["Literal"] = () => {};
AddRequiredParamFunctionTypeLiteral();
const AddRequiredParamFunctionTypeObject: RequiredParamDefaults["FunctionType"]["Object"] = () => {};
AddRequiredParamFunctionTypeObject();
const AddRequiredParamFunctionTypeString: RequiredParamDefaults["FunctionType"]["String"] = () => {};
AddRequiredParamFunctionTypeString();
const AddRequiredParamFunctionTypeNumber: RequiredParamDefaults["FunctionType"]["Number"] = () => {};
AddRequiredParamFunctionTypeNumber();
const AddRequiredParamFunctionTypeBoolean: RequiredParamDefaults["FunctionType"]["Boolean"] = () => {};
AddRequiredParamFunctionTypeBoolean();
const AddRequiredParamFunctionTypeAny: RequiredParamDefaults["FunctionType"]["Any"] = () => {};
AddRequiredParamFunctionTypeAny();

// Optional
const AddOptionalParamFunctionTypeLiteral: OptionalParamDefaults["FunctionType"]["Literal"] = () => {};
AddOptionalParamFunctionTypeLiteral();
const AddOptionalParamFunctionTypeObject: OptionalParamDefaults["FunctionType"]["Object"] = () => {};
AddOptionalParamFunctionTypeObject();
const AddOptionalParamFunctionTypeString: OptionalParamDefaults["FunctionType"]["String"] = () => {};
AddOptionalParamFunctionTypeString();
const AddOptionalParamFunctionTypeNumber: OptionalParamDefaults["FunctionType"]["Number"] = () => {};
AddOptionalParamFunctionTypeNumber();
const AddOptionalParamFunctionTypeBoolean: OptionalParamDefaults["FunctionType"]["Boolean"] = () => {};
AddOptionalParamFunctionTypeBoolean();
const AddOptionalParamFunctionTypeAny: OptionalParamDefaults["FunctionType"]["Any"] = () => {};
AddOptionalParamFunctionTypeAny();
// Add Parameter - ConstructorType
// Required
const AddRequiredParamConstructorTypeLiteral: RequiredParamDefaults["ConstructorType"]["Literal"] = () => {};
AddRequiredParamConstructorTypeLiteral();
const AddRequiredParamConstructorTypeObject: RequiredParamDefaults["ConstructorType"]["Object"] = () => {};
AddRequiredParamConstructorTypeObject();
const AddRequiredParamConstructorTypeString: RequiredParamDefaults["ConstructorType"]["String"] = () => {};
AddRequiredParamConstructorTypeString();
const AddRequiredParamConstructorTypeNumber: RequiredParamDefaults["ConstructorType"]["Number"] = () => {};
AddRequiredParamConstructorTypeNumber();
const AddRequiredParamConstructorTypeBoolean: RequiredParamDefaults["ConstructorType"]["Boolean"] = () => {};
AddRequiredParamConstructorTypeBoolean();
const AddRequiredParamConstructorTypeAny: RequiredParamDefaults["ConstructorType"]["Any"] = () => {};
AddRequiredParamConstructorTypeAny();

// Optional
const AddOptionalParamConstructorTypeLiteral: OptionalParamDefaults["ConstructorType"]["Literal"] = () => {};
AddOptionalParamConstructorTypeLiteral();
const AddOptionalParamConstructorTypeObject: OptionalParamDefaults["ConstructorType"]["Object"] = () => {};
AddOptionalParamConstructorTypeObject();
const AddOptionalParamConstructorTypeString: OptionalParamDefaults["ConstructorType"]["String"] = () => {};
AddOptionalParamConstructorTypeString();
const AddOptionalParamConstructorTypeNumber: OptionalParamDefaults["ConstructorType"]["Number"] = () => {};
AddOptionalParamConstructorTypeNumber();
const AddOptionalParamConstructorTypeBoolean: OptionalParamDefaults["ConstructorType"]["Boolean"] = () => {};
AddOptionalParamConstructorTypeBoolean();
const AddOptionalParamConstructorTypeAny: OptionalParamDefaults["ConstructorType"]["Any"] = () => {};
AddOptionalParamConstructorTypeAny();
