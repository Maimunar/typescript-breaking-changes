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
 * Make Required Property IndexString
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Make Optional Property IndexString - ParenthesizedType
const OptionalPropertySignatureIndexStringParenthesizedTypeLiteral: OptionalIndexStringDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };
const SecondOptionalPropertySignatureIndexStringParenthesizedTypeLiteral: OptionalIndexStringDefaults["ParenthesizedType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexStringParenthesizedTypeLiteral: IndexStringDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };
const SecondMakeRequiredPropertySignatureIndexStringParenthesizedTypeLiteral: IndexStringDefaults["ParenthesizedType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexStringParenthesizedTypeObject: OptionalIndexStringDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };
const SecondOptionalPropertySignatureIndexStringParenthesizedTypeObject: OptionalIndexStringDefaults["ParenthesizedType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexStringParenthesizedTypeObject: IndexStringDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };
const SecondMakeRequiredPropertySignatureIndexStringParenthesizedTypeObject: IndexStringDefaults["ParenthesizedType"]["Object"] =
  {};
const OptionalPropertySignatureIndexStringParenthesizedTypeString: OptionalIndexStringDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };
const SecondOptionalPropertySignatureIndexStringParenthesizedTypeString: OptionalIndexStringDefaults["ParenthesizedType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexStringParenthesizedTypeString: IndexStringDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };
const SecondMakeRequiredPropertySignatureIndexStringParenthesizedTypeString: IndexStringDefaults["ParenthesizedType"]["String"] =
  {};
const OptionalPropertySignatureIndexStringParenthesizedTypeNumber: OptionalIndexStringDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };
const SecondOptionalPropertySignatureIndexStringParenthesizedTypeNumber: OptionalIndexStringDefaults["ParenthesizedType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexStringParenthesizedTypeNumber: IndexStringDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };
const SecondMakeRequiredPropertySignatureIndexStringParenthesizedTypeNumber: IndexStringDefaults["ParenthesizedType"]["Number"] =
  {};
const OptionalPropertySignatureIndexStringParenthesizedTypeBoolean: OptionalIndexStringDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };
const SecondOptionalPropertySignatureIndexStringParenthesizedTypeBoolean: OptionalIndexStringDefaults["ParenthesizedType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexStringParenthesizedTypeBoolean: IndexStringDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };
const SecondMakeRequiredPropertySignatureIndexStringParenthesizedTypeBoolean: IndexStringDefaults["ParenthesizedType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexStringParenthesizedTypeAny: OptionalIndexStringDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };
const SecondOptionalPropertySignatureIndexStringParenthesizedTypeAny: OptionalIndexStringDefaults["ParenthesizedType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexStringParenthesizedTypeAny: IndexStringDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };
const SecondMakeRequiredPropertySignatureIndexStringParenthesizedTypeAny: IndexStringDefaults["ParenthesizedType"]["Any"] =
  {};

// Make Optional Property IndexString - TypeReferenceBuiltin
const OptionalPropertySignatureIndexStringTypeReferenceBuiltinLiteral: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };
const SecondOptionalPropertySignatureIndexStringTypeReferenceBuiltinLiteral: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeReferenceBuiltinLiteral: IndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };
const SecondMakeRequiredPropertySignatureIndexStringTypeReferenceBuiltinLiteral: IndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const OptionalPropertySignatureIndexStringTypeReferenceBuiltinObject: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };
const SecondOptionalPropertySignatureIndexStringTypeReferenceBuiltinObject: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeReferenceBuiltinObject: IndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };
const SecondMakeRequiredPropertySignatureIndexStringTypeReferenceBuiltinObject: IndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const OptionalPropertySignatureIndexStringTypeReferenceBuiltinString: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };
const SecondOptionalPropertySignatureIndexStringTypeReferenceBuiltinString: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeReferenceBuiltinString: IndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };
const SecondMakeRequiredPropertySignatureIndexStringTypeReferenceBuiltinString: IndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const OptionalPropertySignatureIndexStringTypeReferenceBuiltinNumber: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };
const SecondOptionalPropertySignatureIndexStringTypeReferenceBuiltinNumber: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeReferenceBuiltinNumber: IndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };
const SecondMakeRequiredPropertySignatureIndexStringTypeReferenceBuiltinNumber: IndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const OptionalPropertySignatureIndexStringTypeReferenceBuiltinBoolean: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };
const SecondOptionalPropertySignatureIndexStringTypeReferenceBuiltinBoolean: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeReferenceBuiltinBoolean: IndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };
const SecondMakeRequiredPropertySignatureIndexStringTypeReferenceBuiltinBoolean: IndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexStringTypeReferenceBuiltinAny: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };
const SecondOptionalPropertySignatureIndexStringTypeReferenceBuiltinAny: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeReferenceBuiltinAny: IndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };
const SecondMakeRequiredPropertySignatureIndexStringTypeReferenceBuiltinAny: IndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  {};

