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
 * Remove Property Signature from PropertySignature
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Changes
// Remove Property Signature of PropertySignature - ParenthesizedType
const PropertySignaturePropertySignatureParenthesizedTypeLiteral: PropertySignatureDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };
const RemovePropertySignaturePropertySignatureParenthesizedTypeLiteral: EmptyTypeLiteral =
  { key: 1 };
const PropertySignaturePropertySignatureParenthesizedTypeObject: PropertySignatureDefaults["ParenthesizedType"]["Object"] =
  { key: {} };
const RemovePropertySignaturePropertySignatureParenthesizedTypeObject: EmptyTypeLiteral =
  { key: {} };
const PropertySignaturePropertySignatureParenthesizedTypeString: PropertySignatureDefaults["ParenthesizedType"]["String"] =
  { key: "two" };
const RemovePropertySignaturePropertySignatureParenthesizedTypeString: EmptyTypeLiteral =
  { key: "two" };
const PropertySignaturePropertySignatureParenthesizedTypeNumber: PropertySignatureDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };
const RemovePropertySignaturePropertySignatureParenthesizedTypeNumber: EmptyTypeLiteral =
  { key: 2 };
const PropertySignaturePropertySignatureParenthesizedTypeBoolean: PropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };
const RemovePropertySignaturePropertySignatureParenthesizedTypeBoolean: EmptyTypeLiteral =
  { key: true };
const PropertySignaturePropertySignatureParenthesizedTypeAny: PropertySignatureDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };
const RemovePropertySignaturePropertySignatureParenthesizedTypeAny: EmptyTypeLiteral =
  { key: 2 };

// Remove Property Signature of PropertySignature - TypeReferenceBuiltin
const PropertySignaturePropertySignatureTypeReferenceBuiltinLiteral: PropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  { key: promisify(1) };
const RemovePropertySignaturePropertySignatureTypeReferenceBuiltinLiteral: EmptyTypeLiteral =
  { key: promisify(1) };
const PropertySignaturePropertySignatureTypeReferenceBuiltinObject: PropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  { key: promisify({}) };
const RemovePropertySignaturePropertySignatureTypeReferenceBuiltinObject: EmptyTypeLiteral =
  { key: promisify({}) };
const PropertySignaturePropertySignatureTypeReferenceBuiltinString: PropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  { key: promisify("two") };
const RemovePropertySignaturePropertySignatureTypeReferenceBuiltinString: EmptyTypeLiteral =
  { key: promisify("two") };
const PropertySignaturePropertySignatureTypeReferenceBuiltinNumber: PropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  { key: promisify(2) };
const RemovePropertySignaturePropertySignatureTypeReferenceBuiltinNumber: EmptyTypeLiteral =
  { key: promisify(2) };
const PropertySignaturePropertySignatureTypeReferenceBuiltinBoolean: PropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { key: promisify(true) };
const RemovePropertySignaturePropertySignatureTypeReferenceBuiltinBoolean: EmptyTypeLiteral =
  { key: promisify(true) };
const PropertySignaturePropertySignatureTypeReferenceBuiltinAny: PropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  { key: promisify(2) };
const RemovePropertySignaturePropertySignatureTypeReferenceBuiltinAny: EmptyTypeLiteral =
  { key: promisify(2) };

// Remove Property Signature of PropertySignature - TypeReferencePredefined
const PropertySignaturePropertySignatureTypeReferencePredefinedLiteral: PropertySignatureDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };
const RemovePropertySignaturePropertySignatureTypeReferencePredefinedLiteral: EmptyTypeLiteral =
  { key: 1 };
const PropertySignaturePropertySignatureTypeReferencePredefinedObject: PropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };
const RemovePropertySignaturePropertySignatureTypeReferencePredefinedObject: EmptyTypeLiteral =
  { key: {} };
const PropertySignaturePropertySignatureTypeReferencePredefinedString: PropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };
const RemovePropertySignaturePropertySignatureTypeReferencePredefinedString: EmptyTypeLiteral =
  { key: "two" };
