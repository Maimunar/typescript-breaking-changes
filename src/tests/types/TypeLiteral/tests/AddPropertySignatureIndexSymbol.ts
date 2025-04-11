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
 * Add Property Signature to IndexSymbol  
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Initial value
const startTypeLiteral: {} = {} 

// Changes
// Add Property Signature of IndexSymbol - ParenthesizedType
const AddPropertySignatureIndexSymbolParenthesizedTypeLiteral: IndexSymbolDefaults["ParenthesizedType"]["Literal"] = {};
const AddPropertySignatureIndexSymbolParenthesizedTypeObject: IndexSymbolDefaults["ParenthesizedType"]["Object"] = {};
const AddPropertySignatureIndexSymbolParenthesizedTypeString: IndexSymbolDefaults["ParenthesizedType"]["String"] = {};
const AddPropertySignatureIndexSymbolParenthesizedTypeNumber: IndexSymbolDefaults["ParenthesizedType"]["Number"] = {};
const AddPropertySignatureIndexSymbolParenthesizedTypeBoolean: IndexSymbolDefaults["ParenthesizedType"]["Boolean"] = {};
const AddPropertySignatureIndexSymbolParenthesizedTypeAny: IndexSymbolDefaults["ParenthesizedType"]["Any"] = {};

// Add Property Signature of IndexSymbol - TypeReferenceBuiltin
const AddPropertySignatureIndexSymbolTypeReferenceBuiltinLiteral: IndexSymbolDefaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddPropertySignatureIndexSymbolTypeReferenceBuiltinObject: IndexSymbolDefaults["TypeReferenceBuiltin"]["Object"] = {};
const AddPropertySignatureIndexSymbolTypeReferenceBuiltinString: IndexSymbolDefaults["TypeReferenceBuiltin"]["String"] = {};
const AddPropertySignatureIndexSymbolTypeReferenceBuiltinNumber: IndexSymbolDefaults["TypeReferenceBuiltin"]["Number"] = {};
const AddPropertySignatureIndexSymbolTypeReferenceBuiltinBoolean: IndexSymbolDefaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddPropertySignatureIndexSymbolTypeReferenceBuiltinAny: IndexSymbolDefaults["TypeReferenceBuiltin"]["Any"] = {};

// Add Property Signature of IndexSymbol - TypeReferencePredefined
const AddPropertySignatureIndexSymbolTypeReferencePredefinedLiteral: IndexSymbolDefaults["TypeReferencePredefined"]["Literal"] = {};
const AddPropertySignatureIndexSymbolTypeReferencePredefinedObject: IndexSymbolDefaults["TypeReferencePredefined"]["Object"] = {};
const AddPropertySignatureIndexSymbolTypeReferencePredefinedString: IndexSymbolDefaults["TypeReferencePredefined"]["String"] = {};
const AddPropertySignatureIndexSymbolTypeReferencePredefinedNumber: IndexSymbolDefaults["TypeReferencePredefined"]["Number"] = {};
const AddPropertySignatureIndexSymbolTypeReferencePredefinedBoolean: IndexSymbolDefaults["TypeReferencePredefined"]["Boolean"] = {};
const AddPropertySignatureIndexSymbolTypeReferencePredefinedAny: IndexSymbolDefaults["TypeReferencePredefined"]["Any"] = {};

// Add Property Signature of IndexSymbol - UnionType
const AddPropertySignatureIndexSymbolUnionTypeLiteral: IndexSymbolDefaults["UnionType"]["Literal"] = {};
const AddPropertySignatureIndexSymbolUnionTypeObject: IndexSymbolDefaults["UnionType"]["Object"] = {};
const AddPropertySignatureIndexSymbolUnionTypeString: IndexSymbolDefaults["UnionType"]["String"] = {};
const AddPropertySignatureIndexSymbolUnionTypeNumber: IndexSymbolDefaults["UnionType"]["Number"] = {};
const AddPropertySignatureIndexSymbolUnionTypeBoolean: IndexSymbolDefaults["UnionType"]["Boolean"] = {};
const AddPropertySignatureIndexSymbolUnionTypeAny: IndexSymbolDefaults["UnionType"]["Any"] = {};

// Add Property Signature of IndexSymbol - IntersectionType
const AddPropertySignatureIndexSymbolIntersectionTypeLiteral: IndexSymbolDefaults["IntersectionType"]["Literal"] = {};
const AddPropertySignatureIndexSymbolIntersectionTypeObject: IndexSymbolDefaults["IntersectionType"]["Object"] = {};
const AddPropertySignatureIndexSymbolIntersectionTypeString: IndexSymbolDefaults["IntersectionType"]["String"] = {};
const AddPropertySignatureIndexSymbolIntersectionTypeNumber: IndexSymbolDefaults["IntersectionType"]["Number"] = {};
const AddPropertySignatureIndexSymbolIntersectionTypeBoolean: IndexSymbolDefaults["IntersectionType"]["Boolean"] = {};
const AddPropertySignatureIndexSymbolIntersectionTypeAny: IndexSymbolDefaults["IntersectionType"]["Any"] = {};

