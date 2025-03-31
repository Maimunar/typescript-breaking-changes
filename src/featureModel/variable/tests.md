# Variable Declaration Tests

Variable Statements have modifiers, a declaration keyword and a list of variable declarations

## Usage

We will have a variable declaration and use it in the client to check if it exists.

## Test Cases

### Modifiers

We have 4 states:

1. No modifiers
2. Export
3. Declare
4. Export Declare

#### Changes

Based on this, we have 4 (states) \* 3 (potential new states) = 12 tests needed to cover changes
We test this with all 3 declaration keywords - 12 \* 3 = 36 tests

### Variable Declaration List

#### Declaration

We have 3 declaration states:

1. Const
2. Let
3. Var

##### Changes

We check the changes between those declaration states - 3 (states) \* 2 (potential new states) \* 4 (modifier states) = 24 tests

#### Variable Declaration

We test addition and removal of variable declaration.
2 tests \* 3 declaration states \* 4 modifier states = 24 tests

##### Name

Name is the same and variables are not ordered so we can not check changing the name.

##### Type

We test adding and removing the type of the variable declaration.
2 tests \* 3 declaration states \* 4 modifier states = 24 tests
For type changes we rely on the type feature model tests.

##### Initializer

We test adding and removing the initializer of the variable declaration.
We fix the expression to be a specific value.
2 tests \* 3 declaration states \* 4 modifier states = 24 tests

## Total

The total number is:
36 (modifiers) + 24 (declaration) + 24 (variable declaration) + 24 (type) + 24 (initializer) = 132 tests
