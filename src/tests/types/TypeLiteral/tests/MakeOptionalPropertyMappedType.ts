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
 * Make Optional Property MappedType
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Make Optional Property MappedType - ParenthesizedType
const PropertySignatureMappedTypeParenthesizedTypeLiteral: MappedTypeDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };
const MakeOptionalPropertyMappedTypeParenthesizedTypeLiteral: OptionalMappedTypeDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };
const PropertySignatureMappedTypeParenthesizedTypeObject: MappedTypeDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };
const MakeOptionalPropertyMappedTypeParenthesizedTypeObject: OptionalMappedTypeDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };
const PropertySignatureMappedTypeParenthesizedTypeString: MappedTypeDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };
const MakeOptionalPropertyMappedTypeParenthesizedTypeString: OptionalMappedTypeDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };
const PropertySignatureMappedTypeParenthesizedTypeNumber: MappedTypeDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };
const MakeOptionalPropertyMappedTypeParenthesizedTypeNumber: OptionalMappedTypeDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };
const PropertySignatureMappedTypeParenthesizedTypeBoolean: MappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };
const MakeOptionalPropertyMappedTypeParenthesizedTypeBoolean: OptionalMappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };
const PropertySignatureMappedTypeParenthesizedTypeAny: MappedTypeDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };
const MakeOptionalPropertyMappedTypeParenthesizedTypeAny: OptionalMappedTypeDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };

// Make Optional Property MappedType - TypeReferenceBuiltin
const PropertySignatureMappedTypeTypeReferenceBuiltinLiteral: MappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  { mappedKey: promisify(1) };
const MakeOptionalPropertyMappedTypeTypeReferenceBuiltinLiteral: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  { mappedKey: promisify(1) };
const PropertySignatureMappedTypeTypeReferenceBuiltinObject: MappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  { mappedKey: promisify({}) };
const MakeOptionalPropertyMappedTypeTypeReferenceBuiltinObject: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  { mappedKey: promisify({}) };
const PropertySignatureMappedTypeTypeReferenceBuiltinString: MappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  { mappedKey: promisify("two") };
const MakeOptionalPropertyMappedTypeTypeReferenceBuiltinString: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  { mappedKey: promisify("two") };
const PropertySignatureMappedTypeTypeReferenceBuiltinNumber: MappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  { mappedKey: promisify(2) };
const MakeOptionalPropertyMappedTypeTypeReferenceBuiltinNumber: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  { mappedKey: promisify(2) };
const PropertySignatureMappedTypeTypeReferenceBuiltinBoolean: MappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { mappedKey: promisify(true) };
const MakeOptionalPropertyMappedTypeTypeReferenceBuiltinBoolean: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { mappedKey: promisify(true) };
const PropertySignatureMappedTypeTypeReferenceBuiltinAny: MappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  { mappedKey: promisify(2) };
const MakeOptionalPropertyMappedTypeTypeReferenceBuiltinAny: OptionalMappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  { mappedKey: promisify(2) };

// Make Optional Property MappedType - TypeReferencePredefined
const PropertySignatureMappedTypeTypeReferencePredefinedLiteral: MappedTypeDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };
const MakeOptionalPropertyMappedTypeTypeReferencePredefinedLiteral: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };
const PropertySignatureMappedTypeTypeReferencePredefinedObject: MappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };
const MakeOptionalPropertyMappedTypeTypeReferencePredefinedObject: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };
const PropertySignatureMappedTypeTypeReferencePredefinedString: MappedTypeDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };
const MakeOptionalPropertyMappedTypeTypeReferencePredefinedString: OptionalMappedTypeDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };
const PropertySignatureMappedTypeTypeReferencePredefinedNumber: MappedTypeDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };
const MakeOptionalPropertyMappedTypeTypeReferencePredefinedNumber: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };
const PropertySignatureMappedTypeTypeReferencePredefinedBoolean: MappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };
const MakeOptionalPropertyMappedTypeTypeReferencePredefinedBoolean: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };
const PropertySignatureMappedTypeTypeReferencePredefinedAny: MappedTypeDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };
const MakeOptionalPropertyMappedTypeTypeReferencePredefinedAny: OptionalMappedTypeDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };

