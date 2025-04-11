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
 * Make Optional Property IndexTemplateLiteral
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Make Optional Property IndexTemplateLiteral - ParenthesizedType
const PropertySignatureIndexTemplateLiteralParenthesizedTypeLiteral: IndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };
const MakeOptionalPropertyIndexTemplateLiteralParenthesizedTypeLiteral: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };
const PropertySignatureIndexTemplateLiteralParenthesizedTypeObject: IndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };
const MakeOptionalPropertyIndexTemplateLiteralParenthesizedTypeObject: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };
const PropertySignatureIndexTemplateLiteralParenthesizedTypeString: IndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };
const MakeOptionalPropertyIndexTemplateLiteralParenthesizedTypeString: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };
const PropertySignatureIndexTemplateLiteralParenthesizedTypeNumber: IndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };
const MakeOptionalPropertyIndexTemplateLiteralParenthesizedTypeNumber: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };
const PropertySignatureIndexTemplateLiteralParenthesizedTypeBoolean: IndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };
const MakeOptionalPropertyIndexTemplateLiteralParenthesizedTypeBoolean: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };
const PropertySignatureIndexTemplateLiteralParenthesizedTypeAny: IndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };
const MakeOptionalPropertyIndexTemplateLiteralParenthesizedTypeAny: OptionalIndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };

// Make Optional Property IndexTemplateLiteral - TypeReferenceBuiltin
const PropertySignatureIndexTemplateLiteralTypeReferenceBuiltinLiteral: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };
const MakeOptionalPropertyIndexTemplateLiteralTypeReferenceBuiltinLiteral: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };
const PropertySignatureIndexTemplateLiteralTypeReferenceBuiltinObject: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };
const MakeOptionalPropertyIndexTemplateLiteralTypeReferenceBuiltinObject: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };
const PropertySignatureIndexTemplateLiteralTypeReferenceBuiltinString: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };
const MakeOptionalPropertyIndexTemplateLiteralTypeReferenceBuiltinString: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };
const PropertySignatureIndexTemplateLiteralTypeReferenceBuiltinNumber: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };
const MakeOptionalPropertyIndexTemplateLiteralTypeReferenceBuiltinNumber: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };
const PropertySignatureIndexTemplateLiteralTypeReferenceBuiltinBoolean: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };
const MakeOptionalPropertyIndexTemplateLiteralTypeReferenceBuiltinBoolean: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };
const PropertySignatureIndexTemplateLiteralTypeReferenceBuiltinAny: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };
const MakeOptionalPropertyIndexTemplateLiteralTypeReferenceBuiltinAny: OptionalIndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };

// Make Optional Property IndexTemplateLiteral - TypeReferencePredefined
const PropertySignatureIndexTemplateLiteralTypeReferencePredefinedLiteral: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };
const MakeOptionalPropertyIndexTemplateLiteralTypeReferencePredefinedLiteral: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };
const PropertySignatureIndexTemplateLiteralTypeReferencePredefinedObject: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };
const MakeOptionalPropertyIndexTemplateLiteralTypeReferencePredefinedObject: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };
const PropertySignatureIndexTemplateLiteralTypeReferencePredefinedString: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };
const MakeOptionalPropertyIndexTemplateLiteralTypeReferencePredefinedString: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };
const PropertySignatureIndexTemplateLiteralTypeReferencePredefinedNumber: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };
const MakeOptionalPropertyIndexTemplateLiteralTypeReferencePredefinedNumber: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };
const PropertySignatureIndexTemplateLiteralTypeReferencePredefinedBoolean: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };
const MakeOptionalPropertyIndexTemplateLiteralTypeReferencePredefinedBoolean: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };
const PropertySignatureIndexTemplateLiteralTypeReferencePredefinedAny: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };
const MakeOptionalPropertyIndexTemplateLiteralTypeReferencePredefinedAny: OptionalIndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };

// Make Optional Property IndexTemplateLiteral - UnionType
const PropertySignatureIndexTemplateLiteralUnionTypeLiteral: IndexTemplateLiteralDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };
const MakeOptionalPropertyIndexTemplateLiteralUnionTypeLiteral: OptionalIndexTemplateLiteralDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };
const PropertySignatureIndexTemplateLiteralUnionTypeObject: IndexTemplateLiteralDefaults["UnionType"]["Object"] =
  { fooKey: {} };
const MakeOptionalPropertyIndexTemplateLiteralUnionTypeObject: OptionalIndexTemplateLiteralDefaults["UnionType"]["Object"] =
  { fooKey: {} };
const PropertySignatureIndexTemplateLiteralUnionTypeString: IndexTemplateLiteralDefaults["UnionType"]["String"] =
  { fooKey: "two" };
