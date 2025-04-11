import { Defaults } from "../../defaults";

/*
 * UnionType
 */

// Remove Union - FunctionType
const UnionTypeFunctionTypeLiteralWithParenthesizedTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithParenthesizedTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Literal"] = 1;
const SecondRemoveUnionTypeParenthesizedTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 1
const UnionTypeFunctionTypeLiteralWithParenthesizedTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Object"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithParenthesizedTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Object"] = {};
const SecondRemoveUnionTypeParenthesizedTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= {}
const UnionTypeFunctionTypeLiteralWithParenthesizedTypeString: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["String"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithParenthesizedTypeString: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["String"] = "two";
const SecondRemoveUnionTypeParenthesizedTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= "two"
const UnionTypeFunctionTypeLiteralWithParenthesizedTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Number"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithParenthesizedTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Number"] = 2;
const SecondRemoveUnionTypeParenthesizedTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 2
const UnionTypeFunctionTypeLiteralWithParenthesizedTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithParenthesizedTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Boolean"] = true;
const SecondRemoveUnionTypeParenthesizedTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= true
const UnionTypeFunctionTypeLiteralWithParenthesizedTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Any"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithParenthesizedTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["ParenthesizedType"]["Any"] = 2;
const SecondRemoveUnionTypeParenthesizedTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 2

const UnionTypeFunctionTypeLiteralWithTypeReferenceBuiltinLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeReferenceBuiltinLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Literal"] = promisify(1);
const SecondRemoveUnionTypeTypeReferenceBuiltinLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= promisify(1)
const UnionTypeFunctionTypeLiteralWithTypeReferenceBuiltinObject: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeReferenceBuiltinObject: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Object"] = promisify({});
const SecondRemoveUnionTypeTypeReferenceBuiltinObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= promisify({})
const UnionTypeFunctionTypeLiteralWithTypeReferenceBuiltinString: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeReferenceBuiltinString: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["String"] = promisify("two");
const SecondRemoveUnionTypeTypeReferenceBuiltinStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= promisify("two")
const UnionTypeFunctionTypeLiteralWithTypeReferenceBuiltinNumber: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeReferenceBuiltinNumber: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Number"] = promisify(2);
const SecondRemoveUnionTypeTypeReferenceBuiltinNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= promisify(2)
const UnionTypeFunctionTypeLiteralWithTypeReferenceBuiltinBoolean: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeReferenceBuiltinBoolean: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true);
const SecondRemoveUnionTypeTypeReferenceBuiltinBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= promisify(true)
const UnionTypeFunctionTypeLiteralWithTypeReferenceBuiltinAny: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeReferenceBuiltinAny: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferenceBuiltin"]["Any"] = promisify(2);
const SecondRemoveUnionTypeTypeReferenceBuiltinAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= promisify(2)

const UnionTypeFunctionTypeLiteralWithTypeReferencePredefinedLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeReferencePredefinedLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Literal"] = 1;
const SecondRemoveUnionTypeTypeReferencePredefinedLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 1
const UnionTypeFunctionTypeLiteralWithTypeReferencePredefinedObject: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeReferencePredefinedObject: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Object"] = {};
const SecondRemoveUnionTypeTypeReferencePredefinedObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= {}
const UnionTypeFunctionTypeLiteralWithTypeReferencePredefinedString: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeReferencePredefinedString: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["String"] = "two";
const SecondRemoveUnionTypeTypeReferencePredefinedStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= "two"
const UnionTypeFunctionTypeLiteralWithTypeReferencePredefinedNumber: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeReferencePredefinedNumber: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const SecondRemoveUnionTypeTypeReferencePredefinedNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 2
const UnionTypeFunctionTypeLiteralWithTypeReferencePredefinedBoolean: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeReferencePredefinedBoolean: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Boolean"] = true;
const SecondRemoveUnionTypeTypeReferencePredefinedBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= true
const UnionTypeFunctionTypeLiteralWithTypeReferencePredefinedAny: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Any"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeReferencePredefinedAny: Defaults["FunctionType"]["Literal"] | Defaults["TypeReferencePredefined"]["Any"] = 2;
const SecondRemoveUnionTypeTypeReferencePredefinedAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 2

const UnionTypeFunctionTypeLiteralWithUnionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Literal"] = (param) => { };
const RemoveUnionTypeUnionTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithUnionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Literal"] = 1;
const SecondRemoveUnionTypeUnionTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 1
const UnionTypeFunctionTypeLiteralWithUnionTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Object"] = (param) => { };
const RemoveUnionTypeUnionTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithUnionTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Object"] = {};
const SecondRemoveUnionTypeUnionTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= {}
const UnionTypeFunctionTypeLiteralWithUnionTypeString: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["String"] = (param) => { };
const RemoveUnionTypeUnionTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithUnionTypeString: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["String"] = "two";
const SecondRemoveUnionTypeUnionTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= "two"
const UnionTypeFunctionTypeLiteralWithUnionTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Number"] = (param) => { };
const RemoveUnionTypeUnionTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithUnionTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Number"] = 2;
const SecondRemoveUnionTypeUnionTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 2
const UnionTypeFunctionTypeLiteralWithUnionTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeUnionTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithUnionTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Boolean"] = true;
const SecondRemoveUnionTypeUnionTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= true
const UnionTypeFunctionTypeLiteralWithUnionTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Any"] = (param) => { };
const RemoveUnionTypeUnionTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithUnionTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["UnionType"]["Any"] = 2;
const SecondRemoveUnionTypeUnionTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 2

const UnionTypeFunctionTypeLiteralWithIntersectionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Literal"] = (param) => { };
const RemoveUnionTypeIntersectionTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithIntersectionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Literal"] = 1;
const SecondRemoveUnionTypeIntersectionTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 1
const UnionTypeFunctionTypeLiteralWithIntersectionTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Object"] = (param) => { };
const RemoveUnionTypeIntersectionTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithIntersectionTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Object"] = {};
const SecondRemoveUnionTypeIntersectionTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= {}
const UnionTypeFunctionTypeLiteralWithIntersectionTypeString: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["String"] = (param) => { };
const RemoveUnionTypeIntersectionTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithIntersectionTypeString: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["String"] = "two";
const SecondRemoveUnionTypeIntersectionTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= "two"
const UnionTypeFunctionTypeLiteralWithIntersectionTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Number"] = (param) => { };
const RemoveUnionTypeIntersectionTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithIntersectionTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Number"] = 2;
const SecondRemoveUnionTypeIntersectionTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 2
const UnionTypeFunctionTypeLiteralWithIntersectionTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeIntersectionTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithIntersectionTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Boolean"] = true;
const SecondRemoveUnionTypeIntersectionTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= true
const UnionTypeFunctionTypeLiteralWithIntersectionTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Any"] = (param) => { };
const RemoveUnionTypeIntersectionTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithIntersectionTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["IntersectionType"]["Any"] = 2;
const SecondRemoveUnionTypeIntersectionTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 2

const UnionTypeFunctionTypeLiteralWithTypeLiteralLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeLiteralLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeLiteralLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Literal"] = {"key":1};
const SecondRemoveUnionTypeTypeLiteralLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= {"key":1}
const UnionTypeFunctionTypeLiteralWithTypeLiteralObject: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Object"] = (param) => { };
const RemoveUnionTypeTypeLiteralObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeLiteralObject: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Object"] = {"key":{}};
const SecondRemoveUnionTypeTypeLiteralObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= {"key":{}}
const UnionTypeFunctionTypeLiteralWithTypeLiteralString: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["String"] = (param) => { };
const RemoveUnionTypeTypeLiteralStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeLiteralString: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["String"] = {"key":"two"};
const SecondRemoveUnionTypeTypeLiteralStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= {"key":"two"}
const UnionTypeFunctionTypeLiteralWithTypeLiteralNumber: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Number"] = (param) => { };
const RemoveUnionTypeTypeLiteralNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeLiteralNumber: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Number"] = {"key":2};
const SecondRemoveUnionTypeTypeLiteralNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= {"key":2}
const UnionTypeFunctionTypeLiteralWithTypeLiteralBoolean: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeLiteralBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeLiteralBoolean: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Boolean"] = {"key":true};
const SecondRemoveUnionTypeTypeLiteralBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= {"key":true}
const UnionTypeFunctionTypeLiteralWithTypeLiteralAny: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Any"] = (param) => { };
const RemoveUnionTypeTypeLiteralAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTypeLiteralAny: Defaults["FunctionType"]["Literal"] | Defaults["TypeLiteral"]["Any"] = {"key":2};
const SecondRemoveUnionTypeTypeLiteralAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= {"key":2}

const UnionTypeFunctionTypeLiteralWithTupleTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Literal"] = (param) => { };
const RemoveUnionTypeTupleTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTupleTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Literal"] = [1];
const SecondRemoveUnionTypeTupleTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= [1]
const UnionTypeFunctionTypeLiteralWithTupleTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Object"] = (param) => { };
const RemoveUnionTypeTupleTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTupleTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Object"] = [{}];
const SecondRemoveUnionTypeTupleTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= [{}]
const UnionTypeFunctionTypeLiteralWithTupleTypeString: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["String"] = (param) => { };
const RemoveUnionTypeTupleTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTupleTypeString: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["String"] = ["two"];
const SecondRemoveUnionTypeTupleTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= ["two"]
const UnionTypeFunctionTypeLiteralWithTupleTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Number"] = (param) => { };
const RemoveUnionTypeTupleTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTupleTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Number"] = [2];
const SecondRemoveUnionTypeTupleTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= [2]
const UnionTypeFunctionTypeLiteralWithTupleTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Boolean"] = (param) => { };
const RemoveUnionTypeTupleTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTupleTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Boolean"] = [true];
const SecondRemoveUnionTypeTupleTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= [true]
const UnionTypeFunctionTypeLiteralWithTupleTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Any"] = (param) => { };
const RemoveUnionTypeTupleTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithTupleTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["TupleType"]["Any"] = [2];
const SecondRemoveUnionTypeTupleTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= [2]

const UnionTypeFunctionTypeLiteralWithArrayTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Literal"] = (param) => { };
const RemoveUnionTypeArrayTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithArrayTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Literal"] = [1,1];
const SecondRemoveUnionTypeArrayTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= [1,1]
const UnionTypeFunctionTypeLiteralWithArrayTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Object"] = (param) => { };
const RemoveUnionTypeArrayTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithArrayTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Object"] = [{},{}];
const SecondRemoveUnionTypeArrayTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= [{},{}]
const UnionTypeFunctionTypeLiteralWithArrayTypeString: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["String"] = (param) => { };
const RemoveUnionTypeArrayTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithArrayTypeString: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["String"] = ["two","two"];
const SecondRemoveUnionTypeArrayTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= ["two","two"]
const UnionTypeFunctionTypeLiteralWithArrayTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Number"] = (param) => { };
const RemoveUnionTypeArrayTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithArrayTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Number"] = [2,2];
const SecondRemoveUnionTypeArrayTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= [2,2]
const UnionTypeFunctionTypeLiteralWithArrayTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Boolean"] = (param) => { };
const RemoveUnionTypeArrayTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithArrayTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Boolean"] = [true,true];
const SecondRemoveUnionTypeArrayTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= [true,true]
const UnionTypeFunctionTypeLiteralWithArrayTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Any"] = (param) => { };
const RemoveUnionTypeArrayTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithArrayTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["ArrayType"]["Any"] = [2,2];
const SecondRemoveUnionTypeArrayTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= [2,2]

const UnionTypeFunctionTypeLiteralWithFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const RemoveUnionTypeFunctionTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithFunctionTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const UnionTypeFunctionTypeLiteralWithFunctionTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Object"] = (param) => { };
const RemoveUnionTypeFunctionTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithFunctionTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Object"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const UnionTypeFunctionTypeLiteralWithFunctionTypeString: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["String"] = (param) => { };
const RemoveUnionTypeFunctionTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithFunctionTypeString: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["String"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const UnionTypeFunctionTypeLiteralWithFunctionTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Number"] = (param) => { };
const RemoveUnionTypeFunctionTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithFunctionTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Number"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const UnionTypeFunctionTypeLiteralWithFunctionTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeFunctionTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithFunctionTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const UnionTypeFunctionTypeLiteralWithFunctionTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Any"] = (param) => { };
const RemoveUnionTypeFunctionTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithFunctionTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["FunctionType"]["Any"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }

const UnionTypeFunctionTypeLiteralWithConstructorTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Literal"] = (param) => { };
const RemoveUnionTypeConstructorTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithConstructorTypeLiteral: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Literal"] = 1;
const SecondRemoveUnionTypeConstructorTypeLiteralFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 1
const UnionTypeFunctionTypeLiteralWithConstructorTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Object"] = (param) => { };
const RemoveUnionTypeConstructorTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithConstructorTypeObject: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Object"] = {};
const SecondRemoveUnionTypeConstructorTypeObjectFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= {}
const UnionTypeFunctionTypeLiteralWithConstructorTypeString: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["String"] = (param) => { };
const RemoveUnionTypeConstructorTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithConstructorTypeString: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["String"] = "two";
const SecondRemoveUnionTypeConstructorTypeStringFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= "two"
const UnionTypeFunctionTypeLiteralWithConstructorTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Number"] = (param) => { };
const RemoveUnionTypeConstructorTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithConstructorTypeNumber: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Number"] = 2;
const SecondRemoveUnionTypeConstructorTypeNumberFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 2
const UnionTypeFunctionTypeLiteralWithConstructorTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Boolean"] = (param) => { };
const RemoveUnionTypeConstructorTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithConstructorTypeBoolean: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Boolean"] = true;
const SecondRemoveUnionTypeConstructorTypeBooleanFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= true
const UnionTypeFunctionTypeLiteralWithConstructorTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Any"] = (param) => { };
const RemoveUnionTypeConstructorTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= (param) => { }
const SecondUnionTypeFunctionTypeLiteralWithConstructorTypeAny: Defaults["FunctionType"]["Literal"] | Defaults["ConstructorType"]["Any"] = 2;
const SecondRemoveUnionTypeConstructorTypeAnyFromFunctionTypeLiteral: Defaults["FunctionType"]["Literal"]= 2

const UnionTypeFunctionTypeObjectWithParenthesizedTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithParenthesizedTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Literal"] = 1;
const SecondRemoveUnionTypeParenthesizedTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 1
const UnionTypeFunctionTypeObjectWithParenthesizedTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Object"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithParenthesizedTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Object"] = {};
const SecondRemoveUnionTypeParenthesizedTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= {}
const UnionTypeFunctionTypeObjectWithParenthesizedTypeString: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["String"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithParenthesizedTypeString: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["String"] = "two";
const SecondRemoveUnionTypeParenthesizedTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= "two"
const UnionTypeFunctionTypeObjectWithParenthesizedTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Number"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithParenthesizedTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Number"] = 2;
const SecondRemoveUnionTypeParenthesizedTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 2
const UnionTypeFunctionTypeObjectWithParenthesizedTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithParenthesizedTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Boolean"] = true;
const SecondRemoveUnionTypeParenthesizedTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= true
const UnionTypeFunctionTypeObjectWithParenthesizedTypeAny: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Any"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithParenthesizedTypeAny: Defaults["FunctionType"]["Object"] | Defaults["ParenthesizedType"]["Any"] = 2;
const SecondRemoveUnionTypeParenthesizedTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 2

const UnionTypeFunctionTypeObjectWithTypeReferenceBuiltinLiteral: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeReferenceBuiltinLiteral: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Literal"] = promisify(1);
const SecondRemoveUnionTypeTypeReferenceBuiltinLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= promisify(1)
const UnionTypeFunctionTypeObjectWithTypeReferenceBuiltinObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeReferenceBuiltinObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Object"] = promisify({});
const SecondRemoveUnionTypeTypeReferenceBuiltinObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= promisify({})
const UnionTypeFunctionTypeObjectWithTypeReferenceBuiltinString: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeReferenceBuiltinString: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["String"] = promisify("two");
const SecondRemoveUnionTypeTypeReferenceBuiltinStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= promisify("two")
const UnionTypeFunctionTypeObjectWithTypeReferenceBuiltinNumber: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeReferenceBuiltinNumber: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Number"] = promisify(2);
const SecondRemoveUnionTypeTypeReferenceBuiltinNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= promisify(2)
const UnionTypeFunctionTypeObjectWithTypeReferenceBuiltinBoolean: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeReferenceBuiltinBoolean: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true);
const SecondRemoveUnionTypeTypeReferenceBuiltinBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= promisify(true)
const UnionTypeFunctionTypeObjectWithTypeReferenceBuiltinAny: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeReferenceBuiltinAny: Defaults["FunctionType"]["Object"] | Defaults["TypeReferenceBuiltin"]["Any"] = promisify(2);
const SecondRemoveUnionTypeTypeReferenceBuiltinAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= promisify(2)

const UnionTypeFunctionTypeObjectWithTypeReferencePredefinedLiteral: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeReferencePredefinedLiteral: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Literal"] = 1;
const SecondRemoveUnionTypeTypeReferencePredefinedLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 1
const UnionTypeFunctionTypeObjectWithTypeReferencePredefinedObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeReferencePredefinedObject: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Object"] = {};
const SecondRemoveUnionTypeTypeReferencePredefinedObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= {}
const UnionTypeFunctionTypeObjectWithTypeReferencePredefinedString: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeReferencePredefinedString: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["String"] = "two";
const SecondRemoveUnionTypeTypeReferencePredefinedStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= "two"
const UnionTypeFunctionTypeObjectWithTypeReferencePredefinedNumber: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeReferencePredefinedNumber: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const SecondRemoveUnionTypeTypeReferencePredefinedNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 2
const UnionTypeFunctionTypeObjectWithTypeReferencePredefinedBoolean: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeReferencePredefinedBoolean: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Boolean"] = true;
const SecondRemoveUnionTypeTypeReferencePredefinedBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= true
const UnionTypeFunctionTypeObjectWithTypeReferencePredefinedAny: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Any"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeReferencePredefinedAny: Defaults["FunctionType"]["Object"] | Defaults["TypeReferencePredefined"]["Any"] = 2;
const SecondRemoveUnionTypeTypeReferencePredefinedAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 2

const UnionTypeFunctionTypeObjectWithUnionTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Literal"] = (param) => { };
const RemoveUnionTypeUnionTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithUnionTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Literal"] = 1;
const SecondRemoveUnionTypeUnionTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 1
const UnionTypeFunctionTypeObjectWithUnionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Object"] = (param) => { };
const RemoveUnionTypeUnionTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithUnionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Object"] = {};
const SecondRemoveUnionTypeUnionTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= {}
const UnionTypeFunctionTypeObjectWithUnionTypeString: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["String"] = (param) => { };
const RemoveUnionTypeUnionTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithUnionTypeString: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["String"] = "two";
const SecondRemoveUnionTypeUnionTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= "two"
const UnionTypeFunctionTypeObjectWithUnionTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Number"] = (param) => { };
const RemoveUnionTypeUnionTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithUnionTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Number"] = 2;
const SecondRemoveUnionTypeUnionTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 2
const UnionTypeFunctionTypeObjectWithUnionTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeUnionTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithUnionTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Boolean"] = true;
const SecondRemoveUnionTypeUnionTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= true
const UnionTypeFunctionTypeObjectWithUnionTypeAny: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Any"] = (param) => { };
const RemoveUnionTypeUnionTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithUnionTypeAny: Defaults["FunctionType"]["Object"] | Defaults["UnionType"]["Any"] = 2;
const SecondRemoveUnionTypeUnionTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 2

const UnionTypeFunctionTypeObjectWithIntersectionTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Literal"] = (param) => { };
const RemoveUnionTypeIntersectionTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithIntersectionTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Literal"] = 1;
const SecondRemoveUnionTypeIntersectionTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 1
const UnionTypeFunctionTypeObjectWithIntersectionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Object"] = (param) => { };
const RemoveUnionTypeIntersectionTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithIntersectionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Object"] = {};
const SecondRemoveUnionTypeIntersectionTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= {}
const UnionTypeFunctionTypeObjectWithIntersectionTypeString: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["String"] = (param) => { };
const RemoveUnionTypeIntersectionTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithIntersectionTypeString: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["String"] = "two";
const SecondRemoveUnionTypeIntersectionTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= "two"
const UnionTypeFunctionTypeObjectWithIntersectionTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Number"] = (param) => { };
const RemoveUnionTypeIntersectionTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithIntersectionTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Number"] = 2;
const SecondRemoveUnionTypeIntersectionTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 2
const UnionTypeFunctionTypeObjectWithIntersectionTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeIntersectionTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithIntersectionTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Boolean"] = true;
const SecondRemoveUnionTypeIntersectionTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= true
const UnionTypeFunctionTypeObjectWithIntersectionTypeAny: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Any"] = (param) => { };
const RemoveUnionTypeIntersectionTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithIntersectionTypeAny: Defaults["FunctionType"]["Object"] | Defaults["IntersectionType"]["Any"] = 2;
const SecondRemoveUnionTypeIntersectionTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 2

