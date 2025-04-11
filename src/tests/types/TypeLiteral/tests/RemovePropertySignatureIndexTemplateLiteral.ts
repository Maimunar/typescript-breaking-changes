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
 * Remove Property Signature from IndexTemplateLiteral
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Changes
// Remove Property Signature of IndexTemplateLiteral - ParenthesizedType
const PropertySignatureIndexTemplateLiteralParenthesizedTypeLiteral: IndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };
const RemovePropertySignatureIndexTemplateLiteralParenthesizedTypeLiteral: EmptyTypeLiteral =
  { fooKey: 1 };
const PropertySignatureIndexTemplateLiteralParenthesizedTypeObject: IndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };
const RemovePropertySignatureIndexTemplateLiteralParenthesizedTypeObject: EmptyTypeLiteral =
  { fooKey: {} };
const PropertySignatureIndexTemplateLiteralParenthesizedTypeString: IndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };
const RemovePropertySignatureIndexTemplateLiteralParenthesizedTypeString: EmptyTypeLiteral =
  { fooKey: "two" };
const PropertySignatureIndexTemplateLiteralParenthesizedTypeNumber: IndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };
const RemovePropertySignatureIndexTemplateLiteralParenthesizedTypeNumber: EmptyTypeLiteral =
  { fooKey: 2 };
const PropertySignatureIndexTemplateLiteralParenthesizedTypeBoolean: IndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };
const RemovePropertySignatureIndexTemplateLiteralParenthesizedTypeBoolean: EmptyTypeLiteral =
  { fooKey: true };
const PropertySignatureIndexTemplateLiteralParenthesizedTypeAny: IndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };
const RemovePropertySignatureIndexTemplateLiteralParenthesizedTypeAny: EmptyTypeLiteral =
  { fooKey: 2 };

// Remove Property Signature of IndexTemplateLiteral - TypeReferenceBuiltin
const PropertySignatureIndexTemplateLiteralTypeReferenceBuiltinLiteral: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };
const RemovePropertySignatureIndexTemplateLiteralTypeReferenceBuiltinLiteral: EmptyTypeLiteral =
  { fooKey: promisify(1) };
const PropertySignatureIndexTemplateLiteralTypeReferenceBuiltinObject: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };
const RemovePropertySignatureIndexTemplateLiteralTypeReferenceBuiltinObject: EmptyTypeLiteral =
  { fooKey: promisify({}) };
const PropertySignatureIndexTemplateLiteralTypeReferenceBuiltinString: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };
const RemovePropertySignatureIndexTemplateLiteralTypeReferenceBuiltinString: EmptyTypeLiteral =
  { fooKey: promisify("two") };
const PropertySignatureIndexTemplateLiteralTypeReferenceBuiltinNumber: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };
const RemovePropertySignatureIndexTemplateLiteralTypeReferenceBuiltinNumber: EmptyTypeLiteral =
  { fooKey: promisify(2) };
const PropertySignatureIndexTemplateLiteralTypeReferenceBuiltinBoolean: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };
const RemovePropertySignatureIndexTemplateLiteralTypeReferenceBuiltinBoolean: EmptyTypeLiteral =
  { fooKey: promisify(true) };
const PropertySignatureIndexTemplateLiteralTypeReferenceBuiltinAny: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };
const RemovePropertySignatureIndexTemplateLiteralTypeReferenceBuiltinAny: EmptyTypeLiteral =
  { fooKey: promisify(2) };

// Remove Property Signature of IndexTemplateLiteral - TypeReferencePredefined
const PropertySignatureIndexTemplateLiteralTypeReferencePredefinedLiteral: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };
const RemovePropertySignatureIndexTemplateLiteralTypeReferencePredefinedLiteral: EmptyTypeLiteral =
  { fooKey: 1 };
const PropertySignatureIndexTemplateLiteralTypeReferencePredefinedObject: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };
const RemovePropertySignatureIndexTemplateLiteralTypeReferencePredefinedObject: EmptyTypeLiteral =
  { fooKey: {} };
