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
 * Add Property Signature to MappedType  
 */

const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);

// Initial value
const startTypeLiteral: {} = {} 

// Changes
// Add Property Signature of MappedType - ParenthesizedType
const AddPropertySignatureMappedTypeParenthesizedTypeLiteral: MappedTypeDefaults["ParenthesizedType"]["Literal"] = {};
const AddPropertySignatureMappedTypeParenthesizedTypeObject: MappedTypeDefaults["ParenthesizedType"]["Object"] = {};
const AddPropertySignatureMappedTypeParenthesizedTypeString: MappedTypeDefaults["ParenthesizedType"]["String"] = {};
const AddPropertySignatureMappedTypeParenthesizedTypeNumber: MappedTypeDefaults["ParenthesizedType"]["Number"] = {};
const AddPropertySignatureMappedTypeParenthesizedTypeBoolean: MappedTypeDefaults["ParenthesizedType"]["Boolean"] = {};
const AddPropertySignatureMappedTypeParenthesizedTypeAny: MappedTypeDefaults["ParenthesizedType"]["Any"] = {};

// Add Property Signature of MappedType - TypeReferenceBuiltin
const AddPropertySignatureMappedTypeTypeReferenceBuiltinLiteral: MappedTypeDefaults["TypeReferenceBuiltin"]["Literal"] = {};
const AddPropertySignatureMappedTypeTypeReferenceBuiltinObject: MappedTypeDefaults["TypeReferenceBuiltin"]["Object"] = {};
const AddPropertySignatureMappedTypeTypeReferenceBuiltinString: MappedTypeDefaults["TypeReferenceBuiltin"]["String"] = {};
const AddPropertySignatureMappedTypeTypeReferenceBuiltinNumber: MappedTypeDefaults["TypeReferenceBuiltin"]["Number"] = {};
const AddPropertySignatureMappedTypeTypeReferenceBuiltinBoolean: MappedTypeDefaults["TypeReferenceBuiltin"]["Boolean"] = {};
const AddPropertySignatureMappedTypeTypeReferenceBuiltinAny: MappedTypeDefaults["TypeReferenceBuiltin"]["Any"] = {};

// Add Property Signature of MappedType - TypeReferencePredefined
const AddPropertySignatureMappedTypeTypeReferencePredefinedLiteral: MappedTypeDefaults["TypeReferencePredefined"]["Literal"] = {};
const AddPropertySignatureMappedTypeTypeReferencePredefinedObject: MappedTypeDefaults["TypeReferencePredefined"]["Object"] = {};
const AddPropertySignatureMappedTypeTypeReferencePredefinedString: MappedTypeDefaults["TypeReferencePredefined"]["String"] = {};
const AddPropertySignatureMappedTypeTypeReferencePredefinedNumber: MappedTypeDefaults["TypeReferencePredefined"]["Number"] = {};
const AddPropertySignatureMappedTypeTypeReferencePredefinedBoolean: MappedTypeDefaults["TypeReferencePredefined"]["Boolean"] = {};
const AddPropertySignatureMappedTypeTypeReferencePredefinedAny: MappedTypeDefaults["TypeReferencePredefined"]["Any"] = {};

// Add Property Signature of MappedType - UnionType
const AddPropertySignatureMappedTypeUnionTypeLiteral: MappedTypeDefaults["UnionType"]["Literal"] = {};
const AddPropertySignatureMappedTypeUnionTypeObject: MappedTypeDefaults["UnionType"]["Object"] = {};
const AddPropertySignatureMappedTypeUnionTypeString: MappedTypeDefaults["UnionType"]["String"] = {};
const AddPropertySignatureMappedTypeUnionTypeNumber: MappedTypeDefaults["UnionType"]["Number"] = {};
const AddPropertySignatureMappedTypeUnionTypeBoolean: MappedTypeDefaults["UnionType"]["Boolean"] = {};
const AddPropertySignatureMappedTypeUnionTypeAny: MappedTypeDefaults["UnionType"]["Any"] = {};

// Add Property Signature of MappedType - IntersectionType
const AddPropertySignatureMappedTypeIntersectionTypeLiteral: MappedTypeDefaults["IntersectionType"]["Literal"] = {};
const AddPropertySignatureMappedTypeIntersectionTypeObject: MappedTypeDefaults["IntersectionType"]["Object"] = {};
const AddPropertySignatureMappedTypeIntersectionTypeString: MappedTypeDefaults["IntersectionType"]["String"] = {};
const AddPropertySignatureMappedTypeIntersectionTypeNumber: MappedTypeDefaults["IntersectionType"]["Number"] = {};
const AddPropertySignatureMappedTypeIntersectionTypeBoolean: MappedTypeDefaults["IntersectionType"]["Boolean"] = {};
const AddPropertySignatureMappedTypeIntersectionTypeAny: MappedTypeDefaults["IntersectionType"]["Any"] = {};