const UnionTypeFunctionTypeObjectWithTypeLiteralLiteral: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeLiteralLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeLiteralLiteral: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Literal"] = {"key":1};
const SecondRemoveUnionTypeTypeLiteralLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= {"key":1}
const UnionTypeFunctionTypeObjectWithTypeLiteralObject: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Object"] = (param) => { };
const RemoveUnionTypeTypeLiteralObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeLiteralObject: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Object"] = {"key":{}};
const SecondRemoveUnionTypeTypeLiteralObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= {"key":{}}
const UnionTypeFunctionTypeObjectWithTypeLiteralString: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["String"] = (param) => { };
const RemoveUnionTypeTypeLiteralStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeLiteralString: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["String"] = {"key":"two"};
const SecondRemoveUnionTypeTypeLiteralStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= {"key":"two"}
const UnionTypeFunctionTypeObjectWithTypeLiteralNumber: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Number"] = (param) => { };
const RemoveUnionTypeTypeLiteralNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeLiteralNumber: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Number"] = {"key":2};
const SecondRemoveUnionTypeTypeLiteralNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= {"key":2}
const UnionTypeFunctionTypeObjectWithTypeLiteralBoolean: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeLiteralBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeLiteralBoolean: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Boolean"] = {"key":true};
const SecondRemoveUnionTypeTypeLiteralBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= {"key":true}
const UnionTypeFunctionTypeObjectWithTypeLiteralAny: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Any"] = (param) => { };
const RemoveUnionTypeTypeLiteralAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTypeLiteralAny: Defaults["FunctionType"]["Object"] | Defaults["TypeLiteral"]["Any"] = {"key":2};
const SecondRemoveUnionTypeTypeLiteralAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= {"key":2}

const UnionTypeFunctionTypeObjectWithTupleTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Literal"] = (param) => { };
const RemoveUnionTypeTupleTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTupleTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Literal"] = [1];
const SecondRemoveUnionTypeTupleTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= [1]
const UnionTypeFunctionTypeObjectWithTupleTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Object"] = (param) => { };
const RemoveUnionTypeTupleTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTupleTypeObject: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Object"] = [{}];
const SecondRemoveUnionTypeTupleTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= [{}]
const UnionTypeFunctionTypeObjectWithTupleTypeString: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["String"] = (param) => { };
const RemoveUnionTypeTupleTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTupleTypeString: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["String"] = ["two"];
const SecondRemoveUnionTypeTupleTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= ["two"]
const UnionTypeFunctionTypeObjectWithTupleTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Number"] = (param) => { };
const RemoveUnionTypeTupleTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTupleTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Number"] = [2];
const SecondRemoveUnionTypeTupleTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= [2]
const UnionTypeFunctionTypeObjectWithTupleTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Boolean"] = (param) => { };
const RemoveUnionTypeTupleTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTupleTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Boolean"] = [true];
const SecondRemoveUnionTypeTupleTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= [true]
const UnionTypeFunctionTypeObjectWithTupleTypeAny: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Any"] = (param) => { };
const RemoveUnionTypeTupleTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithTupleTypeAny: Defaults["FunctionType"]["Object"] | Defaults["TupleType"]["Any"] = [2];
const SecondRemoveUnionTypeTupleTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= [2]

const UnionTypeFunctionTypeObjectWithArrayTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Literal"] = (param) => { };
const RemoveUnionTypeArrayTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithArrayTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Literal"] = [1,1];
const SecondRemoveUnionTypeArrayTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= [1,1]
const UnionTypeFunctionTypeObjectWithArrayTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Object"] = (param) => { };
const RemoveUnionTypeArrayTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithArrayTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Object"] = [{},{}];
const SecondRemoveUnionTypeArrayTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= [{},{}]
const UnionTypeFunctionTypeObjectWithArrayTypeString: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["String"] = (param) => { };
const RemoveUnionTypeArrayTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithArrayTypeString: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["String"] = ["two","two"];
const SecondRemoveUnionTypeArrayTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= ["two","two"]
const UnionTypeFunctionTypeObjectWithArrayTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Number"] = (param) => { };
const RemoveUnionTypeArrayTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithArrayTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Number"] = [2,2];
const SecondRemoveUnionTypeArrayTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= [2,2]
const UnionTypeFunctionTypeObjectWithArrayTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Boolean"] = (param) => { };
const RemoveUnionTypeArrayTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithArrayTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Boolean"] = [true,true];
const SecondRemoveUnionTypeArrayTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= [true,true]
const UnionTypeFunctionTypeObjectWithArrayTypeAny: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Any"] = (param) => { };
const RemoveUnionTypeArrayTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithArrayTypeAny: Defaults["FunctionType"]["Object"] | Defaults["ArrayType"]["Any"] = [2,2];
const SecondRemoveUnionTypeArrayTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= [2,2]

const UnionTypeFunctionTypeObjectWithFunctionTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const RemoveUnionTypeFunctionTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithFunctionTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const UnionTypeFunctionTypeObjectWithFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Object"] = (param) => { };
const RemoveUnionTypeFunctionTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithFunctionTypeObject: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Object"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const UnionTypeFunctionTypeObjectWithFunctionTypeString: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["String"] = (param) => { };
const RemoveUnionTypeFunctionTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithFunctionTypeString: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["String"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const UnionTypeFunctionTypeObjectWithFunctionTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Number"] = (param) => { };
const RemoveUnionTypeFunctionTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithFunctionTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Number"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const UnionTypeFunctionTypeObjectWithFunctionTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeFunctionTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithFunctionTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const UnionTypeFunctionTypeObjectWithFunctionTypeAny: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Any"] = (param) => { };
const RemoveUnionTypeFunctionTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithFunctionTypeAny: Defaults["FunctionType"]["Object"] | Defaults["FunctionType"]["Any"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }

const UnionTypeFunctionTypeObjectWithConstructorTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Literal"] = (param) => { };
const RemoveUnionTypeConstructorTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithConstructorTypeLiteral: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Literal"] = 1;
const SecondRemoveUnionTypeConstructorTypeLiteralFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 1
const UnionTypeFunctionTypeObjectWithConstructorTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Object"] = (param) => { };
const RemoveUnionTypeConstructorTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithConstructorTypeObject: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Object"] = {};
const SecondRemoveUnionTypeConstructorTypeObjectFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= {}
const UnionTypeFunctionTypeObjectWithConstructorTypeString: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["String"] = (param) => { };
const RemoveUnionTypeConstructorTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithConstructorTypeString: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["String"] = "two";
const SecondRemoveUnionTypeConstructorTypeStringFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= "two"
const UnionTypeFunctionTypeObjectWithConstructorTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Number"] = (param) => { };
const RemoveUnionTypeConstructorTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithConstructorTypeNumber: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Number"] = 2;
const SecondRemoveUnionTypeConstructorTypeNumberFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 2
const UnionTypeFunctionTypeObjectWithConstructorTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Boolean"] = (param) => { };
const RemoveUnionTypeConstructorTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithConstructorTypeBoolean: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Boolean"] = true;
const SecondRemoveUnionTypeConstructorTypeBooleanFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= true
const UnionTypeFunctionTypeObjectWithConstructorTypeAny: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Any"] = (param) => { };
const RemoveUnionTypeConstructorTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= (param) => { }
const SecondUnionTypeFunctionTypeObjectWithConstructorTypeAny: Defaults["FunctionType"]["Object"] | Defaults["ConstructorType"]["Any"] = 2;
const SecondRemoveUnionTypeConstructorTypeAnyFromFunctionTypeObject: Defaults["FunctionType"]["Object"]= 2

const UnionTypeFunctionTypeStringWithParenthesizedTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithParenthesizedTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Literal"] = 1;
const SecondRemoveUnionTypeParenthesizedTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= 1
const UnionTypeFunctionTypeStringWithParenthesizedTypeObject: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Object"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithParenthesizedTypeObject: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Object"] = {};
const SecondRemoveUnionTypeParenthesizedTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= {}
const UnionTypeFunctionTypeStringWithParenthesizedTypeString: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["String"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithParenthesizedTypeString: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["String"] = "two";
const SecondRemoveUnionTypeParenthesizedTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= "two"
const UnionTypeFunctionTypeStringWithParenthesizedTypeNumber: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Number"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithParenthesizedTypeNumber: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Number"] = 2;
const SecondRemoveUnionTypeParenthesizedTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= 2
const UnionTypeFunctionTypeStringWithParenthesizedTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithParenthesizedTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Boolean"] = true;
const SecondRemoveUnionTypeParenthesizedTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= true
const UnionTypeFunctionTypeStringWithParenthesizedTypeAny: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Any"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithParenthesizedTypeAny: Defaults["FunctionType"]["String"] | Defaults["ParenthesizedType"]["Any"] = 2;
const SecondRemoveUnionTypeParenthesizedTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= 2

const UnionTypeFunctionTypeStringWithTypeReferenceBuiltinLiteral: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeReferenceBuiltinLiteral: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Literal"] = promisify(1);
const SecondRemoveUnionTypeTypeReferenceBuiltinLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= promisify(1)
const UnionTypeFunctionTypeStringWithTypeReferenceBuiltinObject: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeReferenceBuiltinObject: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Object"] = promisify({});
const SecondRemoveUnionTypeTypeReferenceBuiltinObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= promisify({})
const UnionTypeFunctionTypeStringWithTypeReferenceBuiltinString: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeReferenceBuiltinString: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["String"] = promisify("two");
const SecondRemoveUnionTypeTypeReferenceBuiltinStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= promisify("two")
const UnionTypeFunctionTypeStringWithTypeReferenceBuiltinNumber: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeReferenceBuiltinNumber: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Number"] = promisify(2);
const SecondRemoveUnionTypeTypeReferenceBuiltinNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= promisify(2)
const UnionTypeFunctionTypeStringWithTypeReferenceBuiltinBoolean: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeReferenceBuiltinBoolean: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true);
const SecondRemoveUnionTypeTypeReferenceBuiltinBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= promisify(true)
const UnionTypeFunctionTypeStringWithTypeReferenceBuiltinAny: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeReferenceBuiltinAny: Defaults["FunctionType"]["String"] | Defaults["TypeReferenceBuiltin"]["Any"] = promisify(2);
const SecondRemoveUnionTypeTypeReferenceBuiltinAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= promisify(2)

const UnionTypeFunctionTypeStringWithTypeReferencePredefinedLiteral: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeReferencePredefinedLiteral: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Literal"] = 1;
const SecondRemoveUnionTypeTypeReferencePredefinedLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= 1
const UnionTypeFunctionTypeStringWithTypeReferencePredefinedObject: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeReferencePredefinedObject: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Object"] = {};
const SecondRemoveUnionTypeTypeReferencePredefinedObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= {}
const UnionTypeFunctionTypeStringWithTypeReferencePredefinedString: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeReferencePredefinedString: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["String"] = "two";
const SecondRemoveUnionTypeTypeReferencePredefinedStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= "two"
const UnionTypeFunctionTypeStringWithTypeReferencePredefinedNumber: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeReferencePredefinedNumber: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const SecondRemoveUnionTypeTypeReferencePredefinedNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= 2
const UnionTypeFunctionTypeStringWithTypeReferencePredefinedBoolean: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeReferencePredefinedBoolean: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Boolean"] = true;
const SecondRemoveUnionTypeTypeReferencePredefinedBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= true
const UnionTypeFunctionTypeStringWithTypeReferencePredefinedAny: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Any"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeReferencePredefinedAny: Defaults["FunctionType"]["String"] | Defaults["TypeReferencePredefined"]["Any"] = 2;
const SecondRemoveUnionTypeTypeReferencePredefinedAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= 2

