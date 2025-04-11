import { Defaults as GeneralDefaults } from "../../defaults";
import { RequiredParamDefaults, OptionalParamDefaults } from "../defaults";
/*
 * FunctionType
 */

// Make Parameter Optional - ParenthesizedType
const FunctionTypeWithRequiredParamParenthesizedTypeLiteral: RequiredParamDefaults["ParenthesizedType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamParenthesizedTypeLiteral(1);
const ChangeRequiredParamToOptionalParenthesizedTypeLiteral: OptionalParamDefaults["ParenthesizedType"]["Literal"] =
  (param) => {};
ChangeRequiredParamToOptionalParenthesizedTypeLiteral(1);
const FunctionTypeWithRequiredParamParenthesizedTypeObject: RequiredParamDefaults["ParenthesizedType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamParenthesizedTypeObject({});
const ChangeRequiredParamToOptionalParenthesizedTypeObject: OptionalParamDefaults["ParenthesizedType"]["Object"] =
  (param) => {};
ChangeRequiredParamToOptionalParenthesizedTypeObject({});
const FunctionTypeWithRequiredParamParenthesizedTypeString: RequiredParamDefaults["ParenthesizedType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamParenthesizedTypeString("two");
const ChangeRequiredParamToOptionalParenthesizedTypeString: OptionalParamDefaults["ParenthesizedType"]["String"] =
  (param) => {};
ChangeRequiredParamToOptionalParenthesizedTypeString("two");
const FunctionTypeWithRequiredParamParenthesizedTypeNumber: RequiredParamDefaults["ParenthesizedType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamParenthesizedTypeNumber(2);
const ChangeRequiredParamToOptionalParenthesizedTypeNumber: OptionalParamDefaults["ParenthesizedType"]["Number"] =
  (param) => {};
ChangeRequiredParamToOptionalParenthesizedTypeNumber(2);
const FunctionTypeWithRequiredParamParenthesizedTypeBoolean: RequiredParamDefaults["ParenthesizedType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamParenthesizedTypeBoolean(true);
const ChangeRequiredParamToOptionalParenthesizedTypeBoolean: OptionalParamDefaults["ParenthesizedType"]["Boolean"] =
  (param) => {};
ChangeRequiredParamToOptionalParenthesizedTypeBoolean(true);
const FunctionTypeWithRequiredParamParenthesizedTypeAny: RequiredParamDefaults["ParenthesizedType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamParenthesizedTypeAny(2);
const ChangeRequiredParamToOptionalParenthesizedTypeAny: OptionalParamDefaults["ParenthesizedType"]["Any"] =
  (param) => {};
ChangeRequiredParamToOptionalParenthesizedTypeAny(2);
// Make Parameter Optional - TypeReferenceBuiltin
const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);
const FunctionTypeWithRequiredParamTypeReferenceBuiltinLiteral: RequiredParamDefaults["TypeReferenceBuiltin"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferenceBuiltinLiteral(promisify(1));
const ChangeRequiredParamToOptionalTypeReferenceBuiltinLiteral: OptionalParamDefaults["TypeReferenceBuiltin"]["Literal"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeReferenceBuiltinLiteral(promisify(1));
const FunctionTypeWithRequiredParamTypeReferenceBuiltinObject: RequiredParamDefaults["TypeReferenceBuiltin"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferenceBuiltinObject(promisify({}));
const ChangeRequiredParamToOptionalTypeReferenceBuiltinObject: OptionalParamDefaults["TypeReferenceBuiltin"]["Object"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeReferenceBuiltinObject(promisify({}));
const FunctionTypeWithRequiredParamTypeReferenceBuiltinString: RequiredParamDefaults["TypeReferenceBuiltin"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferenceBuiltinString(promisify("two"));
const ChangeRequiredParamToOptionalTypeReferenceBuiltinString: OptionalParamDefaults["TypeReferenceBuiltin"]["String"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeReferenceBuiltinString(promisify("two"));
const FunctionTypeWithRequiredParamTypeReferenceBuiltinNumber: RequiredParamDefaults["TypeReferenceBuiltin"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferenceBuiltinNumber(promisify(2));
const ChangeRequiredParamToOptionalTypeReferenceBuiltinNumber: OptionalParamDefaults["TypeReferenceBuiltin"]["Number"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeReferenceBuiltinNumber(promisify(2));
const FunctionTypeWithRequiredParamTypeReferenceBuiltinBoolean: RequiredParamDefaults["TypeReferenceBuiltin"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferenceBuiltinBoolean(promisify(true));
const ChangeRequiredParamToOptionalTypeReferenceBuiltinBoolean: OptionalParamDefaults["TypeReferenceBuiltin"]["Boolean"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeReferenceBuiltinBoolean(promisify(true));
const FunctionTypeWithRequiredParamTypeReferenceBuiltinAny: RequiredParamDefaults["TypeReferenceBuiltin"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferenceBuiltinAny(promisify(2));
const ChangeRequiredParamToOptionalTypeReferenceBuiltinAny: OptionalParamDefaults["TypeReferenceBuiltin"]["Any"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeReferenceBuiltinAny(promisify(2));
// Make Parameter Optional - TypeReferencePredefined
const FunctionTypeWithRequiredParamTypeReferencePredefinedLiteral: RequiredParamDefaults["TypeReferencePredefined"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferencePredefinedLiteral(1);
const ChangeRequiredParamToOptionalTypeReferencePredefinedLiteral: OptionalParamDefaults["TypeReferencePredefined"]["Literal"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeReferencePredefinedLiteral(1);
const FunctionTypeWithRequiredParamTypeReferencePredefinedObject: RequiredParamDefaults["TypeReferencePredefined"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferencePredefinedObject({});
const ChangeRequiredParamToOptionalTypeReferencePredefinedObject: OptionalParamDefaults["TypeReferencePredefined"]["Object"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeReferencePredefinedObject({});
const FunctionTypeWithRequiredParamTypeReferencePredefinedString: RequiredParamDefaults["TypeReferencePredefined"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferencePredefinedString("two");
const ChangeRequiredParamToOptionalTypeReferencePredefinedString: OptionalParamDefaults["TypeReferencePredefined"]["String"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeReferencePredefinedString("two");
const FunctionTypeWithRequiredParamTypeReferencePredefinedNumber: RequiredParamDefaults["TypeReferencePredefined"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferencePredefinedNumber(2);
const ChangeRequiredParamToOptionalTypeReferencePredefinedNumber: OptionalParamDefaults["TypeReferencePredefined"]["Number"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeReferencePredefinedNumber(2);
const FunctionTypeWithRequiredParamTypeReferencePredefinedBoolean: RequiredParamDefaults["TypeReferencePredefined"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferencePredefinedBoolean(true);
const ChangeRequiredParamToOptionalTypeReferencePredefinedBoolean: OptionalParamDefaults["TypeReferencePredefined"]["Boolean"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeReferencePredefinedBoolean(true);
const FunctionTypeWithRequiredParamTypeReferencePredefinedAny: RequiredParamDefaults["TypeReferencePredefined"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeReferencePredefinedAny(2);
const ChangeRequiredParamToOptionalTypeReferencePredefinedAny: OptionalParamDefaults["TypeReferencePredefined"]["Any"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeReferencePredefinedAny(2);
// Make Parameter Optional - UnionType
const FunctionTypeWithRequiredParamUnionTypeLiteral: RequiredParamDefaults["UnionType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamUnionTypeLiteral(1);
const ChangeRequiredParamToOptionalUnionTypeLiteral: OptionalParamDefaults["UnionType"]["Literal"] =
  (param) => {};
ChangeRequiredParamToOptionalUnionTypeLiteral(1);
const FunctionTypeWithRequiredParamUnionTypeObject: RequiredParamDefaults["UnionType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamUnionTypeObject({});
const ChangeRequiredParamToOptionalUnionTypeObject: OptionalParamDefaults["UnionType"]["Object"] =
  (param) => {};
ChangeRequiredParamToOptionalUnionTypeObject({});
const FunctionTypeWithRequiredParamUnionTypeString: RequiredParamDefaults["UnionType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamUnionTypeString("two");
const ChangeRequiredParamToOptionalUnionTypeString: OptionalParamDefaults["UnionType"]["String"] =
  (param) => {};
ChangeRequiredParamToOptionalUnionTypeString("two");
const FunctionTypeWithRequiredParamUnionTypeNumber: RequiredParamDefaults["UnionType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamUnionTypeNumber(2);
const ChangeRequiredParamToOptionalUnionTypeNumber: OptionalParamDefaults["UnionType"]["Number"] =
  (param) => {};
ChangeRequiredParamToOptionalUnionTypeNumber(2);
const FunctionTypeWithRequiredParamUnionTypeBoolean: RequiredParamDefaults["UnionType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamUnionTypeBoolean(true);
const ChangeRequiredParamToOptionalUnionTypeBoolean: OptionalParamDefaults["UnionType"]["Boolean"] =
  (param) => {};
ChangeRequiredParamToOptionalUnionTypeBoolean(true);
const FunctionTypeWithRequiredParamUnionTypeAny: RequiredParamDefaults["UnionType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamUnionTypeAny(2);
const ChangeRequiredParamToOptionalUnionTypeAny: OptionalParamDefaults["UnionType"]["Any"] =
  (param) => {};
ChangeRequiredParamToOptionalUnionTypeAny(2);
// Make Parameter Optional - IntersectionType
const FunctionTypeWithRequiredParamIntersectionTypeLiteral: RequiredParamDefaults["IntersectionType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamIntersectionTypeLiteral(1);
const ChangeRequiredParamToOptionalIntersectionTypeLiteral: OptionalParamDefaults["IntersectionType"]["Literal"] =
  (param) => {};
ChangeRequiredParamToOptionalIntersectionTypeLiteral(1);
const FunctionTypeWithRequiredParamIntersectionTypeObject: RequiredParamDefaults["IntersectionType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamIntersectionTypeObject({});
const ChangeRequiredParamToOptionalIntersectionTypeObject: OptionalParamDefaults["IntersectionType"]["Object"] =
  (param) => {};
ChangeRequiredParamToOptionalIntersectionTypeObject({});
const FunctionTypeWithRequiredParamIntersectionTypeString: RequiredParamDefaults["IntersectionType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamIntersectionTypeString("two");
const ChangeRequiredParamToOptionalIntersectionTypeString: OptionalParamDefaults["IntersectionType"]["String"] =
  (param) => {};
ChangeRequiredParamToOptionalIntersectionTypeString("two");
const FunctionTypeWithRequiredParamIntersectionTypeNumber: RequiredParamDefaults["IntersectionType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamIntersectionTypeNumber(2);
const ChangeRequiredParamToOptionalIntersectionTypeNumber: OptionalParamDefaults["IntersectionType"]["Number"] =
  (param) => {};
ChangeRequiredParamToOptionalIntersectionTypeNumber(2);
const FunctionTypeWithRequiredParamIntersectionTypeBoolean: RequiredParamDefaults["IntersectionType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamIntersectionTypeBoolean(true);
const ChangeRequiredParamToOptionalIntersectionTypeBoolean: OptionalParamDefaults["IntersectionType"]["Boolean"] =
  (param) => {};
ChangeRequiredParamToOptionalIntersectionTypeBoolean(true);
const FunctionTypeWithRequiredParamIntersectionTypeAny: RequiredParamDefaults["IntersectionType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamIntersectionTypeAny(2);
const ChangeRequiredParamToOptionalIntersectionTypeAny: OptionalParamDefaults["IntersectionType"]["Any"] =
  (param) => {};
ChangeRequiredParamToOptionalIntersectionTypeAny(2);
// Make Parameter Optional - TypeLiteral
const FunctionTypeWithRequiredParamTypeLiteralLiteral: RequiredParamDefaults["TypeLiteral"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeLiteralLiteral({ key: 1 });
const ChangeRequiredParamToOptionalTypeLiteralLiteral: OptionalParamDefaults["TypeLiteral"]["Literal"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeLiteralLiteral({ key: 1 });
const FunctionTypeWithRequiredParamTypeLiteralObject: RequiredParamDefaults["TypeLiteral"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeLiteralObject({ key: {} });
const ChangeRequiredParamToOptionalTypeLiteralObject: OptionalParamDefaults["TypeLiteral"]["Object"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeLiteralObject({ key: {} });
const FunctionTypeWithRequiredParamTypeLiteralString: RequiredParamDefaults["TypeLiteral"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeLiteralString({ key: "two" });
const ChangeRequiredParamToOptionalTypeLiteralString: OptionalParamDefaults["TypeLiteral"]["String"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeLiteralString({ key: "two" });
const FunctionTypeWithRequiredParamTypeLiteralNumber: RequiredParamDefaults["TypeLiteral"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeLiteralNumber({ key: 2 });
const ChangeRequiredParamToOptionalTypeLiteralNumber: OptionalParamDefaults["TypeLiteral"]["Number"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeLiteralNumber({ key: 2 });
const FunctionTypeWithRequiredParamTypeLiteralBoolean: RequiredParamDefaults["TypeLiteral"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeLiteralBoolean({ key: true });
const ChangeRequiredParamToOptionalTypeLiteralBoolean: OptionalParamDefaults["TypeLiteral"]["Boolean"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeLiteralBoolean({ key: true });
const FunctionTypeWithRequiredParamTypeLiteralAny: RequiredParamDefaults["TypeLiteral"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamTypeLiteralAny({ key: 2 });
const ChangeRequiredParamToOptionalTypeLiteralAny: OptionalParamDefaults["TypeLiteral"]["Any"] =
  (param) => {};
ChangeRequiredParamToOptionalTypeLiteralAny({ key: 2 });
// Make Parameter Optional - TupleType
const FunctionTypeWithRequiredParamTupleTypeLiteral: RequiredParamDefaults["TupleType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamTupleTypeLiteral([1]);
const ChangeRequiredParamToOptionalTupleTypeLiteral: OptionalParamDefaults["TupleType"]["Literal"] =
  (param) => {};
ChangeRequiredParamToOptionalTupleTypeLiteral([1]);
const FunctionTypeWithRequiredParamTupleTypeObject: RequiredParamDefaults["TupleType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamTupleTypeObject([{}]);
const ChangeRequiredParamToOptionalTupleTypeObject: OptionalParamDefaults["TupleType"]["Object"] =
  (param) => {};
ChangeRequiredParamToOptionalTupleTypeObject([{}]);
const FunctionTypeWithRequiredParamTupleTypeString: RequiredParamDefaults["TupleType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamTupleTypeString(["two"]);
const ChangeRequiredParamToOptionalTupleTypeString: OptionalParamDefaults["TupleType"]["String"] =
  (param) => {};
ChangeRequiredParamToOptionalTupleTypeString(["two"]);
const FunctionTypeWithRequiredParamTupleTypeNumber: RequiredParamDefaults["TupleType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamTupleTypeNumber([2]);
const ChangeRequiredParamToOptionalTupleTypeNumber: OptionalParamDefaults["TupleType"]["Number"] =
  (param) => {};
ChangeRequiredParamToOptionalTupleTypeNumber([2]);
const FunctionTypeWithRequiredParamTupleTypeBoolean: RequiredParamDefaults["TupleType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamTupleTypeBoolean([true]);
const ChangeRequiredParamToOptionalTupleTypeBoolean: OptionalParamDefaults["TupleType"]["Boolean"] =
  (param) => {};
ChangeRequiredParamToOptionalTupleTypeBoolean([true]);
const FunctionTypeWithRequiredParamTupleTypeAny: RequiredParamDefaults["TupleType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamTupleTypeAny([2]);
const ChangeRequiredParamToOptionalTupleTypeAny: OptionalParamDefaults["TupleType"]["Any"] =
  (param) => {};
ChangeRequiredParamToOptionalTupleTypeAny([2]);
// Make Parameter Optional - ArrayType
const FunctionTypeWithRequiredParamArrayTypeLiteral: RequiredParamDefaults["ArrayType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamArrayTypeLiteral([1, 1]);
const ChangeRequiredParamToOptionalArrayTypeLiteral: OptionalParamDefaults["ArrayType"]["Literal"] =
  (param) => {};
ChangeRequiredParamToOptionalArrayTypeLiteral([1, 1]);
const FunctionTypeWithRequiredParamArrayTypeObject: RequiredParamDefaults["ArrayType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamArrayTypeObject([{}, {}]);
const ChangeRequiredParamToOptionalArrayTypeObject: OptionalParamDefaults["ArrayType"]["Object"] =
  (param) => {};
ChangeRequiredParamToOptionalArrayTypeObject([{}, {}]);
const FunctionTypeWithRequiredParamArrayTypeString: RequiredParamDefaults["ArrayType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamArrayTypeString(["two", "two"]);
const ChangeRequiredParamToOptionalArrayTypeString: OptionalParamDefaults["ArrayType"]["String"] =
  (param) => {};
ChangeRequiredParamToOptionalArrayTypeString(["two", "two"]);
const FunctionTypeWithRequiredParamArrayTypeNumber: RequiredParamDefaults["ArrayType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamArrayTypeNumber([2, 2]);
const ChangeRequiredParamToOptionalArrayTypeNumber: OptionalParamDefaults["ArrayType"]["Number"] =
  (param) => {};
ChangeRequiredParamToOptionalArrayTypeNumber([2, 2]);
const FunctionTypeWithRequiredParamArrayTypeBoolean: RequiredParamDefaults["ArrayType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamArrayTypeBoolean([true, true]);
const ChangeRequiredParamToOptionalArrayTypeBoolean: OptionalParamDefaults["ArrayType"]["Boolean"] =
  (param) => {};
ChangeRequiredParamToOptionalArrayTypeBoolean([true, true]);
const FunctionTypeWithRequiredParamArrayTypeAny: RequiredParamDefaults["ArrayType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamArrayTypeAny([2, 2]);
const ChangeRequiredParamToOptionalArrayTypeAny: OptionalParamDefaults["ArrayType"]["Any"] =
  (param) => {};
ChangeRequiredParamToOptionalArrayTypeAny([2, 2]);
// Make Parameter Optional - FunctionType
const FunctionTypeWithRequiredParamFunctionTypeLiteral: RequiredParamDefaults["FunctionType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamFunctionTypeLiteral((param) => {});
const ChangeRequiredParamToOptionalFunctionTypeLiteral: OptionalParamDefaults["FunctionType"]["Literal"] =
  (param) => {};
ChangeRequiredParamToOptionalFunctionTypeLiteral((param) => {});
const FunctionTypeWithRequiredParamFunctionTypeObject: RequiredParamDefaults["FunctionType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamFunctionTypeObject((param) => {});
const ChangeRequiredParamToOptionalFunctionTypeObject: OptionalParamDefaults["FunctionType"]["Object"] =
  (param) => {};
ChangeRequiredParamToOptionalFunctionTypeObject((param) => {});
const FunctionTypeWithRequiredParamFunctionTypeString: RequiredParamDefaults["FunctionType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamFunctionTypeString((param) => {});
const ChangeRequiredParamToOptionalFunctionTypeString: OptionalParamDefaults["FunctionType"]["String"] =
  (param) => {};
ChangeRequiredParamToOptionalFunctionTypeString((param) => {});
const FunctionTypeWithRequiredParamFunctionTypeNumber: RequiredParamDefaults["FunctionType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamFunctionTypeNumber((param) => {});
const ChangeRequiredParamToOptionalFunctionTypeNumber: OptionalParamDefaults["FunctionType"]["Number"] =
  (param) => {};
ChangeRequiredParamToOptionalFunctionTypeNumber((param) => {});
const FunctionTypeWithRequiredParamFunctionTypeBoolean: RequiredParamDefaults["FunctionType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamFunctionTypeBoolean((param) => {});
const ChangeRequiredParamToOptionalFunctionTypeBoolean: OptionalParamDefaults["FunctionType"]["Boolean"] =
  (param) => {};
ChangeRequiredParamToOptionalFunctionTypeBoolean((param) => {});
const FunctionTypeWithRequiredParamFunctionTypeAny: RequiredParamDefaults["FunctionType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamFunctionTypeAny((param) => {});
const ChangeRequiredParamToOptionalFunctionTypeAny: OptionalParamDefaults["FunctionType"]["Any"] =
  (param) => {};
ChangeRequiredParamToOptionalFunctionTypeAny((param) => {});
// Make Parameter Optional - ConstructorType
const FunctionTypeWithRequiredParamConstructorTypeLiteral: RequiredParamDefaults["ConstructorType"]["Literal"] =
  (param) => {};
FunctionTypeWithRequiredParamConstructorTypeLiteral(1);
const ChangeRequiredParamToOptionalConstructorTypeLiteral: OptionalParamDefaults["ConstructorType"]["Literal"] =
  (param) => {};
ChangeRequiredParamToOptionalConstructorTypeLiteral(1);
const FunctionTypeWithRequiredParamConstructorTypeObject: RequiredParamDefaults["ConstructorType"]["Object"] =
  (param) => {};
FunctionTypeWithRequiredParamConstructorTypeObject({});
const ChangeRequiredParamToOptionalConstructorTypeObject: OptionalParamDefaults["ConstructorType"]["Object"] =
  (param) => {};
ChangeRequiredParamToOptionalConstructorTypeObject({});
const FunctionTypeWithRequiredParamConstructorTypeString: RequiredParamDefaults["ConstructorType"]["String"] =
  (param) => {};
FunctionTypeWithRequiredParamConstructorTypeString("two");
const ChangeRequiredParamToOptionalConstructorTypeString: OptionalParamDefaults["ConstructorType"]["String"] =
  (param) => {};
ChangeRequiredParamToOptionalConstructorTypeString("two");
const FunctionTypeWithRequiredParamConstructorTypeNumber: RequiredParamDefaults["ConstructorType"]["Number"] =
  (param) => {};
FunctionTypeWithRequiredParamConstructorTypeNumber(2);
const ChangeRequiredParamToOptionalConstructorTypeNumber: OptionalParamDefaults["ConstructorType"]["Number"] =
  (param) => {};
ChangeRequiredParamToOptionalConstructorTypeNumber(2);
const FunctionTypeWithRequiredParamConstructorTypeBoolean: RequiredParamDefaults["ConstructorType"]["Boolean"] =
  (param) => {};
FunctionTypeWithRequiredParamConstructorTypeBoolean(true);
const ChangeRequiredParamToOptionalConstructorTypeBoolean: OptionalParamDefaults["ConstructorType"]["Boolean"] =
  (param) => {};
ChangeRequiredParamToOptionalConstructorTypeBoolean(true);
const FunctionTypeWithRequiredParamConstructorTypeAny: RequiredParamDefaults["ConstructorType"]["Any"] =
  (param) => {};
FunctionTypeWithRequiredParamConstructorTypeAny(2);
const ChangeRequiredParamToOptionalConstructorTypeAny: OptionalParamDefaults["ConstructorType"]["Any"] =
  (param) => {};
ChangeRequiredParamToOptionalConstructorTypeAny(2);