const MakeOptionalPropertyIndexTemplateLiteralUnionTypeString: OptionalIndexTemplateLiteralDefaults["UnionType"]["String"] =
  { fooKey: "two" };
const PropertySignatureIndexTemplateLiteralUnionTypeNumber: IndexTemplateLiteralDefaults["UnionType"]["Number"] =
  { fooKey: 2 };
const MakeOptionalPropertyIndexTemplateLiteralUnionTypeNumber: OptionalIndexTemplateLiteralDefaults["UnionType"]["Number"] =
  { fooKey: 2 };
const PropertySignatureIndexTemplateLiteralUnionTypeBoolean: IndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  { fooKey: true };
const MakeOptionalPropertyIndexTemplateLiteralUnionTypeBoolean: OptionalIndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  { fooKey: true };
const PropertySignatureIndexTemplateLiteralUnionTypeAny: IndexTemplateLiteralDefaults["UnionType"]["Any"] =
  { fooKey: 2 };
const MakeOptionalPropertyIndexTemplateLiteralUnionTypeAny: OptionalIndexTemplateLiteralDefaults["UnionType"]["Any"] =
  { fooKey: 2 };

// Make Optional Property IndexTemplateLiteral - IntersectionType
const PropertySignatureIndexTemplateLiteralIntersectionTypeLiteral: IndexTemplateLiteralDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };
const MakeOptionalPropertyIndexTemplateLiteralIntersectionTypeLiteral: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };
const PropertySignatureIndexTemplateLiteralIntersectionTypeObject: IndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };
const MakeOptionalPropertyIndexTemplateLiteralIntersectionTypeObject: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };
const PropertySignatureIndexTemplateLiteralIntersectionTypeString: IndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };
const MakeOptionalPropertyIndexTemplateLiteralIntersectionTypeString: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };
const PropertySignatureIndexTemplateLiteralIntersectionTypeNumber: IndexTemplateLiteralDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };
const MakeOptionalPropertyIndexTemplateLiteralIntersectionTypeNumber: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };
const PropertySignatureIndexTemplateLiteralIntersectionTypeBoolean: IndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };
const MakeOptionalPropertyIndexTemplateLiteralIntersectionTypeBoolean: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };
const PropertySignatureIndexTemplateLiteralIntersectionTypeAny: IndexTemplateLiteralDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };
const MakeOptionalPropertyIndexTemplateLiteralIntersectionTypeAny: OptionalIndexTemplateLiteralDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };

// Make Optional Property IndexTemplateLiteral - TypeLiteral
const PropertySignatureIndexTemplateLiteralTypeLiteralLiteral: IndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };
const MakeOptionalPropertyIndexTemplateLiteralTypeLiteralLiteral: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };
const PropertySignatureIndexTemplateLiteralTypeLiteralObject: IndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };
const MakeOptionalPropertyIndexTemplateLiteralTypeLiteralObject: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };
const PropertySignatureIndexTemplateLiteralTypeLiteralString: IndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };
const MakeOptionalPropertyIndexTemplateLiteralTypeLiteralString: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };
const PropertySignatureIndexTemplateLiteralTypeLiteralNumber: IndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };
const MakeOptionalPropertyIndexTemplateLiteralTypeLiteralNumber: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };
const PropertySignatureIndexTemplateLiteralTypeLiteralBoolean: IndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };
const MakeOptionalPropertyIndexTemplateLiteralTypeLiteralBoolean: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };
const PropertySignatureIndexTemplateLiteralTypeLiteralAny: IndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };
const MakeOptionalPropertyIndexTemplateLiteralTypeLiteralAny: OptionalIndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };

// Make Optional Property IndexTemplateLiteral - TupleType
const PropertySignatureIndexTemplateLiteralTupleTypeLiteral: IndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };
const MakeOptionalPropertyIndexTemplateLiteralTupleTypeLiteral: OptionalIndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };
const PropertySignatureIndexTemplateLiteralTupleTypeObject: IndexTemplateLiteralDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };
const MakeOptionalPropertyIndexTemplateLiteralTupleTypeObject: OptionalIndexTemplateLiteralDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };
const PropertySignatureIndexTemplateLiteralTupleTypeString: IndexTemplateLiteralDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };
const MakeOptionalPropertyIndexTemplateLiteralTupleTypeString: OptionalIndexTemplateLiteralDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };
const PropertySignatureIndexTemplateLiteralTupleTypeNumber: IndexTemplateLiteralDefaults["TupleType"]["Number"] =
  { fooKey: [2] };
const MakeOptionalPropertyIndexTemplateLiteralTupleTypeNumber: OptionalIndexTemplateLiteralDefaults["TupleType"]["Number"] =
  { fooKey: [2] };
