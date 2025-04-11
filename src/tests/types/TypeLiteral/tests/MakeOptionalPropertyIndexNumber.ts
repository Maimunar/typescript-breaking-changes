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
 * Make Optional Property IndexNumber
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Make Optional Property IndexNumber - ParenthesizedType
const PropertySignatureIndexNumberParenthesizedTypeLiteral: IndexNumberDefaults["ParenthesizedType"]["Literal"] =
  { "3": 1 };
const MakeOptionalPropertyIndexNumberParenthesizedTypeLiteral: OptionalIndexNumberDefaults["ParenthesizedType"]["Literal"] =
  { "3": 1 };
const PropertySignatureIndexNumberParenthesizedTypeObject: IndexNumberDefaults["ParenthesizedType"]["Object"] =
  { "3": {} };
const MakeOptionalPropertyIndexNumberParenthesizedTypeObject: OptionalIndexNumberDefaults["ParenthesizedType"]["Object"] =
  { "3": {} };
const PropertySignatureIndexNumberParenthesizedTypeString: IndexNumberDefaults["ParenthesizedType"]["String"] =
  { "3": "two" };
const MakeOptionalPropertyIndexNumberParenthesizedTypeString: OptionalIndexNumberDefaults["ParenthesizedType"]["String"] =
  { "3": "two" };
const PropertySignatureIndexNumberParenthesizedTypeNumber: IndexNumberDefaults["ParenthesizedType"]["Number"] =
  { "3": 2 };
const MakeOptionalPropertyIndexNumberParenthesizedTypeNumber: OptionalIndexNumberDefaults["ParenthesizedType"]["Number"] =
  { "3": 2 };
const PropertySignatureIndexNumberParenthesizedTypeBoolean: IndexNumberDefaults["ParenthesizedType"]["Boolean"] =
  { "3": true };
const MakeOptionalPropertyIndexNumberParenthesizedTypeBoolean: OptionalIndexNumberDefaults["ParenthesizedType"]["Boolean"] =
  { "3": true };
const PropertySignatureIndexNumberParenthesizedTypeAny: IndexNumberDefaults["ParenthesizedType"]["Any"] =
  { "3": 2 };
const MakeOptionalPropertyIndexNumberParenthesizedTypeAny: OptionalIndexNumberDefaults["ParenthesizedType"]["Any"] =
  { "3": 2 };

// Make Optional Property IndexNumber - TypeReferenceBuiltin
const PropertySignatureIndexNumberTypeReferenceBuiltinLiteral: IndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] =
  { "3": promisify(1) };
const MakeOptionalPropertyIndexNumberTypeReferenceBuiltinLiteral: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] =
  { "3": promisify(1) };
const PropertySignatureIndexNumberTypeReferenceBuiltinObject: IndexNumberDefaults["TypeReferenceBuiltin"]["Object"] =
  { "3": promisify({}) };
const MakeOptionalPropertyIndexNumberTypeReferenceBuiltinObject: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Object"] =
  { "3": promisify({}) };
const PropertySignatureIndexNumberTypeReferenceBuiltinString: IndexNumberDefaults["TypeReferenceBuiltin"]["String"] =
  { "3": promisify("two") };
const MakeOptionalPropertyIndexNumberTypeReferenceBuiltinString: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["String"] =
  { "3": promisify("two") };
const PropertySignatureIndexNumberTypeReferenceBuiltinNumber: IndexNumberDefaults["TypeReferenceBuiltin"]["Number"] =
  { "3": promisify(2) };
const MakeOptionalPropertyIndexNumberTypeReferenceBuiltinNumber: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Number"] =
  { "3": promisify(2) };
const PropertySignatureIndexNumberTypeReferenceBuiltinBoolean: IndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { "3": promisify(true) };
const MakeOptionalPropertyIndexNumberTypeReferenceBuiltinBoolean: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { "3": promisify(true) };
const PropertySignatureIndexNumberTypeReferenceBuiltinAny: IndexNumberDefaults["TypeReferenceBuiltin"]["Any"] =
  { "3": promisify(2) };
