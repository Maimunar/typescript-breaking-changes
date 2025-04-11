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
 * Remove Property Signature from MappedType
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Changes
// Remove Property Signature of MappedType - ParenthesizedType
const PropertySignatureMappedTypeParenthesizedTypeLiteral: MappedTypeDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };
const RemovePropertySignatureMappedTypeParenthesizedTypeLiteral: EmptyTypeLiteral =
  { mappedKey: 1 };
const PropertySignatureMappedTypeParenthesizedTypeObject: MappedTypeDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };
const RemovePropertySignatureMappedTypeParenthesizedTypeObject: EmptyTypeLiteral =
  { mappedKey: {} };
const PropertySignatureMappedTypeParenthesizedTypeString: MappedTypeDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };
const RemovePropertySignatureMappedTypeParenthesizedTypeString: EmptyTypeLiteral =
  { mappedKey: "two" };
const PropertySignatureMappedTypeParenthesizedTypeNumber: MappedTypeDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };
const RemovePropertySignatureMappedTypeParenthesizedTypeNumber: EmptyTypeLiteral =
  { mappedKey: 2 };
const PropertySignatureMappedTypeParenthesizedTypeBoolean: MappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };
const RemovePropertySignatureMappedTypeParenthesizedTypeBoolean: EmptyTypeLiteral =
  { mappedKey: true };
const PropertySignatureMappedTypeParenthesizedTypeAny: MappedTypeDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };
const RemovePropertySignatureMappedTypeParenthesizedTypeAny: EmptyTypeLiteral =
  { mappedKey: 2 };

// Remove Property Signature of MappedType - TypeReferenceBuiltin
const PropertySignatureMappedTypeTypeReferenceBuiltinLiteral: MappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  { mappedKey: promisify(1) };
const RemovePropertySignatureMappedTypeTypeReferenceBuiltinLiteral: EmptyTypeLiteral =
  { mappedKey: promisify(1) };
const PropertySignatureMappedTypeTypeReferenceBuiltinObject: MappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  { mappedKey: promisify({}) };
const RemovePropertySignatureMappedTypeTypeReferenceBuiltinObject: EmptyTypeLiteral =
  { mappedKey: promisify({}) };
const PropertySignatureMappedTypeTypeReferenceBuiltinString: MappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  { mappedKey: promisify("two") };
const RemovePropertySignatureMappedTypeTypeReferenceBuiltinString: EmptyTypeLiteral =
  { mappedKey: promisify("two") };
const PropertySignatureMappedTypeTypeReferenceBuiltinNumber: MappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  { mappedKey: promisify(2) };
const RemovePropertySignatureMappedTypeTypeReferenceBuiltinNumber: EmptyTypeLiteral =
  { mappedKey: promisify(2) };
const PropertySignatureMappedTypeTypeReferenceBuiltinBoolean: MappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { mappedKey: promisify(true) };
const RemovePropertySignatureMappedTypeTypeReferenceBuiltinBoolean: EmptyTypeLiteral =
  { mappedKey: promisify(true) };
const PropertySignatureMappedTypeTypeReferenceBuiltinAny: MappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  { mappedKey: promisify(2) };
const RemovePropertySignatureMappedTypeTypeReferenceBuiltinAny: EmptyTypeLiteral =
  { mappedKey: promisify(2) };

// Remove Property Signature of MappedType - TypeReferencePredefined
const PropertySignatureMappedTypeTypeReferencePredefinedLiteral: MappedTypeDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };
const RemovePropertySignatureMappedTypeTypeReferencePredefinedLiteral: EmptyTypeLiteral =
  { mappedKey: 1 };
const PropertySignatureMappedTypeTypeReferencePredefinedObject: MappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };
const RemovePropertySignatureMappedTypeTypeReferencePredefinedObject: EmptyTypeLiteral =
  { mappedKey: {} };
const PropertySignatureMappedTypeTypeReferencePredefinedString: MappedTypeDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };
const RemovePropertySignatureMappedTypeTypeReferencePredefinedString: EmptyTypeLiteral =
  { mappedKey: "two" };
