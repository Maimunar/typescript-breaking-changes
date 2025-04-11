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
 * Add Property Signature to PropertySignature  
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Initial value
const startTypeLiteral: {} = {} 

// Changes
// Add Property Signature of PropertySignature - ParenthesizedType
const AddPropertySignaturePropertySignatureParenthesizedTypeLiteral: PropertySignatureDefaults["ParenthesizedType"]["Literal"] = {};
const AddPropertySignaturePropertySignatureParenthesizedTypeObject: PropertySignatureDefaults["ParenthesizedType"]["Object"] = {};
const AddPropertySignaturePropertySignatureParenthesizedTypeString: PropertySignatureDefaults["ParenthesizedType"]["String"] = {};
const AddPropertySignaturePropertySignatureParenthesizedTypeNumber: PropertySignatureDefaults["ParenthesizedType"]["Number"] = {};
const AddPropertySignaturePropertySignatureParenthesizedTypeBoolean: PropertySignatureDefaults["ParenthesizedType"]["Boolean"] = {};
const AddPropertySignaturePropertySignatureParenthesizedTypeAny: PropertySignatureDefaults["ParenthesizedType"]["Any"] = {};

// Add Property Signature of PropertySignature - TypeReferenceBuiltin
const AddPropertySignaturePropertySignatureTypeReferenceBuiltinLiteral: PropertySignatureDefaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddPropertySignaturePropertySignatureTypeReferenceBuiltinObject: PropertySignatureDefaults["TypeReferenceBuiltin"]["Object"] = {};
const AddPropertySignaturePropertySignatureTypeReferenceBuiltinString: PropertySignatureDefaults["TypeReferenceBuiltin"]["String"] = {};
const AddPropertySignaturePropertySignatureTypeReferenceBuiltinNumber: PropertySignatureDefaults["TypeReferenceBuiltin"]["Number"] = {};
const AddPropertySignaturePropertySignatureTypeReferenceBuiltinBoolean: PropertySignatureDefaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddPropertySignaturePropertySignatureTypeReferenceBuiltinAny: PropertySignatureDefaults["TypeReferenceBuiltin"]["Any"] = {};

// Add Property Signature of PropertySignature - TypeReferencePredefined
const AddPropertySignaturePropertySignatureTypeReferencePredefinedLiteral: PropertySignatureDefaults["TypeReferencePredefined"]["Literal"] = {};
const AddPropertySignaturePropertySignatureTypeReferencePredefinedObject: PropertySignatureDefaults["TypeReferencePredefined"]["Object"] = {};
const AddPropertySignaturePropertySignatureTypeReferencePredefinedString: PropertySignatureDefaults["TypeReferencePredefined"]["String"] = {};
const AddPropertySignaturePropertySignatureTypeReferencePredefinedNumber: PropertySignatureDefaults["TypeReferencePredefined"]["Number"] = {};
const AddPropertySignaturePropertySignatureTypeReferencePredefinedBoolean: PropertySignatureDefaults["TypeReferencePredefined"]["Boolean"] = {};
const AddPropertySignaturePropertySignatureTypeReferencePredefinedAny: PropertySignatureDefaults["TypeReferencePredefined"]["Any"] = {};

// Add Property Signature of PropertySignature - UnionType
const AddPropertySignaturePropertySignatureUnionTypeLiteral: PropertySignatureDefaults["UnionType"]["Literal"] = {};
const AddPropertySignaturePropertySignatureUnionTypeObject: PropertySignatureDefaults["UnionType"]["Object"] = {};
const AddPropertySignaturePropertySignatureUnionTypeString: PropertySignatureDefaults["UnionType"]["String"] = {};
const AddPropertySignaturePropertySignatureUnionTypeNumber: PropertySignatureDefaults["UnionType"]["Number"] = {};
const AddPropertySignaturePropertySignatureUnionTypeBoolean: PropertySignatureDefaults["UnionType"]["Boolean"] = {};
const AddPropertySignaturePropertySignatureUnionTypeAny: PropertySignatureDefaults["UnionType"]["Any"] = {};

// Add Property Signature of PropertySignature - IntersectionType
const AddPropertySignaturePropertySignatureIntersectionTypeLiteral: PropertySignatureDefaults["IntersectionType"]["Literal"] = {};
const AddPropertySignaturePropertySignatureIntersectionTypeObject: PropertySignatureDefaults["IntersectionType"]["Object"] = {};
const AddPropertySignaturePropertySignatureIntersectionTypeString: PropertySignatureDefaults["IntersectionType"]["String"] = {};
const AddPropertySignaturePropertySignatureIntersectionTypeNumber: PropertySignatureDefaults["IntersectionType"]["Number"] = {};
const AddPropertySignaturePropertySignatureIntersectionTypeBoolean: PropertySignatureDefaults["IntersectionType"]["Boolean"] = {};
const AddPropertySignaturePropertySignatureIntersectionTypeAny: PropertySignatureDefaults["IntersectionType"]["Any"] = {};

