# Class Setter Declaration Tests

## Usage

The setter will be invoked from an initialized class in the client.

## Test Cases

### Modifiers

We have the following accessibility states:

1. None
2. Private
3. Public
4. Protected

We have 2 other states:

1. None
2. Static
   Thus we have 4 \* 2 = 8 states

#### Changes

We have 8 (states) \* 7 (potential new states) = 56 changes

### Name

We test adding and removing the setter declaration
This is 2 tests \* 8 states = 16 tests

### Type

For the type we rely on the type feature model

### Parameters

We test adding an removing a parameter. We have 2 tests \* 8 states = 16 tests

## Total

In total we have:
56 (modifier changes) + 16 (name) + 16 (parameters) = 88 tests
88 \* 12 class contexts = 1056 tests
