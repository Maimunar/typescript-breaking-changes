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
 * Make Optional Property PropertySignature
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Make Optional Property PropertySignature - ParenthesizedType
const PropertySignaturePropertySignatureParenthesizedTypeLiteral: PropertySignatureDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };
const MakeOptionalPropertyPropertySignatureParenthesizedTypeLiteral: OptionalPropertySignatureDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };
const PropertySignaturePropertySignatureParenthesizedTypeObject: PropertySignatureDefaults["ParenthesizedType"]["Object"] =
  { key: {} };
const MakeOptionalPropertyPropertySignatureParenthesizedTypeObject: OptionalPropertySignatureDefaults["ParenthesizedType"]["Object"] =
  { key: {} };
const PropertySignaturePropertySignatureParenthesizedTypeString: PropertySignatureDefaults["ParenthesizedType"]["String"] =
  { key: "two" };
const MakeOptionalPropertyPropertySignatureParenthesizedTypeString: OptionalPropertySignatureDefaults["ParenthesizedType"]["String"] =
  { key: "two" };
const PropertySignaturePropertySignatureParenthesizedTypeNumber: PropertySignatureDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };
const MakeOptionalPropertyPropertySignatureParenthesizedTypeNumber: OptionalPropertySignatureDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };
const PropertySignaturePropertySignatureParenthesizedTypeBoolean: PropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };
const MakeOptionalPropertyPropertySignatureParenthesizedTypeBoolean: OptionalPropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };
const PropertySignaturePropertySignatureParenthesizedTypeAny: PropertySignatureDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };
const MakeOptionalPropertyPropertySignatureParenthesizedTypeAny: OptionalPropertySignatureDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };

// Make Optional Property PropertySignature - TypeReferenceBuiltin
const PropertySignaturePropertySignatureTypeReferenceBuiltinLiteral: PropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  { key: promisify(1) };
const MakeOptionalPropertyPropertySignatureTypeReferenceBuiltinLiteral: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  { key: promisify(1) };
const PropertySignaturePropertySignatureTypeReferenceBuiltinObject: PropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  { key: promisify({}) };
const MakeOptionalPropertyPropertySignatureTypeReferenceBuiltinObject: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  { key: promisify({}) };
const PropertySignaturePropertySignatureTypeReferenceBuiltinString: PropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  { key: promisify("two") };
const MakeOptionalPropertyPropertySignatureTypeReferenceBuiltinString: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  { key: promisify("two") };
const PropertySignaturePropertySignatureTypeReferenceBuiltinNumber: PropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  { key: promisify(2) };
const MakeOptionalPropertyPropertySignatureTypeReferenceBuiltinNumber: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  { key: promisify(2) };
const PropertySignaturePropertySignatureTypeReferenceBuiltinBoolean: PropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { key: promisify(true) };
const MakeOptionalPropertyPropertySignatureTypeReferenceBuiltinBoolean: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { key: promisify(true) };
const PropertySignaturePropertySignatureTypeReferenceBuiltinAny: PropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  { key: promisify(2) };
const MakeOptionalPropertyPropertySignatureTypeReferenceBuiltinAny: OptionalPropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  { key: promisify(2) };

// Make Optional Property PropertySignature - TypeReferencePredefined
const PropertySignaturePropertySignatureTypeReferencePredefinedLiteral: PropertySignatureDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };
const MakeOptionalPropertyPropertySignatureTypeReferencePredefinedLiteral: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };
const PropertySignaturePropertySignatureTypeReferencePredefinedObject: PropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };
const MakeOptionalPropertyPropertySignatureTypeReferencePredefinedObject: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };
const PropertySignaturePropertySignatureTypeReferencePredefinedString: PropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };
const MakeOptionalPropertyPropertySignatureTypeReferencePredefinedString: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };
const PropertySignaturePropertySignatureTypeReferencePredefinedNumber: PropertySignatureDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };
const MakeOptionalPropertyPropertySignatureTypeReferencePredefinedNumber: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };
const PropertySignaturePropertySignatureTypeReferencePredefinedBoolean: PropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };
const MakeOptionalPropertyPropertySignatureTypeReferencePredefinedBoolean: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };
const PropertySignaturePropertySignatureTypeReferencePredefinedAny: PropertySignatureDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };
const MakeOptionalPropertyPropertySignatureTypeReferencePredefinedAny: OptionalPropertySignatureDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };

