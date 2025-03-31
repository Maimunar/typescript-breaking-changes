# Class Property Declaration Tests

## Usage

We will initialize the class and then see if the property is there and has the right value, which we will fix

## Test Cases

### Modifiers

#### States

There are 4 accessibility modifier states:

1. None
2. Public
3. Private
4. Protected

There are 2 ^ 4 = 16 possible combinations of the following modifiers:

1. Readonly
2. Static
3. Abstract
4. Declare

Total states = 16 \* 4 = 64

#### Changes

There are 64 (states) \* 63 (potential new states) = 4032 changes which need to be tested.

### Name

### Type

For the type we rely on the type feature model

## Total

4032 Tests \* 12 class contexts = 48384 tests
