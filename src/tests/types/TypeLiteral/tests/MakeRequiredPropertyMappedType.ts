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
 * Make Required Property MappedType
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Make Optional Property MappedType - ParenthesizedType
const OptionalPropertySignatureMappedTypeParenthesizedTypeLiteral: OptionalMappedTypeDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };
const SecondOptionalPropertySignatureMappedTypeParenthesizedTypeLiteral: OptionalMappedTypeDefaults["ParenthesizedType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureMappedTypeParenthesizedTypeLiteral: MappedTypeDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };
const SecondMakeRequiredPropertySignatureMappedTypeParenthesizedTypeLiteral: MappedTypeDefaults["ParenthesizedType"]["Literal"] =
  {};
const OptionalPropertySignatureMappedTypeParenthesizedTypeObject: OptionalMappedTypeDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };
const SecondOptionalPropertySignatureMappedTypeParenthesizedTypeObject: OptionalMappedTypeDefaults["ParenthesizedType"]["Object"] =
  {};
const MakeRequiredPropertySignatureMappedTypeParenthesizedTypeObject: MappedTypeDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };
const SecondMakeRequiredPropertySignatureMappedTypeParenthesizedTypeObject: MappedTypeDefaults["ParenthesizedType"]["Object"] =
  {};
const OptionalPropertySignatureMappedTypeParenthesizedTypeString: OptionalMappedTypeDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };
const SecondOptionalPropertySignatureMappedTypeParenthesizedTypeString: OptionalMappedTypeDefaults["ParenthesizedType"]["String"] =
  {};
const MakeRequiredPropertySignatureMappedTypeParenthesizedTypeString: MappedTypeDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };
const SecondMakeRequiredPropertySignatureMappedTypeParenthesizedTypeString: MappedTypeDefaults["ParenthesizedType"]["String"] =
  {};
const OptionalPropertySignatureMappedTypeParenthesizedTypeNumber: OptionalMappedTypeDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };
const SecondOptionalPropertySignatureMappedTypeParenthesizedTypeNumber: OptionalMappedTypeDefaults["ParenthesizedType"]["Number"] =
  {};
const MakeRequiredPropertySignatureMappedTypeParenthesizedTypeNumber: MappedTypeDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };
const SecondMakeRequiredPropertySignatureMappedTypeParenthesizedTypeNumber: MappedTypeDefaults["ParenthesizedType"]["Number"] =
  {};
const OptionalPropertySignatureMappedTypeParenthesizedTypeBoolean: OptionalMappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };
const SecondOptionalPropertySignatureMappedTypeParenthesizedTypeBoolean: OptionalMappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureMappedTypeParenthesizedTypeBoolean: MappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };
const SecondMakeRequiredPropertySignatureMappedTypeParenthesizedTypeBoolean: MappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  {};
const OptionalPropertySignatureMappedTypeParenthesizedTypeAny: OptionalMappedTypeDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };
const SecondOptionalPropertySignatureMappedTypeParenthesizedTypeAny: OptionalMappedTypeDefaults["ParenthesizedType"]["Any"] =
  {};
const MakeRequiredPropertySignatureMappedTypeParenthesizedTypeAny: MappedTypeDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };
const SecondMakeRequiredPropertySignatureMappedTypeParenthesizedTypeAny: MappedTypeDefaults["ParenthesizedType"]["Any"] =
  {};

