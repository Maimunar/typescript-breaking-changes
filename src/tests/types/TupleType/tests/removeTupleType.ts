import { Defaults as GeneralDefaults} from "../../defaults";
import { Defaults as TupleDefaults, EmptyTuple} from "../defaults";

/*
 * TupleType
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Add Tuple - ParenthesizedType
const TupleTypeParenthesizedTypeLiteral: TupleDefaults["ParenthesizedType"]["Literal"] = [1]
const RemoveTupleFromParenthesizedTypeLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] = [1];
const TupleTypeParenthesizedTypeObject: TupleDefaults["ParenthesizedType"]["Object"] = [{}]
const RemoveTupleFromParenthesizedTypeObject: GeneralDefaults["ParenthesizedType"]["Object"] = [{}];
const TupleTypeParenthesizedTypeString: TupleDefaults["ParenthesizedType"]["String"] = ["two"]
const RemoveTupleFromParenthesizedTypeString: GeneralDefaults["ParenthesizedType"]["String"] = ["two"];
const TupleTypeParenthesizedTypeNumber: TupleDefaults["ParenthesizedType"]["Number"] = [2]
const RemoveTupleFromParenthesizedTypeNumber: GeneralDefaults["ParenthesizedType"]["Number"] = [2];
const TupleTypeParenthesizedTypeBoolean: TupleDefaults["ParenthesizedType"]["Boolean"] = [true]
const RemoveTupleFromParenthesizedTypeBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] = [true];
const TupleTypeParenthesizedTypeAny: TupleDefaults["ParenthesizedType"]["Any"] = [2]
const RemoveTupleFromParenthesizedTypeAny: GeneralDefaults["ParenthesizedType"]["Any"] = [2];

// Add Tuple - TypeReferenceBuiltin
const TupleTypeTypeReferenceBuiltinLiteral: TupleDefaults["TypeReferenceBuiltin"]["Literal"] = promisify([1])
const RemoveTupleFromTypeReferenceBuiltinLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] = promisify([1]);
const TupleTypeTypeReferenceBuiltinObject: TupleDefaults["TypeReferenceBuiltin"]["Object"] = promisify([{}])
const RemoveTupleFromTypeReferenceBuiltinObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] = promisify([{}]);
const TupleTypeTypeReferenceBuiltinString: TupleDefaults["TypeReferenceBuiltin"]["String"] = promisify(["two"])
const RemoveTupleFromTypeReferenceBuiltinString: GeneralDefaults["TypeReferenceBuiltin"]["String"] = promisify(["two"]);
const TupleTypeTypeReferenceBuiltinNumber: TupleDefaults["TypeReferenceBuiltin"]["Number"] = promisify([2])
const RemoveTupleFromTypeReferenceBuiltinNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] = promisify([2]);
const TupleTypeTypeReferenceBuiltinBoolean: TupleDefaults["TypeReferenceBuiltin"]["Boolean"] = promisify([true])
const RemoveTupleFromTypeReferenceBuiltinBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] = promisify([true]);
const TupleTypeTypeReferenceBuiltinAny: TupleDefaults["TypeReferenceBuiltin"]["Any"] = promisify([2])
const RemoveTupleFromTypeReferenceBuiltinAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] = promisify([2]);

// Add Tuple - TypeReferencePredefined
const TupleTypeTypeReferencePredefinedLiteral: TupleDefaults["TypeReferencePredefined"]["Literal"] = [1]
const RemoveTupleFromTypeReferencePredefinedLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] = [1];
const TupleTypeTypeReferencePredefinedObject: TupleDefaults["TypeReferencePredefined"]["Object"] = [{}]
const RemoveTupleFromTypeReferencePredefinedObject: GeneralDefaults["TypeReferencePredefined"]["Object"] = [{}];
const TupleTypeTypeReferencePredefinedString: TupleDefaults["TypeReferencePredefined"]["String"] = ["two"]
const RemoveTupleFromTypeReferencePredefinedString: GeneralDefaults["TypeReferencePredefined"]["String"] = ["two"];
const TupleTypeTypeReferencePredefinedNumber: TupleDefaults["TypeReferencePredefined"]["Number"] = [2]
const RemoveTupleFromTypeReferencePredefinedNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] = [2];
const TupleTypeTypeReferencePredefinedBoolean: TupleDefaults["TypeReferencePredefined"]["Boolean"] = [true]
const RemoveTupleFromTypeReferencePredefinedBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] = [true];
const TupleTypeTypeReferencePredefinedAny: TupleDefaults["TypeReferencePredefined"]["Any"] = [2]
const RemoveTupleFromTypeReferencePredefinedAny: GeneralDefaults["TypeReferencePredefined"]["Any"] = [2];

// Add Tuple - UnionType
const TupleTypeUnionTypeLiteral: TupleDefaults["UnionType"]["Literal"] = [1]
const RemoveTupleFromUnionTypeLiteral: GeneralDefaults["UnionType"]["Literal"] = [1];
const TupleTypeUnionTypeObject: TupleDefaults["UnionType"]["Object"] = [{}]
const RemoveTupleFromUnionTypeObject: GeneralDefaults["UnionType"]["Object"] = [{}];
const TupleTypeUnionTypeString: TupleDefaults["UnionType"]["String"] = ["two"]
const RemoveTupleFromUnionTypeString: GeneralDefaults["UnionType"]["String"] = ["two"];
const TupleTypeUnionTypeNumber: TupleDefaults["UnionType"]["Number"] = [2]
const RemoveTupleFromUnionTypeNumber: GeneralDefaults["UnionType"]["Number"] = [2];
const TupleTypeUnionTypeBoolean: TupleDefaults["UnionType"]["Boolean"] = [true]
const RemoveTupleFromUnionTypeBoolean: GeneralDefaults["UnionType"]["Boolean"] = [true];
const TupleTypeUnionTypeAny: TupleDefaults["UnionType"]["Any"] = [2]
const RemoveTupleFromUnionTypeAny: GeneralDefaults["UnionType"]["Any"] = [2];

// Add Tuple - IntersectionType
const TupleTypeIntersectionTypeLiteral: TupleDefaults["IntersectionType"]["Literal"] = [1]
const RemoveTupleFromIntersectionTypeLiteral: GeneralDefaults["IntersectionType"]["Literal"] = [1];
const TupleTypeIntersectionTypeObject: TupleDefaults["IntersectionType"]["Object"] = [{}]
const RemoveTupleFromIntersectionTypeObject: GeneralDefaults["IntersectionType"]["Object"] = [{}];
const TupleTypeIntersectionTypeString: TupleDefaults["IntersectionType"]["String"] = ["two"]
const RemoveTupleFromIntersectionTypeString: GeneralDefaults["IntersectionType"]["String"] = ["two"];
const TupleTypeIntersectionTypeNumber: TupleDefaults["IntersectionType"]["Number"] = [2]
const RemoveTupleFromIntersectionTypeNumber: GeneralDefaults["IntersectionType"]["Number"] = [2];
const TupleTypeIntersectionTypeBoolean: TupleDefaults["IntersectionType"]["Boolean"] = [true]
const RemoveTupleFromIntersectionTypeBoolean: GeneralDefaults["IntersectionType"]["Boolean"] = [true];
const TupleTypeIntersectionTypeAny: TupleDefaults["IntersectionType"]["Any"] = [2]
const RemoveTupleFromIntersectionTypeAny: GeneralDefaults["IntersectionType"]["Any"] = [2];

// Add Tuple - TypeLiteral
const TupleTypeTypeLiteralLiteral: TupleDefaults["TypeLiteral"]["Literal"] = [{"key":1}]
const RemoveTupleFromTypeLiteralLiteral: GeneralDefaults["TypeLiteral"]["Literal"] = [{"key":1}];
const TupleTypeTypeLiteralObject: TupleDefaults["TypeLiteral"]["Object"] = [{"key":{}}]
const RemoveTupleFromTypeLiteralObject: GeneralDefaults["TypeLiteral"]["Object"] = [{"key":{}}];
const TupleTypeTypeLiteralString: TupleDefaults["TypeLiteral"]["String"] = [{"key":"two"}]
const RemoveTupleFromTypeLiteralString: GeneralDefaults["TypeLiteral"]["String"] = [{"key":"two"}];
const TupleTypeTypeLiteralNumber: TupleDefaults["TypeLiteral"]["Number"] = [{"key":2}]
const RemoveTupleFromTypeLiteralNumber: GeneralDefaults["TypeLiteral"]["Number"] = [{"key":2}];
const TupleTypeTypeLiteralBoolean: TupleDefaults["TypeLiteral"]["Boolean"] = [{"key":true}]
const RemoveTupleFromTypeLiteralBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] = [{"key":true}];
const TupleTypeTypeLiteralAny: TupleDefaults["TypeLiteral"]["Any"] = [{"key":2}]
const RemoveTupleFromTypeLiteralAny: GeneralDefaults["TypeLiteral"]["Any"] = [{"key":2}];

// Add Tuple - TupleType
const TupleTypeTupleTypeLiteral: TupleDefaults["TupleType"]["Literal"] = [[1]]
const RemoveTupleFromTupleTypeLiteral: GeneralDefaults["TupleType"]["Literal"] = [[1]];
const TupleTypeTupleTypeObject: TupleDefaults["TupleType"]["Object"] = [[{}]]
const RemoveTupleFromTupleTypeObject: GeneralDefaults["TupleType"]["Object"] = [[{}]];
const TupleTypeTupleTypeString: TupleDefaults["TupleType"]["String"] = [["two"]]
const RemoveTupleFromTupleTypeString: GeneralDefaults["TupleType"]["String"] = [["two"]];
const TupleTypeTupleTypeNumber: TupleDefaults["TupleType"]["Number"] = [[2]]
const RemoveTupleFromTupleTypeNumber: GeneralDefaults["TupleType"]["Number"] = [[2]];
const TupleTypeTupleTypeBoolean: TupleDefaults["TupleType"]["Boolean"] = [[true]]
const RemoveTupleFromTupleTypeBoolean: GeneralDefaults["TupleType"]["Boolean"] = [[true]];
const TupleTypeTupleTypeAny: TupleDefaults["TupleType"]["Any"] = [[2]]
const RemoveTupleFromTupleTypeAny: GeneralDefaults["TupleType"]["Any"] = [[2]];

// Add Tuple - ArrayType
const TupleTypeArrayTypeLiteral: TupleDefaults["ArrayType"]["Literal"] = [[1,1]]
const RemoveTupleFromArrayTypeLiteral: GeneralDefaults["ArrayType"]["Literal"] = [[1,1]];
const TupleTypeArrayTypeObject: TupleDefaults["ArrayType"]["Object"] = [[{},{}]]
const RemoveTupleFromArrayTypeObject: GeneralDefaults["ArrayType"]["Object"] = [[{},{}]];
const TupleTypeArrayTypeString: TupleDefaults["ArrayType"]["String"] = [["two","two"]]
const RemoveTupleFromArrayTypeString: GeneralDefaults["ArrayType"]["String"] = [["two","two"]];
const TupleTypeArrayTypeNumber: TupleDefaults["ArrayType"]["Number"] = [[2,2]]
const RemoveTupleFromArrayTypeNumber: GeneralDefaults["ArrayType"]["Number"] = [[2,2]];
const TupleTypeArrayTypeBoolean: TupleDefaults["ArrayType"]["Boolean"] = [[true,true]]
const RemoveTupleFromArrayTypeBoolean: GeneralDefaults["ArrayType"]["Boolean"] = [[true,true]];
const TupleTypeArrayTypeAny: TupleDefaults["ArrayType"]["Any"] = [[2,2]]
const RemoveTupleFromArrayTypeAny: GeneralDefaults["ArrayType"]["Any"] = [[2,2]];

// Add Tuple - FunctionType
const TupleTypeFunctionTypeLiteral: TupleDefaults["FunctionType"]["Literal"] = [null]
const RemoveTupleFromFunctionTypeLiteral: GeneralDefaults["FunctionType"]["Literal"] = [null];
const TupleTypeFunctionTypeObject: TupleDefaults["FunctionType"]["Object"] = [null]
const RemoveTupleFromFunctionTypeObject: GeneralDefaults["FunctionType"]["Object"] = [null];
const TupleTypeFunctionTypeString: TupleDefaults["FunctionType"]["String"] = [null]
const RemoveTupleFromFunctionTypeString: GeneralDefaults["FunctionType"]["String"] = [null];
const TupleTypeFunctionTypeNumber: TupleDefaults["FunctionType"]["Number"] = [null]
const RemoveTupleFromFunctionTypeNumber: GeneralDefaults["FunctionType"]["Number"] = [null];
const TupleTypeFunctionTypeBoolean: TupleDefaults["FunctionType"]["Boolean"] = [null]
const RemoveTupleFromFunctionTypeBoolean: GeneralDefaults["FunctionType"]["Boolean"] = [null];
const TupleTypeFunctionTypeAny: TupleDefaults["FunctionType"]["Any"] = [null]
const RemoveTupleFromFunctionTypeAny: GeneralDefaults["FunctionType"]["Any"] = [null];

// Add Tuple - ConstructorType
const TupleTypeConstructorTypeLiteral: TupleDefaults["ConstructorType"]["Literal"] = [1]
const RemoveTupleFromConstructorTypeLiteral: GeneralDefaults["ConstructorType"]["Literal"] = [1];
const TupleTypeConstructorTypeObject: TupleDefaults["ConstructorType"]["Object"] = [{}]
const RemoveTupleFromConstructorTypeObject: GeneralDefaults["ConstructorType"]["Object"] = [{}];
const TupleTypeConstructorTypeString: TupleDefaults["ConstructorType"]["String"] = ["two"]
const RemoveTupleFromConstructorTypeString: GeneralDefaults["ConstructorType"]["String"] = ["two"];
const TupleTypeConstructorTypeNumber: TupleDefaults["ConstructorType"]["Number"] = [2]
const RemoveTupleFromConstructorTypeNumber: GeneralDefaults["ConstructorType"]["Number"] = [2];
const TupleTypeConstructorTypeBoolean: TupleDefaults["ConstructorType"]["Boolean"] = [true]
const RemoveTupleFromConstructorTypeBoolean: GeneralDefaults["ConstructorType"]["Boolean"] = [true];
const TupleTypeConstructorTypeAny: TupleDefaults["ConstructorType"]["Any"] = [2]
const RemoveTupleFromConstructorTypeAny: GeneralDefaults["ConstructorType"]["Any"] = [2];