// Make Optional Property MappedType - UnionType
const PropertySignatureMappedTypeUnionTypeLiteral: MappedTypeDefaults["UnionType"]["Literal"] =
  { mappedKey: 1 };
const MakeOptionalPropertyMappedTypeUnionTypeLiteral: OptionalMappedTypeDefaults["UnionType"]["Literal"] =
  { mappedKey: 1 };
const PropertySignatureMappedTypeUnionTypeObject: MappedTypeDefaults["UnionType"]["Object"] =
  { mappedKey: {} };
const MakeOptionalPropertyMappedTypeUnionTypeObject: OptionalMappedTypeDefaults["UnionType"]["Object"] =
  { mappedKey: {} };
const PropertySignatureMappedTypeUnionTypeString: MappedTypeDefaults["UnionType"]["String"] =
  { mappedKey: "two" };
const MakeOptionalPropertyMappedTypeUnionTypeString: OptionalMappedTypeDefaults["UnionType"]["String"] =
  { mappedKey: "two" };
const PropertySignatureMappedTypeUnionTypeNumber: MappedTypeDefaults["UnionType"]["Number"] =
  { mappedKey: 2 };
const MakeOptionalPropertyMappedTypeUnionTypeNumber: OptionalMappedTypeDefaults["UnionType"]["Number"] =
  { mappedKey: 2 };
const PropertySignatureMappedTypeUnionTypeBoolean: MappedTypeDefaults["UnionType"]["Boolean"] =
  { mappedKey: true };
const MakeOptionalPropertyMappedTypeUnionTypeBoolean: OptionalMappedTypeDefaults["UnionType"]["Boolean"] =
  { mappedKey: true };
const PropertySignatureMappedTypeUnionTypeAny: MappedTypeDefaults["UnionType"]["Any"] =
  { mappedKey: 2 };
const MakeOptionalPropertyMappedTypeUnionTypeAny: OptionalMappedTypeDefaults["UnionType"]["Any"] =
  { mappedKey: 2 };

// Make Optional Property MappedType - IntersectionType
const PropertySignatureMappedTypeIntersectionTypeLiteral: MappedTypeDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };
const MakeOptionalPropertyMappedTypeIntersectionTypeLiteral: OptionalMappedTypeDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };
const PropertySignatureMappedTypeIntersectionTypeObject: MappedTypeDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };
const MakeOptionalPropertyMappedTypeIntersectionTypeObject: OptionalMappedTypeDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };
const PropertySignatureMappedTypeIntersectionTypeString: MappedTypeDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };
const MakeOptionalPropertyMappedTypeIntersectionTypeString: OptionalMappedTypeDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };
const PropertySignatureMappedTypeIntersectionTypeNumber: MappedTypeDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };
const MakeOptionalPropertyMappedTypeIntersectionTypeNumber: OptionalMappedTypeDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };
const PropertySignatureMappedTypeIntersectionTypeBoolean: MappedTypeDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };
const MakeOptionalPropertyMappedTypeIntersectionTypeBoolean: OptionalMappedTypeDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };
const PropertySignatureMappedTypeIntersectionTypeAny: MappedTypeDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };
const MakeOptionalPropertyMappedTypeIntersectionTypeAny: OptionalMappedTypeDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };

// Make Optional Property MappedType - TypeLiteral
const PropertySignatureMappedTypeTypeLiteralLiteral: MappedTypeDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };
const MakeOptionalPropertyMappedTypeTypeLiteralLiteral: OptionalMappedTypeDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };
const PropertySignatureMappedTypeTypeLiteralObject: MappedTypeDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };
const MakeOptionalPropertyMappedTypeTypeLiteralObject: OptionalMappedTypeDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };
const PropertySignatureMappedTypeTypeLiteralString: MappedTypeDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };
const MakeOptionalPropertyMappedTypeTypeLiteralString: OptionalMappedTypeDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };
const PropertySignatureMappedTypeTypeLiteralNumber: MappedTypeDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };
const MakeOptionalPropertyMappedTypeTypeLiteralNumber: OptionalMappedTypeDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };
const PropertySignatureMappedTypeTypeLiteralBoolean: MappedTypeDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };
const MakeOptionalPropertyMappedTypeTypeLiteralBoolean: OptionalMappedTypeDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };
const PropertySignatureMappedTypeTypeLiteralAny: MappedTypeDefaults["TypeLiteral"]["Any"] =
  { mappedKey: { key: 2 } };
