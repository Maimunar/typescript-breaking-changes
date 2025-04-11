import { Defaults as GeneralDefaults } from "../../defaults";
import { ReturnDefaults } from "../defaults"
/*
 * FunctionType
 */

// Remove Function Type - ParenthesizedType
const VariableOfParenthesizedTypeLiteral: ReturnDefaults["ParenthesizedType"]["Literal"] = () => 1 
VariableOfParenthesizedTypeLiteral();
const RemoveFunctionTypeParenthesizedTypeLiteral: GeneralDefaults["ParenthesizedType"]["Literal"] = () => 1 
RemoveFunctionTypeParenthesizedTypeLiteral();

const VariableOfParenthesizedTypeObject: ReturnDefaults["ParenthesizedType"]["Object"] = () => ({}) 
VariableOfParenthesizedTypeObject();
const RemoveFunctionTypeParenthesizedTypeObject: GeneralDefaults["ParenthesizedType"]["Object"] = () => ({}) 
RemoveFunctionTypeParenthesizedTypeObject();

const VariableOfParenthesizedTypeString: ReturnDefaults["ParenthesizedType"]["String"] = () => "two" 
VariableOfParenthesizedTypeString();
const RemoveFunctionTypeParenthesizedTypeString: GeneralDefaults["ParenthesizedType"]["String"] = () => "two" 
RemoveFunctionTypeParenthesizedTypeString();

const VariableOfParenthesizedTypeNumber: ReturnDefaults["ParenthesizedType"]["Number"] = () => 2 
VariableOfParenthesizedTypeNumber();
const RemoveFunctionTypeParenthesizedTypeNumber: GeneralDefaults["ParenthesizedType"]["Number"] = () => 2 
RemoveFunctionTypeParenthesizedTypeNumber();

const VariableOfParenthesizedTypeBoolean: ReturnDefaults["ParenthesizedType"]["Boolean"] = () => true 
VariableOfParenthesizedTypeBoolean();
const RemoveFunctionTypeParenthesizedTypeBoolean: GeneralDefaults["ParenthesizedType"]["Boolean"] = () => true 
RemoveFunctionTypeParenthesizedTypeBoolean();

const VariableOfParenthesizedTypeAny: ReturnDefaults["ParenthesizedType"]["Any"] = () => 2 
VariableOfParenthesizedTypeAny();
const RemoveFunctionTypeParenthesizedTypeAny: GeneralDefaults["ParenthesizedType"]["Any"] = () => 2 
RemoveFunctionTypeParenthesizedTypeAny();

// Remove Function Type - TypeReferenceBuiltin
const VariableOfTypeReferenceBuiltinLiteral: ReturnDefaults["TypeReferenceBuiltin"]["Literal"] = () => promisify(1) 
VariableOfTypeReferenceBuiltinLiteral();
const RemoveFunctionTypeTypeReferenceBuiltinLiteral: GeneralDefaults["TypeReferenceBuiltin"]["Literal"] = () => promisify(1) 
RemoveFunctionTypeTypeReferenceBuiltinLiteral();

const VariableOfTypeReferenceBuiltinObject: ReturnDefaults["TypeReferenceBuiltin"]["Object"] = () => promisify({}) 
VariableOfTypeReferenceBuiltinObject();
const RemoveFunctionTypeTypeReferenceBuiltinObject: GeneralDefaults["TypeReferenceBuiltin"]["Object"] = () => promisify({}) 
RemoveFunctionTypeTypeReferenceBuiltinObject();

const VariableOfTypeReferenceBuiltinString: ReturnDefaults["TypeReferenceBuiltin"]["String"] = () => promisify("two") 
VariableOfTypeReferenceBuiltinString();
const RemoveFunctionTypeTypeReferenceBuiltinString: GeneralDefaults["TypeReferenceBuiltin"]["String"] = () => promisify("two") 
RemoveFunctionTypeTypeReferenceBuiltinString();

const VariableOfTypeReferenceBuiltinNumber: ReturnDefaults["TypeReferenceBuiltin"]["Number"] = () => promisify(2) 
VariableOfTypeReferenceBuiltinNumber();
const RemoveFunctionTypeTypeReferenceBuiltinNumber: GeneralDefaults["TypeReferenceBuiltin"]["Number"] = () => promisify(2) 
RemoveFunctionTypeTypeReferenceBuiltinNumber();