const PropertySignatureIndexTemplateLiteralTypeReferencePredefinedString: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };
const RemovePropertySignatureIndexTemplateLiteralTypeReferencePredefinedString: EmptyTypeLiteral =
  { fooKey: "two" };
const PropertySignatureIndexTemplateLiteralTypeReferencePredefinedNumber: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };
const RemovePropertySignatureIndexTemplateLiteralTypeReferencePredefinedNumber: EmptyTypeLiteral =
  { fooKey: 2 };
const PropertySignatureIndexTemplateLiteralTypeReferencePredefinedBoolean: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };
const RemovePropertySignatureIndexTemplateLiteralTypeReferencePredefinedBoolean: EmptyTypeLiteral =
  { fooKey: true };
const PropertySignatureIndexTemplateLiteralTypeReferencePredefinedAny: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };
const RemovePropertySignatureIndexTemplateLiteralTypeReferencePredefinedAny: EmptyTypeLiteral =
  { fooKey: 2 };

// Remove Property Signature of IndexTemplateLiteral - UnionType
const PropertySignatureIndexTemplateLiteralUnionTypeLiteral: IndexTemplateLiteralDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };
const RemovePropertySignatureIndexTemplateLiteralUnionTypeLiteral: EmptyTypeLiteral =
  { fooKey: 1 };
const PropertySignatureIndexTemplateLiteralUnionTypeObject: IndexTemplateLiteralDefaults["UnionType"]["Object"] =
  { fooKey: {} };
const RemovePropertySignatureIndexTemplateLiteralUnionTypeObject: EmptyTypeLiteral =
  { fooKey: {} };
const PropertySignatureIndexTemplateLiteralUnionTypeString: IndexTemplateLiteralDefaults["UnionType"]["String"] =
  { fooKey: "two" };
const RemovePropertySignatureIndexTemplateLiteralUnionTypeString: EmptyTypeLiteral =
  { fooKey: "two" };
const PropertySignatureIndexTemplateLiteralUnionTypeNumber: IndexTemplateLiteralDefaults["UnionType"]["Number"] =
  { fooKey: 2 };
const RemovePropertySignatureIndexTemplateLiteralUnionTypeNumber: EmptyTypeLiteral =
  { fooKey: 2 };
const PropertySignatureIndexTemplateLiteralUnionTypeBoolean: IndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  { fooKey: true };
const RemovePropertySignatureIndexTemplateLiteralUnionTypeBoolean: EmptyTypeLiteral =
  { fooKey: true };
const PropertySignatureIndexTemplateLiteralUnionTypeAny: IndexTemplateLiteralDefaults["UnionType"]["Any"] =
  { fooKey: 2 };
const RemovePropertySignatureIndexTemplateLiteralUnionTypeAny: EmptyTypeLiteral =
  { fooKey: 2 };

// Remove Property Signature of IndexTemplateLiteral - IntersectionType
const PropertySignatureIndexTemplateLiteralIntersectionTypeLiteral: IndexTemplateLiteralDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };
const RemovePropertySignatureIndexTemplateLiteralIntersectionTypeLiteral: EmptyTypeLiteral =
  { fooKey: 1 };
const PropertySignatureIndexTemplateLiteralIntersectionTypeObject: IndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };
const RemovePropertySignatureIndexTemplateLiteralIntersectionTypeObject: EmptyTypeLiteral =
  { fooKey: {} };
const PropertySignatureIndexTemplateLiteralIntersectionTypeString: IndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };
const RemovePropertySignatureIndexTemplateLiteralIntersectionTypeString: EmptyTypeLiteral =
  { fooKey: "two" };
const PropertySignatureIndexTemplateLiteralIntersectionTypeNumber: IndexTemplateLiteralDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };
const RemovePropertySignatureIndexTemplateLiteralIntersectionTypeNumber: EmptyTypeLiteral =
  { fooKey: 2 };
const PropertySignatureIndexTemplateLiteralIntersectionTypeBoolean: IndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };
const RemovePropertySignatureIndexTemplateLiteralIntersectionTypeBoolean: EmptyTypeLiteral =
  { fooKey: true };
