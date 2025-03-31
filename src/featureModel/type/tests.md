# Type Declaration Tests

For the Types we will have to Scope things down.
We will describe the decisions done in this document.

## Usage

We will use the type as a function's parameter and invoke it

## Test Cases

### Constructor Type

#### States

1. Literal Type - we fix it to 1 literal
2. TypeQuery - we fix it to 1 variable
3. ImportType - we fix it to 1 module
4. IndexedAccessType - we fix it to 1 interface and key
5. TypeKeyword - object
6. TypeKeyword - string
7. TypeKeyword - number
8. TypeKeyword - boolean
9. TypeKeyword - any
10. TypeKeyword - unknown
11. TypeKeyword - never
12. TypeKeyword - void
13. TypeKeyword - undefined
14. TypeKeyword - symbol

#### Changes

We have 14 states \* 13 potential new states = 182 changes
Outside of that, for testing the other types we consider these breaking changes as applicable to all Types that use them and use a smaller set of 3 states:

1. Literal Type - we fix it to 1 literal
2. TypeKeyword - number
3. TypeKeyword - any
4. TypeKeyword - string
5. TypeKeyword - boolean

### Non-Constructor Types

We go in depth for all types, but we need a reasonable scope to work with when using the context of other types.
We scope down things to the following states when testing the other types:

1. ParenthesizedType
2. TypeReference - we fix it to 1 type - a Promise of a Type
3. UnionType
4. IntersectionType
5. TypeLiteral - we fix it to 1 property signature with a string key and a fixed type value
6. TupleType - we fix it to 1 element of a specific type
7. ArrayType
8. FunctionType - we fix it to 1 parameter of a type and a void return type

We have 8 states and we use 5 constructor states - therefore we have 40 contexts in total.
Additionally, we can skip them and go into the constructor types - going up to 45 contexts.

### ParenthesizedType

We have to test the parenthesized type addition and removal:
2 tests \* 45 contexts = 90 tests

### TypeReference

We will test only a Promise of a Type.
We will test adding and removing the promise.
additionally we will test adding and removing the type itself.
4 tests \* 45 contexts = 180 tests

### UnionType

We will test adding a union type and removing it. We will fix the type we need and test in the context of all other:
2 tests \* 45 contexts = 90 tests

### IntersectionType

We will test adding an intersection type and removing it. We will fix the type we need and test in the context of all other:
2 tests \* 45 contexts = 90 tests

### TypeLiteral

#### States

1. No Type Literal
2. Type Literal (with 1 property signature with string key)
3. Type Literal (with 1 property signature with Mapped Type)
4. Type Literal (with index signature of type string)
5. Type Literal (with index signature of type number)
6. Type Literal (with index signature of type symbol)
7. Type Literal (with index signature of type templateliteraltype)

#### Changes

We test changes of all of those
7 states \* 6 potential new states = 42 changes \* 45 contexts = 1890 tests

#### Property Signature

We test adding and removing a property signature.
We test adding and removing a question token.
4 tests \* 45 contexts = 180 tests

### TupleType

We will test adding and removing a tuple type.
We will then fix adding and removing a member to the tuple.
4 tests \* 45 contexts = 180 tests

### ArrayType

We will test adding and removing an array type.
2 tests \* 45 contexts = 90 tests

### FunctionType

We will test adding and removing a function type.
We will test adding and removing a parameter.
For the changing of parameter type and return type, we stop the recursion and look at the results of the feature model for it.
4 tests \* 45 contexts = 180 tests

## Total

In total we have:
182 (modifiers) + 90 (parenthesizedType) + 180 (TypeReference) + 90 (UnionType) + 90 (IntersectionType) + 1890 (TypeLiteral) + 180 (TupleType) + 90 (ArrayType) + 180 (FunctionType) = 2882 tests