const MakeOptionalPropertyMappedTypeTypeLiteralAny: OptionalMappedTypeDefaults["TypeLiteral"]["Any"] =
  { mappedKey: { key: 2 } };

// Make Optional Property MappedType - TupleType
const PropertySignatureMappedTypeTupleTypeLiteral: MappedTypeDefaults["TupleType"]["Literal"] =
  { mappedKey: [1] };
const MakeOptionalPropertyMappedTypeTupleTypeLiteral: OptionalMappedTypeDefaults["TupleType"]["Literal"] =
  { mappedKey: [1] };
const PropertySignatureMappedTypeTupleTypeObject: MappedTypeDefaults["TupleType"]["Object"] =
  { mappedKey: [{}] };
const MakeOptionalPropertyMappedTypeTupleTypeObject: OptionalMappedTypeDefaults["TupleType"]["Object"] =
  { mappedKey: [{}] };
const PropertySignatureMappedTypeTupleTypeString: MappedTypeDefaults["TupleType"]["String"] =
  { mappedKey: ["two"] };
const MakeOptionalPropertyMappedTypeTupleTypeString: OptionalMappedTypeDefaults["TupleType"]["String"] =
  { mappedKey: ["two"] };
const PropertySignatureMappedTypeTupleTypeNumber: MappedTypeDefaults["TupleType"]["Number"] =
  { mappedKey: [2] };
const MakeOptionalPropertyMappedTypeTupleTypeNumber: OptionalMappedTypeDefaults["TupleType"]["Number"] =
  { mappedKey: [2] };
const PropertySignatureMappedTypeTupleTypeBoolean: MappedTypeDefaults["TupleType"]["Boolean"] =
  { mappedKey: [true] };
const MakeOptionalPropertyMappedTypeTupleTypeBoolean: OptionalMappedTypeDefaults["TupleType"]["Boolean"] =
  { mappedKey: [true] };
const PropertySignatureMappedTypeTupleTypeAny: MappedTypeDefaults["TupleType"]["Any"] =
  { mappedKey: [2] };
const MakeOptionalPropertyMappedTypeTupleTypeAny: OptionalMappedTypeDefaults["TupleType"]["Any"] =
  { mappedKey: [2] };

// Make Optional Property MappedType - ArrayType
const PropertySignatureMappedTypeArrayTypeLiteral: MappedTypeDefaults["ArrayType"]["Literal"] =
  { mappedKey: [1, 1] };
const MakeOptionalPropertyMappedTypeArrayTypeLiteral: OptionalMappedTypeDefaults["ArrayType"]["Literal"] =
  { mappedKey: [1, 1] };
const PropertySignatureMappedTypeArrayTypeObject: MappedTypeDefaults["ArrayType"]["Object"] =
  { mappedKey: [{}, {}] };
const MakeOptionalPropertyMappedTypeArrayTypeObject: OptionalMappedTypeDefaults["ArrayType"]["Object"] =
  { mappedKey: [{}, {}] };
const PropertySignatureMappedTypeArrayTypeString: MappedTypeDefaults["ArrayType"]["String"] =
  { mappedKey: ["two", "two"] };
const MakeOptionalPropertyMappedTypeArrayTypeString: OptionalMappedTypeDefaults["ArrayType"]["String"] =
  { mappedKey: ["two", "two"] };
const PropertySignatureMappedTypeArrayTypeNumber: MappedTypeDefaults["ArrayType"]["Number"] =
  { mappedKey: [2, 2] };
const MakeOptionalPropertyMappedTypeArrayTypeNumber: OptionalMappedTypeDefaults["ArrayType"]["Number"] =
  { mappedKey: [2, 2] };
