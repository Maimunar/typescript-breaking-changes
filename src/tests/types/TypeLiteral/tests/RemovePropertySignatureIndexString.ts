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
 * Remove Property Signature from IndexString
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Changes
// Remove Property Signature of IndexString - ParenthesizedType
const PropertySignatureIndexStringParenthesizedTypeLiteral: IndexStringDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };
const RemovePropertySignatureIndexStringParenthesizedTypeLiteral: EmptyTypeLiteral =
  { otherKey: 1 };
const PropertySignatureIndexStringParenthesizedTypeObject: IndexStringDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };
const RemovePropertySignatureIndexStringParenthesizedTypeObject: EmptyTypeLiteral =
  { otherKey: {} };
const PropertySignatureIndexStringParenthesizedTypeString: IndexStringDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };
const RemovePropertySignatureIndexStringParenthesizedTypeString: EmptyTypeLiteral =
  { otherKey: "two" };
const PropertySignatureIndexStringParenthesizedTypeNumber: IndexStringDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };
const RemovePropertySignatureIndexStringParenthesizedTypeNumber: EmptyTypeLiteral =
  { otherKey: 2 };
const PropertySignatureIndexStringParenthesizedTypeBoolean: IndexStringDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };
const RemovePropertySignatureIndexStringParenthesizedTypeBoolean: EmptyTypeLiteral =
  { otherKey: true };
const PropertySignatureIndexStringParenthesizedTypeAny: IndexStringDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };
const RemovePropertySignatureIndexStringParenthesizedTypeAny: EmptyTypeLiteral =
  { otherKey: 2 };

// Remove Property Signature of IndexString - TypeReferenceBuiltin
const PropertySignatureIndexStringTypeReferenceBuiltinLiteral: IndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };
const RemovePropertySignatureIndexStringTypeReferenceBuiltinLiteral: EmptyTypeLiteral =
  { otherKey: promisify(1) };
const PropertySignatureIndexStringTypeReferenceBuiltinObject: IndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };
const RemovePropertySignatureIndexStringTypeReferenceBuiltinObject: EmptyTypeLiteral =
  { otherKey: promisify({}) };
const PropertySignatureIndexStringTypeReferenceBuiltinString: IndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };
const RemovePropertySignatureIndexStringTypeReferenceBuiltinString: EmptyTypeLiteral =
  { otherKey: promisify("two") };
const PropertySignatureIndexStringTypeReferenceBuiltinNumber: IndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };
const RemovePropertySignatureIndexStringTypeReferenceBuiltinNumber: EmptyTypeLiteral =
  { otherKey: promisify(2) };
const PropertySignatureIndexStringTypeReferenceBuiltinBoolean: IndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };
const RemovePropertySignatureIndexStringTypeReferenceBuiltinBoolean: EmptyTypeLiteral =
  { otherKey: promisify(true) };
const PropertySignatureIndexStringTypeReferenceBuiltinAny: IndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };
const RemovePropertySignatureIndexStringTypeReferenceBuiltinAny: EmptyTypeLiteral =
  { otherKey: promisify(2) };

// Remove Property Signature of IndexString - TypeReferencePredefined
const PropertySignatureIndexStringTypeReferencePredefinedLiteral: IndexStringDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };
const RemovePropertySignatureIndexStringTypeReferencePredefinedLiteral: EmptyTypeLiteral =
  { otherKey: 1 };
const PropertySignatureIndexStringTypeReferencePredefinedObject: IndexStringDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };
const RemovePropertySignatureIndexStringTypeReferencePredefinedObject: EmptyTypeLiteral =
  { otherKey: {} };
const PropertySignatureIndexStringTypeReferencePredefinedString: IndexStringDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };
const RemovePropertySignatureIndexStringTypeReferencePredefinedString: EmptyTypeLiteral =
  { otherKey: "two" };
const PropertySignatureIndexStringTypeReferencePredefinedNumber: IndexStringDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };
const RemovePropertySignatureIndexStringTypeReferencePredefinedNumber: EmptyTypeLiteral =
  { otherKey: 2 };
const PropertySignatureIndexStringTypeReferencePredefinedBoolean: IndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };
const RemovePropertySignatureIndexStringTypeReferencePredefinedBoolean: EmptyTypeLiteral =
  { otherKey: true };
const PropertySignatureIndexStringTypeReferencePredefinedAny: IndexStringDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };
const RemovePropertySignatureIndexStringTypeReferencePredefinedAny: EmptyTypeLiteral =
  { otherKey: 2 };

// Remove Property Signature of IndexString - UnionType
const PropertySignatureIndexStringUnionTypeLiteral: IndexStringDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };
const RemovePropertySignatureIndexStringUnionTypeLiteral: EmptyTypeLiteral = {
  otherKey: 1,
};
const PropertySignatureIndexStringUnionTypeObject: IndexStringDefaults["UnionType"]["Object"] =
  { otherKey: {} };
