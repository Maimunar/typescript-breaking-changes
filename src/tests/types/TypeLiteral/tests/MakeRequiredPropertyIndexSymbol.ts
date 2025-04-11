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
 * Make Required Property IndexSymbol
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Make Optional Property IndexSymbol - ParenthesizedType
const OptionalPropertySignatureIndexSymbolParenthesizedTypeLiteral: OptionalIndexSymbolDefaults["ParenthesizedType"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolParenthesizedTypeLiteral: OptionalIndexSymbolDefaults["ParenthesizedType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolParenthesizedTypeLiteral: IndexSymbolDefaults["ParenthesizedType"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolParenthesizedTypeLiteral: IndexSymbolDefaults["ParenthesizedType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexSymbolParenthesizedTypeObject: OptionalIndexSymbolDefaults["ParenthesizedType"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolParenthesizedTypeObject: OptionalIndexSymbolDefaults["ParenthesizedType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolParenthesizedTypeObject: IndexSymbolDefaults["ParenthesizedType"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolParenthesizedTypeObject: IndexSymbolDefaults["ParenthesizedType"]["Object"] =
  {};
const OptionalPropertySignatureIndexSymbolParenthesizedTypeString: OptionalIndexSymbolDefaults["ParenthesizedType"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolParenthesizedTypeString: OptionalIndexSymbolDefaults["ParenthesizedType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolParenthesizedTypeString: IndexSymbolDefaults["ParenthesizedType"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolParenthesizedTypeString: IndexSymbolDefaults["ParenthesizedType"]["String"] =
  {};
const OptionalPropertySignatureIndexSymbolParenthesizedTypeNumber: OptionalIndexSymbolDefaults["ParenthesizedType"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolParenthesizedTypeNumber: OptionalIndexSymbolDefaults["ParenthesizedType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolParenthesizedTypeNumber: IndexSymbolDefaults["ParenthesizedType"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolParenthesizedTypeNumber: IndexSymbolDefaults["ParenthesizedType"]["Number"] =
  {};
const OptionalPropertySignatureIndexSymbolParenthesizedTypeBoolean: OptionalIndexSymbolDefaults["ParenthesizedType"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolParenthesizedTypeBoolean: OptionalIndexSymbolDefaults["ParenthesizedType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolParenthesizedTypeBoolean: IndexSymbolDefaults["ParenthesizedType"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolParenthesizedTypeBoolean: IndexSymbolDefaults["ParenthesizedType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexSymbolParenthesizedTypeAny: OptionalIndexSymbolDefaults["ParenthesizedType"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolParenthesizedTypeAny: OptionalIndexSymbolDefaults["ParenthesizedType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolParenthesizedTypeAny: IndexSymbolDefaults["ParenthesizedType"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolParenthesizedTypeAny: IndexSymbolDefaults["ParenthesizedType"]["Any"] =
  {};

// Make Optional Property IndexSymbol - TypeReferenceBuiltin
const OptionalPropertySignatureIndexSymbolTypeReferenceBuiltinLiteral: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeReferenceBuiltinLiteral: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeReferenceBuiltinLiteral: IndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeReferenceBuiltinLiteral: IndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeReferenceBuiltinObject: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeReferenceBuiltinObject: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeReferenceBuiltinObject: IndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeReferenceBuiltinObject: IndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeReferenceBuiltinString: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeReferenceBuiltinString: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeReferenceBuiltinString: IndexSymbolDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeReferenceBuiltinString: IndexSymbolDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeReferenceBuiltinNumber: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeReferenceBuiltinNumber: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeReferenceBuiltinNumber: IndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeReferenceBuiltinNumber: IndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeReferenceBuiltinBoolean: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeReferenceBuiltinBoolean: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeReferenceBuiltinBoolean: IndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeReferenceBuiltinBoolean: IndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeReferenceBuiltinAny: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeReferenceBuiltinAny: OptionalIndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeReferenceBuiltinAny: IndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeReferenceBuiltinAny: IndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] =
  {};

// Make Optional Property IndexSymbol - TypeReferencePredefined
const OptionalPropertySignatureIndexSymbolTypeReferencePredefinedLiteral: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeReferencePredefinedLiteral: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeReferencePredefinedLiteral: IndexSymbolDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeReferencePredefinedLiteral: IndexSymbolDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeReferencePredefinedObject: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeReferencePredefinedObject: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeReferencePredefinedObject: IndexSymbolDefaults["TypeReferencePredefined"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeReferencePredefinedObject: IndexSymbolDefaults["TypeReferencePredefined"]["Object"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeReferencePredefinedString: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeReferencePredefinedString: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeReferencePredefinedString: IndexSymbolDefaults["TypeReferencePredefined"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeReferencePredefinedString: IndexSymbolDefaults["TypeReferencePredefined"]["String"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeReferencePredefinedNumber: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeReferencePredefinedNumber: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeReferencePredefinedNumber: IndexSymbolDefaults["TypeReferencePredefined"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeReferencePredefinedNumber: IndexSymbolDefaults["TypeReferencePredefined"]["Number"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeReferencePredefinedBoolean: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeReferencePredefinedBoolean: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeReferencePredefinedBoolean: IndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeReferencePredefinedBoolean: IndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeReferencePredefinedAny: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeReferencePredefinedAny: OptionalIndexSymbolDefaults["TypeReferencePredefined"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeReferencePredefinedAny: IndexSymbolDefaults["TypeReferencePredefined"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeReferencePredefinedAny: IndexSymbolDefaults["TypeReferencePredefined"]["Any"] =
  {};

// Make Optional Property IndexSymbol - UnionType
const OptionalPropertySignatureIndexSymbolUnionTypeLiteral: OptionalIndexSymbolDefaults["UnionType"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolUnionTypeLiteral: OptionalIndexSymbolDefaults["UnionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolUnionTypeLiteral: IndexSymbolDefaults["UnionType"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolUnionTypeLiteral: IndexSymbolDefaults["UnionType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexSymbolUnionTypeObject: OptionalIndexSymbolDefaults["UnionType"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolUnionTypeObject: OptionalIndexSymbolDefaults["UnionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolUnionTypeObject: IndexSymbolDefaults["UnionType"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolUnionTypeObject: IndexSymbolDefaults["UnionType"]["Object"] =
  {};
const OptionalPropertySignatureIndexSymbolUnionTypeString: OptionalIndexSymbolDefaults["UnionType"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolUnionTypeString: OptionalIndexSymbolDefaults["UnionType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolUnionTypeString: IndexSymbolDefaults["UnionType"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolUnionTypeString: IndexSymbolDefaults["UnionType"]["String"] =
  {};
const OptionalPropertySignatureIndexSymbolUnionTypeNumber: OptionalIndexSymbolDefaults["UnionType"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolUnionTypeNumber: OptionalIndexSymbolDefaults["UnionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolUnionTypeNumber: IndexSymbolDefaults["UnionType"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolUnionTypeNumber: IndexSymbolDefaults["UnionType"]["Number"] =
  {};
const OptionalPropertySignatureIndexSymbolUnionTypeBoolean: OptionalIndexSymbolDefaults["UnionType"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolUnionTypeBoolean: OptionalIndexSymbolDefaults["UnionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolUnionTypeBoolean: IndexSymbolDefaults["UnionType"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolUnionTypeBoolean: IndexSymbolDefaults["UnionType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexSymbolUnionTypeAny: OptionalIndexSymbolDefaults["UnionType"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolUnionTypeAny: OptionalIndexSymbolDefaults["UnionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolUnionTypeAny: IndexSymbolDefaults["UnionType"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolUnionTypeAny: IndexSymbolDefaults["UnionType"]["Any"] =
  {};

// Make Optional Property IndexSymbol - IntersectionType
const OptionalPropertySignatureIndexSymbolIntersectionTypeLiteral: OptionalIndexSymbolDefaults["IntersectionType"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolIntersectionTypeLiteral: OptionalIndexSymbolDefaults["IntersectionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolIntersectionTypeLiteral: IndexSymbolDefaults["IntersectionType"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolIntersectionTypeLiteral: IndexSymbolDefaults["IntersectionType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexSymbolIntersectionTypeObject: OptionalIndexSymbolDefaults["IntersectionType"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolIntersectionTypeObject: OptionalIndexSymbolDefaults["IntersectionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolIntersectionTypeObject: IndexSymbolDefaults["IntersectionType"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolIntersectionTypeObject: IndexSymbolDefaults["IntersectionType"]["Object"] =
  {};
const OptionalPropertySignatureIndexSymbolIntersectionTypeString: OptionalIndexSymbolDefaults["IntersectionType"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolIntersectionTypeString: OptionalIndexSymbolDefaults["IntersectionType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolIntersectionTypeString: IndexSymbolDefaults["IntersectionType"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolIntersectionTypeString: IndexSymbolDefaults["IntersectionType"]["String"] =
  {};
const OptionalPropertySignatureIndexSymbolIntersectionTypeNumber: OptionalIndexSymbolDefaults["IntersectionType"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolIntersectionTypeNumber: OptionalIndexSymbolDefaults["IntersectionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolIntersectionTypeNumber: IndexSymbolDefaults["IntersectionType"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolIntersectionTypeNumber: IndexSymbolDefaults["IntersectionType"]["Number"] =
  {};
const OptionalPropertySignatureIndexSymbolIntersectionTypeBoolean: OptionalIndexSymbolDefaults["IntersectionType"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolIntersectionTypeBoolean: OptionalIndexSymbolDefaults["IntersectionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolIntersectionTypeBoolean: IndexSymbolDefaults["IntersectionType"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolIntersectionTypeBoolean: IndexSymbolDefaults["IntersectionType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexSymbolIntersectionTypeAny: OptionalIndexSymbolDefaults["IntersectionType"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolIntersectionTypeAny: OptionalIndexSymbolDefaults["IntersectionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolIntersectionTypeAny: IndexSymbolDefaults["IntersectionType"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolIntersectionTypeAny: IndexSymbolDefaults["IntersectionType"]["Any"] =
  {};

// Make Optional Property IndexSymbol - TypeLiteral
const OptionalPropertySignatureIndexSymbolTypeLiteralLiteral: OptionalIndexSymbolDefaults["TypeLiteral"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeLiteralLiteral: OptionalIndexSymbolDefaults["TypeLiteral"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeLiteralLiteral: IndexSymbolDefaults["TypeLiteral"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeLiteralLiteral: IndexSymbolDefaults["TypeLiteral"]["Literal"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeLiteralObject: OptionalIndexSymbolDefaults["TypeLiteral"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeLiteralObject: OptionalIndexSymbolDefaults["TypeLiteral"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeLiteralObject: IndexSymbolDefaults["TypeLiteral"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeLiteralObject: IndexSymbolDefaults["TypeLiteral"]["Object"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeLiteralString: OptionalIndexSymbolDefaults["TypeLiteral"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeLiteralString: OptionalIndexSymbolDefaults["TypeLiteral"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeLiteralString: IndexSymbolDefaults["TypeLiteral"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeLiteralString: IndexSymbolDefaults["TypeLiteral"]["String"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeLiteralNumber: OptionalIndexSymbolDefaults["TypeLiteral"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeLiteralNumber: OptionalIndexSymbolDefaults["TypeLiteral"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeLiteralNumber: IndexSymbolDefaults["TypeLiteral"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeLiteralNumber: IndexSymbolDefaults["TypeLiteral"]["Number"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeLiteralBoolean: OptionalIndexSymbolDefaults["TypeLiteral"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeLiteralBoolean: OptionalIndexSymbolDefaults["TypeLiteral"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeLiteralBoolean: IndexSymbolDefaults["TypeLiteral"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeLiteralBoolean: IndexSymbolDefaults["TypeLiteral"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexSymbolTypeLiteralAny: OptionalIndexSymbolDefaults["TypeLiteral"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTypeLiteralAny: OptionalIndexSymbolDefaults["TypeLiteral"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTypeLiteralAny: IndexSymbolDefaults["TypeLiteral"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTypeLiteralAny: IndexSymbolDefaults["TypeLiteral"]["Any"] =
  {};

// Make Optional Property IndexSymbol - TupleType
const OptionalPropertySignatureIndexSymbolTupleTypeLiteral: OptionalIndexSymbolDefaults["TupleType"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTupleTypeLiteral: OptionalIndexSymbolDefaults["TupleType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTupleTypeLiteral: IndexSymbolDefaults["TupleType"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTupleTypeLiteral: IndexSymbolDefaults["TupleType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexSymbolTupleTypeObject: OptionalIndexSymbolDefaults["TupleType"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTupleTypeObject: OptionalIndexSymbolDefaults["TupleType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTupleTypeObject: IndexSymbolDefaults["TupleType"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTupleTypeObject: IndexSymbolDefaults["TupleType"]["Object"] =
  {};
const OptionalPropertySignatureIndexSymbolTupleTypeString: OptionalIndexSymbolDefaults["TupleType"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTupleTypeString: OptionalIndexSymbolDefaults["TupleType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTupleTypeString: IndexSymbolDefaults["TupleType"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTupleTypeString: IndexSymbolDefaults["TupleType"]["String"] =
  {};
const OptionalPropertySignatureIndexSymbolTupleTypeNumber: OptionalIndexSymbolDefaults["TupleType"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTupleTypeNumber: OptionalIndexSymbolDefaults["TupleType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTupleTypeNumber: IndexSymbolDefaults["TupleType"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTupleTypeNumber: IndexSymbolDefaults["TupleType"]["Number"] =
  {};
const OptionalPropertySignatureIndexSymbolTupleTypeBoolean: OptionalIndexSymbolDefaults["TupleType"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTupleTypeBoolean: OptionalIndexSymbolDefaults["TupleType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTupleTypeBoolean: IndexSymbolDefaults["TupleType"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTupleTypeBoolean: IndexSymbolDefaults["TupleType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexSymbolTupleTypeAny: OptionalIndexSymbolDefaults["TupleType"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolTupleTypeAny: OptionalIndexSymbolDefaults["TupleType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolTupleTypeAny: IndexSymbolDefaults["TupleType"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolTupleTypeAny: IndexSymbolDefaults["TupleType"]["Any"] =
  {};

// Make Optional Property IndexSymbol - ArrayType
const OptionalPropertySignatureIndexSymbolArrayTypeLiteral: OptionalIndexSymbolDefaults["ArrayType"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolArrayTypeLiteral: OptionalIndexSymbolDefaults["ArrayType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolArrayTypeLiteral: IndexSymbolDefaults["ArrayType"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolArrayTypeLiteral: IndexSymbolDefaults["ArrayType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexSymbolArrayTypeObject: OptionalIndexSymbolDefaults["ArrayType"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolArrayTypeObject: OptionalIndexSymbolDefaults["ArrayType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolArrayTypeObject: IndexSymbolDefaults["ArrayType"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolArrayTypeObject: IndexSymbolDefaults["ArrayType"]["Object"] =
  {};
const OptionalPropertySignatureIndexSymbolArrayTypeString: OptionalIndexSymbolDefaults["ArrayType"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolArrayTypeString: OptionalIndexSymbolDefaults["ArrayType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolArrayTypeString: IndexSymbolDefaults["ArrayType"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolArrayTypeString: IndexSymbolDefaults["ArrayType"]["String"] =
  {};
const OptionalPropertySignatureIndexSymbolArrayTypeNumber: OptionalIndexSymbolDefaults["ArrayType"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolArrayTypeNumber: OptionalIndexSymbolDefaults["ArrayType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolArrayTypeNumber: IndexSymbolDefaults["ArrayType"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolArrayTypeNumber: IndexSymbolDefaults["ArrayType"]["Number"] =
  {};
const OptionalPropertySignatureIndexSymbolArrayTypeBoolean: OptionalIndexSymbolDefaults["ArrayType"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolArrayTypeBoolean: OptionalIndexSymbolDefaults["ArrayType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolArrayTypeBoolean: IndexSymbolDefaults["ArrayType"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolArrayTypeBoolean: IndexSymbolDefaults["ArrayType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexSymbolArrayTypeAny: OptionalIndexSymbolDefaults["ArrayType"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolArrayTypeAny: OptionalIndexSymbolDefaults["ArrayType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolArrayTypeAny: IndexSymbolDefaults["ArrayType"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolArrayTypeAny: IndexSymbolDefaults["ArrayType"]["Any"] =
  {};

// Make Optional Property IndexSymbol - FunctionType
const OptionalPropertySignatureIndexSymbolFunctionTypeLiteral: OptionalIndexSymbolDefaults["FunctionType"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolFunctionTypeLiteral: OptionalIndexSymbolDefaults["FunctionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolFunctionTypeLiteral: IndexSymbolDefaults["FunctionType"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolFunctionTypeLiteral: IndexSymbolDefaults["FunctionType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexSymbolFunctionTypeObject: OptionalIndexSymbolDefaults["FunctionType"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolFunctionTypeObject: OptionalIndexSymbolDefaults["FunctionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolFunctionTypeObject: IndexSymbolDefaults["FunctionType"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolFunctionTypeObject: IndexSymbolDefaults["FunctionType"]["Object"] =
  {};
const OptionalPropertySignatureIndexSymbolFunctionTypeString: OptionalIndexSymbolDefaults["FunctionType"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolFunctionTypeString: OptionalIndexSymbolDefaults["FunctionType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolFunctionTypeString: IndexSymbolDefaults["FunctionType"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolFunctionTypeString: IndexSymbolDefaults["FunctionType"]["String"] =
  {};
const OptionalPropertySignatureIndexSymbolFunctionTypeNumber: OptionalIndexSymbolDefaults["FunctionType"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolFunctionTypeNumber: OptionalIndexSymbolDefaults["FunctionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolFunctionTypeNumber: IndexSymbolDefaults["FunctionType"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolFunctionTypeNumber: IndexSymbolDefaults["FunctionType"]["Number"] =
  {};
const OptionalPropertySignatureIndexSymbolFunctionTypeBoolean: OptionalIndexSymbolDefaults["FunctionType"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolFunctionTypeBoolean: OptionalIndexSymbolDefaults["FunctionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolFunctionTypeBoolean: IndexSymbolDefaults["FunctionType"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolFunctionTypeBoolean: IndexSymbolDefaults["FunctionType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexSymbolFunctionTypeAny: OptionalIndexSymbolDefaults["FunctionType"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolFunctionTypeAny: OptionalIndexSymbolDefaults["FunctionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolFunctionTypeAny: IndexSymbolDefaults["FunctionType"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolFunctionTypeAny: IndexSymbolDefaults["FunctionType"]["Any"] =
  {};

// Make Optional Property IndexSymbol - ConstructorType
const OptionalPropertySignatureIndexSymbolConstructorTypeLiteral: OptionalIndexSymbolDefaults["ConstructorType"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolConstructorTypeLiteral: OptionalIndexSymbolDefaults["ConstructorType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolConstructorTypeLiteral: IndexSymbolDefaults["ConstructorType"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolConstructorTypeLiteral: IndexSymbolDefaults["ConstructorType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexSymbolConstructorTypeObject: OptionalIndexSymbolDefaults["ConstructorType"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolConstructorTypeObject: OptionalIndexSymbolDefaults["ConstructorType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolConstructorTypeObject: IndexSymbolDefaults["ConstructorType"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolConstructorTypeObject: IndexSymbolDefaults["ConstructorType"]["Object"] =
  {};
const OptionalPropertySignatureIndexSymbolConstructorTypeString: OptionalIndexSymbolDefaults["ConstructorType"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolConstructorTypeString: OptionalIndexSymbolDefaults["ConstructorType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolConstructorTypeString: IndexSymbolDefaults["ConstructorType"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolConstructorTypeString: IndexSymbolDefaults["ConstructorType"]["String"] =
  {};
const OptionalPropertySignatureIndexSymbolConstructorTypeNumber: OptionalIndexSymbolDefaults["ConstructorType"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolConstructorTypeNumber: OptionalIndexSymbolDefaults["ConstructorType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolConstructorTypeNumber: IndexSymbolDefaults["ConstructorType"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolConstructorTypeNumber: IndexSymbolDefaults["ConstructorType"]["Number"] =
  {};
const OptionalPropertySignatureIndexSymbolConstructorTypeBoolean: OptionalIndexSymbolDefaults["ConstructorType"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolConstructorTypeBoolean: OptionalIndexSymbolDefaults["ConstructorType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolConstructorTypeBoolean: IndexSymbolDefaults["ConstructorType"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolConstructorTypeBoolean: IndexSymbolDefaults["ConstructorType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexSymbolConstructorTypeAny: OptionalIndexSymbolDefaults["ConstructorType"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexSymbolConstructorTypeAny: OptionalIndexSymbolDefaults["ConstructorType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexSymbolConstructorTypeAny: IndexSymbolDefaults["ConstructorType"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexSymbolConstructorTypeAny: IndexSymbolDefaults["ConstructorType"]["Any"] =
  {};
