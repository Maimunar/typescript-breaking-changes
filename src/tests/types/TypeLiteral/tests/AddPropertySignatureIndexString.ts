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
 * Add Property Signature to IndexString  
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Initial value
const startTypeLiteral: {} = {} 

// Changes
// Add Property Signature of IndexString - ParenthesizedType
const AddPropertySignatureIndexStringParenthesizedTypeLiteral: IndexStringDefaults["ParenthesizedType"]["Literal"] = {};
const AddPropertySignatureIndexStringParenthesizedTypeObject: IndexStringDefaults["ParenthesizedType"]["Object"] = {};
const AddPropertySignatureIndexStringParenthesizedTypeString: IndexStringDefaults["ParenthesizedType"]["String"] = {};
const AddPropertySignatureIndexStringParenthesizedTypeNumber: IndexStringDefaults["ParenthesizedType"]["Number"] = {};
const AddPropertySignatureIndexStringParenthesizedTypeBoolean: IndexStringDefaults["ParenthesizedType"]["Boolean"] = {};
const AddPropertySignatureIndexStringParenthesizedTypeAny: IndexStringDefaults["ParenthesizedType"]["Any"] = {};

// Add Property Signature of IndexString - TypeReferenceBuiltin
const AddPropertySignatureIndexStringTypeReferenceBuiltinLiteral: IndexStringDefaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddPropertySignatureIndexStringTypeReferenceBuiltinObject: IndexStringDefaults["TypeReferenceBuiltin"]["Object"] = {};
const AddPropertySignatureIndexStringTypeReferenceBuiltinString: IndexStringDefaults["TypeReferenceBuiltin"]["String"] = {};
const AddPropertySignatureIndexStringTypeReferenceBuiltinNumber: IndexStringDefaults["TypeReferenceBuiltin"]["Number"] = {};
const AddPropertySignatureIndexStringTypeReferenceBuiltinBoolean: IndexStringDefaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddPropertySignatureIndexStringTypeReferenceBuiltinAny: IndexStringDefaults["TypeReferenceBuiltin"]["Any"] = {};

// Add Property Signature of IndexString - TypeReferencePredefined
const AddPropertySignatureIndexStringTypeReferencePredefinedLiteral: IndexStringDefaults["TypeReferencePredefined"]["Literal"] = {};
const AddPropertySignatureIndexStringTypeReferencePredefinedObject: IndexStringDefaults["TypeReferencePredefined"]["Object"] = {};
const AddPropertySignatureIndexStringTypeReferencePredefinedString: IndexStringDefaults["TypeReferencePredefined"]["String"] = {};
const AddPropertySignatureIndexStringTypeReferencePredefinedNumber: IndexStringDefaults["TypeReferencePredefined"]["Number"] = {};
const AddPropertySignatureIndexStringTypeReferencePredefinedBoolean: IndexStringDefaults["TypeReferencePredefined"]["Boolean"] = {};
const AddPropertySignatureIndexStringTypeReferencePredefinedAny: IndexStringDefaults["TypeReferencePredefined"]["Any"] = {};

// Add Property Signature of IndexString - UnionType
const AddPropertySignatureIndexStringUnionTypeLiteral: IndexStringDefaults["UnionType"]["Literal"] = {};
const AddPropertySignatureIndexStringUnionTypeObject: IndexStringDefaults["UnionType"]["Object"] = {};
const AddPropertySignatureIndexStringUnionTypeString: IndexStringDefaults["UnionType"]["String"] = {};
const AddPropertySignatureIndexStringUnionTypeNumber: IndexStringDefaults["UnionType"]["Number"] = {};
const AddPropertySignatureIndexStringUnionTypeBoolean: IndexStringDefaults["UnionType"]["Boolean"] = {};
const AddPropertySignatureIndexStringUnionTypeAny: IndexStringDefaults["UnionType"]["Any"] = {};

// Add Property Signature of IndexString - IntersectionType
const AddPropertySignatureIndexStringIntersectionTypeLiteral: IndexStringDefaults["IntersectionType"]["Literal"] = {};
const AddPropertySignatureIndexStringIntersectionTypeObject: IndexStringDefaults["IntersectionType"]["Object"] = {};
const AddPropertySignatureIndexStringIntersectionTypeString: IndexStringDefaults["IntersectionType"]["String"] = {};
const AddPropertySignatureIndexStringIntersectionTypeNumber: IndexStringDefaults["IntersectionType"]["Number"] = {};
const AddPropertySignatureIndexStringIntersectionTypeBoolean: IndexStringDefaults["IntersectionType"]["Boolean"] = {};
const AddPropertySignatureIndexStringIntersectionTypeAny: IndexStringDefaults["IntersectionType"]["Any"] = {};