// Make Optional Property IndexString - TypeReferencePredefined
const OptionalPropertySignatureIndexStringTypeReferencePredefinedLiteral: OptionalIndexStringDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };
const SecondOptionalPropertySignatureIndexStringTypeReferencePredefinedLiteral: OptionalIndexStringDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeReferencePredefinedLiteral: IndexStringDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };
const SecondMakeRequiredPropertySignatureIndexStringTypeReferencePredefinedLiteral: IndexStringDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const OptionalPropertySignatureIndexStringTypeReferencePredefinedObject: OptionalIndexStringDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };
const SecondOptionalPropertySignatureIndexStringTypeReferencePredefinedObject: OptionalIndexStringDefaults["TypeReferencePredefined"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeReferencePredefinedObject: IndexStringDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };
const SecondMakeRequiredPropertySignatureIndexStringTypeReferencePredefinedObject: IndexStringDefaults["TypeReferencePredefined"]["Object"] =
  {};
const OptionalPropertySignatureIndexStringTypeReferencePredefinedString: OptionalIndexStringDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };
const SecondOptionalPropertySignatureIndexStringTypeReferencePredefinedString: OptionalIndexStringDefaults["TypeReferencePredefined"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeReferencePredefinedString: IndexStringDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };
const SecondMakeRequiredPropertySignatureIndexStringTypeReferencePredefinedString: IndexStringDefaults["TypeReferencePredefined"]["String"] =
  {};
const OptionalPropertySignatureIndexStringTypeReferencePredefinedNumber: OptionalIndexStringDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };
const SecondOptionalPropertySignatureIndexStringTypeReferencePredefinedNumber: OptionalIndexStringDefaults["TypeReferencePredefined"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeReferencePredefinedNumber: IndexStringDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };
const SecondMakeRequiredPropertySignatureIndexStringTypeReferencePredefinedNumber: IndexStringDefaults["TypeReferencePredefined"]["Number"] =
  {};
const OptionalPropertySignatureIndexStringTypeReferencePredefinedBoolean: OptionalIndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };
const SecondOptionalPropertySignatureIndexStringTypeReferencePredefinedBoolean: OptionalIndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeReferencePredefinedBoolean: IndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };
const SecondMakeRequiredPropertySignatureIndexStringTypeReferencePredefinedBoolean: IndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexStringTypeReferencePredefinedAny: OptionalIndexStringDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };
const SecondOptionalPropertySignatureIndexStringTypeReferencePredefinedAny: OptionalIndexStringDefaults["TypeReferencePredefined"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeReferencePredefinedAny: IndexStringDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };
const SecondMakeRequiredPropertySignatureIndexStringTypeReferencePredefinedAny: IndexStringDefaults["TypeReferencePredefined"]["Any"] =
  {};

