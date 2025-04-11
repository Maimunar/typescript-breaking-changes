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
 * Make Optional Property IndexString
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Make Optional Property IndexString - ParenthesizedType
const PropertySignatureIndexStringParenthesizedTypeLiteral: IndexStringDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };
const MakeOptionalPropertyIndexStringParenthesizedTypeLiteral: OptionalIndexStringDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };
const PropertySignatureIndexStringParenthesizedTypeObject: IndexStringDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };
const MakeOptionalPropertyIndexStringParenthesizedTypeObject: OptionalIndexStringDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };
const PropertySignatureIndexStringParenthesizedTypeString: IndexStringDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };
const MakeOptionalPropertyIndexStringParenthesizedTypeString: OptionalIndexStringDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };
const PropertySignatureIndexStringParenthesizedTypeNumber: IndexStringDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };
const MakeOptionalPropertyIndexStringParenthesizedTypeNumber: OptionalIndexStringDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };
const PropertySignatureIndexStringParenthesizedTypeBoolean: IndexStringDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };
const MakeOptionalPropertyIndexStringParenthesizedTypeBoolean: OptionalIndexStringDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };
const PropertySignatureIndexStringParenthesizedTypeAny: IndexStringDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };
const MakeOptionalPropertyIndexStringParenthesizedTypeAny: OptionalIndexStringDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };

// Make Optional Property IndexString - TypeReferenceBuiltin
const PropertySignatureIndexStringTypeReferenceBuiltinLiteral: IndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };
const MakeOptionalPropertyIndexStringTypeReferenceBuiltinLiteral: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };
const PropertySignatureIndexStringTypeReferenceBuiltinObject: IndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };
const MakeOptionalPropertyIndexStringTypeReferenceBuiltinObject: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };
const PropertySignatureIndexStringTypeReferenceBuiltinString: IndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };
const MakeOptionalPropertyIndexStringTypeReferenceBuiltinString: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };
const PropertySignatureIndexStringTypeReferenceBuiltinNumber: IndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };
const MakeOptionalPropertyIndexStringTypeReferenceBuiltinNumber: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };
const PropertySignatureIndexStringTypeReferenceBuiltinBoolean: IndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };
const MakeOppromisifytionalPropertyIndexStringTypeReferenceBuiltinBoolean: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };
const PropertySignatureIndexStringTypeReferenceBuiltinAny: IndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };
const MakeOptionalPropertyIndexStringTypeReferenceBuiltinAny: OptionalIndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };

// Make Optional Property IndexString - TypeReferencePredefined
const PropertySignatureIndexStringTypeReferencePredefinedLiteral: IndexStringDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };
const MakeOptionalPropertyIndexStringTypeReferencePredefinedLiteral: OptionalIndexStringDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };
const PropertySignatureIndexStringTypeReferencePredefinedObject: IndexStringDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };
const MakeOptionalPropertyIndexStringTypeReferencePredefinedObject: OptionalIndexStringDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };
const PropertySignatureIndexStringTypeReferencePredefinedString: IndexStringDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };
const MakeOptionalPropertyIndexStringTypeReferencePredefinedString: OptionalIndexStringDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };
const PropertySignatureIndexStringTypeReferencePredefinedNumber: IndexStringDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };
const MakeOptionalPropertyIndexStringTypeReferencePredefinedNumber: OptionalIndexStringDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };
const PropertySignatureIndexStringTypeReferencePredefinedBoolean: IndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };
const MakeOptionalPropertyIndexStringTypeReferencePredefinedBoolean: OptionalIndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };
const PropertySignatureIndexStringTypeReferencePredefinedAny: IndexStringDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };
const MakeOptionalPropertyIndexStringTypeReferencePredefinedAny: OptionalIndexStringDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };

// Make Optional Property IndexString - UnionType
const PropertySignatureIndexStringUnionTypeLiteral: IndexStringDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };
const MakeOptionalPropertyIndexStringUnionTypeLiteral: OptionalIndexStringDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };
const PropertySignatureIndexStringUnionTypeObject: IndexStringDefaults["UnionType"]["Object"] =
  { otherKey: {} };
const MakeOptionalPropertyIndexStringUnionTypeObject: OptionalIndexStringDefaults["UnionType"]["Object"] =
  { otherKey: {} };
const PropertySignatureIndexStringUnionTypeString: IndexStringDefaults["UnionType"]["String"] =
  { otherKey: "two" };
const MakeOptionalPropertyIndexStringUnionTypeString: OptionalIndexStringDefaults["UnionType"]["String"] =
  { otherKey: "two" };
const PropertySignatureIndexStringUnionTypeNumber: IndexStringDefaults["UnionType"]["Number"] =
  { otherKey: 2 };
