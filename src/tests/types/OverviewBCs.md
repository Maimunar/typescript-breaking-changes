This file documents the overview of types BCs

## ConstructorType

There are 2184 Tests for ConstructorType.
There are 1181 Breaking Changes found within them, listed in `ConstructorType/BCs.md`

1.Anything can be converted to any and unknown without resulting in a BC.
2.Literals can be converted to their respective types.
3.Boolean, number, object, string, void and symbol can convert to their own type.
4.Never can convert into anything else.
5.Undefined can be converted to undefined and void (but void can not be converted to undefined)
6.Import, Indexed Access and Type Query types 'inherit' the behaviour of the related primitive type. Changing between them is allowed as long as the primitive type allows it.

## BuildType

### Guidelines

When refering to a primitive type (any, object...), we mean that this type can appear in the forms of:

- ConstructorType
- ParenthesizedType
- Predefined Type Reference
- Union with 1 member in the types mentioned
- Intersection resulting in 1 of the above types

### ArrayType

There are 570 Tests for ArrayType.
362 Breaking Changes found and displayed in `ArrayType/BCs.md`

1. Adding an array to a type is always a BC
2. Removing an array type is alllowed only in an object or any, or an array of object or any
3. Changing is allowed only if the resulting type is object or any

### ParenthesizedType

In a simple expample, a parenthesized type is equivalent to a constructor type, as parenthesis are used only to show order.
They are tested in more complex examples within the other types, but no tests are written for ParenthesizedType, as they would be the same as the ones for constructor types.

### Function Type

### IntersectionType

### TupleType

### TypeLiteral

### TypeReference

### UnionType

### Total Count