const VariableOfTypeReferenceBuiltinBoolean: ReturnDefaults["TypeReferenceBuiltin"]["Boolean"] = () => promisify(true) 
VariableOfTypeReferenceBuiltinBoolean();
const RemoveFunctionTypeTypeReferenceBuiltinBoolean: GeneralDefaults["TypeReferenceBuiltin"]["Boolean"] = () => promisify(true) 
RemoveFunctionTypeTypeReferenceBuiltinBoolean();

const VariableOfTypeReferenceBuiltinAny: ReturnDefaults["TypeReferenceBuiltin"]["Any"] = () => promisify(2) 
VariableOfTypeReferenceBuiltinAny();
const RemoveFunctionTypeTypeReferenceBuiltinAny: GeneralDefaults["TypeReferenceBuiltin"]["Any"] = () => promisify(2) 
RemoveFunctionTypeTypeReferenceBuiltinAny();

// Remove Function Type - TypeReferencePredefined
const VariableOfTypeReferencePredefinedLiteral: ReturnDefaults["TypeReferencePredefined"]["Literal"] = () => 1 
VariableOfTypeReferencePredefinedLiteral();
const RemoveFunctionTypeTypeReferencePredefinedLiteral: GeneralDefaults["TypeReferencePredefined"]["Literal"] = () => 1 
RemoveFunctionTypeTypeReferencePredefinedLiteral();

const VariableOfTypeReferencePredefinedObject: ReturnDefaults["TypeReferencePredefined"]["Object"] = () => ({}) 
VariableOfTypeReferencePredefinedObject();
const RemoveFunctionTypeTypeReferencePredefinedObject: GeneralDefaults["TypeReferencePredefined"]["Object"] = () => ({}) 
RemoveFunctionTypeTypeReferencePredefinedObject();

const VariableOfTypeReferencePredefinedString: ReturnDefaults["TypeReferencePredefined"]["String"] = () => "two" 
VariableOfTypeReferencePredefinedString();
const RemoveFunctionTypeTypeReferencePredefinedString: GeneralDefaults["TypeReferencePredefined"]["String"] = () => "two" 
RemoveFunctionTypeTypeReferencePredefinedString();

const VariableOfTypeReferencePredefinedNumber: ReturnDefaults["TypeReferencePredefined"]["Number"] = () => 2 
VariableOfTypeReferencePredefinedNumber();
const RemoveFunctionTypeTypeReferencePredefinedNumber: GeneralDefaults["TypeReferencePredefined"]["Number"] = () => 2 
RemoveFunctionTypeTypeReferencePredefinedNumber();

const VariableOfTypeReferencePredefinedBoolean: ReturnDefaults["TypeReferencePredefined"]["Boolean"] = () => true 
VariableOfTypeReferencePredefinedBoolean();
const RemoveFunctionTypeTypeReferencePredefinedBoolean: GeneralDefaults["TypeReferencePredefined"]["Boolean"] = () => true 
RemoveFunctionTypeTypeReferencePredefinedBoolean();

const VariableOfTypeReferencePredefinedAny: ReturnDefaults["TypeReferencePredefined"]["Any"] = () => 2 
VariableOfTypeReferencePredefinedAny();
const RemoveFunctionTypeTypeReferencePredefinedAny: GeneralDefaults["TypeReferencePredefined"]["Any"] = () => 2 
RemoveFunctionTypeTypeReferencePredefinedAny();

// Remove Function Type - UnionType
const VariableOfUnionTypeLiteral: ReturnDefaults["UnionType"]["Literal"] = () => 1 
VariableOfUnionTypeLiteral();
const RemoveFunctionTypeUnionTypeLiteral: GeneralDefaults["UnionType"]["Literal"] = () => 1 
RemoveFunctionTypeUnionTypeLiteral();

const VariableOfUnionTypeObject: ReturnDefaults["UnionType"]["Object"] = () => ({}) 
VariableOfUnionTypeObject();
const RemoveFunctionTypeUnionTypeObject: GeneralDefaults["UnionType"]["Object"] = () => ({}) 
RemoveFunctionTypeUnionTypeObject();

const VariableOfUnionTypeString: ReturnDefaults["UnionType"]["String"] = () => "two" 
VariableOfUnionTypeString();
const RemoveFunctionTypeUnionTypeString: GeneralDefaults["UnionType"]["String"] = () => "two" 
RemoveFunctionTypeUnionTypeString();

const VariableOfUnionTypeNumber: ReturnDefaults["UnionType"]["Number"] = () => 2 
VariableOfUnionTypeNumber();
const RemoveFunctionTypeUnionTypeNumber: GeneralDefaults["UnionType"]["Number"] = () => 2 
RemoveFunctionTypeUnionTypeNumber();