// Add Property Signature of MappedType - TypeLiteral
const AddPropertySignatureMappedTypeTypeLiteralLiteral: MappedTypeDefaults["TypeLiteral"]["Literal"] = {};
const AddPropertySignatureMappedTypeTypeLiteralObject: MappedTypeDefaults["TypeLiteral"]["Object"] = {};
const AddPropertySignatureMappedTypeTypeLiteralString: MappedTypeDefaults["TypeLiteral"]["String"] = {};
const AddPropertySignatureMappedTypeTypeLiteralNumber: MappedTypeDefaults["TypeLiteral"]["Number"] = {};
const AddPropertySignatureMappedTypeTypeLiteralBoolean: MappedTypeDefaults["TypeLiteral"]["Boolean"] = {};
const AddPropertySignatureMappedTypeTypeLiteralAny: MappedTypeDefaults["TypeLiteral"]["Any"] = {};

// Add Property Signature of MappedType - TupleType
const AddPropertySignatureMappedTypeTupleTypeLiteral: MappedTypeDefaults["TupleType"]["Literal"] = {};
const AddPropertySignatureMappedTypeTupleTypeObject: MappedTypeDefaults["TupleType"]["Object"] = {};
const AddPropertySignatureMappedTypeTupleTypeString: MappedTypeDefaults["TupleType"]["String"] = {};
const AddPropertySignatureMappedTypeTupleTypeNumber: MappedTypeDefaults["TupleType"]["Number"] = {};
const AddPropertySignatureMappedTypeTupleTypeBoolean: MappedTypeDefaults["TupleType"]["Boolean"] = {};
const AddPropertySignatureMappedTypeTupleTypeAny: MappedTypeDefaults["TupleType"]["Any"] = {};

// Add Property Signature of MappedType - ArrayType
const AddPropertySignatureMappedTypeArrayTypeLiteral: MappedTypeDefaults["ArrayType"]["Literal"] = {};
const AddPropertySignatureMappedTypeArrayTypeObject: MappedTypeDefaults["ArrayType"]["Object"] = {};
const AddPropertySignatureMappedTypeArrayTypeString: MappedTypeDefaults["ArrayType"]["String"] = {};
const AddPropertySignatureMappedTypeArrayTypeNumber: MappedTypeDefaults["ArrayType"]["Number"] = {};
const AddPropertySignatureMappedTypeArrayTypeBoolean: MappedTypeDefaults["ArrayType"]["Boolean"] = {};
const AddPropertySignatureMappedTypeArrayTypeAny: MappedTypeDefaults["ArrayType"]["Any"] = {};

// Add Property Signature of MappedType - FunctionType
const AddPropertySignatureMappedTypeFunctionTypeLiteral: MappedTypeDefaults["FunctionType"]["Literal"] = {};
const AddPropertySignatureMappedTypeFunctionTypeObject: MappedTypeDefaults["FunctionType"]["Object"] = {};
const AddPropertySignatureMappedTypeFunctionTypeString: MappedTypeDefaults["FunctionType"]["String"] = {};
const AddPropertySignatureMappedTypeFunctionTypeNumber: MappedTypeDefaults["FunctionType"]["Number"] = {};
const AddPropertySignatureMappedTypeFunctionTypeBoolean: MappedTypeDefaults["FunctionType"]["Boolean"] = {};
const AddPropertySignatureMappedTypeFunctionTypeAny: MappedTypeDefaults["FunctionType"]["Any"] = {};

// Add Property Signature of MappedType - ConstructorType
const AddPropertySignatureMappedTypeConstructorTypeLiteral: MappedTypeDefaults["ConstructorType"]["Literal"] = {};
const AddPropertySignatureMappedTypeConstructorTypeObject: MappedTypeDefaults["ConstructorType"]["Object"] = {};
const AddPropertySignatureMappedTypeConstructorTypeString: MappedTypeDefaults["ConstructorType"]["String"] = {};
const AddPropertySignatureMappedTypeConstructorTypeNumber: MappedTypeDefaults["ConstructorType"]["Number"] = {};
const AddPropertySignatureMappedTypeConstructorTypeBoolean: MappedTypeDefaults["ConstructorType"]["Boolean"] = {};
const AddPropertySignatureMappedTypeConstructorTypeAny: MappedTypeDefaults["ConstructorType"]["Any"] = {};

