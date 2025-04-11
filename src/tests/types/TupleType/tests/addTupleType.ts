import { Defaults as GeneralDefaults} from "../../defaults";
import { Defaults as TupleDefaults, EmptyTuple} from "../defaults";

/*
 * TupleType
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Add Tuple - ParenthesizedType
const TypeParenthesizedTypeLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] = 1
const AddTupleToParenthesizedTypeLiteral: TupleDefaults["ParenthesizedType"]["Literal"] = 1;
const TypeParenthesizedTypeObject: GeneralDefaults["ParenthesizedType"]["Object"] = {}
const AddTupleToParenthesizedTypeObject: TupleDefaults["ParenthesizedType"]["Object"] = {};
const TypeParenthesizedTypeString: GeneralDefaults["ParenthesizedType"]["String"] = "two"
const AddTupleToParenthesizedTypeString: TupleDefaults["ParenthesizedType"]["String"] = "two";
const TypeParenthesizedTypeNumber: GeneralDefaults["ParenthesizedType"]["Number"] = 2
const AddTupleToParenthesizedTypeNumber: TupleDefaults["ParenthesizedType"]["Number"] = 2;
const TypeParenthesizedTypeBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] = true
const AddTupleToParenthesizedTypeBoolean: TupleDefaults["ParenthesizedType"]["Boolean"] = true;
const TypeParenthesizedTypeAny: GeneralDefaults["ParenthesizedType"]["Any"] = 2
const AddTupleToParenthesizedTypeAny: TupleDefaults["ParenthesizedType"]["Any"] = 2;

// Add Tuple - TypeReferenceBuiltin
const TypeTypeReferenceBuiltinLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] = promisify(1)
const AddTupleToTypeReferenceBuiltinLiteral: TupleDefaults["TypeReferenceBuiltin"]["Literal"] = promisify(1);
const TypeTypeReferenceBuiltinObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] = promisify({})
const AddTupleToTypeReferenceBuiltinObject: TupleDefaults["TypeReferenceBuiltin"]["Object"] = promisify({});
const TypeTypeReferenceBuiltinString: GeneralDefaults["TypeReferenceBuiltin"]["String"] = promisify("two")
const AddTupleToTypeReferenceBuiltinString: TupleDefaults["TypeReferenceBuiltin"]["String"] = promisify("two");
const TypeTypeReferenceBuiltinNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] = promisify(2)
const AddTupleToTypeReferenceBuiltinNumber: TupleDefaults["TypeReferenceBuiltin"]["Number"] = promisify(2);
const TypeTypeReferenceBuiltinBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true)
const AddTupleToTypeReferenceBuiltinBoolean: TupleDefaults["TypeReferenceBuiltin"]["Boolean"] = promisify(true);
const TypeTypeReferenceBuiltinAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] = promisify(2)
const AddTupleToTypeReferenceBuiltinAny: TupleDefaults["TypeReferenceBuiltin"]["Any"] = promisify(2);

// Add Tuple - TypeReferencePredefined
const TypeTypeReferencePredefinedLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] = 1
const AddTupleToTypeReferencePredefinedLiteral: TupleDefaults["TypeReferencePredefined"]["Literal"] = 1;
const TypeTypeReferencePredefinedObject: GeneralDefaults["TypeReferencePredefined"]["Object"] = {}
const AddTupleToTypeReferencePredefinedObject: TupleDefaults["TypeReferencePredefined"]["Object"] = {};
const TypeTypeReferencePredefinedString: GeneralDefaults["TypeReferencePredefined"]["String"] = "two"
const AddTupleToTypeReferencePredefinedString: TupleDefaults["TypeReferencePredefined"]["String"] = "two";
const TypeTypeReferencePredefinedNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] = 2
const AddTupleToTypeReferencePredefinedNumber: TupleDefaults["TypeReferencePredefined"]["Number"] = 2;
const TypeTypeReferencePredefinedBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] = true
const AddTupleToTypeReferencePredefinedBoolean: TupleDefaults["TypeReferencePredefined"]["Boolean"] = true;
const TypeTypeReferencePredefinedAny: GeneralDefaults["TypeReferencePredefined"]["Any"] = 2
const AddTupleToTypeReferencePredefinedAny: TupleDefaults["TypeReferencePredefined"]["Any"] = 2;

// Add Tuple - UnionType
const TypeUnionTypeLiteral: GeneralDefaults["UnionType"]["Literal"] = 1
const AddTupleToUnionTypeLiteral: TupleDefaults["UnionType"]["Literal"] = 1;
const TypeUnionTypeObject: GeneralDefaults["UnionType"]["Object"] = {}
const AddTupleToUnionTypeObject: TupleDefaults["UnionType"]["Object"] = {};
const TypeUnionTypeString: GeneralDefaults["UnionType"]["String"] = "two"
const AddTupleToUnionTypeString: TupleDefaults["UnionType"]["String"] = "two";
const TypeUnionTypeNumber: GeneralDefaults["UnionType"]["Number"] = 2
const AddTupleToUnionTypeNumber: TupleDefaults["UnionType"]["Number"] = 2;
const TypeUnionTypeBoolean: GeneralDefaults["UnionType"]["Boolean"] = true
const AddTupleToUnionTypeBoolean: TupleDefaults["UnionType"]["Boolean"] = true;
const TypeUnionTypeAny: GeneralDefaults["UnionType"]["Any"] = 2
const AddTupleToUnionTypeAny: TupleDefaults["UnionType"]["Any"] = 2;

// Add Tuple - IntersectionType
const TypeIntersectionTypeLiteral: GeneralDefaults["IntersectionType"]["Literal"] = 1
const AddTupleToIntersectionTypeLiteral: TupleDefaults["IntersectionType"]["Literal"] = 1;
const TypeIntersectionTypeObject: GeneralDefaults["IntersectionType"]["Object"] = {}
const AddTupleToIntersectionTypeObject: TupleDefaults["IntersectionType"]["Object"] = {};
const TypeIntersectionTypeString: GeneralDefaults["IntersectionType"]["String"] = "two"
const AddTupleToIntersectionTypeString: TupleDefaults["IntersectionType"]["String"] = "two";
const TypeIntersectionTypeNumber: GeneralDefaults["IntersectionType"]["Number"] = 2
const AddTupleToIntersectionTypeNumber: TupleDefaults["IntersectionType"]["Number"] = 2;
const TypeIntersectionTypeBoolean: GeneralDefaults["IntersectionType"]["Boolean"] = true
const AddTupleToIntersectionTypeBoolean: TupleDefaults["IntersectionType"]["Boolean"] = true;
const TypeIntersectionTypeAny: GeneralDefaults["IntersectionType"]["Any"] = 2
const AddTupleToIntersectionTypeAny: TupleDefaults["IntersectionType"]["Any"] = 2;

// Add Tuple - TypeLiteral
const TypeTypeLiteralLiteral: GeneralDefaults["TypeLiteral"]["Literal"] = {"key":1}
const AddTupleToTypeLiteralLiteral: TupleDefaults["TypeLiteral"]["Literal"] = {"key":1};
const TypeTypeLiteralObject: GeneralDefaults["TypeLiteral"]["Object"] = {"key":{}}
const AddTupleToTypeLiteralObject: TupleDefaults["TypeLiteral"]["Object"] = {"key":{}};
const TypeTypeLiteralString: GeneralDefaults["TypeLiteral"]["String"] = {"key":"two"}
const AddTupleToTypeLiteralString: TupleDefaults["TypeLiteral"]["String"] = {"key":"two"};
const TypeTypeLiteralNumber: GeneralDefaults["TypeLiteral"]["Number"] = {"key":2}
const AddTupleToTypeLiteralNumber: TupleDefaults["TypeLiteral"]["Number"] = {"key":2};
const TypeTypeLiteralBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] = {"key":true}
const AddTupleToTypeLiteralBoolean: TupleDefaults["TypeLiteral"]["Boolean"] = {"key":true};
const TypeTypeLiteralAny: GeneralDefaults["TypeLiteral"]["Any"] = {"key":2}
const AddTupleToTypeLiteralAny: TupleDefaults["TypeLiteral"]["Any"] = {"key":2};

// Add Tuple - TupleType
const TypeTupleTypeLiteral: GeneralDefaults["TupleType"]["Literal"] = [1]
const AddTupleToTupleTypeLiteral: TupleDefaults["TupleType"]["Literal"] = [1];
const TypeTupleTypeObject: GeneralDefaults["TupleType"]["Object"] = [{}]
const AddTupleToTupleTypeObject: TupleDefaults["TupleType"]["Object"] = [{}];
const TypeTupleTypeString: GeneralDefaults["TupleType"]["String"] = ["two"]
const AddTupleToTupleTypeString: TupleDefaults["TupleType"]["String"] = ["two"];
const TypeTupleTypeNumber: GeneralDefaults["TupleType"]["Number"] = [2]
const AddTupleToTupleTypeNumber: TupleDefaults["TupleType"]["Number"] = [2];
const TypeTupleTypeBoolean: GeneralDefaults["TupleType"]["Boolean"] = [true]
const AddTupleToTupleTypeBoolean: TupleDefaults["TupleType"]["Boolean"] = [true];
const TypeTupleTypeAny: GeneralDefaults["TupleType"]["Any"] = [2]
const AddTupleToTupleTypeAny: TupleDefaults["TupleType"]["Any"] = [2];

// Add Tuple - ArrayType
const TypeArrayTypeLiteral: GeneralDefaults["ArrayType"]["Literal"] = [1,1]
const AddTupleToArrayTypeLiteral: TupleDefaults["ArrayType"]["Literal"] = [1,1];
const TypeArrayTypeObject: GeneralDefaults["ArrayType"]["Object"] = [{},{}]
const AddTupleToArrayTypeObject: TupleDefaults["ArrayType"]["Object"] = [{},{}];
const TypeArrayTypeString: GeneralDefaults["ArrayType"]["String"] = ["two","two"]
const AddTupleToArrayTypeString: TupleDefaults["ArrayType"]["String"] = ["two","two"];
const TypeArrayTypeNumber: GeneralDefaults["ArrayType"]["Number"] = [2,2]
const AddTupleToArrayTypeNumber: TupleDefaults["ArrayType"]["Number"] = [2,2];
const TypeArrayTypeBoolean: GeneralDefaults["ArrayType"]["Boolean"] = [true,true]
const AddTupleToArrayTypeBoolean: TupleDefaults["ArrayType"]["Boolean"] = [true,true];
const TypeArrayTypeAny: GeneralDefaults["ArrayType"]["Any"] = [2,2]
const AddTupleToArrayTypeAny: TupleDefaults["ArrayType"]["Any"] = [2,2];

// Add Tuple - FunctionType
const TypeFunctionTypeLiteral: GeneralDefaults["FunctionType"]["Literal"] = (param) => { }
const AddTupleToFunctionTypeLiteral: TupleDefaults["FunctionType"]["Literal"] = (param) => { };
const TypeFunctionTypeObject: GeneralDefaults["FunctionType"]["Object"] = (param) => { }
const AddTupleToFunctionTypeObject: TupleDefaults["FunctionType"]["Object"] = (param) => { };
const TypeFunctionTypeString: GeneralDefaults["FunctionType"]["String"] = (param) => { }
const AddTupleToFunctionTypeString: TupleDefaults["FunctionType"]["String"] = (param) => { };
const TypeFunctionTypeNumber: GeneralDefaults["FunctionType"]["Number"] = (param) => { }
const AddTupleToFunctionTypeNumber: TupleDefaults["FunctionType"]["Number"] = (param) => { };
const TypeFunctionTypeBoolean: GeneralDefaults["FunctionType"]["Boolean"] = (param) => { }
const AddTupleToFunctionTypeBoolean: TupleDefaults["FunctionType"]["Boolean"] = (param) => { };
const TypeFunctionTypeAny: GeneralDefaults["FunctionType"]["Any"] = (param) => { }
const AddTupleToFunctionTypeAny: TupleDefaults["FunctionType"]["Any"] = (param) => { };

// Add Tuple - ConstructorType
const TypeConstructorTypeLiteral: GeneralDefaults["ConstructorType"]["Literal"] = 1
const AddTupleToConstructorTypeLiteral: TupleDefaults["ConstructorType"]["Literal"] = 1;
const TypeConstructorTypeObject: GeneralDefaults["ConstructorType"]["Object"] = {}
const AddTupleToConstructorTypeObject: TupleDefaults["ConstructorType"]["Object"] = {};
const TypeConstructorTypeString: GeneralDefaults["ConstructorType"]["String"] = "two"
const AddTupleToConstructorTypeString: TupleDefaults["ConstructorType"]["String"] = "two";
const TypeConstructorTypeNumber: GeneralDefaults["ConstructorType"]["Number"] = 2
const AddTupleToConstructorTypeNumber: TupleDefaults["ConstructorType"]["Number"] = 2;
const TypeConstructorTypeBoolean: GeneralDefaults["ConstructorType"]["Boolean"] = true
const AddTupleToConstructorTypeBoolean: TupleDefaults["ConstructorType"]["Boolean"] = true;
const TypeConstructorTypeAny: GeneralDefaults["ConstructorType"]["Any"] = 2
const AddTupleToConstructorTypeAny: TupleDefaults["ConstructorType"]["Any"] = 2;