const UnionTypeFunctionTypeStringWithUnionTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Literal"] = (param) => { };
const RemoveUnionTypeUnionTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithUnionTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Literal"] = 1;
const SecondRemoveUnionTypeUnionTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= 1
const UnionTypeFunctionTypeStringWithUnionTypeObject: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Object"] = (param) => { };
const RemoveUnionTypeUnionTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithUnionTypeObject: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Object"] = {};
const SecondRemoveUnionTypeUnionTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= {}
const UnionTypeFunctionTypeStringWithUnionTypeString: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["String"] = (param) => { };
const RemoveUnionTypeUnionTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithUnionTypeString: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["String"] = "two";
const SecondRemoveUnionTypeUnionTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= "two"
const UnionTypeFunctionTypeStringWithUnionTypeNumber: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Number"] = (param) => { };
const RemoveUnionTypeUnionTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithUnionTypeNumber: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Number"] = 2;
const SecondRemoveUnionTypeUnionTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= 2
const UnionTypeFunctionTypeStringWithUnionTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeUnionTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithUnionTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Boolean"] = true;
const SecondRemoveUnionTypeUnionTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= true
const UnionTypeFunctionTypeStringWithUnionTypeAny: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Any"] = (param) => { };
const RemoveUnionTypeUnionTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithUnionTypeAny: Defaults["FunctionType"]["String"] | Defaults["UnionType"]["Any"] = 2;
const SecondRemoveUnionTypeUnionTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= 2

const UnionTypeFunctionTypeStringWithIntersectionTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Literal"] = (param) => { };
const RemoveUnionTypeIntersectionTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithIntersectionTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Literal"] = 1;
const SecondRemoveUnionTypeIntersectionTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= 1
const UnionTypeFunctionTypeStringWithIntersectionTypeObject: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Object"] = (param) => { };
const RemoveUnionTypeIntersectionTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithIntersectionTypeObject: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Object"] = {};
const SecondRemoveUnionTypeIntersectionTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= {}
const UnionTypeFunctionTypeStringWithIntersectionTypeString: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["String"] = (param) => { };
const RemoveUnionTypeIntersectionTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithIntersectionTypeString: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["String"] = "two";
const SecondRemoveUnionTypeIntersectionTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= "two"
const UnionTypeFunctionTypeStringWithIntersectionTypeNumber: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Number"] = (param) => { };
const RemoveUnionTypeIntersectionTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithIntersectionTypeNumber: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Number"] = 2;
const SecondRemoveUnionTypeIntersectionTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= 2
const UnionTypeFunctionTypeStringWithIntersectionTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeIntersectionTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithIntersectionTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Boolean"] = true;
const SecondRemoveUnionTypeIntersectionTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= true
const UnionTypeFunctionTypeStringWithIntersectionTypeAny: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Any"] = (param) => { };
const RemoveUnionTypeIntersectionTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithIntersectionTypeAny: Defaults["FunctionType"]["String"] | Defaults["IntersectionType"]["Any"] = 2;
const SecondRemoveUnionTypeIntersectionTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= 2

const UnionTypeFunctionTypeStringWithTypeLiteralLiteral: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeLiteralLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeLiteralLiteral: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Literal"] = {"key":1};
const SecondRemoveUnionTypeTypeLiteralLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= {"key":1}
const UnionTypeFunctionTypeStringWithTypeLiteralObject: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Object"] = (param) => { };
const RemoveUnionTypeTypeLiteralObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeLiteralObject: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Object"] = {"key":{}};
const SecondRemoveUnionTypeTypeLiteralObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= {"key":{}}
const UnionTypeFunctionTypeStringWithTypeLiteralString: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["String"] = (param) => { };
const RemoveUnionTypeTypeLiteralStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeLiteralString: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["String"] = {"key":"two"};
const SecondRemoveUnionTypeTypeLiteralStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= {"key":"two"}
const UnionTypeFunctionTypeStringWithTypeLiteralNumber: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Number"] = (param) => { };
const RemoveUnionTypeTypeLiteralNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeLiteralNumber: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Number"] = {"key":2};
const SecondRemoveUnionTypeTypeLiteralNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= {"key":2}
const UnionTypeFunctionTypeStringWithTypeLiteralBoolean: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeLiteralBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeLiteralBoolean: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Boolean"] = {"key":true};
const SecondRemoveUnionTypeTypeLiteralBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= {"key":true}
const UnionTypeFunctionTypeStringWithTypeLiteralAny: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Any"] = (param) => { };
const RemoveUnionTypeTypeLiteralAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTypeLiteralAny: Defaults["FunctionType"]["String"] | Defaults["TypeLiteral"]["Any"] = {"key":2};
const SecondRemoveUnionTypeTypeLiteralAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= {"key":2}

const UnionTypeFunctionTypeStringWithTupleTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Literal"] = (param) => { };
const RemoveUnionTypeTupleTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTupleTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Literal"] = [1];
const SecondRemoveUnionTypeTupleTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= [1]
const UnionTypeFunctionTypeStringWithTupleTypeObject: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Object"] = (param) => { };
const RemoveUnionTypeTupleTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTupleTypeObject: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Object"] = [{}];
const SecondRemoveUnionTypeTupleTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= [{}]
const UnionTypeFunctionTypeStringWithTupleTypeString: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["String"] = (param) => { };
const RemoveUnionTypeTupleTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTupleTypeString: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["String"] = ["two"];
const SecondRemoveUnionTypeTupleTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= ["two"]
const UnionTypeFunctionTypeStringWithTupleTypeNumber: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Number"] = (param) => { };
const RemoveUnionTypeTupleTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTupleTypeNumber: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Number"] = [2];
const SecondRemoveUnionTypeTupleTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= [2]
const UnionTypeFunctionTypeStringWithTupleTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Boolean"] = (param) => { };
const RemoveUnionTypeTupleTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTupleTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Boolean"] = [true];
const SecondRemoveUnionTypeTupleTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= [true]
const UnionTypeFunctionTypeStringWithTupleTypeAny: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Any"] = (param) => { };
const RemoveUnionTypeTupleTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithTupleTypeAny: Defaults["FunctionType"]["String"] | Defaults["TupleType"]["Any"] = [2];
const SecondRemoveUnionTypeTupleTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= [2]

const UnionTypeFunctionTypeStringWithArrayTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Literal"] = (param) => { };
const RemoveUnionTypeArrayTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithArrayTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Literal"] = [1,1];
const SecondRemoveUnionTypeArrayTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= [1,1]
const UnionTypeFunctionTypeStringWithArrayTypeObject: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Object"] = (param) => { };
const RemoveUnionTypeArrayTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithArrayTypeObject: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Object"] = [{},{}];
const SecondRemoveUnionTypeArrayTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= [{},{}]
const UnionTypeFunctionTypeStringWithArrayTypeString: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["String"] = (param) => { };
const RemoveUnionTypeArrayTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithArrayTypeString: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["String"] = ["two","two"];
const SecondRemoveUnionTypeArrayTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= ["two","two"]
const UnionTypeFunctionTypeStringWithArrayTypeNumber: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Number"] = (param) => { };
const RemoveUnionTypeArrayTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithArrayTypeNumber: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Number"] = [2,2];
const SecondRemoveUnionTypeArrayTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= [2,2]
const UnionTypeFunctionTypeStringWithArrayTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Boolean"] = (param) => { };
const RemoveUnionTypeArrayTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithArrayTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Boolean"] = [true,true];
const SecondRemoveUnionTypeArrayTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= [true,true]
const UnionTypeFunctionTypeStringWithArrayTypeAny: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Any"] = (param) => { };
const RemoveUnionTypeArrayTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithArrayTypeAny: Defaults["FunctionType"]["String"] | Defaults["ArrayType"]["Any"] = [2,2];
const SecondRemoveUnionTypeArrayTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= [2,2]

const UnionTypeFunctionTypeStringWithFunctionTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const RemoveUnionTypeFunctionTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithFunctionTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const UnionTypeFunctionTypeStringWithFunctionTypeObject: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Object"] = (param) => { };
const RemoveUnionTypeFunctionTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithFunctionTypeObject: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Object"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const UnionTypeFunctionTypeStringWithFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["String"] = (param) => { };
const RemoveUnionTypeFunctionTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithFunctionTypeString: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["String"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const UnionTypeFunctionTypeStringWithFunctionTypeNumber: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Number"] = (param) => { };
const RemoveUnionTypeFunctionTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithFunctionTypeNumber: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Number"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const UnionTypeFunctionTypeStringWithFunctionTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeFunctionTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithFunctionTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const UnionTypeFunctionTypeStringWithFunctionTypeAny: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Any"] = (param) => { };
const RemoveUnionTypeFunctionTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithFunctionTypeAny: Defaults["FunctionType"]["String"] | Defaults["FunctionType"]["Any"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }

const UnionTypeFunctionTypeStringWithConstructorTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Literal"] = (param) => { };
const RemoveUnionTypeConstructorTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithConstructorTypeLiteral: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Literal"] = 1;
const SecondRemoveUnionTypeConstructorTypeLiteralFromFunctionTypeString: Defaults["FunctionType"]["String"]= 1
const UnionTypeFunctionTypeStringWithConstructorTypeObject: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Object"] = (param) => { };
const RemoveUnionTypeConstructorTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithConstructorTypeObject: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Object"] = {};
const SecondRemoveUnionTypeConstructorTypeObjectFromFunctionTypeString: Defaults["FunctionType"]["String"]= {}
const UnionTypeFunctionTypeStringWithConstructorTypeString: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["String"] = (param) => { };
const RemoveUnionTypeConstructorTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithConstructorTypeString: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["String"] = "two";
const SecondRemoveUnionTypeConstructorTypeStringFromFunctionTypeString: Defaults["FunctionType"]["String"]= "two"
const UnionTypeFunctionTypeStringWithConstructorTypeNumber: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Number"] = (param) => { };
const RemoveUnionTypeConstructorTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithConstructorTypeNumber: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Number"] = 2;
const SecondRemoveUnionTypeConstructorTypeNumberFromFunctionTypeString: Defaults["FunctionType"]["String"]= 2
const UnionTypeFunctionTypeStringWithConstructorTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Boolean"] = (param) => { };
const RemoveUnionTypeConstructorTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithConstructorTypeBoolean: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Boolean"] = true;
const SecondRemoveUnionTypeConstructorTypeBooleanFromFunctionTypeString: Defaults["FunctionType"]["String"]= true
const UnionTypeFunctionTypeStringWithConstructorTypeAny: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Any"] = (param) => { };
const RemoveUnionTypeConstructorTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= (param) => { }
const SecondUnionTypeFunctionTypeStringWithConstructorTypeAny: Defaults["FunctionType"]["String"] | Defaults["ConstructorType"]["Any"] = 2;
const SecondRemoveUnionTypeConstructorTypeAnyFromFunctionTypeString: Defaults["FunctionType"]["String"]= 2

