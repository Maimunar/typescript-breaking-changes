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
 * Change Type Literal from NoTypeLiteral
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Change Type Literal From NoTypeLiteral - ParenthesizedType
const NoTypeLiteralParenthesizedTypeLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeLiteral: PropertySignatureDefaults["ParenthesizedType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeLiteral: MappedTypeDefaults["ParenthesizedType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeLiteral: IndexNumberDefaults["ParenthesizedType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeLiteral: IndexStringDefaults["ParenthesizedType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeLiteral: IndexSymbolDefaults["ParenthesizedType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeLiteral: IndexTemplateLiteralDefaults["ParenthesizedType"]["Literal"] = 1;

const NoTypeLiteralParenthesizedTypeObject: GeneralDefaults["ParenthesizedType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeObject: PropertySignatureDefaults["ParenthesizedType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeObject: MappedTypeDefaults["ParenthesizedType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeObject: IndexNumberDefaults["ParenthesizedType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeObject: IndexStringDefaults["ParenthesizedType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeObject: IndexSymbolDefaults["ParenthesizedType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeObject: IndexTemplateLiteralDefaults["ParenthesizedType"]["Object"] =
  {};

const NoTypeLiteralParenthesizedTypeString: GeneralDefaults["ParenthesizedType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeString: PropertySignatureDefaults["ParenthesizedType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeString: MappedTypeDefaults["ParenthesizedType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeString: IndexNumberDefaults["ParenthesizedType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeString: IndexStringDefaults["ParenthesizedType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeString: IndexSymbolDefaults["ParenthesizedType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeString: IndexTemplateLiteralDefaults["ParenthesizedType"]["String"] =
  "two";

const NoTypeLiteralParenthesizedTypeNumber: GeneralDefaults["ParenthesizedType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeNumber: PropertySignatureDefaults["ParenthesizedType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeNumber: MappedTypeDefaults["ParenthesizedType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeNumber: IndexNumberDefaults["ParenthesizedType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeNumber: IndexStringDefaults["ParenthesizedType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeNumber: IndexSymbolDefaults["ParenthesizedType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeNumber: IndexTemplateLiteralDefaults["ParenthesizedType"]["Number"] = 2;

const NoTypeLiteralParenthesizedTypeBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeBoolean: PropertySignatureDefaults["ParenthesizedType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeBoolean: MappedTypeDefaults["ParenthesizedType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeBoolean: IndexNumberDefaults["ParenthesizedType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeBoolean: IndexStringDefaults["ParenthesizedType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeBoolean: IndexSymbolDefaults["ParenthesizedType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeBoolean: IndexTemplateLiteralDefaults["ParenthesizedType"]["Boolean"] =
  true;

const NoTypeLiteralParenthesizedTypeAny: GeneralDefaults["ParenthesizedType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureParenthesizedTypeAny: PropertySignatureDefaults["ParenthesizedType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeParenthesizedTypeAny: MappedTypeDefaults["ParenthesizedType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberParenthesizedTypeAny: IndexNumberDefaults["ParenthesizedType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringParenthesizedTypeAny: IndexStringDefaults["ParenthesizedType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolParenthesizedTypeAny: IndexSymbolDefaults["ParenthesizedType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralParenthesizedTypeAny: IndexTemplateLiteralDefaults["ParenthesizedType"]["Any"] = 2;

// Change Type Literal From NoTypeLiteral - TypeReferenceBuiltin
const NoTypeLiteralTypeReferenceBuiltinLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(1);
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinLiteral: PropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(1);
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinLiteral: MappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(1);
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinLiteral: IndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(1);
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinLiteral: IndexStringDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(1);
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinLiteral: IndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(1);
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinLiteral: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(1);

const NoTypeLiteralTypeReferenceBuiltinObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({});
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinObject: PropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({});
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinObject: MappedTypeDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({});
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinObject: IndexNumberDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({});
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinObject: IndexStringDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({});
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinObject: IndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({});
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinObject: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify({});

const NoTypeLiteralTypeReferenceBuiltinString: GeneralDefaults["TypeReferenceBuiltin"]["String"] =
  promisify("two");
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinString: PropertySignatureDefaults["TypeReferenceBuiltin"]["String"] =
  promisify("two");
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinString: MappedTypeDefaults["TypeReferenceBuiltin"]["String"] =
  promisify("two");
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinString: IndexNumberDefaults["TypeReferenceBuiltin"]["String"] =
  promisify("two");
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinString: IndexStringDefaults["TypeReferenceBuiltin"]["String"] =
  promisify("two");
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinString: IndexSymbolDefaults["TypeReferenceBuiltin"]["String"] =
  promisify("two");
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinString: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["String"] =
  promisify("two");

const NoTypeLiteralTypeReferenceBuiltinNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(2);
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinNumber: PropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(2);
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinNumber: MappedTypeDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(2);
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinNumber: IndexNumberDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(2);
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinNumber: IndexStringDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(2);
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinNumber: IndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(2);
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinNumber: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(2);

const NoTypeLiteralTypeReferenceBuiltinBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(true);
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinBoolean: PropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(true);
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinBoolean: MappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(true);
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinBoolean: IndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(true);
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinBoolean: IndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(true);
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinBoolean: IndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(true);
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinBoolean: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(true);

const NoTypeLiteralTypeReferenceBuiltinAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(2);
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferenceBuiltinAny: PropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(2);
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferenceBuiltinAny: MappedTypeDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(2);
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferenceBuiltinAny: IndexNumberDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(2);
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferenceBuiltinAny: IndexStringDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(2);
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferenceBuiltinAny: IndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(2);
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferenceBuiltinAny: IndexTemplateLiteralDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(2);

// Change Type Literal From NoTypeLiteral - TypeReferencePredefined
const NoTypeLiteralTypeReferencePredefinedLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedLiteral: PropertySignatureDefaults["TypeReferencePredefined"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedLiteral: MappedTypeDefaults["TypeReferencePredefined"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedLiteral: IndexNumberDefaults["TypeReferencePredefined"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedLiteral: IndexStringDefaults["TypeReferencePredefined"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedLiteral: IndexSymbolDefaults["TypeReferencePredefined"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedLiteral: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Literal"] = 1;

const NoTypeLiteralTypeReferencePredefinedObject: GeneralDefaults["TypeReferencePredefined"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedObject: PropertySignatureDefaults["TypeReferencePredefined"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedObject: MappedTypeDefaults["TypeReferencePredefined"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedObject: IndexNumberDefaults["TypeReferencePredefined"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedObject: IndexStringDefaults["TypeReferencePredefined"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedObject: IndexSymbolDefaults["TypeReferencePredefined"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedObject: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Object"] =
  {};

const NoTypeLiteralTypeReferencePredefinedString: GeneralDefaults["TypeReferencePredefined"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedString: PropertySignatureDefaults["TypeReferencePredefined"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedString: MappedTypeDefaults["TypeReferencePredefined"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedString: IndexNumberDefaults["TypeReferencePredefined"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedString: IndexStringDefaults["TypeReferencePredefined"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedString: IndexSymbolDefaults["TypeReferencePredefined"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedString: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["String"] =
  "two";

const NoTypeLiteralTypeReferencePredefinedNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedNumber: PropertySignatureDefaults["TypeReferencePredefined"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedNumber: MappedTypeDefaults["TypeReferencePredefined"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedNumber: IndexNumberDefaults["TypeReferencePredefined"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedNumber: IndexStringDefaults["TypeReferencePredefined"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedNumber: IndexSymbolDefaults["TypeReferencePredefined"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedNumber: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Number"] = 2;

const NoTypeLiteralTypeReferencePredefinedBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedBoolean: PropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedBoolean: MappedTypeDefaults["TypeReferencePredefined"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedBoolean: IndexNumberDefaults["TypeReferencePredefined"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedBoolean: IndexStringDefaults["TypeReferencePredefined"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedBoolean: IndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedBoolean: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Boolean"] =
  true;

const NoTypeLiteralTypeReferencePredefinedAny: GeneralDefaults["TypeReferencePredefined"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeReferencePredefinedAny: PropertySignatureDefaults["TypeReferencePredefined"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeReferencePredefinedAny: MappedTypeDefaults["TypeReferencePredefined"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeReferencePredefinedAny: IndexNumberDefaults["TypeReferencePredefined"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeReferencePredefinedAny: IndexStringDefaults["TypeReferencePredefined"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeReferencePredefinedAny: IndexSymbolDefaults["TypeReferencePredefined"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeReferencePredefinedAny: IndexTemplateLiteralDefaults["TypeReferencePredefined"]["Any"] = 2;

// Change Type Literal From NoTypeLiteral - UnionType
const NoTypeLiteralUnionTypeLiteral: GeneralDefaults["UnionType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeLiteral: PropertySignatureDefaults["UnionType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeLiteral: MappedTypeDefaults["UnionType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeLiteral: IndexNumberDefaults["UnionType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeLiteral: IndexStringDefaults["UnionType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeLiteral: IndexSymbolDefaults["UnionType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeLiteral: IndexTemplateLiteralDefaults["UnionType"]["Literal"] = 1;

const NoTypeLiteralUnionTypeObject: GeneralDefaults["UnionType"]["Object"] = {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeObject: PropertySignatureDefaults["UnionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeObject: MappedTypeDefaults["UnionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeObject: IndexNumberDefaults["UnionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeObject: IndexStringDefaults["UnionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeObject: IndexSymbolDefaults["UnionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeObject: IndexTemplateLiteralDefaults["UnionType"]["Object"] =
  {};

const NoTypeLiteralUnionTypeString: GeneralDefaults["UnionType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeString: PropertySignatureDefaults["UnionType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeString: MappedTypeDefaults["UnionType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeString: IndexNumberDefaults["UnionType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeString: IndexStringDefaults["UnionType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeString: IndexSymbolDefaults["UnionType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeString: IndexTemplateLiteralDefaults["UnionType"]["String"] =
  "two";

const NoTypeLiteralUnionTypeNumber: GeneralDefaults["UnionType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeNumber: PropertySignatureDefaults["UnionType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeNumber: MappedTypeDefaults["UnionType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeNumber: IndexNumberDefaults["UnionType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeNumber: IndexStringDefaults["UnionType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeNumber: IndexSymbolDefaults["UnionType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeNumber: IndexTemplateLiteralDefaults["UnionType"]["Number"] = 2;

const NoTypeLiteralUnionTypeBoolean: GeneralDefaults["UnionType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeBoolean: PropertySignatureDefaults["UnionType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeBoolean: MappedTypeDefaults["UnionType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeBoolean: IndexNumberDefaults["UnionType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeBoolean: IndexStringDefaults["UnionType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeBoolean: IndexSymbolDefaults["UnionType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeBoolean: IndexTemplateLiteralDefaults["UnionType"]["Boolean"] =
  true;

const NoTypeLiteralUnionTypeAny: GeneralDefaults["UnionType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureUnionTypeAny: PropertySignatureDefaults["UnionType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeUnionTypeAny: MappedTypeDefaults["UnionType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberUnionTypeAny: IndexNumberDefaults["UnionType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringUnionTypeAny: IndexStringDefaults["UnionType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolUnionTypeAny: IndexSymbolDefaults["UnionType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralUnionTypeAny: IndexTemplateLiteralDefaults["UnionType"]["Any"] = 2;

// Change Type Literal From NoTypeLiteral - IntersectionType
const NoTypeLiteralIntersectionTypeLiteral: GeneralDefaults["IntersectionType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeLiteral: PropertySignatureDefaults["IntersectionType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeLiteral: MappedTypeDefaults["IntersectionType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeLiteral: IndexNumberDefaults["IntersectionType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeLiteral: IndexStringDefaults["IntersectionType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeLiteral: IndexSymbolDefaults["IntersectionType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeLiteral: IndexTemplateLiteralDefaults["IntersectionType"]["Literal"] = 1;

const NoTypeLiteralIntersectionTypeObject: GeneralDefaults["IntersectionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeObject: PropertySignatureDefaults["IntersectionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeObject: MappedTypeDefaults["IntersectionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeObject: IndexNumberDefaults["IntersectionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeObject: IndexStringDefaults["IntersectionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeObject: IndexSymbolDefaults["IntersectionType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeObject: IndexTemplateLiteralDefaults["IntersectionType"]["Object"] =
  {};

const NoTypeLiteralIntersectionTypeString: GeneralDefaults["IntersectionType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeString: PropertySignatureDefaults["IntersectionType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeString: MappedTypeDefaults["IntersectionType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeString: IndexNumberDefaults["IntersectionType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeString: IndexStringDefaults["IntersectionType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeString: IndexSymbolDefaults["IntersectionType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeString: IndexTemplateLiteralDefaults["IntersectionType"]["String"] =
  "two";

const NoTypeLiteralIntersectionTypeNumber: GeneralDefaults["IntersectionType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeNumber: PropertySignatureDefaults["IntersectionType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeNumber: MappedTypeDefaults["IntersectionType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeNumber: IndexNumberDefaults["IntersectionType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeNumber: IndexStringDefaults["IntersectionType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeNumber: IndexSymbolDefaults["IntersectionType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeNumber: IndexTemplateLiteralDefaults["IntersectionType"]["Number"] = 2;

const NoTypeLiteralIntersectionTypeBoolean: GeneralDefaults["IntersectionType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeBoolean: PropertySignatureDefaults["IntersectionType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeBoolean: MappedTypeDefaults["IntersectionType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeBoolean: IndexNumberDefaults["IntersectionType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeBoolean: IndexStringDefaults["IntersectionType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeBoolean: IndexSymbolDefaults["IntersectionType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeBoolean: IndexTemplateLiteralDefaults["IntersectionType"]["Boolean"] =
  true;

const NoTypeLiteralIntersectionTypeAny: GeneralDefaults["IntersectionType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureIntersectionTypeAny: PropertySignatureDefaults["IntersectionType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeIntersectionTypeAny: MappedTypeDefaults["IntersectionType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberIntersectionTypeAny: IndexNumberDefaults["IntersectionType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringIntersectionTypeAny: IndexStringDefaults["IntersectionType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolIntersectionTypeAny: IndexSymbolDefaults["IntersectionType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralIntersectionTypeAny: IndexTemplateLiteralDefaults["IntersectionType"]["Any"] = 2;

// Change Type Literal From NoTypeLiteral - TypeLiteral
const NoTypeLiteralTypeLiteralLiteral: GeneralDefaults["TypeLiteral"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralLiteral: PropertySignatureDefaults["TypeLiteral"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralLiteral: MappedTypeDefaults["TypeLiteral"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralLiteral: IndexNumberDefaults["TypeLiteral"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralLiteral: IndexStringDefaults["TypeLiteral"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralLiteral: IndexSymbolDefaults["TypeLiteral"]["Literal"] =
  { key: 1 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralLiteral: IndexTemplateLiteralDefaults["TypeLiteral"]["Literal"] =
  { key: 1 };

const NoTypeLiteralTypeLiteralObject: GeneralDefaults["TypeLiteral"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralObject: PropertySignatureDefaults["TypeLiteral"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralObject: MappedTypeDefaults["TypeLiteral"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralObject: IndexNumberDefaults["TypeLiteral"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralObject: IndexStringDefaults["TypeLiteral"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralObject: IndexSymbolDefaults["TypeLiteral"]["Object"] =
  { key: {} };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralObject: IndexTemplateLiteralDefaults["TypeLiteral"]["Object"] =
  { key: {} };

const NoTypeLiteralTypeLiteralString: GeneralDefaults["TypeLiteral"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralString: PropertySignatureDefaults["TypeLiteral"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralString: MappedTypeDefaults["TypeLiteral"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralString: IndexNumberDefaults["TypeLiteral"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralString: IndexStringDefaults["TypeLiteral"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralString: IndexSymbolDefaults["TypeLiteral"]["String"] =
  { key: "two" };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralString: IndexTemplateLiteralDefaults["TypeLiteral"]["String"] =
  { key: "two" };

const NoTypeLiteralTypeLiteralNumber: GeneralDefaults["TypeLiteral"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralNumber: PropertySignatureDefaults["TypeLiteral"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralNumber: MappedTypeDefaults["TypeLiteral"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralNumber: IndexNumberDefaults["TypeLiteral"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralNumber: IndexStringDefaults["TypeLiteral"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralNumber: IndexSymbolDefaults["TypeLiteral"]["Number"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralNumber: IndexTemplateLiteralDefaults["TypeLiteral"]["Number"] =
  { key: 2 };

const NoTypeLiteralTypeLiteralBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralBoolean: PropertySignatureDefaults["TypeLiteral"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralBoolean: MappedTypeDefaults["TypeLiteral"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralBoolean: IndexNumberDefaults["TypeLiteral"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralBoolean: IndexStringDefaults["TypeLiteral"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralBoolean: IndexSymbolDefaults["TypeLiteral"]["Boolean"] =
  { key: true };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralBoolean: IndexTemplateLiteralDefaults["TypeLiteral"]["Boolean"] =
  { key: true };

const NoTypeLiteralTypeLiteralAny: GeneralDefaults["TypeLiteral"]["Any"] = {
  key: 2,
};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTypeLiteralAny: PropertySignatureDefaults["TypeLiteral"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTypeLiteralAny: MappedTypeDefaults["TypeLiteral"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTypeLiteralAny: IndexNumberDefaults["TypeLiteral"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTypeLiteralAny: IndexStringDefaults["TypeLiteral"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTypeLiteralAny: IndexSymbolDefaults["TypeLiteral"]["Any"] =
  { key: 2 };
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTypeLiteralAny: IndexTemplateLiteralDefaults["TypeLiteral"]["Any"] =
  { key: 2 };

// Change Type Literal From NoTypeLiteral - TupleType
const NoTypeLiteralTupleTypeLiteral: GeneralDefaults["TupleType"]["Literal"] = [
  1,
];
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeLiteral: PropertySignatureDefaults["TupleType"]["Literal"] =
  [1];
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeLiteral: MappedTypeDefaults["TupleType"]["Literal"] =
  [1];
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeLiteral: IndexNumberDefaults["TupleType"]["Literal"] =
  [1];
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeLiteral: IndexStringDefaults["TupleType"]["Literal"] =
  [1];
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeLiteral: IndexSymbolDefaults["TupleType"]["Literal"] =
  [1];
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeLiteral: IndexTemplateLiteralDefaults["TupleType"]["Literal"] =
  [1];

const NoTypeLiteralTupleTypeObject: GeneralDefaults["TupleType"]["Object"] = [
  {},
];
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeObject: PropertySignatureDefaults["TupleType"]["Object"] =
  [{}];
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeObject: MappedTypeDefaults["TupleType"]["Object"] =
  [{}];
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeObject: IndexNumberDefaults["TupleType"]["Object"] =
  [{}];
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeObject: IndexStringDefaults["TupleType"]["Object"] =
  [{}];
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeObject: IndexSymbolDefaults["TupleType"]["Object"] =
  [{}];
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeObject: IndexTemplateLiteralDefaults["TupleType"]["Object"] =
  [{}];

const NoTypeLiteralTupleTypeString: GeneralDefaults["TupleType"]["String"] = [
  "two",
];
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeString: PropertySignatureDefaults["TupleType"]["String"] =
  ["two"];
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeString: MappedTypeDefaults["TupleType"]["String"] =
  ["two"];
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeString: IndexNumberDefaults["TupleType"]["String"] =
  ["two"];
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeString: IndexStringDefaults["TupleType"]["String"] =
  ["two"];
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeString: IndexSymbolDefaults["TupleType"]["String"] =
  ["two"];
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeString: IndexTemplateLiteralDefaults["TupleType"]["String"] =
  ["two"];

const NoTypeLiteralTupleTypeNumber: GeneralDefaults["TupleType"]["Number"] = [
  2,
];
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeNumber: PropertySignatureDefaults["TupleType"]["Number"] =
  [2];
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeNumber: MappedTypeDefaults["TupleType"]["Number"] =
  [2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeNumber: IndexNumberDefaults["TupleType"]["Number"] =
  [2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeNumber: IndexStringDefaults["TupleType"]["Number"] =
  [2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeNumber: IndexSymbolDefaults["TupleType"]["Number"] =
  [2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeNumber: IndexTemplateLiteralDefaults["TupleType"]["Number"] =
  [2];

const NoTypeLiteralTupleTypeBoolean: GeneralDefaults["TupleType"]["Boolean"] = [
  true,
];
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeBoolean: PropertySignatureDefaults["TupleType"]["Boolean"] =
  [true];
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeBoolean: MappedTypeDefaults["TupleType"]["Boolean"] =
  [true];
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeBoolean: IndexNumberDefaults["TupleType"]["Boolean"] =
  [true];
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeBoolean: IndexStringDefaults["TupleType"]["Boolean"] =
  [true];
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeBoolean: IndexSymbolDefaults["TupleType"]["Boolean"] =
  [true];
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeBoolean: IndexTemplateLiteralDefaults["TupleType"]["Boolean"] =
  [true];

const NoTypeLiteralTupleTypeAny: GeneralDefaults["TupleType"]["Any"] = [2];
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureTupleTypeAny: PropertySignatureDefaults["TupleType"]["Any"] =
  [2];
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeTupleTypeAny: MappedTypeDefaults["TupleType"]["Any"] =
  [2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberTupleTypeAny: IndexNumberDefaults["TupleType"]["Any"] =
  [2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringTupleTypeAny: IndexStringDefaults["TupleType"]["Any"] =
  [2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolTupleTypeAny: IndexSymbolDefaults["TupleType"]["Any"] =
  [2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralTupleTypeAny: IndexTemplateLiteralDefaults["TupleType"]["Any"] =
  [2];

// Change Type Literal From NoTypeLiteral - ArrayType
const NoTypeLiteralArrayTypeLiteral: GeneralDefaults["ArrayType"]["Literal"] = [
  1, 1,
];
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeLiteral: PropertySignatureDefaults["ArrayType"]["Literal"] =
  [1, 1];
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeLiteral: MappedTypeDefaults["ArrayType"]["Literal"] =
  [1, 1];
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeLiteral: IndexNumberDefaults["ArrayType"]["Literal"] =
  [1, 1];
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeLiteral: IndexStringDefaults["ArrayType"]["Literal"] =
  [1, 1];
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeLiteral: IndexSymbolDefaults["ArrayType"]["Literal"] =
  [1, 1];
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeLiteral: IndexTemplateLiteralDefaults["ArrayType"]["Literal"] =
  [1, 1];

const NoTypeLiteralArrayTypeObject: GeneralDefaults["ArrayType"]["Object"] = [
  {},
  {},
];
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeObject: PropertySignatureDefaults["ArrayType"]["Object"] =
  [{}, {}];
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeObject: MappedTypeDefaults["ArrayType"]["Object"] =
  [{}, {}];
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeObject: IndexNumberDefaults["ArrayType"]["Object"] =
  [{}, {}];
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeObject: IndexStringDefaults["ArrayType"]["Object"] =
  [{}, {}];
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeObject: IndexSymbolDefaults["ArrayType"]["Object"] =
  [{}, {}];
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeObject: IndexTemplateLiteralDefaults["ArrayType"]["Object"] =
  [{}, {}];

const NoTypeLiteralArrayTypeString: GeneralDefaults["ArrayType"]["String"] = [
  "two",
  "two",
];
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeString: PropertySignatureDefaults["ArrayType"]["String"] =
  ["two", "two"];
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeString: MappedTypeDefaults["ArrayType"]["String"] =
  ["two", "two"];
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeString: IndexNumberDefaults["ArrayType"]["String"] =
  ["two", "two"];
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeString: IndexStringDefaults["ArrayType"]["String"] =
  ["two", "two"];
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeString: IndexSymbolDefaults["ArrayType"]["String"] =
  ["two", "two"];
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeString: IndexTemplateLiteralDefaults["ArrayType"]["String"] =
  ["two", "two"];

const NoTypeLiteralArrayTypeNumber: GeneralDefaults["ArrayType"]["Number"] = [
  2, 2,
];
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeNumber: PropertySignatureDefaults["ArrayType"]["Number"] =
  [2, 2];
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeNumber: MappedTypeDefaults["ArrayType"]["Number"] =
  [2, 2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeNumber: IndexNumberDefaults["ArrayType"]["Number"] =
  [2, 2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeNumber: IndexStringDefaults["ArrayType"]["Number"] =
  [2, 2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeNumber: IndexSymbolDefaults["ArrayType"]["Number"] =
  [2, 2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeNumber: IndexTemplateLiteralDefaults["ArrayType"]["Number"] =
  [2, 2];

const NoTypeLiteralArrayTypeBoolean: GeneralDefaults["ArrayType"]["Boolean"] = [
  true,
  true,
];
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeBoolean: PropertySignatureDefaults["ArrayType"]["Boolean"] =
  [true, true];
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeBoolean: MappedTypeDefaults["ArrayType"]["Boolean"] =
  [true, true];
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeBoolean: IndexNumberDefaults["ArrayType"]["Boolean"] =
  [true, true];
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeBoolean: IndexStringDefaults["ArrayType"]["Boolean"] =
  [true, true];
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeBoolean: IndexSymbolDefaults["ArrayType"]["Boolean"] =
  [true, true];
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeBoolean: IndexTemplateLiteralDefaults["ArrayType"]["Boolean"] =
  [true, true];

const NoTypeLiteralArrayTypeAny: GeneralDefaults["ArrayType"]["Any"] = [2, 2];
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureArrayTypeAny: PropertySignatureDefaults["ArrayType"]["Any"] =
  [2, 2];
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeArrayTypeAny: MappedTypeDefaults["ArrayType"]["Any"] =
  [2, 2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberArrayTypeAny: IndexNumberDefaults["ArrayType"]["Any"] =
  [2, 2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringArrayTypeAny: IndexStringDefaults["ArrayType"]["Any"] =
  [2, 2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolArrayTypeAny: IndexSymbolDefaults["ArrayType"]["Any"] =
  [2, 2];
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralArrayTypeAny: IndexTemplateLiteralDefaults["ArrayType"]["Any"] =
  [2, 2];

// Change Type Literal From NoTypeLiteral - FunctionType
const NoTypeLiteralFunctionTypeLiteral: GeneralDefaults["FunctionType"]["Literal"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureFunctionTypeLiteral: PropertySignatureDefaults["FunctionType"]["Literal"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeFunctionTypeLiteral: MappedTypeDefaults["FunctionType"]["Literal"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberFunctionTypeLiteral: IndexNumberDefaults["FunctionType"]["Literal"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringFunctionTypeLiteral: IndexStringDefaults["FunctionType"]["Literal"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolFunctionTypeLiteral: IndexSymbolDefaults["FunctionType"]["Literal"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralFunctionTypeLiteral: IndexTemplateLiteralDefaults["FunctionType"]["Literal"] =
  (param) => {};

const NoTypeLiteralFunctionTypeObject: GeneralDefaults["FunctionType"]["Object"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureFunctionTypeObject: PropertySignatureDefaults["FunctionType"]["Object"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeFunctionTypeObject: MappedTypeDefaults["FunctionType"]["Object"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberFunctionTypeObject: IndexNumberDefaults["FunctionType"]["Object"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringFunctionTypeObject: IndexStringDefaults["FunctionType"]["Object"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolFunctionTypeObject: IndexSymbolDefaults["FunctionType"]["Object"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralFunctionTypeObject: IndexTemplateLiteralDefaults["FunctionType"]["Object"] =
  (param) => {};

const NoTypeLiteralFunctionTypeString: GeneralDefaults["FunctionType"]["String"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureFunctionTypeString: PropertySignatureDefaults["FunctionType"]["String"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeFunctionTypeString: MappedTypeDefaults["FunctionType"]["String"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberFunctionTypeString: IndexNumberDefaults["FunctionType"]["String"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringFunctionTypeString: IndexStringDefaults["FunctionType"]["String"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolFunctionTypeString: IndexSymbolDefaults["FunctionType"]["String"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralFunctionTypeString: IndexTemplateLiteralDefaults["FunctionType"]["String"] =
  (param) => {};

const NoTypeLiteralFunctionTypeNumber: GeneralDefaults["FunctionType"]["Number"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureFunctionTypeNumber: PropertySignatureDefaults["FunctionType"]["Number"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeFunctionTypeNumber: MappedTypeDefaults["FunctionType"]["Number"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberFunctionTypeNumber: IndexNumberDefaults["FunctionType"]["Number"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringFunctionTypeNumber: IndexStringDefaults["FunctionType"]["Number"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolFunctionTypeNumber: IndexSymbolDefaults["FunctionType"]["Number"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralFunctionTypeNumber: IndexTemplateLiteralDefaults["FunctionType"]["Number"] =
  (param) => {};

const NoTypeLiteralFunctionTypeBoolean: GeneralDefaults["FunctionType"]["Boolean"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureFunctionTypeBoolean: PropertySignatureDefaults["FunctionType"]["Boolean"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeFunctionTypeBoolean: MappedTypeDefaults["FunctionType"]["Boolean"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberFunctionTypeBoolean: IndexNumberDefaults["FunctionType"]["Boolean"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringFunctionTypeBoolean: IndexStringDefaults["FunctionType"]["Boolean"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolFunctionTypeBoolean: IndexSymbolDefaults["FunctionType"]["Boolean"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralFunctionTypeBoolean: IndexTemplateLiteralDefaults["FunctionType"]["Boolean"] =
  (param) => {};

const NoTypeLiteralFunctionTypeAny: GeneralDefaults["FunctionType"]["Any"] = (
  param,
) => {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureFunctionTypeAny: PropertySignatureDefaults["FunctionType"]["Any"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeFunctionTypeAny: MappedTypeDefaults["FunctionType"]["Any"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberFunctionTypeAny: IndexNumberDefaults["FunctionType"]["Any"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringFunctionTypeAny: IndexStringDefaults["FunctionType"]["Any"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolFunctionTypeAny: IndexSymbolDefaults["FunctionType"]["Any"] =
  (param) => {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralFunctionTypeAny: IndexTemplateLiteralDefaults["FunctionType"]["Any"] =
  (param) => {};

// Change Type Literal From NoTypeLiteral - ConstructorType
const NoTypeLiteralConstructorTypeLiteral: GeneralDefaults["ConstructorType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeLiteral: PropertySignatureDefaults["ConstructorType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeLiteral: MappedTypeDefaults["ConstructorType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeLiteral: IndexNumberDefaults["ConstructorType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeLiteral: IndexStringDefaults["ConstructorType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeLiteral: IndexSymbolDefaults["ConstructorType"]["Literal"] = 1;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeLiteral: IndexTemplateLiteralDefaults["ConstructorType"]["Literal"] = 1;

const NoTypeLiteralConstructorTypeObject: GeneralDefaults["ConstructorType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeObject: PropertySignatureDefaults["ConstructorType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeObject: MappedTypeDefaults["ConstructorType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeObject: IndexNumberDefaults["ConstructorType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeObject: IndexStringDefaults["ConstructorType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeObject: IndexSymbolDefaults["ConstructorType"]["Object"] =
  {};
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeObject: IndexTemplateLiteralDefaults["ConstructorType"]["Object"] =
  {};

const NoTypeLiteralConstructorTypeString: GeneralDefaults["ConstructorType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeString: PropertySignatureDefaults["ConstructorType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeString: MappedTypeDefaults["ConstructorType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeString: IndexNumberDefaults["ConstructorType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeString: IndexStringDefaults["ConstructorType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeString: IndexSymbolDefaults["ConstructorType"]["String"] =
  "two";
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeString: IndexTemplateLiteralDefaults["ConstructorType"]["String"] =
  "two";

const NoTypeLiteralConstructorTypeNumber: GeneralDefaults["ConstructorType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeNumber: PropertySignatureDefaults["ConstructorType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeNumber: MappedTypeDefaults["ConstructorType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeNumber: IndexNumberDefaults["ConstructorType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeNumber: IndexStringDefaults["ConstructorType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeNumber: IndexSymbolDefaults["ConstructorType"]["Number"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeNumber: IndexTemplateLiteralDefaults["ConstructorType"]["Number"] = 2;

const NoTypeLiteralConstructorTypeBoolean: GeneralDefaults["ConstructorType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeBoolean: PropertySignatureDefaults["ConstructorType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeBoolean: MappedTypeDefaults["ConstructorType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeBoolean: IndexNumberDefaults["ConstructorType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeBoolean: IndexStringDefaults["ConstructorType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeBoolean: IndexSymbolDefaults["ConstructorType"]["Boolean"] =
  true;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeBoolean: IndexTemplateLiteralDefaults["ConstructorType"]["Boolean"] =
  true;

const NoTypeLiteralConstructorTypeAny: GeneralDefaults["ConstructorType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToPropertySignatureConstructorTypeAny: PropertySignatureDefaults["ConstructorType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToMappedTypeConstructorTypeAny: MappedTypeDefaults["ConstructorType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexNumberConstructorTypeAny: IndexNumberDefaults["ConstructorType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexStringConstructorTypeAny: IndexStringDefaults["ConstructorType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexSymbolConstructorTypeAny: IndexSymbolDefaults["ConstructorType"]["Any"] = 2;
const ChangeTypeLiteralFromNoTypeLiteralToIndexTemplateLiteralConstructorTypeAny: IndexTemplateLiteralDefaults["ConstructorType"]["Any"] = 2;
