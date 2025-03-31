import { Defaults } from "../defaults";

const voidFn = () => {};
const result: void = voidFn();
/*
 * VoidType
 */

// Initial State
const VoidType: Defaults["VoidType"] = result;

// Changing State
const VoidTypeToNumberLiteral: Defaults["NumberLiteral"] = result;
const VoidTypeToStringLiteral: Defaults["StringLiteral"] = result;
const VoidTypeToBooleanLiteral: Defaults["BooleanLiteral"] = result;
const VoidTypeToNumberTypequery: Defaults["NumberTypequery"] = result;
const VoidTypeToStringTypequery: Defaults["StringTypequery"] = result;
const VoidTypeToBooleanTypequery: Defaults["BooleanTypequery"] = result;
const VoidTypeToNumberImportType: Defaults["NumberImportType"] = result;
const VoidTypeToStringImportType: Defaults["StringImportType"] = result;
const VoidTypeToBooleanImportType: Defaults["BooleanImportType"] = result;
const VoidTypeToNumberIndexedAccessType: Defaults["NumberIndexedAccessType"] =
  result;
const VoidTypeToStringIndexedAccessType: Defaults["StringIndexedAccessType"] =
  result;
const VoidTypeToBooleanIndexedAccessType: Defaults["BooleanIndexedAccessType"] =
  result;
const VoidTypeToObjectType: Defaults["ObjectType"] = result;
const VoidTypeToStringType: Defaults["StringType"] = result;
const VoidTypeToNumberType: Defaults["NumberType"] = result;
const VoidTypeToBooleanType: Defaults["BooleanType"] = result;
const VoidTypeToAnyType: Defaults["AnyType"] = result;
const VoidTypeToUnknownType: Defaults["UnknownType"] = result;
const VoidTypeToNeverType: Defaults["NeverType"] = result;
const VoidTypeToUndefinedType: Defaults["UndefinedType"] = result;
const VoidTypeToSymbolType: Defaults["SymbolType"] = result;