const PropertySignatureMappedTypeTypeReferencePredefinedNumber: MappedTypeDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };
const RemovePropertySignatureMappedTypeTypeReferencePredefinedNumber: EmptyTypeLiteral =
  { mappedKey: 2 };
const PropertySignatureMappedTypeTypeReferencePredefinedBoolean: MappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };
const RemovePropertySignatureMappedTypeTypeReferencePredefinedBoolean: EmptyTypeLiteral =
  { mappedKey: true };
const PropertySignatureMappedTypeTypeReferencePredefinedAny: MappedTypeDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };
const RemovePropertySignatureMappedTypeTypeReferencePredefinedAny: EmptyTypeLiteral =
  { mappedKey: 2 };

// Remove Property Signature of MappedType - UnionType
const PropertySignatureMappedTypeUnionTypeLiteral: MappedTypeDefaults["UnionType"]["Literal"] =
  { mappedKey: 1 };
const RemovePropertySignatureMappedTypeUnionTypeLiteral: EmptyTypeLiteral = {
  mappedKey: 1,
};
const PropertySignatureMappedTypeUnionTypeObject: MappedTypeDefaults["UnionType"]["Object"] =
  { mappedKey: {} };
const RemovePropertySignatureMappedTypeUnionTypeObject: EmptyTypeLiteral = {
  mappedKey: {},
};
const PropertySignatureMappedTypeUnionTypeString: MappedTypeDefaults["UnionType"]["String"] =
  { mappedKey: "two" };
const RemovePropertySignatureMappedTypeUnionTypeString: EmptyTypeLiteral = {
  mappedKey: "two",
};
const PropertySignatureMappedTypeUnionTypeNumber: MappedTypeDefaults["UnionType"]["Number"] =
  { mappedKey: 2 };
const RemovePropertySignatureMappedTypeUnionTypeNumber: EmptyTypeLiteral = {
  mappedKey: 2,
};
const PropertySignatureMappedTypeUnionTypeBoolean: MappedTypeDefaults["UnionType"]["Boolean"] =
  { mappedKey: true };
const RemovePropertySignatureMappedTypeUnionTypeBoolean: EmptyTypeLiteral = {
  mappedKey: true,
};
const PropertySignatureMappedTypeUnionTypeAny: MappedTypeDefaults["UnionType"]["Any"] =
  { mappedKey: 2 };
const RemovePropertySignatureMappedTypeUnionTypeAny: EmptyTypeLiteral = {
  mappedKey: 2,
};

// Remove Property Signature of MappedType - IntersectionType
const PropertySignatureMappedTypeIntersectionTypeLiteral: MappedTypeDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };
const RemovePropertySignatureMappedTypeIntersectionTypeLiteral: EmptyTypeLiteral =
  { mappedKey: 1 };
const PropertySignatureMappedTypeIntersectionTypeObject: MappedTypeDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };
const RemovePropertySignatureMappedTypeIntersectionTypeObject: EmptyTypeLiteral =
  { mappedKey: {} };
const PropertySignatureMappedTypeIntersectionTypeString: MappedTypeDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };
const RemovePropertySignatureMappedTypeIntersectionTypeString: EmptyTypeLiteral =
  { mappedKey: "two" };
const PropertySignatureMappedTypeIntersectionTypeNumber: MappedTypeDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };
const RemovePropertySignatureMappedTypeIntersectionTypeNumber: EmptyTypeLiteral =
  { mappedKey: 2 };
const PropertySignatureMappedTypeIntersectionTypeBoolean: MappedTypeDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };
const RemovePropertySignatureMappedTypeIntersectionTypeBoolean: EmptyTypeLiteral =
  { mappedKey: true };
const PropertySignatureMappedTypeIntersectionTypeAny: MappedTypeDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };
const RemovePropertySignatureMappedTypeIntersectionTypeAny: EmptyTypeLiteral = {
  mappedKey: 2,
};