const MakeOptionalPropertyIndexNumberTypeReferenceBuiltinAny: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Any"] =
  { "3": promisify(2) };

// Make Optional Property IndexNumber - TypeReferencePredefined
const PropertySignatureIndexNumberTypeReferencePredefinedLiteral: IndexNumberDefaults["TypeReferencePredefined"]["Literal"] =
  { "3": 1 };
const MakeOptionalPropertyIndexNumberTypeReferencePredefinedLiteral: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Literal"] =
  { "3": 1 };
const PropertySignatureIndexNumberTypeReferencePredefinedObject: IndexNumberDefaults["TypeReferencePredefined"]["Object"] =
  { "3": {} };
const MakeOptionalPropertyIndexNumberTypeReferencePredefinedObject: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Object"] =
  { "3": {} };
const PropertySignatureIndexNumberTypeReferencePredefinedString: IndexNumberDefaults["TypeReferencePredefined"]["String"] =
  { "3": "two" };
const MakeOptionalPropertyIndexNumberTypeReferencePredefinedString: OptionalIndexNumberDefaults["TypeReferencePredefined"]["String"] =
  { "3": "two" };
const PropertySignatureIndexNumberTypeReferencePredefinedNumber: IndexNumberDefaults["TypeReferencePredefined"]["Number"] =
  { "3": 2 };
const MakeOptionalPropertyIndexNumberTypeReferencePredefinedNumber: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Number"] =
  { "3": 2 };
const PropertySignatureIndexNumberTypeReferencePredefinedBoolean: IndexNumberDefaults["TypeReferencePredefined"]["Boolean"] =
  { "3": true };
const MakeOptionalPropertyIndexNumberTypeReferencePredefinedBoolean: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Boolean"] =
  { "3": true };
const PropertySignatureIndexNumberTypeReferencePredefinedAny: IndexNumberDefaults["TypeReferencePredefined"]["Any"] =
  { "3": 2 };
const MakeOptionalPropertyIndexNumberTypeReferencePredefinedAny: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Any"] =
  { "3": 2 };

// Make Optional Property IndexNumber - UnionType
const PropertySignatureIndexNumberUnionTypeLiteral: IndexNumberDefaults["UnionType"]["Literal"] =
  { "3": 1 };
const MakeOptionalPropertyIndexNumberUnionTypeLiteral: OptionalIndexNumberDefaults["UnionType"]["Literal"] =
  { "3": 1 };
const PropertySignatureIndexNumberUnionTypeObject: IndexNumberDefaults["UnionType"]["Object"] =
  { "3": {} };
const MakeOptionalPropertyIndexNumberUnionTypeObject: OptionalIndexNumberDefaults["UnionType"]["Object"] =
  { "3": {} };
const PropertySignatureIndexNumberUnionTypeString: IndexNumberDefaults["UnionType"]["String"] =
  { "3": "two" };
const MakeOptionalPropertyIndexNumberUnionTypeString: OptionalIndexNumberDefaults["UnionType"]["String"] =
  { "3": "two" };
const PropertySignatureIndexNumberUnionTypeNumber: IndexNumberDefaults["UnionType"]["Number"] =
  { "3": 2 };
const MakeOptionalPropertyIndexNumberUnionTypeNumber: OptionalIndexNumberDefaults["UnionType"]["Number"] =
  { "3": 2 };
const PropertySignatureIndexNumberUnionTypeBoolean: IndexNumberDefaults["UnionType"]["Boolean"] =
  { "3": true };
const MakeOptionalPropertyIndexNumberUnionTypeBoolean: OptionalIndexNumberDefaults["UnionType"]["Boolean"] =
  { "3": true };
const PropertySignatureIndexNumberUnionTypeAny: IndexNumberDefaults["UnionType"]["Any"] =
  { "3": 2 };
const MakeOptionalPropertyIndexNumberUnionTypeAny: OptionalIndexNumberDefaults["UnionType"]["Any"] =
  { "3": 2 };