const PropertySignatureMappedTypeArrayTypeBoolean: MappedTypeDefaults["ArrayType"]["Boolean"] =
  { mappedKey: [true, true] };
const MakeOptionalPropertyMappedTypeArrayTypeBoolean: OptionalMappedTypeDefaults["ArrayType"]["Boolean"] =
  { mappedKey: [true, true] };
const PropertySignatureMappedTypeArrayTypeAny: MappedTypeDefaults["ArrayType"]["Any"] =
  { mappedKey: [2, 2] };
const MakeOptionalPropertyMappedTypeArrayTypeAny: OptionalMappedTypeDefaults["ArrayType"]["Any"] =
  { mappedKey: [2, 2] };

// Make Optional Property MappedType - FunctionType
const PropertySignatureMappedTypeFunctionTypeLiteral: MappedTypeDefaults["FunctionType"]["Literal"] =
  { mappedKey: (param: 1) => {} };
const MakeOptionalPropertyMappedTypeFunctionTypeLiteral: OptionalMappedTypeDefaults["FunctionType"]["Literal"] =
  { mappedKey: (param: 1) => {} };
const PropertySignatureMappedTypeFunctionTypeObject: MappedTypeDefaults["FunctionType"]["Object"] =
  { mappedKey: (param: object) => {} };
const MakeOptionalPropertyMappedTypeFunctionTypeObject: OptionalMappedTypeDefaults["FunctionType"]["Object"] =
  { mappedKey: (param: object) => {} };
const PropertySignatureMappedTypeFunctionTypeString: MappedTypeDefaults["FunctionType"]["String"] =
  { mappedKey: (param: string) => {} };
const MakeOptionalPropertyMappedTypeFunctionTypeString: OptionalMappedTypeDefaults["FunctionType"]["String"] =
  { mappedKey: (param: string) => {} };
const PropertySignatureMappedTypeFunctionTypeNumber: MappedTypeDefaults["FunctionType"]["Number"] =
  { mappedKey: (param: number) => {} };
const MakeOptionalPropertyMappedTypeFunctionTypeNumber: OptionalMappedTypeDefaults["FunctionType"]["Number"] =
  { mappedKey: (param: number) => {} };
const PropertySignatureMappedTypeFunctionTypeBoolean: MappedTypeDefaults["FunctionType"]["Boolean"] =
  { mappedKey: (param: boolean) => {} };
const MakeOptionalPropertyMappedTypeFunctionTypeBoolean: OptionalMappedTypeDefaults["FunctionType"]["Boolean"] =
  { mappedKey: (param: boolean) => {} };
const PropertySignatureMappedTypeFunctionTypeAny: MappedTypeDefaults["FunctionType"]["Any"] =
  { mappedKey: (param: any) => {} };
const MakeOptionalPropertyMappedTypeFunctionTypeAny: OptionalMappedTypeDefaults["FunctionType"]["Any"] =
  { mappedKey: (param: any) => {} };

// Make Optional Property MappedType - ConstructorType
const PropertySignatureMappedTypeConstructorTypeLiteral: MappedTypeDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };
const MakeOptionalPropertyMappedTypeConstructorTypeLiteral: OptionalMappedTypeDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };
const PropertySignatureMappedTypeConstructorTypeObject: MappedTypeDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };
const MakeOptionalPropertyMappedTypeConstructorTypeObject: OptionalMappedTypeDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };
const PropertySignatureMappedTypeConstructorTypeString: MappedTypeDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };
const MakeOptionalPropertyMappedTypeConstructorTypeString: OptionalMappedTypeDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };
const PropertySignatureMappedTypeConstructorTypeNumber: MappedTypeDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };
const MakeOptionalPropertyMappedTypeConstructorTypeNumber: OptionalMappedTypeDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };
const PropertySignatureMappedTypeConstructorTypeBoolean: MappedTypeDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };
const MakeOptionalPropertyMappedTypeConstructorTypeBoolean: OptionalMappedTypeDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };
const PropertySignatureMappedTypeConstructorTypeAny: MappedTypeDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
const MakeOptionalPropertyMappedTypeConstructorTypeAny: OptionalMappedTypeDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
