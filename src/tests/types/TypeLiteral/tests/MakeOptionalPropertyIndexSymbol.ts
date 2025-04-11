import { Defaults as GeneralDefaults } from "../../defaults";
import {
  PropertySignatureDefaults,
  MappedTypeDefaults,
  IndexNumberDefaults,
  IndexStringDefaults,
  IndexSymbolDefaults,
  IndexTemplateLiteralDefaults,
  EmptyTypeLiteral,
} from "../defaults";
import {
  OptionalPropertySignatureDefaults,
  OptionalMappedTypeDefaults,
  OptionalIndexNumberDefaults,
  OptionalIndexStringDefaults,
  OptionalIndexSymbolDefaults,
  OptionalIndexTemplateLiteralDefaults,
} from "../defaults";

/*
 * Make Optional Property IndexSymbol
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Make Optional Property IndexSymbol - ParenthesizedType
const PropertySignatureIndexSymbolParenthesizedTypeLiteral: IndexSymbolDefaults["ParenthesizedType"]["Literal"] =
  {};
const MakeOptionalPropertyIndexSymbolParenthesizedTypeLiteral: OptionalIndexSymbolDefaults["ParenthesizedType"]["Literal"] =
  {};
const PropertySignatureIndexSymbolParenthesizedTypeObject: IndexSymbolDefaults["ParenthesizedType"]["Object"] =
  {};
const MakeOptionalPropertyIndexSymbolParenthesizedTypeObject: OptionalIndexSymbolDefaults["ParenthesizedType"]["Object"] =
  {};
const PropertySignatureIndexSymbolParenthesizedTypeString: IndexSymbolDefaults["ParenthesizedType"]["String"] =
  {};
const MakeOptionalPropertyIndexSymbolParenthesizedTypeString: OptionalIndexSymbolDefaults["ParenthesizedType"]["String"] =
  {};
const PropertySignatureIndexSymbolParenthesizedTypeNumber: IndexSymbolDefaults["ParenthesizedType"]["Number"] =
  {};
const MakeOptionalPropertyIndexSymbolParenthesizedTypeNumber: OptionalIndexSymbolDefaults["ParenthesizedType"]["Number"] =
  {};
const PropertySignatureIndexSymbolParenthesizedTypeBoolean: IndexSymbolDefaults["ParenthesizedType"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexSymbolParenthesizedTypeBoolean: OptionalIndexSymbolDefaults["ParenthesizedType"]["Boolean"] =
  {};
const PropertySignatureIndexSymbolParenthesizedTypeAny: IndexSymbolDefaults["ParenthesizedType"]["Any"] =
  {};
const MakeOptionalPropertyIndexSymbolParenthesizedTypeAny: OptionalIndexSymbolDefaults["ParenthesizedType"]["Any"] =
  {};

// Make Optional Property IndexSymbol - TypeReferenceBuiltin
const PropertySignatureIndexSymbolTypeReferenceBuiltinLiteral: IndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeReferenceBuiltinLiteral: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const PropertySignatureIndexSymbolTypeReferenceBuiltinObject: IndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeReferenceBuiltinObject: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const PropertySignatureIndexSymbolTypeReferenceBuiltinString: IndexSymbolDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeReferenceBuiltinString: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const PropertySignatureIndexSymbolTypeReferenceBuiltinNumber: IndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeReferenceBuiltinNumber: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const PropertySignatureIndexSymbolTypeReferenceBuiltinBoolean: IndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeReferenceBuiltinBoolean: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const PropertySignatureIndexSymbolTypeReferenceBuiltinAny: IndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeReferenceBuiltinAny: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] =
  {};

// Make Optional Property IndexSymbol - TypeReferencePredefined
const PropertySignatureIndexSymbolTypeReferencePredefinedLiteral: IndexSymbolDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeReferencePredefinedLiteral: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const PropertySignatureIndexSymbolTypeReferencePredefinedObject: IndexSymbolDefaults["TypeReferencePredefined"]["Object"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeReferencePredefinedObject: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Object"] =
  {};
const PropertySignatureIndexSymbolTypeReferencePredefinedString: IndexSymbolDefaults["TypeReferencePredefined"]["String"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeReferencePredefinedString: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["String"] =
  {};
const PropertySignatureIndexSymbolTypeReferencePredefinedNumber: IndexSymbolDefaults["TypeReferencePredefined"]["Number"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeReferencePredefinedNumber: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Number"] =
  {};
const PropertySignatureIndexSymbolTypeReferencePredefinedBoolean: IndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeReferencePredefinedBoolean: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const PropertySignatureIndexSymbolTypeReferencePredefinedAny: IndexSymbolDefaults["TypeReferencePredefined"]["Any"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeReferencePredefinedAny: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Any"] =
  {};

// Make Optional Property IndexSymbol - UnionType
const PropertySignatureIndexSymbolUnionTypeLiteral: IndexSymbolDefaults["UnionType"]["Literal"] =
  {};
const MakeOptionalPropertyIndexSymbolUnionTypeLiteral: OptionalIndexSymbolDefaults["UnionType"]["Literal"] =
  {};
const PropertySignatureIndexSymbolUnionTypeObject: IndexSymbolDefaults["UnionType"]["Object"] =
  {};
const MakeOptionalPropertyIndexSymbolUnionTypeObject: OptionalIndexSymbolDefaults["UnionType"]["Object"] =
  {};
const PropertySignatureIndexSymbolUnionTypeString: IndexSymbolDefaults["UnionType"]["String"] =
  {};
const MakeOptionalPropertyIndexSymbolUnionTypeString: OptionalIndexSymbolDefaults["UnionType"]["String"] =
  {};
const PropertySignatureIndexSymbolUnionTypeNumber: IndexSymbolDefaults["UnionType"]["Number"] =
  {};
const MakeOptionalPropertyIndexSymbolUnionTypeNumber: OptionalIndexSymbolDefaults["UnionType"]["Number"] =
  {};
const PropertySignatureIndexSymbolUnionTypeBoolean: IndexSymbolDefaults["UnionType"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexSymbolUnionTypeBoolean: OptionalIndexSymbolDefaults["UnionType"]["Boolean"] =
  {};
const PropertySignatureIndexSymbolUnionTypeAny: IndexSymbolDefaults["UnionType"]["Any"] =
  {};
const MakeOptionalPropertyIndexSymbolUnionTypeAny: OptionalIndexSymbolDefaults["UnionType"]["Any"] =
  {};

// Make Optional Property IndexSymbol - IntersectionType
const PropertySignatureIndexSymbolIntersectionTypeLiteral: IndexSymbolDefaults["IntersectionType"]["Literal"] =
  {};
const MakeOptionalPropertyIndexSymbolIntersectionTypeLiteral: OptionalIndexSymbolDefaults["IntersectionType"]["Literal"] =
  {};
const PropertySignatureIndexSymbolIntersectionTypeObject: IndexSymbolDefaults["IntersectionType"]["Object"] =
  {};
const MakeOptionalPropertyIndexSymbolIntersectionTypeObject: OptionalIndexSymbolDefaults["IntersectionType"]["Object"] =
  {};
const PropertySignatureIndexSymbolIntersectionTypeString: IndexSymbolDefaults["IntersectionType"]["String"] =
  {};
const MakeOptionalPropertyIndexSymbolIntersectionTypeString: OptionalIndexSymbolDefaults["IntersectionType"]["String"] =
  {};
const PropertySignatureIndexSymbolIntersectionTypeNumber: IndexSymbolDefaults["IntersectionType"]["Number"] =
  {};
const MakeOptionalPropertyIndexSymbolIntersectionTypeNumber: OptionalIndexSymbolDefaults["IntersectionType"]["Number"] =
  {};
const PropertySignatureIndexSymbolIntersectionTypeBoolean: IndexSymbolDefaults["IntersectionType"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexSymbolIntersectionTypeBoolean: OptionalIndexSymbolDefaults["IntersectionType"]["Boolean"] =
  {};
const PropertySignatureIndexSymbolIntersectionTypeAny: IndexSymbolDefaults["IntersectionType"]["Any"] =
  {};
const MakeOptionalPropertyIndexSymbolIntersectionTypeAny: OptionalIndexSymbolDefaults["IntersectionType"]["Any"] =
  {};

// Make Optional Property IndexSymbol - TypeLiteral
const PropertySignatureIndexSymbolTypeLiteralLiteral: IndexSymbolDefaults["TypeLiteral"]["Literal"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeLiteralLiteral: OptionalIndexSymbolDefaults["TypeLiteral"]["Literal"] =
  {};
const PropertySignatureIndexSymbolTypeLiteralObject: IndexSymbolDefaults["TypeLiteral"]["Object"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeLiteralObject: OptionalIndexSymbolDefaults["TypeLiteral"]["Object"] =
  {};
const PropertySignatureIndexSymbolTypeLiteralString: IndexSymbolDefaults["TypeLiteral"]["String"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeLiteralString: OptionalIndexSymbolDefaults["TypeLiteral"]["String"] =
  {};
const PropertySignatureIndexSymbolTypeLiteralNumber: IndexSymbolDefaults["TypeLiteral"]["Number"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeLiteralNumber: OptionalIndexSymbolDefaults["TypeLiteral"]["Number"] =
  {};
const PropertySignatureIndexSymbolTypeLiteralBoolean: IndexSymbolDefaults["TypeLiteral"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeLiteralBoolean: OptionalIndexSymbolDefaults["TypeLiteral"]["Boolean"] =
  {};
const PropertySignatureIndexSymbolTypeLiteralAny: IndexSymbolDefaults["TypeLiteral"]["Any"] =
  {};
const MakeOptionalPropertyIndexSymbolTypeLiteralAny: OptionalIndexSymbolDefaults["TypeLiteral"]["Any"] =
  {};

// Make Optional Property IndexSymbol - TupleType
const PropertySignatureIndexSymbolTupleTypeLiteral: IndexSymbolDefaults["TupleType"]["Literal"] =
  {};
const MakeOptionalPropertyIndexSymbolTupleTypeLiteral: OptionalIndexSymbolDefaults["TupleType"]["Literal"] =
  {};
const PropertySignatureIndexSymbolTupleTypeObject: IndexSymbolDefaults["TupleType"]["Object"] =
  {};
const MakeOptionalPropertyIndexSymbolTupleTypeObject: OptionalIndexSymbolDefaults["TupleType"]["Object"] =
  {};
const PropertySignatureIndexSymbolTupleTypeString: IndexSymbolDefaults["TupleType"]["String"] =
  {};
const MakeOptionalPropertyIndexSymbolTupleTypeString: OptionalIndexSymbolDefaults["TupleType"]["String"] =
  {};
const PropertySignatureIndexSymbolTupleTypeNumber: IndexSymbolDefaults["TupleType"]["Number"] =
  {};
const MakeOptionalPropertyIndexSymbolTupleTypeNumber: OptionalIndexSymbolDefaults["TupleType"]["Number"] =
  {};
const PropertySignatureIndexSymbolTupleTypeBoolean: IndexSymbolDefaults["TupleType"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexSymbolTupleTypeBoolean: OptionalIndexSymbolDefaults["TupleType"]["Boolean"] =
  {};
const PropertySignatureIndexSymbolTupleTypeAny: IndexSymbolDefaults["TupleType"]["Any"] =
  {};
const MakeOptionalPropertyIndexSymbolTupleTypeAny: OptionalIndexSymbolDefaults["TupleType"]["Any"] =
  {};

// Make Optional Property IndexSymbol - ArrayType
const PropertySignatureIndexSymbolArrayTypeLiteral: IndexSymbolDefaults["ArrayType"]["Literal"] =
  {};
const MakeOptionalPropertyIndexSymbolArrayTypeLiteral: OptionalIndexSymbolDefaults["ArrayType"]["Literal"] =
  {};
const PropertySignatureIndexSymbolArrayTypeObject: IndexSymbolDefaults["ArrayType"]["Object"] =
  {};
const MakeOptionalPropertyIndexSymbolArrayTypeObject: OptionalIndexSymbolDefaults["ArrayType"]["Object"] =
  {};
const PropertySignatureIndexSymbolArrayTypeString: IndexSymbolDefaults["ArrayType"]["String"] =
  {};
const MakeOptionalPropertyIndexSymbolArrayTypeString: OptionalIndexSymbolDefaults["ArrayType"]["String"] =
  {};
const PropertySignatureIndexSymbolArrayTypeNumber: IndexSymbolDefaults["ArrayType"]["Number"] =
  {};
const MakeOptionalPropertyIndexSymbolArrayTypeNumber: OptionalIndexSymbolDefaults["ArrayType"]["Number"] =
  {};
const PropertySignatureIndexSymbolArrayTypeBoolean: IndexSymbolDefaults["ArrayType"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexSymbolArrayTypeBoolean: OptionalIndexSymbolDefaults["ArrayType"]["Boolean"] =
  {};
const PropertySignatureIndexSymbolArrayTypeAny: IndexSymbolDefaults["ArrayType"]["Any"] =
  {};
const MakeOptionalPropertyIndexSymbolArrayTypeAny: OptionalIndexSymbolDefaults["ArrayType"]["Any"] =
  {};

// Make Optional Property IndexSymbol - FunctionType
const PropertySignatureIndexSymbolFunctionTypeLiteral: IndexSymbolDefaults["FunctionType"]["Literal"] =
  {};
const MakeOptionalPropertyIndexSymbolFunctionTypeLiteral: OptionalIndexSymbolDefaults["FunctionType"]["Literal"] =
  {};
const PropertySignatureIndexSymbolFunctionTypeObject: IndexSymbolDefaults["FunctionType"]["Object"] =
  {};
const MakeOptionalPropertyIndexSymbolFunctionTypeObject: OptionalIndexSymbolDefaults["FunctionType"]["Object"] =
  {};
const PropertySignatureIndexSymbolFunctionTypeString: IndexSymbolDefaults["FunctionType"]["String"] =
  {};
const MakeOptionalPropertyIndexSymbolFunctionTypeString: OptionalIndexSymbolDefaults["FunctionType"]["String"] =
  {};
const PropertySignatureIndexSymbolFunctionTypeNumber: IndexSymbolDefaults["FunctionType"]["Number"] =
  {};
const MakeOptionalPropertyIndexSymbolFunctionTypeNumber: OptionalIndexSymbolDefaults["FunctionType"]["Number"] =
  {};
const PropertySignatureIndexSymbolFunctionTypeBoolean: IndexSymbolDefaults["FunctionType"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexSymbolFunctionTypeBoolean: OptionalIndexSymbolDefaults["FunctionType"]["Boolean"] =
  {};
const PropertySignatureIndexSymbolFunctionTypeAny: IndexSymbolDefaults["FunctionType"]["Any"] =
  {};
const MakeOptionalPropertyIndexSymbolFunctionTypeAny: OptionalIndexSymbolDefaults["FunctionType"]["Any"] =
  {};

// Make Optional Property IndexSymbol - ConstructorType
const PropertySignatureIndexSymbolConstructorTypeLiteral: IndexSymbolDefaults["ConstructorType"]["Literal"] =
  {};
const MakeOptionalPropertyIndexSymbolConstructorTypeLiteral: OptionalIndexSymbolDefaults["ConstructorType"]["Literal"] =
  {};
const PropertySignatureIndexSymbolConstructorTypeObject: IndexSymbolDefaults["ConstructorType"]["Object"] =
  {};
const MakeOptionalPropertyIndexSymbolConstructorTypeObject: OptionalIndexSymbolDefaults["ConstructorType"]["Object"] =
  {};
const PropertySignatureIndexSymbolConstructorTypeString: IndexSymbolDefaults["ConstructorType"]["String"] =
  {};
const MakeOptionalPropertyIndexSymbolConstructorTypeString: OptionalIndexSymbolDefaults["ConstructorType"]["String"] =
  {};
const PropertySignatureIndexSymbolConstructorTypeNumber: IndexSymbolDefaults["ConstructorType"]["Number"] =
  {};
const MakeOptionalPropertyIndexSymbolConstructorTypeNumber: OptionalIndexSymbolDefaults["ConstructorType"]["Number"] =
  {};
const PropertySignatureIndexSymbolConstructorTypeBoolean: IndexSymbolDefaults["ConstructorType"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexSymbolConstructorTypeBoolean: OptionalIndexSymbolDefaults["ConstructorType"]["Boolean"] =
  {};
const PropertySignatureIndexSymbolConstructorTypeAny: IndexSymbolDefaults["ConstructorType"]["Any"] =
  {};
const MakeOptionalPropertyIndexSymbolConstructorTypeAny: OptionalIndexSymbolDefaults["ConstructorType"]["Any"] =
  {};
