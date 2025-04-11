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
 * Change Type Literal from PropertySignature
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Change Type Literal From PropertySignature - ParenthesizedType
const PropertySignatureParenthesizedTypeLiteral: PropertySignatureDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeLiteral: PropertySignatureDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeLiteral: MappedTypeDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeLiteral: IndexNumberDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeLiteral: IndexStringDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeLiteral: IndexSymbolDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeLiteral: IndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] =
  { key: 1 };

const PropertySignatureParenthesizedTypeObject: PropertySignatureDefaults["ParenthesizedType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeObject: GeneralDefaults["ParenthesizedType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeObject: PropertySignatureDefaults["ParenthesizedType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeObject: MappedTypeDefaults["ParenthesizedType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeObject: IndexNumberDefaults["ParenthesizedType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeObject: IndexStringDefaults["ParenthesizedType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeObject: IndexSymbolDefaults["ParenthesizedType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeObject: IndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  { key: {} };

const PropertySignatureParenthesizedTypeString: PropertySignatureDefaults["ParenthesizedType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeString: GeneralDefaults["ParenthesizedType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeString: PropertySignatureDefaults["ParenthesizedType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeString: MappedTypeDefaults["ParenthesizedType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeString: IndexNumberDefaults["ParenthesizedType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeString: IndexStringDefaults["ParenthesizedType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeString: IndexSymbolDefaults["ParenthesizedType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeString: IndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  { key: "two" };

const PropertySignatureParenthesizedTypeNumber: PropertySignatureDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeNumber: GeneralDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeNumber: PropertySignatureDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeNumber: MappedTypeDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeNumber: IndexNumberDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeNumber: IndexStringDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeNumber: IndexSymbolDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeNumber: IndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] =
  { key: 2 };

const PropertySignatureParenthesizedTypeBoolean: PropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeBoolean: PropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeBoolean: MappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeBoolean: IndexNumberDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeBoolean: IndexStringDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeBoolean: IndexSymbolDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeBoolean: IndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  { key: true };

const PropertySignatureParenthesizedTypeAny: PropertySignatureDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeAny: GeneralDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeAny: PropertySignatureDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeAny: MappedTypeDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeAny: IndexNumberDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeAny: IndexStringDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeAny: IndexSymbolDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeAny: IndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] =
  { key: 2 };

// Change Type Literal From PropertySignature - TypeReferenceBuiltin
const PropertySignatureTypeReferenceBuiltinLiteral: PropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  { key: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { key: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinLiteral: PropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  { key: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinLiteral: MappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  { key: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinLiteral: IndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] =
  { key: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinLiteral: IndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  { key: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinLiteral: IndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] =
  { key: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinLiteral: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { key: promisify(1) };

const PropertySignatureTypeReferenceBuiltinObject: PropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  { key: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] =
  { key: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinObject: PropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  { key: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinObject: MappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  { key: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinObject: IndexNumberDefaults["TypeReferenceBuiltin"]["Object"] =
  { key: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinObject: IndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  { key: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinObject: IndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] =
  { key: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinObject: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  { key: promisify({}) };

const PropertySignatureTypeReferenceBuiltinString: PropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  { key: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinString: GeneralDefaults["TypeReferenceBuiltin"]["String"] =
  { key: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinString: PropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  { key: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinString: MappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  { key: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinString: IndexNumberDefaults["TypeReferenceBuiltin"]["String"] =
  { key: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinString: IndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  { key: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinString: IndexSymbolDefaults["TypeReferenceBuiltin"]["String"] =
  { key: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinString: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  { key: promisify("two") };

const PropertySignatureTypeReferenceBuiltinNumber: PropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinNumber: PropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinNumber: MappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinNumber: IndexNumberDefaults["TypeReferenceBuiltin"]["Number"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinNumber: IndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinNumber: IndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinNumber: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  { key: promisify(2) };

const PropertySignatureTypeReferenceBuiltinBoolean: PropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { key: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { key: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinBoolean: PropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { key: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinBoolean: MappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { key: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinBoolean: IndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { key: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinBoolean: IndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { key: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinBoolean: IndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { key: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinBoolean: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { key: promisify(true) };

const PropertySignatureTypeReferenceBuiltinAny: PropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinAny: PropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinAny: MappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinAny: IndexNumberDefaults["TypeReferenceBuiltin"]["Any"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinAny: IndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinAny: IndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] =
  { key: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinAny: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  { key: promisify(2) };

// Change Type Literal From PropertySignature - TypeReferencePredefined
const PropertySignatureTypeReferencePredefinedLiteral: PropertySignatureDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedLiteral: PropertySignatureDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedLiteral: MappedTypeDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedLiteral: IndexNumberDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedLiteral: IndexStringDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedLiteral: IndexSymbolDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedLiteral: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] =
  { key: 1 };

const PropertySignatureTypeReferencePredefinedObject: PropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedObject: GeneralDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedObject: PropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedObject: MappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedObject: IndexNumberDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedObject: IndexStringDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedObject: IndexSymbolDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedObject: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  { key: {} };

const PropertySignatureTypeReferencePredefinedString: PropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedString: GeneralDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedString: PropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedString: MappedTypeDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedString: IndexNumberDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedString: IndexStringDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedString: IndexSymbolDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedString: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  { key: "two" };

const PropertySignatureTypeReferencePredefinedNumber: PropertySignatureDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedNumber: PropertySignatureDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedNumber: MappedTypeDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedNumber: IndexNumberDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedNumber: IndexStringDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedNumber: IndexSymbolDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedNumber: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] =
  { key: 2 };

const PropertySignatureTypeReferencePredefinedBoolean: PropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedBoolean: PropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedBoolean: MappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedBoolean: IndexNumberDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedBoolean: IndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedBoolean: IndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedBoolean: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  { key: true };

const PropertySignatureTypeReferencePredefinedAny: PropertySignatureDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedAny: GeneralDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedAny: PropertySignatureDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedAny: MappedTypeDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedAny: IndexNumberDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedAny: IndexStringDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedAny: IndexSymbolDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedAny: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] =
  { key: 2 };

// Change Type Literal From PropertySignature - UnionType
const PropertySignatureUnionTypeLiteral: PropertySignatureDefaults["UnionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeLiteral: GeneralDefaults["UnionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeLiteral: PropertySignatureDefaults["UnionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeLiteral: MappedTypeDefaults["UnionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeLiteral: IndexNumberDefaults["UnionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeLiteral: IndexStringDefaults["UnionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeLiteral: IndexSymbolDefaults["UnionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeLiteral: IndexTemplateLiteralDefaults["UnionType"]["Literal"] =
  { key: 1 };

const PropertySignatureUnionTypeObject: PropertySignatureDefaults["UnionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeObject: GeneralDefaults["UnionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeObject: PropertySignatureDefaults["UnionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeObject: MappedTypeDefaults["UnionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeObject: IndexNumberDefaults["UnionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeObject: IndexStringDefaults["UnionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeObject: IndexSymbolDefaults["UnionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeObject: IndexTemplateLiteralDefaults["UnionType"]["Object"] =
  { key: {} };

const PropertySignatureUnionTypeString: PropertySignatureDefaults["UnionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeString: GeneralDefaults["UnionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeString: PropertySignatureDefaults["UnionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeString: MappedTypeDefaults["UnionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeString: IndexNumberDefaults["UnionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeString: IndexStringDefaults["UnionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeString: IndexSymbolDefaults["UnionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeString: IndexTemplateLiteralDefaults["UnionType"]["String"] =
  { key: "two" };

const PropertySignatureUnionTypeNumber: PropertySignatureDefaults["UnionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeNumber: GeneralDefaults["UnionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeNumber: PropertySignatureDefaults["UnionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeNumber: MappedTypeDefaults["UnionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeNumber: IndexNumberDefaults["UnionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeNumber: IndexStringDefaults["UnionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeNumber: IndexSymbolDefaults["UnionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeNumber: IndexTemplateLiteralDefaults["UnionType"]["Number"] =
  { key: 2 };

const PropertySignatureUnionTypeBoolean: PropertySignatureDefaults["UnionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeBoolean: GeneralDefaults["UnionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeBoolean: PropertySignatureDefaults["UnionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeBoolean: MappedTypeDefaults["UnionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeBoolean: IndexNumberDefaults["UnionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeBoolean: IndexStringDefaults["UnionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeBoolean: IndexSymbolDefaults["UnionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeBoolean: IndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  { key: true };

const PropertySignatureUnionTypeAny: PropertySignatureDefaults["UnionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeAny: GeneralDefaults["UnionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeAny: PropertySignatureDefaults["UnionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeAny: MappedTypeDefaults["UnionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeAny: IndexNumberDefaults["UnionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeAny: IndexStringDefaults["UnionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeAny: IndexSymbolDefaults["UnionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeAny: IndexTemplateLiteralDefaults["UnionType"]["Any"] =
  { key: 2 };

// Change Type Literal From PropertySignature - IntersectionType
const PropertySignatureIntersectionTypeLiteral: PropertySignatureDefaults["IntersectionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeLiteral: GeneralDefaults["IntersectionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeLiteral: PropertySignatureDefaults["IntersectionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeLiteral: MappedTypeDefaults["IntersectionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeLiteral: IndexNumberDefaults["IntersectionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeLiteral: IndexStringDefaults["IntersectionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeLiteral: IndexSymbolDefaults["IntersectionType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeLiteral: IndexTemplateLiteralDefaults["IntersectionType"]["Literal"] =
  { key: 1 };

const PropertySignatureIntersectionTypeObject: PropertySignatureDefaults["IntersectionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeObject: GeneralDefaults["IntersectionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeObject: PropertySignatureDefaults["IntersectionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeObject: MappedTypeDefaults["IntersectionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeObject: IndexNumberDefaults["IntersectionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeObject: IndexStringDefaults["IntersectionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeObject: IndexSymbolDefaults["IntersectionType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeObject: IndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  { key: {} };

const PropertySignatureIntersectionTypeString: PropertySignatureDefaults["IntersectionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeString: GeneralDefaults["IntersectionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeString: PropertySignatureDefaults["IntersectionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeString: MappedTypeDefaults["IntersectionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeString: IndexNumberDefaults["IntersectionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeString: IndexStringDefaults["IntersectionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeString: IndexSymbolDefaults["IntersectionType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeString: IndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  { key: "two" };

const PropertySignatureIntersectionTypeNumber: PropertySignatureDefaults["IntersectionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeNumber: GeneralDefaults["IntersectionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeNumber: PropertySignatureDefaults["IntersectionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeNumber: MappedTypeDefaults["IntersectionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeNumber: IndexNumberDefaults["IntersectionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeNumber: IndexStringDefaults["IntersectionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeNumber: IndexSymbolDefaults["IntersectionType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeNumber: IndexTemplateLiteralDefaults["IntersectionType"]["Number"] =
  { key: 2 };

const PropertySignatureIntersectionTypeBoolean: PropertySignatureDefaults["IntersectionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeBoolean: GeneralDefaults["IntersectionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeBoolean: PropertySignatureDefaults["IntersectionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeBoolean: MappedTypeDefaults["IntersectionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeBoolean: IndexNumberDefaults["IntersectionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeBoolean: IndexStringDefaults["IntersectionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeBoolean: IndexSymbolDefaults["IntersectionType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeBoolean: IndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  { key: true };

const PropertySignatureIntersectionTypeAny: PropertySignatureDefaults["IntersectionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeAny: GeneralDefaults["IntersectionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeAny: PropertySignatureDefaults["IntersectionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeAny: MappedTypeDefaults["IntersectionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeAny: IndexNumberDefaults["IntersectionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeAny: IndexStringDefaults["IntersectionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeAny: IndexSymbolDefaults["IntersectionType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeAny: IndexTemplateLiteralDefaults["IntersectionType"]["Any"] =
  { key: 2 };

// Change Type Literal From PropertySignature - TypeLiteral
const PropertySignatureTypeLiteralLiteral: PropertySignatureDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralLiteral: GeneralDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralLiteral: PropertySignatureDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralLiteral: MappedTypeDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralLiteral: IndexNumberDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralLiteral: IndexStringDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralLiteral: IndexSymbolDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralLiteral: IndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  { key: { key: 1 } };

const PropertySignatureTypeLiteralObject: PropertySignatureDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralObject: GeneralDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralObject: PropertySignatureDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralObject: MappedTypeDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralObject: IndexNumberDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralObject: IndexStringDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralObject: IndexSymbolDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralObject: IndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  { key: { key: {} } };

const PropertySignatureTypeLiteralString: PropertySignatureDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralString: GeneralDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralString: PropertySignatureDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralString: MappedTypeDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralString: IndexNumberDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralString: IndexStringDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralString: IndexSymbolDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralString: IndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  { key: { key: "two" } };

const PropertySignatureTypeLiteralNumber: PropertySignatureDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralNumber: GeneralDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralNumber: PropertySignatureDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralNumber: MappedTypeDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralNumber: IndexNumberDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralNumber: IndexStringDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralNumber: IndexSymbolDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralNumber: IndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  { key: { key: 2 } };

const PropertySignatureTypeLiteralBoolean: PropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralBoolean: PropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralBoolean: MappedTypeDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralBoolean: IndexNumberDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralBoolean: IndexStringDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralBoolean: IndexSymbolDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralBoolean: IndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  { key: { key: true } };

const PropertySignatureTypeLiteralAny: PropertySignatureDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralAny: GeneralDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralAny: PropertySignatureDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralAny: MappedTypeDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralAny: IndexNumberDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralAny: IndexStringDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralAny: IndexSymbolDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralAny: IndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  { key: { key: 2 } };

// Change Type Literal From PropertySignature - TupleType
const PropertySignatureTupleTypeLiteral: PropertySignatureDefaults["TupleType"]["Literal"] =
  { key: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeLiteral: GeneralDefaults["TupleType"]["Literal"] =
  { key: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeLiteral: PropertySignatureDefaults["TupleType"]["Literal"] =
  { key: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeLiteral: MappedTypeDefaults["TupleType"]["Literal"] =
  { key: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeLiteral: IndexNumberDefaults["TupleType"]["Literal"] =
  { key: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeLiteral: IndexStringDefaults["TupleType"]["Literal"] =
  { key: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeLiteral: IndexSymbolDefaults["TupleType"]["Literal"] =
  { key: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeLiteral: IndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  { key: [1] };

const PropertySignatureTupleTypeObject: PropertySignatureDefaults["TupleType"]["Object"] =
  { key: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeObject: GeneralDefaults["TupleType"]["Object"] =
  { key: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeObject: PropertySignatureDefaults["TupleType"]["Object"] =
  { key: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeObject: MappedTypeDefaults["TupleType"]["Object"] =
  { key: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeObject: IndexNumberDefaults["TupleType"]["Object"] =
  { key: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeObject: IndexStringDefaults["TupleType"]["Object"] =
  { key: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeObject: IndexSymbolDefaults["TupleType"]["Object"] =
  { key: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeObject: IndexTemplateLiteralDefaults["TupleType"]["Object"] =
  { key: [{}] };

const PropertySignatureTupleTypeString: PropertySignatureDefaults["TupleType"]["String"] =
  { key: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeString: GeneralDefaults["TupleType"]["String"] =
  { key: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeString: PropertySignatureDefaults["TupleType"]["String"] =
  { key: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeString: MappedTypeDefaults["TupleType"]["String"] =
  { key: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeString: IndexNumberDefaults["TupleType"]["String"] =
  { key: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeString: IndexStringDefaults["TupleType"]["String"] =
  { key: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeString: IndexSymbolDefaults["TupleType"]["String"] =
  { key: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeString: IndexTemplateLiteralDefaults["TupleType"]["String"] =
  { key: ["two"] };

const PropertySignatureTupleTypeNumber: PropertySignatureDefaults["TupleType"]["Number"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeNumber: GeneralDefaults["TupleType"]["Number"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeNumber: PropertySignatureDefaults["TupleType"]["Number"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeNumber: MappedTypeDefaults["TupleType"]["Number"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeNumber: IndexNumberDefaults["TupleType"]["Number"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeNumber: IndexStringDefaults["TupleType"]["Number"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeNumber: IndexSymbolDefaults["TupleType"]["Number"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeNumber: IndexTemplateLiteralDefaults["TupleType"]["Number"] =
  { key: [2] };

const PropertySignatureTupleTypeBoolean: PropertySignatureDefaults["TupleType"]["Boolean"] =
  { key: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeBoolean: GeneralDefaults["TupleType"]["Boolean"] =
  { key: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeBoolean: PropertySignatureDefaults["TupleType"]["Boolean"] =
  { key: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeBoolean: MappedTypeDefaults["TupleType"]["Boolean"] =
  { key: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeBoolean: IndexNumberDefaults["TupleType"]["Boolean"] =
  { key: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeBoolean: IndexStringDefaults["TupleType"]["Boolean"] =
  { key: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeBoolean: IndexSymbolDefaults["TupleType"]["Boolean"] =
  { key: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeBoolean: IndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  { key: [true] };

const PropertySignatureTupleTypeAny: PropertySignatureDefaults["TupleType"]["Any"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeAny: GeneralDefaults["TupleType"]["Any"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeAny: PropertySignatureDefaults["TupleType"]["Any"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeAny: MappedTypeDefaults["TupleType"]["Any"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeAny: IndexNumberDefaults["TupleType"]["Any"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeAny: IndexStringDefaults["TupleType"]["Any"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeAny: IndexSymbolDefaults["TupleType"]["Any"] =
  { key: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeAny: IndexTemplateLiteralDefaults["TupleType"]["Any"] =
  { key: [2] };

// Change Type Literal From PropertySignature - ArrayType
const PropertySignatureArrayTypeLiteral: PropertySignatureDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeLiteral: GeneralDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeLiteral: PropertySignatureDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeLiteral: MappedTypeDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeLiteral: IndexNumberDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeLiteral: IndexStringDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeLiteral: IndexSymbolDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeLiteral: IndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  { key: [1, 1] };

const PropertySignatureArrayTypeObject: PropertySignatureDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeObject: GeneralDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeObject: PropertySignatureDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeObject: MappedTypeDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeObject: IndexNumberDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeObject: IndexStringDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeObject: IndexSymbolDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeObject: IndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  { key: [{}, {}] };

const PropertySignatureArrayTypeString: PropertySignatureDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeString: GeneralDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeString: PropertySignatureDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeString: MappedTypeDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeString: IndexNumberDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeString: IndexStringDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeString: IndexSymbolDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeString: IndexTemplateLiteralDefaults["ArrayType"]["String"] =
  { key: ["two", "two"] };

const PropertySignatureArrayTypeNumber: PropertySignatureDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeNumber: GeneralDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeNumber: PropertySignatureDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeNumber: MappedTypeDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeNumber: IndexNumberDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeNumber: IndexStringDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeNumber: IndexSymbolDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeNumber: IndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  { key: [2, 2] };

const PropertySignatureArrayTypeBoolean: PropertySignatureDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeBoolean: GeneralDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeBoolean: PropertySignatureDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeBoolean: MappedTypeDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeBoolean: IndexNumberDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeBoolean: IndexStringDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeBoolean: IndexSymbolDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeBoolean: IndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  { key: [true, true] };

const PropertySignatureArrayTypeAny: PropertySignatureDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeAny: GeneralDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeAny: PropertySignatureDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeAny: MappedTypeDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeAny: IndexNumberDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeAny: IndexStringDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeAny: IndexSymbolDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeAny: IndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  { key: [2, 2] };

// Change Type Literal From PropertySignature - FunctionType
const PropertySignatureFunctionTypeLiteral: PropertySignatureDefaults["FunctionType"]["Literal"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralFunctionTypeLiteral: GeneralDefaults["FunctionType"]["Literal"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureFunctionTypeLiteral: PropertySignatureDefaults["FunctionType"]["Literal"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeFunctionTypeLiteral: MappedTypeDefaults["FunctionType"]["Literal"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberFunctionTypeLiteral: IndexNumberDefaults["FunctionType"]["Literal"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringFunctionTypeLiteral: IndexStringDefaults["FunctionType"]["Literal"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolFunctionTypeLiteral: IndexSymbolDefaults["FunctionType"]["Literal"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralFunctionTypeLiteral: IndexTemplateLiteralDefaults["FunctionType"]["Literal"] =
  {};

const PropertySignatureFunctionTypeObject: PropertySignatureDefaults["FunctionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralFunctionTypeObject: GeneralDefaults["FunctionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureFunctionTypeObject: PropertySignatureDefaults["FunctionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeFunctionTypeObject: MappedTypeDefaults["FunctionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberFunctionTypeObject: IndexNumberDefaults["FunctionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringFunctionTypeObject: IndexStringDefaults["FunctionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolFunctionTypeObject: IndexSymbolDefaults["FunctionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralFunctionTypeObject: IndexTemplateLiteralDefaults["FunctionType"]["Object"] =
  {};

const PropertySignatureFunctionTypeString: PropertySignatureDefaults["FunctionType"]["String"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralFunctionTypeString: GeneralDefaults["FunctionType"]["String"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureFunctionTypeString: PropertySignatureDefaults["FunctionType"]["String"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeFunctionTypeString: MappedTypeDefaults["FunctionType"]["String"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberFunctionTypeString: IndexNumberDefaults["FunctionType"]["String"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringFunctionTypeString: IndexStringDefaults["FunctionType"]["String"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolFunctionTypeString: IndexSymbolDefaults["FunctionType"]["String"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralFunctionTypeString: IndexTemplateLiteralDefaults["FunctionType"]["String"] =
  {};

const PropertySignatureFunctionTypeNumber: PropertySignatureDefaults["FunctionType"]["Number"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralFunctionTypeNumber: GeneralDefaults["FunctionType"]["Number"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureFunctionTypeNumber: PropertySignatureDefaults["FunctionType"]["Number"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeFunctionTypeNumber: MappedTypeDefaults["FunctionType"]["Number"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberFunctionTypeNumber: IndexNumberDefaults["FunctionType"]["Number"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringFunctionTypeNumber: IndexStringDefaults["FunctionType"]["Number"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolFunctionTypeNumber: IndexSymbolDefaults["FunctionType"]["Number"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralFunctionTypeNumber: IndexTemplateLiteralDefaults["FunctionType"]["Number"] =
  {};

const PropertySignatureFunctionTypeBoolean: PropertySignatureDefaults["FunctionType"]["Boolean"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralFunctionTypeBoolean: GeneralDefaults["FunctionType"]["Boolean"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureFunctionTypeBoolean: PropertySignatureDefaults["FunctionType"]["Boolean"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeFunctionTypeBoolean: MappedTypeDefaults["FunctionType"]["Boolean"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberFunctionTypeBoolean: IndexNumberDefaults["FunctionType"]["Boolean"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringFunctionTypeBoolean: IndexStringDefaults["FunctionType"]["Boolean"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolFunctionTypeBoolean: IndexSymbolDefaults["FunctionType"]["Boolean"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralFunctionTypeBoolean: IndexTemplateLiteralDefaults["FunctionType"]["Boolean"] =
  {};

const PropertySignatureFunctionTypeAny: PropertySignatureDefaults["FunctionType"]["Any"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralFunctionTypeAny: GeneralDefaults["FunctionType"]["Any"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureFunctionTypeAny: PropertySignatureDefaults["FunctionType"]["Any"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeFunctionTypeAny: MappedTypeDefaults["FunctionType"]["Any"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberFunctionTypeAny: IndexNumberDefaults["FunctionType"]["Any"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringFunctionTypeAny: IndexStringDefaults["FunctionType"]["Any"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolFunctionTypeAny: IndexSymbolDefaults["FunctionType"]["Any"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralFunctionTypeAny: IndexTemplateLiteralDefaults["FunctionType"]["Any"] =
  {};

// Change Type Literal From PropertySignature - ConstructorType
const PropertySignatureConstructorTypeLiteral: PropertySignatureDefaults["ConstructorType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeLiteral: GeneralDefaults["ConstructorType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeLiteral: PropertySignatureDefaults["ConstructorType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeLiteral: MappedTypeDefaults["ConstructorType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeLiteral: IndexNumberDefaults["ConstructorType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeLiteral: IndexStringDefaults["ConstructorType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeLiteral: IndexSymbolDefaults["ConstructorType"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeLiteral: IndexTemplateLiteralDefaults["ConstructorType"]["Literal"] =
  { key: 1 };

const PropertySignatureConstructorTypeObject: PropertySignatureDefaults["ConstructorType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeObject: GeneralDefaults["ConstructorType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeObject: PropertySignatureDefaults["ConstructorType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeObject: MappedTypeDefaults["ConstructorType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeObject: IndexNumberDefaults["ConstructorType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeObject: IndexStringDefaults["ConstructorType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeObject: IndexSymbolDefaults["ConstructorType"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeObject: IndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  { key: {} };

const PropertySignatureConstructorTypeString: PropertySignatureDefaults["ConstructorType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeString: GeneralDefaults["ConstructorType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeString: PropertySignatureDefaults["ConstructorType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeString: MappedTypeDefaults["ConstructorType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeString: IndexNumberDefaults["ConstructorType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeString: IndexStringDefaults["ConstructorType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeString: IndexSymbolDefaults["ConstructorType"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeString: IndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  { key: "two" };

const PropertySignatureConstructorTypeNumber: PropertySignatureDefaults["ConstructorType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeNumber: GeneralDefaults["ConstructorType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeNumber: PropertySignatureDefaults["ConstructorType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeNumber: MappedTypeDefaults["ConstructorType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeNumber: IndexNumberDefaults["ConstructorType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeNumber: IndexStringDefaults["ConstructorType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeNumber: IndexSymbolDefaults["ConstructorType"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeNumber: IndexTemplateLiteralDefaults["ConstructorType"]["Number"] =
  { key: 2 };

const PropertySignatureConstructorTypeBoolean: PropertySignatureDefaults["ConstructorType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeBoolean: GeneralDefaults["ConstructorType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeBoolean: PropertySignatureDefaults["ConstructorType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeBoolean: MappedTypeDefaults["ConstructorType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeBoolean: IndexNumberDefaults["ConstructorType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeBoolean: IndexStringDefaults["ConstructorType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeBoolean: IndexSymbolDefaults["ConstructorType"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeBoolean: IndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  { key: true };

const PropertySignatureConstructorTypeAny: PropertySignatureDefaults["ConstructorType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeAny: GeneralDefaults["ConstructorType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeAny: PropertySignatureDefaults["ConstructorType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeAny: MappedTypeDefaults["ConstructorType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeAny: IndexNumberDefaults["ConstructorType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeAny: IndexStringDefaults["ConstructorType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeAny: IndexSymbolDefaults["ConstructorType"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeAny: IndexTemplateLiteralDefaults["ConstructorType"]["Any"] =
  { key: 2 };