const VariableOfUnionTypeBoolean: ReturnDefaults["UnionType"]["Boolean"] = () => true 
VariableOfUnionTypeBoolean();
const RemoveFunctionTypeUnionTypeBoolean: GeneralDefaults["UnionType"]["Boolean"] = () => true 
RemoveFunctionTypeUnionTypeBoolean();

const VariableOfUnionTypeAny: ReturnDefaults["UnionType"]["Any"] = () => 2 
VariableOfUnionTypeAny();
const RemoveFunctionTypeUnionTypeAny: GeneralDefaults["UnionType"]["Any"] = () => 2 
RemoveFunctionTypeUnionTypeAny();

// Remove Function Type - IntersectionType
const VariableOfIntersectionTypeLiteral: ReturnDefaults["IntersectionType"]["Literal"] = () => 1 
VariableOfIntersectionTypeLiteral();
const RemoveFunctionTypeIntersectionTypeLiteral: GeneralDefaults["IntersectionType"]["Literal"] = () => 1 
RemoveFunctionTypeIntersectionTypeLiteral();

const VariableOfIntersectionTypeObject: ReturnDefaults["IntersectionType"]["Object"] = () => ({}) 
VariableOfIntersectionTypeObject();
const RemoveFunctionTypeIntersectionTypeObject: GeneralDefaults["IntersectionType"]["Object"] = () => ({}) 
RemoveFunctionTypeIntersectionTypeObject();

const VariableOfIntersectionTypeString: ReturnDefaults["IntersectionType"]["String"] = () => "two" 
VariableOfIntersectionTypeString();
const RemoveFunctionTypeIntersectionTypeString: GeneralDefaults["IntersectionType"]["String"] = () => "two" 
RemoveFunctionTypeIntersectionTypeString();

const VariableOfIntersectionTypeNumber: ReturnDefaults["IntersectionType"]["Number"] = () => 2 
VariableOfIntersectionTypeNumber();
const RemoveFunctionTypeIntersectionTypeNumber: GeneralDefaults["IntersectionType"]["Number"] = () => 2 
RemoveFunctionTypeIntersectionTypeNumber();

const VariableOfIntersectionTypeBoolean: ReturnDefaults["IntersectionType"]["Boolean"] = () => true 
VariableOfIntersectionTypeBoolean();
const RemoveFunctionTypeIntersectionTypeBoolean: GeneralDefaults["IntersectionType"]["Boolean"] = () => true 
RemoveFunctionTypeIntersectionTypeBoolean();

const VariableOfIntersectionTypeAny: ReturnDefaults["IntersectionType"]["Any"] = () => 2 
VariableOfIntersectionTypeAny();
const RemoveFunctionTypeIntersectionTypeAny: GeneralDefaults["IntersectionType"]["Any"] = () => 2 
RemoveFunctionTypeIntersectionTypeAny();

// Remove Function Type - TypeLiteral
const VariableOfTypeLiteralLiteral: ReturnDefaults["TypeLiteral"]["Literal"] = () => ({ key: 1 }) 
VariableOfTypeLiteralLiteral();
const RemoveFunctionTypeTypeLiteralLiteral: GeneralDefaults["TypeLiteral"]["Literal"] = () => ({ key: 1 }) 
RemoveFunctionTypeTypeLiteralLiteral();

const VariableOfTypeLiteralObject: ReturnDefaults["TypeLiteral"]["Object"] = () => ({ key: {} }) 
VariableOfTypeLiteralObject();
const RemoveFunctionTypeTypeLiteralObject: GeneralDefaults["TypeLiteral"]["Object"] = () => ({ key: {} }) 
RemoveFunctionTypeTypeLiteralObject();

const VariableOfTypeLiteralString: ReturnDefaults["TypeLiteral"]["String"] = () => ({ key: "two" }) 
VariableOfTypeLiteralString();
const RemoveFunctionTypeTypeLiteralString: GeneralDefaults["TypeLiteral"]["String"] = () => ({ key: "two" }) 
RemoveFunctionTypeTypeLiteralString();

const VariableOfTypeLiteralNumber: ReturnDefaults["TypeLiteral"]["Number"] = () => ({ key: 2 }) 
VariableOfTypeLiteralNumber();
const RemoveFunctionTypeTypeLiteralNumber: GeneralDefaults["TypeLiteral"]["Number"] = () => ({ key: 2 }) 
RemoveFunctionTypeTypeLiteralNumber();

