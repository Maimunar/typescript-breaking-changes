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
 * Change Type Literal from IndexTemplateLiteral
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Change Type Literal From IndexTemplateLiteral - ParenthesizedType
const IndexTemplateLiteralParenthesizedTypeLiteral: IndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeLiteral: PropertySignatureDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeLiteral: MappedTypeDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeLiteral: IndexNumberDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeLiteral: IndexStringDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeLiteral: IndexSymbolDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeLiteral: IndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] =
  { fooKey: 1 };

const IndexTemplateLiteralParenthesizedTypeObject: IndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeObject: GeneralDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeObject: PropertySignatureDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeObject: MappedTypeDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeObject: IndexNumberDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeObject: IndexStringDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeObject: IndexSymbolDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeObject: IndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  { fooKey: {} };

const IndexTemplateLiteralParenthesizedTypeString: IndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeString: GeneralDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeString: PropertySignatureDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeString: MappedTypeDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeString: IndexNumberDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeString: IndexStringDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeString: IndexSymbolDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeString: IndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  { fooKey: "two" };

const IndexTemplateLiteralParenthesizedTypeNumber: IndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeNumber: GeneralDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeNumber: PropertySignatureDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeNumber: MappedTypeDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeNumber: IndexNumberDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeNumber: IndexStringDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeNumber: IndexSymbolDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeNumber: IndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] =
  { fooKey: 2 };

const IndexTemplateLiteralParenthesizedTypeBoolean: IndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeBoolean: PropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeBoolean: MappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeBoolean: IndexNumberDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeBoolean: IndexStringDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeBoolean: IndexSymbolDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeBoolean: IndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  { fooKey: true };

const IndexTemplateLiteralParenthesizedTypeAny: IndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeAny: GeneralDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeAny: PropertySignatureDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeAny: MappedTypeDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeAny: IndexNumberDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeAny: IndexStringDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeAny: IndexSymbolDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeAny: IndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] =
  { fooKey: 2 };

// Change Type Literal From IndexTemplateLiteral - TypeReferenceBuiltin
const IndexTemplateLiteralTypeReferenceBuiltinLiteral: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinLiteral: PropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinLiteral: MappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinLiteral: IndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinLiteral: IndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinLiteral: IndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinLiteral: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { fooKey: promisify(1) };

const IndexTemplateLiteralTypeReferenceBuiltinObject: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinObject: PropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinObject: MappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinObject: IndexNumberDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinObject: IndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinObject: IndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinObject: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  { fooKey: promisify({}) };

const IndexTemplateLiteralTypeReferenceBuiltinString: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinString: GeneralDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinString: PropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinString: MappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinString: IndexNumberDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinString: IndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinString: IndexSymbolDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinString: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  { fooKey: promisify("two") };

const IndexTemplateLiteralTypeReferenceBuiltinNumber: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinNumber: PropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinNumber: MappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinNumber: IndexNumberDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinNumber: IndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinNumber: IndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinNumber: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  { fooKey: promisify(2) };

const IndexTemplateLiteralTypeReferenceBuiltinBoolean: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinBoolean: PropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinBoolean: MappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinBoolean: IndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinBoolean: IndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinBoolean: IndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinBoolean: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { fooKey: promisify(true) };

const IndexTemplateLiteralTypeReferenceBuiltinAny: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinAny: PropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinAny: MappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinAny: IndexNumberDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinAny: IndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinAny: IndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinAny: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  { fooKey: promisify(2) };

// Change Type Literal From IndexTemplateLiteral - TypeReferencePredefined
const IndexTemplateLiteralTypeReferencePredefinedLiteral: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedLiteral: PropertySignatureDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedLiteral: MappedTypeDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedLiteral: IndexNumberDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedLiteral: IndexStringDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedLiteral: IndexSymbolDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedLiteral: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] =
  { fooKey: 1 };

