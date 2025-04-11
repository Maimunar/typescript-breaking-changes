# TypeLiteral

In this document we describe the tests done for type literal type and analyse them

## Tests

We have 7 states:

- No Type Literal
- Type Literal (with 1 property signature with string key)
- Type Literal (with 1 property signature with Mapped Type)
- Type Literal (with index signature of type string)
- Type Literal (with index signature of type number)
- Type Literal (with index signature of type symbol)
- Type Literal (with index signature of type templateliteraltype)

1. We need to check changes between all of them, for all possible buildtypes

Additionally, we need to check:

2. Adding a property signature
   - For all 6 states (except 1.)
   - For all possible property types
   - For a fixed name
3. Removing a property signature
   - For all 6 states
   - Starting with 1 item.
4. Adding a question token
5. Removing a question token

- Same conditions for 4 and 5

Total - 4320 Tests and 954 BCs

## Analysis

### Add Property Signature

- Adding an Index signature is never a BC (of type string, number, symbol or template literal). Most potential errors are going to end up with a compiler error in the library
- Adding a mapped type and normal property signature is always a BC

### Remove Property Signature

- Removing is always a BC, unless the resulting type is an empty object ({}).

### Make Optional Property Signature

- Making a property signature optional is never a BC.

### Make Required Property Signature

- Making an index signature required is never a BC.
- Making a mapped type or property signature required is always a BC.

### Change Type Literal

#### Index Number

- Changing to index of type string is not a BC if the type is the same as the index type
- Changing to object type or any type is not a BC
- Every other change is a BC

#### Index String

- Changing to object type or any type is not a BC
- Every other change is a BC

#### Index Symbol

- Changing to object type or any type is not a BC
- Every other change is a BC

#### Index TemplateLiteralType

- Changing to object type or any type is not a BC
- Changing to index of type string is not a BC if the type is the same as the template literal type
- Every other change is a BC

#### Mapped Type

- Changing to object type or any type is not a BC
- Changing to index of type string is not a BC if the type is the same as the mapped property
- Every other change is a BC

#### No Type Literal

- Object type can be changed to an indexed type
- String type can be changed to an indexed number type where the type is string
- Every other change is a BC

#### Property Signature

- Changing to object type or any type is not a BC
- Changing to index of type string is not a BC if the type is the same as the property
- Every other change is a BC
