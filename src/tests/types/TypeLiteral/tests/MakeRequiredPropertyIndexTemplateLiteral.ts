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
 * Make Required Property IndexTemplateLiteral
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Make Optional Property IndexTemplateLiteral - ParenthesizedType
const OptionalPropertySignatureIndexTemplateLiteralParenthesizedTypeLiteral: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };
const SecondOptionalPropertySignatureIndexTemplateLiteralParenthesizedTypeLiteral: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralParenthesizedTypeLiteral: IndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralParenthesizedTypeLiteral: IndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralParenthesizedTypeObject: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };
const SecondOptionalPropertySignatureIndexTemplateLiteralParenthesizedTypeObject: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralParenthesizedTypeObject: IndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralParenthesizedTypeObject: IndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralParenthesizedTypeString: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };
const SecondOptionalPropertySignatureIndexTemplateLiteralParenthesizedTypeString: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralParenthesizedTypeString: IndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralParenthesizedTypeString: IndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralParenthesizedTypeNumber: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };
const SecondOptionalPropertySignatureIndexTemplateLiteralParenthesizedTypeNumber: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralParenthesizedTypeNumber: IndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralParenthesizedTypeNumber: IndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralParenthesizedTypeBoolean: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };
const SecondOptionalPropertySignatureIndexTemplateLiteralParenthesizedTypeBoolean: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralParenthesizedTypeBoolean: IndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralParenthesizedTypeBoolean: IndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralParenthesizedTypeAny: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };
const SecondOptionalPropertySignatureIndexTemplateLiteralParenthesizedTypeAny: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralParenthesizedTypeAny: IndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralParenthesizedTypeAny: IndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] =
  {};

// Make Optional Property IndexTemplateLiteral - TypeReferenceBuiltin
const OptionalPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinLiteral: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinLiteral: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinLiteral: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinLiteral: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinObject: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinObject: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinObject: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinObject: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinString: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinString: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinString: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinString: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinNumber: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinNumber: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinNumber: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinNumber: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinBoolean: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinBoolean: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinBoolean: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinBoolean: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinAny: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinAny: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinAny: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeReferenceBuiltinAny: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  {};

// Make Optional Property IndexTemplateLiteral - TypeReferencePredefined
const OptionalPropertySignatureIndexTemplateLiteralTypeReferencePredefinedLiteral: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeReferencePredefinedLiteral: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeReferencePredefinedLiteral: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeReferencePredefinedLiteral: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeReferencePredefinedObject: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeReferencePredefinedObject: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeReferencePredefinedObject: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeReferencePredefinedObject: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeReferencePredefinedString: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeReferencePredefinedString: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeReferencePredefinedString: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeReferencePredefinedString: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeReferencePredefinedNumber: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeReferencePredefinedNumber: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeReferencePredefinedNumber: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeReferencePredefinedNumber: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeReferencePredefinedBoolean: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeReferencePredefinedBoolean: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeReferencePredefinedBoolean: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeReferencePredefinedBoolean: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeReferencePredefinedAny: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeReferencePredefinedAny: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeReferencePredefinedAny: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeReferencePredefinedAny: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] =
  {};