// Make Optional Property MappedType - TypeReferenceBuiltin
const OptionalPropertySignatureMappedTypeTypeReferenceBuiltinLiteral: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify({ mappedKey: 1 });
const SecondOptionalPropertySignatureMappedTypeTypeReferenceBuiltinLiteral: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeReferenceBuiltinLiteral: MappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify({ mappedKey: 1 });
const SecondMakeRequiredPropertySignatureMappedTypeTypeReferenceBuiltinLiteral: MappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  {};
const OptionalPropertySignatureMappedTypeTypeReferenceBuiltinObject: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({ mappedKey: {} });
const SecondOptionalPropertySignatureMappedTypeTypeReferenceBuiltinObject: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeReferenceBuiltinObject: MappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({ mappedKey: {} });
const SecondMakeRequiredPropertySignatureMappedTypeTypeReferenceBuiltinObject: MappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  {};
const OptionalPropertySignatureMappedTypeTypeReferenceBuiltinString: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  promisify({ mappedKey: "two" });
const SecondOptionalPropertySignatureMappedTypeTypeReferenceBuiltinString: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeReferenceBuiltinString: MappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  promisify({ mappedKey: "two" });
const SecondMakeRequiredPropertySignatureMappedTypeTypeReferenceBuiltinString: MappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  {};
const OptionalPropertySignatureMappedTypeTypeReferenceBuiltinNumber: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify({ mappedKey: 2 });
const SecondOptionalPropertySignatureMappedTypeTypeReferenceBuiltinNumber: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeReferenceBuiltinNumber: MappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify({ mappedKey: 2 });
const SecondMakeRequiredPropertySignatureMappedTypeTypeReferenceBuiltinNumber: MappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  {};
const OptionalPropertySignatureMappedTypeTypeReferenceBuiltinBoolean: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify({ mappedKey: true });
const SecondOptionalPropertySignatureMappedTypeTypeReferenceBuiltinBoolean: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeReferenceBuiltinBoolean: MappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify({ mappedKey: true });
const SecondMakeRequiredPropertySignatureMappedTypeTypeReferenceBuiltinBoolean: MappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  {};
const OptionalPropertySignatureMappedTypeTypeReferenceBuiltinAny: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify({ mappedKey: 2 });
const SecondOptionalPropertySignatureMappedTypeTypeReferenceBuiltinAny: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeReferenceBuiltinAny: MappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify({ mappedKey: 2 });
const SecondMakeRequiredPropertySignatureMappedTypeTypeReferenceBuiltinAny: MappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  {};

// Make Optional Property MappedType - TypeReferencePredefined
const OptionalPropertySignatureMappedTypeTypeReferencePredefinedLiteral: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };
const SecondOptionalPropertySignatureMappedTypeTypeReferencePredefinedLiteral: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeReferencePredefinedLiteral: MappedTypeDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };
const SecondMakeRequiredPropertySignatureMappedTypeTypeReferencePredefinedLiteral: MappedTypeDefaults["TypeReferencePredefined"]["Literal"] =
  {};
const OptionalPropertySignatureMappedTypeTypeReferencePredefinedObject: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };
const SecondOptionalPropertySignatureMappedTypeTypeReferencePredefinedObject: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeReferencePredefinedObject: MappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };
const SecondMakeRequiredPropertySignatureMappedTypeTypeReferencePredefinedObject: MappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  {};
const OptionalPropertySignatureMappedTypeTypeReferencePredefinedString: OptionalMappedTypeDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };
const SecondOptionalPropertySignatureMappedTypeTypeReferencePredefinedString: OptionalMappedTypeDefaults["TypeReferencePredefined"]["String"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeReferencePredefinedString: MappedTypeDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };
const SecondMakeRequiredPropertySignatureMappedTypeTypeReferencePredefinedString: MappedTypeDefaults["TypeReferencePredefined"]["String"] =
  {};
const OptionalPropertySignatureMappedTypeTypeReferencePredefinedNumber: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };
const SecondOptionalPropertySignatureMappedTypeTypeReferencePredefinedNumber: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Number"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeReferencePredefinedNumber: MappedTypeDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };
const SecondMakeRequiredPropertySignatureMappedTypeTypeReferencePredefinedNumber: MappedTypeDefaults["TypeReferencePredefined"]["Number"] =
  {};
const OptionalPropertySignatureMappedTypeTypeReferencePredefinedBoolean: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };
const SecondOptionalPropertySignatureMappedTypeTypeReferencePredefinedBoolean: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeReferencePredefinedBoolean: MappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };
const SecondMakeRequiredPropertySignatureMappedTypeTypeReferencePredefinedBoolean: MappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  {};
const OptionalPropertySignatureMappedTypeTypeReferencePredefinedAny: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };
const SecondOptionalPropertySignatureMappedTypeTypeReferencePredefinedAny: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Any"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeReferencePredefinedAny: MappedTypeDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };
const SecondMakeRequiredPropertySignatureMappedTypeTypeReferencePredefinedAny: MappedTypeDefaults["TypeReferencePredefined"]["Any"] =
  {};

