# FunctionType

In this document we describe the tests done for function type and analyse them

## Tests

Changing the parameter and return types are described in the other feature models and we will explore it there and take the definitions from there

We test:

1. Adding a parameter
   - no parameters to 1 parameter
   - return type is fixed to void
2. Removing a parameter
   - 1 parameter to no parameters
   - return type is fixed to void
3. Making param optional
4. making optional param required
5. Adding a function type
   - Start with any type and change it to a function where the type is the return type of it
6. Removing a function type
   - remove the function and make its return type the leftout type

This results in 483 Tests and 348 BCs.

## Analysis

### Add a Parameter

Adding a required parameter is always a breaking change.
Adding an optional parameter is never a breaking change.

### Remove a Parameter

Removing a required or an optional parameter is always a breaking change.

### Make a Parameter Optional

Making a required parameter optional is never a breaking change.

### Make a Parameter Required

Making an optional parameter required is always a breaking change.

### Add a Function Type

Adding a function type to the type formulation is always resulting in a Breaking Change

### Remove a Function Type

Removing a function type from the type formulation is almost always resulting in a Breaking Change, with the exception when the resulting type is of type any