const VariableOfTypeLiteralBoolean: ReturnDefaults["TypeLiteral"]["Boolean"] = () => ({ key: true }) 
VariableOfTypeLiteralBoolean();
const RemoveFunctionTypeTypeLiteralBoolean: GeneralDefaults["TypeLiteral"]["Boolean"] = () => ({ key: true }) 
RemoveFunctionTypeTypeLiteralBoolean();

const VariableOfTypeLiteralAny: ReturnDefaults["TypeLiteral"]["Any"] = () => ({ key: 2 }) 
VariableOfTypeLiteralAny();
const RemoveFunctionTypeTypeLiteralAny: GeneralDefaults["TypeLiteral"]["Any"] = () => ({ key: 2 }) 
RemoveFunctionTypeTypeLiteralAny();

// Remove Function Type - TupleType
const VariableOfTupleTypeLiteral: ReturnDefaults["TupleType"]["Literal"] = () => [1] 
VariableOfTupleTypeLiteral();
const RemoveFunctionTypeTupleTypeLiteral: GeneralDefaults["TupleType"]["Literal"] = () => [1] 
RemoveFunctionTypeTupleTypeLiteral();

const VariableOfTupleTypeObject: ReturnDefaults["TupleType"]["Object"] = () => [{}] 
VariableOfTupleTypeObject();
const RemoveFunctionTypeTupleTypeObject: GeneralDefaults["TupleType"]["Object"] = () => [{}] 
RemoveFunctionTypeTupleTypeObject();

const VariableOfTupleTypeString: ReturnDefaults["TupleType"]["String"] = () => ["two"] 
VariableOfTupleTypeString();
const RemoveFunctionTypeTupleTypeString: GeneralDefaults["TupleType"]["String"] = () => ["two"] 
RemoveFunctionTypeTupleTypeString();

const VariableOfTupleTypeNumber: ReturnDefaults["TupleType"]["Number"] = () => [2] 
VariableOfTupleTypeNumber();
const RemoveFunctionTypeTupleTypeNumber: GeneralDefaults["TupleType"]["Number"] = () => [2] 
RemoveFunctionTypeTupleTypeNumber();

const VariableOfTupleTypeBoolean: ReturnDefaults["TupleType"]["Boolean"] = () => [true] 
VariableOfTupleTypeBoolean();
const RemoveFunctionTypeTupleTypeBoolean: GeneralDefaults["TupleType"]["Boolean"] = () => [true] 
RemoveFunctionTypeTupleTypeBoolean();

const VariableOfTupleTypeAny: ReturnDefaults["TupleType"]["Any"] = () => [2] 
VariableOfTupleTypeAny();
const RemoveFunctionTypeTupleTypeAny: GeneralDefaults["TupleType"]["Any"] = () => [2] 
RemoveFunctionTypeTupleTypeAny();

// Remove Function Type - ArrayType
const VariableOfArrayTypeLiteral: ReturnDefaults["ArrayType"]["Literal"] = () => [1, 1] 
VariableOfArrayTypeLiteral();
const RemoveFunctionTypeArrayTypeLiteral: GeneralDefaults["ArrayType"]["Literal"] = () => [1, 1] 
RemoveFunctionTypeArrayTypeLiteral();

const VariableOfArrayTypeObject: ReturnDefaults["ArrayType"]["Object"] = () => [{}, {}] 
VariableOfArrayTypeObject();
const RemoveFunctionTypeArrayTypeObject: GeneralDefaults["ArrayType"]["Object"] = () => [{}, {}] 
RemoveFunctionTypeArrayTypeObject();

const VariableOfArrayTypeString: ReturnDefaults["ArrayType"]["String"] = () => ["two", "two"] 
VariableOfArrayTypeString();
const RemoveFunctionTypeArrayTypeString: GeneralDefaults["ArrayType"]["String"] = () => ["two", "two"] 
RemoveFunctionTypeArrayTypeString();

const VariableOfArrayTypeNumber: ReturnDefaults["ArrayType"]["Number"] = () => [2, 2] 
VariableOfArrayTypeNumber();
const RemoveFunctionTypeArrayTypeNumber: GeneralDefaults["ArrayType"]["Number"] = () => [2, 2] 
RemoveFunctionTypeArrayTypeNumber();

const VariableOfArrayTypeBoolean: ReturnDefaults["ArrayType"]["Boolean"] = () => [true, true] 
VariableOfArrayTypeBoolean();
const RemoveFunctionTypeArrayTypeBoolean: GeneralDefaults["ArrayType"]["Boolean"] = () => [true, true] 
RemoveFunctionTypeArrayTypeBoolean();

