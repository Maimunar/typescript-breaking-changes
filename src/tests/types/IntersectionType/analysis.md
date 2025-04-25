# IntersectionType

In this document we describe the tests done for intersection type and analyse them

## Tests

any & string

1. We test adding an intersection type

- Start with any combination of buildtype
- Add any combination of buildtype

2. We test removing an intersection type

- Start with any combination of 2 buildtypes
- Remove the second

We end up with a total of 7200 tests and 5532 BCs

## Analysis

### Add Intersection

Adding an intersection type is almost always a breaking change, with following exceptions happening with a type of a bigger range:

1. There is an any type in the intersection.
2. Adding an intersection with the same type.
3. Adding an intersection with an object type where the current type is an array, tuple, type literal or function.
4. Adding an intersection with an array of numbers where the current type is an array of number literals, and vice versa for all types
5. Adding an intersection with a number type where the current type is number literals, and vice versa for all types
6. Adding an intersection with an tuple of numbers where the current type is a tuple of number literals, and vice versa for all types
7. Adding an intersection with a type literal of numbers where the current type is a type literal of number literals, and vice versa for all types
8. Adding an intersection where the parameter of a function type is holding rules 1,2,3,5,6,7

When refering to a primitive type (any, object...), we mean that this type can appear in the forms of:

- ConstructorType
- ParenthesizedType
- Predefined Type Reference
- Union with 1 member in the types mentioned
- Intersection resulting in 1 of the above types

### Remove Intersection

Removing an intersection type is never a breaking change.
Note - some intersections could not be given a valid value, because the intersection resulted in type never, and are thus considered not a breaking change by the logic laws of implication.
