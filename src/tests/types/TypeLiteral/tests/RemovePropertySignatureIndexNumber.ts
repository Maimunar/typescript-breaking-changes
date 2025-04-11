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
 * Remove Property Signature from IndexNumber
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Changes
// Remove Property Signature of IndexNumber - ParenthesizedType
const PropertySignatureIndexNumberParenthesizedTypeLiteral: IndexNumberDefaults["ParenthesizedType"]["Literal"] =
  { "3": 1 };
const RemovePropertySignatureIndexNumberParenthesizedTypeLiteral: EmptyTypeLiteral =
  { "3": 1 };
const PropertySignatureIndexNumberParenthesizedTypeObject: IndexNumberDefaults["ParenthesizedType"]["Object"] =
  { "3": {} };
const RemovePropertySignatureIndexNumberParenthesizedTypeObject: EmptyTypeLiteral =
  { "3": {} };
const PropertySignatureIndexNumberParenthesizedTypeString: IndexNumberDefaults["ParenthesizedType"]["String"] =
  { "3": "two" };
const RemovePropertySignatureIndexNumberParenthesizedTypeString: EmptyTypeLiteral =
  { "3": "two" };
const PropertySignatureIndexNumberParenthesizedTypeNumber: IndexNumberDefaults["ParenthesizedType"]["Number"] =
  { "3": 2 };
const RemovePropertySignatureIndexNumberParenthesizedTypeNumber: EmptyTypeLiteral =
  { "3": 2 };
const PropertySignatureIndexNumberParenthesizedTypeBoolean: IndexNumberDefaults["ParenthesizedType"]["Boolean"] =
  { "3": true };
const RemovePropertySignatureIndexNumberParenthesizedTypeBoolean: EmptyTypeLiteral =
  { "3": true };
const PropertySignatureIndexNumberParenthesizedTypeAny: IndexNumberDefaults["ParenthesizedType"]["Any"] =
  { "3": 2 };
const RemovePropertySignatureIndexNumberParenthesizedTypeAny: EmptyTypeLiteral =
  { "3": 2 };

// Remove Property Signature of IndexNumber - TypeReferenceBuiltin
const PropertySignatureIndexNumberTypeReferenceBuiltinLiteral: IndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] =
  { "3": promisify(1) };
const RemovePropertySignatureIndexNumberTypeReferenceBuiltinLiteral: EmptyTypeLiteral =
  { "3": promisify(1) };
const PropertySignatureIndexNumberTypeReferenceBuiltinObject: IndexNumberDefaults["TypeReferenceBuiltin"]["Object"] =
  { "3": promisify({}) };
const RemovePropertySignatureIndexNumberTypeReferenceBuiltinObject: EmptyTypeLiteral =
  { "3": promisify({}) };
const PropertySignatureIndexNumberTypeReferenceBuiltinString: IndexNumberDefaults["TypeReferenceBuiltin"]["String"] =
  { "3": promisify("two") };
const RemovePropertySignatureIndexNumberTypeReferenceBuiltinString: EmptyTypeLiteral =
  { "3": promisify("two") };
const PropertySignatureIndexNumberTypeReferenceBuiltinNumber: IndexNumberDefaults["TypeReferenceBuiltin"]["Number"] =
  { "3": promisify(2) };
const RemovePropertySignatureIndexNumberTypeReferenceBuiltinNumber: EmptyTypeLiteral =
  { "3": promisify(2) };
const PropertySignatureIndexNumberTypeReferenceBuiltinBoolean: IndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { "3": promisify(true) };
const RemovePropertySignatureIndexNumberTypeReferenceBuiltinBoolean: EmptyTypeLiteral =
  { "3": promisify(true) };
const PropertySignatureIndexNumberTypeReferenceBuiltinAny: IndexNumberDefaults["TypeReferenceBuiltin"]["Any"] =
  { "3": promisify(2) };
const RemovePropertySignatureIndexNumberTypeReferenceBuiltinAny: EmptyTypeLiteral =
  { "3": promisify(2) };

// Remove Property Signature of IndexNumber - TypeReferencePredefined
const PropertySignatureIndexNumberTypeReferencePredefinedLiteral: IndexNumberDefaults["TypeReferencePredefined"]["Literal"] =
  { "3": 1 };
const RemovePropertySignatureIndexNumberTypeReferencePredefinedLiteral: EmptyTypeLiteral =
  { "3": 1 };
const PropertySignatureIndexNumberTypeReferencePredefinedObject: IndexNumberDefaults["TypeReferencePredefined"]["Object"] =
  { "3": {} };