const VariableOfArrayTypeAny: ReturnDefaults["ArrayType"]["Any"] = () => [2, 2] 
VariableOfArrayTypeAny();
const RemoveFunctionTypeArrayTypeAny: GeneralDefaults["ArrayType"]["Any"] = () => [2, 2] 
RemoveFunctionTypeArrayTypeAny();

// Remove Function Type - FunctionType
const VariableOfFunctionTypeLiteral: ReturnDefaults["FunctionType"]["Literal"] = () => (param) => { } 
VariableOfFunctionTypeLiteral();
const RemoveFunctionTypeFunctionTypeLiteral: GeneralDefaults["FunctionType"]["Literal"] = () => (param) => { } 
RemoveFunctionTypeFunctionTypeLiteral();

const VariableOfFunctionTypeObject: ReturnDefaults["FunctionType"]["Object"] = () => (param) => { } 
VariableOfFunctionTypeObject();
const RemoveFunctionTypeFunctionTypeObject: GeneralDefaults["FunctionType"]["Object"] = () => (param) => { } 
RemoveFunctionTypeFunctionTypeObject();

const VariableOfFunctionTypeString: ReturnDefaults["FunctionType"]["String"] = () => (param) => { } 
VariableOfFunctionTypeString();
const RemoveFunctionTypeFunctionTypeString: GeneralDefaults["FunctionType"]["String"] = () => (param) => { } 
RemoveFunctionTypeFunctionTypeString();

const VariableOfFunctionTypeNumber: ReturnDefaults["FunctionType"]["Number"] = () => (param) => { } 
VariableOfFunctionTypeNumber();
const RemoveFunctionTypeFunctionTypeNumber: GeneralDefaults["FunctionType"]["Number"] = () => (param) => { } 
RemoveFunctionTypeFunctionTypeNumber();

const VariableOfFunctionTypeBoolean: ReturnDefaults["FunctionType"]["Boolean"] = () => (param) => { } 
VariableOfFunctionTypeBoolean();
const RemoveFunctionTypeFunctionTypeBoolean: GeneralDefaults["FunctionType"]["Boolean"] = () => (param) => { } 
RemoveFunctionTypeFunctionTypeBoolean();

const VariableOfFunctionTypeAny: ReturnDefaults["FunctionType"]["Any"] = () => (param) => { } 
VariableOfFunctionTypeAny();
const RemoveFunctionTypeFunctionTypeAny: GeneralDefaults["FunctionType"]["Any"] = () => (param) => { } 
RemoveFunctionTypeFunctionTypeAny();

// Remove Function Type - ConstructorType
const VariableOfConstructorTypeLiteral: ReturnDefaults["ConstructorType"]["Literal"] = () => 1 
VariableOfConstructorTypeLiteral();
const RemoveFunctionTypeConstructorTypeLiteral: GeneralDefaults["ConstructorType"]["Literal"] = () => 1 
RemoveFunctionTypeConstructorTypeLiteral();

const VariableOfConstructorTypeObject: ReturnDefaults["ConstructorType"]["Object"] = () => ({}) 
VariableOfConstructorTypeObject();
const RemoveFunctionTypeConstructorTypeObject: GeneralDefaults["ConstructorType"]["Object"] = () => ({}) 
RemoveFunctionTypeConstructorTypeObject();

const VariableOfConstructorTypeString: ReturnDefaults["ConstructorType"]["String"] = () => "two" 
VariableOfConstructorTypeString();
const RemoveFunctionTypeConstructorTypeString: GeneralDefaults["ConstructorType"]["String"] = () => "two" 
RemoveFunctionTypeConstructorTypeString();

const VariableOfConstructorTypeNumber: ReturnDefaults["ConstructorType"]["Number"] = () => 2 
VariableOfConstructorTypeNumber();
const RemoveFunctionTypeConstructorTypeNumber: GeneralDefaults["ConstructorType"]["Number"] = () => 2 
RemoveFunctionTypeConstructorTypeNumber();

const VariableOfConstructorTypeBoolean: ReturnDefaults["ConstructorType"]["Boolean"] = () => true 
VariableOfConstructorTypeBoolean();
const RemoveFunctionTypeConstructorTypeBoolean: GeneralDefaults["ConstructorType"]["Boolean"] = () => true 
RemoveFunctionTypeConstructorTypeBoolean();

const VariableOfConstructorTypeAny: ReturnDefaults["ConstructorType"]["Any"] = () => 2 
VariableOfConstructorTypeAny();
const RemoveFunctionTypeConstructorTypeAny: GeneralDefaults["ConstructorType"]["Any"] = () => 2 
RemoveFunctionTypeConstructorTypeAny();