// Make Optional Property MappedType - UnionType
const OptionalPropertySignatureMappedTypeUnionTypeLiteral: OptionalMappedTypeDefaults["UnionType"]["Literal"] =
  { mappedKey: 1 };
const SecondOptionalPropertySignatureMappedTypeUnionTypeLiteral: OptionalMappedTypeDefaults["UnionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureMappedTypeUnionTypeLiteral: MappedTypeDefaults["UnionType"]["Literal"] =
  { mappedKey: 1 };
const SecondMakeRequiredPropertySignatureMappedTypeUnionTypeLiteral: MappedTypeDefaults["UnionType"]["Literal"] =
  {};
const OptionalPropertySignatureMappedTypeUnionTypeObject: OptionalMappedTypeDefaults["UnionType"]["Object"] =
  { mappedKey: {} };
const SecondOptionalPropertySignatureMappedTypeUnionTypeObject: OptionalMappedTypeDefaults["UnionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureMappedTypeUnionTypeObject: MappedTypeDefaults["UnionType"]["Object"] =
  { mappedKey: {} };
const SecondMakeRequiredPropertySignatureMappedTypeUnionTypeObject: MappedTypeDefaults["UnionType"]["Object"] =
  {};
const OptionalPropertySignatureMappedTypeUnionTypeString: OptionalMappedTypeDefaults["UnionType"]["String"] =
  { mappedKey: "two" };
const SecondOptionalPropertySignatureMappedTypeUnionTypeString: OptionalMappedTypeDefaults["UnionType"]["String"] =
  {};
const MakeRequiredPropertySignatureMappedTypeUnionTypeString: MappedTypeDefaults["UnionType"]["String"] =
  { mappedKey: "two" };
const SecondMakeRequiredPropertySignatureMappedTypeUnionTypeString: MappedTypeDefaults["UnionType"]["String"] =
  {};
const OptionalPropertySignatureMappedTypeUnionTypeNumber: OptionalMappedTypeDefaults["UnionType"]["Number"] =
  { mappedKey: 2 };
const SecondOptionalPropertySignatureMappedTypeUnionTypeNumber: OptionalMappedTypeDefaults["UnionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureMappedTypeUnionTypeNumber: MappedTypeDefaults["UnionType"]["Number"] =
  { mappedKey: 2 };
const SecondMakeRequiredPropertySignatureMappedTypeUnionTypeNumber: MappedTypeDefaults["UnionType"]["Number"] =
  {};
const OptionalPropertySignatureMappedTypeUnionTypeBoolean: OptionalMappedTypeDefaults["UnionType"]["Boolean"] =
  { mappedKey: true };
const SecondOptionalPropertySignatureMappedTypeUnionTypeBoolean: OptionalMappedTypeDefaults["UnionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureMappedTypeUnionTypeBoolean: MappedTypeDefaults["UnionType"]["Boolean"] =
  { mappedKey: true };
const SecondMakeRequiredPropertySignatureMappedTypeUnionTypeBoolean: MappedTypeDefaults["UnionType"]["Boolean"] =
  {};
const OptionalPropertySignatureMappedTypeUnionTypeAny: OptionalMappedTypeDefaults["UnionType"]["Any"] =
  { mappedKey: 2 };
const SecondOptionalPropertySignatureMappedTypeUnionTypeAny: OptionalMappedTypeDefaults["UnionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureMappedTypeUnionTypeAny: MappedTypeDefaults["UnionType"]["Any"] =
  { mappedKey: 2 };
const SecondMakeRequiredPropertySignatureMappedTypeUnionTypeAny: MappedTypeDefaults["UnionType"]["Any"] =
  {};

// Make Optional Property MappedType - IntersectionType
const OptionalPropertySignatureMappedTypeIntersectionTypeLiteral: OptionalMappedTypeDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };
const SecondOptionalPropertySignatureMappedTypeIntersectionTypeLiteral: OptionalMappedTypeDefaults["IntersectionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureMappedTypeIntersectionTypeLiteral: MappedTypeDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };
const SecondMakeRequiredPropertySignatureMappedTypeIntersectionTypeLiteral: MappedTypeDefaults["IntersectionType"]["Literal"] =
  {};
const OptionalPropertySignatureMappedTypeIntersectionTypeObject: OptionalMappedTypeDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };
const SecondOptionalPropertySignatureMappedTypeIntersectionTypeObject: OptionalMappedTypeDefaults["IntersectionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureMappedTypeIntersectionTypeObject: MappedTypeDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };
const SecondMakeRequiredPropertySignatureMappedTypeIntersectionTypeObject: MappedTypeDefaults["IntersectionType"]["Object"] =
  {};
const OptionalPropertySignatureMappedTypeIntersectionTypeString: OptionalMappedTypeDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };
const SecondOptionalPropertySignatureMappedTypeIntersectionTypeString: OptionalMappedTypeDefaults["IntersectionType"]["String"] =
  {};
const MakeRequiredPropertySignatureMappedTypeIntersectionTypeString: MappedTypeDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };
const SecondMakeRequiredPropertySignatureMappedTypeIntersectionTypeString: MappedTypeDefaults["IntersectionType"]["String"] =
  {};
const OptionalPropertySignatureMappedTypeIntersectionTypeNumber: OptionalMappedTypeDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };
const SecondOptionalPropertySignatureMappedTypeIntersectionTypeNumber: OptionalMappedTypeDefaults["IntersectionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureMappedTypeIntersectionTypeNumber: MappedTypeDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };
const SecondMakeRequiredPropertySignatureMappedTypeIntersectionTypeNumber: MappedTypeDefaults["IntersectionType"]["Number"] =
  {};
const OptionalPropertySignatureMappedTypeIntersectionTypeBoolean: OptionalMappedTypeDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };
const SecondOptionalPropertySignatureMappedTypeIntersectionTypeBoolean: OptionalMappedTypeDefaults["IntersectionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureMappedTypeIntersectionTypeBoolean: MappedTypeDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };
const SecondMakeRequiredPropertySignatureMappedTypeIntersectionTypeBoolean: MappedTypeDefaults["IntersectionType"]["Boolean"] =
  {};
const OptionalPropertySignatureMappedTypeIntersectionTypeAny: OptionalMappedTypeDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };
const SecondOptionalPropertySignatureMappedTypeIntersectionTypeAny: OptionalMappedTypeDefaults["IntersectionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureMappedTypeIntersectionTypeAny: MappedTypeDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };
const SecondMakeRequiredPropertySignatureMappedTypeIntersectionTypeAny: MappedTypeDefaults["IntersectionType"]["Any"] =
  {};

// Make Optional Property MappedType - TypeLiteral
const OptionalPropertySignatureMappedTypeTypeLiteralLiteral: OptionalMappedTypeDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };
const SecondOptionalPropertySignatureMappedTypeTypeLiteralLiteral: OptionalMappedTypeDefaults["TypeLiteral"]["Literal"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeLiteralLiteral: MappedTypeDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };
const SecondMakeRequiredPropertySignatureMappedTypeTypeLiteralLiteral: MappedTypeDefaults["TypeLiteral"]["Literal"] =
  {};
const OptionalPropertySignatureMappedTypeTypeLiteralObject: OptionalMappedTypeDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };
const SecondOptionalPropertySignatureMappedTypeTypeLiteralObject: OptionalMappedTypeDefaults["TypeLiteral"]["Object"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeLiteralObject: MappedTypeDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };
const SecondMakeRequiredPropertySignatureMappedTypeTypeLiteralObject: MappedTypeDefaults["TypeLiteral"]["Object"] =
  {};
const OptionalPropertySignatureMappedTypeTypeLiteralString: OptionalMappedTypeDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };
const SecondOptionalPropertySignatureMappedTypeTypeLiteralString: OptionalMappedTypeDefaults["TypeLiteral"]["String"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeLiteralString: MappedTypeDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };
const SecondMakeRequiredPropertySignatureMappedTypeTypeLiteralString: MappedTypeDefaults["TypeLiteral"]["String"] =
  {};
