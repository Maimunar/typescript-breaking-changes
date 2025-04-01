import { Defaults } from "../defaults";

/*
 * BooleanLiteral
 */

// Initial State
const BooleanLiteral: Defaults["BooleanLiteral"] = false;

// Changing State
const BooleanLiteralToNumberLiteral: Defaults["NumberLiteral"] = false;
const BooleanLiteralToStringLiteral: Defaults["StringLiteral"] = false;
const BooleanLiteralToNumberTypequery: Defaults["NumberTypequery"] = false;
const BooleanLiteralToStringTypequery: Defaults["StringTypequery"] = false;
const BooleanLiteralToBooleanTypequery: Defaults["BooleanTypequery"] = false;
const BooleanLiteralToObjectTypequery: Defaults["ObjectTypequery"] = false;
const BooleanLiteralToAnyTypequery: Defaults["AnyTypequery"] = false;
const BooleanLiteralToUnknownTypequery: Defaults["UnknownTypequery"] = false;
const BooleanLiteralToVoidTypequery: Defaults["VoidTypequery"] = false;
const BooleanLiteralToUndefinedTypequery: Defaults["UndefinedTypequery"] =
  false;
const BooleanLiteralToSymbolTypequery: Defaults["SymbolTypequery"] = false;
const BooleanLiteralToNumberImportType: Defaults["NumberImportType"] = false;
const BooleanLiteralToStringImportType: Defaults["StringImportType"] = false;
const BooleanLiteralToBooleanImportType: Defaults["BooleanImportType"] = false;
const BooleanLiteralToObjectImportType: Defaults["ObjectImportType"] = false;
const BooleanLiteralToAnyImportType: Defaults["AnyImportType"] = false;
const BooleanLiteralToUnknownImportType: Defaults["UnknownImportType"] = false;
const BooleanLiteralToVoidImportType: Defaults["VoidImportType"] = false;
const BooleanLiteralToUndefinedImportType: Defaults["UndefinedImportType"] =
  false;
const BooleanLiteralToSymbolImportType: Defaults["SymbolImportType"] = false;
const BooleanLiteralToNumberIndexedAccessType: Defaults["NumberIndexedAccessType"] =
  false;
const BooleanLiteralToStringIndexedAccessType: Defaults["StringIndexedAccessType"] =
  false;
const BooleanLiteralToBooleanIndexedAccessType: Defaults["BooleanIndexedAccessType"] =
  false;
const BooleanLiteralToObjectIndexedAccessType: Defaults["ObjectIndexedAccessType"] =
  false;
const BooleanLiteralToAnyIndexedAccessType: Defaults["AnyIndexedAccessType"] =
  false;
const BooleanLiteralToUnknownIndexedAccessType: Defaults["UnknownIndexedAccessType"] =
  false;
const BooleanLiteralToVoidIndexedAccessType: Defaults["VoidIndexedAccessType"] =
  false;
const BooleanLiteralToUndefinedIndexedAccessType: Defaults["UndefinedIndexedAccessType"] =
  false;
const BooleanLiteralToSymbolIndexedAccessType: Defaults["SymbolIndexedAccessType"] =
  false;
const BooleanLiteralToObjectType: Defaults["ObjectType"] = false;
const BooleanLiteralToStringType: Defaults["StringType"] = false;
const BooleanLiteralToNumberType: Defaults["NumberType"] = false;
const BooleanLiteralToBooleanType: Defaults["BooleanType"] = false;
const BooleanLiteralToAnyType: Defaults["AnyType"] = false;
const BooleanLiteralToUnknownType: Defaults["UnknownType"] = false;
const BooleanLiteralToNeverType: Defaults["NeverType"] = false;
const BooleanLiteralToVoidType: Defaults["VoidType"] = false;
const BooleanLiteralToUndefinedType: Defaults["UndefinedType"] = false;
const BooleanLiteralToSymbolType: Defaults["SymbolType"] = false;

/*
 * NumberLiteral
 */

// Initial State
const NumberLiteral: Defaults["NumberLiteral"] = 1;