// Remove Property Signature of MappedType - TypeLiteral
const PropertySignatureMappedTypeTypeLiteralLiteral: MappedTypeDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };
const RemovePropertySignatureMappedTypeTypeLiteralLiteral: EmptyTypeLiteral = {
  mappedKey: { key: 1 },
};
const PropertySignatureMappedTypeTypeLiteralObject: MappedTypeDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };
const RemovePropertySignatureMappedTypeTypeLiteralObject: EmptyTypeLiteral = {
  mappedKey: { key: {} },
};
const PropertySignatureMappedTypeTypeLiteralString: MappedTypeDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };
const RemovePropertySignatureMappedTypeTypeLiteralString: EmptyTypeLiteral = {
  mappedKey: { key: "two" },
};
const PropertySignatureMappedTypeTypeLiteralNumber: MappedTypeDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };
const RemovePropertySignatureMappedTypeTypeLiteralNumber: EmptyTypeLiteral = {
  mappedKey: { key: 2 },
};
const PropertySignatureMappedTypeTypeLiteralBoolean: MappedTypeDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };
const RemovePropertySignatureMappedTypeTypeLiteralBoolean: EmptyTypeLiteral = {
  mappedKey: { key: true },
};
const PropertySignatureMappedTypeTypeLiteralAny: MappedTypeDefaults["TypeLiteral"]["Any"] =
  { mappedKey: { key: 2 } };
const RemovePropertySignatureMappedTypeTypeLiteralAny: EmptyTypeLiteral = {
  mappedKey: { key: 2 },
};

// Remove Property Signature of MappedType - TupleType
const PropertySignatureMappedTypeTupleTypeLiteral: MappedTypeDefaults["TupleType"]["Literal"] =
  { mappedKey: [1] };
const RemovePropertySignatureMappedTypeTupleTypeLiteral: EmptyTypeLiteral = {
  mappedKey: [1],
};
const PropertySignatureMappedTypeTupleTypeObject: MappedTypeDefaults["TupleType"]["Object"] =
  { mappedKey: [{}] };
const RemovePropertySignatureMappedTypeTupleTypeObject: EmptyTypeLiteral = {
  mappedKey: [{}],
};
const PropertySignatureMappedTypeTupleTypeString: MappedTypeDefaults["TupleType"]["String"] =
  { mappedKey: ["two"] };
const RemovePropertySignatureMappedTypeTupleTypeString: EmptyTypeLiteral = {
  mappedKey: ["two"],
};
const PropertySignatureMappedTypeTupleTypeNumber: MappedTypeDefaults["TupleType"]["Number"] =
  { mappedKey: [2] };
const RemovePropertySignatureMappedTypeTupleTypeNumber: EmptyTypeLiteral = {
  mappedKey: [2],
};
const PropertySignatureMappedTypeTupleTypeBoolean: MappedTypeDefaults["TupleType"]["Boolean"] =
  { mappedKey: [true] };
const RemovePropertySignatureMappedTypeTupleTypeBoolean: EmptyTypeLiteral = {
  mappedKey: [true],
};
const PropertySignatureMappedTypeTupleTypeAny: MappedTypeDefaults["TupleType"]["Any"] =
  { mappedKey: [2] };
const RemovePropertySignatureMappedTypeTupleTypeAny: EmptyTypeLiteral = {
  mappedKey: [2],
};

// Remove Property Signature of MappedType - ArrayType
const PropertySignatureMappedTypeArrayTypeLiteral: MappedTypeDefaults["ArrayType"]["Literal"] =
  { mappedKey: [1, 1] };
const RemovePropertySignatureMappedTypeArrayTypeLiteral: EmptyTypeLiteral = {
  mappedKey: [1, 1],
};
const PropertySignatureMappedTypeArrayTypeObject: MappedTypeDefaults["ArrayType"]["Object"] =
  { mappedKey: [{}, {}] };
const RemovePropertySignatureMappedTypeArrayTypeObject: EmptyTypeLiteral = {
  mappedKey: [{}, {}],
};
const PropertySignatureMappedTypeArrayTypeString: MappedTypeDefaults["ArrayType"]["String"] =
  { mappedKey: ["two", "two"] };
const RemovePropertySignatureMappedTypeArrayTypeString: EmptyTypeLiteral = {
  mappedKey: ["two", "two"],
};
const PropertySignatureMappedTypeArrayTypeNumber: MappedTypeDefaults["ArrayType"]["Number"] =
  { mappedKey: [2, 2] };