const OptionalPropertySignatureMappedTypeTypeLiteralNumber: OptionalMappedTypeDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };
const SecondOptionalPropertySignatureMappedTypeTypeLiteralNumber: OptionalMappedTypeDefaults["TypeLiteral"]["Number"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeLiteralNumber: MappedTypeDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };
const SecondMakeRequiredPropertySignatureMappedTypeTypeLiteralNumber: MappedTypeDefaults["TypeLiteral"]["Number"] =
  {};
const OptionalPropertySignatureMappedTypeTypeLiteralBoolean: OptionalMappedTypeDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };
const SecondOptionalPropertySignatureMappedTypeTypeLiteralBoolean: OptionalMappedTypeDefaults["TypeLiteral"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeLiteralBoolean: MappedTypeDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };
const SecondMakeRequiredPropertySignatureMappedTypeTypeLiteralBoolean: MappedTypeDefaults["TypeLiteral"]["Boolean"] =
  {};
const OptionalPropertySignatureMappedTypeTypeLiteralAny: OptionalMappedTypeDefaults["TypeLiteral"]["Any"] =
  { mappedKey: { key: 2 } };
const SecondOptionalPropertySignatureMappedTypeTypeLiteralAny: OptionalMappedTypeDefaults["TypeLiteral"]["Any"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTypeLiteralAny: MappedTypeDefaults["TypeLiteral"]["Any"] =
  { mappedKey: { key: 2 } };
const SecondMakeRequiredPropertySignatureMappedTypeTypeLiteralAny: MappedTypeDefaults["TypeLiteral"]["Any"] =
  {};

// Make Optional Property MappedType - TupleType
const OptionalPropertySignatureMappedTypeTupleTypeLiteral: OptionalMappedTypeDefaults["TupleType"]["Literal"] =
  { mappedKey: [1] };
const SecondOptionalPropertySignatureMappedTypeTupleTypeLiteral: OptionalMappedTypeDefaults["TupleType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTupleTypeLiteral: MappedTypeDefaults["TupleType"]["Literal"] =
  { mappedKey: [1] };
const SecondMakeRequiredPropertySignatureMappedTypeTupleTypeLiteral: MappedTypeDefaults["TupleType"]["Literal"] =
  {};
const OptionalPropertySignatureMappedTypeTupleTypeObject: OptionalMappedTypeDefaults["TupleType"]["Object"] =
  { mappedKey: [{}] };
const SecondOptionalPropertySignatureMappedTypeTupleTypeObject: OptionalMappedTypeDefaults["TupleType"]["Object"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTupleTypeObject: MappedTypeDefaults["TupleType"]["Object"] =
  { mappedKey: [{}] };
const SecondMakeRequiredPropertySignatureMappedTypeTupleTypeObject: MappedTypeDefaults["TupleType"]["Object"] =
  {};
const OptionalPropertySignatureMappedTypeTupleTypeString: OptionalMappedTypeDefaults["TupleType"]["String"] =
  { mappedKey: ["two"] };
const SecondOptionalPropertySignatureMappedTypeTupleTypeString: OptionalMappedTypeDefaults["TupleType"]["String"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTupleTypeString: MappedTypeDefaults["TupleType"]["String"] =
  { mappedKey: ["two"] };
const SecondMakeRequiredPropertySignatureMappedTypeTupleTypeString: MappedTypeDefaults["TupleType"]["String"] =
  {};
const OptionalPropertySignatureMappedTypeTupleTypeNumber: OptionalMappedTypeDefaults["TupleType"]["Number"] =
  { mappedKey: [2] };
const SecondOptionalPropertySignatureMappedTypeTupleTypeNumber: OptionalMappedTypeDefaults["TupleType"]["Number"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTupleTypeNumber: MappedTypeDefaults["TupleType"]["Number"] =
  { mappedKey: [2] };
const SecondMakeRequiredPropertySignatureMappedTypeTupleTypeNumber: MappedTypeDefaults["TupleType"]["Number"] =
  {};
const OptionalPropertySignatureMappedTypeTupleTypeBoolean: OptionalMappedTypeDefaults["TupleType"]["Boolean"] =
  { mappedKey: [true] };
const SecondOptionalPropertySignatureMappedTypeTupleTypeBoolean: OptionalMappedTypeDefaults["TupleType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTupleTypeBoolean: MappedTypeDefaults["TupleType"]["Boolean"] =
  { mappedKey: [true] };
const SecondMakeRequiredPropertySignatureMappedTypeTupleTypeBoolean: MappedTypeDefaults["TupleType"]["Boolean"] =
  {};
const OptionalPropertySignatureMappedTypeTupleTypeAny: OptionalMappedTypeDefaults["TupleType"]["Any"] =
  { mappedKey: [2] };
const SecondOptionalPropertySignatureMappedTypeTupleTypeAny: OptionalMappedTypeDefaults["TupleType"]["Any"] =
  {};
const MakeRequiredPropertySignatureMappedTypeTupleTypeAny: MappedTypeDefaults["TupleType"]["Any"] =
  { mappedKey: [2] };
const SecondMakeRequiredPropertySignatureMappedTypeTupleTypeAny: MappedTypeDefaults["TupleType"]["Any"] =
  {};

// Make Optional Property MappedType - ArrayType
const OptionalPropertySignatureMappedTypeArrayTypeLiteral: OptionalMappedTypeDefaults["ArrayType"]["Literal"] =
  { mappedKey: [1, 1] };
const SecondOptionalPropertySignatureMappedTypeArrayTypeLiteral: OptionalMappedTypeDefaults["ArrayType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureMappedTypeArrayTypeLiteral: MappedTypeDefaults["ArrayType"]["Literal"] =
  { mappedKey: [1, 1] };
const SecondMakeRequiredPropertySignatureMappedTypeArrayTypeLiteral: MappedTypeDefaults["ArrayType"]["Literal"] =
  {};
const OptionalPropertySignatureMappedTypeArrayTypeObject: OptionalMappedTypeDefaults["ArrayType"]["Object"] =
  { mappedKey: [{}, {}] };
const SecondOptionalPropertySignatureMappedTypeArrayTypeObject: OptionalMappedTypeDefaults["ArrayType"]["Object"] =
  {};
const MakeRequiredPropertySignatureMappedTypeArrayTypeObject: MappedTypeDefaults["ArrayType"]["Object"] =
  { mappedKey: [{}, {}] };
const SecondMakeRequiredPropertySignatureMappedTypeArrayTypeObject: MappedTypeDefaults["ArrayType"]["Object"] =
  {};
const OptionalPropertySignatureMappedTypeArrayTypeString: OptionalMappedTypeDefaults["ArrayType"]["String"] =
  { mappedKey: ["two", "two"] };
const SecondOptionalPropertySignatureMappedTypeArrayTypeString: OptionalMappedTypeDefaults["ArrayType"]["String"] =
  {};
const MakeRequiredPropertySignatureMappedTypeArrayTypeString: MappedTypeDefaults["ArrayType"]["String"] =
  { mappedKey: ["two", "two"] };
const SecondMakeRequiredPropertySignatureMappedTypeArrayTypeString: MappedTypeDefaults["ArrayType"]["String"] =
  {};
const OptionalPropertySignatureMappedTypeArrayTypeNumber: OptionalMappedTypeDefaults["ArrayType"]["Number"] =
  { mappedKey: [2, 2] };
const SecondOptionalPropertySignatureMappedTypeArrayTypeNumber: OptionalMappedTypeDefaults["ArrayType"]["Number"] =
  {};
const MakeRequiredPropertySignatureMappedTypeArrayTypeNumber: MappedTypeDefaults["ArrayType"]["Number"] =
  { mappedKey: [2, 2] };
const SecondMakeRequiredPropertySignatureMappedTypeArrayTypeNumber: MappedTypeDefaults["ArrayType"]["Number"] =
  {};
const OptionalPropertySignatureMappedTypeArrayTypeBoolean: OptionalMappedTypeDefaults["ArrayType"]["Boolean"] =
  { mappedKey: [true, true] };
const SecondOptionalPropertySignatureMappedTypeArrayTypeBoolean: OptionalMappedTypeDefaults["ArrayType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureMappedTypeArrayTypeBoolean: MappedTypeDefaults["ArrayType"]["Boolean"] =
  { mappedKey: [true, true] };
const SecondMakeRequiredPropertySignatureMappedTypeArrayTypeBoolean: MappedTypeDefaults["ArrayType"]["Boolean"] =
  {};
const OptionalPropertySignatureMappedTypeArrayTypeAny: OptionalMappedTypeDefaults["ArrayType"]["Any"] =
  { mappedKey: [2, 2] };
const SecondOptionalPropertySignatureMappedTypeArrayTypeAny: OptionalMappedTypeDefaults["ArrayType"]["Any"] =
  {};
const MakeRequiredPropertySignatureMappedTypeArrayTypeAny: MappedTypeDefaults["ArrayType"]["Any"] =
  { mappedKey: [2, 2] };
const SecondMakeRequiredPropertySignatureMappedTypeArrayTypeAny: MappedTypeDefaults["ArrayType"]["Any"] =
  {};

// Make Optional Property MappedType - FunctionType
const OptionalPropertySignatureMappedTypeFunctionTypeLiteral: OptionalMappedTypeDefaults["FunctionType"]["Literal"] =
  {};
const SecondOptionalPropertySignatureMappedTypeFunctionTypeLiteral: OptionalMappedTypeDefaults["FunctionType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureMappedTypeFunctionTypeLiteral: MappedTypeDefaults["FunctionType"]["Literal"] =
  {};
const SecondMakeRequiredPropertySignatureMappedTypeFunctionTypeLiteral: MappedTypeDefaults["FunctionType"]["Literal"] =
  {};
const OptionalPropertySignatureMappedTypeFunctionTypeObject: OptionalMappedTypeDefaults["FunctionType"]["Object"] =
  {};
const SecondOptionalPropertySignatureMappedTypeFunctionTypeObject: OptionalMappedTypeDefaults["FunctionType"]["Object"] =
  {};
const MakeRequiredPropertySignatureMappedTypeFunctionTypeObject: MappedTypeDefaults["FunctionType"]["Object"] =
  {};
const SecondMakeRequiredPropertySignatureMappedTypeFunctionTypeObject: MappedTypeDefaults["FunctionType"]["Object"] =
  {};
const OptionalPropertySignatureMappedTypeFunctionTypeString: OptionalMappedTypeDefaults["FunctionType"]["String"] =
  {};
const SecondOptionalPropertySignatureMappedTypeFunctionTypeString: OptionalMappedTypeDefaults["FunctionType"]["String"] =
  {};
const MakeRequiredPropertySignatureMappedTypeFunctionTypeString: MappedTypeDefaults["FunctionType"]["String"] =
  {};
const SecondMakeRequiredPropertySignatureMappedTypeFunctionTypeString: MappedTypeDefaults["FunctionType"]["String"] =
  {};
const OptionalPropertySignatureMappedTypeFunctionTypeNumber: OptionalMappedTypeDefaults["FunctionType"]["Number"] =
  {};
const SecondOptionalPropertySignatureMappedTypeFunctionTypeNumber: OptionalMappedTypeDefaults["FunctionType"]["Number"] =
  {};
const MakeRequiredPropertySignatureMappedTypeFunctionTypeNumber: MappedTypeDefaults["FunctionType"]["Number"] =
  {};
const SecondMakeRequiredPropertySignatureMappedTypeFunctionTypeNumber: MappedTypeDefaults["FunctionType"]["Number"] =
  {};
const OptionalPropertySignatureMappedTypeFunctionTypeBoolean: OptionalMappedTypeDefaults["FunctionType"]["Boolean"] =
  {};
const SecondOptionalPropertySignatureMappedTypeFunctionTypeBoolean: OptionalMappedTypeDefaults["FunctionType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureMappedTypeFunctionTypeBoolean: MappedTypeDefaults["FunctionType"]["Boolean"] =
  {};
const SecondMakeRequiredPropertySignatureMappedTypeFunctionTypeBoolean: MappedTypeDefaults["FunctionType"]["Boolean"] =
  {};
const OptionalPropertySignatureMappedTypeFunctionTypeAny: OptionalMappedTypeDefaults["FunctionType"]["Any"] =
  {};
const SecondOptionalPropertySignatureMappedTypeFunctionTypeAny: OptionalMappedTypeDefaults["FunctionType"]["Any"] =
  {};
const MakeRequiredPropertySignatureMappedTypeFunctionTypeAny: MappedTypeDefaults["FunctionType"]["Any"] =
  {};
const SecondMakeRequiredPropertySignatureMappedTypeFunctionTypeAny: MappedTypeDefaults["FunctionType"]["Any"] =
  {};

// Make Optional Property MappedType - ConstructorType
const OptionalPropertySignatureMappedTypeConstructorTypeLiteral: OptionalMappedTypeDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };
const SecondOptionalPropertySignatureMappedTypeConstructorTypeLiteral: OptionalMappedTypeDefaults["ConstructorType"]["Literal"] =
  {};
const MakeRequiredPropertySignatureMappedTypeConstructorTypeLiteral: MappedTypeDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };
const SecondMakeRequiredPropertySignatureMappedTypeConstructorTypeLiteral: MappedTypeDefaults["ConstructorType"]["Literal"] =
  {};
const OptionalPropertySignatureMappedTypeConstructorTypeObject: OptionalMappedTypeDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };
const SecondOptionalPropertySignatureMappedTypeConstructorTypeObject: OptionalMappedTypeDefaults["ConstructorType"]["Object"] =
  {};
const MakeRequiredPropertySignatureMappedTypeConstructorTypeObject: MappedTypeDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };
const SecondMakeRequiredPropertySignatureMappedTypeConstructorTypeObject: MappedTypeDefaults["ConstructorType"]["Object"] =
  {};
const OptionalPropertySignatureMappedTypeConstructorTypeString: OptionalMappedTypeDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };
const SecondOptionalPropertySignatureMappedTypeConstructorTypeString: OptionalMappedTypeDefaults["ConstructorType"]["String"] =
  {};
const MakeRequiredPropertySignatureMappedTypeConstructorTypeString: MappedTypeDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };
const SecondMakeRequiredPropertySignatureMappedTypeConstructorTypeString: MappedTypeDefaults["ConstructorType"]["String"] =
  {};
const OptionalPropertySignatureMappedTypeConstructorTypeNumber: OptionalMappedTypeDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };
const SecondOptionalPropertySignatureMappedTypeConstructorTypeNumber: OptionalMappedTypeDefaults["ConstructorType"]["Number"] =
  {};
const MakeRequiredPropertySignatureMappedTypeConstructorTypeNumber: MappedTypeDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };
const SecondMakeRequiredPropertySignatureMappedTypeConstructorTypeNumber: MappedTypeDefaults["ConstructorType"]["Number"] =
  {};
const OptionalPropertySignatureMappedTypeConstructorTypeBoolean: OptionalMappedTypeDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };
const SecondOptionalPropertySignatureMappedTypeConstructorTypeBoolean: OptionalMappedTypeDefaults["ConstructorType"]["Boolean"] =
  {};
const MakeRequiredPropertySignatureMappedTypeConstructorTypeBoolean: MappedTypeDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };
const SecondMakeRequiredPropertySignatureMappedTypeConstructorTypeBoolean: MappedTypeDefaults["ConstructorType"]["Boolean"] =
  {};
const OptionalPropertySignatureMappedTypeConstructorTypeAny: OptionalMappedTypeDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
const SecondOptionalPropertySignatureMappedTypeConstructorTypeAny: OptionalMappedTypeDefaults["ConstructorType"]["Any"] =
  {};
const MakeRequiredPropertySignatureMappedTypeConstructorTypeAny: MappedTypeDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
const SecondMakeRequiredPropertySignatureMappedTypeConstructorTypeAny: MappedTypeDefaults["ConstructorType"]["Any"] =
  {};
