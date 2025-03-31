import { Defaults } from "../defaults";

/*
 * NeverType
 */
const testFn = (p: never) => {};

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
    const NeverTypeToNumberImportType: Defaults["NumberImportType"] = color;
    const NeverTypeToStringImportType: Defaults["StringImportType"] = color;
    const NeverTypeToBooleanImportType: Defaults["BooleanImportType"] = color;
    const NeverTypeToNumberIndexedAccessType: Defaults["NumberIndexedAccessType"] =
      color;
    const NeverTypeToStringIndexedAccessType: Defaults["StringIndexedAccessType"] =
      color;
    const NeverTypeToBooleanIndexedAccessType: Defaults["BooleanIndexedAccessType"] =
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