const RemovePropertySignatureIndexStringUnionTypeObject: EmptyTypeLiteral = {
  otherKey: {},
};
const PropertySignatureIndexStringUnionTypeString: IndexStringDefaults["UnionType"]["String"] =
  { otherKey: "two" };
const RemovePropertySignatureIndexStringUnionTypeString: EmptyTypeLiteral = {
  otherKey: "two",
};
const PropertySignatureIndexStringUnionTypeNumber: IndexStringDefaults["UnionType"]["Number"] =
  { otherKey: 2 };
const RemovePropertySignatureIndexStringUnionTypeNumber: EmptyTypeLiteral = {
  otherKey: 2,
};
const PropertySignatureIndexStringUnionTypeBoolean: IndexStringDefaults["UnionType"]["Boolean"] =
  { otherKey: true };
const RemovePropertySignatureIndexStringUnionTypeBoolean: EmptyTypeLiteral = {
  otherKey: true,
};
const PropertySignatureIndexStringUnionTypeAny: IndexStringDefaults["UnionType"]["Any"] =
  { otherKey: 2 };
const RemovePropertySignatureIndexStringUnionTypeAny: EmptyTypeLiteral = {
  otherKey: 2,
};

// Remove Property Signature of IndexString - IntersectionType
const PropertySignatureIndexStringIntersectionTypeLiteral: IndexStringDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };
const RemovePropertySignatureIndexStringIntersectionTypeLiteral: EmptyTypeLiteral =
  { otherKey: 1 };
const PropertySignatureIndexStringIntersectionTypeObject: IndexStringDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };
const RemovePropertySignatureIndexStringIntersectionTypeObject: EmptyTypeLiteral =
  { otherKey: {} };
const PropertySignatureIndexStringIntersectionTypeString: IndexStringDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };
const RemovePropertySignatureIndexStringIntersectionTypeString: EmptyTypeLiteral =
  { otherKey: "two" };
const PropertySignatureIndexStringIntersectionTypeNumber: IndexStringDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };
const RemovePropertySignatureIndexStringIntersectionTypeNumber: EmptyTypeLiteral =
  { otherKey: 2 };
const PropertySignatureIndexStringIntersectionTypeBoolean: IndexStringDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };
const RemovePropertySignatureIndexStringIntersectionTypeBoolean: EmptyTypeLiteral =
  { otherKey: true };
const PropertySignatureIndexStringIntersectionTypeAny: IndexStringDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };
const RemovePropertySignatureIndexStringIntersectionTypeAny: EmptyTypeLiteral =
  { otherKey: 2 };

// Remove Property Signature of IndexString - TypeLiteral
const PropertySignatureIndexStringTypeLiteralLiteral: IndexStringDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };
const RemovePropertySignatureIndexStringTypeLiteralLiteral: EmptyTypeLiteral = {
  otherKey: { key: 1 },
};
const PropertySignatureIndexStringTypeLiteralObject: IndexStringDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };
const RemovePropertySignatureIndexStringTypeLiteralObject: EmptyTypeLiteral = {
  otherKey: { key: {} },
};
const PropertySignatureIndexStringTypeLiteralString: IndexStringDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };
const RemovePropertySignatureIndexStringTypeLiteralString: EmptyTypeLiteral = {
  otherKey: { key: "two" },
};
const PropertySignatureIndexStringTypeLiteralNumber: IndexStringDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };
const RemovePropertySignatureIndexStringTypeLiteralNumber: EmptyTypeLiteral = {
  otherKey: { key: 2 },
};
const PropertySignatureIndexStringTypeLiteralBoolean: IndexStringDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };
const RemovePropertySignatureIndexStringTypeLiteralBoolean: EmptyTypeLiteral = {
  otherKey: { key: true },
};
const PropertySignatureIndexStringTypeLiteralAny: IndexStringDefaults["TypeLiteral"]["Any"] =
  { otherKey: { key: 2 } };
const RemovePropertySignatureIndexStringTypeLiteralAny: EmptyTypeLiteral = {
  otherKey: { key: 2 },
};

// Remove Property Signature of IndexString - TupleType
const PropertySignatureIndexStringTupleTypeLiteral: IndexStringDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };
const RemovePropertySignatureIndexStringTupleTypeLiteral: EmptyTypeLiteral = {
  otherKey: [1],
};
const PropertySignatureIndexStringTupleTypeObject: IndexStringDefaults["TupleType"]["Object"] =
  { otherKey: [{}] };
const RemovePropertySignatureIndexStringTupleTypeObject: EmptyTypeLiteral = {
  otherKey: [{}],
};
const PropertySignatureIndexStringTupleTypeString: IndexStringDefaults["TupleType"]["String"] =
  { otherKey: ["two"] };
const RemovePropertySignatureIndexStringTupleTypeString: EmptyTypeLiteral = {
  otherKey: ["two"],
};
const PropertySignatureIndexStringTupleTypeNumber: IndexStringDefaults["TupleType"]["Number"] =
  { otherKey: [2] };