const UnionTypeFunctionTypeNumberWithParenthesizedTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithParenthesizedTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Literal"] = 1;
const SecondRemoveUnionTypeParenthesizedTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 1
const UnionTypeFunctionTypeNumberWithParenthesizedTypeObject: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Object"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithParenthesizedTypeObject: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Object"] = {};
const SecondRemoveUnionTypeParenthesizedTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= {}
const UnionTypeFunctionTypeNumberWithParenthesizedTypeString: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["String"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithParenthesizedTypeString: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["String"] = "two";
const SecondRemoveUnionTypeParenthesizedTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= "two"
const UnionTypeFunctionTypeNumberWithParenthesizedTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Number"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithParenthesizedTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Number"] = 2;
const SecondRemoveUnionTypeParenthesizedTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 2
const UnionTypeFunctionTypeNumberWithParenthesizedTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithParenthesizedTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Boolean"] = true;
const SecondRemoveUnionTypeParenthesizedTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= true
const UnionTypeFunctionTypeNumberWithParenthesizedTypeAny: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Any"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithParenthesizedTypeAny: Defaults["FunctionType"]["Number"] | Defaults["ParenthesizedType"]["Any"] = 2;
const SecondRemoveUnionTypeParenthesizedTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 2

const UnionTypeFunctionTypeNumberWithTypeReferenceBuiltinLiteral: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeReferenceBuiltinLiteral: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Literal"] = promisify(1);
const SecondRemoveUnionTypeTypeReferenceBuiltinLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= promisify(1)
const UnionTypeFunctionTypeNumberWithTypeReferenceBuiltinObject: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeReferenceBuiltinObject: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Object"] = promisify({});
const SecondRemoveUnionTypeTypeReferenceBuiltinObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= promisify({})
const UnionTypeFunctionTypeNumberWithTypeReferenceBuiltinString: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeReferenceBuiltinString: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["String"] = promisify("two");
const SecondRemoveUnionTypeTypeReferenceBuiltinStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= promisify("two")
const UnionTypeFunctionTypeNumberWithTypeReferenceBuiltinNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeReferenceBuiltinNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Number"] = promisify(2);
const SecondRemoveUnionTypeTypeReferenceBuiltinNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= promisify(2)
const UnionTypeFunctionTypeNumberWithTypeReferenceBuiltinBoolean: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeReferenceBuiltinBoolean: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true);
const SecondRemoveUnionTypeTypeReferenceBuiltinBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= promisify(true)
const UnionTypeFunctionTypeNumberWithTypeReferenceBuiltinAny: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeReferenceBuiltinAny: Defaults["FunctionType"]["Number"] | Defaults["TypeReferenceBuiltin"]["Any"] = promisify(2);
const SecondRemoveUnionTypeTypeReferenceBuiltinAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= promisify(2)

const UnionTypeFunctionTypeNumberWithTypeReferencePredefinedLiteral: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeReferencePredefinedLiteral: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Literal"] = 1;
const SecondRemoveUnionTypeTypeReferencePredefinedLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 1
const UnionTypeFunctionTypeNumberWithTypeReferencePredefinedObject: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeReferencePredefinedObject: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Object"] = {};
const SecondRemoveUnionTypeTypeReferencePredefinedObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= {}
const UnionTypeFunctionTypeNumberWithTypeReferencePredefinedString: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeReferencePredefinedString: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["String"] = "two";
const SecondRemoveUnionTypeTypeReferencePredefinedStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= "two"
const UnionTypeFunctionTypeNumberWithTypeReferencePredefinedNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeReferencePredefinedNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const SecondRemoveUnionTypeTypeReferencePredefinedNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 2
const UnionTypeFunctionTypeNumberWithTypeReferencePredefinedBoolean: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeReferencePredefinedBoolean: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Boolean"] = true;
const SecondRemoveUnionTypeTypeReferencePredefinedBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= true
const UnionTypeFunctionTypeNumberWithTypeReferencePredefinedAny: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Any"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeReferencePredefinedAny: Defaults["FunctionType"]["Number"] | Defaults["TypeReferencePredefined"]["Any"] = 2;
const SecondRemoveUnionTypeTypeReferencePredefinedAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 2

const UnionTypeFunctionTypeNumberWithUnionTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Literal"] = (param) => { };
const RemoveUnionTypeUnionTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithUnionTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Literal"] = 1;
const SecondRemoveUnionTypeUnionTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 1
const UnionTypeFunctionTypeNumberWithUnionTypeObject: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Object"] = (param) => { };
const RemoveUnionTypeUnionTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithUnionTypeObject: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Object"] = {};
const SecondRemoveUnionTypeUnionTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= {}
const UnionTypeFunctionTypeNumberWithUnionTypeString: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["String"] = (param) => { };
const RemoveUnionTypeUnionTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithUnionTypeString: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["String"] = "two";
const SecondRemoveUnionTypeUnionTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= "two"
const UnionTypeFunctionTypeNumberWithUnionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Number"] = (param) => { };
const RemoveUnionTypeUnionTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithUnionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Number"] = 2;
const SecondRemoveUnionTypeUnionTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 2
const UnionTypeFunctionTypeNumberWithUnionTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeUnionTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithUnionTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Boolean"] = true;
const SecondRemoveUnionTypeUnionTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= true
const UnionTypeFunctionTypeNumberWithUnionTypeAny: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Any"] = (param) => { };
const RemoveUnionTypeUnionTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithUnionTypeAny: Defaults["FunctionType"]["Number"] | Defaults["UnionType"]["Any"] = 2;
const SecondRemoveUnionTypeUnionTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 2

const UnionTypeFunctionTypeNumberWithIntersectionTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Literal"] = (param) => { };
const RemoveUnionTypeIntersectionTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithIntersectionTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Literal"] = 1;
const SecondRemoveUnionTypeIntersectionTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 1
const UnionTypeFunctionTypeNumberWithIntersectionTypeObject: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Object"] = (param) => { };
const RemoveUnionTypeIntersectionTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithIntersectionTypeObject: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Object"] = {};
const SecondRemoveUnionTypeIntersectionTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= {}
const UnionTypeFunctionTypeNumberWithIntersectionTypeString: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["String"] = (param) => { };
const RemoveUnionTypeIntersectionTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithIntersectionTypeString: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["String"] = "two";
const SecondRemoveUnionTypeIntersectionTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= "two"
const UnionTypeFunctionTypeNumberWithIntersectionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Number"] = (param) => { };
const RemoveUnionTypeIntersectionTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithIntersectionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Number"] = 2;
const SecondRemoveUnionTypeIntersectionTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 2
const UnionTypeFunctionTypeNumberWithIntersectionTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeIntersectionTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithIntersectionTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Boolean"] = true;
const SecondRemoveUnionTypeIntersectionTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= true
const UnionTypeFunctionTypeNumberWithIntersectionTypeAny: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Any"] = (param) => { };
const RemoveUnionTypeIntersectionTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithIntersectionTypeAny: Defaults["FunctionType"]["Number"] | Defaults["IntersectionType"]["Any"] = 2;
const SecondRemoveUnionTypeIntersectionTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 2

const UnionTypeFunctionTypeNumberWithTypeLiteralLiteral: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeLiteralLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeLiteralLiteral: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Literal"] = {"key":1};
const SecondRemoveUnionTypeTypeLiteralLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= {"key":1}
const UnionTypeFunctionTypeNumberWithTypeLiteralObject: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Object"] = (param) => { };
const RemoveUnionTypeTypeLiteralObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeLiteralObject: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Object"] = {"key":{}};
const SecondRemoveUnionTypeTypeLiteralObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= {"key":{}}
const UnionTypeFunctionTypeNumberWithTypeLiteralString: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["String"] = (param) => { };
const RemoveUnionTypeTypeLiteralStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeLiteralString: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["String"] = {"key":"two"};
const SecondRemoveUnionTypeTypeLiteralStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= {"key":"two"}
const UnionTypeFunctionTypeNumberWithTypeLiteralNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Number"] = (param) => { };
const RemoveUnionTypeTypeLiteralNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeLiteralNumber: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Number"] = {"key":2};
const SecondRemoveUnionTypeTypeLiteralNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= {"key":2}
const UnionTypeFunctionTypeNumberWithTypeLiteralBoolean: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeLiteralBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeLiteralBoolean: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Boolean"] = {"key":true};
const SecondRemoveUnionTypeTypeLiteralBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= {"key":true}
const UnionTypeFunctionTypeNumberWithTypeLiteralAny: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Any"] = (param) => { };
const RemoveUnionTypeTypeLiteralAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTypeLiteralAny: Defaults["FunctionType"]["Number"] | Defaults["TypeLiteral"]["Any"] = {"key":2};
const SecondRemoveUnionTypeTypeLiteralAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= {"key":2}

const UnionTypeFunctionTypeNumberWithTupleTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Literal"] = (param) => { };
const RemoveUnionTypeTupleTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTupleTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Literal"] = [1];
const SecondRemoveUnionTypeTupleTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= [1]
const UnionTypeFunctionTypeNumberWithTupleTypeObject: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Object"] = (param) => { };
const RemoveUnionTypeTupleTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTupleTypeObject: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Object"] = [{}];
const SecondRemoveUnionTypeTupleTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= [{}]
const UnionTypeFunctionTypeNumberWithTupleTypeString: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["String"] = (param) => { };
const RemoveUnionTypeTupleTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTupleTypeString: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["String"] = ["two"];
const SecondRemoveUnionTypeTupleTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= ["two"]
const UnionTypeFunctionTypeNumberWithTupleTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Number"] = (param) => { };
const RemoveUnionTypeTupleTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTupleTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Number"] = [2];
const SecondRemoveUnionTypeTupleTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= [2]
const UnionTypeFunctionTypeNumberWithTupleTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Boolean"] = (param) => { };
const RemoveUnionTypeTupleTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTupleTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Boolean"] = [true];
const SecondRemoveUnionTypeTupleTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= [true]
const UnionTypeFunctionTypeNumberWithTupleTypeAny: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Any"] = (param) => { };
const RemoveUnionTypeTupleTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithTupleTypeAny: Defaults["FunctionType"]["Number"] | Defaults["TupleType"]["Any"] = [2];
const SecondRemoveUnionTypeTupleTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= [2]

