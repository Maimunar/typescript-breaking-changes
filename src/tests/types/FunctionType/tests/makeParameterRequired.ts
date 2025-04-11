import { Defaults as GeneralDefaults } from "../../defaults";
import { RequiredParamDefaults, OptionalParamDefaults } from "../defaults";
/*
 * FunctionType
 */

// Make Parameter Optional - ParenthesizedType
const FunctionTypeWithOptionalParamParenthesizedTypeLiteral: OptionalParamDefaults["ParenthesizedType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamParenthesizedTypeLiteral(1);
FunctionTypeWithOptionalParamParenthesizedTypeLiteral();
const ChangeOptionalParamToRequiredParenthesizedTypeLiteral: RequiredParamDefaults["ParenthesizedType"]["Literal"] =
  (param) => {};
ChangeOptionalParamToRequiredParenthesizedTypeLiteral(1);
ChangeOptionalParamToRequiredParenthesizedTypeLiteral();

const FunctionTypeWithOptionalParamParenthesizedTypeObject: OptionalParamDefaults["ParenthesizedType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamParenthesizedTypeObject({});
FunctionTypeWithOptionalParamParenthesizedTypeObject();
const ChangeOptionalParamToRequiredParenthesizedTypeObject: RequiredParamDefaults["ParenthesizedType"]["Object"] =
  (param) => {};
ChangeOptionalParamToRequiredParenthesizedTypeObject({});
ChangeOptionalParamToRequiredParenthesizedTypeObject();

const FunctionTypeWithOptionalParamParenthesizedTypeString: OptionalParamDefaults["ParenthesizedType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamParenthesizedTypeString("two");
FunctionTypeWithOptionalParamParenthesizedTypeString();
const ChangeOptionalParamToRequiredParenthesizedTypeString: RequiredParamDefaults["ParenthesizedType"]["String"] =
  (param) => {};
ChangeOptionalParamToRequiredParenthesizedTypeString("two");
ChangeOptionalParamToRequiredParenthesizedTypeString();

const FunctionTypeWithOptionalParamParenthesizedTypeNumber: OptionalParamDefaults["ParenthesizedType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamParenthesizedTypeNumber(2);
FunctionTypeWithOptionalParamParenthesizedTypeNumber();
const ChangeOptionalParamToRequiredParenthesizedTypeNumber: RequiredParamDefaults["ParenthesizedType"]["Number"] =
  (param) => {};
ChangeOptionalParamToRequiredParenthesizedTypeNumber(2);
ChangeOptionalParamToRequiredParenthesizedTypeNumber();

const FunctionTypeWithOptionalParamParenthesizedTypeBoolean: OptionalParamDefaults["ParenthesizedType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamParenthesizedTypeBoolean(true);
FunctionTypeWithOptionalParamParenthesizedTypeBoolean();
const ChangeOptionalParamToRequiredParenthesizedTypeBoolean: RequiredParamDefaults["ParenthesizedType"]["Boolean"] =
  (param) => {};
ChangeOptionalParamToRequiredParenthesizedTypeBoolean(true);
ChangeOptionalParamToRequiredParenthesizedTypeBoolean();

const FunctionTypeWithOptionalParamParenthesizedTypeAny: OptionalParamDefaults["ParenthesizedType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamParenthesizedTypeAny(2);
FunctionTypeWithOptionalParamParenthesizedTypeAny();
const ChangeOptionalParamToRequiredParenthesizedTypeAny: RequiredParamDefaults["ParenthesizedType"]["Any"] =
  (param) => {};
ChangeOptionalParamToRequiredParenthesizedTypeAny(2);
ChangeOptionalParamToRequiredParenthesizedTypeAny();

// Make Parameter Optional - TypeReferenceBuiltin
const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);
const FunctionTypeWithOptionalParamTypeReferenceBuiltinLiteral: OptionalParamDefaults["TypeReferenceBuiltin"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferenceBuiltinLiteral(promisify(1));
FunctionTypeWithOptionalParamTypeReferenceBuiltinLiteral();
const ChangeOptionalParamToRequiredTypeReferenceBuiltinLiteral: RequiredParamDefaults["TypeReferenceBuiltin"]["Literal"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeReferenceBuiltinLiteral(promisify(1));
ChangeOptionalParamToRequiredTypeReferenceBuiltinLiteral();

const FunctionTypeWithOptionalParamTypeReferenceBuiltinObject: OptionalParamDefaults["TypeReferenceBuiltin"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferenceBuiltinObject(promisify({}));
FunctionTypeWithOptionalParamTypeReferenceBuiltinObject();
const ChangeOptionalParamToRequiredTypeReferenceBuiltinObject: RequiredParamDefaults["TypeReferenceBuiltin"]["Object"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeReferenceBuiltinObject(promisify({}));
ChangeOptionalParamToRequiredTypeReferenceBuiltinObject();

const FunctionTypeWithOptionalParamTypeReferenceBuiltinString: OptionalParamDefaults["TypeReferenceBuiltin"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferenceBuiltinString(promisify("two"));
FunctionTypeWithOptionalParamTypeReferenceBuiltinString();
const ChangeOptionalParamToRequiredTypeReferenceBuiltinString: RequiredParamDefaults["TypeReferenceBuiltin"]["String"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeReferenceBuiltinString(promisify("two"));
ChangeOptionalParamToRequiredTypeReferenceBuiltinString();

const FunctionTypeWithOptionalParamTypeReferenceBuiltinNumber: OptionalParamDefaults["TypeReferenceBuiltin"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferenceBuiltinNumber(promisify(2));
FunctionTypeWithOptionalParamTypeReferenceBuiltinNumber();
const ChangeOptionalParamToRequiredTypeReferenceBuiltinNumber: RequiredParamDefaults["TypeReferenceBuiltin"]["Number"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeReferenceBuiltinNumber(promisify(2));
ChangeOptionalParamToRequiredTypeReferenceBuiltinNumber();

const FunctionTypeWithOptionalParamTypeReferenceBuiltinBoolean: OptionalParamDefaults["TypeReferenceBuiltin"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferenceBuiltinBoolean(promisify(true));
FunctionTypeWithOptionalParamTypeReferenceBuiltinBoolean();
const ChangeOptionalParamToRequiredTypeReferenceBuiltinBoolean: RequiredParamDefaults["TypeReferenceBuiltin"]["Boolean"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeReferenceBuiltinBoolean(promisify(true));
ChangeOptionalParamToRequiredTypeReferenceBuiltinBoolean();

const FunctionTypeWithOptionalParamTypeReferenceBuiltinAny: OptionalParamDefaults["TypeReferenceBuiltin"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferenceBuiltinAny(promisify(2));
FunctionTypeWithOptionalParamTypeReferenceBuiltinAny();
const ChangeOptionalParamToRequiredTypeReferenceBuiltinAny: RequiredParamDefaults["TypeReferenceBuiltin"]["Any"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeReferenceBuiltinAny(promisify(2));
ChangeOptionalParamToRequiredTypeReferenceBuiltinAny();

// Make Parameter Optional - TypeReferencePredefined
const FunctionTypeWithOptionalParamTypeReferencePredefinedLiteral: OptionalParamDefaults["TypeReferencePredefined"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferencePredefinedLiteral(1);
FunctionTypeWithOptionalParamTypeReferencePredefinedLiteral();
const ChangeOptionalParamToRequiredTypeReferencePredefinedLiteral: RequiredParamDefaults["TypeReferencePredefined"]["Literal"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeReferencePredefinedLiteral(1);
ChangeOptionalParamToRequiredTypeReferencePredefinedLiteral();

const FunctionTypeWithOptionalParamTypeReferencePredefinedObject: OptionalParamDefaults["TypeReferencePredefined"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferencePredefinedObject({});
FunctionTypeWithOptionalParamTypeReferencePredefinedObject();
const ChangeOptionalParamToRequiredTypeReferencePredefinedObject: RequiredParamDefaults["TypeReferencePredefined"]["Object"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeReferencePredefinedObject({});
ChangeOptionalParamToRequiredTypeReferencePredefinedObject();

const FunctionTypeWithOptionalParamTypeReferencePredefinedString: OptionalParamDefaults["TypeReferencePredefined"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferencePredefinedString("two");
FunctionTypeWithOptionalParamTypeReferencePredefinedString();
const ChangeOptionalParamToRequiredTypeReferencePredefinedString: RequiredParamDefaults["TypeReferencePredefined"]["String"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeReferencePredefinedString("two");
ChangeOptionalParamToRequiredTypeReferencePredefinedString();

const FunctionTypeWithOptionalParamTypeReferencePredefinedNumber: OptionalParamDefaults["TypeReferencePredefined"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferencePredefinedNumber(2);
FunctionTypeWithOptionalParamTypeReferencePredefinedNumber();
const ChangeOptionalParamToRequiredTypeReferencePredefinedNumber: RequiredParamDefaults["TypeReferencePredefined"]["Number"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeReferencePredefinedNumber(2);
ChangeOptionalParamToRequiredTypeReferencePredefinedNumber();

const FunctionTypeWithOptionalParamTypeReferencePredefinedBoolean: OptionalParamDefaults["TypeReferencePredefined"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferencePredefinedBoolean(true);
FunctionTypeWithOptionalParamTypeReferencePredefinedBoolean();
const ChangeOptionalParamToRequiredTypeReferencePredefinedBoolean: RequiredParamDefaults["TypeReferencePredefined"]["Boolean"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeReferencePredefinedBoolean(true);
ChangeOptionalParamToRequiredTypeReferencePredefinedBoolean();

const FunctionTypeWithOptionalParamTypeReferencePredefinedAny: OptionalParamDefaults["TypeReferencePredefined"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeReferencePredefinedAny(2);
FunctionTypeWithOptionalParamTypeReferencePredefinedAny();
const ChangeOptionalParamToRequiredTypeReferencePredefinedAny: RequiredParamDefaults["TypeReferencePredefined"]["Any"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeReferencePredefinedAny(2);
ChangeOptionalParamToRequiredTypeReferencePredefinedAny();

// Make Parameter Optional - UnionType
const FunctionTypeWithOptionalParamUnionTypeLiteral: OptionalParamDefaults["UnionType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamUnionTypeLiteral(1);
FunctionTypeWithOptionalParamUnionTypeLiteral();
const ChangeOptionalParamToRequiredUnionTypeLiteral: RequiredParamDefaults["UnionType"]["Literal"] =
  (param) => {};
ChangeOptionalParamToRequiredUnionTypeLiteral(1);
ChangeOptionalParamToRequiredUnionTypeLiteral();

const FunctionTypeWithOptionalParamUnionTypeObject: OptionalParamDefaults["UnionType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamUnionTypeObject({});
FunctionTypeWithOptionalParamUnionTypeObject();
const ChangeOptionalParamToRequiredUnionTypeObject: RequiredParamDefaults["UnionType"]["Object"] =
  (param) => {};
ChangeOptionalParamToRequiredUnionTypeObject({});
ChangeOptionalParamToRequiredUnionTypeObject();

const FunctionTypeWithOptionalParamUnionTypeString: OptionalParamDefaults["UnionType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamUnionTypeString("two");
FunctionTypeWithOptionalParamUnionTypeString();
const ChangeOptionalParamToRequiredUnionTypeString: RequiredParamDefaults["UnionType"]["String"] =
  (param) => {};
ChangeOptionalParamToRequiredUnionTypeString("two");
ChangeOptionalParamToRequiredUnionTypeString();

const FunctionTypeWithOptionalParamUnionTypeNumber: OptionalParamDefaults["UnionType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamUnionTypeNumber(2);
FunctionTypeWithOptionalParamUnionTypeNumber();
const ChangeOptionalParamToRequiredUnionTypeNumber: RequiredParamDefaults["UnionType"]["Number"] =
  (param) => {};
ChangeOptionalParamToRequiredUnionTypeNumber(2);
ChangeOptionalParamToRequiredUnionTypeNumber();

const FunctionTypeWithOptionalParamUnionTypeBoolean: OptionalParamDefaults["UnionType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamUnionTypeBoolean(true);
FunctionTypeWithOptionalParamUnionTypeBoolean();
const ChangeOptionalParamToRequiredUnionTypeBoolean: RequiredParamDefaults["UnionType"]["Boolean"] =
  (param) => {};
ChangeOptionalParamToRequiredUnionTypeBoolean(true);
ChangeOptionalParamToRequiredUnionTypeBoolean();

const FunctionTypeWithOptionalParamUnionTypeAny: OptionalParamDefaults["UnionType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamUnionTypeAny(2);
FunctionTypeWithOptionalParamUnionTypeAny();
const ChangeOptionalParamToRequiredUnionTypeAny: RequiredParamDefaults["UnionType"]["Any"] =
  (param) => {};
ChangeOptionalParamToRequiredUnionTypeAny(2);
ChangeOptionalParamToRequiredUnionTypeAny();

// Make Parameter Optional - IntersectionType
const FunctionTypeWithOptionalParamIntersectionTypeLiteral: OptionalParamDefaults["IntersectionType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamIntersectionTypeLiteral(1);
FunctionTypeWithOptionalParamIntersectionTypeLiteral();
const ChangeOptionalParamToRequiredIntersectionTypeLiteral: RequiredParamDefaults["IntersectionType"]["Literal"] =
  (param) => {};
ChangeOptionalParamToRequiredIntersectionTypeLiteral(1);
ChangeOptionalParamToRequiredIntersectionTypeLiteral();

const FunctionTypeWithOptionalParamIntersectionTypeObject: OptionalParamDefaults["IntersectionType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamIntersectionTypeObject({});
FunctionTypeWithOptionalParamIntersectionTypeObject();
const ChangeOptionalParamToRequiredIntersectionTypeObject: RequiredParamDefaults["IntersectionType"]["Object"] =
  (param) => {};
ChangeOptionalParamToRequiredIntersectionTypeObject({});
ChangeOptionalParamToRequiredIntersectionTypeObject();

const FunctionTypeWithOptionalParamIntersectionTypeString: OptionalParamDefaults["IntersectionType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamIntersectionTypeString("two");
FunctionTypeWithOptionalParamIntersectionTypeString();
const ChangeOptionalParamToRequiredIntersectionTypeString: RequiredParamDefaults["IntersectionType"]["String"] =
  (param) => {};
ChangeOptionalParamToRequiredIntersectionTypeString("two");
ChangeOptionalParamToRequiredIntersectionTypeString();

const FunctionTypeWithOptionalParamIntersectionTypeNumber: OptionalParamDefaults["IntersectionType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamIntersectionTypeNumber(2);
FunctionTypeWithOptionalParamIntersectionTypeNumber();
const ChangeOptionalParamToRequiredIntersectionTypeNumber: RequiredParamDefaults["IntersectionType"]["Number"] =
  (param) => {};
ChangeOptionalParamToRequiredIntersectionTypeNumber(2);
ChangeOptionalParamToRequiredIntersectionTypeNumber();

const FunctionTypeWithOptionalParamIntersectionTypeBoolean: OptionalParamDefaults["IntersectionType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamIntersectionTypeBoolean(true);
FunctionTypeWithOptionalParamIntersectionTypeBoolean();
const ChangeOptionalParamToRequiredIntersectionTypeBoolean: RequiredParamDefaults["IntersectionType"]["Boolean"] =
  (param) => {};
ChangeOptionalParamToRequiredIntersectionTypeBoolean(true);
ChangeOptionalParamToRequiredIntersectionTypeBoolean();

const FunctionTypeWithOptionalParamIntersectionTypeAny: OptionalParamDefaults["IntersectionType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamIntersectionTypeAny(2);
FunctionTypeWithOptionalParamIntersectionTypeAny();
const ChangeOptionalParamToRequiredIntersectionTypeAny: RequiredParamDefaults["IntersectionType"]["Any"] =
  (param) => {};
ChangeOptionalParamToRequiredIntersectionTypeAny(2);
ChangeOptionalParamToRequiredIntersectionTypeAny();

// Make Parameter Optional - TypeLiteral
const FunctionTypeWithOptionalParamTypeLiteralLiteral: OptionalParamDefaults["TypeLiteral"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeLiteralLiteral({ key: 1 });
FunctionTypeWithOptionalParamTypeLiteralLiteral();
const ChangeOptionalParamToRequiredTypeLiteralLiteral: RequiredParamDefaults["TypeLiteral"]["Literal"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeLiteralLiteral({ key: 1 });
ChangeOptionalParamToRequiredTypeLiteralLiteral();

const FunctionTypeWithOptionalParamTypeLiteralObject: OptionalParamDefaults["TypeLiteral"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeLiteralObject({ key: {} });
FunctionTypeWithOptionalParamTypeLiteralObject();
const ChangeOptionalParamToRequiredTypeLiteralObject: RequiredParamDefaults["TypeLiteral"]["Object"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeLiteralObject({ key: {} });
ChangeOptionalParamToRequiredTypeLiteralObject();

const FunctionTypeWithOptionalParamTypeLiteralString: OptionalParamDefaults["TypeLiteral"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeLiteralString({ key: "two" });
FunctionTypeWithOptionalParamTypeLiteralString();
const ChangeOptionalParamToRequiredTypeLiteralString: RequiredParamDefaults["TypeLiteral"]["String"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeLiteralString({ key: "two" });
ChangeOptionalParamToRequiredTypeLiteralString();

const FunctionTypeWithOptionalParamTypeLiteralNumber: OptionalParamDefaults["TypeLiteral"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeLiteralNumber({ key: 2 });
FunctionTypeWithOptionalParamTypeLiteralNumber();
const ChangeOptionalParamToRequiredTypeLiteralNumber: RequiredParamDefaults["TypeLiteral"]["Number"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeLiteralNumber({ key: 2 });
ChangeOptionalParamToRequiredTypeLiteralNumber();

const FunctionTypeWithOptionalParamTypeLiteralBoolean: OptionalParamDefaults["TypeLiteral"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeLiteralBoolean({ key: true });
FunctionTypeWithOptionalParamTypeLiteralBoolean();
const ChangeOptionalParamToRequiredTypeLiteralBoolean: RequiredParamDefaults["TypeLiteral"]["Boolean"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeLiteralBoolean({ key: true });
ChangeOptionalParamToRequiredTypeLiteralBoolean();

const FunctionTypeWithOptionalParamTypeLiteralAny: OptionalParamDefaults["TypeLiteral"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamTypeLiteralAny({ key: 2 });
FunctionTypeWithOptionalParamTypeLiteralAny();
const ChangeOptionalParamToRequiredTypeLiteralAny: RequiredParamDefaults["TypeLiteral"]["Any"] =
  (param) => {};
ChangeOptionalParamToRequiredTypeLiteralAny({ key: 2 });
ChangeOptionalParamToRequiredTypeLiteralAny();

// Make Parameter Optional - TupleType
const FunctionTypeWithOptionalParamTupleTypeLiteral: OptionalParamDefaults["TupleType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamTupleTypeLiteral([1]);
FunctionTypeWithOptionalParamTupleTypeLiteral();
const ChangeOptionalParamToRequiredTupleTypeLiteral: RequiredParamDefaults["TupleType"]["Literal"] =
  (param) => {};
ChangeOptionalParamToRequiredTupleTypeLiteral([1]);
ChangeOptionalParamToRequiredTupleTypeLiteral();

const FunctionTypeWithOptionalParamTupleTypeObject: OptionalParamDefaults["TupleType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamTupleTypeObject([{}]);
FunctionTypeWithOptionalParamTupleTypeObject();
const ChangeOptionalParamToRequiredTupleTypeObject: RequiredParamDefaults["TupleType"]["Object"] =
  (param) => {};
ChangeOptionalParamToRequiredTupleTypeObject([{}]);
ChangeOptionalParamToRequiredTupleTypeObject();

const FunctionTypeWithOptionalParamTupleTypeString: OptionalParamDefaults["TupleType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamTupleTypeString(["two"]);
FunctionTypeWithOptionalParamTupleTypeString();
const ChangeOptionalParamToRequiredTupleTypeString: RequiredParamDefaults["TupleType"]["String"] =
  (param) => {};
ChangeOptionalParamToRequiredTupleTypeString(["two"]);
ChangeOptionalParamToRequiredTupleTypeString();

const FunctionTypeWithOptionalParamTupleTypeNumber: OptionalParamDefaults["TupleType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamTupleTypeNumber([2]);
FunctionTypeWithOptionalParamTupleTypeNumber();
const ChangeOptionalParamToRequiredTupleTypeNumber: RequiredParamDefaults["TupleType"]["Number"] =
  (param) => {};
ChangeOptionalParamToRequiredTupleTypeNumber([2]);
ChangeOptionalParamToRequiredTupleTypeNumber();

const FunctionTypeWithOptionalParamTupleTypeBoolean: OptionalParamDefaults["TupleType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamTupleTypeBoolean([true]);
FunctionTypeWithOptionalParamTupleTypeBoolean();
const ChangeOptionalParamToRequiredTupleTypeBoolean: RequiredParamDefaults["TupleType"]["Boolean"] =
  (param) => {};
ChangeOptionalParamToRequiredTupleTypeBoolean([true]);
ChangeOptionalParamToRequiredTupleTypeBoolean();

const FunctionTypeWithOptionalParamTupleTypeAny: OptionalParamDefaults["TupleType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamTupleTypeAny([2]);
FunctionTypeWithOptionalParamTupleTypeAny();
const ChangeOptionalParamToRequiredTupleTypeAny: RequiredParamDefaults["TupleType"]["Any"] =
  (param) => {};
ChangeOptionalParamToRequiredTupleTypeAny([2]);
ChangeOptionalParamToRequiredTupleTypeAny();

// Make Parameter Optional - ArrayType
const FunctionTypeWithOptionalParamArrayTypeLiteral: OptionalParamDefaults["ArrayType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamArrayTypeLiteral([1, 1]);
FunctionTypeWithOptionalParamArrayTypeLiteral();
const ChangeOptionalParamToRequiredArrayTypeLiteral: RequiredParamDefaults["ArrayType"]["Literal"] =
  (param) => {};
ChangeOptionalParamToRequiredArrayTypeLiteral([1, 1]);
ChangeOptionalParamToRequiredArrayTypeLiteral();

const FunctionTypeWithOptionalParamArrayTypeObject: OptionalParamDefaults["ArrayType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamArrayTypeObject([{}, {}]);
FunctionTypeWithOptionalParamArrayTypeObject();
const ChangeOptionalParamToRequiredArrayTypeObject: RequiredParamDefaults["ArrayType"]["Object"] =
  (param) => {};
ChangeOptionalParamToRequiredArrayTypeObject([{}, {}]);
ChangeOptionalParamToRequiredArrayTypeObject();

const FunctionTypeWithOptionalParamArrayTypeString: OptionalParamDefaults["ArrayType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamArrayTypeString(["two", "two"]);
FunctionTypeWithOptionalParamArrayTypeString();
const ChangeOptionalParamToRequiredArrayTypeString: RequiredParamDefaults["ArrayType"]["String"] =
  (param) => {};
ChangeOptionalParamToRequiredArrayTypeString(["two", "two"]);
ChangeOptionalParamToRequiredArrayTypeString();

const FunctionTypeWithOptionalParamArrayTypeNumber: OptionalParamDefaults["ArrayType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamArrayTypeNumber([2, 2]);
FunctionTypeWithOptionalParamArrayTypeNumber();
const ChangeOptionalParamToRequiredArrayTypeNumber: RequiredParamDefaults["ArrayType"]["Number"] =
  (param) => {};
ChangeOptionalParamToRequiredArrayTypeNumber([2, 2]);
ChangeOptionalParamToRequiredArrayTypeNumber();

const FunctionTypeWithOptionalParamArrayTypeBoolean: OptionalParamDefaults["ArrayType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamArrayTypeBoolean([true, true]);
FunctionTypeWithOptionalParamArrayTypeBoolean();
const ChangeOptionalParamToRequiredArrayTypeBoolean: RequiredParamDefaults["ArrayType"]["Boolean"] =
  (param) => {};
ChangeOptionalParamToRequiredArrayTypeBoolean([true, true]);
ChangeOptionalParamToRequiredArrayTypeBoolean();

const FunctionTypeWithOptionalParamArrayTypeAny: OptionalParamDefaults["ArrayType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamArrayTypeAny([2, 2]);
FunctionTypeWithOptionalParamArrayTypeAny();
const ChangeOptionalParamToRequiredArrayTypeAny: RequiredParamDefaults["ArrayType"]["Any"] =
  (param) => {};
ChangeOptionalParamToRequiredArrayTypeAny([2, 2]);
ChangeOptionalParamToRequiredArrayTypeAny();

// Make Parameter Optional - FunctionType
const FunctionTypeWithOptionalParamFunctionTypeLiteral: OptionalParamDefaults["FunctionType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamFunctionTypeLiteral((param) => {});
FunctionTypeWithOptionalParamFunctionTypeLiteral();
const ChangeOptionalParamToRequiredFunctionTypeLiteral: RequiredParamDefaults["FunctionType"]["Literal"] =
  (param) => {};
ChangeOptionalParamToRequiredFunctionTypeLiteral((param) => {});
ChangeOptionalParamToRequiredFunctionTypeLiteral();

const FunctionTypeWithOptionalParamFunctionTypeObject: OptionalParamDefaults["FunctionType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamFunctionTypeObject((param) => {});
FunctionTypeWithOptionalParamFunctionTypeObject();
const ChangeOptionalParamToRequiredFunctionTypeObject: RequiredParamDefaults["FunctionType"]["Object"] =
  (param) => {};
ChangeOptionalParamToRequiredFunctionTypeObject((param) => {});
ChangeOptionalParamToRequiredFunctionTypeObject();

const FunctionTypeWithOptionalParamFunctionTypeString: OptionalParamDefaults["FunctionType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamFunctionTypeString((param) => {});
FunctionTypeWithOptionalParamFunctionTypeString();
const ChangeOptionalParamToRequiredFunctionTypeString: RequiredParamDefaults["FunctionType"]["String"] =
  (param) => {};
ChangeOptionalParamToRequiredFunctionTypeString((param) => {});
ChangeOptionalParamToRequiredFunctionTypeString();

const FunctionTypeWithOptionalParamFunctionTypeNumber: OptionalParamDefaults["FunctionType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamFunctionTypeNumber((param) => {});
FunctionTypeWithOptionalParamFunctionTypeNumber();
const ChangeOptionalParamToRequiredFunctionTypeNumber: RequiredParamDefaults["FunctionType"]["Number"] =
  (param) => {};
ChangeOptionalParamToRequiredFunctionTypeNumber((param) => {});
ChangeOptionalParamToRequiredFunctionTypeNumber();

const FunctionTypeWithOptionalParamFunctionTypeBoolean: OptionalParamDefaults["FunctionType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamFunctionTypeBoolean((param) => {});
FunctionTypeWithOptionalParamFunctionTypeBoolean();
const ChangeOptionalParamToRequiredFunctionTypeBoolean: RequiredParamDefaults["FunctionType"]["Boolean"] =
  (param) => {};
ChangeOptionalParamToRequiredFunctionTypeBoolean((param) => {});
ChangeOptionalParamToRequiredFunctionTypeBoolean();

const FunctionTypeWithOptionalParamFunctionTypeAny: OptionalParamDefaults["FunctionType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamFunctionTypeAny((param) => {});
FunctionTypeWithOptionalParamFunctionTypeAny();
const ChangeOptionalParamToRequiredFunctionTypeAny: RequiredParamDefaults["FunctionType"]["Any"] =
  (param) => {};
ChangeOptionalParamToRequiredFunctionTypeAny((param) => {});
ChangeOptionalParamToRequiredFunctionTypeAny();

// Make Parameter Optional - ConstructorType
const FunctionTypeWithOptionalParamConstructorTypeLiteral: OptionalParamDefaults["ConstructorType"]["Literal"] =
  (param) => {};
FunctionTypeWithOptionalParamConstructorTypeLiteral(1);
FunctionTypeWithOptionalParamConstructorTypeLiteral();
const ChangeOptionalParamToRequiredConstructorTypeLiteral: RequiredParamDefaults["ConstructorType"]["Literal"] =
  (param) => {};
ChangeOptionalParamToRequiredConstructorTypeLiteral(1);
ChangeOptionalParamToRequiredConstructorTypeLiteral();

const FunctionTypeWithOptionalParamConstructorTypeObject: OptionalParamDefaults["ConstructorType"]["Object"] =
  (param) => {};
FunctionTypeWithOptionalParamConstructorTypeObject({});
FunctionTypeWithOptionalParamConstructorTypeObject();
const ChangeOptionalParamToRequiredConstructorTypeObject: RequiredParamDefaults["ConstructorType"]["Object"] =
  (param) => {};
ChangeOptionalParamToRequiredConstructorTypeObject({});
ChangeOptionalParamToRequiredConstructorTypeObject();

const FunctionTypeWithOptionalParamConstructorTypeString: OptionalParamDefaults["ConstructorType"]["String"] =
  (param) => {};
FunctionTypeWithOptionalParamConstructorTypeString("two");
FunctionTypeWithOptionalParamConstructorTypeString();
const ChangeOptionalParamToRequiredConstructorTypeString: RequiredParamDefaults["ConstructorType"]["String"] =
  (param) => {};
ChangeOptionalParamToRequiredConstructorTypeString("two");
ChangeOptionalParamToRequiredConstructorTypeString();

const FunctionTypeWithOptionalParamConstructorTypeNumber: OptionalParamDefaults["ConstructorType"]["Number"] =
  (param) => {};
FunctionTypeWithOptionalParamConstructorTypeNumber(2);
FunctionTypeWithOptionalParamConstructorTypeNumber();
const ChangeOptionalParamToRequiredConstructorTypeNumber: RequiredParamDefaults["ConstructorType"]["Number"] =
  (param) => {};
ChangeOptionalParamToRequiredConstructorTypeNumber(2);
ChangeOptionalParamToRequiredConstructorTypeNumber();

const FunctionTypeWithOptionalParamConstructorTypeBoolean: OptionalParamDefaults["ConstructorType"]["Boolean"] =
  (param) => {};
FunctionTypeWithOptionalParamConstructorTypeBoolean(true);
FunctionTypeWithOptionalParamConstructorTypeBoolean();
const ChangeOptionalParamToRequiredConstructorTypeBoolean: RequiredParamDefaults["ConstructorType"]["Boolean"] =
  (param) => {};
ChangeOptionalParamToRequiredConstructorTypeBoolean(true);
ChangeOptionalParamToRequiredConstructorTypeBoolean();

const FunctionTypeWithOptionalParamConstructorTypeAny: OptionalParamDefaults["ConstructorType"]["Any"] =
  (param) => {};
FunctionTypeWithOptionalParamConstructorTypeAny(2);
FunctionTypeWithOptionalParamConstructorTypeAny();
const ChangeOptionalParamToRequiredConstructorTypeAny: RequiredParamDefaults["ConstructorType"]["Any"] =
  (param) => {};
ChangeOptionalParamToRequiredConstructorTypeAny(2);
ChangeOptionalParamToRequiredConstructorTypeAny();
