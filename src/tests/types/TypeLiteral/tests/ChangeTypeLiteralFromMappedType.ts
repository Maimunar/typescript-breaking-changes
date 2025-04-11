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
 * Change Type Literal from MappedType
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Change Type Literal From MappedType - ParenthesizedType
const MappedTypeParenthesizedTypeLiteral: MappedTypeDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeLiteral: PropertySignatureDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeLiteral: MappedTypeDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeLiteral: IndexNumberDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeLiteral: IndexStringDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeLiteral: IndexSymbolDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeLiteral: IndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] =
  { mappedKey: 1 };

const MappedTypeParenthesizedTypeObject: MappedTypeDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeObject: GeneralDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeObject: PropertySignatureDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeObject: MappedTypeDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeObject: IndexNumberDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeObject: IndexStringDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeObject: IndexSymbolDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeObject: IndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  { mappedKey: {} };

const MappedTypeParenthesizedTypeString: MappedTypeDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeString: GeneralDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeString: PropertySignatureDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeString: MappedTypeDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeString: IndexNumberDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeString: IndexStringDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeString: IndexSymbolDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeString: IndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  { mappedKey: "two" };

const MappedTypeParenthesizedTypeNumber: MappedTypeDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeNumber: GeneralDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeNumber: PropertySignatureDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeNumber: MappedTypeDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeNumber: IndexNumberDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeNumber: IndexStringDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeNumber: IndexSymbolDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeNumber: IndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] =
  { mappedKey: 2 };

const MappedTypeParenthesizedTypeBoolean: MappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeBoolean: PropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeBoolean: MappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeBoolean: IndexNumberDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeBoolean: IndexStringDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeBoolean: IndexSymbolDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeBoolean: IndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  { mappedKey: true };

const MappedTypeParenthesizedTypeAny: MappedTypeDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralParenthesizedTypeAny: GeneralDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeAny: PropertySignatureDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeAny: MappedTypeDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeAny: IndexNumberDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeAny: IndexStringDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeAny: IndexSymbolDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeAny: IndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] =
  { mappedKey: 2 };