const PropertySignaturePropertySignatureTypeReferencePredefinedNumber: PropertySignatureDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };
const RemovePropertySignaturePropertySignatureTypeReferencePredefinedNumber: EmptyTypeLiteral =
  { key: 2 };
const PropertySignaturePropertySignatureTypeReferencePredefinedBoolean: PropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };
const RemovePropertySignaturePropertySignatureTypeReferencePredefinedBoolean: EmptyTypeLiteral =
  { key: true };
const PropertySignaturePropertySignatureTypeReferencePredefinedAny: PropertySignatureDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };
const RemovePropertySignaturePropertySignatureTypeReferencePredefinedAny: EmptyTypeLiteral =
  { key: 2 };

// Remove Property Signature of PropertySignature - UnionType
const PropertySignaturePropertySignatureUnionTypeLiteral: PropertySignatureDefaults["UnionType"]["Literal"] =
  { key: 1 };
const RemovePropertySignaturePropertySignatureUnionTypeLiteral: EmptyTypeLiteral =
  { key: 1 };
const PropertySignaturePropertySignatureUnionTypeObject: PropertySignatureDefaults["UnionType"]["Object"] =
  { key: {} };
const RemovePropertySignaturePropertySignatureUnionTypeObject: EmptyTypeLiteral =
  { key: {} };
const PropertySignaturePropertySignatureUnionTypeString: PropertySignatureDefaults["UnionType"]["String"] =
  { key: "two" };
const RemovePropertySignaturePropertySignatureUnionTypeString: EmptyTypeLiteral =
  { key: "two" };
const PropertySignaturePropertySignatureUnionTypeNumber: PropertySignatureDefaults["UnionType"]["Number"] =
  { key: 2 };
const RemovePropertySignaturePropertySignatureUnionTypeNumber: EmptyTypeLiteral =
  { key: 2 };
const PropertySignaturePropertySignatureUnionTypeBoolean: PropertySignatureDefaults["UnionType"]["Boolean"] =
  { key: true };
const RemovePropertySignaturePropertySignatureUnionTypeBoolean: EmptyTypeLiteral =
  { key: true };
const PropertySignaturePropertySignatureUnionTypeAny: PropertySignatureDefaults["UnionType"]["Any"] =
  { key: 2 };
const RemovePropertySignaturePropertySignatureUnionTypeAny: EmptyTypeLiteral = {
  key: 2,
};

// Remove Property Signature of PropertySignature - IntersectionType
const PropertySignaturePropertySignatureIntersectionTypeLiteral: PropertySignatureDefaults["IntersectionType"]["Literal"] =
  { key: 1 };
const RemovePropertySignaturePropertySignatureIntersectionTypeLiteral: EmptyTypeLiteral =
  { key: 1 };
const PropertySignaturePropertySignatureIntersectionTypeObject: PropertySignatureDefaults["IntersectionType"]["Object"] =
  { key: {} };
const RemovePropertySignaturePropertySignatureIntersectionTypeObject: EmptyTypeLiteral =
  { key: {} };
const PropertySignaturePropertySignatureIntersectionTypeString: PropertySignatureDefaults["IntersectionType"]["String"] =
  { key: "two" };
const RemovePropertySignaturePropertySignatureIntersectionTypeString: EmptyTypeLiteral =
  { key: "two" };
const PropertySignaturePropertySignatureIntersectionTypeNumber: PropertySignatureDefaults["IntersectionType"]["Number"] =
  { key: 2 };
const RemovePropertySignaturePropertySignatureIntersectionTypeNumber: EmptyTypeLiteral =
  { key: 2 };
const PropertySignaturePropertySignatureIntersectionTypeBoolean: PropertySignatureDefaults["IntersectionType"]["Boolean"] =
  { key: true };
const RemovePropertySignaturePropertySignatureIntersectionTypeBoolean: EmptyTypeLiteral =
  { key: true };
const PropertySignaturePropertySignatureIntersectionTypeAny: PropertySignatureDefaults["IntersectionType"]["Any"] =
  { key: 2 };
const RemovePropertySignaturePropertySignatureIntersectionTypeAny: EmptyTypeLiteral =
  { key: 2 };

