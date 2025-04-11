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
 * Change Type Literal from IndexString
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Change Type Literal From IndexString - ParenthesizedType
const IndexStringParenthesizedTypeLiteral: IndexStringDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeLiteral: PropertySignatureDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeLiteral: MappedTypeDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeLiteral: IndexNumberDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeLiteral: IndexStringDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeLiteral: IndexSymbolDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeLiteral: IndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] =
  { otherKey: 1 };

const IndexStringParenthesizedTypeObject: IndexStringDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeObject: GeneralDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeObject: PropertySignatureDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeObject: MappedTypeDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeObject: IndexNumberDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeObject: IndexStringDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeObject: IndexSymbolDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeObject: IndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  { otherKey: {} };

const IndexStringParenthesizedTypeString: IndexStringDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeString: GeneralDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeString: PropertySignatureDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeString: MappedTypeDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeString: IndexNumberDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeString: IndexStringDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeString: IndexSymbolDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeString: IndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  { otherKey: "two" };

const IndexStringParenthesizedTypeNumber: IndexStringDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeNumber: GeneralDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeNumber: PropertySignatureDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeNumber: MappedTypeDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeNumber: IndexNumberDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeNumber: IndexStringDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeNumber: IndexSymbolDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeNumber: IndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] =
  { otherKey: 2 };

const IndexStringParenthesizedTypeBoolean: IndexStringDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeBoolean: PropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeBoolean: MappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeBoolean: IndexNumberDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeBoolean: IndexStringDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeBoolean: IndexSymbolDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeBoolean: IndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  { otherKey: true };

const IndexStringParenthesizedTypeAny: IndexStringDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeAny: GeneralDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeAny: PropertySignatureDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeAny: MappedTypeDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeAny: IndexNumberDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeAny: IndexStringDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeAny: IndexSymbolDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeAny: IndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] =
  { otherKey: 2 };

// Change Type Literal From IndexString - TypeReferenceBuiltin
const IndexStringTypeReferenceBuiltinLiteral: IndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinLiteral: PropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinLiteral: MappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinLiteral: IndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinLiteral: IndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinLiteral: IndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinLiteral: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { otherKey: promisify(1) };

const IndexStringTypeReferenceBuiltinObject: IndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinObject: PropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinObject: MappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinObject: IndexNumberDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinObject: IndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinObject: IndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinObject: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  { otherKey: promisify({}) };

const IndexStringTypeReferenceBuiltinString: IndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinString: GeneralDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinString: PropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinString: MappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinString: IndexNumberDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinString: IndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinString: IndexSymbolDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinString: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  { otherKey: promisify("two") };

const IndexStringTypeReferenceBuiltinNumber: IndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinNumber: PropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinNumber: MappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinNumber: IndexNumberDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinNumber: IndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinNumber: IndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinNumber: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  { otherKey: promisify(2) };

const IndexStringTypeReferenceBuiltinBoolean: IndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinBoolean: PropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinBoolean: MappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinBoolean: IndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinBoolean: IndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinBoolean: IndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinBoolean: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { otherKey: promisify(true) };

const IndexStringTypeReferenceBuiltinAny: IndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinAny: PropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinAny: MappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinAny: IndexNumberDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinAny: IndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinAny: IndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinAny: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  { otherKey: promisify(2) };

// Change Type Literal From IndexString - TypeReferencePredefined
const IndexStringTypeReferencePredefinedLiteral: IndexStringDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedLiteral: PropertySignatureDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedLiteral: MappedTypeDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedLiteral: IndexNumberDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedLiteral: IndexStringDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedLiteral: IndexSymbolDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedLiteral: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] =
  { otherKey: 1 };

const IndexStringTypeReferencePredefinedObject: IndexStringDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedObject: GeneralDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedObject: PropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedObject: MappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedObject: IndexNumberDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedObject: IndexStringDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedObject: IndexSymbolDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedObject: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  { otherKey: {} };

const IndexStringTypeReferencePredefinedString: IndexStringDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedString: GeneralDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedString: PropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedString: MappedTypeDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedString: IndexNumberDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedString: IndexStringDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedString: IndexSymbolDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedString: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  { otherKey: "two" };

const IndexStringTypeReferencePredefinedNumber: IndexStringDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedNumber: PropertySignatureDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedNumber: MappedTypeDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedNumber: IndexNumberDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedNumber: IndexStringDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedNumber: IndexSymbolDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedNumber: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] =
  { otherKey: 2 };

