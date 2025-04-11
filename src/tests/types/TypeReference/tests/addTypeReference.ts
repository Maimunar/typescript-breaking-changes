import { Defaults as GeneralDefaults} from "../../defaults";
import { Defaults as TypeReferenceDefaults } from "../defaults";

/*
 * TypeReference - Promise 
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Add Type Reference - ParenthesizedType
const TypeParenthesizedTypeLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] = 1
const AddTupleToParenthesizedTypeLiteral: TypeReferenceDefaults["ParenthesizedType"]["Literal"] = 1;
const TypeParenthesizedTypeObject: GeneralDefaults["ParenthesizedType"]["Object"] = {}
const AddTupleToParenthesizedTypeObject: TypeReferenceDefaults["ParenthesizedType"]["Object"] = {};
const TypeParenthesizedTypeString: GeneralDefaults["ParenthesizedType"]["String"] = "two"
const AddTupleToParenthesizedTypeString: TypeReferenceDefaults["ParenthesizedType"]["String"] = "two";
const TypeParenthesizedTypeNumber: GeneralDefaults["ParenthesizedType"]["Number"] = 2
const AddTupleToParenthesizedTypeNumber: TypeReferenceDefaults["ParenthesizedType"]["Number"] = 2;
const TypeParenthesizedTypeBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] = true
const AddTupleToParenthesizedTypeBoolean: TypeReferenceDefaults["ParenthesizedType"]["Boolean"] = true;
const TypeParenthesizedTypeAny: GeneralDefaults["ParenthesizedType"]["Any"] = 2
const AddTupleToParenthesizedTypeAny: TypeReferenceDefaults["ParenthesizedType"]["Any"] = 2;

// Add Type Reference - TypeReferenceBuiltin
const TypeTypeReferenceBuiltinLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] = promisify(1)
const AddTupleToTypeReferenceBuiltinLiteral: TypeReferenceDefaults["TypeReferenceBuiltin"]["Literal"] = promisify(1);
const TypeTypeReferenceBuiltinObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] = promisify({})
const AddTupleToTypeReferenceBuiltinObject: TypeReferenceDefaults["TypeReferenceBuiltin"]["Object"] = promisify({});
const TypeTypeReferenceBuiltinString: GeneralDefaults["TypeReferenceBuiltin"]["String"] = promisify("two")
const AddTupleToTypeReferenceBuiltinString: TypeReferenceDefaults["TypeReferenceBuiltin"]["String"] = promisify("two");
const TypeTypeReferenceBuiltinNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] = promisify(2)
const AddTupleToTypeReferenceBuiltinNumber: TypeReferenceDefaults["TypeReferenceBuiltin"]["Number"] = promisify(2);
const TypeTypeReferenceBuiltinBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true)
const AddTupleToTypeReferenceBuiltinBoolean: TypeReferenceDefaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true);
const TypeTypeReferenceBuiltinAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] = promisify(2)
const AddTupleToTypeReferenceBuiltinAny: TypeReferenceDefaults["TypeReferenceBuiltin"]["Any"] = promisify(2);

// Add Type Reference - TypeReferencePredefined
const TypeTypeReferencePredefinedLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] = 1
const AddTupleToTypeReferencePredefinedLiteral: TypeReferenceDefaults["TypeReferencePredefined"]["Literal"] = 1;
const TypeTypeReferencePredefinedObject: GeneralDefaults["TypeReferencePredefined"]["Object"] = {}
const AddTupleToTypeReferencePredefinedObject: TypeReferenceDefaults["TypeReferencePredefined"]["Object"] = {};
const TypeTypeReferencePredefinedString: GeneralDefaults["TypeReferencePredefined"]["String"] = "two"
const AddTupleToTypeReferencePredefinedString: TypeReferenceDefaults["TypeReferencePredefined"]["String"] = "two";
const TypeTypeReferencePredefinedNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] = 2
const AddTupleToTypeReferencePredefinedNumber: TypeReferenceDefaults["TypeReferencePredefined"]["Number"] = 2;
const TypeTypeReferencePredefinedBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] = true
const AddTupleToTypeReferencePredefinedBoolean: TypeReferenceDefaults["TypeReferencePredefined"]["Boolean"] = true;
const TypeTypeReferencePredefinedAny: GeneralDefaults["TypeReferencePredefined"]["Any"] = 2
const AddTupleToTypeReferencePredefinedAny: TypeReferenceDefaults["TypeReferencePredefined"]["Any"] = 2;

// Add Type Reference - UnionType
const TypeUnionTypeLiteral: GeneralDefaults["UnionType"]["Literal"] = 1
const AddTupleToUnionTypeLiteral: TypeReferenceDefaults["UnionType"]["Literal"] = 1;
const TypeUnionTypeObject: GeneralDefaults["UnionType"]["Object"] = {}
const AddTupleToUnionTypeObject: TypeReferenceDefaults["UnionType"]["Object"] = {};
const TypeUnionTypeString: GeneralDefaults["UnionType"]["String"] = "two"
const AddTupleToUnionTypeString: TypeReferenceDefaults["UnionType"]["String"] = "two";
const TypeUnionTypeNumber: GeneralDefaults["UnionType"]["Number"] = 2
const AddTupleToUnionTypeNumber: TypeReferenceDefaults["UnionType"]["Number"] = 2;
const TypeUnionTypeBoolean: GeneralDefaults["UnionType"]["Boolean"] = true
const AddTupleToUnionTypeBoolean: TypeReferenceDefaults["UnionType"]["Boolean"] = true;
const TypeUnionTypeAny: GeneralDefaults["UnionType"]["Any"] = 2
const AddTupleToUnionTypeAny: TypeReferenceDefaults["UnionType"]["Any"] = 2;

// Add Type Reference - IntersectionType
const TypeIntersectionTypeLiteral: GeneralDefaults["IntersectionType"]["Literal"] = 1
const AddTupleToIntersectionTypeLiteral: TypeReferenceDefaults["IntersectionType"]["Literal"] = 1;
const TypeIntersectionTypeObject: GeneralDefaults["IntersectionType"]["Object"] = {}
const AddTupleToIntersectionTypeObject: TypeReferenceDefaults["IntersectionType"]["Object"] = {};
const TypeIntersectionTypeString: GeneralDefaults["IntersectionType"]["String"] = "two"
const AddTupleToIntersectionTypeString: TypeReferenceDefaults["IntersectionType"]["String"] = "two";
const TypeIntersectionTypeNumber: GeneralDefaults["IntersectionType"]["Number"] = 2
const AddTupleToIntersectionTypeNumber: TypeReferenceDefaults["IntersectionType"]["Number"] = 2;
const TypeIntersectionTypeBoolean: GeneralDefaults["IntersectionType"]["Boolean"] = true
const AddTupleToIntersectionTypeBoolean: TypeReferenceDefaults["IntersectionType"]["Boolean"] = true;
const TypeIntersectionTypeAny: GeneralDefaults["IntersectionType"]["Any"] = 2
const AddTupleToIntersectionTypeAny: TypeReferenceDefaults["IntersectionType"]["Any"] = 2;

// Add Type Reference - TypeLiteral
const TypeTypeLiteralLiteral: GeneralDefaults["TypeLiteral"]["Literal"] = {"key":1}
const AddTupleToTypeLiteralLiteral: TypeReferenceDefaults["TypeLiteral"]["Literal"] = {"key":1};
const TypeTypeLiteralObject: GeneralDefaults["TypeLiteral"]["Object"] = {"key":{}}
const AddTupleToTypeLiteralObject: TypeReferenceDefaults["TypeLiteral"]["Object"] = {"key":{}};
const TypeTypeLiteralString: GeneralDefaults["TypeLiteral"]["String"] = {"key":"two"}
const AddTupleToTypeLiteralString: TypeReferenceDefaults["TypeLiteral"]["String"] = {"key":"two"};
const TypeTypeLiteralNumber: GeneralDefaults["TypeLiteral"]["Number"] = {"key":2}
const AddTupleToTypeLiteralNumber: TypeReferenceDefaults["TypeLiteral"]["Number"] = {"key":2};
const TypeTypeLiteralBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] = {"key":true}
const AddTupleToTypeLiteralBoolean: TypeReferenceDefaults["TypeLiteral"]["Boolean"] = {"key":true};
const TypeTypeLiteralAny: GeneralDefaults["TypeLiteral"]["Any"] = {"key":2}
const AddTupleToTypeLiteralAny: TypeReferenceDefaults["TypeLiteral"]["Any"] = {"key":2};

// Add Type Reference - TupleType
const TypeTupleTypeLiteral: GeneralDefaults["TupleType"]["Literal"] = [1]
const AddTupleToTupleTypeLiteral: TypeReferenceDefaults["TupleType"]["Literal"] = [1];
const TypeTupleTypeObject: GeneralDefaults["TupleType"]["Object"] = [{}]
const AddTupleToTupleTypeObject: TypeReferenceDefaults["TupleType"]["Object"] = [{}];
const TypeTupleTypeString: GeneralDefaults["TupleType"]["String"] = ["two"]
const AddTupleToTupleTypeString: TypeReferenceDefaults["TupleType"]["String"] = ["two"];
const TypeTupleTypeNumber: GeneralDefaults["TupleType"]["Number"] = [2]
const AddTupleToTupleTypeNumber: TypeReferenceDefaults["TupleType"]["Number"] = [2];
const TypeTupleTypeBoolean: GeneralDefaults["TupleType"]["Boolean"] = [true]
const AddTupleToTupleTypeBoolean: TypeReferenceDefaults["TupleType"]["Boolean"] = [true];
const TypeTupleTypeAny: GeneralDefaults["TupleType"]["Any"] = [2]
const AddTupleToTupleTypeAny: TypeReferenceDefaults["TupleType"]["Any"] = [2];

// Add Type Reference - ArrayType
const TypeArrayTypeLiteral: GeneralDefaults["ArrayType"]["Literal"] = [1,1]
const AddTupleToArrayTypeLiteral: TypeReferenceDefaults["ArrayType"]["Literal"] = [1,1];
const TypeArrayTypeObject: GeneralDefaults["ArrayType"]["Object"] = [{},{}]
const AddTupleToArrayTypeObject: TypeReferenceDefaults["ArrayType"]["Object"] = [{},{}];
const TypeArrayTypeString: GeneralDefaults["ArrayType"]["String"] = ["two","two"]
const AddTupleToArrayTypeString: TypeReferenceDefaults["ArrayType"]["String"] = ["two","two"];
const TypeArrayTypeNumber: GeneralDefaults["ArrayType"]["Number"] = [2,2]
const AddTupleToArrayTypeNumber: TypeReferenceDefaults["ArrayType"]["Number"] = [2,2];
const TypeArrayTypeBoolean: GeneralDefaults["ArrayType"]["Boolean"] = [true,true]
const AddTupleToArrayTypeBoolean: TypeReferenceDefaults["ArrayType"]["Boolean"] = [true,true];
const TypeArrayTypeAny: GeneralDefaults["ArrayType"]["Any"] = [2,2]
const AddTupleToArrayTypeAny: TypeReferenceDefaults["ArrayType"]["Any"] = [2,2];

// Add Type Reference - FunctionType
const TypeFunctionTypeLiteral: GeneralDefaults["FunctionType"]["Literal"] = (param) => { }
const AddTupleToFunctionTypeLiteral: TypeReferenceDefaults["FunctionType"]["Literal"] = (param) => { };
const TypeFunctionTypeObject: GeneralDefaults["FunctionType"]["Object"] = (param) => { }
const AddTupleToFunctionTypeObject: TypeReferenceDefaults["FunctionType"]["Object"] = (param) => { };
const TypeFunctionTypeString: GeneralDefaults["FunctionType"]["String"] = (param) => { }
const AddTupleToFunctionTypeString: TypeReferenceDefaults["FunctionType"]["String"] = (param) => { };
const TypeFunctionTypeNumber: GeneralDefaults["FunctionType"]["Number"] = (param) => { }
const AddTupleToFunctionTypeNumber: TypeReferenceDefaults["FunctionType"]["Number"] = (param) => { };
const TypeFunctionTypeBoolean: GeneralDefaults["FunctionType"]["Boolean"] = (param) => { }
const AddTupleToFunctionTypeBoolean: TypeReferenceDefaults["FunctionType"]["Boolean"] = (param) => { };
const TypeFunctionTypeAny: GeneralDefaults["FunctionType"]["Any"] = (param) => { }
const AddTupleToFunctionTypeAny: TypeReferenceDefaults["FunctionType"]["Any"] = (param) => { };

// Add Type Reference - ConstructorType
const TypeConstructorTypeLiteral: GeneralDefaults["ConstructorType"]["Literal"] = 1
const AddTupleToConstructorTypeLiteral: TypeReferenceDefaults["ConstructorType"]["Literal"] = 1;
const TypeConstructorTypeObject: GeneralDefaults["ConstructorType"]["Object"] = {}
const AddTupleToConstructorTypeObject: TypeReferenceDefaults["ConstructorType"]["Object"] = {};
const TypeConstructorTypeString: GeneralDefaults["ConstructorType"]["String"] = "two"
const AddTupleToConstructorTypeString: TypeReferenceDefaults["ConstructorType"]["String"] = "two";
const TypeConstructorTypeNumber: GeneralDefaults["ConstructorType"]["Number"] = 2
const AddTupleToConstructorTypeNumber: TypeReferenceDefaults["ConstructorType"]["Number"] = 2;
const TypeConstructorTypeBoolean: GeneralDefaults["ConstructorType"]["Boolean"] = true
const AddTupleToConstructorTypeBoolean: TypeReferenceDefaults["ConstructorType"]["Boolean"] = true;
const TypeConstructorTypeAny: GeneralDefaults["ConstructorType"]["Any"] = 2
const AddTupleToConstructorTypeAny: TypeReferenceDefaults["ConstructorType"]["Any"] = 2;