const RemovePropertySignatureIndexNumberTypeReferencePredefinedObject: EmptyTypeLiteral =
  { "3": {} };
const PropertySignatureIndexNumberTypeReferencePredefinedString: IndexNumberDefaults["TypeReferencePredefined"]["String"] =
  { "3": "two" };
const RemovePropertySignatureIndexNumberTypeReferencePredefinedString: EmptyTypeLiteral =
  { "3": "two" };
const PropertySignatureIndexNumberTypeReferencePredefinedNumber: IndexNumberDefaults["TypeReferencePredefined"]["Number"] =
  { "3": 2 };
const RemovePropertySignatureIndexNumberTypeReferencePredefinedNumber: EmptyTypeLiteral =
  { "3": 2 };
const PropertySignatureIndexNumberTypeReferencePredefinedBoolean: IndexNumberDefaults["TypeReferencePredefined"]["Boolean"] =
  { "3": true };
const RemovePropertySignatureIndexNumberTypeReferencePredefinedBoolean: EmptyTypeLiteral =
  { "3": true };
const PropertySignatureIndexNumberTypeReferencePredefinedAny: IndexNumberDefaults["TypeReferencePredefined"]["Any"] =
  { "3": 2 };
const RemovePropertySignatureIndexNumberTypeReferencePredefinedAny: EmptyTypeLiteral =
  { "3": 2 };

// Remove Property Signature of IndexNumber - UnionType
const PropertySignatureIndexNumberUnionTypeLiteral: IndexNumberDefaults["UnionType"]["Literal"] =
  { "3": 1 };
const RemovePropertySignatureIndexNumberUnionTypeLiteral: EmptyTypeLiteral = {
  "3": 1,
};
const PropertySignatureIndexNumberUnionTypeObject: IndexNumberDefaults["UnionType"]["Object"] =
  { "3": {} };
const RemovePropertySignatureIndexNumberUnionTypeObject: EmptyTypeLiteral = {
  "3": {},
};
const PropertySignatureIndexNumberUnionTypeString: IndexNumberDefaults["UnionType"]["String"] =
  { "3": "two" };
const RemovePropertySignatureIndexNumberUnionTypeString: EmptyTypeLiteral = {
  "3": "two",
};
const PropertySignatureIndexNumberUnionTypeNumber: IndexNumberDefaults["UnionType"]["Number"] =
  { "3": 2 };
const RemovePropertySignatureIndexNumberUnionTypeNumber: EmptyTypeLiteral = {
  "3": 2,
};
const PropertySignatureIndexNumberUnionTypeBoolean: IndexNumberDefaults["UnionType"]["Boolean"] =
  { "3": true };
const RemovePropertySignatureIndexNumberUnionTypeBoolean: EmptyTypeLiteral = {
  "3": true,
};
const PropertySignatureIndexNumberUnionTypeAny: IndexNumberDefaults["UnionType"]["Any"] =
  { "3": 2 };
const RemovePropertySignatureIndexNumberUnionTypeAny: EmptyTypeLiteral = {
  "3": 2,
};

// Remove Property Signature of IndexNumber - IntersectionType
const PropertySignatureIndexNumberIntersectionTypeLiteral: IndexNumberDefaults["IntersectionType"]["Literal"] =
  { "3": 1 };
const RemovePropertySignatureIndexNumberIntersectionTypeLiteral: EmptyTypeLiteral =
  { "3": 1 };
const PropertySignatureIndexNumberIntersectionTypeObject: IndexNumberDefaults["IntersectionType"]["Object"] =
  { "3": {} };
const RemovePropertySignatureIndexNumberIntersectionTypeObject: EmptyTypeLiteral =
  { "3": {} };
const PropertySignatureIndexNumberIntersectionTypeString: IndexNumberDefaults["IntersectionType"]["String"] =
  { "3": "two" };
const RemovePropertySignatureIndexNumberIntersectionTypeString: EmptyTypeLiteral =
  { "3": "two" };
const PropertySignatureIndexNumberIntersectionTypeNumber: IndexNumberDefaults["IntersectionType"]["Number"] =
  { "3": 2 };
const RemovePropertySignatureIndexNumberIntersectionTypeNumber: EmptyTypeLiteral =
  { "3": 2 };
const PropertySignatureIndexNumberIntersectionTypeBoolean: IndexNumberDefaults["IntersectionType"]["Boolean"] =
  { "3": true };