// Make Optional Property IndexNumber - IntersectionType
const PropertySignatureIndexNumberIntersectionTypeLiteral: IndexNumberDefaults["IntersectionType"]["Literal"] =
  { "3": 1 };
const MakeOptionalPropertyIndexNumberIntersectionTypeLiteral: OptionalIndexNumberDefaults["IntersectionType"]["Literal"] =
  { "3": 1 };
const PropertySignatureIndexNumberIntersectionTypeObject: IndexNumberDefaults["IntersectionType"]["Object"] =
  { "3": {} };
const MakeOptionalPropertyIndexNumberIntersectionTypeObject: OptionalIndexNumberDefaults["IntersectionType"]["Object"] =
  { "3": {} };
const PropertySignatureIndexNumberIntersectionTypeString: IndexNumberDefaults["IntersectionType"]["String"] =
  { "3": "two" };
const MakeOptionalPropertyIndexNumberIntersectionTypeString: OptionalIndexNumberDefaults["IntersectionType"]["String"] =
  { "3": "two" };
const PropertySignatureIndexNumberIntersectionTypeNumber: IndexNumberDefaults["IntersectionType"]["Number"] =
  { "3": 2 };
const MakeOptionalPropertyIndexNumberIntersectionTypeNumber: OptionalIndexNumberDefaults["IntersectionType"]["Number"] =
  { "3": 2 };
const PropertySignatureIndexNumberIntersectionTypeBoolean: IndexNumberDefaults["IntersectionType"]["Boolean"] =
  { "3": true };
const MakeOptionalPropertyIndexNumberIntersectionTypeBoolean: OptionalIndexNumberDefaults["IntersectionType"]["Boolean"] =
  { "3": true };
const PropertySignatureIndexNumberIntersectionTypeAny: IndexNumberDefaults["IntersectionType"]["Any"] =
  { "3": 2 };
const MakeOptionalPropertyIndexNumberIntersectionTypeAny: OptionalIndexNumberDefaults["IntersectionType"]["Any"] =
  { "3": 2 };

// Make Optional Property IndexNumber - TypeLiteral
const PropertySignatureIndexNumberTypeLiteralLiteral: IndexNumberDefaults["TypeLiteral"]["Literal"] =
  { "3": { key: 1 } };
const MakeOptionalPropertyIndexNumberTypeLiteralLiteral: OptionalIndexNumberDefaults["TypeLiteral"]["Literal"] =
  { "3": { key: 1 } };
const PropertySignatureIndexNumberTypeLiteralObject: IndexNumberDefaults["TypeLiteral"]["Object"] =
  { "3": { key: {} } };
const MakeOptionalPropertyIndexNumberTypeLiteralObject: OptionalIndexNumberDefaults["TypeLiteral"]["Object"] =
  { "3": { key: {} } };
const PropertySignatureIndexNumberTypeLiteralString: IndexNumberDefaults["TypeLiteral"]["String"] =
  { "3": { key: "two" } };
const MakeOptionalPropertyIndexNumberTypeLiteralString: OptionalIndexNumberDefaults["TypeLiteral"]["String"] =
  { "3": { key: "two" } };
const PropertySignatureIndexNumberTypeLiteralNumber: IndexNumberDefaults["TypeLiteral"]["Number"] =
  { "3": { key: 2 } };
const MakeOptionalPropertyIndexNumberTypeLiteralNumber: OptionalIndexNumberDefaults["TypeLiteral"]["Number"] =
  { "3": { key: 2 } };
const PropertySignatureIndexNumberTypeLiteralBoolean: IndexNumberDefaults["TypeLiteral"]["Boolean"] =
  { "3": { key: true } };
const MakeOptionalPropertyIndexNumberTypeLiteralBoolean: OptionalIndexNumberDefaults["TypeLiteral"]["Boolean"] =
  { "3": { key: true } };
const PropertySignatureIndexNumberTypeLiteralAny: IndexNumberDefaults["TypeLiteral"]["Any"] =
  { "3": { key: 2 } };