// Change Type Literal From MappedType - TypeReferenceBuiltin
const MappedTypeTypeReferenceBuiltinLiteral: MappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  { mappedKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { mappedKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinLiteral: PropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  { mappedKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinLiteral: MappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  { mappedKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinLiteral: IndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] =
  { mappedKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinLiteral: IndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  { mappedKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinLiteral: IndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] =
  { mappedKey: promisify(1) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinLiteral: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  { mappedKey: promisify(1) };

const MappedTypeTypeReferenceBuiltinObject: MappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  { mappedKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] =
  { mappedKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinObject: PropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  { mappedKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinObject: MappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  { mappedKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinObject: IndexNumberDefaults["TypeReferenceBuiltin"]["Object"] =
  { mappedKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinObject: IndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  { mappedKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinObject: IndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] =
  { mappedKey: promisify({}) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinObject: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  { mappedKey: promisify({}) };

const MappedTypeTypeReferenceBuiltinString: MappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  { mappedKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinString: GeneralDefaults["TypeReferenceBuiltin"]["String"] =
  { mappedKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinString: PropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  { mappedKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinString: MappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  { mappedKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinString: IndexNumberDefaults["TypeReferenceBuiltin"]["String"] =
  { mappedKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinString: IndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  { mappedKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinString: IndexSymbolDefaults["TypeReferenceBuiltin"]["String"] =
  { mappedKey: promisify("two") };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinString: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  { mappedKey: promisify("two") };

const MappedTypeTypeReferenceBuiltinNumber: MappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinNumber: PropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinNumber: MappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinNumber: IndexNumberDefaults["TypeReferenceBuiltin"]["Number"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinNumber: IndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinNumber: IndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinNumber: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  { mappedKey: promisify(2) };

const MappedTypeTypeReferenceBuiltinBoolean: MappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { mappedKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { mappedKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinBoolean: PropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { mappedKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinBoolean: MappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { mappedKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinBoolean: IndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { mappedKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinBoolean: IndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { mappedKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinBoolean: IndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { mappedKey: promisify(true) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinBoolean: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  { mappedKey: promisify(true) };

const MappedTypeTypeReferenceBuiltinAny: MappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferenceBuiltinAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinAny: PropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinAny: MappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinAny: IndexNumberDefaults["TypeReferenceBuiltin"]["Any"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinAny: IndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinAny: IndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] =
  { mappedKey: promisify(2) };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinAny: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  { mappedKey: promisify(2) };

// Change Type Literal From MappedType - TypeReferencePredefined
const MappedTypeTypeReferencePredefinedLiteral: MappedTypeDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedLiteral: PropertySignatureDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedLiteral: MappedTypeDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedLiteral: IndexNumberDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedLiteral: IndexStringDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedLiteral: IndexSymbolDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedLiteral: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] =
  { mappedKey: 1 };

const MappedTypeTypeReferencePredefinedObject: MappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedObject: GeneralDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedObject: PropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedObject: MappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedObject: IndexNumberDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedObject: IndexStringDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedObject: IndexSymbolDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedObject: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  { mappedKey: {} };

const MappedTypeTypeReferencePredefinedString: MappedTypeDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedString: GeneralDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedString: PropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedString: MappedTypeDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedString: IndexNumberDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedString: IndexStringDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedString: IndexSymbolDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedString: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  { mappedKey: "two" };

const MappedTypeTypeReferencePredefinedNumber: MappedTypeDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedNumber: PropertySignatureDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedNumber: MappedTypeDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedNumber: IndexNumberDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedNumber: IndexStringDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedNumber: IndexSymbolDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedNumber: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] =
  { mappedKey: 2 };

const MappedTypeTypeReferencePredefinedBoolean: MappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedBoolean: PropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedBoolean: MappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedBoolean: IndexNumberDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedBoolean: IndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedBoolean: IndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedBoolean: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  { mappedKey: true };

const MappedTypeTypeReferencePredefinedAny: MappedTypeDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeReferencePredefinedAny: GeneralDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedAny: PropertySignatureDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedAny: MappedTypeDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedAny: IndexNumberDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedAny: IndexStringDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedAny: IndexSymbolDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedAny: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] =
  { mappedKey: 2 };

// Change Type Literal From MappedType - UnionType
const MappedTypeUnionTypeLiteral: MappedTypeDefaults["UnionType"]["Literal"] = {
  mappedKey: 1,
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeLiteral: GeneralDefaults["UnionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeLiteral: PropertySignatureDefaults["UnionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeLiteral: MappedTypeDefaults["UnionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeLiteral: IndexNumberDefaults["UnionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeLiteral: IndexStringDefaults["UnionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeLiteral: IndexSymbolDefaults["UnionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeLiteral: IndexTemplateLiteralDefaults["UnionType"]["Literal"] =
  { mappedKey: 1 };

const MappedTypeUnionTypeObject: MappedTypeDefaults["UnionType"]["Object"] = {
  mappedKey: {},
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeObject: GeneralDefaults["UnionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeObject: PropertySignatureDefaults["UnionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeObject: MappedTypeDefaults["UnionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeObject: IndexNumberDefaults["UnionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeObject: IndexStringDefaults["UnionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeObject: IndexSymbolDefaults["UnionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeObject: IndexTemplateLiteralDefaults["UnionType"]["Object"] =
  { mappedKey: {} };

const MappedTypeUnionTypeString: MappedTypeDefaults["UnionType"]["String"] = {
  mappedKey: "two",
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeString: GeneralDefaults["UnionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeString: PropertySignatureDefaults["UnionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeString: MappedTypeDefaults["UnionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeString: IndexNumberDefaults["UnionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeString: IndexStringDefaults["UnionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeString: IndexSymbolDefaults["UnionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeString: IndexTemplateLiteralDefaults["UnionType"]["String"] =
  { mappedKey: "two" };

const MappedTypeUnionTypeNumber: MappedTypeDefaults["UnionType"]["Number"] = {
  mappedKey: 2,
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeNumber: GeneralDefaults["UnionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeNumber: PropertySignatureDefaults["UnionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeNumber: MappedTypeDefaults["UnionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeNumber: IndexNumberDefaults["UnionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeNumber: IndexStringDefaults["UnionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeNumber: IndexSymbolDefaults["UnionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeNumber: IndexTemplateLiteralDefaults["UnionType"]["Number"] =
  { mappedKey: 2 };

const MappedTypeUnionTypeBoolean: MappedTypeDefaults["UnionType"]["Boolean"] = {
  mappedKey: true,
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeBoolean: GeneralDefaults["UnionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeBoolean: PropertySignatureDefaults["UnionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeBoolean: MappedTypeDefaults["UnionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeBoolean: IndexNumberDefaults["UnionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeBoolean: IndexStringDefaults["UnionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeBoolean: IndexSymbolDefaults["UnionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeBoolean: IndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  { mappedKey: true };

const MappedTypeUnionTypeAny: MappedTypeDefaults["UnionType"]["Any"] = {
  mappedKey: 2,
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralUnionTypeAny: GeneralDefaults["UnionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeAny: PropertySignatureDefaults["UnionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeAny: MappedTypeDefaults["UnionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeAny: IndexNumberDefaults["UnionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeAny: IndexStringDefaults["UnionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeAny: IndexSymbolDefaults["UnionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeAny: IndexTemplateLiteralDefaults["UnionType"]["Any"] =
  { mappedKey: 2 };

// Change Type Literal From MappedType - IntersectionType
const MappedTypeIntersectionTypeLiteral: MappedTypeDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeLiteral: GeneralDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeLiteral: PropertySignatureDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeLiteral: MappedTypeDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeLiteral: IndexNumberDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeLiteral: IndexStringDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeLiteral: IndexSymbolDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeLiteral: IndexTemplateLiteralDefaults["IntersectionType"]["Literal"] =
  { mappedKey: 1 };

const MappedTypeIntersectionTypeObject: MappedTypeDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeObject: GeneralDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeObject: PropertySignatureDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeObject: MappedTypeDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeObject: IndexNumberDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeObject: IndexStringDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeObject: IndexSymbolDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeObject: IndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  { mappedKey: {} };

const MappedTypeIntersectionTypeString: MappedTypeDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeString: GeneralDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeString: PropertySignatureDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeString: MappedTypeDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeString: IndexNumberDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeString: IndexStringDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeString: IndexSymbolDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeString: IndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  { mappedKey: "two" };

const MappedTypeIntersectionTypeNumber: MappedTypeDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeNumber: GeneralDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeNumber: PropertySignatureDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeNumber: MappedTypeDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeNumber: IndexNumberDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeNumber: IndexStringDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeNumber: IndexSymbolDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeNumber: IndexTemplateLiteralDefaults["IntersectionType"]["Number"] =
  { mappedKey: 2 };

const MappedTypeIntersectionTypeBoolean: MappedTypeDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeBoolean: GeneralDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeBoolean: PropertySignatureDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeBoolean: MappedTypeDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeBoolean: IndexNumberDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeBoolean: IndexStringDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeBoolean: IndexSymbolDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeBoolean: IndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  { mappedKey: true };

const MappedTypeIntersectionTypeAny: MappedTypeDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralIntersectionTypeAny: GeneralDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeAny: PropertySignatureDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeAny: MappedTypeDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeAny: IndexNumberDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeAny: IndexStringDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeAny: IndexSymbolDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeAny: IndexTemplateLiteralDefaults["IntersectionType"]["Any"] =
  { mappedKey: 2 };

// Change Type Literal From MappedType - TypeLiteral
const MappedTypeTypeLiteralLiteral: MappedTypeDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralLiteral: GeneralDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralLiteral: PropertySignatureDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralLiteral: MappedTypeDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralLiteral: IndexNumberDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralLiteral: IndexStringDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralLiteral: IndexSymbolDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralLiteral: IndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  { mappedKey: { key: 1 } };

const MappedTypeTypeLiteralObject: MappedTypeDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralObject: GeneralDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralObject: PropertySignatureDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralObject: MappedTypeDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralObject: IndexNumberDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralObject: IndexStringDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralObject: IndexSymbolDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralObject: IndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  { mappedKey: { key: {} } };

const MappedTypeTypeLiteralString: MappedTypeDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralString: GeneralDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralString: PropertySignatureDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralString: MappedTypeDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralString: IndexNumberDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralString: IndexStringDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralString: IndexSymbolDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralString: IndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  { mappedKey: { key: "two" } };

const MappedTypeTypeLiteralNumber: MappedTypeDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralNumber: GeneralDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralNumber: PropertySignatureDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralNumber: MappedTypeDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralNumber: IndexNumberDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralNumber: IndexStringDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralNumber: IndexSymbolDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralNumber: IndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  { mappedKey: { key: 2 } };

const MappedTypeTypeLiteralBoolean: MappedTypeDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralBoolean: PropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralBoolean: MappedTypeDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralBoolean: IndexNumberDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralBoolean: IndexStringDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralBoolean: IndexSymbolDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralBoolean: IndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  { mappedKey: { key: true } };

const MappedTypeTypeLiteralAny: MappedTypeDefaults["TypeLiteral"]["Any"] = {
  mappedKey: { key: 2 },
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTypeLiteralAny: GeneralDefaults["TypeLiteral"]["Any"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralAny: PropertySignatureDefaults["TypeLiteral"]["Any"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralAny: MappedTypeDefaults["TypeLiteral"]["Any"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralAny: IndexNumberDefaults["TypeLiteral"]["Any"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralAny: IndexStringDefaults["TypeLiteral"]["Any"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralAny: IndexSymbolDefaults["TypeLiteral"]["Any"] =
  { mappedKey: { key: 2 } };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralAny: IndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  { mappedKey: { key: 2 } };

// Change Type Literal From MappedType - TupleType
const MappedTypeTupleTypeLiteral: MappedTypeDefaults["TupleType"]["Literal"] = {
  mappedKey: [1],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeLiteral: GeneralDefaults["TupleType"]["Literal"] =
  { mappedKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeLiteral: PropertySignatureDefaults["TupleType"]["Literal"] =
  { mappedKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeLiteral: MappedTypeDefaults["TupleType"]["Literal"] =
  { mappedKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeLiteral: IndexNumberDefaults["TupleType"]["Literal"] =
  { mappedKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeLiteral: IndexStringDefaults["TupleType"]["Literal"] =
  { mappedKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeLiteral: IndexSymbolDefaults["TupleType"]["Literal"] =
  { mappedKey: [1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeLiteral: IndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  { mappedKey: [1] };

const MappedTypeTupleTypeObject: MappedTypeDefaults["TupleType"]["Object"] = {
  mappedKey: [{}],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeObject: GeneralDefaults["TupleType"]["Object"] =
  { mappedKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeObject: PropertySignatureDefaults["TupleType"]["Object"] =
  { mappedKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeObject: MappedTypeDefaults["TupleType"]["Object"] =
  { mappedKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeObject: IndexNumberDefaults["TupleType"]["Object"] =
  { mappedKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeObject: IndexStringDefaults["TupleType"]["Object"] =
  { mappedKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeObject: IndexSymbolDefaults["TupleType"]["Object"] =
  { mappedKey: [{}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeObject: IndexTemplateLiteralDefaults["TupleType"]["Object"] =
  { mappedKey: [{}] };

const MappedTypeTupleTypeString: MappedTypeDefaults["TupleType"]["String"] = {
  mappedKey: ["two"],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeString: GeneralDefaults["TupleType"]["String"] =
  { mappedKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeString: PropertySignatureDefaults["TupleType"]["String"] =
  { mappedKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeString: MappedTypeDefaults["TupleType"]["String"] =
  { mappedKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeString: IndexNumberDefaults["TupleType"]["String"] =
  { mappedKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeString: IndexStringDefaults["TupleType"]["String"] =
  { mappedKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeString: IndexSymbolDefaults["TupleType"]["String"] =
  { mappedKey: ["two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeString: IndexTemplateLiteralDefaults["TupleType"]["String"] =
  { mappedKey: ["two"] };

const MappedTypeTupleTypeNumber: MappedTypeDefaults["TupleType"]["Number"] = {
  mappedKey: [2],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeNumber: GeneralDefaults["TupleType"]["Number"] =
  { mappedKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeNumber: PropertySignatureDefaults["TupleType"]["Number"] =
  { mappedKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeNumber: MappedTypeDefaults["TupleType"]["Number"] =
  { mappedKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeNumber: IndexNumberDefaults["TupleType"]["Number"] =
  { mappedKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeNumber: IndexStringDefaults["TupleType"]["Number"] =
  { mappedKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeNumber: IndexSymbolDefaults["TupleType"]["Number"] =
  { mappedKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeNumber: IndexTemplateLiteralDefaults["TupleType"]["Number"] =
  { mappedKey: [2] };

const MappedTypeTupleTypeBoolean: MappedTypeDefaults["TupleType"]["Boolean"] = {
  mappedKey: [true],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeBoolean: GeneralDefaults["TupleType"]["Boolean"] =
  { mappedKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeBoolean: PropertySignatureDefaults["TupleType"]["Boolean"] =
  { mappedKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeBoolean: MappedTypeDefaults["TupleType"]["Boolean"] =
  { mappedKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeBoolean: IndexNumberDefaults["TupleType"]["Boolean"] =
  { mappedKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeBoolean: IndexStringDefaults["TupleType"]["Boolean"] =
  { mappedKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeBoolean: IndexSymbolDefaults["TupleType"]["Boolean"] =
  { mappedKey: [true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeBoolean: IndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  { mappedKey: [true] };

const MappedTypeTupleTypeAny: MappedTypeDefaults["TupleType"]["Any"] = {
  mappedKey: [2],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralTupleTypeAny: GeneralDefaults["TupleType"]["Any"] =
  { mappedKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeAny: PropertySignatureDefaults["TupleType"]["Any"] =
  { mappedKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeAny: MappedTypeDefaults["TupleType"]["Any"] =
  { mappedKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeAny: IndexNumberDefaults["TupleType"]["Any"] =
  { mappedKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeAny: IndexStringDefaults["TupleType"]["Any"] =
  { mappedKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeAny: IndexSymbolDefaults["TupleType"]["Any"] =
  { mappedKey: [2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeAny: IndexTemplateLiteralDefaults["TupleType"]["Any"] =
  { mappedKey: [2] };

// Change Type Literal From MappedType - ArrayType
const MappedTypeArrayTypeLiteral: MappedTypeDefaults["ArrayType"]["Literal"] = {
  mappedKey: [1, 1],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeLiteral: GeneralDefaults["ArrayType"]["Literal"] =
  { mappedKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeLiteral: PropertySignatureDefaults["ArrayType"]["Literal"] =
  { mappedKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeLiteral: MappedTypeDefaults["ArrayType"]["Literal"] =
  { mappedKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeLiteral: IndexNumberDefaults["ArrayType"]["Literal"] =
  { mappedKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeLiteral: IndexStringDefaults["ArrayType"]["Literal"] =
  { mappedKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeLiteral: IndexSymbolDefaults["ArrayType"]["Literal"] =
  { mappedKey: [1, 1] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeLiteral: IndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  { mappedKey: [1, 1] };

const MappedTypeArrayTypeObject: MappedTypeDefaults["ArrayType"]["Object"] = {
  mappedKey: [{}, {}],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeObject: GeneralDefaults["ArrayType"]["Object"] =
  { mappedKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeObject: PropertySignatureDefaults["ArrayType"]["Object"] =
  { mappedKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeObject: MappedTypeDefaults["ArrayType"]["Object"] =
  { mappedKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeObject: IndexNumberDefaults["ArrayType"]["Object"] =
  { mappedKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeObject: IndexStringDefaults["ArrayType"]["Object"] =
  { mappedKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeObject: IndexSymbolDefaults["ArrayType"]["Object"] =
  { mappedKey: [{}, {}] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeObject: IndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  { mappedKey: [{}, {}] };

const MappedTypeArrayTypeString: MappedTypeDefaults["ArrayType"]["String"] = {
  mappedKey: ["two", "two"],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeString: GeneralDefaults["ArrayType"]["String"] =
  { mappedKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeString: PropertySignatureDefaults["ArrayType"]["String"] =
  { mappedKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeString: MappedTypeDefaults["ArrayType"]["String"] =
  { mappedKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeString: IndexNumberDefaults["ArrayType"]["String"] =
  { mappedKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeString: IndexStringDefaults["ArrayType"]["String"] =
  { mappedKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeString: IndexSymbolDefaults["ArrayType"]["String"] =
  { mappedKey: ["two", "two"] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeString: IndexTemplateLiteralDefaults["ArrayType"]["String"] =
  { mappedKey: ["two", "two"] };

const MappedTypeArrayTypeNumber: MappedTypeDefaults["ArrayType"]["Number"] = {
  mappedKey: [2, 2],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeNumber: GeneralDefaults["ArrayType"]["Number"] =
  { mappedKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeNumber: PropertySignatureDefaults["ArrayType"]["Number"] =
  { mappedKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeNumber: MappedTypeDefaults["ArrayType"]["Number"] =
  { mappedKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeNumber: IndexNumberDefaults["ArrayType"]["Number"] =
  { mappedKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeNumber: IndexStringDefaults["ArrayType"]["Number"] =
  { mappedKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeNumber: IndexSymbolDefaults["ArrayType"]["Number"] =
  { mappedKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeNumber: IndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  { mappedKey: [2, 2] };

const MappedTypeArrayTypeBoolean: MappedTypeDefaults["ArrayType"]["Boolean"] = {
  mappedKey: [true, true],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeBoolean: GeneralDefaults["ArrayType"]["Boolean"] =
  { mappedKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeBoolean: PropertySignatureDefaults["ArrayType"]["Boolean"] =
  { mappedKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeBoolean: MappedTypeDefaults["ArrayType"]["Boolean"] =
  { mappedKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeBoolean: IndexNumberDefaults["ArrayType"]["Boolean"] =
  { mappedKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeBoolean: IndexStringDefaults["ArrayType"]["Boolean"] =
  { mappedKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeBoolean: IndexSymbolDefaults["ArrayType"]["Boolean"] =
  { mappedKey: [true, true] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeBoolean: IndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  { mappedKey: [true, true] };

const MappedTypeArrayTypeAny: MappedTypeDefaults["ArrayType"]["Any"] = {
  mappedKey: [2, 2],
};
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralArrayTypeAny: GeneralDefaults["ArrayType"]["Any"] =
  { mappedKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeAny: PropertySignatureDefaults["ArrayType"]["Any"] =
  { mappedKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeAny: MappedTypeDefaults["ArrayType"]["Any"] =
  { mappedKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeAny: IndexNumberDefaults["ArrayType"]["Any"] =
  { mappedKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeAny: IndexStringDefaults["ArrayType"]["Any"] =
  { mappedKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeAny: IndexSymbolDefaults["ArrayType"]["Any"] =
  { mappedKey: [2, 2] };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeAny: IndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  { mappedKey: [2, 2] };

// Change Type Literal From MappedType - FunctionType
const MappedTypeFunctionTypeLiteral: MappedTypeDefaults["FunctionType"]["Literal"] =
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

const MappedTypeFunctionTypeObject: MappedTypeDefaults["FunctionType"]["Object"] =
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

const MappedTypeFunctionTypeString: MappedTypeDefaults["FunctionType"]["String"] =
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

const MappedTypeFunctionTypeNumber: MappedTypeDefaults["FunctionType"]["Number"] =
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

const MappedTypeFunctionTypeBoolean: MappedTypeDefaults["FunctionType"]["Boolean"] =
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

const MappedTypeFunctionTypeAny: MappedTypeDefaults["FunctionType"]["Any"] = {};
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

// Change Type Literal From MappedType - ConstructorType
const MappedTypeConstructorTypeLiteral: MappedTypeDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeLiteral: GeneralDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeLiteral: PropertySignatureDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeLiteral: MappedTypeDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeLiteral: IndexNumberDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeLiteral: IndexStringDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeLiteral: IndexSymbolDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeLiteral: IndexTemplateLiteralDefaults["ConstructorType"]["Literal"] =
  { mappedKey: 1 };

const MappedTypeConstructorTypeObject: MappedTypeDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeObject: GeneralDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeObject: PropertySignatureDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeObject: MappedTypeDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeObject: IndexNumberDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeObject: IndexStringDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeObject: IndexSymbolDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeObject: IndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  { mappedKey: {} };

const MappedTypeConstructorTypeString: MappedTypeDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeString: GeneralDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeString: PropertySignatureDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeString: MappedTypeDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeString: IndexNumberDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeString: IndexStringDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeString: IndexSymbolDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeString: IndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  { mappedKey: "two" };

const MappedTypeConstructorTypeNumber: MappedTypeDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeNumber: GeneralDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeNumber: PropertySignatureDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeNumber: MappedTypeDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeNumber: IndexNumberDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeNumber: IndexStringDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeNumber: IndexSymbolDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeNumber: IndexTemplateLiteralDefaults["ConstructorType"]["Number"] =
  { mappedKey: 2 };

const MappedTypeConstructorTypeBoolean: MappedTypeDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeBoolean: GeneralDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeBoolean: PropertySignatureDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeBoolean: MappedTypeDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeBoolean: IndexNumberDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeBoolean: IndexStringDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeBoolean: IndexSymbolDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeBoolean: IndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  { mappedKey: true };

const MappedTypeConstructorTypeAny: MappedTypeDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteralConstructorTypeAny: GeneralDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeAny: PropertySignatureDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeAny: MappedTypeDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeAny: IndexNumberDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeAny: IndexStringDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeAny: IndexSymbolDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeAny: IndexTemplateLiteralDefaults["ConstructorType"]["Any"] =
  { mappedKey: 2 };