const RemovePropertySignatureIndexStringTupleTypeNumber: EmptyTypeLiteral = {
  otherKey: [2],
};
const PropertySignatureIndexStringTupleTypeBoolean: IndexStringDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };
const RemovePropertySignatureIndexStringTupleTypeBoolean: EmptyTypeLiteral = {
  otherKey: [true],
};
const PropertySignatureIndexStringTupleTypeAny: IndexStringDefaults["TupleType"]["Any"] =
  { otherKey: [2] };
const RemovePropertySignatureIndexStringTupleTypeAny: EmptyTypeLiteral = {
  otherKey: [2],
};

// Remove Property Signature of IndexString - ArrayType
const PropertySignatureIndexStringArrayTypeLiteral: IndexStringDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };
const RemovePropertySignatureIndexStringArrayTypeLiteral: EmptyTypeLiteral = {
  otherKey: [1, 1],
};
const PropertySignatureIndexStringArrayTypeObject: IndexStringDefaults["ArrayType"]["Object"] =
  { otherKey: [{}, {}] };
const RemovePropertySignatureIndexStringArrayTypeObject: EmptyTypeLiteral = {
  otherKey: [{}, {}],
};
const PropertySignatureIndexStringArrayTypeString: IndexStringDefaults["ArrayType"]["String"] =
  { otherKey: ["two", "two"] };
const RemovePropertySignatureIndexStringArrayTypeString: EmptyTypeLiteral = {
  otherKey: ["two", "two"],
};
const PropertySignatureIndexStringArrayTypeNumber: IndexStringDefaults["ArrayType"]["Number"] =
  { otherKey: [2, 2] };
const RemovePropertySignatureIndexStringArrayTypeNumber: EmptyTypeLiteral = {
  otherKey: [2, 2],
};
const PropertySignatureIndexStringArrayTypeBoolean: IndexStringDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };
const RemovePropertySignatureIndexStringArrayTypeBoolean: EmptyTypeLiteral = {
  otherKey: [true, true],
};
const PropertySignatureIndexStringArrayTypeAny: IndexStringDefaults["ArrayType"]["Any"] =
  { otherKey: [2, 2] };
const RemovePropertySignatureIndexStringArrayTypeAny: EmptyTypeLiteral = {
  otherKey: [2, 2],
};

// Remove Property Signature of IndexString - FunctionType
const PropertySignatureIndexStringFunctionTypeLiteral: IndexStringDefaults["FunctionType"]["Literal"] =
  {};
const RemovePropertySignatureIndexStringFunctionTypeLiteral: EmptyTypeLiteral =
  {};
const PropertySignatureIndexStringFunctionTypeObject: IndexStringDefaults["FunctionType"]["Object"] =
  {};
const RemovePropertySignatureIndexStringFunctionTypeObject: EmptyTypeLiteral =
  {};
const PropertySignatureIndexStringFunctionTypeString: IndexStringDefaults["FunctionType"]["String"] =
  {};
const RemovePropertySignatureIndexStringFunctionTypeString: EmptyTypeLiteral =
  {};
const PropertySignatureIndexStringFunctionTypeNumber: IndexStringDefaults["FunctionType"]["Number"] =
  {};
const RemovePropertySignatureIndexStringFunctionTypeNumber: EmptyTypeLiteral =
  {};
const PropertySignatureIndexStringFunctionTypeBoolean: IndexStringDefaults["FunctionType"]["Boolean"] =
  {};
const RemovePropertySignatureIndexStringFunctionTypeBoolean: EmptyTypeLiteral =
  {};
const PropertySignatureIndexStringFunctionTypeAny: IndexStringDefaults["FunctionType"]["Any"] =
  {};
const RemovePropertySignatureIndexStringFunctionTypeAny: EmptyTypeLiteral = {};

// Remove Property Signature of IndexString - ConstructorType
const PropertySignatureIndexStringConstructorTypeLiteral: IndexStringDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };
const RemovePropertySignatureIndexStringConstructorTypeLiteral: EmptyTypeLiteral =
  { otherKey: 1 };
const PropertySignatureIndexStringConstructorTypeObject: IndexStringDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };
const RemovePropertySignatureIndexStringConstructorTypeObject: EmptyTypeLiteral =
  { otherKey: {} };
const PropertySignatureIndexStringConstructorTypeString: IndexStringDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };
const RemovePropertySignatureIndexStringConstructorTypeString: EmptyTypeLiteral =
  { otherKey: "two" };
const PropertySignatureIndexStringConstructorTypeNumber: IndexStringDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };
const RemovePropertySignatureIndexStringConstructorTypeNumber: EmptyTypeLiteral =
  { otherKey: 2 };
const PropertySignatureIndexStringConstructorTypeBoolean: IndexStringDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };
const RemovePropertySignatureIndexStringConstructorTypeBoolean: EmptyTypeLiteral =
  { otherKey: true };
const PropertySignatureIndexStringConstructorTypeAny: IndexStringDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
const RemovePropertySignatureIndexStringConstructorTypeAny: EmptyTypeLiteral = {
  otherKey: 2,
};