// Make Optional Property PropertySignature - UnionType
const PropertySignaturePropertySignatureUnionTypeLiteral: PropertySignatureDefaults["UnionType"]["Literal"] =
  { key: 1 };
const MakeOptionalPropertyPropertySignatureUnionTypeLiteral: OptionalPropertySignatureDefaults["UnionType"]["Literal"] =
  { key: 1 };
const PropertySignaturePropertySignatureUnionTypeObject: PropertySignatureDefaults["UnionType"]["Object"] =
  { key: {} };
const MakeOptionalPropertyPropertySignatureUnionTypeObject: OptionalPropertySignatureDefaults["UnionType"]["Object"] =
  { key: {} };
const PropertySignaturePropertySignatureUnionTypeString: PropertySignatureDefaults["UnionType"]["String"] =
  { key: "two" };
const MakeOptionalPropertyPropertySignatureUnionTypeString: OptionalPropertySignatureDefaults["UnionType"]["String"] =
  { key: "two" };
const PropertySignaturePropertySignatureUnionTypeNumber: PropertySignatureDefaults["UnionType"]["Number"] =
  { key: 2 };
const MakeOptionalPropertyPropertySignatureUnionTypeNumber: OptionalPropertySignatureDefaults["UnionType"]["Number"] =
  { key: 2 };
const PropertySignaturePropertySignatureUnionTypeBoolean: PropertySignatureDefaults["UnionType"]["Boolean"] =
  { key: true };
const MakeOptionalPropertyPropertySignatureUnionTypeBoolean: OptionalPropertySignatureDefaults["UnionType"]["Boolean"] =
  { key: true };
const PropertySignaturePropertySignatureUnionTypeAny: PropertySignatureDefaults["UnionType"]["Any"] =
  { key: 2 };
const MakeOptionalPropertyPropertySignatureUnionTypeAny: OptionalPropertySignatureDefaults["UnionType"]["Any"] =
  { key: 2 };

// Make Optional Property PropertySignature - IntersectionType
const PropertySignaturePropertySignatureIntersectionTypeLiteral: PropertySignatureDefaults["IntersectionType"]["Literal"] =
  { key: 1 };
const MakeOptionalPropertyPropertySignatureIntersectionTypeLiteral: OptionalPropertySignatureDefaults["IntersectionType"]["Literal"] =
  { key: 1 };
const PropertySignaturePropertySignatureIntersectionTypeObject: PropertySignatureDefaults["IntersectionType"]["Object"] =
  { key: {} };
const MakeOptionalPropertyPropertySignatureIntersectionTypeObject: OptionalPropertySignatureDefaults["IntersectionType"]["Object"] =
  { key: {} };
const PropertySignaturePropertySignatureIntersectionTypeString: PropertySignatureDefaults["IntersectionType"]["String"] =
  { key: "two" };
const MakeOptionalPropertyPropertySignatureIntersectionTypeString: OptionalPropertySignatureDefaults["IntersectionType"]["String"] =
  { key: "two" };
const PropertySignaturePropertySignatureIntersectionTypeNumber: PropertySignatureDefaults["IntersectionType"]["Number"] =
  { key: 2 };
const MakeOptionalPropertyPropertySignatureIntersectionTypeNumber: OptionalPropertySignatureDefaults["IntersectionType"]["Number"] =
  { key: 2 };
const PropertySignaturePropertySignatureIntersectionTypeBoolean: PropertySignatureDefaults["IntersectionType"]["Boolean"] =
  { key: true };
const MakeOptionalPropertyPropertySignatureIntersectionTypeBoolean: OptionalPropertySignatureDefaults["IntersectionType"]["Boolean"] =
  { key: true };
const PropertySignaturePropertySignatureIntersectionTypeAny: PropertySignatureDefaults["IntersectionType"]["Any"] =
  { key: 2 };
const MakeOptionalPropertyPropertySignatureIntersectionTypeAny: OptionalPropertySignatureDefaults["IntersectionType"]["Any"] =
  { key: 2 };