const RemovePropertySignatureMappedTypeArrayTypeNumber: EmptyTypeLiteral = {
  mappedKey: [2, 2],
};
const PropertySignatureMappedTypeArrayTypeBoolean: MappedTypeDefaults["ArrayType"]["Boolean"] =
  { mappedKey: [true, true] };
const RemovePropertySignatureMappedTypeArrayTypeBoolean: EmptyTypeLiteral = {
  mappedKey: [true, true],
};
const PropertySignatureMappedTypeArrayTypeAny: MappedTypeDefaults["ArrayType"]["Any"] =
  { mappedKey: [2, 2] };
const RemovePropertySignatureMappedTypeArrayTypeAny: EmptyTypeLiteral = {
  mappedKey: [2, 2],
};

// Remove Property Signature of MappedType - FunctionType
const PropertySignatureMappedTypeFunctionTypeLiteral: MappedTypeDefaults["FunctionType"]["Literal"] =
  { mappedKey: (param: 1) => {} };
const RemovePropertySignatureMappedTypeFunctionTypeLiteral: EmptyTypeLiteral = {
  mappedKey: (param: 1) => {},
};
const PropertySignatureMappedTypeFunctionTypeObject: MappedTypeDefaults["FunctionType"]["Object"] =
  { mappedKey: (param: object) => {} };
const RemovePropertySignatureMappedTypeFunctionTypeObject: EmptyTypeLiteral = {
  mappedKey: (param: object) => {},
};
const PropertySignatureMappedTypeFunctionTypeString: MappedTypeDefaults["FunctionType"]["String"] =
  { mappedKey: (param: string) => {} };
const RemovePropertySignatureMappedTypeFunctionTypeString: EmptyTypeLiteral = {
  mappedKey: (param: string) => {},
};
const PropertySignatureMappedTypeFunctionTypeNumber: MappedTypeDefaults["FunctionType"]["Number"] =
  { mappedKey: (param: number) => {} };
const RemovePropertySignatureMappedTypeFunctionTypeNumber: EmptyTypeLiteral = {
  mappedKey: (param: number) => {},
};
const PropertySignatureMappedTypeFunctionTypeBoolean: MappedTypeDefaults["FunctionType"]["Boolean"] =
  { mappedKey: (param: boolean) => {} };
const RemovePropertySignatureMappedTypeFunctionTypeBoolean: EmptyTypeLiteral = {
  mappedKey: (param: boolean) => {},
};
const PropertySignatureMappedTypeFunctionTypeAny: MappedTypeDefaults["FunctionType"]["Any"] =
  { mappedKey: (param: any) => {} };
const RemovePropertySignatureMappedTypeFunctionTypeAny: EmptyTypeLiteral = {
  mappedKey: (param: any) => {},
};

// Remove Property Signature of MappedType - ConstructorType
const PropertySignatureMappedTypeConstructorTypeLiteral: MappedTypeDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };
const RemovePropertySignatureMappedTypeConstructorTypeLiteral: EmptyTypeLiteral =
  { mappedKey: 1 };
const PropertySignatureMappedTypeConstructorTypeObject: MappedTypeDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };
const RemovePropertySignatureMappedTypeConstructorTypeObject: EmptyTypeLiteral =
  { mappedKey: {} };
const PropertySignatureMappedTypeConstructorTypeString: MappedTypeDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };
const RemovePropertySignatureMappedTypeConstructorTypeString: EmptyTypeLiteral =
  { mappedKey: "two" };
const PropertySignatureMappedTypeConstructorTypeNumber: MappedTypeDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };
const RemovePropertySignatureMappedTypeConstructorTypeNumber: EmptyTypeLiteral =
  { mappedKey: 2 };
const PropertySignatureMappedTypeConstructorTypeBoolean: MappedTypeDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };
const RemovePropertySignatureMappedTypeConstructorTypeBoolean: EmptyTypeLiteral =
  { mappedKey: true };
const PropertySignatureMappedTypeConstructorTypeAny: MappedTypeDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
const RemovePropertySignatureMappedTypeConstructorTypeAny: EmptyTypeLiteral = {
  mappedKey: 2,
};