// Changing State
const NumberLiteralToStringLiteral: Defaults["StringLiteral"] = 1;
const NumberLiteralToBooleanLiteral: Defaults["BooleanLiteral"] = 1;
const NumberLiteralToNumberTypequery: Defaults["NumberTypequery"] = 1;
const NumberLiteralToStringTypequery: Defaults["StringTypequery"] = 1;
const NumberLiteralToBooleanTypequery: Defaults["BooleanTypequery"] = 1;
const NumberLiteralToObjectTypequery: Defaults["ObjectTypequery"] = 1;
const NumberLiteralToAnyTypequery: Defaults["AnyTypequery"] = 1;
const NumberLiteralToUnknownTypequery: Defaults["UnknownTypequery"] = 1;
const NumberLiteralToVoidTypequery: Defaults["VoidTypequery"] = 1;
const NumberLiteralToUndefinedTypequery: Defaults["UndefinedTypequery"] = 1;
const NumberLiteralToSymbolTypequery: Defaults["SymbolTypequery"] = 1;
const NumberLiteralToNumberImportType: Defaults["NumberImportType"] = 1;
const NumberLiteralToStringImportType: Defaults["StringImportType"] = 1;
const NumberLiteralToBooleanImportType: Defaults["BooleanImportType"] = 1;
const NumberLiteralToObjectImportType: Defaults["ObjectImportType"] = 1;
const NumberLiteralToAnyImportType: Defaults["AnyImportType"] = 1;
const NumberLiteralToUnknownImportType: Defaults["UnknownImportType"] = 1;
const NumberLiteralToVoidImportType: Defaults["VoidImportType"] = 1;
const NumberLiteralToUndefinedImportType: Defaults["UndefinedImportType"] = 1;
const NumberLiteralToSymbolImportType: Defaults["SymbolImportType"] = 1;
const NumberLiteralToNumberIndexedAccessType: Defaults["NumberIndexedAccessType"] = 1;
const NumberLiteralToStringIndexedAccessType: Defaults["StringIndexedAccessType"] = 1;
const NumberLiteralToBooleanIndexedAccessType: Defaults["BooleanIndexedAccessType"] = 1;
const NumberLiteralToObjectIndexedAccessType: Defaults["ObjectIndexedAccessType"] = 1;
const NumberLiteralToAnyIndexedAccessType: Defaults["AnyIndexedAccessType"] = 1;
const NumberLiteralToUnknownIndexedAccessType: Defaults["UnknownIndexedAccessType"] = 1;
const NumberLiteralToVoidIndexedAccessType: Defaults["VoidIndexedAccessType"] = 1;
const NumberLiteralToUndefinedIndexedAccessType: Defaults["UndefinedIndexedAccessType"] = 1;
const NumberLiteralToSymbolIndexedAccessType: Defaults["SymbolIndexedAccessType"] = 1;
const NumberLiteralToObjectType: Defaults["ObjectType"] = 1;
const NumberLiteralToStringType: Defaults["StringType"] = 1;
const NumberLiteralToNumberType: Defaults["NumberType"] = 1;
const NumberLiteralToBooleanType: Defaults["BooleanType"] = 1;
const NumberLiteralToAnyType: Defaults["AnyType"] = 1;
const NumberLiteralToUnknownType: Defaults["UnknownType"] = 1;
const NumberLiteralToNeverType: Defaults["NeverType"] = 1;
const NumberLiteralToVoidType: Defaults["VoidType"] = 1;
const NumberLiteralToUndefinedType: Defaults["UndefinedType"] = 1;
const NumberLiteralToSymbolType: Defaults["SymbolType"] = 1;

/*
 * StringLiteral
 */

// Initial State
const StringLiteral: Defaults["StringLiteral"] = "one";

// Changing State
const StringLiteralToNumberLiteral: Defaults["NumberLiteral"] = "one";
const StringLiteralToBooleanLiteral: Defaults["BooleanLiteral"] = "one";
const StringLiteralToNumberTypequery: Defaults["NumberTypequery"] = "one";
const StringLiteralToStringTypequery: Defaults["StringTypequery"] = "one";
const StringLiteralToBooleanTypequery: Defaults["BooleanTypequery"] = "one";
const StringLiteralToObjectTypequery: Defaults["ObjectTypequery"] = "one";
const StringLiteralToAnyTypequery: Defaults["AnyTypequery"] = "one";
const StringLiteralToUnknownTypequery: Defaults["UnknownTypequery"] = "one";
const StringLiteralToVoidTypequery: Defaults["VoidTypequery"] = "one";
const StringLiteralToUndefinedTypequery: Defaults["UndefinedTypequery"] = "one";
const StringLiteralToSymbolTypequery: Defaults["SymbolTypequery"] = "one";
const StringLiteralToNumberImportType: Defaults["NumberImportType"] = "one";
const StringLiteralToStringImportType: Defaults["StringImportType"] = "one";
const StringLiteralToBooleanImportType: Defaults["BooleanImportType"] = "one";
const StringLiteralToObjectImportType: Defaults["ObjectImportType"] = "one";
const StringLiteralToAnyImportType: Defaults["AnyImportType"] = "one";
const StringLiteralToUnknownImportType: Defaults["UnknownImportType"] = "one";
const StringLiteralToVoidImportType: Defaults["VoidImportType"] = "one";
const StringLiteralToUndefinedImportType: Defaults["UndefinedImportType"] =
  "one";
const StringLiteralToSymbolImportType: Defaults["SymbolImportType"] = "one";
const StringLiteralToNumberIndexedAccessType: Defaults["NumberIndexedAccessType"] =
  "one";
const StringLiteralToStringIndexedAccessType: Defaults["StringIndexedAccessType"] =
  "one";
const StringLiteralToBooleanIndexedAccessType: Defaults["BooleanIndexedAccessType"] =
  "one";
const StringLiteralToObjectIndexedAccessType: Defaults["ObjectIndexedAccessType"] =
  "one";
const StringLiteralToAnyIndexedAccessType: Defaults["AnyIndexedAccessType"] =
  "one";
const StringLiteralToUnknownIndexedAccessType: Defaults["UnknownIndexedAccessType"] =
  "one";
const StringLiteralToVoidIndexedAccessType: Defaults["VoidIndexedAccessType"] =
  "one";
const StringLiteralToUndefinedIndexedAccessType: Defaults["UndefinedIndexedAccessType"] =
  "one";
const StringLiteralToSymbolIndexedAccessType: Defaults["SymbolIndexedAccessType"] =
  "one";
const StringLiteralToObjectType: Defaults["ObjectType"] = "one";
const StringLiteralToStringType: Defaults["StringType"] = "one";
const StringLiteralToNumberType: Defaults["NumberType"] = "one";
const StringLiteralToBooleanType: Defaults["BooleanType"] = "one";
const StringLiteralToAnyType: Defaults["AnyType"] = "one";
const StringLiteralToUnknownType: Defaults["UnknownType"] = "one";
const StringLiteralToNeverType: Defaults["NeverType"] = "one";
const StringLiteralToVoidType: Defaults["VoidType"] = "one";
const StringLiteralToUndefinedType: Defaults["UndefinedType"] = "one";
const StringLiteralToSymbolType: Defaults["SymbolType"] = "one";