const MakeOptionalPropertyIndexNumberTypeLiteralAny: OptionalIndexNumberDefaults["TypeLiteral"]["Any"] =
  { "3": { key: 2 } };

// Make Optional Property IndexNumber - TupleType
const PropertySignatureIndexNumberTupleTypeLiteral: IndexNumberDefaults["TupleType"]["Literal"] =
  { "3": [1] };
const MakeOptionalPropertyIndexNumberTupleTypeLiteral: OptionalIndexNumberDefaults["TupleType"]["Literal"] =
  { "3": [1] };
const PropertySignatureIndexNumberTupleTypeObject: IndexNumberDefaults["TupleType"]["Object"] =
  { "3": [{}] };
const MakeOptionalPropertyIndexNumberTupleTypeObject: OptionalIndexNumberDefaults["TupleType"]["Object"] =
  { "3": [{}] };
const PropertySignatureIndexNumberTupleTypeString: IndexNumberDefaults["TupleType"]["String"] =
  { "3": ["two"] };
const MakeOptionalPropertyIndexNumberTupleTypeString: OptionalIndexNumberDefaults["TupleType"]["String"] =
  { "3": ["two"] };
const PropertySignatureIndexNumberTupleTypeNumber: IndexNumberDefaults["TupleType"]["Number"] =
  { "3": [2] };
const MakeOptionalPropertyIndexNumberTupleTypeNumber: OptionalIndexNumberDefaults["TupleType"]["Number"] =
  { "3": [2] };
const PropertySignatureIndexNumberTupleTypeBoolean: IndexNumberDefaults["TupleType"]["Boolean"] =
  { "3": [true] };
const MakeOptionalPropertyIndexNumberTupleTypeBoolean: OptionalIndexNumberDefaults["TupleType"]["Boolean"] =
  { "3": [true] };
const PropertySignatureIndexNumberTupleTypeAny: IndexNumberDefaults["TupleType"]["Any"] =
  { "3": [2] };
const MakeOptionalPropertyIndexNumberTupleTypeAny: OptionalIndexNumberDefaults["TupleType"]["Any"] =
  { "3": [2] };

// Make Optional Property IndexNumber - ArrayType
const PropertySignatureIndexNumberArrayTypeLiteral: IndexNumberDefaults["ArrayType"]["Literal"] =
  { "3": [1, 1] };
const MakeOptionalPropertyIndexNumberArrayTypeLiteral: OptionalIndexNumberDefaults["ArrayType"]["Literal"] =
  { "3": [1, 1] };
const PropertySignatureIndexNumberArrayTypeObject: IndexNumberDefaults["ArrayType"]["Object"] =
  { "3": [{}, {}] };
const MakeOptionalPropertyIndexNumberArrayTypeObject: OptionalIndexNumberDefaults["ArrayType"]["Object"] =
  { "3": [{}, {}] };
const PropertySignatureIndexNumberArrayTypeString: IndexNumberDefaults["ArrayType"]["String"] =
  { "3": ["two", "two"] };
const MakeOptionalPropertyIndexNumberArrayTypeString: OptionalIndexNumberDefaults["ArrayType"]["String"] =
  { "3": ["two", "two"] };
const PropertySignatureIndexNumberArrayTypeNumber: IndexNumberDefaults["ArrayType"]["Number"] =
  { "3": [2, 2] };
const MakeOptionalPropertyIndexNumberArrayTypeNumber: OptionalIndexNumberDefaults["ArrayType"]["Number"] =
  { "3": [2, 2] };
const PropertySignatureIndexNumberArrayTypeBoolean: IndexNumberDefaults["ArrayType"]["Boolean"] =
  { "3": [true, true] };
const MakeOptionalPropertyIndexNumberArrayTypeBoolean: OptionalIndexNumberDefaults["ArrayType"]["Boolean"] =
  { "3": [true, true] };
const PropertySignatureIndexNumberArrayTypeAny: IndexNumberDefaults["ArrayType"]["Any"] =
  { "3": [2, 2] };
