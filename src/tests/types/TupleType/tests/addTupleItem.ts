import { Defaults as GeneralDefaults} from "../../defaults";
import { Defaults as TupleDefaults, EmptyTuple} from "../defaults";

/*
 * TupleType
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Add Tuple Item
// Initial State
const TypeEmptyTuple: EmptyTuple = []
// ParenthesizedType
const AddTupleItemParenthesizedTypeLiteral: TupleDefaults["ParenthesizedType"]["Literal"] = [];
const AddTupleItemParenthesizedTypeObject: TupleDefaults["ParenthesizedType"]["Object"] = [];
const AddTupleItemParenthesizedTypeString: TupleDefaults["ParenthesizedType"]["String"] = [];
const AddTupleItemParenthesizedTypeNumber: TupleDefaults["ParenthesizedType"]["Number"] = [];
const AddTupleItemParenthesizedTypeBoolean: TupleDefaults["ParenthesizedType"]["Boolean"] = [];
const AddTupleItemParenthesizedTypeAny: TupleDefaults["ParenthesizedType"]["Any"] = [];

// TypeReferenceBuiltin
const AddTupleItemTypeReferenceBuiltinLiteral: TupleDefaults["TypeReferenceBuiltin"]["Literal"] = [];
const AddTupleItemTypeReferenceBuiltinObject: TupleDefaults["TypeReferenceBuiltin"]["Object"] = [];
const AddTupleItemTypeReferenceBuiltinString: TupleDefaults["TypeReferenceBuiltin"]["String"] = [];
const AddTupleItemTypeReferenceBuiltinNumber: TupleDefaults["TypeReferenceBuiltin"]["Number"] = [];
const AddTupleItemTypeReferenceBuiltinBoolean: TupleDefaults["TypeReferenceBuiltin"]["Boolean"] = [];
const AddTupleItemTypeReferenceBuiltinAny: TupleDefaults["TypeReferenceBuiltin"]["Any"] = [];

// TypeReferencePredefined
const AddTupleItemTypeReferencePredefinedLiteral: TupleDefaults["TypeReferencePredefined"]["Literal"] = [];
const AddTupleItemTypeReferencePredefinedObject: TupleDefaults["TypeReferencePredefined"]["Object"] = [];
const AddTupleItemTypeReferencePredefinedString: TupleDefaults["TypeReferencePredefined"]["String"] = [];
const AddTupleItemTypeReferencePredefinedNumber: TupleDefaults["TypeReferencePredefined"]["Number"] = [];
const AddTupleItemTypeReferencePredefinedBoolean: TupleDefaults["TypeReferencePredefined"]["Boolean"] = [];
const AddTupleItemTypeReferencePredefinedAny: TupleDefaults["TypeReferencePredefined"]["Any"] = [];

// UnionType
const AddTupleItemUnionTypeLiteral: TupleDefaults["UnionType"]["Literal"] = [];
const AddTupleItemUnionTypeObject: TupleDefaults["UnionType"]["Object"] = [];
const AddTupleItemUnionTypeString: TupleDefaults["UnionType"]["String"] = [];
const AddTupleItemUnionTypeNumber: TupleDefaults["UnionType"]["Number"] = [];
const AddTupleItemUnionTypeBoolean: TupleDefaults["UnionType"]["Boolean"] = [];
const AddTupleItemUnionTypeAny: TupleDefaults["UnionType"]["Any"] = [];

// IntersectionType
const AddTupleItemIntersectionTypeLiteral: TupleDefaults["IntersectionType"]["Literal"] = [];
const AddTupleItemIntersectionTypeObject: TupleDefaults["IntersectionType"]["Object"] = [];
const AddTupleItemIntersectionTypeString: TupleDefaults["IntersectionType"]["String"] = [];
const AddTupleItemIntersectionTypeNumber: TupleDefaults["IntersectionType"]["Number"] = [];
const AddTupleItemIntersectionTypeBoolean: TupleDefaults["IntersectionType"]["Boolean"] = [];
const AddTupleItemIntersectionTypeAny: TupleDefaults["IntersectionType"]["Any"] = [];

// TypeLiteral
const AddTupleItemTypeLiteralLiteral: TupleDefaults["TypeLiteral"]["Literal"] = [];
const AddTupleItemTypeLiteralObject: TupleDefaults["TypeLiteral"]["Object"] = [];
const AddTupleItemTypeLiteralString: TupleDefaults["TypeLiteral"]["String"] = [];
const AddTupleItemTypeLiteralNumber: TupleDefaults["TypeLiteral"]["Number"] = [];
const AddTupleItemTypeLiteralBoolean: TupleDefaults["TypeLiteral"]["Boolean"] = [];
const AddTupleItemTypeLiteralAny: TupleDefaults["TypeLiteral"]["Any"] = [];

// TupleType
const AddTupleItemTupleTypeLiteral: TupleDefaults["TupleType"]["Literal"] = [];
const AddTupleItemTupleTypeObject: TupleDefaults["TupleType"]["Object"] = [];
const AddTupleItemTupleTypeString: TupleDefaults["TupleType"]["String"] = [];
const AddTupleItemTupleTypeNumber: TupleDefaults["TupleType"]["Number"] = [];
const AddTupleItemTupleTypeBoolean: TupleDefaults["TupleType"]["Boolean"] = [];
const AddTupleItemTupleTypeAny: TupleDefaults["TupleType"]["Any"] = [];

// ArrayType
const AddTupleItemArrayTypeLiteral: TupleDefaults["ArrayType"]["Literal"] = [];
const AddTupleItemArrayTypeObject: TupleDefaults["ArrayType"]["Object"] = [];
const AddTupleItemArrayTypeString: TupleDefaults["ArrayType"]["String"] = [];
const AddTupleItemArrayTypeNumber: TupleDefaults["ArrayType"]["Number"] = [];
const AddTupleItemArrayTypeBoolean: TupleDefaults["ArrayType"]["Boolean"] = [];
const AddTupleItemArrayTypeAny: TupleDefaults["ArrayType"]["Any"] = [];

// FunctionType
const AddTupleItemFunctionTypeLiteral: TupleDefaults["FunctionType"]["Literal"] = [];
const AddTupleItemFunctionTypeObject: TupleDefaults["FunctionType"]["Object"] = [];
const AddTupleItemFunctionTypeString: TupleDefaults["FunctionType"]["String"] = [];
const AddTupleItemFunctionTypeNumber: TupleDefaults["FunctionType"]["Number"] = [];
const AddTupleItemFunctionTypeBoolean: TupleDefaults["FunctionType"]["Boolean"] = [];
const AddTupleItemFunctionTypeAny: TupleDefaults["FunctionType"]["Any"] = [];

// ConstructorType
const AddTupleItemConstructorTypeLiteral: TupleDefaults["ConstructorType"]["Literal"] = [];
const AddTupleItemConstructorTypeObject: TupleDefaults["ConstructorType"]["Object"] = [];
const AddTupleItemConstructorTypeString: TupleDefaults["ConstructorType"]["String"] = [];
const AddTupleItemConstructorTypeNumber: TupleDefaults["ConstructorType"]["Number"] = [];
const AddTupleItemConstructorTypeBoolean: TupleDefaults["ConstructorType"]["Boolean"] = [];
const AddTupleItemConstructorTypeAny: TupleDefaults["ConstructorType"]["Any"] = [];

