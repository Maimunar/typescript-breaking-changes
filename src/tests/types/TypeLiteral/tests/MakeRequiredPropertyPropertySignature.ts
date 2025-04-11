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
 * Make Required Property PropertySignature
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Make Optional Property PropertySignature - ParenthesizedType
const OptionalPropertySignaturePropertySignatureParenthesizedTypeLiteral: OptionalPropertySignatureDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };
const SecondOptionalPropertySignaturePropertySignatureParenthesizedTypeLiteral: OptionalPropertySignatureDefaults["ParenthesizedType"]["Literal"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureParenthesizedTypeLiteral: PropertySignatureDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };
const SecondMakeRequiredPropertySignaturePropertySignatureParenthesizedTypeLiteral: PropertySignatureDefaults["ParenthesizedType"]["Literal"] =
  {};
const OptionalPropertySignaturePropertySignatureParenthesizedTypeObject: OptionalPropertySignatureDefaults["ParenthesizedType"]["Object"] =
  { key: {} };
const SecondOptionalPropertySignaturePropertySignatureParenthesizedTypeObject: OptionalPropertySignatureDefaults["ParenthesizedType"]["Object"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureParenthesizedTypeObject: PropertySignatureDefaults["ParenthesizedType"]["Object"] =
  { key: {} };
const SecondMakeRequiredPropertySignaturePropertySignatureParenthesizedTypeObject: PropertySignatureDefaults["ParenthesizedType"]["Object"] =
  {};
const OptionalPropertySignaturePropertySignatureParenthesizedTypeString: OptionalPropertySignatureDefaults["ParenthesizedType"]["String"] =
  { key: "two" };
const SecondOptionalPropertySignaturePropertySignatureParenthesizedTypeString: OptionalPropertySignatureDefaults["ParenthesizedType"]["String"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureParenthesizedTypeString: PropertySignatureDefaults["ParenthesizedType"]["String"] =
  { key: "two" };
const SecondMakeRequiredPropertySignaturePropertySignatureParenthesizedTypeString: PropertySignatureDefaults["ParenthesizedType"]["String"] =
  {};
const OptionalPropertySignaturePropertySignatureParenthesizedTypeNumber: OptionalPropertySignatureDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };
const SecondOptionalPropertySignaturePropertySignatureParenthesizedTypeNumber: OptionalPropertySignatureDefaults["ParenthesizedType"]["Number"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureParenthesizedTypeNumber: PropertySignatureDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };
const SecondMakeRequiredPropertySignaturePropertySignatureParenthesizedTypeNumber: PropertySignatureDefaults["ParenthesizedType"]["Number"] =
  {};
const OptionalPropertySignaturePropertySignatureParenthesizedTypeBoolean: OptionalPropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };
const SecondOptionalPropertySignaturePropertySignatureParenthesizedTypeBoolean: OptionalPropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureParenthesizedTypeBoolean: PropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };
const SecondMakeRequiredPropertySignaturePropertySignatureParenthesizedTypeBoolean: PropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  {};
const OptionalPropertySignaturePropertySignatureParenthesizedTypeAny: OptionalPropertySignatureDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };
const SecondOptionalPropertySignaturePropertySignatureParenthesizedTypeAny: OptionalPropertySignatureDefaults["ParenthesizedType"]["Any"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureParenthesizedTypeAny: PropertySignatureDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };
const SecondMakeRequiredPropertySignaturePropertySignatureParenthesizedTypeAny: PropertySignatureDefaults["ParenthesizedType"]["Any"] =
  {};