// Remove Property Signature of PropertySignature - TypeLiteral
const PropertySignaturePropertySignatureTypeLiteralLiteral: PropertySignatureDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };
const RemovePropertySignaturePropertySignatureTypeLiteralLiteral: EmptyTypeLiteral =
  { key: { key: 1 } };
const PropertySignaturePropertySignatureTypeLiteralObject: PropertySignatureDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };
const RemovePropertySignaturePropertySignatureTypeLiteralObject: EmptyTypeLiteral =
  { key: { key: {} } };
const PropertySignaturePropertySignatureTypeLiteralString: PropertySignatureDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };
const RemovePropertySignaturePropertySignatureTypeLiteralString: EmptyTypeLiteral =
  { key: { key: "two" } };
const PropertySignaturePropertySignatureTypeLiteralNumber: PropertySignatureDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };
const RemovePropertySignaturePropertySignatureTypeLiteralNumber: EmptyTypeLiteral =
  { key: { key: 2 } };
const PropertySignaturePropertySignatureTypeLiteralBoolean: PropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };
const RemovePropertySignaturePropertySignatureTypeLiteralBoolean: EmptyTypeLiteral =
  { key: { key: true } };
const PropertySignaturePropertySignatureTypeLiteralAny: PropertySignatureDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };
const RemovePropertySignaturePropertySignatureTypeLiteralAny: EmptyTypeLiteral =
  { key: { key: 2 } };

// Remove Property Signature of PropertySignature - TupleType
const PropertySignaturePropertySignatureTupleTypeLiteral: PropertySignatureDefaults["TupleType"]["Literal"] =
  { key: [1] };
const RemovePropertySignaturePropertySignatureTupleTypeLiteral: EmptyTypeLiteral =
  { key: [1] };
const PropertySignaturePropertySignatureTupleTypeObject: PropertySignatureDefaults["TupleType"]["Object"] =
  { key: [{}] };
const RemovePropertySignaturePropertySignatureTupleTypeObject: EmptyTypeLiteral =
  { key: [{}] };
const PropertySignaturePropertySignatureTupleTypeString: PropertySignatureDefaults["TupleType"]["String"] =
  { key: ["two"] };
const RemovePropertySignaturePropertySignatureTupleTypeString: EmptyTypeLiteral =
  { key: ["two"] };
const PropertySignaturePropertySignatureTupleTypeNumber: PropertySignatureDefaults["TupleType"]["Number"] =
  { key: [2] };
const RemovePropertySignaturePropertySignatureTupleTypeNumber: EmptyTypeLiteral =
  { key: [2] };
const PropertySignaturePropertySignatureTupleTypeBoolean: PropertySignatureDefaults["TupleType"]["Boolean"] =
  { key: [true] };
const RemovePropertySignaturePropertySignatureTupleTypeBoolean: EmptyTypeLiteral =
  { key: [true] };
const PropertySignaturePropertySignatureTupleTypeAny: PropertySignatureDefaults["TupleType"]["Any"] =
  { key: [2] };
const RemovePropertySignaturePropertySignatureTupleTypeAny: EmptyTypeLiteral = {
  key: [2],
};

// Remove Property Signature of PropertySignature - ArrayType
const PropertySignaturePropertySignatureArrayTypeLiteral: PropertySignatureDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };
const RemovePropertySignaturePropertySignatureArrayTypeLiteral: EmptyTypeLiteral =
  { key: [1, 1] };
const PropertySignaturePropertySignatureArrayTypeObject: PropertySignatureDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };
const RemovePropertySignaturePropertySignatureArrayTypeObject: EmptyTypeLiteral =
  { key: [{}, {}] };
const PropertySignaturePropertySignatureArrayTypeString: PropertySignatureDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };
const RemovePropertySignaturePropertySignatureArrayTypeString: EmptyTypeLiteral =
  { key: ["two", "two"] };
const PropertySignaturePropertySignatureArrayTypeNumber: PropertySignatureDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };
const RemovePropertySignaturePropertySignatureArrayTypeNumber: EmptyTypeLiteral =
  { key: [2, 2] };