// Make Optional Property IndexTemplateLiteral - UnionType
const OptionalPropertySignatureIndexTemplateLiteralUnionTypeLiteral: OptionalIndexTemplateLiteralDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };
const SecondOptionalPropertySignatureIndexTemplateLiteralUnionTypeLiteral: OptionalIndexTemplateLiteralDefaults["UnionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralUnionTypeLiteral: IndexTemplateLiteralDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralUnionTypeLiteral: IndexTemplateLiteralDefaults["UnionType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralUnionTypeObject: OptionalIndexTemplateLiteralDefaults["UnionType"]["Object"] =
  { fooKey: {} };
const SecondOptionalPropertySignatureIndexTemplateLiteralUnionTypeObject: OptionalIndexTemplateLiteralDefaults["UnionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralUnionTypeObject: IndexTemplateLiteralDefaults["UnionType"]["Object"] =
  { fooKey: {} };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralUnionTypeObject: IndexTemplateLiteralDefaults["UnionType"]["Object"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralUnionTypeString: OptionalIndexTemplateLiteralDefaults["UnionType"]["String"] =
  { fooKey: "two" };
const SecondOptionalPropertySignatureIndexTemplateLiteralUnionTypeString: OptionalIndexTemplateLiteralDefaults["UnionType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralUnionTypeString: IndexTemplateLiteralDefaults["UnionType"]["String"] =
  { fooKey: "two" };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralUnionTypeString: IndexTemplateLiteralDefaults["UnionType"]["String"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralUnionTypeNumber: OptionalIndexTemplateLiteralDefaults["UnionType"]["Number"] =
  { fooKey: 2 };
const SecondOptionalPropertySignatureIndexTemplateLiteralUnionTypeNumber: OptionalIndexTemplateLiteralDefaults["UnionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralUnionTypeNumber: IndexTemplateLiteralDefaults["UnionType"]["Number"] =
  { fooKey: 2 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralUnionTypeNumber: IndexTemplateLiteralDefaults["UnionType"]["Number"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralUnionTypeBoolean: OptionalIndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  { fooKey: true };
const SecondOptionalPropertySignatureIndexTemplateLiteralUnionTypeBoolean: OptionalIndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralUnionTypeBoolean: IndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  { fooKey: true };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralUnionTypeBoolean: IndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralUnionTypeAny: OptionalIndexTemplateLiteralDefaults["UnionType"]["Any"] =
  { fooKey: 2 };
const SecondOptionalPropertySignatureIndexTemplateLiteralUnionTypeAny: OptionalIndexTemplateLiteralDefaults["UnionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralUnionTypeAny: IndexTemplateLiteralDefaults["UnionType"]["Any"] =
  { fooKey: 2 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralUnionTypeAny: IndexTemplateLiteralDefaults["UnionType"]["Any"] =
  {};

// Make Optional Property IndexTemplateLiteral - IntersectionType
const OptionalPropertySignatureIndexTemplateLiteralIntersectionTypeLiteral: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };
const SecondOptionalPropertySignatureIndexTemplateLiteralIntersectionTypeLiteral: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralIntersectionTypeLiteral: IndexTemplateLiteralDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralIntersectionTypeLiteral: IndexTemplateLiteralDefaults["IntersectionType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralIntersectionTypeObject: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };
const SecondOptionalPropertySignatureIndexTemplateLiteralIntersectionTypeObject: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralIntersectionTypeObject: IndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralIntersectionTypeObject: IndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralIntersectionTypeString: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };
const SecondOptionalPropertySignatureIndexTemplateLiteralIntersectionTypeString: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralIntersectionTypeString: IndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralIntersectionTypeString: IndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralIntersectionTypeNumber: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };
const SecondOptionalPropertySignatureIndexTemplateLiteralIntersectionTypeNumber: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralIntersectionTypeNumber: IndexTemplateLiteralDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralIntersectionTypeNumber: IndexTemplateLiteralDefaults["IntersectionType"]["Number"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralIntersectionTypeBoolean: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };
const SecondOptionalPropertySignatureIndexTemplateLiteralIntersectionTypeBoolean: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralIntersectionTypeBoolean: IndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralIntersectionTypeBoolean: IndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralIntersectionTypeAny: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };
const SecondOptionalPropertySignatureIndexTemplateLiteralIntersectionTypeAny: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralIntersectionTypeAny: IndexTemplateLiteralDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralIntersectionTypeAny: IndexTemplateLiteralDefaults["IntersectionType"]["Any"] =
  {};

// Make Optional Property IndexTemplateLiteral - TypeLiteral
const OptionalPropertySignatureIndexTemplateLiteralTypeLiteralLiteral: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeLiteralLiteral: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeLiteralLiteral: IndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeLiteralLiteral: IndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeLiteralObject: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeLiteralObject: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeLiteralObject: IndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeLiteralObject: IndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeLiteralString: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeLiteralString: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeLiteralString: IndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeLiteralString: IndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeLiteralNumber: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeLiteralNumber: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeLiteralNumber: IndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeLiteralNumber: IndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeLiteralBoolean: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeLiteralBoolean: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeLiteralBoolean: IndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeLiteralBoolean: IndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTypeLiteralAny: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };
const SecondOptionalPropertySignatureIndexTemplateLiteralTypeLiteralAny: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTypeLiteralAny: IndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTypeLiteralAny: IndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  {};

// Make Optional Property IndexTemplateLiteral - TupleType
const OptionalPropertySignatureIndexTemplateLiteralTupleTypeLiteral: OptionalIndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };
const SecondOptionalPropertySignatureIndexTemplateLiteralTupleTypeLiteral: OptionalIndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTupleTypeLiteral: IndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTupleTypeLiteral: IndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTupleTypeObject: OptionalIndexTemplateLiteralDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };
const SecondOptionalPropertySignatureIndexTemplateLiteralTupleTypeObject: OptionalIndexTemplateLiteralDefaults["TupleType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTupleTypeObject: IndexTemplateLiteralDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTupleTypeObject: IndexTemplateLiteralDefaults["TupleType"]["Object"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTupleTypeString: OptionalIndexTemplateLiteralDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };
const SecondOptionalPropertySignatureIndexTemplateLiteralTupleTypeString: OptionalIndexTemplateLiteralDefaults["TupleType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTupleTypeString: IndexTemplateLiteralDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTupleTypeString: IndexTemplateLiteralDefaults["TupleType"]["String"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTupleTypeNumber: OptionalIndexTemplateLiteralDefaults["TupleType"]["Number"] =
  { fooKey: [2] };
const SecondOptionalPropertySignatureIndexTemplateLiteralTupleTypeNumber: OptionalIndexTemplateLiteralDefaults["TupleType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTupleTypeNumber: IndexTemplateLiteralDefaults["TupleType"]["Number"] =
  { fooKey: [2] };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTupleTypeNumber: IndexTemplateLiteralDefaults["TupleType"]["Number"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTupleTypeBoolean: OptionalIndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };
const SecondOptionalPropertySignatureIndexTemplateLiteralTupleTypeBoolean: OptionalIndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTupleTypeBoolean: IndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTupleTypeBoolean: IndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralTupleTypeAny: OptionalIndexTemplateLiteralDefaults["TupleType"]["Any"] =
  { fooKey: [2] };
const SecondOptionalPropertySignatureIndexTemplateLiteralTupleTypeAny: OptionalIndexTemplateLiteralDefaults["TupleType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralTupleTypeAny: IndexTemplateLiteralDefaults["TupleType"]["Any"] =
  { fooKey: [2] };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralTupleTypeAny: IndexTemplateLiteralDefaults["TupleType"]["Any"] =
  {};

// Make Optional Property IndexTemplateLiteral - ArrayType
const OptionalPropertySignatureIndexTemplateLiteralArrayTypeLiteral: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };
const SecondOptionalPropertySignatureIndexTemplateLiteralArrayTypeLiteral: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralArrayTypeLiteral: IndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralArrayTypeLiteral: IndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralArrayTypeObject: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };
const SecondOptionalPropertySignatureIndexTemplateLiteralArrayTypeObject: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralArrayTypeObject: IndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralArrayTypeObject: IndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralArrayTypeString: OptionalIndexTemplateLiteralDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };
const SecondOptionalPropertySignatureIndexTemplateLiteralArrayTypeString: OptionalIndexTemplateLiteralDefaults["ArrayType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralArrayTypeString: IndexTemplateLiteralDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralArrayTypeString: IndexTemplateLiteralDefaults["ArrayType"]["String"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralArrayTypeNumber: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };
const SecondOptionalPropertySignatureIndexTemplateLiteralArrayTypeNumber: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralArrayTypeNumber: IndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralArrayTypeNumber: IndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralArrayTypeBoolean: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };
const SecondOptionalPropertySignatureIndexTemplateLiteralArrayTypeBoolean: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralArrayTypeBoolean: IndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralArrayTypeBoolean: IndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralArrayTypeAny: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };
const SecondOptionalPropertySignatureIndexTemplateLiteralArrayTypeAny: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralArrayTypeAny: IndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralArrayTypeAny: IndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  {};

// Make Optional Property IndexTemplateLiteral - FunctionType
const OptionalPropertySignatureIndexTemplateLiteralFunctionTypeLiteral: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Literal"] =
  {};
const SecondOptionalPropertySignatureIndexTemplateLiteralFunctionTypeLiteral: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralFunctionTypeLiteral: IndexTemplateLiteralDefaults["FunctionType"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralFunctionTypeLiteral: IndexTemplateLiteralDefaults["FunctionType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralFunctionTypeObject: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Object"] =
  {};
const SecondOptionalPropertySignatureIndexTemplateLiteralFunctionTypeObject: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralFunctionTypeObject: IndexTemplateLiteralDefaults["FunctionType"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralFunctionTypeObject: IndexTemplateLiteralDefaults["FunctionType"]["Object"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralFunctionTypeString: OptionalIndexTemplateLiteralDefaults["FunctionType"]["String"] =
  {};
const SecondOptionalPropertySignatureIndexTemplateLiteralFunctionTypeString: OptionalIndexTemplateLiteralDefaults["FunctionType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralFunctionTypeString: IndexTemplateLiteralDefaults["FunctionType"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralFunctionTypeString: IndexTemplateLiteralDefaults["FunctionType"]["String"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralFunctionTypeNumber: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Number"] =
  {};
const SecondOptionalPropertySignatureIndexTemplateLiteralFunctionTypeNumber: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralFunctionTypeNumber: IndexTemplateLiteralDefaults["FunctionType"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralFunctionTypeNumber: IndexTemplateLiteralDefaults["FunctionType"]["Number"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralFunctionTypeBoolean: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureIndexTemplateLiteralFunctionTypeBoolean: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralFunctionTypeBoolean: IndexTemplateLiteralDefaults["FunctionType"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralFunctionTypeBoolean: IndexTemplateLiteralDefaults["FunctionType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralFunctionTypeAny: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Any"] =
  {};
const SecondOptionalPropertySignatureIndexTemplateLiteralFunctionTypeAny: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralFunctionTypeAny: IndexTemplateLiteralDefaults["FunctionType"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralFunctionTypeAny: IndexTemplateLiteralDefaults["FunctionType"]["Any"] =
  {};

// Make Optional Property IndexTemplateLiteral - ConstructorType
const OptionalPropertySignatureIndexTemplateLiteralConstructorTypeLiteral: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };
const SecondOptionalPropertySignatureIndexTemplateLiteralConstructorTypeLiteral: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralConstructorTypeLiteral: IndexTemplateLiteralDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralConstructorTypeLiteral: IndexTemplateLiteralDefaults["ConstructorType"]["Literal"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralConstructorTypeObject: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };
const SecondOptionalPropertySignatureIndexTemplateLiteralConstructorTypeObject: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralConstructorTypeObject: IndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralConstructorTypeObject: IndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralConstructorTypeString: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };
const SecondOptionalPropertySignatureIndexTemplateLiteralConstructorTypeString: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralConstructorTypeString: IndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralConstructorTypeString: IndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralConstructorTypeNumber: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };
const SecondOptionalPropertySignatureIndexTemplateLiteralConstructorTypeNumber: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Number"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralConstructorTypeNumber: IndexTemplateLiteralDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralConstructorTypeNumber: IndexTemplateLiteralDefaults["ConstructorType"]["Number"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralConstructorTypeBoolean: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };
const SecondOptionalPropertySignatureIndexTemplateLiteralConstructorTypeBoolean: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralConstructorTypeBoolean: IndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralConstructorTypeBoolean: IndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  {};
const OptionalPropertySignatureIndexTemplateLiteralConstructorTypeAny: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
const SecondOptionalPropertySignatureIndexTemplateLiteralConstructorTypeAny: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Any"] =
  {};
const MakeRequiredPropertySignatureIndexTemplateLiteralConstructorTypeAny: IndexTemplateLiteralDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
const SecondMakeRequiredPropertySignatureIndexTemplateLiteralConstructorTypeAny: IndexTemplateLiteralDefaults["ConstructorType"]["Any"] =
  {};