const RemovePropertySignatureIndexNumberIntersectionTypeBoolean: EmptyTypeLiteral =
  { "3": true };
const PropertySignatureIndexNumberIntersectionTypeAny: IndexNumberDefaults["IntersectionType"]["Any"] =
  { "3": 2 };
const RemovePropertySignatureIndexNumberIntersectionTypeAny: EmptyTypeLiteral =
  { "3": 2 };

// Remove Property Signature of IndexNumber - TypeLiteral
const PropertySignatureIndexNumberTypeLiteralLiteral: IndexNumberDefaults["TypeLiteral"]["Literal"] =
  { "3": { key: 1 } };
const RemovePropertySignatureIndexNumberTypeLiteralLiteral: EmptyTypeLiteral = {
  "3": { key: 1 },
};
const PropertySignatureIndexNumberTypeLiteralObject: IndexNumberDefaults["TypeLiteral"]["Object"] =
  { "3": { key: {} } };
const RemovePropertySignatureIndexNumberTypeLiteralObject: EmptyTypeLiteral = {
  "3": { key: {} },
};
const PropertySignatureIndexNumberTypeLiteralString: IndexNumberDefaults["TypeLiteral"]["String"] =
  { "3": { key: "two" } };
const RemovePropertySignatureIndexNumberTypeLiteralString: EmptyTypeLiteral = {
  "3": { key: "two" },
};
const PropertySignatureIndexNumberTypeLiteralNumber: IndexNumberDefaults["TypeLiteral"]["Number"] =
  { "3": { key: 2 } };
const RemovePropertySignatureIndexNumberTypeLiteralNumber: EmptyTypeLiteral = {
  "3": { key: 2 },
};
const PropertySignatureIndexNumberTypeLiteralBoolean: IndexNumberDefaults["TypeLiteral"]["Boolean"] =
  { "3": { key: true } };
const RemovePropertySignatureIndexNumberTypeLiteralBoolean: EmptyTypeLiteral = {
  "3": { key: true },
};
const PropertySignatureIndexNumberTypeLiteralAny: IndexNumberDefaults["TypeLiteral"]["Any"] =
  { "3": { key: 2 } };
const RemovePropertySignatureIndexNumberTypeLiteralAny: EmptyTypeLiteral = {
  "3": { key: 2 },
};

// Remove Property Signature of IndexNumber - TupleType
const PropertySignatureIndexNumberTupleTypeLiteral: IndexNumberDefaults["TupleType"]["Literal"] =
  { "3": [1] };
const RemovePropertySignatureIndexNumberTupleTypeLiteral: EmptyTypeLiteral = {
  "3": [1],
};
const PropertySignatureIndexNumberTupleTypeObject: IndexNumberDefaults["TupleType"]["Object"] =
  { "3": [{}] };
const RemovePropertySignatureIndexNumberTupleTypeObject: EmptyTypeLiteral = {
  "3": [{}],
};
const PropertySignatureIndexNumberTupleTypeString: IndexNumberDefaults["TupleType"]["String"] =
  { "3": ["two"] };
const RemovePropertySignatureIndexNumberTupleTypeString: EmptyTypeLiteral = {
  "3": ["two"],
};
const PropertySignatureIndexNumberTupleTypeNumber: IndexNumberDefaults["TupleType"]["Number"] =
  { "3": [2] };
const RemovePropertySignatureIndexNumberTupleTypeNumber: EmptyTypeLiteral = {
  "3": [2],
};
const PropertySignatureIndexNumberTupleTypeBoolean: IndexNumberDefaults["TupleType"]["Boolean"] =
  { "3": [true] };
const RemovePropertySignatureIndexNumberTupleTypeBoolean: EmptyTypeLiteral = {
  "3": [true],
};
const PropertySignatureIndexNumberTupleTypeAny: IndexNumberDefaults["TupleType"]["Any"] =
  { "3": [2] };
const RemovePropertySignatureIndexNumberTupleTypeAny: EmptyTypeLiteral = {
  "3": [2],
};

// Remove Property Signature of IndexNumber - ArrayType
const PropertySignatureIndexNumberArrayTypeLiteral: IndexNumberDefaults["ArrayType"]["Literal"] =
  { "3": [1, 1] };
const RemovePropertySignatureIndexNumberArrayTypeLiteral: EmptyTypeLiteral = {
  "3": [1, 1],
};
const PropertySignatureIndexNumberArrayTypeObject: IndexNumberDefaults["ArrayType"]["Object"] =
  { "3": [{}, {}] };