// Add Property Signature of IndexString - TypeLiteral
const AddPropertySignatureIndexStringTypeLiteralLiteral: IndexStringDefaults["TypeLiteral"]["Literal"] = {};
const AddPropertySignatureIndexStringTypeLiteralObject: IndexStringDefaults["TypeLiteral"]["Object"] = {};
const AddPropertySignatureIndexStringTypeLiteralString: IndexStringDefaults["TypeLiteral"]["String"] = {};
const AddPropertySignatureIndexStringTypeLiteralNumber: IndexStringDefaults["TypeLiteral"]["Number"] = {};
const AddPropertySignatureIndexStringTypeLiteralBoolean: IndexStringDefaults["TypeLiteral"]["Boolean"] = {};
const AddPropertySignatureIndexStringTypeLiteralAny: IndexStringDefaults["TypeLiteral"]["Any"] = {};

// Add Property Signature of IndexString - TupleType
const AddPropertySignatureIndexStringTupleTypeLiteral: IndexStringDefaults["TupleType"]["Literal"] = {};
const AddPropertySignatureIndexStringTupleTypeObject: IndexStringDefaults["TupleType"]["Object"] = {};
const AddPropertySignatureIndexStringTupleTypeString: IndexStringDefaults["TupleType"]["String"] = {};
const AddPropertySignatureIndexStringTupleTypeNumber: IndexStringDefaults["TupleType"]["Number"] = {};
const AddPropertySignatureIndexStringTupleTypeBoolean: IndexStringDefaults["TupleType"]["Boolean"] = {};
const AddPropertySignatureIndexStringTupleTypeAny: IndexStringDefaults["TupleType"]["Any"] = {};

// Add Property Signature of IndexString - ArrayType
const AddPropertySignatureIndexStringArrayTypeLiteral: IndexStringDefaults["ArrayType"]["Literal"] = {};
const AddPropertySignatureIndexStringArrayTypeObject: IndexStringDefaults["ArrayType"]["Object"] = {};
const AddPropertySignatureIndexStringArrayTypeString: IndexStringDefaults["ArrayType"]["String"] = {};
const AddPropertySignatureIndexStringArrayTypeNumber: IndexStringDefaults["ArrayType"]["Number"] = {};
const AddPropertySignatureIndexStringArrayTypeBoolean: IndexStringDefaults["ArrayType"]["Boolean"] = {};
const AddPropertySignatureIndexStringArrayTypeAny: IndexStringDefaults["ArrayType"]["Any"] = {};

// Add Property Signature of IndexString - FunctionType
const AddPropertySignatureIndexStringFunctionTypeLiteral: IndexStringDefaults["FunctionType"]["Literal"] = {};
const AddPropertySignatureIndexStringFunctionTypeObject: IndexStringDefaults["FunctionType"]["Object"] = {};
const AddPropertySignatureIndexStringFunctionTypeString: IndexStringDefaults["FunctionType"]["String"] = {};
const AddPropertySignatureIndexStringFunctionTypeNumber: IndexStringDefaults["FunctionType"]["Number"] = {};
const AddPropertySignatureIndexStringFunctionTypeBoolean: IndexStringDefaults["FunctionType"]["Boolean"] = {};
const AddPropertySignatureIndexStringFunctionTypeAny: IndexStringDefaults["FunctionType"]["Any"] = {};

// Add Property Signature of IndexString - ConstructorType
const AddPropertySignatureIndexStringConstructorTypeLiteral: IndexStringDefaults["ConstructorType"]["Literal"] = {};
const AddPropertySignatureIndexStringConstructorTypeObject: IndexStringDefaults["ConstructorType"]["Object"] = {};
const AddPropertySignatureIndexStringConstructorTypeString: IndexStringDefaults["ConstructorType"]["String"] = {};
const AddPropertySignatureIndexStringConstructorTypeNumber: IndexStringDefaults["ConstructorType"]["Number"] = {};
const AddPropertySignatureIndexStringConstructorTypeBoolean: IndexStringDefaults["ConstructorType"]["Boolean"] = {};
const AddPropertySignatureIndexStringConstructorTypeAny: IndexStringDefaults["ConstructorType"]["Any"] = {};