const IndexStringTypeReferencePredefinedBoolean: IndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedBoolean: PropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedBoolean: MappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedBoolean: IndexNumberDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedBoolean: IndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedBoolean: IndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedBoolean: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  { otherKey: true };

const IndexStringTypeReferencePredefinedAny: IndexStringDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedAny: GeneralDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedAny: PropertySignatureDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedAny: MappedTypeDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedAny: IndexNumberDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedAny: IndexStringDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedAny: IndexSymbolDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedAny: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] =
  { otherKey: 2 };

// Change Type Literal From IndexString - UnionType
const IndexStringUnionTypeLiteral: IndexStringDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeLiteral: GeneralDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeLiteral: PropertySignatureDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeLiteral: MappedTypeDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeLiteral: IndexNumberDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeLiteral: IndexStringDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeLiteral: IndexSymbolDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeLiteral: IndexTemplateLiteralDefaults["UnionType"]["Literal"] =
  { otherKey: 1 };

const IndexStringUnionTypeObject: IndexStringDefaults["UnionType"]["Object"] = {
  otherKey: {},
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeObject: GeneralDefaults["UnionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeObject: PropertySignatureDefaults["UnionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeObject: MappedTypeDefaults["UnionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeObject: IndexNumberDefaults["UnionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeObject: IndexStringDefaults["UnionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeObject: IndexSymbolDefaults["UnionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeObject: IndexTemplateLiteralDefaults["UnionType"]["Object"] =
  { otherKey: {} };

const IndexStringUnionTypeString: IndexStringDefaults["UnionType"]["String"] = {
  otherKey: "two",
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeString: GeneralDefaults["UnionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeString: PropertySignatureDefaults["UnionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeString: MappedTypeDefaults["UnionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeString: IndexNumberDefaults["UnionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeString: IndexStringDefaults["UnionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeString: IndexSymbolDefaults["UnionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeString: IndexTemplateLiteralDefaults["UnionType"]["String"] =
  { otherKey: "two" };

const IndexStringUnionTypeNumber: IndexStringDefaults["UnionType"]["Number"] = {
  otherKey: 2,
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeNumber: GeneralDefaults["UnionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeNumber: PropertySignatureDefaults["UnionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeNumber: MappedTypeDefaults["UnionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeNumber: IndexNumberDefaults["UnionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeNumber: IndexStringDefaults["UnionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeNumber: IndexSymbolDefaults["UnionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeNumber: IndexTemplateLiteralDefaults["UnionType"]["Number"] =
  { otherKey: 2 };

const IndexStringUnionTypeBoolean: IndexStringDefaults["UnionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeBoolean: GeneralDefaults["UnionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeBoolean: PropertySignatureDefaults["UnionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeBoolean: MappedTypeDefaults["UnionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeBoolean: IndexNumberDefaults["UnionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeBoolean: IndexStringDefaults["UnionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeBoolean: IndexSymbolDefaults["UnionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeBoolean: IndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  { otherKey: true };

const IndexStringUnionTypeAny: IndexStringDefaults["UnionType"]["Any"] = {
  otherKey: 2,
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeAny: GeneralDefaults["UnionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeAny: PropertySignatureDefaults["UnionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeAny: MappedTypeDefaults["UnionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeAny: IndexNumberDefaults["UnionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeAny: IndexStringDefaults["UnionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeAny: IndexSymbolDefaults["UnionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeAny: IndexTemplateLiteralDefaults["UnionType"]["Any"] =
  { otherKey: 2 };

// Change Type Literal From IndexString - IntersectionType
const IndexStringIntersectionTypeLiteral: IndexStringDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeLiteral: GeneralDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeLiteral: PropertySignatureDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeLiteral: MappedTypeDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeLiteral: IndexNumberDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeLiteral: IndexStringDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeLiteral: IndexSymbolDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeLiteral: IndexTemplateLiteralDefaults["IntersectionType"]["Literal"] =
  { otherKey: 1 };

const IndexStringIntersectionTypeObject: IndexStringDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeObject: GeneralDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeObject: PropertySignatureDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeObject: MappedTypeDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeObject: IndexNumberDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeObject: IndexStringDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeObject: IndexSymbolDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeObject: IndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  { otherKey: {} };

const IndexStringIntersectionTypeString: IndexStringDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeString: GeneralDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeString: PropertySignatureDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeString: MappedTypeDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeString: IndexNumberDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeString: IndexStringDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeString: IndexSymbolDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeString: IndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  { otherKey: "two" };

const IndexStringIntersectionTypeNumber: IndexStringDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeNumber: GeneralDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeNumber: PropertySignatureDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeNumber: MappedTypeDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeNumber: IndexNumberDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeNumber: IndexStringDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeNumber: IndexSymbolDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeNumber: IndexTemplateLiteralDefaults["IntersectionType"]["Number"] =
  { otherKey: 2 };

const IndexStringIntersectionTypeBoolean: IndexStringDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeBoolean: GeneralDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeBoolean: PropertySignatureDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeBoolean: MappedTypeDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeBoolean: IndexNumberDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeBoolean: IndexStringDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeBoolean: IndexSymbolDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeBoolean: IndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  { otherKey: true };

const IndexStringIntersectionTypeAny: IndexStringDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeAny: GeneralDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeAny: PropertySignatureDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeAny: MappedTypeDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeAny: IndexNumberDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeAny: IndexStringDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeAny: IndexSymbolDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeAny: IndexTemplateLiteralDefaults["IntersectionType"]["Any"] =
  { otherKey: 2 };

// Change Type Literal From IndexString - TypeLiteral
const IndexStringTypeLiteralLiteral: IndexStringDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralLiteral: GeneralDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralLiteral: PropertySignatureDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralLiteral: MappedTypeDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralLiteral: IndexNumberDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralLiteral: IndexStringDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralLiteral: IndexSymbolDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralLiteral: IndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  { otherKey: { key: 1 } };

const IndexStringTypeLiteralObject: IndexStringDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralObject: GeneralDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralObject: PropertySignatureDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralObject: MappedTypeDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralObject: IndexNumberDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralObject: IndexStringDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralObject: IndexSymbolDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralObject: IndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  { otherKey: { key: {} } };

const IndexStringTypeLiteralString: IndexStringDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralString: GeneralDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralString: PropertySignatureDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralString: MappedTypeDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralString: IndexNumberDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralString: IndexStringDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralString: IndexSymbolDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralString: IndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  { otherKey: { key: "two" } };

const IndexStringTypeLiteralNumber: IndexStringDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralNumber: GeneralDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralNumber: PropertySignatureDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralNumber: MappedTypeDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralNumber: IndexNumberDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralNumber: IndexStringDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralNumber: IndexSymbolDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralNumber: IndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  { otherKey: { key: 2 } };

const IndexStringTypeLiteralBoolean: IndexStringDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralBoolean: PropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralBoolean: MappedTypeDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralBoolean: IndexNumberDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralBoolean: IndexStringDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralBoolean: IndexSymbolDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralBoolean: IndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  { otherKey: { key: true } };

const IndexStringTypeLiteralAny: IndexStringDefaults["TypeLiteral"]["Any"] = {
  otherKey: { key: 2 },
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralAny: GeneralDefaults["TypeLiteral"]["Any"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralAny: PropertySignatureDefaults["TypeLiteral"]["Any"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralAny: MappedTypeDefaults["TypeLiteral"]["Any"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralAny: IndexNumberDefaults["TypeLiteral"]["Any"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralAny: IndexStringDefaults["TypeLiteral"]["Any"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralAny: IndexSymbolDefaults["TypeLiteral"]["Any"] =
  { otherKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralAny: IndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  { otherKey: { key: 2 } };

// Change Type Literal From IndexString - TupleType
const IndexStringTupleTypeLiteral: IndexStringDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeLiteral: GeneralDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeLiteral: PropertySignatureDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeLiteral: MappedTypeDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeLiteral: IndexNumberDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeLiteral: IndexStringDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeLiteral: IndexSymbolDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeLiteral: IndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  { otherKey: [1] };

const IndexStringTupleTypeObject: IndexStringDefaults["TupleType"]["Object"] = {
  otherKey: [{}],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeObject: GeneralDefaults["TupleType"]["Object"] =
  { otherKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeObject: PropertySignatureDefaults["TupleType"]["Object"] =
  { otherKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeObject: MappedTypeDefaults["TupleType"]["Object"] =
  { otherKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeObject: IndexNumberDefaults["TupleType"]["Object"] =
  { otherKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeObject: IndexStringDefaults["TupleType"]["Object"] =
  { otherKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeObject: IndexSymbolDefaults["TupleType"]["Object"] =
  { otherKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeObject: IndexTemplateLiteralDefaults["TupleType"]["Object"] =
  { otherKey: [{}] };

const IndexStringTupleTypeString: IndexStringDefaults["TupleType"]["String"] = {
  otherKey: ["two"],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeString: GeneralDefaults["TupleType"]["String"] =
  { otherKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeString: PropertySignatureDefaults["TupleType"]["String"] =
  { otherKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeString: MappedTypeDefaults["TupleType"]["String"] =
  { otherKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeString: IndexNumberDefaults["TupleType"]["String"] =
  { otherKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeString: IndexStringDefaults["TupleType"]["String"] =
  { otherKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeString: IndexSymbolDefaults["TupleType"]["String"] =
  { otherKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeString: IndexTemplateLiteralDefaults["TupleType"]["String"] =
  { otherKey: ["two"] };

const IndexStringTupleTypeNumber: IndexStringDefaults["TupleType"]["Number"] = {
  otherKey: [2],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeNumber: GeneralDefaults["TupleType"]["Number"] =
  { otherKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeNumber: PropertySignatureDefaults["TupleType"]["Number"] =
  { otherKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeNumber: MappedTypeDefaults["TupleType"]["Number"] =
  { otherKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeNumber: IndexNumberDefaults["TupleType"]["Number"] =
  { otherKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeNumber: IndexStringDefaults["TupleType"]["Number"] =
  { otherKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeNumber: IndexSymbolDefaults["TupleType"]["Number"] =
  { otherKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeNumber: IndexTemplateLiteralDefaults["TupleType"]["Number"] =
  { otherKey: [2] };

const IndexStringTupleTypeBoolean: IndexStringDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeBoolean: GeneralDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeBoolean: PropertySignatureDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeBoolean: MappedTypeDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeBoolean: IndexNumberDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeBoolean: IndexStringDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeBoolean: IndexSymbolDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeBoolean: IndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  { otherKey: [true] };

const IndexStringTupleTypeAny: IndexStringDefaults["TupleType"]["Any"] = {
  otherKey: [2],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeAny: GeneralDefaults["TupleType"]["Any"] =
  { otherKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeAny: PropertySignatureDefaults["TupleType"]["Any"] =
  { otherKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeAny: MappedTypeDefaults["TupleType"]["Any"] =
  { otherKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeAny: IndexNumberDefaults["TupleType"]["Any"] =
  { otherKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeAny: IndexStringDefaults["TupleType"]["Any"] =
  { otherKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeAny: IndexSymbolDefaults["TupleType"]["Any"] =
  { otherKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeAny: IndexTemplateLiteralDefaults["TupleType"]["Any"] =
  { otherKey: [2] };

// Change Type Literal From IndexString - ArrayType
const IndexStringArrayTypeLiteral: IndexStringDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeLiteral: GeneralDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeLiteral: PropertySignatureDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeLiteral: MappedTypeDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeLiteral: IndexNumberDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeLiteral: IndexStringDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeLiteral: IndexSymbolDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeLiteral: IndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  { otherKey: [1, 1] };

const IndexStringArrayTypeObject: IndexStringDefaults["ArrayType"]["Object"] = {
  otherKey: [{}, {}],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeObject: GeneralDefaults["ArrayType"]["Object"] =
  { otherKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeObject: PropertySignatureDefaults["ArrayType"]["Object"] =
  { otherKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeObject: MappedTypeDefaults["ArrayType"]["Object"] =
  { otherKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeObject: IndexNumberDefaults["ArrayType"]["Object"] =
  { otherKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeObject: IndexStringDefaults["ArrayType"]["Object"] =
  { otherKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeObject: IndexSymbolDefaults["ArrayType"]["Object"] =
  { otherKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeObject: IndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  { otherKey: [{}, {}] };

const IndexStringArrayTypeString: IndexStringDefaults["ArrayType"]["String"] = {
  otherKey: ["two", "two"],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeString: GeneralDefaults["ArrayType"]["String"] =
  { otherKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeString: PropertySignatureDefaults["ArrayType"]["String"] =
  { otherKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeString: MappedTypeDefaults["ArrayType"]["String"] =
  { otherKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeString: IndexNumberDefaults["ArrayType"]["String"] =
  { otherKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeString: IndexStringDefaults["ArrayType"]["String"] =
  { otherKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeString: IndexSymbolDefaults["ArrayType"]["String"] =
  { otherKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeString: IndexTemplateLiteralDefaults["ArrayType"]["String"] =
  { otherKey: ["two", "two"] };

const IndexStringArrayTypeNumber: IndexStringDefaults["ArrayType"]["Number"] = {
  otherKey: [2, 2],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeNumber: GeneralDefaults["ArrayType"]["Number"] =
  { otherKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeNumber: PropertySignatureDefaults["ArrayType"]["Number"] =
  { otherKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeNumber: MappedTypeDefaults["ArrayType"]["Number"] =
  { otherKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeNumber: IndexNumberDefaults["ArrayType"]["Number"] =
  { otherKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeNumber: IndexStringDefaults["ArrayType"]["Number"] =
  { otherKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeNumber: IndexSymbolDefaults["ArrayType"]["Number"] =
  { otherKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeNumber: IndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  { otherKey: [2, 2] };

const IndexStringArrayTypeBoolean: IndexStringDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeBoolean: GeneralDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeBoolean: PropertySignatureDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeBoolean: MappedTypeDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeBoolean: IndexNumberDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeBoolean: IndexStringDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeBoolean: IndexSymbolDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeBoolean: IndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  { otherKey: [true, true] };

const IndexStringArrayTypeAny: IndexStringDefaults["ArrayType"]["Any"] = {
  otherKey: [2, 2],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeAny: GeneralDefaults["ArrayType"]["Any"] =
  { otherKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeAny: PropertySignatureDefaults["ArrayType"]["Any"] =
  { otherKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeAny: MappedTypeDefaults["ArrayType"]["Any"] =
  { otherKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeAny: IndexNumberDefaults["ArrayType"]["Any"] =
  { otherKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeAny: IndexStringDefaults["ArrayType"]["Any"] =
  { otherKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeAny: IndexSymbolDefaults["ArrayType"]["Any"] =
  { otherKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeAny: IndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  { otherKey: [2, 2] };

// Change Type Literal From IndexString - FunctionType
const IndexStringFunctionTypeLiteral: IndexStringDefaults["FunctionType"]["Literal"] =
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

const IndexStringFunctionTypeObject: IndexStringDefaults["FunctionType"]["Object"] =
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

const IndexStringFunctionTypeString: IndexStringDefaults["FunctionType"]["String"] =
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

const IndexStringFunctionTypeNumber: IndexStringDefaults["FunctionType"]["Number"] =
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

const IndexStringFunctionTypeBoolean: IndexStringDefaults["FunctionType"]["Boolean"] =
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

const IndexStringFunctionTypeAny: IndexStringDefaults["FunctionType"]["Any"] =
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

// Change Type Literal From IndexString - ConstructorType
const IndexStringConstructorTypeLiteral: IndexStringDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeLiteral: GeneralDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeLiteral: PropertySignatureDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeLiteral: MappedTypeDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeLiteral: IndexNumberDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeLiteral: IndexStringDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeLiteral: IndexSymbolDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeLiteral: IndexTemplateLiteralDefaults["ConstructorType"]["Literal"] =
  { otherKey: 1 };

const IndexStringConstructorTypeObject: IndexStringDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeObject: GeneralDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeObject: PropertySignatureDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeObject: MappedTypeDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeObject: IndexNumberDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeObject: IndexStringDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeObject: IndexSymbolDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeObject: IndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  { otherKey: {} };

const IndexStringConstructorTypeString: IndexStringDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeString: GeneralDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeString: PropertySignatureDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeString: MappedTypeDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeString: IndexNumberDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeString: IndexStringDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeString: IndexSymbolDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeString: IndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  { otherKey: "two" };

const IndexStringConstructorTypeNumber: IndexStringDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeNumber: GeneralDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeNumber: PropertySignatureDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeNumber: MappedTypeDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeNumber: IndexNumberDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeNumber: IndexStringDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeNumber: IndexSymbolDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeNumber: IndexTemplateLiteralDefaults["ConstructorType"]["Number"] =
  { otherKey: 2 };

const IndexStringConstructorTypeBoolean: IndexStringDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeBoolean: GeneralDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeBoolean: PropertySignatureDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeBoolean: MappedTypeDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeBoolean: IndexNumberDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeBoolean: IndexStringDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeBoolean: IndexSymbolDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeBoolean: IndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  { otherKey: true };

const IndexStringConstructorTypeAny: IndexStringDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeAny: GeneralDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeAny: PropertySignatureDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeAny: MappedTypeDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeAny: IndexNumberDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeAny: IndexStringDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeAny: IndexSymbolDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeAny: IndexTemplateLiteralDefaults["ConstructorType"]["Any"] =
  { otherKey: 2 };