const UnionTypeFunctionTypeNumberWithArrayTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Literal"] = (param) => { };
const RemoveUnionTypeArrayTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithArrayTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Literal"] = [1,1];
const SecondRemoveUnionTypeArrayTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= [1,1]
const UnionTypeFunctionTypeNumberWithArrayTypeObject: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Object"] = (param) => { };
const RemoveUnionTypeArrayTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithArrayTypeObject: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Object"] = [{},{}];
const SecondRemoveUnionTypeArrayTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= [{},{}]
const UnionTypeFunctionTypeNumberWithArrayTypeString: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["String"] = (param) => { };
const RemoveUnionTypeArrayTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithArrayTypeString: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["String"] = ["two","two"];
const SecondRemoveUnionTypeArrayTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= ["two","two"]
const UnionTypeFunctionTypeNumberWithArrayTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Number"] = (param) => { };
const RemoveUnionTypeArrayTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithArrayTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Number"] = [2,2];
const SecondRemoveUnionTypeArrayTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= [2,2]
const UnionTypeFunctionTypeNumberWithArrayTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Boolean"] = (param) => { };
const RemoveUnionTypeArrayTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithArrayTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Boolean"] = [true,true];
const SecondRemoveUnionTypeArrayTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= [true,true]
const UnionTypeFunctionTypeNumberWithArrayTypeAny: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Any"] = (param) => { };
const RemoveUnionTypeArrayTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithArrayTypeAny: Defaults["FunctionType"]["Number"] | Defaults["ArrayType"]["Any"] = [2,2];
const SecondRemoveUnionTypeArrayTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= [2,2]

const UnionTypeFunctionTypeNumberWithFunctionTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const RemoveUnionTypeFunctionTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithFunctionTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const UnionTypeFunctionTypeNumberWithFunctionTypeObject: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Object"] = (param) => { };
const RemoveUnionTypeFunctionTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithFunctionTypeObject: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Object"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const UnionTypeFunctionTypeNumberWithFunctionTypeString: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["String"] = (param) => { };
const RemoveUnionTypeFunctionTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithFunctionTypeString: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["String"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const UnionTypeFunctionTypeNumberWithFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Number"] = (param) => { };
const RemoveUnionTypeFunctionTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithFunctionTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Number"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const UnionTypeFunctionTypeNumberWithFunctionTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeFunctionTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithFunctionTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const UnionTypeFunctionTypeNumberWithFunctionTypeAny: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Any"] = (param) => { };
const RemoveUnionTypeFunctionTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithFunctionTypeAny: Defaults["FunctionType"]["Number"] | Defaults["FunctionType"]["Any"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }

const UnionTypeFunctionTypeNumberWithConstructorTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Literal"] = (param) => { };
const RemoveUnionTypeConstructorTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithConstructorTypeLiteral: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Literal"] = 1;
const SecondRemoveUnionTypeConstructorTypeLiteralFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 1
const UnionTypeFunctionTypeNumberWithConstructorTypeObject: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Object"] = (param) => { };
const RemoveUnionTypeConstructorTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithConstructorTypeObject: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Object"] = {};
const SecondRemoveUnionTypeConstructorTypeObjectFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= {}
const UnionTypeFunctionTypeNumberWithConstructorTypeString: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["String"] = (param) => { };
const RemoveUnionTypeConstructorTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithConstructorTypeString: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["String"] = "two";
const SecondRemoveUnionTypeConstructorTypeStringFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= "two"
const UnionTypeFunctionTypeNumberWithConstructorTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Number"] = (param) => { };
const RemoveUnionTypeConstructorTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithConstructorTypeNumber: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Number"] = 2;
const SecondRemoveUnionTypeConstructorTypeNumberFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 2
const UnionTypeFunctionTypeNumberWithConstructorTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Boolean"] = (param) => { };
const RemoveUnionTypeConstructorTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithConstructorTypeBoolean: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Boolean"] = true;
const SecondRemoveUnionTypeConstructorTypeBooleanFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= true
const UnionTypeFunctionTypeNumberWithConstructorTypeAny: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Any"] = (param) => { };
const RemoveUnionTypeConstructorTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= (param) => { }
const SecondUnionTypeFunctionTypeNumberWithConstructorTypeAny: Defaults["FunctionType"]["Number"] | Defaults["ConstructorType"]["Any"] = 2;
const SecondRemoveUnionTypeConstructorTypeAnyFromFunctionTypeNumber: Defaults["FunctionType"]["Number"]= 2

const UnionTypeFunctionTypeBooleanWithParenthesizedTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithParenthesizedTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Literal"] = 1;
const SecondRemoveUnionTypeParenthesizedTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 1
const UnionTypeFunctionTypeBooleanWithParenthesizedTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Object"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithParenthesizedTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Object"] = {};
const SecondRemoveUnionTypeParenthesizedTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= {}
const UnionTypeFunctionTypeBooleanWithParenthesizedTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["String"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithParenthesizedTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["String"] = "two";
const SecondRemoveUnionTypeParenthesizedTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= "two"
const UnionTypeFunctionTypeBooleanWithParenthesizedTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Number"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithParenthesizedTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Number"] = 2;
const SecondRemoveUnionTypeParenthesizedTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 2
const UnionTypeFunctionTypeBooleanWithParenthesizedTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithParenthesizedTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Boolean"] = true;
const SecondRemoveUnionTypeParenthesizedTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= true
const UnionTypeFunctionTypeBooleanWithParenthesizedTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Any"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithParenthesizedTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["ParenthesizedType"]["Any"] = 2;
const SecondRemoveUnionTypeParenthesizedTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 2

const UnionTypeFunctionTypeBooleanWithTypeReferenceBuiltinLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeReferenceBuiltinLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Literal"] = promisify(1);
const SecondRemoveUnionTypeTypeReferenceBuiltinLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= promisify(1)
const UnionTypeFunctionTypeBooleanWithTypeReferenceBuiltinObject: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeReferenceBuiltinObject: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Object"] = promisify({});
const SecondRemoveUnionTypeTypeReferenceBuiltinObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= promisify({})
const UnionTypeFunctionTypeBooleanWithTypeReferenceBuiltinString: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeReferenceBuiltinString: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["String"] = promisify("two");
const SecondRemoveUnionTypeTypeReferenceBuiltinStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= promisify("two")
const UnionTypeFunctionTypeBooleanWithTypeReferenceBuiltinNumber: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeReferenceBuiltinNumber: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Number"] = promisify(2);
const SecondRemoveUnionTypeTypeReferenceBuiltinNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= promisify(2)
const UnionTypeFunctionTypeBooleanWithTypeReferenceBuiltinBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeReferenceBuiltinBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true);
const SecondRemoveUnionTypeTypeReferenceBuiltinBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= promisify(true)
const UnionTypeFunctionTypeBooleanWithTypeReferenceBuiltinAny: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeReferenceBuiltinAny: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferenceBuiltin"]["Any"] = promisify(2);
const SecondRemoveUnionTypeTypeReferenceBuiltinAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= promisify(2)

const UnionTypeFunctionTypeBooleanWithTypeReferencePredefinedLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeReferencePredefinedLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Literal"] = 1;
const SecondRemoveUnionTypeTypeReferencePredefinedLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 1
const UnionTypeFunctionTypeBooleanWithTypeReferencePredefinedObject: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeReferencePredefinedObject: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Object"] = {};
const SecondRemoveUnionTypeTypeReferencePredefinedObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= {}
const UnionTypeFunctionTypeBooleanWithTypeReferencePredefinedString: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeReferencePredefinedString: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["String"] = "two";
const SecondRemoveUnionTypeTypeReferencePredefinedStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= "two"
const UnionTypeFunctionTypeBooleanWithTypeReferencePredefinedNumber: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeReferencePredefinedNumber: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const SecondRemoveUnionTypeTypeReferencePredefinedNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 2
const UnionTypeFunctionTypeBooleanWithTypeReferencePredefinedBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeReferencePredefinedBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Boolean"] = true;
const SecondRemoveUnionTypeTypeReferencePredefinedBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= true
const UnionTypeFunctionTypeBooleanWithTypeReferencePredefinedAny: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Any"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeReferencePredefinedAny: Defaults["FunctionType"]["Boolean"] | Defaults["TypeReferencePredefined"]["Any"] = 2;
const SecondRemoveUnionTypeTypeReferencePredefinedAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 2

const UnionTypeFunctionTypeBooleanWithUnionTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Literal"] = (param) => { };
const RemoveUnionTypeUnionTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithUnionTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Literal"] = 1;
const SecondRemoveUnionTypeUnionTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 1
const UnionTypeFunctionTypeBooleanWithUnionTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Object"] = (param) => { };
const RemoveUnionTypeUnionTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithUnionTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Object"] = {};
const SecondRemoveUnionTypeUnionTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= {}
const UnionTypeFunctionTypeBooleanWithUnionTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["String"] = (param) => { };
const RemoveUnionTypeUnionTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithUnionTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["String"] = "two";
const SecondRemoveUnionTypeUnionTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= "two"
const UnionTypeFunctionTypeBooleanWithUnionTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Number"] = (param) => { };
const RemoveUnionTypeUnionTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithUnionTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Number"] = 2;
const SecondRemoveUnionTypeUnionTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 2
const UnionTypeFunctionTypeBooleanWithUnionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeUnionTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithUnionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Boolean"] = true;
const SecondRemoveUnionTypeUnionTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= true
const UnionTypeFunctionTypeBooleanWithUnionTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Any"] = (param) => { };
const RemoveUnionTypeUnionTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithUnionTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["UnionType"]["Any"] = 2;
const SecondRemoveUnionTypeUnionTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 2

const UnionTypeFunctionTypeBooleanWithIntersectionTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Literal"] = (param) => { };
const RemoveUnionTypeIntersectionTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithIntersectionTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Literal"] = 1;
const SecondRemoveUnionTypeIntersectionTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 1
const UnionTypeFunctionTypeBooleanWithIntersectionTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Object"] = (param) => { };
const RemoveUnionTypeIntersectionTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithIntersectionTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Object"] = {};
const SecondRemoveUnionTypeIntersectionTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= {}
const UnionTypeFunctionTypeBooleanWithIntersectionTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["String"] = (param) => { };
const RemoveUnionTypeIntersectionTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithIntersectionTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["String"] = "two";
const SecondRemoveUnionTypeIntersectionTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= "two"
const UnionTypeFunctionTypeBooleanWithIntersectionTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Number"] = (param) => { };
const RemoveUnionTypeIntersectionTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithIntersectionTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Number"] = 2;
const SecondRemoveUnionTypeIntersectionTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 2
const UnionTypeFunctionTypeBooleanWithIntersectionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeIntersectionTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithIntersectionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Boolean"] = true;
const SecondRemoveUnionTypeIntersectionTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= true
const UnionTypeFunctionTypeBooleanWithIntersectionTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Any"] = (param) => { };
const RemoveUnionTypeIntersectionTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithIntersectionTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["IntersectionType"]["Any"] = 2;
const SecondRemoveUnionTypeIntersectionTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 2