// Make Optional Property IndexString - UnionType
const OptionalPropertySignatureIndexStringUnionTypeLiteral: OptionalIndexStringDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };
const SecondOptionalPropertySignatureIndexStringUnionTypeLiteral: OptionalIndexStringDefaults["UnionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexStringUnionTypeLiteral: IndexStringDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };
const SecondMakeRequiredPropertySignatureIndexStringUnionTypeLiteral: IndexStringDefaults["UnionType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexStringUnionTypeObject: OptionalIndexStringDefaults["UnionType"]["Object"] =
  { otherKey: {} };
const SecondOptionalPropertySignatureIndexStringUnionTypeObject: OptionalIndexStringDefaults["UnionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexStringUnionTypeObject: IndexStringDefaults["UnionType"]["Object"] =
  { otherKey: {} };
const SecondMakeRequiredPropertySignatureIndexStringUnionTypeObject: IndexStringDefaults["UnionType"]["Object"] =
  {};
const OptionalPropertySignatureIndexStringUnionTypeString: OptionalIndexStringDefaults["UnionType"]["String"] =
  { otherKey: "two" };
const SecondOptionalPropertySignatureIndexStringUnionTypeString: OptionalIndexStringDefaults["UnionType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexStringUnionTypeString: IndexStringDefaults["UnionType"]["String"] =
  { otherKey: "two" };
const SecondMakeRequiredPropertySignatureIndexStringUnionTypeString: IndexStringDefaults["UnionType"]["String"] =
  {};
const OptionalPropertySignatureIndexStringUnionTypeNumber: OptionalIndexStringDefaults["UnionType"]["Number"] =
  { otherKey: 2 };
const SecondOptionalPropertySignatureIndexStringUnionTypeNumber: OptionalIndexStringDefaults["UnionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexStringUnionTypeNumber: IndexStringDefaults["UnionType"]["Number"] =
  { otherKey: 2 };
const SecondMakeRequiredPropertySignatureIndexStringUnionTypeNumber: IndexStringDefaults["UnionType"]["Number"] =
  {};
const OptionalPropertySignatureIndexStringUnionTypeBoolean: OptionalIndexStringDefaults["UnionType"]["Boolean"] =
  { otherKey: true };
const SecondOptionalPropertySignatureIndexStringUnionTypeBoolean: OptionalIndexStringDefaults["UnionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexStringUnionTypeBoolean: IndexStringDefaults["UnionType"]["Boolean"] =
  { otherKey: true };
const SecondMakeRequiredPropertySignatureIndexStringUnionTypeBoolean: IndexStringDefaults["UnionType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexStringUnionTypeAny: OptionalIndexStringDefaults["UnionType"]["Any"] =
  { otherKey: 2 };
const SecondOptionalPropertySignatureIndexStringUnionTypeAny: OptionalIndexStringDefaults["UnionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexStringUnionTypeAny: IndexStringDefaults["UnionType"]["Any"] =
  { otherKey: 2 };
const SecondMakeRequiredPropertySignatureIndexStringUnionTypeAny: IndexStringDefaults["UnionType"]["Any"] =
  {};

// Make Optional Property IndexString - IntersectionType
const OptionalPropertySignatureIndexStringIntersectionTypeLiteral: OptionalIndexStringDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };
const SecondOptionalPropertySignatureIndexStringIntersectionTypeLiteral: OptionalIndexStringDefaults["IntersectionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexStringIntersectionTypeLiteral: IndexStringDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };
const SecondMakeRequiredPropertySignatureIndexStringIntersectionTypeLiteral: IndexStringDefaults["IntersectionType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexStringIntersectionTypeObject: OptionalIndexStringDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };
const SecondOptionalPropertySignatureIndexStringIntersectionTypeObject: OptionalIndexStringDefaults["IntersectionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexStringIntersectionTypeObject: IndexStringDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };
const SecondMakeRequiredPropertySignatureIndexStringIntersectionTypeObject: IndexStringDefaults["IntersectionType"]["Object"] =
  {};
const OptionalPropertySignatureIndexStringIntersectionTypeString: OptionalIndexStringDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };
const SecondOptionalPropertySignatureIndexStringIntersectionTypeString: OptionalIndexStringDefaults["IntersectionType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexStringIntersectionTypeString: IndexStringDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };
const SecondMakeRequiredPropertySignatureIndexStringIntersectionTypeString: IndexStringDefaults["IntersectionType"]["String"] =
  {};
const OptionalPropertySignatureIndexStringIntersectionTypeNumber: OptionalIndexStringDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };
const SecondOptionalPropertySignatureIndexStringIntersectionTypeNumber: OptionalIndexStringDefaults["IntersectionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexStringIntersectionTypeNumber: IndexStringDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };
const SecondMakeRequiredPropertySignatureIndexStringIntersectionTypeNumber: IndexStringDefaults["IntersectionType"]["Number"] =
  {};
const OptionalPropertySignatureIndexStringIntersectionTypeBoolean: OptionalIndexStringDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };
const SecondOptionalPropertySignatureIndexStringIntersectionTypeBoolean: OptionalIndexStringDefaults["IntersectionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexStringIntersectionTypeBoolean: IndexStringDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };
const SecondMakeRequiredPropertySignatureIndexStringIntersectionTypeBoolean: IndexStringDefaults["IntersectionType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexStringIntersectionTypeAny: OptionalIndexStringDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };
const SecondOptionalPropertySignatureIndexStringIntersectionTypeAny: OptionalIndexStringDefaults["IntersectionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexStringIntersectionTypeAny: IndexStringDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };
const SecondMakeRequiredPropertySignatureIndexStringIntersectionTypeAny: IndexStringDefaults["IntersectionType"]["Any"] =
  {};

// Make Optional Property IndexString - TypeLiteral
const OptionalPropertySignatureIndexStringTypeLiteralLiteral: OptionalIndexStringDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };
const SecondOptionalPropertySignatureIndexStringTypeLiteralLiteral: OptionalIndexStringDefaults["TypeLiteral"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeLiteralLiteral: IndexStringDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };
const SecondMakeRequiredPropertySignatureIndexStringTypeLiteralLiteral: IndexStringDefaults["TypeLiteral"]["Literal"] =
  {};
const OptionalPropertySignatureIndexStringTypeLiteralObject: OptionalIndexStringDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };
const SecondOptionalPropertySignatureIndexStringTypeLiteralObject: OptionalIndexStringDefaults["TypeLiteral"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeLiteralObject: IndexStringDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };
const SecondMakeRequiredPropertySignatureIndexStringTypeLiteralObject: IndexStringDefaults["TypeLiteral"]["Object"] =
  {};
const OptionalPropertySignatureIndexStringTypeLiteralString: OptionalIndexStringDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };
const SecondOptionalPropertySignatureIndexStringTypeLiteralString: OptionalIndexStringDefaults["TypeLiteral"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeLiteralString: IndexStringDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };
const SecondMakeRequiredPropertySignatureIndexStringTypeLiteralString: IndexStringDefaults["TypeLiteral"]["String"] =
  {};
const OptionalPropertySignatureIndexStringTypeLiteralNumber: OptionalIndexStringDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };
const SecondOptionalPropertySignatureIndexStringTypeLiteralNumber: OptionalIndexStringDefaults["TypeLiteral"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeLiteralNumber: IndexStringDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };
const SecondMakeRequiredPropertySignatureIndexStringTypeLiteralNumber: IndexStringDefaults["TypeLiteral"]["Number"] =
  {};
const OptionalPropertySignatureIndexStringTypeLiteralBoolean: OptionalIndexStringDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };
const SecondOptionalPropertySignatureIndexStringTypeLiteralBoolean: OptionalIndexStringDefaults["TypeLiteral"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeLiteralBoolean: IndexStringDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };
const SecondMakeRequiredPropertySignatureIndexStringTypeLiteralBoolean: IndexStringDefaults["TypeLiteral"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexStringTypeLiteralAny: OptionalIndexStringDefaults["TypeLiteral"]["Any"] =
  { otherKey: { key: 2 } };
const SecondOptionalPropertySignatureIndexStringTypeLiteralAny: OptionalIndexStringDefaults["TypeLiteral"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexStringTypeLiteralAny: IndexStringDefaults["TypeLiteral"]["Any"] =
  { otherKey: { key: 2 } };
const SecondMakeRequiredPropertySignatureIndexStringTypeLiteralAny: IndexStringDefaults["TypeLiteral"]["Any"] =
  {};

// Make Optional Property IndexString - TupleType
const OptionalPropertySignatureIndexStringTupleTypeLiteral: OptionalIndexStringDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };
const SecondOptionalPropertySignatureIndexStringTupleTypeLiteral: OptionalIndexStringDefaults["TupleType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexStringTupleTypeLiteral: IndexStringDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };
const SecondMakeRequiredPropertySignatureIndexStringTupleTypeLiteral: IndexStringDefaults["TupleType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexStringTupleTypeObject: OptionalIndexStringDefaults["TupleType"]["Object"] =
  { otherKey: [{}] };
const SecondOptionalPropertySignatureIndexStringTupleTypeObject: OptionalIndexStringDefaults["TupleType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexStringTupleTypeObject: IndexStringDefaults["TupleType"]["Object"] =
  { otherKey: [{}] };
const SecondMakeRequiredPropertySignatureIndexStringTupleTypeObject: IndexStringDefaults["TupleType"]["Object"] =
  {};
const OptionalPropertySignatureIndexStringTupleTypeString: OptionalIndexStringDefaults["TupleType"]["String"] =
  { otherKey: ["two"] };
const SecondOptionalPropertySignatureIndexStringTupleTypeString: OptionalIndexStringDefaults["TupleType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexStringTupleTypeString: IndexStringDefaults["TupleType"]["String"] =
  { otherKey: ["two"] };
const SecondMakeRequiredPropertySignatureIndexStringTupleTypeString: IndexStringDefaults["TupleType"]["String"] =
  {};
const OptionalPropertySignatureIndexStringTupleTypeNumber: OptionalIndexStringDefaults["TupleType"]["Number"] =
  { otherKey: [2] };
const SecondOptionalPropertySignatureIndexStringTupleTypeNumber: OptionalIndexStringDefaults["TupleType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexStringTupleTypeNumber: IndexStringDefaults["TupleType"]["Number"] =
  { otherKey: [2] };
const SecondMakeRequiredPropertySignatureIndexStringTupleTypeNumber: IndexStringDefaults["TupleType"]["Number"] =
  {};
const OptionalPropertySignatureIndexStringTupleTypeBoolean: OptionalIndexStringDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };
const SecondOptionalPropertySignatureIndexStringTupleTypeBoolean: OptionalIndexStringDefaults["TupleType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexStringTupleTypeBoolean: IndexStringDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };
const SecondMakeRequiredPropertySignatureIndexStringTupleTypeBoolean: IndexStringDefaults["TupleType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexStringTupleTypeAny: OptionalIndexStringDefaults["TupleType"]["Any"] =
  { otherKey: [2] };
const SecondOptionalPropertySignatureIndexStringTupleTypeAny: OptionalIndexStringDefaults["TupleType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexStringTupleTypeAny: IndexStringDefaults["TupleType"]["Any"] =
  { otherKey: [2] };
const SecondMakeRequiredPropertySignatureIndexStringTupleTypeAny: IndexStringDefaults["TupleType"]["Any"] =
  {};

// Make Optional Property IndexString - ArrayType
const OptionalPropertySignatureIndexStringArrayTypeLiteral: OptionalIndexStringDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };
const SecondOptionalPropertySignatureIndexStringArrayTypeLiteral: OptionalIndexStringDefaults["ArrayType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexStringArrayTypeLiteral: IndexStringDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };
const SecondMakeRequiredPropertySignatureIndexStringArrayTypeLiteral: IndexStringDefaults["ArrayType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexStringArrayTypeObject: OptionalIndexStringDefaults["ArrayType"]["Object"] =
  { otherKey: [{}, {}] };
const SecondOptionalPropertySignatureIndexStringArrayTypeObject: OptionalIndexStringDefaults["ArrayType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexStringArrayTypeObject: IndexStringDefaults["ArrayType"]["Object"] =
  { otherKey: [{}, {}] };
const SecondMakeRequiredPropertySignatureIndexStringArrayTypeObject: IndexStringDefaults["ArrayType"]["Object"] =
  {};
const OptionalPropertySignatureIndexStringArrayTypeString: OptionalIndexStringDefaults["ArrayType"]["String"] =
  { otherKey: ["two", "two"] };
const SecondOptionalPropertySignatureIndexStringArrayTypeString: OptionalIndexStringDefaults["ArrayType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexStringArrayTypeString: IndexStringDefaults["ArrayType"]["String"] =
  { otherKey: ["two", "two"] };
const SecondMakeRequiredPropertySignatureIndexStringArrayTypeString: IndexStringDefaults["ArrayType"]["String"] =
  {};
const OptionalPropertySignatureIndexStringArrayTypeNumber: OptionalIndexStringDefaults["ArrayType"]["Number"] =
  { otherKey: [2, 2] };
const SecondOptionalPropertySignatureIndexStringArrayTypeNumber: OptionalIndexStringDefaults["ArrayType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexStringArrayTypeNumber: IndexStringDefaults["ArrayType"]["Number"] =
  { otherKey: [2, 2] };
const SecondMakeRequiredPropertySignatureIndexStringArrayTypeNumber: IndexStringDefaults["ArrayType"]["Number"] =
  {};
const OptionalPropertySignatureIndexStringArrayTypeBoolean: OptionalIndexStringDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };
const SecondOptionalPropertySignatureIndexStringArrayTypeBoolean: OptionalIndexStringDefaults["ArrayType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexStringArrayTypeBoolean: IndexStringDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };
const SecondMakeRequiredPropertySignatureIndexStringArrayTypeBoolean: IndexStringDefaults["ArrayType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexStringArrayTypeAny: OptionalIndexStringDefaults["ArrayType"]["Any"] =
  { otherKey: [2, 2] };
const SecondOptionalPropertySignatureIndexStringArrayTypeAny: OptionalIndexStringDefaults["ArrayType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexStringArrayTypeAny: IndexStringDefaults["ArrayType"]["Any"] =
  { otherKey: [2, 2] };
const SecondMakeRequiredPropertySignatureIndexStringArrayTypeAny: IndexStringDefaults["ArrayType"]["Any"] =
  {};

// Make Optional Property IndexString - FunctionType
const OptionalPropertySignatureIndexStringFunctionTypeLiteral: OptionalIndexStringDefaults["FunctionType"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexStringFunctionTypeLiteral: OptionalIndexStringDefaults["FunctionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexStringFunctionTypeLiteral: IndexStringDefaults["FunctionType"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexStringFunctionTypeLiteral: IndexStringDefaults["FunctionType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexStringFunctionTypeObject: OptionalIndexStringDefaults["FunctionType"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexStringFunctionTypeObject: OptionalIndexStringDefaults["FunctionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexStringFunctionTypeObject: IndexStringDefaults["FunctionType"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexStringFunctionTypeObject: IndexStringDefaults["FunctionType"]["Object"] =
  {};
const OptionalPropertySignatureIndexStringFunctionTypeString: OptionalIndexStringDefaults["FunctionType"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexStringFunctionTypeString: OptionalIndexStringDefaults["FunctionType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexStringFunctionTypeString: IndexStringDefaults["FunctionType"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexStringFunctionTypeString: IndexStringDefaults["FunctionType"]["String"] =
  {};
const OptionalPropertySignatureIndexStringFunctionTypeNumber: OptionalIndexStringDefaults["FunctionType"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexStringFunctionTypeNumber: OptionalIndexStringDefaults["FunctionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexStringFunctionTypeNumber: IndexStringDefaults["FunctionType"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexStringFunctionTypeNumber: IndexStringDefaults["FunctionType"]["Number"] =
  {};
const OptionalPropertySignatureIndexStringFunctionTypeBoolean: OptionalIndexStringDefaults["FunctionType"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexStringFunctionTypeBoolean: OptionalIndexStringDefaults["FunctionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexStringFunctionTypeBoolean: IndexStringDefaults["FunctionType"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexStringFunctionTypeBoolean: IndexStringDefaults["FunctionType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexStringFunctionTypeAny: OptionalIndexStringDefaults["FunctionType"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexStringFunctionTypeAny: OptionalIndexStringDefaults["FunctionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexStringFunctionTypeAny: IndexStringDefaults["FunctionType"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexStringFunctionTypeAny: IndexStringDefaults["FunctionType"]["Any"] =
  {};

// Make Optional Property IndexString - ConstructorType
const OptionalPropertySignatureIndexStringConstructorTypeLiteral: OptionalIndexStringDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };
const SecondOptionalPropertySignatureIndexStringConstructorTypeLiteral: OptionalIndexStringDefaults["ConstructorType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexStringConstructorTypeLiteral: IndexStringDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };
const SecondMakeRequiredPropertySignatureIndexStringConstructorTypeLiteral: IndexStringDefaults["ConstructorType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexStringConstructorTypeObject: OptionalIndexStringDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };
const SecondOptionalPropertySignatureIndexStringConstructorTypeObject: OptionalIndexStringDefaults["ConstructorType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexStringConstructorTypeObject: IndexStringDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };
const SecondMakeRequiredPropertySignatureIndexStringConstructorTypeObject: IndexStringDefaults["ConstructorType"]["Object"] =
  {};
const OptionalPropertySignatureIndexStringConstructorTypeString: OptionalIndexStringDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };
const SecondOptionalPropertySignatureIndexStringConstructorTypeString: OptionalIndexStringDefaults["ConstructorType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexStringConstructorTypeString: IndexStringDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };
const SecondMakeRequiredPropertySignatureIndexStringConstructorTypeString: IndexStringDefaults["ConstructorType"]["String"] =
  {};
const OptionalPropertySignatureIndexStringConstructorTypeNumber: OptionalIndexStringDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };
const SecondOptionalPropertySignatureIndexStringConstructorTypeNumber: OptionalIndexStringDefaults["ConstructorType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexStringConstructorTypeNumber: IndexStringDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };
const SecondMakeRequiredPropertySignatureIndexStringConstructorTypeNumber: IndexStringDefaults["ConstructorType"]["Number"] =
  {};
const OptionalPropertySignatureIndexStringConstructorTypeBoolean: OptionalIndexStringDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };
const SecondOptionalPropertySignatureIndexStringConstructorTypeBoolean: OptionalIndexStringDefaults["ConstructorType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexStringConstructorTypeBoolean: IndexStringDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };
const SecondMakeRequiredPropertySignatureIndexStringConstructorTypeBoolean: IndexStringDefaults["ConstructorType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexStringConstructorTypeAny: OptionalIndexStringDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
const SecondOptionalPropertySignatureIndexStringConstructorTypeAny: OptionalIndexStringDefaults["ConstructorType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexStringConstructorTypeAny: IndexStringDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
const SecondMakeRequiredPropertySignatureIndexStringConstructorTypeAny: IndexStringDefaults["ConstructorType"]["Any"] =
  {};
