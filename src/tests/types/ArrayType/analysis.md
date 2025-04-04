# ArrayType

In this document we describe the tests done for array type and analyse them

## Tests

We have 3 types of tests:

1. Adding an array type
2. Removing an array type
3. Changing from an array type to any other type
   Resulting in a total of 570 tests.
   362 Breaking Changes found and displayed in `BCs.md`

## Analysis

When refering to a primitive type (any, object...), we mean that this type can appear in the forms of:

- ConstructorType
- ParenthesizedType
- Predefined Type Reference
- Union with 1 member in the types mentioned
- Intersection resulting in 1 of the above types

### Adding An ArrayType

Adding an ArrayType will always result in a Breaking Change.

### Removing An ArrayType

Removing an ArrayType will almost always result in a Breaking Change, except:

- When removing it from an object or any type
- When removing it from an array of object or any

### Changing An ArrayType

- ArrayType of all types can be changed only to object or any
  In some tests, the union for boolean literal is passing, but this is only because any is 1 of the members of the union, essentially allowing everything

### Conclusion

1. Adding an array to a type is always a BC
2. Removing an array type is alllowed only in an object or any, or an array of object or any
3. Changing is allowed only if the resulting type is object or any