const MakeOptionalPropertyIndexStringUnionTypeNumber: OptionalIndexStringDefaults["UnionType"]["Number"] =
  { otherKey: 2 };
const PropertySignatureIndexStringUnionTypeBoolean: IndexStringDefaults["UnionType"]["Boolean"] =
  { otherKey: true };
const MakeOptionalPropertyIndexStringUnionTypeBoolean: OptionalIndexStringDefaults["UnionType"]["Boolean"] =
  { otherKey: true };
const PropertySignatureIndexStringUnionTypeAny: IndexStringDefaults["UnionType"]["Any"] =
  { otherKey: 2 };
const MakeOptionalPropertyIndexStringUnionTypeAny: OptionalIndexStringDefaults["UnionType"]["Any"] =
  { otherKey: 2 };

// Make Optional Property IndexString - IntersectionType
const PropertySignatureIndexStringIntersectionTypeLiteral: IndexStringDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };
const MakeOptionalPropertyIndexStringIntersectionTypeLiteral: OptionalIndexStringDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };
const PropertySignatureIndexStringIntersectionTypeObject: IndexStringDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };
const MakeOptionalPropertyIndexStringIntersectionTypeObject: OptionalIndexStringDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };
const PropertySignatureIndexStringIntersectionTypeString: IndexStringDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };
const MakeOptionalPropertyIndexStringIntersectionTypeString: OptionalIndexStringDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };
const PropertySignatureIndexStringIntersectionTypeNumber: IndexStringDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };
const MakeOptionalPropertyIndexStringIntersectionTypeNumber: OptionalIndexStringDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };
const PropertySignatureIndexStringIntersectionTypeBoolean: IndexStringDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };
const MakeOptionalPropertyIndexStringIntersectionTypeBoolean: OptionalIndexStringDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };
const PropertySignatureIndexStringIntersectionTypeAny: IndexStringDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };
const MakeOptionalPropertyIndexStringIntersectionTypeAny: OptionalIndexStringDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };

// Make Optional Property IndexString - TypeLiteral
const PropertySignatureIndexStringTypeLiteralLiteral: IndexStringDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };
const MakeOptionalPropertyIndexStringTypeLiteralLiteral: OptionalIndexStringDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };
const PropertySignatureIndexStringTypeLiteralObject: IndexStringDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };
const MakeOptionalPropertyIndexStringTypeLiteralObject: OptionalIndexStringDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };
const PropertySignatureIndexStringTypeLiteralString: IndexStringDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };
const MakeOptionalPropertyIndexStringTypeLiteralString: OptionalIndexStringDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };
const PropertySignatureIndexStringTypeLiteralNumber: IndexStringDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };
const MakeOptionalPropertyIndexStringTypeLiteralNumber: OptionalIndexStringDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };
const PropertySignatureIndexStringTypeLiteralBoolean: IndexStringDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };
const MakeOptionalPropertyIndexStringTypeLiteralBoolean: OptionalIndexStringDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };
const PropertySignatureIndexStringTypeLiteralAny: IndexStringDefaults["TypeLiteral"]["Any"] =
  { otherKey: { key: 2 } };
const MakeOptionalPropertyIndexStringTypeLiteralAny: OptionalIndexStringDefaults["TypeLiteral"]["Any"] =
  { otherKey: { key: 2 } };

// Make Optional Property IndexString - TupleType
const PropertySignatureIndexStringTupleTypeLiteral: IndexStringDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };
const MakeOptionalPropertyIndexStringTupleTypeLiteral: OptionalIndexStringDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };
const PropertySignatureIndexStringTupleTypeObject: IndexStringDefaults["TupleType"]["Object"] =
  { otherKey: [{}] };
const MakeOptionalPropertyIndexStringTupleTypeObject: OptionalIndexStringDefaults["TupleType"]["Object"] =
  { otherKey: [{}] };
const PropertySignatureIndexStringTupleTypeString: IndexStringDefaults["TupleType"]["String"] =
  { otherKey: ["two"] };
const MakeOptionalPropertyIndexStringTupleTypeString: OptionalIndexStringDefaults["TupleType"]["String"] =
  { otherKey: ["two"] };
const PropertySignatureIndexStringTupleTypeNumber: IndexStringDefaults["TupleType"]["Number"] =
  { otherKey: [2] };
const MakeOptionalPropertyIndexStringTupleTypeNumber: OptionalIndexStringDefaults["TupleType"]["Number"] =
  { otherKey: [2] };
const PropertySignatureIndexStringTupleTypeBoolean: IndexStringDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };
const MakeOptionalPropertyIndexStringTupleTypeBoolean: OptionalIndexStringDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };
const PropertySignatureIndexStringTupleTypeAny: IndexStringDefaults["TupleType"]["Any"] =
  { otherKey: [2] };