const UnionTypeFunctionTypeBooleanWithTypeLiteralLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeLiteralLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeLiteralLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Literal"] = {"key":1};
const SecondRemoveUnionTypeTypeLiteralLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= {"key":1}
const UnionTypeFunctionTypeBooleanWithTypeLiteralObject: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Object"] = (param) => { };
const RemoveUnionTypeTypeLiteralObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeLiteralObject: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Object"] = {"key":{}};
const SecondRemoveUnionTypeTypeLiteralObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= {"key":{}}
const UnionTypeFunctionTypeBooleanWithTypeLiteralString: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["String"] = (param) => { };
const RemoveUnionTypeTypeLiteralStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeLiteralString: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["String"] = {"key":"two"};
const SecondRemoveUnionTypeTypeLiteralStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= {"key":"two"}
const UnionTypeFunctionTypeBooleanWithTypeLiteralNumber: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Number"] = (param) => { };
const RemoveUnionTypeTypeLiteralNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeLiteralNumber: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Number"] = {"key":2};
const SecondRemoveUnionTypeTypeLiteralNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= {"key":2}
const UnionTypeFunctionTypeBooleanWithTypeLiteralBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeLiteralBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeLiteralBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Boolean"] = {"key":true};
const SecondRemoveUnionTypeTypeLiteralBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= {"key":true}
const UnionTypeFunctionTypeBooleanWithTypeLiteralAny: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Any"] = (param) => { };
const RemoveUnionTypeTypeLiteralAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTypeLiteralAny: Defaults["FunctionType"]["Boolean"] | Defaults["TypeLiteral"]["Any"] = {"key":2};
const SecondRemoveUnionTypeTypeLiteralAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= {"key":2}

const UnionTypeFunctionTypeBooleanWithTupleTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Literal"] = (param) => { };
const RemoveUnionTypeTupleTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTupleTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Literal"] = [1];
const SecondRemoveUnionTypeTupleTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= [1]
const UnionTypeFunctionTypeBooleanWithTupleTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Object"] = (param) => { };
const RemoveUnionTypeTupleTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTupleTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Object"] = [{}];
const SecondRemoveUnionTypeTupleTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= [{}]
const UnionTypeFunctionTypeBooleanWithTupleTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["String"] = (param) => { };
const RemoveUnionTypeTupleTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTupleTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["String"] = ["two"];
const SecondRemoveUnionTypeTupleTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= ["two"]
const UnionTypeFunctionTypeBooleanWithTupleTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Number"] = (param) => { };
const RemoveUnionTypeTupleTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTupleTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Number"] = [2];
const SecondRemoveUnionTypeTupleTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= [2]
const UnionTypeFunctionTypeBooleanWithTupleTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Boolean"] = (param) => { };
const RemoveUnionTypeTupleTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTupleTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Boolean"] = [true];
const SecondRemoveUnionTypeTupleTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= [true]
const UnionTypeFunctionTypeBooleanWithTupleTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Any"] = (param) => { };
const RemoveUnionTypeTupleTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithTupleTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["TupleType"]["Any"] = [2];
const SecondRemoveUnionTypeTupleTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= [2]

const UnionTypeFunctionTypeBooleanWithArrayTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Literal"] = (param) => { };
const RemoveUnionTypeArrayTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithArrayTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Literal"] = [1,1];
const SecondRemoveUnionTypeArrayTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= [1,1]
const UnionTypeFunctionTypeBooleanWithArrayTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Object"] = (param) => { };
const RemoveUnionTypeArrayTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithArrayTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Object"] = [{},{}];
const SecondRemoveUnionTypeArrayTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= [{},{}]
const UnionTypeFunctionTypeBooleanWithArrayTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["String"] = (param) => { };
const RemoveUnionTypeArrayTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithArrayTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["String"] = ["two","two"];
const SecondRemoveUnionTypeArrayTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= ["two","two"]
const UnionTypeFunctionTypeBooleanWithArrayTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Number"] = (param) => { };
const RemoveUnionTypeArrayTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithArrayTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Number"] = [2,2];
const SecondRemoveUnionTypeArrayTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= [2,2]
const UnionTypeFunctionTypeBooleanWithArrayTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Boolean"] = (param) => { };
const RemoveUnionTypeArrayTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithArrayTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Boolean"] = [true,true];
const SecondRemoveUnionTypeArrayTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= [true,true]
const UnionTypeFunctionTypeBooleanWithArrayTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Any"] = (param) => { };
const RemoveUnionTypeArrayTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithArrayTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["ArrayType"]["Any"] = [2,2];
const SecondRemoveUnionTypeArrayTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= [2,2]

const UnionTypeFunctionTypeBooleanWithFunctionTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const RemoveUnionTypeFunctionTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithFunctionTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const UnionTypeFunctionTypeBooleanWithFunctionTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Object"] = (param) => { };
const RemoveUnionTypeFunctionTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithFunctionTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Object"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const UnionTypeFunctionTypeBooleanWithFunctionTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["String"] = (param) => { };
const RemoveUnionTypeFunctionTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithFunctionTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["String"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const UnionTypeFunctionTypeBooleanWithFunctionTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Number"] = (param) => { };
const RemoveUnionTypeFunctionTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithFunctionTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Number"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const UnionTypeFunctionTypeBooleanWithFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeFunctionTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const UnionTypeFunctionTypeBooleanWithFunctionTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Any"] = (param) => { };
const RemoveUnionTypeFunctionTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithFunctionTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["FunctionType"]["Any"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }

const UnionTypeFunctionTypeBooleanWithConstructorTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Literal"] = (param) => { };
const RemoveUnionTypeConstructorTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithConstructorTypeLiteral: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Literal"] = 1;
const SecondRemoveUnionTypeConstructorTypeLiteralFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 1
const UnionTypeFunctionTypeBooleanWithConstructorTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Object"] = (param) => { };
const RemoveUnionTypeConstructorTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithConstructorTypeObject: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Object"] = {};
const SecondRemoveUnionTypeConstructorTypeObjectFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= {}
const UnionTypeFunctionTypeBooleanWithConstructorTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["String"] = (param) => { };
const RemoveUnionTypeConstructorTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithConstructorTypeString: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["String"] = "two";
const SecondRemoveUnionTypeConstructorTypeStringFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= "two"
const UnionTypeFunctionTypeBooleanWithConstructorTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Number"] = (param) => { };
const RemoveUnionTypeConstructorTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithConstructorTypeNumber: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Number"] = 2;
const SecondRemoveUnionTypeConstructorTypeNumberFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 2
const UnionTypeFunctionTypeBooleanWithConstructorTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Boolean"] = (param) => { };
const RemoveUnionTypeConstructorTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithConstructorTypeBoolean: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Boolean"] = true;
const SecondRemoveUnionTypeConstructorTypeBooleanFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= true
const UnionTypeFunctionTypeBooleanWithConstructorTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Any"] = (param) => { };
const RemoveUnionTypeConstructorTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= (param) => { }
const SecondUnionTypeFunctionTypeBooleanWithConstructorTypeAny: Defaults["FunctionType"]["Boolean"] | Defaults["ConstructorType"]["Any"] = 2;
const SecondRemoveUnionTypeConstructorTypeAnyFromFunctionTypeBoolean: Defaults["FunctionType"]["Boolean"]= 2

const UnionTypeFunctionTypeAnyWithParenthesizedTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Literal"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithParenthesizedTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Literal"] = 1;
const SecondRemoveUnionTypeParenthesizedTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 1
const UnionTypeFunctionTypeAnyWithParenthesizedTypeObject: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Object"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithParenthesizedTypeObject: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Object"] = {};
const SecondRemoveUnionTypeParenthesizedTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= {}
const UnionTypeFunctionTypeAnyWithParenthesizedTypeString: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["String"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithParenthesizedTypeString: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["String"] = "two";
const SecondRemoveUnionTypeParenthesizedTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= "two"
const UnionTypeFunctionTypeAnyWithParenthesizedTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Number"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithParenthesizedTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Number"] = 2;
const SecondRemoveUnionTypeParenthesizedTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 2
const UnionTypeFunctionTypeAnyWithParenthesizedTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Boolean"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithParenthesizedTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Boolean"] = true;
const SecondRemoveUnionTypeParenthesizedTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= true
const UnionTypeFunctionTypeAnyWithParenthesizedTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Any"] = (param) => { };
const RemoveUnionTypeParenthesizedTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithParenthesizedTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ParenthesizedType"]["Any"] = 2;
const SecondRemoveUnionTypeParenthesizedTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 2

const UnionTypeFunctionTypeAnyWithTypeReferenceBuiltinLiteral: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeReferenceBuiltinLiteral: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Literal"] = promisify(1);
const SecondRemoveUnionTypeTypeReferenceBuiltinLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= promisify(1)
const UnionTypeFunctionTypeAnyWithTypeReferenceBuiltinObject: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Object"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeReferenceBuiltinObject: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Object"] = promisify({});
const SecondRemoveUnionTypeTypeReferenceBuiltinObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= promisify({})
const UnionTypeFunctionTypeAnyWithTypeReferenceBuiltinString: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["String"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeReferenceBuiltinString: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["String"] = promisify("two");
const SecondRemoveUnionTypeTypeReferenceBuiltinStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= promisify("two")
const UnionTypeFunctionTypeAnyWithTypeReferenceBuiltinNumber: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Number"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeReferenceBuiltinNumber: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Number"] = promisify(2);
const SecondRemoveUnionTypeTypeReferenceBuiltinNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= promisify(2)
const UnionTypeFunctionTypeAnyWithTypeReferenceBuiltinBoolean: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeReferenceBuiltinBoolean: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true);
const SecondRemoveUnionTypeTypeReferenceBuiltinBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= promisify(true)
const UnionTypeFunctionTypeAnyWithTypeReferenceBuiltinAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Any"] = (param) => { };
const RemoveUnionTypeTypeReferenceBuiltinAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeReferenceBuiltinAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferenceBuiltin"]["Any"] = promisify(2);
const SecondRemoveUnionTypeTypeReferenceBuiltinAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= promisify(2)

const UnionTypeFunctionTypeAnyWithTypeReferencePredefinedLiteral: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeReferencePredefinedLiteral: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Literal"] = 1;
const SecondRemoveUnionTypeTypeReferencePredefinedLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 1
const UnionTypeFunctionTypeAnyWithTypeReferencePredefinedObject: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Object"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeReferencePredefinedObject: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Object"] = {};
const SecondRemoveUnionTypeTypeReferencePredefinedObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= {}
const UnionTypeFunctionTypeAnyWithTypeReferencePredefinedString: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["String"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeReferencePredefinedString: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["String"] = "two";
const SecondRemoveUnionTypeTypeReferencePredefinedStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= "two"
const UnionTypeFunctionTypeAnyWithTypeReferencePredefinedNumber: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Number"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeReferencePredefinedNumber: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Number"] = 2;
const SecondRemoveUnionTypeTypeReferencePredefinedNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 2
const UnionTypeFunctionTypeAnyWithTypeReferencePredefinedBoolean: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeReferencePredefinedBoolean: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Boolean"] = true;
const SecondRemoveUnionTypeTypeReferencePredefinedBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= true
const UnionTypeFunctionTypeAnyWithTypeReferencePredefinedAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Any"] = (param) => { };
const RemoveUnionTypeTypeReferencePredefinedAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeReferencePredefinedAny: Defaults["FunctionType"]["Any"] | Defaults["TypeReferencePredefined"]["Any"] = 2;
const SecondRemoveUnionTypeTypeReferencePredefinedAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 2

