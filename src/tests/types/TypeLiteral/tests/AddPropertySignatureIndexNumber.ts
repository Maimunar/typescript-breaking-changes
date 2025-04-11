import { Defaults as GeneralDefaults} from "../../defaults";
import { PropertySignatureDefaults,
    MappedTypeDefaults,
    IndexNumberDefaults,
    IndexStringDefaults,
    IndexSymbolDefaults,
    IndexTemplateLiteralDefaults,
    EmptyTypeLiteral,
} from "../defaults";

/*
 * Add Property Signature to IndexNumber  
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Initial value
const startTypeLiteral: {} = {} 

// Changes
// Add Property Signature of IndexNumber - ParenthesizedType
const AddPropertySignatureIndexNumberParenthesizedTypeLiteral: IndexNumberDefaults["ParenthesizedType"]["Literal"] = {};
const AddPropertySignatureIndexNumberParenthesizedTypeObject: IndexNumberDefaults["ParenthesizedType"]["Object"] = {};
const AddPropertySignatureIndexNumberParenthesizedTypeString: IndexNumberDefaults["ParenthesizedType"]["String"] = {};
const AddPropertySignatureIndexNumberParenthesizedTypeNumber: IndexNumberDefaults["ParenthesizedType"]["Number"] = {};
const AddPropertySignatureIndexNumberParenthesizedTypeBoolean: IndexNumberDefaults["ParenthesizedType"]["Boolean"] = {};
const AddPropertySignatureIndexNumberParenthesizedTypeAny: IndexNumberDefaults["ParenthesizedType"]["Any"] = {};

// Add Property Signature of IndexNumber - TypeReferenceBuiltin
const AddPropertySignatureIndexNumberTypeReferenceBuiltinLiteral: IndexNumberDefaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddPropertySignatureIndexNumberTypeReferenceBuiltinObject: IndexNumberDefaults["TypeReferenceBuiltin"]["Object"] = {};
const AddPropertySignatureIndexNumberTypeReferenceBuiltinString: IndexNumberDefaults["TypeReferenceBuiltin"]["String"] = {};
const AddPropertySignatureIndexNumberTypeReferenceBuiltinNumber: IndexNumberDefaults["TypeReferenceBuiltin"]["Number"] = {};
const AddPropertySignatureIndexNumberTypeReferenceBuiltinBoolean: IndexNumberDefaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddPropertySignatureIndexNumberTypeReferenceBuiltinAny: IndexNumberDefaults["TypeReferenceBuiltin"]["Any"] = {};

// Add Property Signature of IndexNumber - TypeReferencePredefined
const AddPropertySignatureIndexNumberTypeReferencePredefinedLiteral: IndexNumberDefaults["TypeReferencePredefined"]["Literal"] = {};
const AddPropertySignatureIndexNumberTypeReferencePredefinedObject: IndexNumberDefaults["TypeReferencePredefined"]["Object"] = {};
const AddPropertySignatureIndexNumberTypeReferencePredefinedString: IndexNumberDefaults["TypeReferencePredefined"]["String"] = {};
const AddPropertySignatureIndexNumberTypeReferencePredefinedNumber: IndexNumberDefaults["TypeReferencePredefined"]["Number"] = {};
const AddPropertySignatureIndexNumberTypeReferencePredefinedBoolean: IndexNumberDefaults["TypeReferencePredefined"]["Boolean"] = {};
const AddPropertySignatureIndexNumberTypeReferencePredefinedAny: IndexNumberDefaults["TypeReferencePredefined"]["Any"] = {};

// Add Property Signature of IndexNumber - UnionType
const AddPropertySignatureIndexNumberUnionTypeLiteral: IndexNumberDefaults["UnionType"]["Literal"] = {};
const AddPropertySignatureIndexNumberUnionTypeObject: IndexNumberDefaults["UnionType"]["Object"] = {};
const AddPropertySignatureIndexNumberUnionTypeString: IndexNumberDefaults["UnionType"]["String"] = {};
const AddPropertySignatureIndexNumberUnionTypeNumber: IndexNumberDefaults["UnionType"]["Number"] = {};
const AddPropertySignatureIndexNumberUnionTypeBoolean: IndexNumberDefaults["UnionType"]["Boolean"] = {};
const AddPropertySignatureIndexNumberUnionTypeAny: IndexNumberDefaults["UnionType"]["Any"] = {};

// Add Property Signature of IndexNumber - IntersectionType
const AddPropertySignatureIndexNumberIntersectionTypeLiteral: IndexNumberDefaults["IntersectionType"]["Literal"] = {};
const AddPropertySignatureIndexNumberIntersectionTypeObject: IndexNumberDefaults["IntersectionType"]["Object"] = {};
const AddPropertySignatureIndexNumberIntersectionTypeString: IndexNumberDefaults["IntersectionType"]["String"] = {};
const AddPropertySignatureIndexNumberIntersectionTypeNumber: IndexNumberDefaults["IntersectionType"]["Number"] = {};
const AddPropertySignatureIndexNumberIntersectionTypeBoolean: IndexNumberDefaults["IntersectionType"]["Boolean"] = {};
const AddPropertySignatureIndexNumberIntersectionTypeAny: IndexNumberDefaults["IntersectionType"]["Any"] = {};

// Add Property Signature of IndexNumber - TypeLiteral
const AddPropertySignatureIndexNumberTypeLiteralLiteral: IndexNumberDefaults["TypeLiteral"]["Literal"] = {};
const AddPropertySignatureIndexNumberTypeLiteralObject: IndexNumberDefaults["TypeLiteral"]["Object"] = {};
const AddPropertySignatureIndexNumberTypeLiteralString: IndexNumberDefaults["TypeLiteral"]["String"] = {};
const AddPropertySignatureIndexNumberTypeLiteralNumber: IndexNumberDefaults["TypeLiteral"]["Number"] = {};
const AddPropertySignatureIndexNumberTypeLiteralBoolean: IndexNumberDefaults["TypeLiteral"]["Boolean"] = {};
const AddPropertySignatureIndexNumberTypeLiteralAny: IndexNumberDefaults["TypeLiteral"]["Any"] = {};

// Add Property Signature of IndexNumber - TupleType
const AddPropertySignatureIndexNumberTupleTypeLiteral: IndexNumberDefaults["TupleType"]["Literal"] = {};
const AddPropertySignatureIndexNumberTupleTypeObject: IndexNumberDefaults["TupleType"]["Object"] = {};
const AddPropertySignatureIndexNumberTupleTypeString: IndexNumberDefaults["TupleType"]["String"] = {};
const AddPropertySignatureIndexNumberTupleTypeNumber: IndexNumberDefaults["TupleType"]["Number"] = {};
const AddPropertySignatureIndexNumberTupleTypeBoolean: IndexNumberDefaults["TupleType"]["Boolean"] = {};
const AddPropertySignatureIndexNumberTupleTypeAny: IndexNumberDefaults["TupleType"]["Any"] = {};

// Add Property Signature of IndexNumber - ArrayType
const AddPropertySignatureIndexNumberArrayTypeLiteral: IndexNumberDefaults["ArrayType"]["Literal"] = {};
const AddPropertySignatureIndexNumberArrayTypeObject: IndexNumberDefaults["ArrayType"]["Object"] = {};
const AddPropertySignatureIndexNumberArrayTypeString: IndexNumberDefaults["ArrayType"]["String"] = {};
const AddPropertySignatureIndexNumberArrayTypeNumber: IndexNumberDefaults["ArrayType"]["Number"] = {};
const AddPropertySignatureIndexNumberArrayTypeBoolean: IndexNumberDefaults["ArrayType"]["Boolean"] = {};
const AddPropertySignatureIndexNumberArrayTypeAny: IndexNumberDefaults["ArrayType"]["Any"] = {};

// Add Property Signature of IndexNumber - FunctionType
const AddPropertySignatureIndexNumberFunctionTypeLiteral: IndexNumberDefaults["FunctionType"]["Literal"] = {};
const AddPropertySignatureIndexNumberFunctionTypeObject: IndexNumberDefaults["FunctionType"]["Object"] = {};
const AddPropertySignatureIndexNumberFunctionTypeString: IndexNumberDefaults["FunctionType"]["String"] = {};
const AddPropertySignatureIndexNumberFunctionTypeNumber: IndexNumberDefaults["FunctionType"]["Number"] = {};
const AddPropertySignatureIndexNumberFunctionTypeBoolean: IndexNumberDefaults["FunctionType"]["Boolean"] = {};
const AddPropertySignatureIndexNumberFunctionTypeAny: IndexNumberDefaults["FunctionType"]["Any"] = {};

// Add Property Signature of IndexNumber - ConstructorType
const AddPropertySignatureIndexNumberConstructorTypeLiteral: IndexNumberDefaults["ConstructorType"]["Literal"] = {};
const AddPropertySignatureIndexNumberConstructorTypeObject: IndexNumberDefaults["ConstructorType"]["Object"] = {};
const AddPropertySignatureIndexNumberConstructorTypeString: IndexNumberDefaults["ConstructorType"]["String"] = {};
const AddPropertySignatureIndexNumberConstructorTypeNumber: IndexNumberDefaults["ConstructorType"]["Number"] = {};
const AddPropertySignatureIndexNumberConstructorTypeBoolean: IndexNumberDefaults["ConstructorType"]["Boolean"] = {};
const AddPropertySignatureIndexNumberConstructorTypeAny: IndexNumberDefaults["ConstructorType"]["Any"] = {};

