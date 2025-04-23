# Export Tests

Default Exports Can be with an Expression or an Identifier

## Usage

We will use an identifier with all declarations to test them and invoke that function.
The expression we use will also result in the same declaration.

## Declarations

The declarations are taken from the main file:

- Class
- Function
- TypeAlias
- Variable
- Interface
- Enum

## States

We have 2 options - an identifier or an expression resulting in a declaration.
We also have 6 declarations.
Therefore We have 12 states.

## ExportAssignment

We test if an export is added or removed. 2 tests

## Changes

We will use 1 example per declaration and option combination and see its changes to all other options.
We result in 12 (states) \* 11 (possible new states) = 132 tests

## Total

2 (export) + 132 (export changed) = 134 tests