const PropertySignatureIndexTemplateLiteralTupleTypeBoolean: IndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };
const MakeOptionalPropertyIndexTemplateLiteralTupleTypeBoolean: OptionalIndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };
const PropertySignatureIndexTemplateLiteralTupleTypeAny: IndexTemplateLiteralDefaults["TupleType"]["Any"] =
  { fooKey: [2] };
const MakeOptionalPropertyIndexTemplateLiteralTupleTypeAny: OptionalIndexTemplateLiteralDefaults["TupleType"]["Any"] =
  { fooKey: [2] };

// Make Optional Property IndexTemplateLiteral - ArrayType
const PropertySignatureIndexTemplateLiteralArrayTypeLiteral: IndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };
const MakeOptionalPropertyIndexTemplateLiteralArrayTypeLiteral: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };
const PropertySignatureIndexTemplateLiteralArrayTypeObject: IndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };
const MakeOptionalPropertyIndexTemplateLiteralArrayTypeObject: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };
const PropertySignatureIndexTemplateLiteralArrayTypeString: IndexTemplateLiteralDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };
const MakeOptionalPropertyIndexTemplateLiteralArrayTypeString: OptionalIndexTemplateLiteralDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };
const PropertySignatureIndexTemplateLiteralArrayTypeNumber: IndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };
const MakeOptionalPropertyIndexTemplateLiteralArrayTypeNumber: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };
const PropertySignatureIndexTemplateLiteralArrayTypeBoolean: IndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };
const MakeOptionalPropertyIndexTemplateLiteralArrayTypeBoolean: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };
const PropertySignatureIndexTemplateLiteralArrayTypeAny: IndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };
const MakeOptionalPropertyIndexTemplateLiteralArrayTypeAny: OptionalIndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };

// Make Optional Property IndexTemplateLiteral - FunctionType
const PropertySignatureIndexTemplateLiteralFunctionTypeLiteral: IndexTemplateLiteralDefaults["FunctionType"]["Literal"] =
  {};
const MakeOptionalPropertyIndexTemplateLiteralFunctionTypeLiteral: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Literal"] =
  {};
const PropertySignatureIndexTemplateLiteralFunctionTypeObject: IndexTemplateLiteralDefaults["FunctionType"]["Object"] =
  {};
const MakeOptionalPropertyIndexTemplateLiteralFunctionTypeObject: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Object"] =
  {};
const PropertySignatureIndexTemplateLiteralFunctionTypeString: IndexTemplateLiteralDefaults["FunctionType"]["String"] =
  {};
const MakeOptionalPropertyIndexTemplateLiteralFunctionTypeString: OptionalIndexTemplateLiteralDefaults["FunctionType"]["String"] =
  {};
const PropertySignatureIndexTemplateLiteralFunctionTypeNumber: IndexTemplateLiteralDefaults["FunctionType"]["Number"] =
  {};
const MakeOptionalPropertyIndexTemplateLiteralFunctionTypeNumber: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Number"] =
  {};
const PropertySignatureIndexTemplateLiteralFunctionTypeBoolean: IndexTemplateLiteralDefaults["FunctionType"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexTemplateLiteralFunctionTypeBoolean: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Boolean"] =
  {};
const PropertySignatureIndexTemplateLiteralFunctionTypeAny: IndexTemplateLiteralDefaults["FunctionType"]["Any"] =
  {};
const MakeOptionalPropertyIndexTemplateLiteralFunctionTypeAny: OptionalIndexTemplateLiteralDefaults["FunctionType"]["Any"] =
  {};

// Make Optional Property IndexTemplateLiteral - ConstructorType
const PropertySignatureIndexTemplateLiteralConstructorTypeLiteral: IndexTemplateLiteralDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };
const MakeOptionalPropertyIndexTemplateLiteralConstructorTypeLiteral: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };
const PropertySignatureIndexTemplateLiteralConstructorTypeObject: IndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };
const MakeOptionalPropertyIndexTemplateLiteralConstructorTypeObject: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };
const PropertySignatureIndexTemplateLiteralConstructorTypeString: IndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };
const MakeOptionalPropertyIndexTemplateLiteralConstructorTypeString: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };
const PropertySignatureIndexTemplateLiteralConstructorTypeNumber: IndexTemplateLiteralDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };
const MakeOptionalPropertyIndexTemplateLiteralConstructorTypeNumber: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };
const PropertySignatureIndexTemplateLiteralConstructorTypeBoolean: IndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };
const MakeOptionalPropertyIndexTemplateLiteralConstructorTypeBoolean: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };
const PropertySignatureIndexTemplateLiteralConstructorTypeAny: IndexTemplateLiteralDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
const MakeOptionalPropertyIndexTemplateLiteralConstructorTypeAny: OptionalIndexTemplateLiteralDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