const RemovePropertySignatureIndexNumberArrayTypeObject: EmptyTypeLiteral = {
  "3": [{}, {}],
};
const PropertySignatureIndexNumberArrayTypeString: IndexNumberDefaults["ArrayType"]["String"] =
  { "3": ["two", "two"] };
const RemovePropertySignatureIndexNumberArrayTypeString: EmptyTypeLiteral = {
  "3": ["two", "two"],
};
const PropertySignatureIndexNumberArrayTypeNumber: IndexNumberDefaults["ArrayType"]["Number"] =
  { "3": [2, 2] };
const RemovePropertySignatureIndexNumberArrayTypeNumber: EmptyTypeLiteral = {
  "3": [2, 2],
};
const PropertySignatureIndexNumberArrayTypeBoolean: IndexNumberDefaults["ArrayType"]["Boolean"] =
  { "3": [true, true] };
const RemovePropertySignatureIndexNumberArrayTypeBoolean: EmptyTypeLiteral = {
  "3": [true, true],
};
const PropertySignatureIndexNumberArrayTypeAny: IndexNumberDefaults["ArrayType"]["Any"] =
  { "3": [2, 2] };
const RemovePropertySignatureIndexNumberArrayTypeAny: EmptyTypeLiteral = {
  "3": [2, 2],
};

// Remove Property Signature of IndexNumber - FunctionType
const PropertySignatureIndexNumberFunctionTypeLiteral: IndexNumberDefaults["FunctionType"]["Literal"] =
  {};
const RemovePropertySignatureIndexNumberFunctionTypeLiteral: EmptyTypeLiteral =
  {};
const PropertySignatureIndexNumberFunctionTypeObject: IndexNumberDefaults["FunctionType"]["Object"] =
  {};
const RemovePropertySignatureIndexNumberFunctionTypeObject: EmptyTypeLiteral =
  {};
const PropertySignatureIndexNumberFunctionTypeString: IndexNumberDefaults["FunctionType"]["String"] =
  {};
const RemovePropertySignatureIndexNumberFunctionTypeString: EmptyTypeLiteral =
  {};
const PropertySignatureIndexNumberFunctionTypeNumber: IndexNumberDefaults["FunctionType"]["Number"] =
  {};
const RemovePropertySignatureIndexNumberFunctionTypeNumber: EmptyTypeLiteral =
  {};
const PropertySignatureIndexNumberFunctionTypeBoolean: IndexNumberDefaults["FunctionType"]["Boolean"] =
  {};
const RemovePropertySignatureIndexNumberFunctionTypeBoolean: EmptyTypeLiteral =
  {};
const PropertySignatureIndexNumberFunctionTypeAny: IndexNumberDefaults["FunctionType"]["Any"] =
  {};
const RemovePropertySignatureIndexNumberFunctionTypeAny: EmptyTypeLiteral = {};

// Remove Property Signature of IndexNumber - ConstructorType
const PropertySignatureIndexNumberConstructorTypeLiteral: IndexNumberDefaults["ConstructorType"]["Literal"] =
  { "3": 1 };
const RemovePropertySignatureIndexNumberConstructorTypeLiteral: EmptyTypeLiteral =
  { "3": 1 };
const PropertySignatureIndexNumberConstructorTypeObject: IndexNumberDefaults["ConstructorType"]["Object"] =
  { "3": {} };
const RemovePropertySignatureIndexNumberConstructorTypeObject: EmptyTypeLiteral =
  { "3": {} };
const PropertySignatureIndexNumberConstructorTypeString: IndexNumberDefaults["ConstructorType"]["String"] =
  { "3": "two" };
const RemovePropertySignatureIndexNumberConstructorTypeString: EmptyTypeLiteral =
  { "3": "two" };
const PropertySignatureIndexNumberConstructorTypeNumber: IndexNumberDefaults["ConstructorType"]["Number"] =
  { "3": 2 };
const RemovePropertySignatureIndexNumberConstructorTypeNumber: EmptyTypeLiteral =
  { "3": 2 };
const PropertySignatureIndexNumberConstructorTypeBoolean: IndexNumberDefaults["ConstructorType"]["Boolean"] =
  { "3": true };
const RemovePropertySignatureIndexNumberConstructorTypeBoolean: EmptyTypeLiteral =
  { "3": true };
const PropertySignatureIndexNumberConstructorTypeAny: IndexNumberDefaults["ConstructorType"]["Any"] =
  { "3": 2 };
const RemovePropertySignatureIndexNumberConstructorTypeAny: EmptyTypeLiteral = {
  "3": 2,
};