// Add Property Signature of IndexSymbol - TypeLiteral
const AddPropertySignatureIndexSymbolTypeLiteralLiteral: IndexSymbolDefaults["TypeLiteral"]["Literal"] = {};
const AddPropertySignatureIndexSymbolTypeLiteralObject: IndexSymbolDefaults["TypeLiteral"]["Object"] = {};
const AddPropertySignatureIndexSymbolTypeLiteralString: IndexSymbolDefaults["TypeLiteral"]["String"] = {};
const AddPropertySignatureIndexSymbolTypeLiteralNumber: IndexSymbolDefaults["TypeLiteral"]["Number"] = {};
const AddPropertySignatureIndexSymbolTypeLiteralBoolean: IndexSymbolDefaults["TypeLiteral"]["Boolean"] = {};
const AddPropertySignatureIndexSymbolTypeLiteralAny: IndexSymbolDefaults["TypeLiteral"]["Any"] = {};

// Add Property Signature of IndexSymbol - TupleType
const AddPropertySignatureIndexSymbolTupleTypeLiteral: IndexSymbolDefaults["TupleType"]["Literal"] = {};
const AddPropertySignatureIndexSymbolTupleTypeObject: IndexSymbolDefaults["TupleType"]["Object"] = {};
const AddPropertySignatureIndexSymbolTupleTypeString: IndexSymbolDefaults["TupleType"]["String"] = {};
const AddPropertySignatureIndexSymbolTupleTypeNumber: IndexSymbolDefaults["TupleType"]["Number"] = {};
const AddPropertySignatureIndexSymbolTupleTypeBoolean: IndexSymbolDefaults["TupleType"]["Boolean"] = {};
const AddPropertySignatureIndexSymbolTupleTypeAny: IndexSymbolDefaults["TupleType"]["Any"] = {};

// Add Property Signature of IndexSymbol - ArrayType
const AddPropertySignatureIndexSymbolArrayTypeLiteral: IndexSymbolDefaults["ArrayType"]["Literal"] = {};
const AddPropertySignatureIndexSymbolArrayTypeObject: IndexSymbolDefaults["ArrayType"]["Object"] = {};
const AddPropertySignatureIndexSymbolArrayTypeString: IndexSymbolDefaults["ArrayType"]["String"] = {};
const AddPropertySignatureIndexSymbolArrayTypeNumber: IndexSymbolDefaults["ArrayType"]["Number"] = {};
const AddPropertySignatureIndexSymbolArrayTypeBoolean: IndexSymbolDefaults["ArrayType"]["Boolean"] = {};
const AddPropertySignatureIndexSymbolArrayTypeAny: IndexSymbolDefaults["ArrayType"]["Any"] = {};

// Add Property Signature of IndexSymbol - FunctionType
const AddPropertySignatureIndexSymbolFunctionTypeLiteral: IndexSymbolDefaults["FunctionType"]["Literal"] = {};
const AddPropertySignatureIndexSymbolFunctionTypeObject: IndexSymbolDefaults["FunctionType"]["Object"] = {};
const AddPropertySignatureIndexSymbolFunctionTypeString: IndexSymbolDefaults["FunctionType"]["String"] = {};
const AddPropertySignatureIndexSymbolFunctionTypeNumber: IndexSymbolDefaults["FunctionType"]["Number"] = {};
const AddPropertySignatureIndexSymbolFunctionTypeBoolean: IndexSymbolDefaults["FunctionType"]["Boolean"] = {};
const AddPropertySignatureIndexSymbolFunctionTypeAny: IndexSymbolDefaults["FunctionType"]["Any"] = {};

// Add Property Signature of IndexSymbol - ConstructorType
const AddPropertySignatureIndexSymbolConstructorTypeLiteral: IndexSymbolDefaults["ConstructorType"]["Literal"] = {};
const AddPropertySignatureIndexSymbolConstructorTypeObject: IndexSymbolDefaults["ConstructorType"]["Object"] = {};
const AddPropertySignatureIndexSymbolConstructorTypeString: IndexSymbolDefaults["ConstructorType"]["String"] = {};
const AddPropertySignatureIndexSymbolConstructorTypeNumber: IndexSymbolDefaults["ConstructorType"]["Number"] = {};
const AddPropertySignatureIndexSymbolConstructorTypeBoolean: IndexSymbolDefaults["ConstructorType"]["Boolean"] = {};
const AddPropertySignatureIndexSymbolConstructorTypeAny: IndexSymbolDefaults["ConstructorType"]["Any"] = {};

