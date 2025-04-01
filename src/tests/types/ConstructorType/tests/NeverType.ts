import { Defaults } from "../defaults";

/*
 * NeverType
 */
type Colors = "red";
const color: Colors = "red";

switch (color) {
  case "red":
    break;
  default:
    // If all cases are handled, TypeScript infers 'color' here as 'never'
    // Initial State
    const NeverType: Defaults["NeverType"] = color;

    // Changing State
    const NeverTypeToNumberLiteral: Defaults["NumberLiteral"] = color;
    const NeverTypeToStringLiteral: Defaults["StringLiteral"] = color;
    const NeverTypeToBooleanLiteral: Defaults["BooleanLiteral"] = color;
    const NeverTypeToNumberTypequery: Defaults["NumberTypequery"] = color;
    const NeverTypeToStringTypequery: Defaults["StringTypequery"] = color;
    const NeverTypeToBooleanTypequery: Defaults["BooleanTypequery"] = color;
    const NeverTypeToObjectTypequery: Defaults["ObjectTypequery"] = color;
    const NeverTypeToAnyTypequery: Defaults["AnyTypequery"] = color;
    const NeverTypeToUnknownTypequery: Defaults["UnknownTypequery"] = color;
    const NeverTypeToVoidTypequery: Defaults["VoidTypequery"] = color;
    const NeverTypeToUndefinedTypequery: Defaults["UndefinedTypequery"] = color;
    const NeverTypeToSymbolTypequery: Defaults["SymbolTypequery"] = color;
    const NeverTypeToNumberImportType: Defaults["NumberImportType"] = color;
    const NeverTypeToStringImportType: Defaults["StringImportType"] = color;
    const NeverTypeToBooleanImportType: Defaults["BooleanImportType"] = color;
    const NeverTypeToObjectImportType: Defaults["ObjectImportType"] = color;
    const NeverTypeToAnyImportType: Defaults["AnyImportType"] = color;
    const NeverTypeToUnknownImportType: Defaults["UnknownImportType"] = color;
    const NeverTypeToVoidImportType: Defaults["VoidImportType"] = color;
    const NeverTypeToUndefinedImportType: Defaults["UndefinedImportType"] =
      color;
    const NeverTypeToSymbolImportType: Defaults["SymbolImportType"] = color;
    const NeverTypeToNumberIndexedAccessType: Defaults["NumberIndexedAccessType"] =
      color;
    const NeverTypeToStringIndexedAccessType: Defaults["StringIndexedAccessType"] =
      color;
    const NeverTypeToBooleanIndexedAccessType: Defaults["BooleanIndexedAccessType"] =
      color;
    const NeverTypeToObjectIndexedAccessType: Defaults["ObjectIndexedAccessType"] =
      color;
    const NeverTypeToAnyIndexedAccessType: Defaults["AnyIndexedAccessType"] =
      color;
    const NeverTypeToUnknownIndexedAccessType: Defaults["UnknownIndexedAccessType"] =
      color;
    const NeverTypeToVoidIndexedAccessType: Defaults["VoidIndexedAccessType"] =
      color;
    const NeverTypeToUndefinedIndexedAccessType: Defaults["UndefinedIndexedAccessType"] =
      color;
    const NeverTypeToSymbolIndexedAccessType: Defaults["SymbolIndexedAccessType"] =
      color;
    const NeverTypeToObjectType: Defaults["ObjectType"] = color;
    const NeverTypeToStringType: Defaults["StringType"] = color;
    const NeverTypeToNumberType: Defaults["NumberType"] = color;
    const NeverTypeToBooleanType: Defaults["BooleanType"] = color;
    const NeverTypeToAnyType: Defaults["AnyType"] = color;
    const NeverTypeToUnknownType: Defaults["UnknownType"] = color;
    const NeverTypeToVoidType: Defaults["VoidType"] = color;
    const NeverTypeToUndefinedType: Defaults["UndefinedType"] = color;
    const NeverTypeToSymbolType: Defaults["SymbolType"] = color;
}