const MakeOptionalPropertyIndexStringTupleTypeAny: OptionalIndexStringDefaults["TupleType"]["Any"] =
  { otherKey: [2] };

// Make Optional Property IndexString - ArrayType
const PropertySignatureIndexStringArrayTypeLiteral: IndexStringDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };
const MakeOptionalPropertyIndexStringArrayTypeLiteral: OptionalIndexStringDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };
const PropertySignatureIndexStringArrayTypeObject: IndexStringDefaults["ArrayType"]["Object"] =
  { otherKey: [{}, {}] };
const MakeOptionalPropertyIndexStringArrayTypeObject: OptionalIndexStringDefaults["ArrayType"]["Object"] =
  { otherKey: [{}, {}] };
const PropertySignatureIndexStringArrayTypeString: IndexStringDefaults["ArrayType"]["String"] =
  { otherKey: ["two", "two"] };
const MakeOptionalPropertyIndexStringArrayTypeString: OptionalIndexStringDefaults["ArrayType"]["String"] =
  { otherKey: ["two", "two"] };
const PropertySignatureIndexStringArrayTypeNumber: IndexStringDefaults["ArrayType"]["Number"] =
  { otherKey: [2, 2] };
const MakeOptionalPropertyIndexStringArrayTypeNumber: OptionalIndexStringDefaults["ArrayType"]["Number"] =
  { otherKey: [2, 2] };
const PropertySignatureIndexStringArrayTypeBoolean: IndexStringDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };
const MakeOptionalPropertyIndexStringArrayTypeBoolean: OptionalIndexStringDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };
const PropertySignatureIndexStringArrayTypeAny: IndexStringDefaults["ArrayType"]["Any"] =
  { otherKey: [2, 2] };
const MakeOptionalPropertyIndexStringArrayTypeAny: OptionalIndexStringDefaults["ArrayType"]["Any"] =
  { otherKey: [2, 2] };

// Make Optional Property IndexString - FunctionType
const PropertySignatureIndexStringFunctionTypeLiteral: IndexStringDefaults["FunctionType"]["Literal"] =
  {};
const MakeOptionalPropertyIndexStringFunctionTypeLiteral: OptionalIndexStringDefaults["FunctionType"]["Literal"] =
  {};
const PropertySignatureIndexStringFunctionTypeObject: IndexStringDefaults["FunctionType"]["Object"] =
  {};
const MakeOptionalPropertyIndexStringFunctionTypeObject: OptionalIndexStringDefaults["FunctionType"]["Object"] =
  {};
const PropertySignatureIndexStringFunctionTypeString: IndexStringDefaults["FunctionType"]["String"] =
  {};
const MakeOptionalPropertyIndexStringFunctionTypeString: OptionalIndexStringDefaults["FunctionType"]["String"] =
  {};
const PropertySignatureIndexStringFunctionTypeNumber: IndexStringDefaults["FunctionType"]["Number"] =
  {};
const MakeOptionalPropertyIndexStringFunctionTypeNumber: OptionalIndexStringDefaults["FunctionType"]["Number"] =
  {};
const PropertySignatureIndexStringFunctionTypeBoolean: IndexStringDefaults["FunctionType"]["Boolean"] =
  {};
const MakeOptionalPropertyIndexStringFunctionTypeBoolean: OptionalIndexStringDefaults["FunctionType"]["Boolean"] =
  {};
const PropertySignatureIndexStringFunctionTypeAny: IndexStringDefaults["FunctionType"]["Any"] =
  {};
const MakeOptionalPropertyIndexStringFunctionTypeAny: OptionalIndexStringDefaults["FunctionType"]["Any"] =
  {};

// Make Optional Property IndexString - ConstructorType
const PropertySignatureIndexStringConstructorTypeLiteral: IndexStringDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };
const MakeOptionalPropertyIndexStringConstructorTypeLiteral: OptionalIndexStringDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };
const PropertySignatureIndexStringConstructorTypeObject: IndexStringDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };
const MakeOptionalPropertyIndexStringConstructorTypeObject: OptionalIndexStringDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };
const PropertySignatureIndexStringConstructorTypeString: IndexStringDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };
const MakeOptionalPropertyIndexStringConstructorTypeString: OptionalIndexStringDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };
const PropertySignatureIndexStringConstructorTypeNumber: IndexStringDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };
const MakeOptionalPropertyIndexStringConstructorTypeNumber: OptionalIndexStringDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };
const PropertySignatureIndexStringConstructorTypeBoolean: IndexStringDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };
const MakeOptionalPropertyIndexStringConstructorTypeBoolean: OptionalIndexStringDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };
const PropertySignatureIndexStringConstructorTypeAny: IndexStringDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
const MakeOptionalPropertyIndexStringConstructorTypeAny: OptionalIndexStringDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
