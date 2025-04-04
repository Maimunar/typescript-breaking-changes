# TypeReference

In this document we describe the tests done for type reference type and analyse them

## Tests

There are 2 types of type references - a builtin one (in the ts language) as well as a predefined one (that we define).
We look at the 2 cases separately

### Builtin

We test the following cases:

1. Adding a builtin type - make the type a promise of the type
2. Removing the builtin type - make the promise of a type the type itself

### Predefined

The predefined type is a type alias of an existing type, so we refer to the other tests to define it.

## Analysis