const UnionTypeFunctionTypeAnyWithUnionTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Literal"] = (param) => { };
const RemoveUnionTypeUnionTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithUnionTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Literal"] = 1;
const SecondRemoveUnionTypeUnionTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 1
const UnionTypeFunctionTypeAnyWithUnionTypeObject: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Object"] = (param) => { };
const RemoveUnionTypeUnionTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithUnionTypeObject: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Object"] = {};
const SecondRemoveUnionTypeUnionTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= {}
const UnionTypeFunctionTypeAnyWithUnionTypeString: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["String"] = (param) => { };
const RemoveUnionTypeUnionTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithUnionTypeString: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["String"] = "two";
const SecondRemoveUnionTypeUnionTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= "two"
const UnionTypeFunctionTypeAnyWithUnionTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Number"] = (param) => { };
const RemoveUnionTypeUnionTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithUnionTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Number"] = 2;
const SecondRemoveUnionTypeUnionTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 2
const UnionTypeFunctionTypeAnyWithUnionTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeUnionTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithUnionTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Boolean"] = true;
const SecondRemoveUnionTypeUnionTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= true
const UnionTypeFunctionTypeAnyWithUnionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Any"] = (param) => { };
const RemoveUnionTypeUnionTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithUnionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["UnionType"]["Any"] = 2;
const SecondRemoveUnionTypeUnionTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 2

const UnionTypeFunctionTypeAnyWithIntersectionTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Literal"] = (param) => { };
const RemoveUnionTypeIntersectionTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithIntersectionTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Literal"] = 1;
const SecondRemoveUnionTypeIntersectionTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 1
const UnionTypeFunctionTypeAnyWithIntersectionTypeObject: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Object"] = (param) => { };
const RemoveUnionTypeIntersectionTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithIntersectionTypeObject: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Object"] = {};
const SecondRemoveUnionTypeIntersectionTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= {}
const UnionTypeFunctionTypeAnyWithIntersectionTypeString: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["String"] = (param) => { };
const RemoveUnionTypeIntersectionTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithIntersectionTypeString: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["String"] = "two";
const SecondRemoveUnionTypeIntersectionTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= "two"
const UnionTypeFunctionTypeAnyWithIntersectionTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Number"] = (param) => { };
const RemoveUnionTypeIntersectionTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithIntersectionTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Number"] = 2;
const SecondRemoveUnionTypeIntersectionTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 2
const UnionTypeFunctionTypeAnyWithIntersectionTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeIntersectionTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithIntersectionTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Boolean"] = true;
const SecondRemoveUnionTypeIntersectionTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= true
const UnionTypeFunctionTypeAnyWithIntersectionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Any"] = (param) => { };
const RemoveUnionTypeIntersectionTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithIntersectionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["IntersectionType"]["Any"] = 2;
const SecondRemoveUnionTypeIntersectionTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 2

const UnionTypeFunctionTypeAnyWithTypeLiteralLiteral: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Literal"] = (param) => { };
const RemoveUnionTypeTypeLiteralLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeLiteralLiteral: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Literal"] = {"key":1};
const SecondRemoveUnionTypeTypeLiteralLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= {"key":1}
const UnionTypeFunctionTypeAnyWithTypeLiteralObject: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Object"] = (param) => { };
const RemoveUnionTypeTypeLiteralObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeLiteralObject: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Object"] = {"key":{}};
const SecondRemoveUnionTypeTypeLiteralObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= {"key":{}}
const UnionTypeFunctionTypeAnyWithTypeLiteralString: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["String"] = (param) => { };
const RemoveUnionTypeTypeLiteralStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeLiteralString: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["String"] = {"key":"two"};
const SecondRemoveUnionTypeTypeLiteralStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= {"key":"two"}
const UnionTypeFunctionTypeAnyWithTypeLiteralNumber: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Number"] = (param) => { };
const RemoveUnionTypeTypeLiteralNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeLiteralNumber: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Number"] = {"key":2};
const SecondRemoveUnionTypeTypeLiteralNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= {"key":2}
const UnionTypeFunctionTypeAnyWithTypeLiteralBoolean: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Boolean"] = (param) => { };
const RemoveUnionTypeTypeLiteralBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeLiteralBoolean: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Boolean"] = {"key":true};
const SecondRemoveUnionTypeTypeLiteralBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= {"key":true}
const UnionTypeFunctionTypeAnyWithTypeLiteralAny: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Any"] = (param) => { };
const RemoveUnionTypeTypeLiteralAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTypeLiteralAny: Defaults["FunctionType"]["Any"] | Defaults["TypeLiteral"]["Any"] = {"key":2};
const SecondRemoveUnionTypeTypeLiteralAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= {"key":2}

const UnionTypeFunctionTypeAnyWithTupleTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Literal"] = (param) => { };
const RemoveUnionTypeTupleTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTupleTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Literal"] = [1];
const SecondRemoveUnionTypeTupleTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= [1]
const UnionTypeFunctionTypeAnyWithTupleTypeObject: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Object"] = (param) => { };
const RemoveUnionTypeTupleTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTupleTypeObject: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Object"] = [{}];
const SecondRemoveUnionTypeTupleTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= [{}]
const UnionTypeFunctionTypeAnyWithTupleTypeString: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["String"] = (param) => { };
const RemoveUnionTypeTupleTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTupleTypeString: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["String"] = ["two"];
const SecondRemoveUnionTypeTupleTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= ["two"]
const UnionTypeFunctionTypeAnyWithTupleTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Number"] = (param) => { };
const RemoveUnionTypeTupleTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTupleTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Number"] = [2];
const SecondRemoveUnionTypeTupleTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= [2]
const UnionTypeFunctionTypeAnyWithTupleTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Boolean"] = (param) => { };
const RemoveUnionTypeTupleTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTupleTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Boolean"] = [true];
const SecondRemoveUnionTypeTupleTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= [true]
const UnionTypeFunctionTypeAnyWithTupleTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Any"] = (param) => { };
const RemoveUnionTypeTupleTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithTupleTypeAny: Defaults["FunctionType"]["Any"] | Defaults["TupleType"]["Any"] = [2];
const SecondRemoveUnionTypeTupleTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= [2]

const UnionTypeFunctionTypeAnyWithArrayTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Literal"] = (param) => { };
const RemoveUnionTypeArrayTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithArrayTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Literal"] = [1,1];
const SecondRemoveUnionTypeArrayTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= [1,1]
const UnionTypeFunctionTypeAnyWithArrayTypeObject: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Object"] = (param) => { };
const RemoveUnionTypeArrayTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithArrayTypeObject: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Object"] = [{},{}];
const SecondRemoveUnionTypeArrayTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= [{},{}]
const UnionTypeFunctionTypeAnyWithArrayTypeString: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["String"] = (param) => { };
const RemoveUnionTypeArrayTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithArrayTypeString: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["String"] = ["two","two"];
const SecondRemoveUnionTypeArrayTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= ["two","two"]
const UnionTypeFunctionTypeAnyWithArrayTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Number"] = (param) => { };
const RemoveUnionTypeArrayTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithArrayTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Number"] = [2,2];
const SecondRemoveUnionTypeArrayTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= [2,2]
const UnionTypeFunctionTypeAnyWithArrayTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Boolean"] = (param) => { };
const RemoveUnionTypeArrayTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithArrayTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Boolean"] = [true,true];
const SecondRemoveUnionTypeArrayTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= [true,true]
const UnionTypeFunctionTypeAnyWithArrayTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Any"] = (param) => { };
const RemoveUnionTypeArrayTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithArrayTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ArrayType"]["Any"] = [2,2];
const SecondRemoveUnionTypeArrayTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= [2,2]

const UnionTypeFunctionTypeAnyWithFunctionTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const RemoveUnionTypeFunctionTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithFunctionTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Literal"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const UnionTypeFunctionTypeAnyWithFunctionTypeObject: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Object"] = (param) => { };
const RemoveUnionTypeFunctionTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithFunctionTypeObject: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Object"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const UnionTypeFunctionTypeAnyWithFunctionTypeString: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["String"] = (param) => { };
const RemoveUnionTypeFunctionTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithFunctionTypeString: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["String"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const UnionTypeFunctionTypeAnyWithFunctionTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Number"] = (param) => { };
const RemoveUnionTypeFunctionTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithFunctionTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Number"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const UnionTypeFunctionTypeAnyWithFunctionTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const RemoveUnionTypeFunctionTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithFunctionTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Boolean"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const UnionTypeFunctionTypeAnyWithFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Any"] = (param) => { };
const RemoveUnionTypeFunctionTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithFunctionTypeAny: Defaults["FunctionType"]["Any"] | Defaults["FunctionType"]["Any"] = (param) => { };
const SecondRemoveUnionTypeFunctionTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }

const UnionTypeFunctionTypeAnyWithConstructorTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Literal"] = (param) => { };
const RemoveUnionTypeConstructorTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithConstructorTypeLiteral: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Literal"] = 1;
const SecondRemoveUnionTypeConstructorTypeLiteralFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 1
const UnionTypeFunctionTypeAnyWithConstructorTypeObject: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Object"] = (param) => { };
const RemoveUnionTypeConstructorTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithConstructorTypeObject: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Object"] = {};
const SecondRemoveUnionTypeConstructorTypeObjectFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= {}
const UnionTypeFunctionTypeAnyWithConstructorTypeString: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["String"] = (param) => { };
const RemoveUnionTypeConstructorTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithConstructorTypeString: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["String"] = "two";
const SecondRemoveUnionTypeConstructorTypeStringFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= "two"
const UnionTypeFunctionTypeAnyWithConstructorTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Number"] = (param) => { };
const RemoveUnionTypeConstructorTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithConstructorTypeNumber: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Number"] = 2;
const SecondRemoveUnionTypeConstructorTypeNumberFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 2
const UnionTypeFunctionTypeAnyWithConstructorTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Boolean"] = (param) => { };
const RemoveUnionTypeConstructorTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithConstructorTypeBoolean: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Boolean"] = true;
const SecondRemoveUnionTypeConstructorTypeBooleanFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= true
const UnionTypeFunctionTypeAnyWithConstructorTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Any"] = (param) => { };
const RemoveUnionTypeConstructorTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= (param) => { }
const SecondUnionTypeFunctionTypeAnyWithConstructorTypeAny: Defaults["FunctionType"]["Any"] | Defaults["ConstructorType"]["Any"] = 2;
const SecondRemoveUnionTypeConstructorTypeAnyFromFunctionTypeAny: Defaults["FunctionType"]["Any"]= 2