const PropertySignaturePropertySignatureArrayTypeBoolean: PropertySignatureDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };
const RemovePropertySignaturePropertySignatureArrayTypeBoolean: EmptyTypeLiteral =
  { key: [true, true] };
const PropertySignaturePropertySignatureArrayTypeAny: PropertySignatureDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };
const RemovePropertySignaturePropertySignatureArrayTypeAny: EmptyTypeLiteral = {
  key: [2, 2],
};

// Remove Property Signature of PropertySignature - FunctionType
const PropertySignaturePropertySignatureFunctionTypeLiteral: PropertySignatureDefaults["FunctionType"]["Literal"] =
  { key: (param: 1) => {} };
const RemovePropertySignaturePropertySignatureFunctionTypeLiteral: EmptyTypeLiteral =
  { key: (param: 1) => {} };
const PropertySignaturePropertySignatureFunctionTypeObject: PropertySignatureDefaults["FunctionType"]["Object"] =
  { key: (param: object) => {} };
const RemovePropertySignaturePropertySignatureFunctionTypeObject: EmptyTypeLiteral =
  { key: (param: object) => {} };
const PropertySignaturePropertySignatureFunctionTypeString: PropertySignatureDefaults["FunctionType"]["String"] =
  { key: (param: string) => {} };
const RemovePropertySignaturePropertySignatureFunctionTypeString: EmptyTypeLiteral =
  { key: (param: string) => {} };
const PropertySignaturePropertySignatureFunctionTypeNumber: PropertySignatureDefaults["FunctionType"]["Number"] =
  { key: (param: number) => {} };
const RemovePropertySignaturePropertySignatureFunctionTypeNumber: EmptyTypeLiteral =
  { key: (param: number) => {} };
const PropertySignaturePropertySignatureFunctionTypeBoolean: PropertySignatureDefaults["FunctionType"]["Boolean"] =
  { key: (param: boolean) => {} };
const RemovePropertySignaturePropertySignatureFunctionTypeBoolean: EmptyTypeLiteral =
  { key: (param: boolean) => {} };
const PropertySignaturePropertySignatureFunctionTypeAny: PropertySignatureDefaults["FunctionType"]["Any"] =
  { key: (param: any) => {} };
const RemovePropertySignaturePropertySignatureFunctionTypeAny: EmptyTypeLiteral =
  { key: (param: any) => {} };

// Remove Property Signature of PropertySignature - ConstructorType
const PropertySignaturePropertySignatureConstructorTypeLiteral: PropertySignatureDefaults["ConstructorType"]["Literal"] =
  { key: 1 };
const RemovePropertySignaturePropertySignatureConstructorTypeLiteral: EmptyTypeLiteral =
  { key: 1 };
const PropertySignaturePropertySignatureConstructorTypeObject: PropertySignatureDefaults["ConstructorType"]["Object"] =
  { key: {} };
const RemovePropertySignaturePropertySignatureConstructorTypeObject: EmptyTypeLiteral =
  { key: {} };
const PropertySignaturePropertySignatureConstructorTypeString: PropertySignatureDefaults["ConstructorType"]["String"] =
  { key: "two" };
const RemovePropertySignaturePropertySignatureConstructorTypeString: EmptyTypeLiteral =
  { key: "two" };
const PropertySignaturePropertySignatureConstructorTypeNumber: PropertySignatureDefaults["ConstructorType"]["Number"] =
  { key: 2 };
const RemovePropertySignaturePropertySignatureConstructorTypeNumber: EmptyTypeLiteral =
  { key: 2 };
const PropertySignaturePropertySignatureConstructorTypeBoolean: PropertySignatureDefaults["ConstructorType"]["Boolean"] =
  { key: true };
const RemovePropertySignaturePropertySignatureConstructorTypeBoolean: EmptyTypeLiteral =
  { key: true };
const PropertySignaturePropertySignatureConstructorTypeAny: PropertySignatureDefaults["ConstructorType"]["Any"] =
  { key: 2 };
const RemovePropertySignaturePropertySignatureConstructorTypeAny: EmptyTypeLiteral =
  { key: 2 };
