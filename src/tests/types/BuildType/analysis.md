# BuildType

In this document we describe the tests done for the buildtypes and analyse them

## Tests

Generally, this is a catch-all for all general tests that need to be done, specifically:

1. Changing from one build type to another

In total, we have 3240 tests and 2597 BCs

## Analysis

- Anything can be changed to any type and not be a BC.
- ArrayType, FunctionType, TupleType, Builtin Promise type can be changed to object and not be a BC.
- Literal type can be changed to type keyword of the same type
- TupleType can be changed to ArrayType (of the same type) and not be a BC
