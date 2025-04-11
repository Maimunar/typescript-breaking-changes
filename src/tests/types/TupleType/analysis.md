# TupleType

In this document we describe the tests done for tuple type and analyse them

## Tests

We test:

1. Adding a tuple type
2. Removing a tuple type
3. Adding an item to the tuple - start from empty tuple
4. Removing an item from the tuple - end with an empty tuple
   Resulting in 240 tests and 235 BCs

## Analysis

### Add Tuple Item

Adding an item to a tuple type is always a BC

### Remove Tuple Item

Removing an item from a tuple type is always a BC

### Add Tuple Type

Adding a Tuple Type to a type is always a BC

### Remove Tuple Type

Removing a Tuple type is almost always a BC, unless:

- The resulting type is an object or any
- The resulting type is a tuple or array of object or any