// Add Property Signature of PropertySignature - TypeLiteral
const AddPropertySignaturePropertySignatureTypeLiteralLiteral: PropertySignatureDefaults["TypeLiteral"]["Literal"] = {};
const AddPropertySignaturePropertySignatureTypeLiteralObject: PropertySignatureDefaults["TypeLiteral"]["Object"] = {};
const AddPropertySignaturePropertySignatureTypeLiteralString: PropertySignatureDefaults["TypeLiteral"]["String"] = {};
const AddPropertySignaturePropertySignatureTypeLiteralNumber: PropertySignatureDefaults["TypeLiteral"]["Number"] = {};
const AddPropertySignaturePropertySignatureTypeLiteralBoolean: PropertySignatureDefaults["TypeLiteral"]["Boolean"] = {};
const AddPropertySignaturePropertySignatureTypeLiteralAny: PropertySignatureDefaults["TypeLiteral"]["Any"] = {};

// Add Property Signature of PropertySignature - TupleType
const AddPropertySignaturePropertySignatureTupleTypeLiteral: PropertySignatureDefaults["TupleType"]["Literal"] = {};
const AddPropertySignaturePropertySignatureTupleTypeObject: PropertySignatureDefaults["TupleType"]["Object"] = {};
const AddPropertySignaturePropertySignatureTupleTypeString: PropertySignatureDefaults["TupleType"]["String"] = {};
const AddPropertySignaturePropertySignatureTupleTypeNumber: PropertySignatureDefaults["TupleType"]["Number"] = {};
const AddPropertySignaturePropertySignatureTupleTypeBoolean: PropertySignatureDefaults["TupleType"]["Boolean"] = {};
const AddPropertySignaturePropertySignatureTupleTypeAny: PropertySignatureDefaults["TupleType"]["Any"] = {};

// Add Property Signature of PropertySignature - ArrayType
const AddPropertySignaturePropertySignatureArrayTypeLiteral: PropertySignatureDefaults["ArrayType"]["Literal"] = {};
const AddPropertySignaturePropertySignatureArrayTypeObject: PropertySignatureDefaults["ArrayType"]["Object"] = {};
const AddPropertySignaturePropertySignatureArrayTypeString: PropertySignatureDefaults["ArrayType"]["String"] = {};
const AddPropertySignaturePropertySignatureArrayTypeNumber: PropertySignatureDefaults["ArrayType"]["Number"] = {};
const AddPropertySignaturePropertySignatureArrayTypeBoolean: PropertySignatureDefaults["ArrayType"]["Boolean"] = {};
const AddPropertySignaturePropertySignatureArrayTypeAny: PropertySignatureDefaults["ArrayType"]["Any"] = {};

// Add Property Signature of PropertySignature - FunctionType
const AddPropertySignaturePropertySignatureFunctionTypeLiteral: PropertySignatureDefaults["FunctionType"]["Literal"] = {};
const AddPropertySignaturePropertySignatureFunctionTypeObject: PropertySignatureDefaults["FunctionType"]["Object"] = {};
const AddPropertySignaturePropertySignatureFunctionTypeString: PropertySignatureDefaults["FunctionType"]["String"] = {};
const AddPropertySignaturePropertySignatureFunctionTypeNumber: PropertySignatureDefaults["FunctionType"]["Number"] = {};
const AddPropertySignaturePropertySignatureFunctionTypeBoolean: PropertySignatureDefaults["FunctionType"]["Boolean"] = {};
const AddPropertySignaturePropertySignatureFunctionTypeAny: PropertySignatureDefaults["FunctionType"]["Any"] = {};

// Add Property Signature of PropertySignature - ConstructorType
const AddPropertySignaturePropertySignatureConstructorTypeLiteral: PropertySignatureDefaults["ConstructorType"]["Literal"] = {};
const AddPropertySignaturePropertySignatureConstructorTypeObject: PropertySignatureDefaults["ConstructorType"]["Object"] = {};
const AddPropertySignaturePropertySignatureConstructorTypeString: PropertySignatureDefaults["ConstructorType"]["String"] = {};
const AddPropertySignaturePropertySignatureConstructorTypeNumber: PropertySignatureDefaults["ConstructorType"]["Number"] = {};
const AddPropertySignaturePropertySignatureConstructorTypeBoolean: PropertySignatureDefaults["ConstructorType"]["Boolean"] = {};
const AddPropertySignaturePropertySignatureConstructorTypeAny: PropertySignatureDefaults["ConstructorType"]["Any"] = {};