const PropertySignatureIndexTemplateLiteralIntersectionTypeAny: IndexTemplateLiteralDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };
const RemovePropertySignatureIndexTemplateLiteralIntersectionTypeAny: EmptyTypeLiteral =
  { fooKey: 2 };

// Remove Property Signature of IndexTemplateLiteral - TypeLiteral
const PropertySignatureIndexTemplateLiteralTypeLiteralLiteral: IndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };
const RemovePropertySignatureIndexTemplateLiteralTypeLiteralLiteral: EmptyTypeLiteral =
  { fooKey: { key: 1 } };
const PropertySignatureIndexTemplateLiteralTypeLiteralObject: IndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };
const RemovePropertySignatureIndexTemplateLiteralTypeLiteralObject: EmptyTypeLiteral =
  { fooKey: { key: {} } };
const PropertySignatureIndexTemplateLiteralTypeLiteralString: IndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };
const RemovePropertySignatureIndexTemplateLiteralTypeLiteralString: EmptyTypeLiteral =
  { fooKey: { key: "two" } };
const PropertySignatureIndexTemplateLiteralTypeLiteralNumber: IndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };
const RemovePropertySignatureIndexTemplateLiteralTypeLiteralNumber: EmptyTypeLiteral =
  { fooKey: { key: 2 } };
const PropertySignatureIndexTemplateLiteralTypeLiteralBoolean: IndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };
const RemovePropertySignatureIndexTemplateLiteralTypeLiteralBoolean: EmptyTypeLiteral =
  { fooKey: { key: true } };
const PropertySignatureIndexTemplateLiteralTypeLiteralAny: IndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };
const RemovePropertySignatureIndexTemplateLiteralTypeLiteralAny: EmptyTypeLiteral =
  { fooKey: { key: 2 } };

// Remove Property Signature of IndexTemplateLiteral - TupleType
const PropertySignatureIndexTemplateLiteralTupleTypeLiteral: IndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };
const RemovePropertySignatureIndexTemplateLiteralTupleTypeLiteral: EmptyTypeLiteral =
  { fooKey: [1] };
const PropertySignatureIndexTemplateLiteralTupleTypeObject: IndexTemplateLiteralDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };
const RemovePropertySignatureIndexTemplateLiteralTupleTypeObject: EmptyTypeLiteral =
  { fooKey: [{}] };
const PropertySignatureIndexTemplateLiteralTupleTypeString: IndexTemplateLiteralDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };
const RemovePropertySignatureIndexTemplateLiteralTupleTypeString: EmptyTypeLiteral =
  { fooKey: ["two"] };
const PropertySignatureIndexTemplateLiteralTupleTypeNumber: IndexTemplateLiteralDefaults["TupleType"]["Number"] =
  { fooKey: [2] };
const RemovePropertySignatureIndexTemplateLiteralTupleTypeNumber: EmptyTypeLiteral =
  { fooKey: [2] };
const PropertySignatureIndexTemplateLiteralTupleTypeBoolean: IndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };
const RemovePropertySignatureIndexTemplateLiteralTupleTypeBoolean: EmptyTypeLiteral =
  { fooKey: [true] };
const PropertySignatureIndexTemplateLiteralTupleTypeAny: IndexTemplateLiteralDefaults["TupleType"]["Any"] =
  { fooKey: [2] };
const RemovePropertySignatureIndexTemplateLiteralTupleTypeAny: EmptyTypeLiteral =
  { fooKey: [2] };

// Remove Property Signature of IndexTemplateLiteral - ArrayType
const PropertySignatureIndexTemplateLiteralArrayTypeLiteral: IndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };
const RemovePropertySignatureIndexTemplateLiteralArrayTypeLiteral: EmptyTypeLiteral =
  { fooKey: [1, 1] };
const PropertySignatureIndexTemplateLiteralArrayTypeObject: IndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };
const RemovePropertySignatureIndexTemplateLiteralArrayTypeObject: EmptyTypeLiteral =
  { fooKey: [{}, {}] };
const PropertySignatureIndexTemplateLiteralArrayTypeString: IndexTemplateLiteralDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };
const RemovePropertySignatureIndexTemplateLiteralArrayTypeString: EmptyTypeLiteral =
  { fooKey: ["two", "two"] };