const IndexTemplateLiteralTypeReferencePredefinedObject: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedObject: GeneralDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedObject: PropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedObject: MappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedObject: IndexNumberDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedObject: IndexStringDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedObject: IndexSymbolDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedObject: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  { fooKey: {} };

const IndexTemplateLiteralTypeReferencePredefinedString: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedString: GeneralDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedString: PropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedString: MappedTypeDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedString: IndexNumberDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedString: IndexStringDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedString: IndexSymbolDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedString: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  { fooKey: "two" };

const IndexTemplateLiteralTypeReferencePredefinedNumber: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedNumber: PropertySignatureDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedNumber: MappedTypeDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedNumber: IndexNumberDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedNumber: IndexStringDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedNumber: IndexSymbolDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedNumber: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] =
  { fooKey: 2 };

const IndexTemplateLiteralTypeReferencePredefinedBoolean: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedBoolean: PropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedBoolean: MappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedBoolean: IndexNumberDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedBoolean: IndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedBoolean: IndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedBoolean: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  { fooKey: true };

const IndexTemplateLiteralTypeReferencePredefinedAny: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedAny: GeneralDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedAny: PropertySignatureDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedAny: MappedTypeDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedAny: IndexNumberDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedAny: IndexStringDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedAny: IndexSymbolDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedAny: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] =
  { fooKey: 2 };

// Change Type Literal From IndexTemplateLiteral - UnionType
const IndexTemplateLiteralUnionTypeLiteral: IndexTemplateLiteralDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeLiteral: GeneralDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeLiteral: PropertySignatureDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeLiteral: MappedTypeDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeLiteral: IndexNumberDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeLiteral: IndexStringDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeLiteral: IndexSymbolDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeLiteral: IndexTemplateLiteralDefaults["UnionType"]["Literal"] =
  { fooKey: 1 };

