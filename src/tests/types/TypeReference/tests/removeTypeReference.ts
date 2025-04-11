import { Defaults as GeneralDefaults } from "../../defaults";
import { Defaults as TypeReferenceDefaults } from "../defaults";

/*
 * TypeReference - Promise
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Remove Type Reference - ParenthesizedType
const TypeReferenceParenthesizedTypeLiteral: TypeReferenceDefaults["ParenthesizedType"]["Literal"] =
  promisify(1);
const RemoveTypeReferenceFromParenthesizedTypeLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] =
  promisify(1);
const TypeReferenceParenthesizedTypeObject: TypeReferenceDefaults["ParenthesizedType"]["Object"] =
  promisify({});
const RemoveTypeReferenceFromParenthesizedTypeObject: GeneralDefaults["ParenthesizedType"]["Object"] =
  promisify({});
const TypeReferenceParenthesizedTypeString: TypeReferenceDefaults["ParenthesizedType"]["String"] =
  promisify("two");
const RemoveTypeReferenceFromParenthesizedTypeString: GeneralDefaults["ParenthesizedType"]["String"] =
  promisify("two");
const TypeReferenceParenthesizedTypeNumber: TypeReferenceDefaults["ParenthesizedType"]["Number"] =
  promisify(2);
const RemoveTypeReferenceFromParenthesizedTypeNumber: GeneralDefaults["ParenthesizedType"]["Number"] =
  promisify(2);
const TypeReferenceParenthesizedTypeBoolean: TypeReferenceDefaults["ParenthesizedType"]["Boolean"] =
  promisify(true);
const RemoveTypeReferenceFromParenthesizedTypeBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] =
  promisify(true);
const TypeReferenceParenthesizedTypeAny: TypeReferenceDefaults["ParenthesizedType"]["Any"] =
  promisify(2);
const RemoveTypeReferenceFromParenthesizedTypeAny: GeneralDefaults["ParenthesizedType"]["Any"] =
  promisify(2);

// Remove Type Reference - TypeReferenceBuiltin
const TypeReferenceTypeReferenceBuiltinLiteral: TypeReferenceDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(promisify(1));
const RemoveTypeReferenceFromTypeReferenceBuiltinLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] =
  promisify(promisify(1));
const TypeReferenceTypeReferenceBuiltinObject: TypeReferenceDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify(promisify({}));
const RemoveTypeReferenceFromTypeReferenceBuiltinObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] =
  promisify(promisify({}));
const TypeReferenceTypeReferenceBuiltinString: TypeReferenceDefaults["TypeReferenceBuiltin"]["String"] =
  promisify(promisify("two"));
const RemoveTypeReferenceFromTypeReferenceBuiltinString: GeneralDefaults["TypeReferenceBuiltin"]["String"] =
  promisify(promisify("two"));
const TypeReferenceTypeReferenceBuiltinNumber: TypeReferenceDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(promisify(2));
const RemoveTypeReferenceFromTypeReferenceBuiltinNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] =
  promisify(promisify(2));
const TypeReferenceTypeReferenceBuiltinBoolean: TypeReferenceDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(promisify(true));
const RemoveTypeReferenceFromTypeReferenceBuiltinBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] =
  promisify(promisify(true));
const TypeReferenceTypeReferenceBuiltinAny: TypeReferenceDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(promisify(2));
const RemoveTypeReferenceFromTypeReferenceBuiltinAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] =
  promisify(promisify(2));

// Remove Type Reference - TypeReferencePredefined
const TypeReferenceTypeReferencePredefinedLiteral: TypeReferenceDefaults["TypeReferencePredefined"]["Literal"] =
  promisify(1);
const RemoveTypeReferenceFromTypeReferencePredefinedLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] =
  promisify(1);
const TypeReferenceTypeReferencePredefinedObject: TypeReferenceDefaults["TypeReferencePredefined"]["Object"] =
  promisify({});
const RemoveTypeReferenceFromTypeReferencePredefinedObject: GeneralDefaults["TypeReferencePredefined"]["Object"] =
  promisify({});
const TypeReferenceTypeReferencePredefinedString: TypeReferenceDefaults["TypeReferencePredefined"]["String"] =
  promisify("two");
const RemoveTypeReferenceFromTypeReferencePredefinedString: GeneralDefaults["TypeReferencePredefined"]["String"] =
  promisify("two");
const TypeReferenceTypeReferencePredefinedNumber: TypeReferenceDefaults["TypeReferencePredefined"]["Number"] =
  promisify(2);
const RemoveTypeReferenceFromTypeReferencePredefinedNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] =
  promisify(2);
const TypeReferenceTypeReferencePredefinedBoolean: TypeReferenceDefaults["TypeReferencePredefined"]["Boolean"] =
  promisify(true);
const RemoveTypeReferenceFromTypeReferencePredefinedBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] =
  promisify(true);
const TypeReferenceTypeReferencePredefinedAny: TypeReferenceDefaults["TypeReferencePredefined"]["Any"] =
  promisify(2);
const RemoveTypeReferenceFromTypeReferencePredefinedAny: GeneralDefaults["TypeReferencePredefined"]["Any"] =
  promisify(2);

// Remove Type Reference - UnionType
const TypeReferenceUnionTypeLiteral: TypeReferenceDefaults["UnionType"]["Literal"] =
  promisify(1);
const RemoveTypeReferenceFromUnionTypeLiteral: GeneralDefaults["UnionType"]["Literal"] =
  promisify(1);
const TypeReferenceUnionTypeObject: TypeReferenceDefaults["UnionType"]["Object"] =
  promisify({});
const RemoveTypeReferenceFromUnionTypeObject: GeneralDefaults["UnionType"]["Object"] =
  promisify({});
const TypeReferenceUnionTypeString: TypeReferenceDefaults["UnionType"]["String"] =
  promisify("two");
const RemoveTypeReferenceFromUnionTypeString: GeneralDefaults["UnionType"]["String"] =
  promisify("two");
const TypeReferenceUnionTypeNumber: TypeReferenceDefaults["UnionType"]["Number"] =
  promisify(2);
const RemoveTypeReferenceFromUnionTypeNumber: GeneralDefaults["UnionType"]["Number"] =
  promisify(2);
const TypeReferenceUnionTypeBoolean: TypeReferenceDefaults["UnionType"]["Boolean"] =
  promisify(true);
const RemoveTypeReferenceFromUnionTypeBoolean: GeneralDefaults["UnionType"]["Boolean"] =
  promisify(true);
const TypeReferenceUnionTypeAny: TypeReferenceDefaults["UnionType"]["Any"] =
  promisify(2);
const RemoveTypeReferenceFromUnionTypeAny: GeneralDefaults["UnionType"]["Any"] =
  promisify(2);

// Remove Type Reference - IntersectionType
const TypeReferenceIntersectionTypeLiteral: TypeReferenceDefaults["IntersectionType"]["Literal"] =
  promisify(1);
const RemoveTypeReferenceFromIntersectionTypeLiteral: GeneralDefaults["IntersectionType"]["Literal"] =
  promisify(1);
const TypeReferenceIntersectionTypeObject: TypeReferenceDefaults["IntersectionType"]["Object"] =
  promisify({});
const RemoveTypeReferenceFromIntersectionTypeObject: GeneralDefaults["IntersectionType"]["Object"] =
  promisify({});
const TypeReferenceIntersectionTypeString: TypeReferenceDefaults["IntersectionType"]["String"] =
  promisify("two");
const RemoveTypeReferenceFromIntersectionTypeString: GeneralDefaults["IntersectionType"]["String"] =
  promisify("two");
const TypeReferenceIntersectionTypeNumber: TypeReferenceDefaults["IntersectionType"]["Number"] =
  promisify(2);
const RemoveTypeReferenceFromIntersectionTypeNumber: GeneralDefaults["IntersectionType"]["Number"] =
  promisify(2);
const TypeReferenceIntersectionTypeBoolean: TypeReferenceDefaults["IntersectionType"]["Boolean"] =
  promisify(true);
const RemoveTypeReferenceFromIntersectionTypeBoolean: GeneralDefaults["IntersectionType"]["Boolean"] =
  promisify(true);
const TypeReferenceIntersectionTypeAny: TypeReferenceDefaults["IntersectionType"]["Any"] =
  promisify(2);
const RemoveTypeReferenceFromIntersectionTypeAny: GeneralDefaults["IntersectionType"]["Any"] =
  promisify(2);

// Remove Type Reference - TypeLiteral
const TypeReferenceTypeLiteralLiteral: TypeReferenceDefaults["TypeLiteral"]["Literal"] =
  promisify({ key: 1 });
const RemoveTypeReferenceFromTypeLiteralLiteral: GeneralDefaults["TypeLiteral"]["Literal"] =
  promisify({ key: 1 });
const TypeReferenceTypeLiteralObject: TypeReferenceDefaults["TypeLiteral"]["Object"] =
  promisify({ key: {} });
const RemoveTypeReferenceFromTypeLiteralObject: GeneralDefaults["TypeLiteral"]["Object"] =
  promisify({ key: {} });
const TypeReferenceTypeLiteralString: TypeReferenceDefaults["TypeLiteral"]["String"] =
  promisify({ key: "two" });
const RemoveTypeReferenceFromTypeLiteralString: GeneralDefaults["TypeLiteral"]["String"] =
  promisify({ key: "two" });
const TypeReferenceTypeLiteralNumber: TypeReferenceDefaults["TypeLiteral"]["Number"] =
  promisify({ key: 2 });
const RemoveTypeReferenceFromTypeLiteralNumber: GeneralDefaults["TypeLiteral"]["Number"] =
  promisify({ key: 2 });
const TypeReferenceTypeLiteralBoolean: TypeReferenceDefaults["TypeLiteral"]["Boolean"] =
  promisify({ key: true });
const RemoveTypeReferenceFromTypeLiteralBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] =
  promisify({ key: true });
const TypeReferenceTypeLiteralAny: TypeReferenceDefaults["TypeLiteral"]["Any"] =
  promisify({ key: 2 });
const RemoveTypeReferenceFromTypeLiteralAny: GeneralDefaults["TypeLiteral"]["Any"] =
  promisify({ key: 2 });

// Remove Type Reference - TupleType
const TypeReferenceTupleTypeLiteral: TypeReferenceDefaults["TupleType"]["Literal"] =
  promisify([1]);
const RemoveTypeReferenceFromTupleTypeLiteral: GeneralDefaults["TupleType"]["Literal"] =
  promisify([1]);
const TypeReferenceTupleTypeObject: TypeReferenceDefaults["TupleType"]["Object"] =
  promisify([{}]);
const RemoveTypeReferenceFromTupleTypeObject: GeneralDefaults["TupleType"]["Object"] =
  promisify([{}]);
const TypeReferenceTupleTypeString: TypeReferenceDefaults["TupleType"]["String"] =
  promisify(["two"]);
const RemoveTypeReferenceFromTupleTypeString: GeneralDefaults["TupleType"]["String"] =
  promisify(["two"]);
const TypeReferenceTupleTypeNumber: TypeReferenceDefaults["TupleType"]["Number"] =
  promisify([2]);
const RemoveTypeReferenceFromTupleTypeNumber: GeneralDefaults["TupleType"]["Number"] =
  promisify([2]);
const TypeReferenceTupleTypeBoolean: TypeReferenceDefaults["TupleType"]["Boolean"] =
  promisify([true]);
const RemoveTypeReferenceFromTupleTypeBoolean: GeneralDefaults["TupleType"]["Boolean"] =
  promisify([true]);
const TypeReferenceTupleTypeAny: TypeReferenceDefaults["TupleType"]["Any"] =
  promisify([2]);
const RemoveTypeReferenceFromTupleTypeAny: GeneralDefaults["TupleType"]["Any"] =
  promisify([2]);

// Remove Type Reference - ArrayType
const TypeReferenceArrayTypeLiteral: TypeReferenceDefaults["ArrayType"]["Literal"] =
  promisify([1, 1]);
const RemoveTypeReferenceFromArrayTypeLiteral: GeneralDefaults["ArrayType"]["Literal"] =
  promisify([1, 1]);
const TypeReferenceArrayTypeObject: TypeReferenceDefaults["ArrayType"]["Object"] =
  promisify([{}, {}]);
const RemoveTypeReferenceFromArrayTypeObject: GeneralDefaults["ArrayType"]["Object"] =
  promisify([{}, {}]);
const TypeReferenceArrayTypeString: TypeReferenceDefaults["ArrayType"]["String"] =
  promisify(["two", "two"]);
const RemoveTypeReferenceFromArrayTypeString: GeneralDefaults["ArrayType"]["String"] =
  promisify(["two", "two"]);
const TypeReferenceArrayTypeNumber: TypeReferenceDefaults["ArrayType"]["Number"] =
  promisify([2, 2]);
const RemoveTypeReferenceFromArrayTypeNumber: GeneralDefaults["ArrayType"]["Number"] =
  promisify([2, 2]);
const TypeReferenceArrayTypeBoolean: TypeReferenceDefaults["ArrayType"]["Boolean"] =
  promisify([true, true]);
const RemoveTypeReferenceFromArrayTypeBoolean: GeneralDefaults["ArrayType"]["Boolean"] =
  promisify([true, true]);
const TypeReferenceArrayTypeAny: TypeReferenceDefaults["ArrayType"]["Any"] =
  promisify([2, 2]);
const RemoveTypeReferenceFromArrayTypeAny: GeneralDefaults["ArrayType"]["Any"] =
  promisify([2, 2]);

// Remove Type Reference - FunctionType
const TypeReferenceFunctionTypeLiteral: TypeReferenceDefaults["FunctionType"]["Literal"] =
  promisify((param) => {});
const RemoveTypeReferenceFromFunctionTypeLiteral: GeneralDefaults["FunctionType"]["Literal"] =
  promisify((param) => {});
const TypeReferenceFunctionTypeObject: TypeReferenceDefaults["FunctionType"]["Object"] =
  promisify((param) => {});
const RemoveTypeReferenceFromFunctionTypeObject: GeneralDefaults["FunctionType"]["Object"] =
  promisify((param) => {});
const TypeReferenceFunctionTypeString: TypeReferenceDefaults["FunctionType"]["String"] =
  promisify((param) => {});
const RemoveTypeReferenceFromFunctionTypeString: GeneralDefaults["FunctionType"]["String"] =
  promisify((param) => {});
const TypeReferenceFunctionTypeNumber: TypeReferenceDefaults["FunctionType"]["Number"] =
  promisify((param) => {});
const RemoveTypeReferenceFromFunctionTypeNumber: GeneralDefaults["FunctionType"]["Number"] =
  promisify((param) => {});
const TypeReferenceFunctionTypeBoolean: TypeReferenceDefaults["FunctionType"]["Boolean"] =
  promisify((param) => {});
const RemoveTypeReferenceFromFunctionTypeBoolean: GeneralDefaults["FunctionType"]["Boolean"] =
  promisify((param) => {});
const TypeReferenceFunctionTypeAny: TypeReferenceDefaults["FunctionType"]["Any"] =
  promisify((param) => {});
const RemoveTypeReferenceFromFunctionTypeAny: GeneralDefaults["FunctionType"]["Any"] =
  promisify((param) => {});

// Remove Type Reference - ConstructorType
const TypeReferenceConstructorTypeLiteral: TypeReferenceDefaults["ConstructorType"]["Literal"] =
  promisify(1);
const RemoveTypeReferenceFromConstructorTypeLiteral: GeneralDefaults["ConstructorType"]["Literal"] =
  promisify(1);
const TypeReferenceConstructorTypeObject: TypeReferenceDefaults["ConstructorType"]["Object"] =
  promisify({});
const RemoveTypeReferenceFromConstructorTypeObject: GeneralDefaults["ConstructorType"]["Object"] =
  promisify({});
const TypeReferenceConstructorTypeString: TypeReferenceDefaults["ConstructorType"]["String"] =
  promisify("two");
const RemoveTypeReferenceFromConstructorTypeString: GeneralDefaults["ConstructorType"]["String"] =
  promisify("two");
const TypeReferenceConstructorTypeNumber: TypeReferenceDefaults["ConstructorType"]["Number"] =
  promisify(2);
const RemoveTypeReferenceFromConstructorTypeNumber: GeneralDefaults["ConstructorType"]["Number"] =
  promisify(2);
const TypeReferenceConstructorTypeBoolean: TypeReferenceDefaults["ConstructorType"]["Boolean"] =
  promisify(true);
const RemoveTypeReferenceFromConstructorTypeBoolean: GeneralDefaults["ConstructorType"]["Boolean"] =
  promisify(true);
const TypeReferenceConstructorTypeAny: TypeReferenceDefaults["ConstructorType"]["Any"] =
  promisify(2);
const RemoveTypeReferenceFromConstructorTypeAny: GeneralDefaults["ConstructorType"]["Any"] =
  promisify(2);
