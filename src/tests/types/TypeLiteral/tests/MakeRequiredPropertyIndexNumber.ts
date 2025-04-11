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
 * Make Required Property IndexNumber
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Make Optional Property IndexNumber - ParenthesizedType
const OptionalPropertySignatureIndexNumberParenthesizedTypeLiteral: OptionalIndexNumberDefaults["ParenthesizedType"]["Literal"] =
  { "3": 1 };
const SecondOptionalPropertySignatureIndexNumberParenthesizedTypeLiteral: OptionalIndexNumberDefaults["ParenthesizedType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexNumberParenthesizedTypeLiteral: IndexNumberDefaults["ParenthesizedType"]["Literal"] =
  { "3": 1 };
const SecondMakeRequiredPropertySignatureIndexNumberParenthesizedTypeLiteral: IndexNumberDefaults["ParenthesizedType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexNumberParenthesizedTypeObject: OptionalIndexNumberDefaults["ParenthesizedType"]["Object"] =
  { "3": {} };
const SecondOptionalPropertySignatureIndexNumberParenthesizedTypeObject: OptionalIndexNumberDefaults["ParenthesizedType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexNumberParenthesizedTypeObject: IndexNumberDefaults["ParenthesizedType"]["Object"] =
  { "3": {} };
const SecondMakeRequiredPropertySignatureIndexNumberParenthesizedTypeObject: IndexNumberDefaults["ParenthesizedType"]["Object"] =
  {};
const OptionalPropertySignatureIndexNumberParenthesizedTypeString: OptionalIndexNumberDefaults["ParenthesizedType"]["String"] =
  { "3": "two" };
const SecondOptionalPropertySignatureIndexNumberParenthesizedTypeString: OptionalIndexNumberDefaults["ParenthesizedType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexNumberParenthesizedTypeString: IndexNumberDefaults["ParenthesizedType"]["String"] =
  { "3": "two" };
const SecondMakeRequiredPropertySignatureIndexNumberParenthesizedTypeString: IndexNumberDefaults["ParenthesizedType"]["String"] =
  {};
const OptionalPropertySignatureIndexNumberParenthesizedTypeNumber: OptionalIndexNumberDefaults["ParenthesizedType"]["Number"] =
  { "3": 2 };
const SecondOptionalPropertySignatureIndexNumberParenthesizedTypeNumber: OptionalIndexNumberDefaults["ParenthesizedType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexNumberParenthesizedTypeNumber: IndexNumberDefaults["ParenthesizedType"]["Number"] =
  { "3": 2 };
const SecondMakeRequiredPropertySignatureIndexNumberParenthesizedTypeNumber: IndexNumberDefaults["ParenthesizedType"]["Number"] =
  {};
const OptionalPropertySignatureIndexNumberParenthesizedTypeBoolean: OptionalIndexNumberDefaults["ParenthesizedType"]["Boolean"] =
  { "3": true };
const SecondOptionalPropertySignatureIndexNumberParenthesizedTypeBoolean: OptionalIndexNumberDefaults["ParenthesizedType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexNumberParenthesizedTypeBoolean: IndexNumberDefaults["ParenthesizedType"]["Boolean"] =
  { "3": true };
const SecondMakeRequiredPropertySignatureIndexNumberParenthesizedTypeBoolean: IndexNumberDefaults["ParenthesizedType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexNumberParenthesizedTypeAny: OptionalIndexNumberDefaults["ParenthesizedType"]["Any"] =
  { "3": 2 };
const SecondOptionalPropertySignatureIndexNumberParenthesizedTypeAny: OptionalIndexNumberDefaults["ParenthesizedType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexNumberParenthesizedTypeAny: IndexNumberDefaults["ParenthesizedType"]["Any"] =
  { "3": 2 };
const SecondMakeRequiredPropertySignatureIndexNumberParenthesizedTypeAny: IndexNumberDefaults["ParenthesizedType"]["Any"] =
  {};

// Make Optional Property IndexNumber - TypeReferenceBuiltin
const OptionalPropertySignatureIndexNumberTypeReferenceBuiltinLiteral: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] =
  { "3": promisify(1) };
const SecondOptionalPropertySignatureIndexNumberTypeReferenceBuiltinLiteral: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeReferenceBuiltinLiteral: IndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] =
  { "3": promisify(1) };
const SecondMakeRequiredPropertySignatureIndexNumberTypeReferenceBuiltinLiteral: IndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const OptionalPropertySignatureIndexNumberTypeReferenceBuiltinObject: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Object"] =
  { "3": promisify({}) };
const SecondOptionalPropertySignatureIndexNumberTypeReferenceBuiltinObject: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeReferenceBuiltinObject: IndexNumberDefaults["TypeReferenceBuiltin"]["Object"] =
  { "3": promisify({}) };
const SecondMakeRequiredPropertySignatureIndexNumberTypeReferenceBuiltinObject: IndexNumberDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const OptionalPropertySignatureIndexNumberTypeReferenceBuiltinString: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["String"] =
  { "3": promisify("two") };
const SecondOptionalPropertySignatureIndexNumberTypeReferenceBuiltinString: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeReferenceBuiltinString: IndexNumberDefaults["TypeReferenceBuiltin"]["String"] =
  { "3": promisify("two") };
const SecondMakeRequiredPropertySignatureIndexNumberTypeReferenceBuiltinString: IndexNumberDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const OptionalPropertySignatureIndexNumberTypeReferenceBuiltinNumber: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Number"] =
  { "3": promisify(2) };
const SecondOptionalPropertySignatureIndexNumberTypeReferenceBuiltinNumber: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeReferenceBuiltinNumber: IndexNumberDefaults["TypeReferenceBuiltin"]["Number"] =
  { "3": promisify(2) };
const SecondMakeRequiredPropertySignatureIndexNumberTypeReferenceBuiltinNumber: IndexNumberDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const OptionalPropertySignatureIndexNumberTypeReferenceBuiltinBoolean: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { "3": promisify(true) };
const SecondOptionalPropertySignatureIndexNumberTypeReferenceBuiltinBoolean: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeReferenceBuiltinBoolean: IndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { "3": promisify(true) };
const SecondMakeRequiredPropertySignatureIndexNumberTypeReferenceBuiltinBoolean: IndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexNumberTypeReferenceBuiltinAny: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Any"] =
  { "3": promisify(2) };
const SecondOptionalPropertySignatureIndexNumberTypeReferenceBuiltinAny: OptionalIndexNumberDefaults["TypeReferenceBuiltin"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeReferenceBuiltinAny: IndexNumberDefaults["TypeReferenceBuiltin"]["Any"] =
  { "3": promisify(2) };
const SecondMakeRequiredPropertySignatureIndexNumberTypeReferenceBuiltinAny: IndexNumberDefaults["TypeReferenceBuiltin"]["Any"] =
  {};

// Make Optional Property IndexNumber - TypeReferencePredefined
const OptionalPropertySignatureIndexNumberTypeReferencePredefinedLiteral: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Literal"] =
  { "3": 1 };
const SecondOptionalPropertySignatureIndexNumberTypeReferencePredefinedLiteral: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeReferencePredefinedLiteral: IndexNumberDefaults["TypeReferencePredefined"]["Literal"] =
  { "3": 1 };
const SecondMakeRequiredPropertySignatureIndexNumberTypeReferencePredefinedLiteral: IndexNumberDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const OptionalPropertySignatureIndexNumberTypeReferencePredefinedObject: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Object"] =
  { "3": {} };
const SecondOptionalPropertySignatureIndexNumberTypeReferencePredefinedObject: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeReferencePredefinedObject: IndexNumberDefaults["TypeReferencePredefined"]["Object"] =
  { "3": {} };
const SecondMakeRequiredPropertySignatureIndexNumberTypeReferencePredefinedObject: IndexNumberDefaults["TypeReferencePredefined"]["Object"] =
  {};
const OptionalPropertySignatureIndexNumberTypeReferencePredefinedString: OptionalIndexNumberDefaults["TypeReferencePredefined"]["String"] =
  { "3": "two" };
const SecondOptionalPropertySignatureIndexNumberTypeReferencePredefinedString: OptionalIndexNumberDefaults["TypeReferencePredefined"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeReferencePredefinedString: IndexNumberDefaults["TypeReferencePredefined"]["String"] =
  { "3": "two" };
const SecondMakeRequiredPropertySignatureIndexNumberTypeReferencePredefinedString: IndexNumberDefaults["TypeReferencePredefined"]["String"] =
  {};
const OptionalPropertySignatureIndexNumberTypeReferencePredefinedNumber: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Number"] =
  { "3": 2 };
const SecondOptionalPropertySignatureIndexNumberTypeReferencePredefinedNumber: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeReferencePredefinedNumber: IndexNumberDefaults["TypeReferencePredefined"]["Number"] =
  { "3": 2 };
const SecondMakeRequiredPropertySignatureIndexNumberTypeReferencePredefinedNumber: IndexNumberDefaults["TypeReferencePredefined"]["Number"] =
  {};
const OptionalPropertySignatureIndexNumberTypeReferencePredefinedBoolean: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Boolean"] =
  { "3": true };
const SecondOptionalPropertySignatureIndexNumberTypeReferencePredefinedBoolean: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeReferencePredefinedBoolean: IndexNumberDefaults["TypeReferencePredefined"]["Boolean"] =
  { "3": true };
const SecondMakeRequiredPropertySignatureIndexNumberTypeReferencePredefinedBoolean: IndexNumberDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexNumberTypeReferencePredefinedAny: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Any"] =
  { "3": 2 };
const SecondOptionalPropertySignatureIndexNumberTypeReferencePredefinedAny: OptionalIndexNumberDefaults["TypeReferencePredefined"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeReferencePredefinedAny: IndexNumberDefaults["TypeReferencePredefined"]["Any"] =
  { "3": 2 };
const SecondMakeRequiredPropertySignatureIndexNumberTypeReferencePredefinedAny: IndexNumberDefaults["TypeReferencePredefined"]["Any"] =
  {};

// Make Optional Property IndexNumber - UnionType
const OptionalPropertySignatureIndexNumberUnionTypeLiteral: OptionalIndexNumberDefaults["UnionType"]["Literal"] =
  { "3": 1 };
const SecondOptionalPropertySignatureIndexNumberUnionTypeLiteral: OptionalIndexNumberDefaults["UnionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexNumberUnionTypeLiteral: IndexNumberDefaults["UnionType"]["Literal"] =
  { "3": 1 };
const SecondMakeRequiredPropertySignatureIndexNumberUnionTypeLiteral: IndexNumberDefaults["UnionType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexNumberUnionTypeObject: OptionalIndexNumberDefaults["UnionType"]["Object"] =
  { "3": {} };
const SecondOptionalPropertySignatureIndexNumberUnionTypeObject: OptionalIndexNumberDefaults["UnionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexNumberUnionTypeObject: IndexNumberDefaults["UnionType"]["Object"] =
  { "3": {} };
const SecondMakeRequiredPropertySignatureIndexNumberUnionTypeObject: IndexNumberDefaults["UnionType"]["Object"] =
  {};
const OptionalPropertySignatureIndexNumberUnionTypeString: OptionalIndexNumberDefaults["UnionType"]["String"] =
  { "3": "two" };
const SecondOptionalPropertySignatureIndexNumberUnionTypeString: OptionalIndexNumberDefaults["UnionType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexNumberUnionTypeString: IndexNumberDefaults["UnionType"]["String"] =
  { "3": "two" };
const SecondMakeRequiredPropertySignatureIndexNumberUnionTypeString: IndexNumberDefaults["UnionType"]["String"] =
  {};
const OptionalPropertySignatureIndexNumberUnionTypeNumber: OptionalIndexNumberDefaults["UnionType"]["Number"] =
  { "3": 2 };
const SecondOptionalPropertySignatureIndexNumberUnionTypeNumber: OptionalIndexNumberDefaults["UnionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexNumberUnionTypeNumber: IndexNumberDefaults["UnionType"]["Number"] =
  { "3": 2 };
const SecondMakeRequiredPropertySignatureIndexNumberUnionTypeNumber: IndexNumberDefaults["UnionType"]["Number"] =
  {};
const OptionalPropertySignatureIndexNumberUnionTypeBoolean: OptionalIndexNumberDefaults["UnionType"]["Boolean"] =
  { "3": true };
const SecondOptionalPropertySignatureIndexNumberUnionTypeBoolean: OptionalIndexNumberDefaults["UnionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexNumberUnionTypeBoolean: IndexNumberDefaults["UnionType"]["Boolean"] =
  { "3": true };
const SecondMakeRequiredPropertySignatureIndexNumberUnionTypeBoolean: IndexNumberDefaults["UnionType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexNumberUnionTypeAny: OptionalIndexNumberDefaults["UnionType"]["Any"] =
  { "3": 2 };
const SecondOptionalPropertySignatureIndexNumberUnionTypeAny: OptionalIndexNumberDefaults["UnionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexNumberUnionTypeAny: IndexNumberDefaults["UnionType"]["Any"] =
  { "3": 2 };
const SecondMakeRequiredPropertySignatureIndexNumberUnionTypeAny: IndexNumberDefaults["UnionType"]["Any"] =
  {};

// Make Optional Property IndexNumber - IntersectionType
const OptionalPropertySignatureIndexNumberIntersectionTypeLiteral: OptionalIndexNumberDefaults["IntersectionType"]["Literal"] =
  { "3": 1 };
const SecondOptionalPropertySignatureIndexNumberIntersectionTypeLiteral: OptionalIndexNumberDefaults["IntersectionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexNumberIntersectionTypeLiteral: IndexNumberDefaults["IntersectionType"]["Literal"] =
  { "3": 1 };
const SecondMakeRequiredPropertySignatureIndexNumberIntersectionTypeLiteral: IndexNumberDefaults["IntersectionType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexNumberIntersectionTypeObject: OptionalIndexNumberDefaults["IntersectionType"]["Object"] =
  { "3": {} };
const SecondOptionalPropertySignatureIndexNumberIntersectionTypeObject: OptionalIndexNumberDefaults["IntersectionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexNumberIntersectionTypeObject: IndexNumberDefaults["IntersectionType"]["Object"] =
  { "3": {} };
const SecondMakeRequiredPropertySignatureIndexNumberIntersectionTypeObject: IndexNumberDefaults["IntersectionType"]["Object"] =
  {};
const OptionalPropertySignatureIndexNumberIntersectionTypeString: OptionalIndexNumberDefaults["IntersectionType"]["String"] =
  { "3": "two" };
const SecondOptionalPropertySignatureIndexNumberIntersectionTypeString: OptionalIndexNumberDefaults["IntersectionType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexNumberIntersectionTypeString: IndexNumberDefaults["IntersectionType"]["String"] =
  { "3": "two" };
const SecondMakeRequiredPropertySignatureIndexNumberIntersectionTypeString: IndexNumberDefaults["IntersectionType"]["String"] =
  {};
const OptionalPropertySignatureIndexNumberIntersectionTypeNumber: OptionalIndexNumberDefaults["IntersectionType"]["Number"] =
  { "3": 2 };
const SecondOptionalPropertySignatureIndexNumberIntersectionTypeNumber: OptionalIndexNumberDefaults["IntersectionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexNumberIntersectionTypeNumber: IndexNumberDefaults["IntersectionType"]["Number"] =
  { "3": 2 };
const SecondMakeRequiredPropertySignatureIndexNumberIntersectionTypeNumber: IndexNumberDefaults["IntersectionType"]["Number"] =
  {};
const OptionalPropertySignatureIndexNumberIntersectionTypeBoolean: OptionalIndexNumberDefaults["IntersectionType"]["Boolean"] =
  { "3": true };
const SecondOptionalPropertySignatureIndexNumberIntersectionTypeBoolean: OptionalIndexNumberDefaults["IntersectionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexNumberIntersectionTypeBoolean: IndexNumberDefaults["IntersectionType"]["Boolean"] =
  { "3": true };
const SecondMakeRequiredPropertySignatureIndexNumberIntersectionTypeBoolean: IndexNumberDefaults["IntersectionType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexNumberIntersectionTypeAny: OptionalIndexNumberDefaults["IntersectionType"]["Any"] =
  { "3": 2 };
const SecondOptionalPropertySignatureIndexNumberIntersectionTypeAny: OptionalIndexNumberDefaults["IntersectionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexNumberIntersectionTypeAny: IndexNumberDefaults["IntersectionType"]["Any"] =
  { "3": 2 };
const SecondMakeRequiredPropertySignatureIndexNumberIntersectionTypeAny: IndexNumberDefaults["IntersectionType"]["Any"] =
  {};

// Make Optional Property IndexNumber - TypeLiteral
const OptionalPropertySignatureIndexNumberTypeLiteralLiteral: OptionalIndexNumberDefaults["TypeLiteral"]["Literal"] =
  { "3": { key: 1 } };
const SecondOptionalPropertySignatureIndexNumberTypeLiteralLiteral: OptionalIndexNumberDefaults["TypeLiteral"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeLiteralLiteral: IndexNumberDefaults["TypeLiteral"]["Literal"] =
  { "3": { key: 1 } };
const SecondMakeRequiredPropertySignatureIndexNumberTypeLiteralLiteral: IndexNumberDefaults["TypeLiteral"]["Literal"] =
  {};
const OptionalPropertySignatureIndexNumberTypeLiteralObject: OptionalIndexNumberDefaults["TypeLiteral"]["Object"] =
  { "3": { key: {} } };
const SecondOptionalPropertySignatureIndexNumberTypeLiteralObject: OptionalIndexNumberDefaults["TypeLiteral"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeLiteralObject: IndexNumberDefaults["TypeLiteral"]["Object"] =
  { "3": { key: {} } };
const SecondMakeRequiredPropertySignatureIndexNumberTypeLiteralObject: IndexNumberDefaults["TypeLiteral"]["Object"] =
  {};
const OptionalPropertySignatureIndexNumberTypeLiteralString: OptionalIndexNumberDefaults["TypeLiteral"]["String"] =
  { "3": { key: "two" } };
const SecondOptionalPropertySignatureIndexNumberTypeLiteralString: OptionalIndexNumberDefaults["TypeLiteral"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeLiteralString: IndexNumberDefaults["TypeLiteral"]["String"] =
  { "3": { key: "two" } };
const SecondMakeRequiredPropertySignatureIndexNumberTypeLiteralString: IndexNumberDefaults["TypeLiteral"]["String"] =
  {};
const OptionalPropertySignatureIndexNumberTypeLiteralNumber: OptionalIndexNumberDefaults["TypeLiteral"]["Number"] =
  { "3": { key: 2 } };
const SecondOptionalPropertySignatureIndexNumberTypeLiteralNumber: OptionalIndexNumberDefaults["TypeLiteral"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeLiteralNumber: IndexNumberDefaults["TypeLiteral"]["Number"] =
  { "3": { key: 2 } };
const SecondMakeRequiredPropertySignatureIndexNumberTypeLiteralNumber: IndexNumberDefaults["TypeLiteral"]["Number"] =
  {};
const OptionalPropertySignatureIndexNumberTypeLiteralBoolean: OptionalIndexNumberDefaults["TypeLiteral"]["Boolean"] =
  { "3": { key: true } };
const SecondOptionalPropertySignatureIndexNumberTypeLiteralBoolean: OptionalIndexNumberDefaults["TypeLiteral"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeLiteralBoolean: IndexNumberDefaults["TypeLiteral"]["Boolean"] =
  { "3": { key: true } };
const SecondMakeRequiredPropertySignatureIndexNumberTypeLiteralBoolean: IndexNumberDefaults["TypeLiteral"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexNumberTypeLiteralAny: OptionalIndexNumberDefaults["TypeLiteral"]["Any"] =
  { "3": { key: 2 } };
const SecondOptionalPropertySignatureIndexNumberTypeLiteralAny: OptionalIndexNumberDefaults["TypeLiteral"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTypeLiteralAny: IndexNumberDefaults["TypeLiteral"]["Any"] =
  { "3": { key: 2 } };
const SecondMakeRequiredPropertySignatureIndexNumberTypeLiteralAny: IndexNumberDefaults["TypeLiteral"]["Any"] =
  {};

// Make Optional Property IndexNumber - TupleType
const OptionalPropertySignatureIndexNumberTupleTypeLiteral: OptionalIndexNumberDefaults["TupleType"]["Literal"] =
  { "3": [1] };
const SecondOptionalPropertySignatureIndexNumberTupleTypeLiteral: OptionalIndexNumberDefaults["TupleType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTupleTypeLiteral: IndexNumberDefaults["TupleType"]["Literal"] =
  { "3": [1] };
const SecondMakeRequiredPropertySignatureIndexNumberTupleTypeLiteral: IndexNumberDefaults["TupleType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexNumberTupleTypeObject: OptionalIndexNumberDefaults["TupleType"]["Object"] =
  { "3": [{}] };
const SecondOptionalPropertySignatureIndexNumberTupleTypeObject: OptionalIndexNumberDefaults["TupleType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTupleTypeObject: IndexNumberDefaults["TupleType"]["Object"] =
  { "3": [{}] };
const SecondMakeRequiredPropertySignatureIndexNumberTupleTypeObject: IndexNumberDefaults["TupleType"]["Object"] =
  {};
const OptionalPropertySignatureIndexNumberTupleTypeString: OptionalIndexNumberDefaults["TupleType"]["String"] =
  { "3": ["two"] };
const SecondOptionalPropertySignatureIndexNumberTupleTypeString: OptionalIndexNumberDefaults["TupleType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTupleTypeString: IndexNumberDefaults["TupleType"]["String"] =
  { "3": ["two"] };
const SecondMakeRequiredPropertySignatureIndexNumberTupleTypeString: IndexNumberDefaults["TupleType"]["String"] =
  {};
const OptionalPropertySignatureIndexNumberTupleTypeNumber: OptionalIndexNumberDefaults["TupleType"]["Number"] =
  { "3": [2] };
const SecondOptionalPropertySignatureIndexNumberTupleTypeNumber: OptionalIndexNumberDefaults["TupleType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTupleTypeNumber: IndexNumberDefaults["TupleType"]["Number"] =
  { "3": [2] };
const SecondMakeRequiredPropertySignatureIndexNumberTupleTypeNumber: IndexNumberDefaults["TupleType"]["Number"] =
  {};
const OptionalPropertySignatureIndexNumberTupleTypeBoolean: OptionalIndexNumberDefaults["TupleType"]["Boolean"] =
  { "3": [true] };
const SecondOptionalPropertySignatureIndexNumberTupleTypeBoolean: OptionalIndexNumberDefaults["TupleType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTupleTypeBoolean: IndexNumberDefaults["TupleType"]["Boolean"] =
  { "3": [true] };
const SecondMakeRequiredPropertySignatureIndexNumberTupleTypeBoolean: IndexNumberDefaults["TupleType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexNumberTupleTypeAny: OptionalIndexNumberDefaults["TupleType"]["Any"] =
  { "3": [2] };
const SecondOptionalPropertySignatureIndexNumberTupleTypeAny: OptionalIndexNumberDefaults["TupleType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexNumberTupleTypeAny: IndexNumberDefaults["TupleType"]["Any"] =
  { "3": [2] };
const SecondMakeRequiredPropertySignatureIndexNumberTupleTypeAny: IndexNumberDefaults["TupleType"]["Any"] =
  {};

// Make Optional Property IndexNumber - ArrayType
const OptionalPropertySignatureIndexNumberArrayTypeLiteral: OptionalIndexNumberDefaults["ArrayType"]["Literal"] =
  { "3": [1, 1] };
const SecondOptionalPropertySignatureIndexNumberArrayTypeLiteral: OptionalIndexNumberDefaults["ArrayType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexNumberArrayTypeLiteral: IndexNumberDefaults["ArrayType"]["Literal"] =
  { "3": [1, 1] };
const SecondMakeRequiredPropertySignatureIndexNumberArrayTypeLiteral: IndexNumberDefaults["ArrayType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexNumberArrayTypeObject: OptionalIndexNumberDefaults["ArrayType"]["Object"] =
  { "3": [{}, {}] };
const SecondOptionalPropertySignatureIndexNumberArrayTypeObject: OptionalIndexNumberDefaults["ArrayType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexNumberArrayTypeObject: IndexNumberDefaults["ArrayType"]["Object"] =
  { "3": [{}, {}] };
const SecondMakeRequiredPropertySignatureIndexNumberArrayTypeObject: IndexNumberDefaults["ArrayType"]["Object"] =
  {};
const OptionalPropertySignatureIndexNumberArrayTypeString: OptionalIndexNumberDefaults["ArrayType"]["String"] =
  { "3": ["two", "two"] };
const SecondOptionalPropertySignatureIndexNumberArrayTypeString: OptionalIndexNumberDefaults["ArrayType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexNumberArrayTypeString: IndexNumberDefaults["ArrayType"]["String"] =
  { "3": ["two", "two"] };
const SecondMakeRequiredPropertySignatureIndexNumberArrayTypeString: IndexNumberDefaults["ArrayType"]["String"] =
  {};
const OptionalPropertySignatureIndexNumberArrayTypeNumber: OptionalIndexNumberDefaults["ArrayType"]["Number"] =
  { "3": [2, 2] };
const SecondOptionalPropertySignatureIndexNumberArrayTypeNumber: OptionalIndexNumberDefaults["ArrayType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexNumberArrayTypeNumber: IndexNumberDefaults["ArrayType"]["Number"] =
  { "3": [2, 2] };
const SecondMakeRequiredPropertySignatureIndexNumberArrayTypeNumber: IndexNumberDefaults["ArrayType"]["Number"] =
  {};
const OptionalPropertySignatureIndexNumberArrayTypeBoolean: OptionalIndexNumberDefaults["ArrayType"]["Boolean"] =
  { "3": [true, true] };
const SecondOptionalPropertySignatureIndexNumberArrayTypeBoolean: OptionalIndexNumberDefaults["ArrayType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexNumberArrayTypeBoolean: IndexNumberDefaults["ArrayType"]["Boolean"] =
  { "3": [true, true] };
const SecondMakeRequiredPropertySignatureIndexNumberArrayTypeBoolean: IndexNumberDefaults["ArrayType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexNumberArrayTypeAny: OptionalIndexNumberDefaults["ArrayType"]["Any"] =
  { "3": [2, 2] };
const SecondOptionalPropertySignatureIndexNumberArrayTypeAny: OptionalIndexNumberDefaults["ArrayType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexNumberArrayTypeAny: IndexNumberDefaults["ArrayType"]["Any"] =
  { "3": [2, 2] };
const SecondMakeRequiredPropertySignatureIndexNumberArrayTypeAny: IndexNumberDefaults["ArrayType"]["Any"] =
  {};

// Make Optional Property IndexNumber - FunctionType
const OptionalPropertySignatureIndexNumberFunctionTypeLiteral: OptionalIndexNumberDefaults["FunctionType"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexNumberFunctionTypeLiteral: OptionalIndexNumberDefaults["FunctionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexNumberFunctionTypeLiteral: IndexNumberDefaults["FunctionType"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexNumberFunctionTypeLiteral: IndexNumberDefaults["FunctionType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexNumberFunctionTypeObject: OptionalIndexNumberDefaults["FunctionType"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexNumberFunctionTypeObject: OptionalIndexNumberDefaults["FunctionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexNumberFunctionTypeObject: IndexNumberDefaults["FunctionType"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexNumberFunctionTypeObject: IndexNumberDefaults["FunctionType"]["Object"] =
  {};
const OptionalPropertySignatureIndexNumberFunctionTypeString: OptionalIndexNumberDefaults["FunctionType"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexNumberFunctionTypeString: OptionalIndexNumberDefaults["FunctionType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexNumberFunctionTypeString: IndexNumberDefaults["FunctionType"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexNumberFunctionTypeString: IndexNumberDefaults["FunctionType"]["String"] =
  {};
const OptionalPropertySignatureIndexNumberFunctionTypeNumber: OptionalIndexNumberDefaults["FunctionType"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexNumberFunctionTypeNumber: OptionalIndexNumberDefaults["FunctionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexNumberFunctionTypeNumber: IndexNumberDefaults["FunctionType"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexNumberFunctionTypeNumber: IndexNumberDefaults["FunctionType"]["Number"] =
  {};
const OptionalPropertySignatureIndexNumberFunctionTypeBoolean: OptionalIndexNumberDefaults["FunctionType"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexNumberFunctionTypeBoolean: OptionalIndexNumberDefaults["FunctionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexNumberFunctionTypeBoolean: IndexNumberDefaults["FunctionType"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexNumberFunctionTypeBoolean: IndexNumberDefaults["FunctionType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexNumberFunctionTypeAny: OptionalIndexNumberDefaults["FunctionType"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexNumberFunctionTypeAny: OptionalIndexNumberDefaults["FunctionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexNumberFunctionTypeAny: IndexNumberDefaults["FunctionType"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexNumberFunctionTypeAny: IndexNumberDefaults["FunctionType"]["Any"] =
  {};

// Make Optional Property IndexNumber - ConstructorType
const OptionalPropertySignatureIndexNumberConstructorTypeLiteral: OptionalIndexNumberDefaults["ConstructorType"]["Literal"] =
  { "3": 1 };
const SecondOptionalPropertySignatureIndexNumberConstructorTypeLiteral: OptionalIndexNumberDefaults["ConstructorType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexNumberConstructorTypeLiteral: IndexNumberDefaults["ConstructorType"]["Literal"] =
  { "3": 1 };
const SecondMakeRequiredPropertySignatureIndexNumberConstructorTypeLiteral: IndexNumberDefaults["ConstructorType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexNumberConstructorTypeObject: OptionalIndexNumberDefaults["ConstructorType"]["Object"] =
  { "3": {} };
const SecondOptionalPropertySignatureIndexNumberConstructorTypeObject: OptionalIndexNumberDefaults["ConstructorType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexNumberConstructorTypeObject: IndexNumberDefaults["ConstructorType"]["Object"] =
  { "3": {} };
const SecondMakeRequiredPropertySignatureIndexNumberConstructorTypeObject: IndexNumberDefaults["ConstructorType"]["Object"] =
  {};
const OptionalPropertySignatureIndexNumberConstructorTypeString: OptionalIndexNumberDefaults["ConstructorType"]["String"] =
  { "3": "two" };
const SecondOptionalPropertySignatureIndexNumberConstructorTypeString: OptionalIndexNumberDefaults["ConstructorType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexNumberConstructorTypeString: IndexNumberDefaults["ConstructorType"]["String"] =
  { "3": "two" };
const SecondMakeRequiredPropertySignatureIndexNumberConstructorTypeString: IndexNumberDefaults["ConstructorType"]["String"] =
  {};
const OptionalPropertySignatureIndexNumberConstructorTypeNumber: OptionalIndexNumberDefaults["ConstructorType"]["Number"] =
  { "3": 2 };
const SecondOptionalPropertySignatureIndexNumberConstructorTypeNumber: OptionalIndexNumberDefaults["ConstructorType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexNumberConstructorTypeNumber: IndexNumberDefaults["ConstructorType"]["Number"] =
  { "3": 2 };
const SecondMakeRequiredPropertySignatureIndexNumberConstructorTypeNumber: IndexNumberDefaults["ConstructorType"]["Number"] =
  {};
const OptionalPropertySignatureIndexNumberConstructorTypeBoolean: OptionalIndexNumberDefaults["ConstructorType"]["Boolean"] =
  { "3": true };
const SecondOptionalPropertySignatureIndexNumberConstructorTypeBoolean: OptionalIndexNumberDefaults["ConstructorType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexNumberConstructorTypeBoolean: IndexNumberDefaults["ConstructorType"]["Boolean"] =
  { "3": true };
const SecondMakeRequiredPropertySignatureIndexNumberConstructorTypeBoolean: IndexNumberDefaults["ConstructorType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexNumberConstructorTypeAny: OptionalIndexNumberDefaults["ConstructorType"]["Any"] =
  { "3": 2 };
const SecondOptionalPropertySignatureIndexNumberConstructorTypeAny: OptionalIndexNumberDefaults["ConstructorType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexNumberConstructorTypeAny: IndexNumberDefaults["ConstructorType"]["Any"] =
  { "3": 2 };
const SecondMakeRequiredPropertySignatureIndexNumberConstructorTypeAny: IndexNumberDefaults["ConstructorType"]["Any"] =
  {};