const IndexTemplateLiteralUnionTypeObject: IndexTemplateLiteralDefaults["UnionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeObject: GeneralDefaults["UnionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeObject: PropertySignatureDefaults["UnionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeObject: MappedTypeDefaults["UnionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeObject: IndexNumberDefaults["UnionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeObject: IndexStringDefaults["UnionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeObject: IndexSymbolDefaults["UnionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeObject: IndexTemplateLiteralDefaults["UnionType"]["Object"] =
  { fooKey: {} };

const IndexTemplateLiteralUnionTypeString: IndexTemplateLiteralDefaults["UnionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeString: GeneralDefaults["UnionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeString: PropertySignatureDefaults["UnionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeString: MappedTypeDefaults["UnionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeString: IndexNumberDefaults["UnionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeString: IndexStringDefaults["UnionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeString: IndexSymbolDefaults["UnionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeString: IndexTemplateLiteralDefaults["UnionType"]["String"] =
  { fooKey: "two" };

const IndexTemplateLiteralUnionTypeNumber: IndexTemplateLiteralDefaults["UnionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeNumber: GeneralDefaults["UnionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeNumber: PropertySignatureDefaults["UnionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeNumber: MappedTypeDefaults["UnionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeNumber: IndexNumberDefaults["UnionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeNumber: IndexStringDefaults["UnionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeNumber: IndexSymbolDefaults["UnionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeNumber: IndexTemplateLiteralDefaults["UnionType"]["Number"] =
  { fooKey: 2 };

const IndexTemplateLiteralUnionTypeBoolean: IndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeBoolean: GeneralDefaults["UnionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeBoolean: PropertySignatureDefaults["UnionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeBoolean: MappedTypeDefaults["UnionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeBoolean: IndexNumberDefaults["UnionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeBoolean: IndexStringDefaults["UnionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeBoolean: IndexSymbolDefaults["UnionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeBoolean: IndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  { fooKey: true };

const IndexTemplateLiteralUnionTypeAny: IndexTemplateLiteralDefaults["UnionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeAny: GeneralDefaults["UnionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeAny: PropertySignatureDefaults["UnionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeAny: MappedTypeDefaults["UnionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeAny: IndexNumberDefaults["UnionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeAny: IndexStringDefaults["UnionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeAny: IndexSymbolDefaults["UnionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeAny: IndexTemplateLiteralDefaults["UnionType"]["Any"] =
  { fooKey: 2 };

// Change Type Literal From IndexTemplateLiteral - IntersectionType
const IndexTemplateLiteralIntersectionTypeLiteral: IndexTemplateLiteralDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeLiteral: GeneralDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeLiteral: PropertySignatureDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeLiteral: MappedTypeDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeLiteral: IndexNumberDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeLiteral: IndexStringDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeLiteral: IndexSymbolDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeLiteral: IndexTemplateLiteralDefaults["IntersectionType"]["Literal"] =
  { fooKey: 1 };

const IndexTemplateLiteralIntersectionTypeObject: IndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeObject: GeneralDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeObject: PropertySignatureDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeObject: MappedTypeDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeObject: IndexNumberDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeObject: IndexStringDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeObject: IndexSymbolDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeObject: IndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  { fooKey: {} };

const IndexTemplateLiteralIntersectionTypeString: IndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeString: GeneralDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeString: PropertySignatureDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeString: MappedTypeDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeString: IndexNumberDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeString: IndexStringDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeString: IndexSymbolDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeString: IndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  { fooKey: "two" };

const IndexTemplateLiteralIntersectionTypeNumber: IndexTemplateLiteralDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeNumber: GeneralDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeNumber: PropertySignatureDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeNumber: MappedTypeDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeNumber: IndexNumberDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeNumber: IndexStringDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeNumber: IndexSymbolDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeNumber: IndexTemplateLiteralDefaults["IntersectionType"]["Number"] =
  { fooKey: 2 };

const IndexTemplateLiteralIntersectionTypeBoolean: IndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeBoolean: GeneralDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeBoolean: PropertySignatureDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeBoolean: MappedTypeDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeBoolean: IndexNumberDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeBoolean: IndexStringDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeBoolean: IndexSymbolDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeBoolean: IndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  { fooKey: true };

const IndexTemplateLiteralIntersectionTypeAny: IndexTemplateLiteralDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeAny: GeneralDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeAny: PropertySignatureDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeAny: MappedTypeDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeAny: IndexNumberDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeAny: IndexStringDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeAny: IndexSymbolDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeAny: IndexTemplateLiteralDefaults["IntersectionType"]["Any"] =
  { fooKey: 2 };

// Change Type Literal From IndexTemplateLiteral - TypeLiteral
const IndexTemplateLiteralTypeLiteralLiteral: IndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralLiteral: GeneralDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralLiteral: PropertySignatureDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralLiteral: MappedTypeDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralLiteral: IndexNumberDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralLiteral: IndexStringDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralLiteral: IndexSymbolDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralLiteral: IndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  { fooKey: { key: 1 } };

const IndexTemplateLiteralTypeLiteralObject: IndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralObject: GeneralDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralObject: PropertySignatureDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralObject: MappedTypeDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralObject: IndexNumberDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralObject: IndexStringDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralObject: IndexSymbolDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralObject: IndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  { fooKey: { key: {} } };

const IndexTemplateLiteralTypeLiteralString: IndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralString: GeneralDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralString: PropertySignatureDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralString: MappedTypeDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralString: IndexNumberDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralString: IndexStringDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralString: IndexSymbolDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralString: IndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  { fooKey: { key: "two" } };

const IndexTemplateLiteralTypeLiteralNumber: IndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralNumber: GeneralDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralNumber: PropertySignatureDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralNumber: MappedTypeDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralNumber: IndexNumberDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralNumber: IndexStringDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralNumber: IndexSymbolDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralNumber: IndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  { fooKey: { key: 2 } };

const IndexTemplateLiteralTypeLiteralBoolean: IndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralBoolean: PropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralBoolean: MappedTypeDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralBoolean: IndexNumberDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralBoolean: IndexStringDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralBoolean: IndexSymbolDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralBoolean: IndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  { fooKey: { key: true } };

const IndexTemplateLiteralTypeLiteralAny: IndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralAny: GeneralDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralAny: PropertySignatureDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralAny: MappedTypeDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralAny: IndexNumberDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralAny: IndexStringDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralAny: IndexSymbolDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralAny: IndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  { fooKey: { key: 2 } };

// Change Type Literal From IndexTemplateLiteral - TupleType
const IndexTemplateLiteralTupleTypeLiteral: IndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeLiteral: GeneralDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeLiteral: PropertySignatureDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeLiteral: MappedTypeDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeLiteral: IndexNumberDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeLiteral: IndexStringDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeLiteral: IndexSymbolDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeLiteral: IndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  { fooKey: [1] };

const IndexTemplateLiteralTupleTypeObject: IndexTemplateLiteralDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeObject: GeneralDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeObject: PropertySignatureDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeObject: MappedTypeDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeObject: IndexNumberDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeObject: IndexStringDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeObject: IndexSymbolDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeObject: IndexTemplateLiteralDefaults["TupleType"]["Object"] =
  { fooKey: [{}] };

const IndexTemplateLiteralTupleTypeString: IndexTemplateLiteralDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeString: GeneralDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeString: PropertySignatureDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeString: MappedTypeDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeString: IndexNumberDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeString: IndexStringDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeString: IndexSymbolDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeString: IndexTemplateLiteralDefaults["TupleType"]["String"] =
  { fooKey: ["two"] };

const IndexTemplateLiteralTupleTypeNumber: IndexTemplateLiteralDefaults["TupleType"]["Number"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeNumber: GeneralDefaults["TupleType"]["Number"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeNumber: PropertySignatureDefaults["TupleType"]["Number"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeNumber: MappedTypeDefaults["TupleType"]["Number"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeNumber: IndexNumberDefaults["TupleType"]["Number"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeNumber: IndexStringDefaults["TupleType"]["Number"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeNumber: IndexSymbolDefaults["TupleType"]["Number"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeNumber: IndexTemplateLiteralDefaults["TupleType"]["Number"] =
  { fooKey: [2] };

const IndexTemplateLiteralTupleTypeBoolean: IndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeBoolean: GeneralDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeBoolean: PropertySignatureDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeBoolean: MappedTypeDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeBoolean: IndexNumberDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeBoolean: IndexStringDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeBoolean: IndexSymbolDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeBoolean: IndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  { fooKey: [true] };

const IndexTemplateLiteralTupleTypeAny: IndexTemplateLiteralDefaults["TupleType"]["Any"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeAny: GeneralDefaults["TupleType"]["Any"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeAny: PropertySignatureDefaults["TupleType"]["Any"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeAny: MappedTypeDefaults["TupleType"]["Any"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeAny: IndexNumberDefaults["TupleType"]["Any"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeAny: IndexStringDefaults["TupleType"]["Any"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeAny: IndexSymbolDefaults["TupleType"]["Any"] =
  { fooKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeAny: IndexTemplateLiteralDefaults["TupleType"]["Any"] =
  { fooKey: [2] };

// Change Type Literal From IndexTemplateLiteral - ArrayType
const IndexTemplateLiteralArrayTypeLiteral: IndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeLiteral: GeneralDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeLiteral: PropertySignatureDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeLiteral: MappedTypeDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeLiteral: IndexNumberDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeLiteral: IndexStringDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeLiteral: IndexSymbolDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeLiteral: IndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  { fooKey: [1, 1] };

const IndexTemplateLiteralArrayTypeObject: IndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeObject: GeneralDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeObject: PropertySignatureDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeObject: MappedTypeDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeObject: IndexNumberDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeObject: IndexStringDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeObject: IndexSymbolDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeObject: IndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  { fooKey: [{}, {}] };

const IndexTemplateLiteralArrayTypeString: IndexTemplateLiteralDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeString: GeneralDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeString: PropertySignatureDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeString: MappedTypeDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeString: IndexNumberDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeString: IndexStringDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeString: IndexSymbolDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeString: IndexTemplateLiteralDefaults["ArrayType"]["String"] =
  { fooKey: ["two", "two"] };

const IndexTemplateLiteralArrayTypeNumber: IndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeNumber: GeneralDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeNumber: PropertySignatureDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeNumber: MappedTypeDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeNumber: IndexNumberDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeNumber: IndexStringDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeNumber: IndexSymbolDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeNumber: IndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  { fooKey: [2, 2] };

const IndexTemplateLiteralArrayTypeBoolean: IndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeBoolean: GeneralDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeBoolean: PropertySignatureDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeBoolean: MappedTypeDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeBoolean: IndexNumberDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeBoolean: IndexStringDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeBoolean: IndexSymbolDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeBoolean: IndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  { fooKey: [true, true] };

const IndexTemplateLiteralArrayTypeAny: IndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeAny: GeneralDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeAny: PropertySignatureDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeAny: MappedTypeDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeAny: IndexNumberDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeAny: IndexStringDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeAny: IndexSymbolDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeAny: IndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  { fooKey: [2, 2] };

// Change Type Literal From IndexTemplateLiteral - FunctionType
const IndexTemplateLiteralFunctionTypeLiteral: IndexTemplateLiteralDefaults["FunctionType"]["Literal"] =
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

const IndexTemplateLiteralFunctionTypeObject: IndexTemplateLiteralDefaults["FunctionType"]["Object"] =
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

const IndexTemplateLiteralFunctionTypeString: IndexTemplateLiteralDefaults["FunctionType"]["String"] =
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

const IndexTemplateLiteralFunctionTypeNumber: IndexTemplateLiteralDefaults["FunctionType"]["Number"] =
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

const IndexTemplateLiteralFunctionTypeBoolean: IndexTemplateLiteralDefaults["FunctionType"]["Boolean"] =
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

const IndexTemplateLiteralFunctionTypeAny: IndexTemplateLiteralDefaults["FunctionType"]["Any"] =
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

// Change Type Literal From IndexTemplateLiteral - ConstructorType
const IndexTemplateLiteralConstructorTypeLiteral: IndexTemplateLiteralDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeLiteral: GeneralDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeLiteral: PropertySignatureDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeLiteral: MappedTypeDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeLiteral: IndexNumberDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeLiteral: IndexStringDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeLiteral: IndexSymbolDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeLiteral: IndexTemplateLiteralDefaults["ConstructorType"]["Literal"] =
  { fooKey: 1 };

const IndexTemplateLiteralConstructorTypeObject: IndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeObject: GeneralDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeObject: PropertySignatureDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeObject: MappedTypeDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeObject: IndexNumberDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeObject: IndexStringDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeObject: IndexSymbolDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeObject: IndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  { fooKey: {} };

const IndexTemplateLiteralConstructorTypeString: IndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeString: GeneralDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeString: PropertySignatureDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeString: MappedTypeDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeString: IndexNumberDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeString: IndexStringDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeString: IndexSymbolDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeString: IndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  { fooKey: "two" };

const IndexTemplateLiteralConstructorTypeNumber: IndexTemplateLiteralDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeNumber: GeneralDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeNumber: PropertySignatureDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeNumber: MappedTypeDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeNumber: IndexNumberDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeNumber: IndexStringDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeNumber: IndexSymbolDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeNumber: IndexTemplateLiteralDefaults["ConstructorType"]["Number"] =
  { fooKey: 2 };

const IndexTemplateLiteralConstructorTypeBoolean: IndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeBoolean: GeneralDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeBoolean: PropertySignatureDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeBoolean: MappedTypeDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeBoolean: IndexNumberDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeBoolean: IndexStringDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeBoolean: IndexSymbolDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeBoolean: IndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  { fooKey: true };

const IndexTemplateLiteralConstructorTypeAny: IndexTemplateLiteralDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeAny: GeneralDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeAny: PropertySignatureDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeAny: MappedTypeDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeAny: IndexNumberDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeAny: IndexStringDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeAny: IndexSymbolDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeAny: IndexTemplateLiteralDefaults["ConstructorType"]["Any"] =
  { fooKey: 2 };
