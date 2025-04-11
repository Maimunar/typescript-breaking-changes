# UnionType

In this document we describe the tests done for union type and analyse them

## Tests

any & string

1. We test adding a union type

- Start with any combination of buildtype
- Add any combination of buildtype

2. We test removing a union type

- Start with any combination of 2 buildtypes
- Remove the second

This is 10800 Tests and 3213 BCs.

## Analysis

### Add Union

Adding a union is never a BC.

### Remove Union

Removing a union is a BC, unless:

1. There is an "any" type left in the union
2. Number is left in the union while a number literal was removed, similarly for all types
3. Object is left in the union while an array, tuple, type literal or function was removed
