import { Defaults as GeneralDefaults } from "../../defaults";
import {
  RequiredParamDefaults,
  OptionalParamDefaults,
  VoidFunctionNoParam,
} from "../defaults";
/*
 * FunctionType
 */

// Remove Parameter - ParenthesizedType
// Required
const FunctionTypeWithRequiredParamParenthesizedTypeLiteral: RequiredParamDefaults["ParenthesizedType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamParenthesizedTypeLiteral(1);
const RemoveRequiredParamParenthesizedTypeLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamParenthesizedTypeLiteral(1);

const FunctionTypeWithRequiredParamParenthesizedTypeObject: RequiredParamDefaults["ParenthesizedType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamParenthesizedTypeObject({});
const RemoveRequiredParamParenthesizedTypeObject: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamParenthesizedTypeObject({});

const FunctionTypeWithRequiredParamParenthesizedTypeString: RequiredParamDefaults["ParenthesizedType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamParenthesizedTypeString("two");
const RemoveRequiredParamParenthesizedTypeString: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamParenthesizedTypeString("two");

const FunctionTypeWithRequiredParamParenthesizedTypeNumber: RequiredParamDefaults["ParenthesizedType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamParenthesizedTypeNumber(2);
const RemoveRequiredParamParenthesizedTypeNumber: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamParenthesizedTypeNumber(2);

const FunctionTypeWithRequiredParamParenthesizedTypeBoolean: RequiredParamDefaults["ParenthesizedType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamParenthesizedTypeBoolean(true);
const RemoveRequiredParamParenthesizedTypeBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamParenthesizedTypeBoolean(true);

const FunctionTypeWithRequiredParamParenthesizedTypeAny: RequiredParamDefaults["ParenthesizedType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamParenthesizedTypeAny(2);
const RemoveRequiredParamParenthesizedTypeAny: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamParenthesizedTypeAny(2);

// Optional
const FunctionTypeWithOptionalParamParenthesizedTypeLiteral: OptionalParamDefaults["ParenthesizedType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamParenthesizedTypeLiteral(1);
const RemoveOptionalParamParenthesizedTypeLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamParenthesizedTypeLiteral(1);

const FunctionTypeWithOptionalParamParenthesizedTypeObject: OptionalParamDefaults["ParenthesizedType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamParenthesizedTypeObject({});
const RemoveOptionalParamParenthesizedTypeObject: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamParenthesizedTypeObject({});

const FunctionTypeWithOptionalParamParenthesizedTypeString: OptionalParamDefaults["ParenthesizedType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamParenthesizedTypeString("two");
const RemoveOptionalParamParenthesizedTypeString: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamParenthesizedTypeString("two");

const FunctionTypeWithOptionalParamParenthesizedTypeNumber: OptionalParamDefaults["ParenthesizedType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamParenthesizedTypeNumber(2);
const RemoveOptionalParamParenthesizedTypeNumber: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamParenthesizedTypeNumber(2);

const FunctionTypeWithOptionalParamParenthesizedTypeBoolean: OptionalParamDefaults["ParenthesizedType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamParenthesizedTypeBoolean(true);
const RemoveOptionalParamParenthesizedTypeBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamParenthesizedTypeBoolean(true);

const FunctionTypeWithOptionalParamParenthesizedTypeAny: OptionalParamDefaults["ParenthesizedType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamParenthesizedTypeAny(2);
const RemoveOptionalParamParenthesizedTypeAny: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamParenthesizedTypeAny(2);

// Remove Parameter - TypeReferenceBuiltin
// Required
const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);
const FunctionTypeWithRequiredParamTypeReferenceBuiltinLiteral: RequiredParamDefaults["TypeReferenceBuiltin"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferenceBuiltinLiteral(promisify(1));
const RemoveRequiredParamTypeReferenceBuiltinLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeReferenceBuiltinLiteral(promisify(1));

const FunctionTypeWithRequiredParamTypeReferenceBuiltinObject: RequiredParamDefaults["TypeReferenceBuiltin"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferenceBuiltinObject(promisify({}));
const RemoveRequiredParamTypeReferenceBuiltinObject: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeReferenceBuiltinObject(promisify({}));

const FunctionTypeWithRequiredParamTypeReferenceBuiltinString: RequiredParamDefaults["TypeReferenceBuiltin"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferenceBuiltinString(promisify("two"));
const RemoveRequiredParamTypeReferenceBuiltinString: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeReferenceBuiltinString(promisify("two"));

const FunctionTypeWithRequiredParamTypeReferenceBuiltinNumber: RequiredParamDefaults["TypeReferenceBuiltin"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferenceBuiltinNumber(promisify(2));
const RemoveRequiredParamTypeReferenceBuiltinNumber: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeReferenceBuiltinNumber(promisify(2));

const FunctionTypeWithRequiredParamTypeReferenceBuiltinBoolean: RequiredParamDefaults["TypeReferenceBuiltin"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferenceBuiltinBoolean(promisify(true));
const RemoveRequiredParamTypeReferenceBuiltinBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeReferenceBuiltinBoolean(promisify(true));

const FunctionTypeWithRequiredParamTypeReferenceBuiltinAny: RequiredParamDefaults["TypeReferenceBuiltin"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferenceBuiltinAny(promisify(2));
const RemoveRequiredParamTypeReferenceBuiltinAny: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeReferenceBuiltinAny(promisify(2));

// Optional
const FunctionTypeWithOptionalParamTypeReferenceBuiltinLiteral: OptionalParamDefaults["TypeReferenceBuiltin"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferenceBuiltinLiteral(promisify(1));
const RemoveOptionalParamTypeReferenceBuiltinLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeReferenceBuiltinLiteral(promisify(1));

const FunctionTypeWithOptionalParamTypeReferenceBuiltinObject: OptionalParamDefaults["TypeReferenceBuiltin"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferenceBuiltinObject(promisify({}));
const RemoveOptionalParamTypeReferenceBuiltinObject: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeReferenceBuiltinObject(promisify({}));

const FunctionTypeWithOptionalParamTypeReferenceBuiltinString: OptionalParamDefaults["TypeReferenceBuiltin"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferenceBuiltinString(promisify("two"));
const RemoveOptionalParamTypeReferenceBuiltinString: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeReferenceBuiltinString(promisify("two"));

const FunctionTypeWithOptionalParamTypeReferenceBuiltinNumber: OptionalParamDefaults["TypeReferenceBuiltin"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferenceBuiltinNumber(promisify(2));
const RemoveOptionalParamTypeReferenceBuiltinNumber: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeReferenceBuiltinNumber(promisify(2));

const FunctionTypeWithOptionalParamTypeReferenceBuiltinBoolean: OptionalParamDefaults["TypeReferenceBuiltin"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferenceBuiltinBoolean(promisify(true));
const RemoveOptionalParamTypeReferenceBuiltinBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeReferenceBuiltinBoolean(promisify(true));

const FunctionTypeWithOptionalParamTypeReferenceBuiltinAny: OptionalParamDefaults["TypeReferenceBuiltin"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferenceBuiltinAny(promisify(2));
const RemoveOptionalParamTypeReferenceBuiltinAny: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeReferenceBuiltinAny(promisify(2));

// Remove Parameter - TypeReferencePredefined
// Required
const FunctionTypeWithRequiredParamTypeReferencePredefinedLiteral: RequiredParamDefaults["TypeReferencePredefined"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferencePredefinedLiteral(1);
const RemoveRequiredParamTypeReferencePredefinedLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeReferencePredefinedLiteral(1);

const FunctionTypeWithRequiredParamTypeReferencePredefinedObject: RequiredParamDefaults["TypeReferencePredefined"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferencePredefinedObject({});
const RemoveRequiredParamTypeReferencePredefinedObject: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeReferencePredefinedObject({});

const FunctionTypeWithRequiredParamTypeReferencePredefinedString: RequiredParamDefaults["TypeReferencePredefined"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferencePredefinedString("two");
const RemoveRequiredParamTypeReferencePredefinedString: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeReferencePredefinedString("two");

const FunctionTypeWithRequiredParamTypeReferencePredefinedNumber: RequiredParamDefaults["TypeReferencePredefined"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferencePredefinedNumber(2);
const RemoveRequiredParamTypeReferencePredefinedNumber: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeReferencePredefinedNumber(2);

const FunctionTypeWithRequiredParamTypeReferencePredefinedBoolean: RequiredParamDefaults["TypeReferencePredefined"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferencePredefinedBoolean(true);
const RemoveRequiredParamTypeReferencePredefinedBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeReferencePredefinedBoolean(true);

const FunctionTypeWithRequiredParamTypeReferencePredefinedAny: RequiredParamDefaults["TypeReferencePredefined"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferencePredefinedAny(2);
const RemoveRequiredParamTypeReferencePredefinedAny: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeReferencePredefinedAny(2);

// Optional
const FunctionTypeWithOptionalParamTypeReferencePredefinedLiteral: OptionalParamDefaults["TypeReferencePredefined"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferencePredefinedLiteral(1);
const RemoveOptionalParamTypeReferencePredefinedLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeReferencePredefinedLiteral(1);

const FunctionTypeWithOptionalParamTypeReferencePredefinedObject: OptionalParamDefaults["TypeReferencePredefined"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferencePredefinedObject({});
const RemoveOptionalParamTypeReferencePredefinedObject: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeReferencePredefinedObject({});

const FunctionTypeWithOptionalParamTypeReferencePredefinedString: OptionalParamDefaults["TypeReferencePredefined"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferencePredefinedString("two");
const RemoveOptionalParamTypeReferencePredefinedString: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeReferencePredefinedString("two");

const FunctionTypeWithOptionalParamTypeReferencePredefinedNumber: OptionalParamDefaults["TypeReferencePredefined"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferencePredefinedNumber(2);
const RemoveOptionalParamTypeReferencePredefinedNumber: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeReferencePredefinedNumber(2);

const FunctionTypeWithOptionalParamTypeReferencePredefinedBoolean: OptionalParamDefaults["TypeReferencePredefined"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferencePredefinedBoolean(true);
const RemoveOptionalParamTypeReferencePredefinedBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeReferencePredefinedBoolean(true);

const FunctionTypeWithOptionalParamTypeReferencePredefinedAny: OptionalParamDefaults["TypeReferencePredefined"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferencePredefinedAny(2);
const RemoveOptionalParamTypeReferencePredefinedAny: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeReferencePredefinedAny(2);

// Remove Parameter - UnionType
// Required
const FunctionTypeWithRequiredParamUnionTypeLiteral: RequiredParamDefaults["UnionType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamUnionTypeLiteral(1);
const RemoveRequiredParamUnionTypeLiteral: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamUnionTypeLiteral(1);

const FunctionTypeWithRequiredParamUnionTypeObject: RequiredParamDefaults["UnionType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamUnionTypeObject({});
const RemoveRequiredParamUnionTypeObject: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamUnionTypeObject({});

const FunctionTypeWithRequiredParamUnionTypeString: RequiredParamDefaults["UnionType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamUnionTypeString("two");
const RemoveRequiredParamUnionTypeString: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamUnionTypeString("two");

const FunctionTypeWithRequiredParamUnionTypeNumber: RequiredParamDefaults["UnionType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamUnionTypeNumber(2);
const RemoveRequiredParamUnionTypeNumber: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamUnionTypeNumber(2);

const FunctionTypeWithRequiredParamUnionTypeBoolean: RequiredParamDefaults["UnionType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamUnionTypeBoolean(true);
const RemoveRequiredParamUnionTypeBoolean: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamUnionTypeBoolean(true);

const FunctionTypeWithRequiredParamUnionTypeAny: RequiredParamDefaults["UnionType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamUnionTypeAny(2);
const RemoveRequiredParamUnionTypeAny: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamUnionTypeAny(2);

// Optional
const FunctionTypeWithOptionalParamUnionTypeLiteral: OptionalParamDefaults["UnionType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamUnionTypeLiteral(1);
const RemoveOptionalParamUnionTypeLiteral: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamUnionTypeLiteral(1);

const FunctionTypeWithOptionalParamUnionTypeObject: OptionalParamDefaults["UnionType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamUnionTypeObject({});
const RemoveOptionalParamUnionTypeObject: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamUnionTypeObject({});

const FunctionTypeWithOptionalParamUnionTypeString: OptionalParamDefaults["UnionType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamUnionTypeString("two");
const RemoveOptionalParamUnionTypeString: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamUnionTypeString("two");

const FunctionTypeWithOptionalParamUnionTypeNumber: OptionalParamDefaults["UnionType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamUnionTypeNumber(2);
const RemoveOptionalParamUnionTypeNumber: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamUnionTypeNumber(2);

const FunctionTypeWithOptionalParamUnionTypeBoolean: OptionalParamDefaults["UnionType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamUnionTypeBoolean(true);
const RemoveOptionalParamUnionTypeBoolean: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamUnionTypeBoolean(true);

const FunctionTypeWithOptionalParamUnionTypeAny: OptionalParamDefaults["UnionType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamUnionTypeAny(2);
const RemoveOptionalParamUnionTypeAny: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamUnionTypeAny(2);

// Remove Parameter - IntersectionType
// Required
const FunctionTypeWithRequiredParamIntersectionTypeLiteral: RequiredParamDefaults["IntersectionType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamIntersectionTypeLiteral(1);
const RemoveRequiredParamIntersectionTypeLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamIntersectionTypeLiteral(1);

const FunctionTypeWithRequiredParamIntersectionTypeObject: RequiredParamDefaults["IntersectionType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamIntersectionTypeObject({});
const RemoveRequiredParamIntersectionTypeObject: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamIntersectionTypeObject({});

const FunctionTypeWithRequiredParamIntersectionTypeString: RequiredParamDefaults["IntersectionType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamIntersectionTypeString("two");
const RemoveRequiredParamIntersectionTypeString: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamIntersectionTypeString("two");

const FunctionTypeWithRequiredParamIntersectionTypeNumber: RequiredParamDefaults["IntersectionType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamIntersectionTypeNumber(2);
const RemoveRequiredParamIntersectionTypeNumber: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamIntersectionTypeNumber(2);

const FunctionTypeWithRequiredParamIntersectionTypeBoolean: RequiredParamDefaults["IntersectionType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamIntersectionTypeBoolean(true);
const RemoveRequiredParamIntersectionTypeBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamIntersectionTypeBoolean(true);

const FunctionTypeWithRequiredParamIntersectionTypeAny: RequiredParamDefaults["IntersectionType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamIntersectionTypeAny(2);
const RemoveRequiredParamIntersectionTypeAny: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamIntersectionTypeAny(2);

// Optional
const FunctionTypeWithOptionalParamIntersectionTypeLiteral: OptionalParamDefaults["IntersectionType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamIntersectionTypeLiteral(1);
const RemoveOptionalParamIntersectionTypeLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamIntersectionTypeLiteral(1);

const FunctionTypeWithOptionalParamIntersectionTypeObject: OptionalParamDefaults["IntersectionType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamIntersectionTypeObject({});
const RemoveOptionalParamIntersectionTypeObject: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamIntersectionTypeObject({});

const FunctionTypeWithOptionalParamIntersectionTypeString: OptionalParamDefaults["IntersectionType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamIntersectionTypeString("two");
const RemoveOptionalParamIntersectionTypeString: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamIntersectionTypeString("two");

const FunctionTypeWithOptionalParamIntersectionTypeNumber: OptionalParamDefaults["IntersectionType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamIntersectionTypeNumber(2);
const RemoveOptionalParamIntersectionTypeNumber: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamIntersectionTypeNumber(2);

const FunctionTypeWithOptionalParamIntersectionTypeBoolean: OptionalParamDefaults["IntersectionType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamIntersectionTypeBoolean(true);
const RemoveOptionalParamIntersectionTypeBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamIntersectionTypeBoolean(true);

const FunctionTypeWithOptionalParamIntersectionTypeAny: OptionalParamDefaults["IntersectionType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamIntersectionTypeAny(2);
const RemoveOptionalParamIntersectionTypeAny: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamIntersectionTypeAny(2);

// Remove Parameter - TypeLiteral
// Required
const FunctionTypeWithRequiredParamTypeLiteralLiteral: RequiredParamDefaults["TypeLiteral"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeLiteralLiteral({ key: 1 });
const RemoveRequiredParamTypeLiteralLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeLiteralLiteral({ key: 1 });

const FunctionTypeWithRequiredParamTypeLiteralObject: RequiredParamDefaults["TypeLiteral"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeLiteralObject({ key: {} });
const RemoveRequiredParamTypeLiteralObject: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamTypeLiteralObject({ key: {} });

const FunctionTypeWithRequiredParamTypeLiteralString: RequiredParamDefaults["TypeLiteral"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeLiteralString({ key: "two" });
const RemoveRequiredParamTypeLiteralString: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamTypeLiteralString({ key: "two" });

const FunctionTypeWithRequiredParamTypeLiteralNumber: RequiredParamDefaults["TypeLiteral"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeLiteralNumber({ key: 2 });
const RemoveRequiredParamTypeLiteralNumber: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamTypeLiteralNumber({ key: 2 });

const FunctionTypeWithRequiredParamTypeLiteralBoolean: RequiredParamDefaults["TypeLiteral"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeLiteralBoolean({ key: true });
const RemoveRequiredParamTypeLiteralBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamTypeLiteralBoolean({ key: true });

const FunctionTypeWithRequiredParamTypeLiteralAny: RequiredParamDefaults["TypeLiteral"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeLiteralAny({ key: 2 });
const RemoveRequiredParamTypeLiteralAny: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamTypeLiteralAny({ key: 2 });

// Optional
const FunctionTypeWithOptionalParamTypeLiteralLiteral: OptionalParamDefaults["TypeLiteral"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeLiteralLiteral({ key: 1 });
const RemoveOptionalParamTypeLiteralLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeLiteralLiteral({ key: 1 });

const FunctionTypeWithOptionalParamTypeLiteralObject: OptionalParamDefaults["TypeLiteral"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeLiteralObject({ key: {} });
const RemoveOptionalParamTypeLiteralObject: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamTypeLiteralObject({ key: {} });

const FunctionTypeWithOptionalParamTypeLiteralString: OptionalParamDefaults["TypeLiteral"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeLiteralString({ key: "two" });
const RemoveOptionalParamTypeLiteralString: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamTypeLiteralString({ key: "two" });

const FunctionTypeWithOptionalParamTypeLiteralNumber: OptionalParamDefaults["TypeLiteral"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeLiteralNumber({ key: 2 });
const RemoveOptionalParamTypeLiteralNumber: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamTypeLiteralNumber({ key: 2 });

const FunctionTypeWithOptionalParamTypeLiteralBoolean: OptionalParamDefaults["TypeLiteral"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeLiteralBoolean({ key: true });
const RemoveOptionalParamTypeLiteralBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamTypeLiteralBoolean({ key: true });

const FunctionTypeWithOptionalParamTypeLiteralAny: OptionalParamDefaults["TypeLiteral"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeLiteralAny({ key: 2 });
const RemoveOptionalParamTypeLiteralAny: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamTypeLiteralAny({ key: 2 });

// Remove Parameter - TupleType
// Required
const FunctionTypeWithRequiredParamTupleTypeLiteral: RequiredParamDefaults["TupleType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamTupleTypeLiteral([1]);
const RemoveRequiredParamTupleTypeLiteral: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamTupleTypeLiteral([1]);

const FunctionTypeWithRequiredParamTupleTypeObject: RequiredParamDefaults["TupleType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamTupleTypeObject([{}]);
const RemoveRequiredParamTupleTypeObject: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamTupleTypeObject([{}]);

const FunctionTypeWithRequiredParamTupleTypeString: RequiredParamDefaults["TupleType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamTupleTypeString(["two"]);
const RemoveRequiredParamTupleTypeString: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamTupleTypeString(["two"]);

const FunctionTypeWithRequiredParamTupleTypeNumber: RequiredParamDefaults["TupleType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamTupleTypeNumber([2]);
const RemoveRequiredParamTupleTypeNumber: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamTupleTypeNumber([2]);

const FunctionTypeWithRequiredParamTupleTypeBoolean: RequiredParamDefaults["TupleType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamTupleTypeBoolean([true]);
const RemoveRequiredParamTupleTypeBoolean: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamTupleTypeBoolean([true]);

const FunctionTypeWithRequiredParamTupleTypeAny: RequiredParamDefaults["TupleType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamTupleTypeAny([2]);
const RemoveRequiredParamTupleTypeAny: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamTupleTypeAny([2]);

// Optional
const FunctionTypeWithOptionalParamTupleTypeLiteral: OptionalParamDefaults["TupleType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamTupleTypeLiteral([1]);
const RemoveOptionalParamTupleTypeLiteral: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamTupleTypeLiteral([1]);

const FunctionTypeWithOptionalParamTupleTypeObject: OptionalParamDefaults["TupleType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamTupleTypeObject([{}]);
const RemoveOptionalParamTupleTypeObject: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamTupleTypeObject([{}]);

const FunctionTypeWithOptionalParamTupleTypeString: OptionalParamDefaults["TupleType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamTupleTypeString(["two"]);
const RemoveOptionalParamTupleTypeString: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamTupleTypeString(["two"]);

const FunctionTypeWithOptionalParamTupleTypeNumber: OptionalParamDefaults["TupleType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamTupleTypeNumber([2]);
const RemoveOptionalParamTupleTypeNumber: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamTupleTypeNumber([2]);

const FunctionTypeWithOptionalParamTupleTypeBoolean: OptionalParamDefaults["TupleType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamTupleTypeBoolean([true]);
const RemoveOptionalParamTupleTypeBoolean: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamTupleTypeBoolean([true]);

const FunctionTypeWithOptionalParamTupleTypeAny: OptionalParamDefaults["TupleType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamTupleTypeAny([2]);
const RemoveOptionalParamTupleTypeAny: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamTupleTypeAny([2]);

// Remove Parameter - ArrayType
// Required
const FunctionTypeWithRequiredParamArrayTypeLiteral: RequiredParamDefaults["ArrayType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamArrayTypeLiteral([1, 1]);
const RemoveRequiredParamArrayTypeLiteral: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamArrayTypeLiteral([1, 1]);

const FunctionTypeWithRequiredParamArrayTypeObject: RequiredParamDefaults["ArrayType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamArrayTypeObject([{}, {}]);
const RemoveRequiredParamArrayTypeObject: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamArrayTypeObject([{}, {}]);

const FunctionTypeWithRequiredParamArrayTypeString: RequiredParamDefaults["ArrayType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamArrayTypeString(["two", "two"]);
const RemoveRequiredParamArrayTypeString: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamArrayTypeString(["two", "two"]);

const FunctionTypeWithRequiredParamArrayTypeNumber: RequiredParamDefaults["ArrayType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamArrayTypeNumber([2, 2]);
const RemoveRequiredParamArrayTypeNumber: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamArrayTypeNumber([2, 2]);

const FunctionTypeWithRequiredParamArrayTypeBoolean: RequiredParamDefaults["ArrayType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamArrayTypeBoolean([true, true]);
const RemoveRequiredParamArrayTypeBoolean: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamArrayTypeBoolean([true, true]);

const FunctionTypeWithRequiredParamArrayTypeAny: RequiredParamDefaults["ArrayType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamArrayTypeAny([2, 2]);
const RemoveRequiredParamArrayTypeAny: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamArrayTypeAny([2, 2]);

// Optional
const FunctionTypeWithOptionalParamArrayTypeLiteral: OptionalParamDefaults["ArrayType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamArrayTypeLiteral([1, 1]);
const RemoveOptionalParamArrayTypeLiteral: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamArrayTypeLiteral([1, 1]);

const FunctionTypeWithOptionalParamArrayTypeObject: OptionalParamDefaults["ArrayType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamArrayTypeObject([{}, {}]);
const RemoveOptionalParamArrayTypeObject: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamArrayTypeObject([{}, {}]);

const FunctionTypeWithOptionalParamArrayTypeString: OptionalParamDefaults["ArrayType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamArrayTypeString(["two", "two"]);
const RemoveOptionalParamArrayTypeString: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamArrayTypeString(["two", "two"]);

const FunctionTypeWithOptionalParamArrayTypeNumber: OptionalParamDefaults["ArrayType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamArrayTypeNumber([2, 2]);
const RemoveOptionalParamArrayTypeNumber: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamArrayTypeNumber([2, 2]);

const FunctionTypeWithOptionalParamArrayTypeBoolean: OptionalParamDefaults["ArrayType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamArrayTypeBoolean([true, true]);
const RemoveOptionalParamArrayTypeBoolean: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamArrayTypeBoolean([true, true]);

const FunctionTypeWithOptionalParamArrayTypeAny: OptionalParamDefaults["ArrayType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamArrayTypeAny([2, 2]);
const RemoveOptionalParamArrayTypeAny: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamArrayTypeAny([2, 2]);

// Remove Parameter - FunctionType
// Required
const FunctionTypeWithRequiredParamFunctionTypeLiteral: RequiredParamDefaults["FunctionType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamFunctionTypeLiteral((param) => {});
const RemoveRequiredParamFunctionTypeLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamFunctionTypeLiteral((param) => {});

const FunctionTypeWithRequiredParamFunctionTypeObject: RequiredParamDefaults["FunctionType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamFunctionTypeObject((param) => {});
const RemoveRequiredParamFunctionTypeObject: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamFunctionTypeObject((param) => {});

const FunctionTypeWithRequiredParamFunctionTypeString: RequiredParamDefaults["FunctionType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamFunctionTypeString((param) => {});
const RemoveRequiredParamFunctionTypeString: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamFunctionTypeString((param) => {});

const FunctionTypeWithRequiredParamFunctionTypeNumber: RequiredParamDefaults["FunctionType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamFunctionTypeNumber((param) => {});
const RemoveRequiredParamFunctionTypeNumber: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamFunctionTypeNumber((param) => {});

const FunctionTypeWithRequiredParamFunctionTypeBoolean: RequiredParamDefaults["FunctionType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamFunctionTypeBoolean((param) => {});
const RemoveRequiredParamFunctionTypeBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamFunctionTypeBoolean((param) => {});

const FunctionTypeWithRequiredParamFunctionTypeAny: RequiredParamDefaults["FunctionType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamFunctionTypeAny((param) => {});
const RemoveRequiredParamFunctionTypeAny: VoidFunctionNoParam = (param) => {};
RemoveRequiredParamFunctionTypeAny((param) => {});

// Optional
const FunctionTypeWithOptionalParamFunctionTypeLiteral: OptionalParamDefaults["FunctionType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamFunctionTypeLiteral((param) => {});
const RemoveOptionalParamFunctionTypeLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamFunctionTypeLiteral((param) => {});

const FunctionTypeWithOptionalParamFunctionTypeObject: OptionalParamDefaults["FunctionType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamFunctionTypeObject((param) => {});
const RemoveOptionalParamFunctionTypeObject: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamFunctionTypeObject((param) => {});

const FunctionTypeWithOptionalParamFunctionTypeString: OptionalParamDefaults["FunctionType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamFunctionTypeString((param) => {});
const RemoveOptionalParamFunctionTypeString: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamFunctionTypeString((param) => {});

const FunctionTypeWithOptionalParamFunctionTypeNumber: OptionalParamDefaults["FunctionType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamFunctionTypeNumber((param) => {});
const RemoveOptionalParamFunctionTypeNumber: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamFunctionTypeNumber((param) => {});

const FunctionTypeWithOptionalParamFunctionTypeBoolean: OptionalParamDefaults["FunctionType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamFunctionTypeBoolean((param) => {});
const RemoveOptionalParamFunctionTypeBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamFunctionTypeBoolean((param) => {});

const FunctionTypeWithOptionalParamFunctionTypeAny: OptionalParamDefaults["FunctionType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamFunctionTypeAny((param) => {});
const RemoveOptionalParamFunctionTypeAny: VoidFunctionNoParam = (param) => {};
RemoveOptionalParamFunctionTypeAny((param) => {});

// Remove Parameter - ConstructorType
// Required
const FunctionTypeWithRequiredParamConstructorTypeLiteral: RequiredParamDefaults["ConstructorType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamConstructorTypeLiteral(1);
const RemoveRequiredParamConstructorTypeLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamConstructorTypeLiteral(1);

const FunctionTypeWithRequiredParamConstructorTypeObject: RequiredParamDefaults["ConstructorType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamConstructorTypeObject({});
const RemoveRequiredParamConstructorTypeObject: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamConstructorTypeObject({});

const FunctionTypeWithRequiredParamConstructorTypeString: RequiredParamDefaults["ConstructorType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamConstructorTypeString("two");
const RemoveRequiredParamConstructorTypeString: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamConstructorTypeString("two");

const FunctionTypeWithRequiredParamConstructorTypeNumber: RequiredParamDefaults["ConstructorType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamConstructorTypeNumber(2);
const RemoveRequiredParamConstructorTypeNumber: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamConstructorTypeNumber(2);

const FunctionTypeWithRequiredParamConstructorTypeBoolean: RequiredParamDefaults["ConstructorType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamConstructorTypeBoolean(true);
const RemoveRequiredParamConstructorTypeBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamConstructorTypeBoolean(true);

const FunctionTypeWithRequiredParamConstructorTypeAny: RequiredParamDefaults["ConstructorType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamConstructorTypeAny(2);
const RemoveRequiredParamConstructorTypeAny: VoidFunctionNoParam = (
  param,
) => {};
RemoveRequiredParamConstructorTypeAny(2);

// Optional
const FunctionTypeWithOptionalParamConstructorTypeLiteral: OptionalParamDefaults["ConstructorType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamConstructorTypeLiteral(1);
const RemoveOptionalParamConstructorTypeLiteral: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamConstructorTypeLiteral(1);

const FunctionTypeWithOptionalParamConstructorTypeObject: OptionalParamDefaults["ConstructorType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamConstructorTypeObject({});
const RemoveOptionalParamConstructorTypeObject: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamConstructorTypeObject({});

const FunctionTypeWithOptionalParamConstructorTypeString: OptionalParamDefaults["ConstructorType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamConstructorTypeString("two");
const RemoveOptionalParamConstructorTypeString: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamConstructorTypeString("two");

const FunctionTypeWithOptionalParamConstructorTypeNumber: OptionalParamDefaults["ConstructorType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamConstructorTypeNumber(2);
const RemoveOptionalParamConstructorTypeNumber: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamConstructorTypeNumber(2);

const FunctionTypeWithOptionalParamConstructorTypeBoolean: OptionalParamDefaults["ConstructorType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamConstructorTypeBoolean(true);
const RemoveOptionalParamConstructorTypeBoolean: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamConstructorTypeBoolean(true);

const FunctionTypeWithOptionalParamConstructorTypeAny: OptionalParamDefaults["ConstructorType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamConstructorTypeAny(2);
const RemoveOptionalParamConstructorTypeAny: VoidFunctionNoParam = (
  param,
) => {};
RemoveOptionalParamConstructorTypeAny(2);
