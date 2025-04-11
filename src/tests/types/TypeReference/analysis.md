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

We end up with 120 tests and 111 BCs.

## Analysis

We did the tests with promise which is a restrictive type, but using a builtin type such as Optional will give different results.
In order to have the full picture, the full library's builtins need to be tested.

### Add Builtin Type - Promise

Adding a Promise Builtin Type is always a breaking change.

### Remove Builtin Type - Promise

Removing a Promise Builtin Type is almost always a breaking change, except:

- The resulting type is of type any or object
