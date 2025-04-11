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

/*
 * Remove Property Signature from IndexSymbol
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Changes
// Remove Property Signature of IndexSymbol - ParenthesizedType
const PropertySignatureIndexSymbolParenthesizedTypeLiteral: IndexSymbolDefaults["ParenthesizedType"]["Literal"] =
  {};
const RemovePropertySignatureIndexSymbolParenthesizedTypeLiteral: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolParenthesizedTypeObject: IndexSymbolDefaults["ParenthesizedType"]["Object"] =
  {};
const RemovePropertySignatureIndexSymbolParenthesizedTypeObject: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolParenthesizedTypeString: IndexSymbolDefaults["ParenthesizedType"]["String"] =
  {};
const RemovePropertySignatureIndexSymbolParenthesizedTypeString: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolParenthesizedTypeNumber: IndexSymbolDefaults["ParenthesizedType"]["Number"] =
  {};
const RemovePropertySignatureIndexSymbolParenthesizedTypeNumber: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolParenthesizedTypeBoolean: IndexSymbolDefaults["ParenthesizedType"]["Boolean"] =
  {};
const RemovePropertySignatureIndexSymbolParenthesizedTypeBoolean: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolParenthesizedTypeAny: IndexSymbolDefaults["ParenthesizedType"]["Any"] =
  {};
const RemovePropertySignatureIndexSymbolParenthesizedTypeAny: EmptyTypeLiteral =
  {};

// Remove Property Signature of IndexSymbol - TypeReferenceBuiltin
const PropertySignatureIndexSymbolTypeReferenceBuiltinLiteral: IndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const RemovePropertySignatureIndexSymbolTypeReferenceBuiltinLiteral: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeReferenceBuiltinObject: IndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const RemovePropertySignatureIndexSymbolTypeReferenceBuiltinObject: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeReferenceBuiltinString: IndexSymbolDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const RemovePropertySignatureIndexSymbolTypeReferenceBuiltinString: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeReferenceBuiltinNumber: IndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const RemovePropertySignatureIndexSymbolTypeReferenceBuiltinNumber: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeReferenceBuiltinBoolean: IndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const RemovePropertySignatureIndexSymbolTypeReferenceBuiltinBoolean: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeReferenceBuiltinAny: IndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] =
  {};
const RemovePropertySignatureIndexSymbolTypeReferenceBuiltinAny: EmptyTypeLiteral =
  {};

// Remove Property Signature of IndexSymbol - TypeReferencePredefined
const PropertySignatureIndexSymbolTypeReferencePredefinedLiteral: IndexSymbolDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const RemovePropertySignatureIndexSymbolTypeReferencePredefinedLiteral: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeReferencePredefinedObject: IndexSymbolDefaults["TypeReferencePredefined"]["Object"] =
  {};
const RemovePropertySignatureIndexSymbolTypeReferencePredefinedObject: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeReferencePredefinedString: IndexSymbolDefaults["TypeReferencePredefined"]["String"] =
  {};
const RemovePropertySignatureIndexSymbolTypeReferencePredefinedString: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeReferencePredefinedNumber: IndexSymbolDefaults["TypeReferencePredefined"]["Number"] =
  {};
const RemovePropertySignatureIndexSymbolTypeReferencePredefinedNumber: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeReferencePredefinedBoolean: IndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const RemovePropertySignatureIndexSymbolTypeReferencePredefinedBoolean: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeReferencePredefinedAny: IndexSymbolDefaults["TypeReferencePredefined"]["Any"] =
  {};
const RemovePropertySignatureIndexSymbolTypeReferencePredefinedAny: EmptyTypeLiteral =
  {};

// Remove Property Signature of IndexSymbol - UnionType
const PropertySignatureIndexSymbolUnionTypeLiteral: IndexSymbolDefaults["UnionType"]["Literal"] =
  {};
const RemovePropertySignatureIndexSymbolUnionTypeLiteral: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolUnionTypeObject: IndexSymbolDefaults["UnionType"]["Object"] =
  {};
const RemovePropertySignatureIndexSymbolUnionTypeObject: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolUnionTypeString: IndexSymbolDefaults["UnionType"]["String"] =
  {};
const RemovePropertySignatureIndexSymbolUnionTypeString: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolUnionTypeNumber: IndexSymbolDefaults["UnionType"]["Number"] =
  {};
const RemovePropertySignatureIndexSymbolUnionTypeNumber: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolUnionTypeBoolean: IndexSymbolDefaults["UnionType"]["Boolean"] =
  {};
const RemovePropertySignatureIndexSymbolUnionTypeBoolean: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolUnionTypeAny: IndexSymbolDefaults["UnionType"]["Any"] =
  {};
const RemovePropertySignatureIndexSymbolUnionTypeAny: EmptyTypeLiteral = {};

// Remove Property Signature of IndexSymbol - IntersectionType
const PropertySignatureIndexSymbolIntersectionTypeLiteral: IndexSymbolDefaults["IntersectionType"]["Literal"] =
  {};
const RemovePropertySignatureIndexSymbolIntersectionTypeLiteral: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolIntersectionTypeObject: IndexSymbolDefaults["IntersectionType"]["Object"] =
  {};
const RemovePropertySignatureIndexSymbolIntersectionTypeObject: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolIntersectionTypeString: IndexSymbolDefaults["IntersectionType"]["String"] =
  {};
const RemovePropertySignatureIndexSymbolIntersectionTypeString: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolIntersectionTypeNumber: IndexSymbolDefaults["IntersectionType"]["Number"] =
  {};
const RemovePropertySignatureIndexSymbolIntersectionTypeNumber: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolIntersectionTypeBoolean: IndexSymbolDefaults["IntersectionType"]["Boolean"] =
  {};
const RemovePropertySignatureIndexSymbolIntersectionTypeBoolean: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolIntersectionTypeAny: IndexSymbolDefaults["IntersectionType"]["Any"] =
  {};
const RemovePropertySignatureIndexSymbolIntersectionTypeAny: EmptyTypeLiteral =
  {};

// Remove Property Signature of IndexSymbol - TypeLiteral
const PropertySignatureIndexSymbolTypeLiteralLiteral: IndexSymbolDefaults["TypeLiteral"]["Literal"] =
  {};
const RemovePropertySignatureIndexSymbolTypeLiteralLiteral: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeLiteralObject: IndexSymbolDefaults["TypeLiteral"]["Object"] =
  {};
const RemovePropertySignatureIndexSymbolTypeLiteralObject: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeLiteralString: IndexSymbolDefaults["TypeLiteral"]["String"] =
  {};
const RemovePropertySignatureIndexSymbolTypeLiteralString: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeLiteralNumber: IndexSymbolDefaults["TypeLiteral"]["Number"] =
  {};
const RemovePropertySignatureIndexSymbolTypeLiteralNumber: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeLiteralBoolean: IndexSymbolDefaults["TypeLiteral"]["Boolean"] =
  {};
const RemovePropertySignatureIndexSymbolTypeLiteralBoolean: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolTypeLiteralAny: IndexSymbolDefaults["TypeLiteral"]["Any"] =
  {};
const RemovePropertySignatureIndexSymbolTypeLiteralAny: EmptyTypeLiteral = {};

// Remove Property Signature of IndexSymbol - TupleType
const PropertySignatureIndexSymbolTupleTypeLiteral: IndexSymbolDefaults["TupleType"]["Literal"] =
  {};
const RemovePropertySignatureIndexSymbolTupleTypeLiteral: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolTupleTypeObject: IndexSymbolDefaults["TupleType"]["Object"] =
  {};
const RemovePropertySignatureIndexSymbolTupleTypeObject: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolTupleTypeString: IndexSymbolDefaults["TupleType"]["String"] =
  {};
const RemovePropertySignatureIndexSymbolTupleTypeString: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolTupleTypeNumber: IndexSymbolDefaults["TupleType"]["Number"] =
  {};
const RemovePropertySignatureIndexSymbolTupleTypeNumber: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolTupleTypeBoolean: IndexSymbolDefaults["TupleType"]["Boolean"] =
  {};
const RemovePropertySignatureIndexSymbolTupleTypeBoolean: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolTupleTypeAny: IndexSymbolDefaults["TupleType"]["Any"] =
  {};
const RemovePropertySignatureIndexSymbolTupleTypeAny: EmptyTypeLiteral = {};

// Remove Property Signature of IndexSymbol - ArrayType
const PropertySignatureIndexSymbolArrayTypeLiteral: IndexSymbolDefaults["ArrayType"]["Literal"] =
  {};
const RemovePropertySignatureIndexSymbolArrayTypeLiteral: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolArrayTypeObject: IndexSymbolDefaults["ArrayType"]["Object"] =
  {};
const RemovePropertySignatureIndexSymbolArrayTypeObject: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolArrayTypeString: IndexSymbolDefaults["ArrayType"]["String"] =
  {};
const RemovePropertySignatureIndexSymbolArrayTypeString: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolArrayTypeNumber: IndexSymbolDefaults["ArrayType"]["Number"] =
  {};
const RemovePropertySignatureIndexSymbolArrayTypeNumber: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolArrayTypeBoolean: IndexSymbolDefaults["ArrayType"]["Boolean"] =
  {};
const RemovePropertySignatureIndexSymbolArrayTypeBoolean: EmptyTypeLiteral = {};
const PropertySignatureIndexSymbolArrayTypeAny: IndexSymbolDefaults["ArrayType"]["Any"] =
  {};
const RemovePropertySignatureIndexSymbolArrayTypeAny: EmptyTypeLiteral = {};

// Remove Property Signature of IndexSymbol - FunctionType
const PropertySignatureIndexSymbolFunctionTypeLiteral: IndexSymbolDefaults["FunctionType"]["Literal"] =
  {};
const RemovePropertySignatureIndexSymbolFunctionTypeLiteral: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolFunctionTypeObject: IndexSymbolDefaults["FunctionType"]["Object"] =
  {};
const RemovePropertySignatureIndexSymbolFunctionTypeObject: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolFunctionTypeString: IndexSymbolDefaults["FunctionType"]["String"] =
  {};
const RemovePropertySignatureIndexSymbolFunctionTypeString: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolFunctionTypeNumber: IndexSymbolDefaults["FunctionType"]["Number"] =
  {};
const RemovePropertySignatureIndexSymbolFunctionTypeNumber: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolFunctionTypeBoolean: IndexSymbolDefaults["FunctionType"]["Boolean"] =
  {};
const RemovePropertySignatureIndexSymbolFunctionTypeBoolean: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolFunctionTypeAny: IndexSymbolDefaults["FunctionType"]["Any"] =
  {};
const RemovePropertySignatureIndexSymbolFunctionTypeAny: EmptyTypeLiteral = {};

// Remove Property Signature of IndexSymbol - ConstructorType
const PropertySignatureIndexSymbolConstructorTypeLiteral: IndexSymbolDefaults["ConstructorType"]["Literal"] =
  {};
const RemovePropertySignatureIndexSymbolConstructorTypeLiteral: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolConstructorTypeObject: IndexSymbolDefaults["ConstructorType"]["Object"] =
  {};
const RemovePropertySignatureIndexSymbolConstructorTypeObject: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolConstructorTypeString: IndexSymbolDefaults["ConstructorType"]["String"] =
  {};
const RemovePropertySignatureIndexSymbolConstructorTypeString: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolConstructorTypeNumber: IndexSymbolDefaults["ConstructorType"]["Number"] =
  {};
const RemovePropertySignatureIndexSymbolConstructorTypeNumber: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolConstructorTypeBoolean: IndexSymbolDefaults["ConstructorType"]["Boolean"] =
  {};
const RemovePropertySignatureIndexSymbolConstructorTypeBoolean: EmptyTypeLiteral =
  {};
const PropertySignatureIndexSymbolConstructorTypeAny: IndexSymbolDefaults["ConstructorType"]["Any"] =
  {};
const RemovePropertySignatureIndexSymbolConstructorTypeAny: EmptyTypeLiteral =
  {};