// Make Optional Property PropertySignature - TypeLiteral
const PropertySignaturePropertySignatureTypeLiteralLiteral: PropertySignatureDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };
const MakeOptionalPropertyPropertySignatureTypeLiteralLiteral: OptionalPropertySignatureDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };
const PropertySignaturePropertySignatureTypeLiteralObject: PropertySignatureDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };
const MakeOptionalPropertyPropertySignatureTypeLiteralObject: OptionalPropertySignatureDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };
const PropertySignaturePropertySignatureTypeLiteralString: PropertySignatureDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };
const MakeOptionalPropertyPropertySignatureTypeLiteralString: OptionalPropertySignatureDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };
const PropertySignaturePropertySignatureTypeLiteralNumber: PropertySignatureDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };
const MakeOptionalPropertyPropertySignatureTypeLiteralNumber: OptionalPropertySignatureDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };
const PropertySignaturePropertySignatureTypeLiteralBoolean: PropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };
const MakeOptionalPropertyPropertySignatureTypeLiteralBoolean: OptionalPropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };
const PropertySignaturePropertySignatureTypeLiteralAny: PropertySignatureDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };
const MakeOptionalPropertyPropertySignatureTypeLiteralAny: OptionalPropertySignatureDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };

// Make Optional Property PropertySignature - TupleType
const PropertySignaturePropertySignatureTupleTypeLiteral: PropertySignatureDefaults["TupleType"]["Literal"] =
  { key: [1] };
const MakeOptionalPropertyPropertySignatureTupleTypeLiteral: OptionalPropertySignatureDefaults["TupleType"]["Literal"] =
  { key: [1] };
const PropertySignaturePropertySignatureTupleTypeObject: PropertySignatureDefaults["TupleType"]["Object"] =
  { key: [{}] };
const MakeOptionalPropertyPropertySignatureTupleTypeObject: OptionalPropertySignatureDefaults["TupleType"]["Object"] =
  { key: [{}] };
const PropertySignaturePropertySignatureTupleTypeString: PropertySignatureDefaults["TupleType"]["String"] =
  { key: ["two"] };
const MakeOptionalPropertyPropertySignatureTupleTypeString: OptionalPropertySignatureDefaults["TupleType"]["String"] =
  { key: ["two"] };
const PropertySignaturePropertySignatureTupleTypeNumber: PropertySignatureDefaults["TupleType"]["Number"] =
  { key: [2] };
const MakeOptionalPropertyPropertySignatureTupleTypeNumber: OptionalPropertySignatureDefaults["TupleType"]["Number"] =
  { key: [2] };
const PropertySignaturePropertySignatureTupleTypeBoolean: PropertySignatureDefaults["TupleType"]["Boolean"] =
  { key: [true] };
const MakeOptionalPropertyPropertySignatureTupleTypeBoolean: OptionalPropertySignatureDefaults["TupleType"]["Boolean"] =
  { key: [true] };
const PropertySignaturePropertySignatureTupleTypeAny: PropertySignatureDefaults["TupleType"]["Any"] =
  { key: [2] };
const MakeOptionalPropertyPropertySignatureTupleTypeAny: OptionalPropertySignatureDefaults["TupleType"]["Any"] =
  { key: [2] };

// Make Optional Property PropertySignature - ArrayType
const PropertySignaturePropertySignatureArrayTypeLiteral: PropertySignatureDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };
const MakeOptionalPropertyPropertySignatureArrayTypeLiteral: OptionalPropertySignatureDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };
const PropertySignaturePropertySignatureArrayTypeObject: PropertySignatureDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };
const MakeOptionalPropertyPropertySignatureArrayTypeObject: OptionalPropertySignatureDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };
const PropertySignaturePropertySignatureArrayTypeString: PropertySignatureDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };
const MakeOptionalPropertyPropertySignatureArrayTypeString: OptionalPropertySignatureDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };
const PropertySignaturePropertySignatureArrayTypeNumber: PropertySignatureDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };
const MakeOptionalPropertyPropertySignatureArrayTypeNumber: OptionalPropertySignatureDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };
const PropertySignaturePropertySignatureArrayTypeBoolean: PropertySignatureDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };
const MakeOptionalPropertyPropertySignatureArrayTypeBoolean: OptionalPropertySignatureDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };
const PropertySignaturePropertySignatureArrayTypeAny: PropertySignatureDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };
const MakeOptionalPropertyPropertySignatureArrayTypeAny: OptionalPropertySignatureDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };

// Make Optional Property PropertySignature - FunctionType
const PropertySignaturePropertySignatureFunctionTypeLiteral: PropertySignatureDefaults["FunctionType"]["Literal"] =
  { key: (param: 1) => {} };
const MakeOptionalPropertyPropertySignatureFunctionTypeLiteral: OptionalPropertySignatureDefaults["FunctionType"]["Literal"] =
  { key: (param: 1) => {} };
const PropertySignaturePropertySignatureFunctionTypeObject: PropertySignatureDefaults["FunctionType"]["Object"] =
  { key: (param: object) => {} };
const MakeOptionalPropertyPropertySignatureFunctionTypeObject: OptionalPropertySignatureDefaults["FunctionType"]["Object"] =
  { key: (param: object) => {} };
const PropertySignaturePropertySignatureFunctionTypeString: PropertySignatureDefaults["FunctionType"]["String"] =
  { key: (param: string) => {} };
const MakeOptionalPropertyPropertySignatureFunctionTypeString: OptionalPropertySignatureDefaults["FunctionType"]["String"] =
  { key: (param: string) => {} };
const PropertySignaturePropertySignatureFunctionTypeNumber: PropertySignatureDefaults["FunctionType"]["Number"] =
  { key: (param: number) => {} };
const MakeOptionalPropertyPropertySignatureFunctionTypeNumber: OptionalPropertySignatureDefaults["FunctionType"]["Number"] =
  { key: (param: number) => {} };
const PropertySignaturePropertySignatureFunctionTypeBoolean: PropertySignatureDefaults["FunctionType"]["Boolean"] =
  { key: (param: boolean) => {} };
const MakeOptionalPropertyPropertySignatureFunctionTypeBoolean: OptionalPropertySignatureDefaults["FunctionType"]["Boolean"] =
  { key: (param: boolean) => {} };
const PropertySignaturePropertySignatureFunctionTypeAny: PropertySignatureDefaults["FunctionType"]["Any"] =
  { key: (param: any) => {} };
const MakeOptionalPropertyPropertySignatureFunctionTypeAny: OptionalPropertySignatureDefaults["FunctionType"]["Any"] =
  { key: (param: any) => {} };

// Make Optional Property PropertySignature - ConstructorType
const PropertySignaturePropertySignatureConstructorTypeLiteral: PropertySignatureDefaults["ConstructorType"]["Literal"] =
  { key: 1 };
const MakeOptionalPropertyPropertySignatureConstructorTypeLiteral: OptionalPropertySignatureDefaults["ConstructorType"]["Literal"] =
  { key: 1 };
const PropertySignaturePropertySignatureConstructorTypeObject: PropertySignatureDefaults["ConstructorType"]["Object"] =
  { key: {} };
const MakeOptionalPropertyPropertySignatureConstructorTypeObject: OptionalPropertySignatureDefaults["ConstructorType"]["Object"] =
  { key: {} };
const PropertySignaturePropertySignatureConstructorTypeString: PropertySignatureDefaults["ConstructorType"]["String"] =
  { key: "two" };
const MakeOptionalPropertyPropertySignatureConstructorTypeString: OptionalPropertySignatureDefaults["ConstructorType"]["String"] =
  { key: "two" };
const PropertySignaturePropertySignatureConstructorTypeNumber: PropertySignatureDefaults["ConstructorType"]["Number"] =
  { key: 2 };
const MakeOptionalPropertyPropertySignatureConstructorTypeNumber: OptionalPropertySignatureDefaults["ConstructorType"]["Number"] =
  { key: 2 };
const PropertySignaturePropertySignatureConstructorTypeBoolean: PropertySignatureDefaults["ConstructorType"]["Boolean"] =
  { key: true };
const MakeOptionalPropertyPropertySignatureConstructorTypeBoolean: OptionalPropertySignatureDefaults["ConstructorType"]["Boolean"] =
  { key: true };
const PropertySignaturePropertySignatureConstructorTypeAny: PropertySignatureDefaults["ConstructorType"]["Any"] =
  { key: 2 };
const MakeOptionalPropertyPropertySignatureConstructorTypeAny: OptionalPropertySignatureDefaults["ConstructorType"]["Any"] =
  { key: 2 };