const PropertySignatureIndexTemplateLiteralArrayTypeNumber: IndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };
const RemovePropertySignatureIndexTemplateLiteralArrayTypeNumber: EmptyTypeLiteral =
  { fooKey: [2, 2] };
const PropertySignatureIndexTemplateLiteralArrayTypeBoolean: IndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };
const RemovePropertySignatureIndexTemplateLiteralArrayTypeBoolean: EmptyTypeLiteral =
  { fooKey: [true, true] };
const PropertySignatureIndexTemplateLiteralArrayTypeAny: IndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };
const RemovePropertySignatureIndexTemplateLiteralArrayTypeAny: EmptyTypeLiteral =
  { fooKey: [2, 2] };

// Remove Property Signature of IndexTemplateLiteral - FunctionType
const PropertySignatureIndexTemplateLiteralFunctionTypeLiteral: IndexTemplateLiteralDefaults["FunctionType"]["Literal"] =
  {};
const RemovePropertySignatureIndexTemplateLiteralFunctionTypeLiteral: EmptyTypeLiteral =
  {};
const PropertySignatureIndexTemplateLiteralFunctionTypeObject: IndexTemplateLiteralDefaults["FunctionType"]["Object"] =
  {};
const RemovePropertySignatureIndexTemplateLiteralFunctionTypeObject: EmptyTypeLiteral =
  {};
const PropertySignatureIndexTemplateLiteralFunctionTypeString: IndexTemplateLiteralDefaults["FunctionType"]["String"] =
  {};
const RemovePropertySignatureIndexTemplateLiteralFunctionTypeString: EmptyTypeLiteral =
  {};
const PropertySignatureIndexTemplateLiteralFunctionTypeNumber: IndexTemplateLiteralDefaults["FunctionType"]["Number"] =
  {};
const RemovePropertySignatureIndexTemplateLiteralFunctionTypeNumber: EmptyTypeLiteral =
  {};
const PropertySignatureIndexTemplateLiteralFunctionTypeBoolean: IndexTemplateLiteralDefaults["FunctionType"]["Boolean"] =
  {};
const RemovePropertySignatureIndexTemplateLiteralFunctionTypeBoolean: EmptyTypeLiteral =
  {};
const PropertySignatureIndexTemplateLiteralFunctionTypeAny: IndexTemplateLiteralDefaults["FunctionType"]["Any"] =
  {};
const RemovePropertySignatureIndexTemplateLiteralFunctionTypeAny: EmptyTypeLiteral =
  {};

// Remove Property Signature of IndexTemplateLiteral - ConstructorType
const PropertySignatureIndexTemplateLiteralConstructorTypeLiteral: IndexTemplateLiteralDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };
const RemovePropertySignatureIndexTemplateLiteralConstructorTypeLiteral: EmptyTypeLiteral =
  { fooKey: 1 };
const PropertySignatureIndexTemplateLiteralConstructorTypeObject: IndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };
const RemovePropertySignatureIndexTemplateLiteralConstructorTypeObject: EmptyTypeLiteral =
  { fooKey: {} };
const PropertySignatureIndexTemplateLiteralConstructorTypeString: IndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };
const RemovePropertySignatureIndexTemplateLiteralConstructorTypeString: EmptyTypeLiteral =
  { fooKey: "two" };
const PropertySignatureIndexTemplateLiteralConstructorTypeNumber: IndexTemplateLiteralDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };
const RemovePropertySignatureIndexTemplateLiteralConstructorTypeNumber: EmptyTypeLiteral =
  { fooKey: 2 };
const PropertySignatureIndexTemplateLiteralConstructorTypeBoolean: IndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };
const RemovePropertySignatureIndexTemplateLiteralConstructorTypeBoolean: EmptyTypeLiteral =
  { fooKey: true };
const PropertySignatureIndexTemplateLiteralConstructorTypeAny: IndexTemplateLiteralDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
const RemovePropertySignatureIndexTemplateLiteralConstructorTypeAny: EmptyTypeLiteral =
  { fooKey: 2 };