const MakeOptionalPropertyIndexNumberArrayTypeAny: OptionalIndexNumberDefaults["ArrayType"]["Any"] =
  { "3": [2, 2] };

// Make Optional Property IndexNumber - FunctionType
const PropertySignatureIndexNumberFunctionTypeLiteral: IndexNumberDefaults["FunctionType"]["Literal"] =
  {};
const MakeOptionalPropertyIndexNumberFunctionTypeLiteral: OptionalIndexNumberDefaults["FunctionType"]["Literal"] =
  {};
const PropertySignatureIndexNumberFunctionTypeObject: IndexNumberDefaults["FunctionType"]["Object"] =
  {};
const MakeOptionalPropertyIndexNumberFunctionTypeObject: OptionalIndexNumberDefaults["FunctionType"]["Object"] =
  {};
const PropertySignatureIndexNumberFunctionTypeString: IndexNumberDefaults["FunctionType"]["String"] =
  {};
const MakeOptionalPropertyIndexNumberFunctionTypeString: OptionalIndexNumberDefaults["FunctionType"]["String"] =
  {};
const PropertySignatureIndexNumberFunctionTypeNumber: IndexNumberDefaults["FunctionType"]["Number"] =
  {};
const MakeOptionalPropertyIndexNumberFunctionTypeNumber: OptionalIndexNumberDefaults["FunctionType"]["Number"] =
  {};
const PropertySignatureIndexNumberFunctionTypeBoolean: IndexNumberDefaults["FunctionType"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexNumberFunctionTypeBoolean: OptionalIndexNumberDefaults["FunctionType"]["Boolean"] =
  {};
const PropertySignatureIndexNumberFunctionTypeAny: IndexNumberDefaults["FunctionType"]["Any"] =
  {};
const MakeOptionalPropertyIndexNumberFunctionTypeAny: OptionalIndexNumberDefaults["FunctionType"]["Any"] =
  {};

// Make Optional Property IndexNumber - ConstructorType
const PropertySignatureIndexNumberConstructorTypeLiteral: IndexNumberDefaults["ConstructorType"]["Literal"] =
  { "3": 1 };
const MakeOptionalPropertyIndexNumberConstructorTypeLiteral: OptionalIndexNumberDefaults["ConstructorType"]["Literal"] =
  { "3": 1 };
const PropertySignatureIndexNumberConstructorTypeObject: IndexNumberDefaults["ConstructorType"]["Object"] =
  { "3": {} };
const MakeOptionalPropertyIndexNumberConstructorTypeObject: OptionalIndexNumberDefaults["ConstructorType"]["Object"] =
  { "3": {} };
const PropertySignatureIndexNumberConstructorTypeString: IndexNumberDefaults["ConstructorType"]["String"] =
  { "3": "two" };
const MakeOptionalPropertyIndexNumberConstructorTypeString: OptionalIndexNumberDefaults["ConstructorType"]["String"] =
  { "3": "two" };
const PropertySignatureIndexNumberConstructorTypeNumber: IndexNumberDefaults["ConstructorType"]["Number"] =
  { "3": 2 };
const MakeOptionalPropertyIndexNumberConstructorTypeNumber: OptionalIndexNumberDefaults["ConstructorType"]["Number"] =
  { "3": 2 };
const PropertySignatureIndexNumberConstructorTypeBoolean: IndexNumberDefaults["ConstructorType"]["Boolean"] =
  { "3": true };
const MakeOptionalPropertyIndexNumberConstructorTypeBoolean: OptionalIndexNumberDefaults["ConstructorType"]["Boolean"] =
  { "3": true };
const PropertySignatureIndexNumberConstructorTypeAny: IndexNumberDefaults["ConstructorType"]["Any"] =
  { "3": 2 };
const MakeOptionalPropertyIndexNumberConstructorTypeAny: OptionalIndexNumberDefaults["ConstructorType"]["Any"] =
  { "3": 2 };