// Make Optional Property PropertySignature - TypeReferenceBuiltin
const OptionalPropertySignaturePropertySignatureTypeReferenceBuiltinLiteral: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify({ key: 1 });
const SecondOptionalPropertySignaturePropertySignatureTypeReferenceBuiltinLiteral: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeReferenceBuiltinLiteral: PropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify({ key: 1 });
const SecondMakeRequiredPropertySignaturePropertySignatureTypeReferenceBuiltinLiteral: PropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeReferenceBuiltinObject: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({ key: {} });
const SecondOptionalPropertySignaturePropertySignatureTypeReferenceBuiltinObject: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeReferenceBuiltinObject: PropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({ key: {} });
const SecondMakeRequiredPropertySignaturePropertySignatureTypeReferenceBuiltinObject: PropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeReferenceBuiltinString: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  promisify({ key: "two" });
const SecondOptionalPropertySignaturePropertySignatureTypeReferenceBuiltinString: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeReferenceBuiltinString: PropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  promisify({ key: "two" });
const SecondMakeRequiredPropertySignaturePropertySignatureTypeReferenceBuiltinString: PropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeReferenceBuiltinNumber: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify({ key: 2 });
const SecondOptionalPropertySignaturePropertySignatureTypeReferenceBuiltinNumber: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeReferenceBuiltinNumber: PropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify({ key: 2 });
const SecondMakeRequiredPropertySignaturePropertySignatureTypeReferenceBuiltinNumber: PropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeReferenceBuiltinBoolean: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify({ key: true });
const SecondOptionalPropertySignaturePropertySignatureTypeReferenceBuiltinBoolean: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeReferenceBuiltinBoolean: PropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify({ key: true });
const SecondMakeRequiredPropertySignaturePropertySignatureTypeReferenceBuiltinBoolean: PropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeReferenceBuiltinAny: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify({ key: 2 });
const SecondOptionalPropertySignaturePropertySignatureTypeReferenceBuiltinAny: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeReferenceBuiltinAny: PropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify({ key: 2 });
const SecondMakeRequiredPropertySignaturePropertySignatureTypeReferenceBuiltinAny: PropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  {};

// Make Optional Property PropertySignature - TypeReferencePredefined
const OptionalPropertySignaturePropertySignatureTypeReferencePredefinedLiteral: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };
const SecondOptionalPropertySignaturePropertySignatureTypeReferencePredefinedLiteral: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeReferencePredefinedLiteral: PropertySignatureDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };
const SecondMakeRequiredPropertySignaturePropertySignatureTypeReferencePredefinedLiteral: PropertySignatureDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeReferencePredefinedObject: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };
const SecondOptionalPropertySignaturePropertySignatureTypeReferencePredefinedObject: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeReferencePredefinedObject: PropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };
const SecondMakeRequiredPropertySignaturePropertySignatureTypeReferencePredefinedObject: PropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeReferencePredefinedString: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };
const SecondOptionalPropertySignaturePropertySignatureTypeReferencePredefinedString: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeReferencePredefinedString: PropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };
const SecondMakeRequiredPropertySignaturePropertySignatureTypeReferencePredefinedString: PropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeReferencePredefinedNumber: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };
const SecondOptionalPropertySignaturePropertySignatureTypeReferencePredefinedNumber: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Number"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeReferencePredefinedNumber: PropertySignatureDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };
const SecondMakeRequiredPropertySignaturePropertySignatureTypeReferencePredefinedNumber: PropertySignatureDefaults["TypeReferencePredefined"]["Number"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeReferencePredefinedBoolean: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };
const SecondOptionalPropertySignaturePropertySignatureTypeReferencePredefinedBoolean: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeReferencePredefinedBoolean: PropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };
const SecondMakeRequiredPropertySignaturePropertySignatureTypeReferencePredefinedBoolean: PropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeReferencePredefinedAny: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };
const SecondOptionalPropertySignaturePropertySignatureTypeReferencePredefinedAny: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Any"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeReferencePredefinedAny: PropertySignatureDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };
const SecondMakeRequiredPropertySignaturePropertySignatureTypeReferencePredefinedAny: PropertySignatureDefaults["TypeReferencePredefined"]["Any"] =
  {};

// Make Optional Property PropertySignature - UnionType
const OptionalPropertySignaturePropertySignatureUnionTypeLiteral: OptionalPropertySignatureDefaults["UnionType"]["Literal"] =
  { key: 1 };
const SecondOptionalPropertySignaturePropertySignatureUnionTypeLiteral: OptionalPropertySignatureDefaults["UnionType"]["Literal"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureUnionTypeLiteral: PropertySignatureDefaults["UnionType"]["Literal"] =
  { key: 1 };
const SecondMakeRequiredPropertySignaturePropertySignatureUnionTypeLiteral: PropertySignatureDefaults["UnionType"]["Literal"] =
  {};
const OptionalPropertySignaturePropertySignatureUnionTypeObject: OptionalPropertySignatureDefaults["UnionType"]["Object"] =
  { key: {} };
const SecondOptionalPropertySignaturePropertySignatureUnionTypeObject: OptionalPropertySignatureDefaults["UnionType"]["Object"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureUnionTypeObject: PropertySignatureDefaults["UnionType"]["Object"] =
  { key: {} };
const SecondMakeRequiredPropertySignaturePropertySignatureUnionTypeObject: PropertySignatureDefaults["UnionType"]["Object"] =
  {};
const OptionalPropertySignaturePropertySignatureUnionTypeString: OptionalPropertySignatureDefaults["UnionType"]["String"] =
  { key: "two" };
const SecondOptionalPropertySignaturePropertySignatureUnionTypeString: OptionalPropertySignatureDefaults["UnionType"]["String"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureUnionTypeString: PropertySignatureDefaults["UnionType"]["String"] =
  { key: "two" };
const SecondMakeRequiredPropertySignaturePropertySignatureUnionTypeString: PropertySignatureDefaults["UnionType"]["String"] =
  {};
const OptionalPropertySignaturePropertySignatureUnionTypeNumber: OptionalPropertySignatureDefaults["UnionType"]["Number"] =
  { key: 2 };
const SecondOptionalPropertySignaturePropertySignatureUnionTypeNumber: OptionalPropertySignatureDefaults["UnionType"]["Number"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureUnionTypeNumber: PropertySignatureDefaults["UnionType"]["Number"] =
  { key: 2 };
const SecondMakeRequiredPropertySignaturePropertySignatureUnionTypeNumber: PropertySignatureDefaults["UnionType"]["Number"] =
  {};
const OptionalPropertySignaturePropertySignatureUnionTypeBoolean: OptionalPropertySignatureDefaults["UnionType"]["Boolean"] =
  { key: true };
const SecondOptionalPropertySignaturePropertySignatureUnionTypeBoolean: OptionalPropertySignatureDefaults["UnionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureUnionTypeBoolean: PropertySignatureDefaults["UnionType"]["Boolean"] =
  { key: true };
const SecondMakeRequiredPropertySignaturePropertySignatureUnionTypeBoolean: PropertySignatureDefaults["UnionType"]["Boolean"] =
  {};
const OptionalPropertySignaturePropertySignatureUnionTypeAny: OptionalPropertySignatureDefaults["UnionType"]["Any"] =
  { key: 2 };
const SecondOptionalPropertySignaturePropertySignatureUnionTypeAny: OptionalPropertySignatureDefaults["UnionType"]["Any"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureUnionTypeAny: PropertySignatureDefaults["UnionType"]["Any"] =
  { key: 2 };
const SecondMakeRequiredPropertySignaturePropertySignatureUnionTypeAny: PropertySignatureDefaults["UnionType"]["Any"] =
  {};

// Make Optional Property PropertySignature - IntersectionType
const OptionalPropertySignaturePropertySignatureIntersectionTypeLiteral: OptionalPropertySignatureDefaults["IntersectionType"]["Literal"] =
  { key: 1 };
const SecondOptionalPropertySignaturePropertySignatureIntersectionTypeLiteral: OptionalPropertySignatureDefaults["IntersectionType"]["Literal"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureIntersectionTypeLiteral: PropertySignatureDefaults["IntersectionType"]["Literal"] =
  { key: 1 };
const SecondMakeRequiredPropertySignaturePropertySignatureIntersectionTypeLiteral: PropertySignatureDefaults["IntersectionType"]["Literal"] =
  {};
const OptionalPropertySignaturePropertySignatureIntersectionTypeObject: OptionalPropertySignatureDefaults["IntersectionType"]["Object"] =
  { key: {} };
const SecondOptionalPropertySignaturePropertySignatureIntersectionTypeObject: OptionalPropertySignatureDefaults["IntersectionType"]["Object"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureIntersectionTypeObject: PropertySignatureDefaults["IntersectionType"]["Object"] =
  { key: {} };
const SecondMakeRequiredPropertySignaturePropertySignatureIntersectionTypeObject: PropertySignatureDefaults["IntersectionType"]["Object"] =
  {};
const OptionalPropertySignaturePropertySignatureIntersectionTypeString: OptionalPropertySignatureDefaults["IntersectionType"]["String"] =
  { key: "two" };
const SecondOptionalPropertySignaturePropertySignatureIntersectionTypeString: OptionalPropertySignatureDefaults["IntersectionType"]["String"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureIntersectionTypeString: PropertySignatureDefaults["IntersectionType"]["String"] =
  { key: "two" };
const SecondMakeRequiredPropertySignaturePropertySignatureIntersectionTypeString: PropertySignatureDefaults["IntersectionType"]["String"] =
  {};
const OptionalPropertySignaturePropertySignatureIntersectionTypeNumber: OptionalPropertySignatureDefaults["IntersectionType"]["Number"] =
  { key: 2 };
const SecondOptionalPropertySignaturePropertySignatureIntersectionTypeNumber: OptionalPropertySignatureDefaults["IntersectionType"]["Number"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureIntersectionTypeNumber: PropertySignatureDefaults["IntersectionType"]["Number"] =
  { key: 2 };
const SecondMakeRequiredPropertySignaturePropertySignatureIntersectionTypeNumber: PropertySignatureDefaults["IntersectionType"]["Number"] =
  {};
const OptionalPropertySignaturePropertySignatureIntersectionTypeBoolean: OptionalPropertySignatureDefaults["IntersectionType"]["Boolean"] =
  { key: true };
const SecondOptionalPropertySignaturePropertySignatureIntersectionTypeBoolean: OptionalPropertySignatureDefaults["IntersectionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureIntersectionTypeBoolean: PropertySignatureDefaults["IntersectionType"]["Boolean"] =
  { key: true };
const SecondMakeRequiredPropertySignaturePropertySignatureIntersectionTypeBoolean: PropertySignatureDefaults["IntersectionType"]["Boolean"] =
  {};
const OptionalPropertySignaturePropertySignatureIntersectionTypeAny: OptionalPropertySignatureDefaults["IntersectionType"]["Any"] =
  { key: 2 };
const SecondOptionalPropertySignaturePropertySignatureIntersectionTypeAny: OptionalPropertySignatureDefaults["IntersectionType"]["Any"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureIntersectionTypeAny: PropertySignatureDefaults["IntersectionType"]["Any"] =
  { key: 2 };
const SecondMakeRequiredPropertySignaturePropertySignatureIntersectionTypeAny: PropertySignatureDefaults["IntersectionType"]["Any"] =
  {};

// Make Optional Property PropertySignature - TypeLiteral
const OptionalPropertySignaturePropertySignatureTypeLiteralLiteral: OptionalPropertySignatureDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };
const SecondOptionalPropertySignaturePropertySignatureTypeLiteralLiteral: OptionalPropertySignatureDefaults["TypeLiteral"]["Literal"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeLiteralLiteral: PropertySignatureDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };
const SecondMakeRequiredPropertySignaturePropertySignatureTypeLiteralLiteral: PropertySignatureDefaults["TypeLiteral"]["Literal"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeLiteralObject: OptionalPropertySignatureDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };
const SecondOptionalPropertySignaturePropertySignatureTypeLiteralObject: OptionalPropertySignatureDefaults["TypeLiteral"]["Object"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeLiteralObject: PropertySignatureDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };
const SecondMakeRequiredPropertySignaturePropertySignatureTypeLiteralObject: PropertySignatureDefaults["TypeLiteral"]["Object"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeLiteralString: OptionalPropertySignatureDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };
const SecondOptionalPropertySignaturePropertySignatureTypeLiteralString: OptionalPropertySignatureDefaults["TypeLiteral"]["String"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeLiteralString: PropertySignatureDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };
const SecondMakeRequiredPropertySignaturePropertySignatureTypeLiteralString: PropertySignatureDefaults["TypeLiteral"]["String"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeLiteralNumber: OptionalPropertySignatureDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };
const SecondOptionalPropertySignaturePropertySignatureTypeLiteralNumber: OptionalPropertySignatureDefaults["TypeLiteral"]["Number"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeLiteralNumber: PropertySignatureDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };
const SecondMakeRequiredPropertySignaturePropertySignatureTypeLiteralNumber: PropertySignatureDefaults["TypeLiteral"]["Number"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeLiteralBoolean: OptionalPropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };
const SecondOptionalPropertySignaturePropertySignatureTypeLiteralBoolean: OptionalPropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeLiteralBoolean: PropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };
const SecondMakeRequiredPropertySignaturePropertySignatureTypeLiteralBoolean: PropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  {};
const OptionalPropertySignaturePropertySignatureTypeLiteralAny: OptionalPropertySignatureDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };
const SecondOptionalPropertySignaturePropertySignatureTypeLiteralAny: OptionalPropertySignatureDefaults["TypeLiteral"]["Any"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTypeLiteralAny: PropertySignatureDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };
const SecondMakeRequiredPropertySignaturePropertySignatureTypeLiteralAny: PropertySignatureDefaults["TypeLiteral"]["Any"] =
  {};

// Make Optional Property PropertySignature - TupleType
const OptionalPropertySignaturePropertySignatureTupleTypeLiteral: OptionalPropertySignatureDefaults["TupleType"]["Literal"] =
  { key: [1] };
const SecondOptionalPropertySignaturePropertySignatureTupleTypeLiteral: OptionalPropertySignatureDefaults["TupleType"]["Literal"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTupleTypeLiteral: PropertySignatureDefaults["TupleType"]["Literal"] =
  { key: [1] };
const SecondMakeRequiredPropertySignaturePropertySignatureTupleTypeLiteral: PropertySignatureDefaults["TupleType"]["Literal"] =
  {};
const OptionalPropertySignaturePropertySignatureTupleTypeObject: OptionalPropertySignatureDefaults["TupleType"]["Object"] =
  { key: [{}] };
const SecondOptionalPropertySignaturePropertySignatureTupleTypeObject: OptionalPropertySignatureDefaults["TupleType"]["Object"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTupleTypeObject: PropertySignatureDefaults["TupleType"]["Object"] =
  { key: [{}] };
const SecondMakeRequiredPropertySignaturePropertySignatureTupleTypeObject: PropertySignatureDefaults["TupleType"]["Object"] =
  {};
const OptionalPropertySignaturePropertySignatureTupleTypeString: OptionalPropertySignatureDefaults["TupleType"]["String"] =
  { key: ["two"] };
const SecondOptionalPropertySignaturePropertySignatureTupleTypeString: OptionalPropertySignatureDefaults["TupleType"]["String"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTupleTypeString: PropertySignatureDefaults["TupleType"]["String"] =
  { key: ["two"] };
const SecondMakeRequiredPropertySignaturePropertySignatureTupleTypeString: PropertySignatureDefaults["TupleType"]["String"] =
  {};
const OptionalPropertySignaturePropertySignatureTupleTypeNumber: OptionalPropertySignatureDefaults["TupleType"]["Number"] =
  { key: [2] };
const SecondOptionalPropertySignaturePropertySignatureTupleTypeNumber: OptionalPropertySignatureDefaults["TupleType"]["Number"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTupleTypeNumber: PropertySignatureDefaults["TupleType"]["Number"] =
  { key: [2] };
const SecondMakeRequiredPropertySignaturePropertySignatureTupleTypeNumber: PropertySignatureDefaults["TupleType"]["Number"] =
  {};
const OptionalPropertySignaturePropertySignatureTupleTypeBoolean: OptionalPropertySignatureDefaults["TupleType"]["Boolean"] =
  { key: [true] };
const SecondOptionalPropertySignaturePropertySignatureTupleTypeBoolean: OptionalPropertySignatureDefaults["TupleType"]["Boolean"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTupleTypeBoolean: PropertySignatureDefaults["TupleType"]["Boolean"] =
  { key: [true] };
const SecondMakeRequiredPropertySignaturePropertySignatureTupleTypeBoolean: PropertySignatureDefaults["TupleType"]["Boolean"] =
  {};
const OptionalPropertySignaturePropertySignatureTupleTypeAny: OptionalPropertySignatureDefaults["TupleType"]["Any"] =
  { key: [2] };
const SecondOptionalPropertySignaturePropertySignatureTupleTypeAny: OptionalPropertySignatureDefaults["TupleType"]["Any"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureTupleTypeAny: PropertySignatureDefaults["TupleType"]["Any"] =
  { key: [2] };
const SecondMakeRequiredPropertySignaturePropertySignatureTupleTypeAny: PropertySignatureDefaults["TupleType"]["Any"] =
  {};

// Make Optional Property PropertySignature - ArrayType
const OptionalPropertySignaturePropertySignatureArrayTypeLiteral: OptionalPropertySignatureDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };
const SecondOptionalPropertySignaturePropertySignatureArrayTypeLiteral: OptionalPropertySignatureDefaults["ArrayType"]["Literal"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureArrayTypeLiteral: PropertySignatureDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };
const SecondMakeRequiredPropertySignaturePropertySignatureArrayTypeLiteral: PropertySignatureDefaults["ArrayType"]["Literal"] =
  {};
const OptionalPropertySignaturePropertySignatureArrayTypeObject: OptionalPropertySignatureDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };
const SecondOptionalPropertySignaturePropertySignatureArrayTypeObject: OptionalPropertySignatureDefaults["ArrayType"]["Object"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureArrayTypeObject: PropertySignatureDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };
const SecondMakeRequiredPropertySignaturePropertySignatureArrayTypeObject: PropertySignatureDefaults["ArrayType"]["Object"] =
  {};
const OptionalPropertySignaturePropertySignatureArrayTypeString: OptionalPropertySignatureDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };
const SecondOptionalPropertySignaturePropertySignatureArrayTypeString: OptionalPropertySignatureDefaults["ArrayType"]["String"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureArrayTypeString: PropertySignatureDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };
const SecondMakeRequiredPropertySignaturePropertySignatureArrayTypeString: PropertySignatureDefaults["ArrayType"]["String"] =
  {};
const OptionalPropertySignaturePropertySignatureArrayTypeNumber: OptionalPropertySignatureDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };
const SecondOptionalPropertySignaturePropertySignatureArrayTypeNumber: OptionalPropertySignatureDefaults["ArrayType"]["Number"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureArrayTypeNumber: PropertySignatureDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };
const SecondMakeRequiredPropertySignaturePropertySignatureArrayTypeNumber: PropertySignatureDefaults["ArrayType"]["Number"] =
  {};
const OptionalPropertySignaturePropertySignatureArrayTypeBoolean: OptionalPropertySignatureDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };
const SecondOptionalPropertySignaturePropertySignatureArrayTypeBoolean: OptionalPropertySignatureDefaults["ArrayType"]["Boolean"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureArrayTypeBoolean: PropertySignatureDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };
const SecondMakeRequiredPropertySignaturePropertySignatureArrayTypeBoolean: PropertySignatureDefaults["ArrayType"]["Boolean"] =
  {};
const OptionalPropertySignaturePropertySignatureArrayTypeAny: OptionalPropertySignatureDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };
const SecondOptionalPropertySignaturePropertySignatureArrayTypeAny: OptionalPropertySignatureDefaults["ArrayType"]["Any"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureArrayTypeAny: PropertySignatureDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };
const SecondMakeRequiredPropertySignaturePropertySignatureArrayTypeAny: PropertySignatureDefaults["ArrayType"]["Any"] =
  {};

// Make Optional Property PropertySignature - FunctionType
const OptionalPropertySignaturePropertySignatureFunctionTypeLiteral: OptionalPropertySignatureDefaults["FunctionType"]["Literal"] =
  {};
const SecondOptionalPropertySignaturePropertySignatureFunctionTypeLiteral: OptionalPropertySignatureDefaults["FunctionType"]["Literal"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureFunctionTypeLiteral: PropertySignatureDefaults["FunctionType"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignaturePropertySignatureFunctionTypeLiteral: PropertySignatureDefaults["FunctionType"]["Literal"] =
  {};
const OptionalPropertySignaturePropertySignatureFunctionTypeObject: OptionalPropertySignatureDefaults["FunctionType"]["Object"] =
  {};
const SecondOptionalPropertySignaturePropertySignatureFunctionTypeObject: OptionalPropertySignatureDefaults["FunctionType"]["Object"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureFunctionTypeObject: PropertySignatureDefaults["FunctionType"]["Object"] =
  {};
const SecondMakeRequiredPropertySignaturePropertySignatureFunctionTypeObject: PropertySignatureDefaults["FunctionType"]["Object"] =
  {};
const OptionalPropertySignaturePropertySignatureFunctionTypeString: OptionalPropertySignatureDefaults["FunctionType"]["String"] =
  {};
const SecondOptionalPropertySignaturePropertySignatureFunctionTypeString: OptionalPropertySignatureDefaults["FunctionType"]["String"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureFunctionTypeString: PropertySignatureDefaults["FunctionType"]["String"] =
  {};
const SecondMakeRequiredPropertySignaturePropertySignatureFunctionTypeString: PropertySignatureDefaults["FunctionType"]["String"] =
  {};
const OptionalPropertySignaturePropertySignatureFunctionTypeNumber: OptionalPropertySignatureDefaults["FunctionType"]["Number"] =
  {};
const SecondOptionalPropertySignaturePropertySignatureFunctionTypeNumber: OptionalPropertySignatureDefaults["FunctionType"]["Number"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureFunctionTypeNumber: PropertySignatureDefaults["FunctionType"]["Number"] =
  {};
const SecondMakeRequiredPropertySignaturePropertySignatureFunctionTypeNumber: PropertySignatureDefaults["FunctionType"]["Number"] =
  {};
const OptionalPropertySignaturePropertySignatureFunctionTypeBoolean: OptionalPropertySignatureDefaults["FunctionType"]["Boolean"] =
  {};
const SecondOptionalPropertySignaturePropertySignatureFunctionTypeBoolean: OptionalPropertySignatureDefaults["FunctionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureFunctionTypeBoolean: PropertySignatureDefaults["FunctionType"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignaturePropertySignatureFunctionTypeBoolean: PropertySignatureDefaults["FunctionType"]["Boolean"] =
  {};
const OptionalPropertySignaturePropertySignatureFunctionTypeAny: OptionalPropertySignatureDefaults["FunctionType"]["Any"] =
  {};
const SecondOptionalPropertySignaturePropertySignatureFunctionTypeAny: OptionalPropertySignatureDefaults["FunctionType"]["Any"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureFunctionTypeAny: PropertySignatureDefaults["FunctionType"]["Any"] =
  {};
const SecondMakeRequiredPropertySignaturePropertySignatureFunctionTypeAny: PropertySignatureDefaults["FunctionType"]["Any"] =
  {};

// Make Optional Property PropertySignature - ConstructorType
const OptionalPropertySignaturePropertySignatureConstructorTypeLiteral: OptionalPropertySignatureDefaults["ConstructorType"]["Literal"] =
  { key: 1 };
const SecondOptionalPropertySignaturePropertySignatureConstructorTypeLiteral: OptionalPropertySignatureDefaults["ConstructorType"]["Literal"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureConstructorTypeLiteral: PropertySignatureDefaults["ConstructorType"]["Literal"] =
  { key: 1 };
const SecondMakeRequiredPropertySignaturePropertySignatureConstructorTypeLiteral: PropertySignatureDefaults["ConstructorType"]["Literal"] =
  {};
const OptionalPropertySignaturePropertySignatureConstructorTypeObject: OptionalPropertySignatureDefaults["ConstructorType"]["Object"] =
  { key: {} };
const SecondOptionalPropertySignaturePropertySignatureConstructorTypeObject: OptionalPropertySignatureDefaults["ConstructorType"]["Object"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureConstructorTypeObject: PropertySignatureDefaults["ConstructorType"]["Object"] =
  { key: {} };
const SecondMakeRequiredPropertySignaturePropertySignatureConstructorTypeObject: PropertySignatureDefaults["ConstructorType"]["Object"] =
  {};
const OptionalPropertySignaturePropertySignatureConstructorTypeString: OptionalPropertySignatureDefaults["ConstructorType"]["String"] =
  { key: "two" };
const SecondOptionalPropertySignaturePropertySignatureConstructorTypeString: OptionalPropertySignatureDefaults["ConstructorType"]["String"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureConstructorTypeString: PropertySignatureDefaults["ConstructorType"]["String"] =
  { key: "two" };
const SecondMakeRequiredPropertySignaturePropertySignatureConstructorTypeString: PropertySignatureDefaults["ConstructorType"]["String"] =
  {};
const OptionalPropertySignaturePropertySignatureConstructorTypeNumber: OptionalPropertySignatureDefaults["ConstructorType"]["Number"] =
  { key: 2 };
const SecondOptionalPropertySignaturePropertySignatureConstructorTypeNumber: OptionalPropertySignatureDefaults["ConstructorType"]["Number"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureConstructorTypeNumber: PropertySignatureDefaults["ConstructorType"]["Number"] =
  { key: 2 };
const SecondMakeRequiredPropertySignaturePropertySignatureConstructorTypeNumber: PropertySignatureDefaults["ConstructorType"]["Number"] =
  {};
const OptionalPropertySignaturePropertySignatureConstructorTypeBoolean: OptionalPropertySignatureDefaults["ConstructorType"]["Boolean"] =
  { key: true };
const SecondOptionalPropertySignaturePropertySignatureConstructorTypeBoolean: OptionalPropertySignatureDefaults["ConstructorType"]["Boolean"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureConstructorTypeBoolean: PropertySignatureDefaults["ConstructorType"]["Boolean"] =
  { key: true };
const SecondMakeRequiredPropertySignaturePropertySignatureConstructorTypeBoolean: PropertySignatureDefaults["ConstructorType"]["Boolean"] =
  {};
const OptionalPropertySignaturePropertySignatureConstructorTypeAny: OptionalPropertySignatureDefaults["ConstructorType"]["Any"] =
  { key: 2 };
const SecondOptionalPropertySignaturePropertySignatureConstructorTypeAny: OptionalPropertySignatureDefaults["ConstructorType"]["Any"] =
  {};
const MakeRequiredPropertySignaturePropertySignatureConstructorTypeAny: PropertySignatureDefaults["ConstructorType"]["Any"] =
  { key: 2 };
const SecondMakeRequiredPropertySignaturePropertySignatureConstructorTypeAny: PropertySignatureDefaults["ConstructorType"]["Any"] =
  {};
