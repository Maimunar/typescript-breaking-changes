# Class Getter Declaration Tests

A getter consists of modifiers, name and return type.

## Usage

We will create a class and instantiate it in the client. The class will have a getter which we will invoke to test. The getter will return a value that we will check in the client.

## Test Cases

### Modifiers

We have the following states:

1. No modifiers
2. Static
3. Private
4. Public
5. Protected
6. Static Private
7. Static Public
8. Static Protected

#### Changes

Based on this, we have 8 (states) \* 7 (potential new states) = 56 changes
56 changes \* 12 class contexts = 672 tests

### Name

The name stays the same, but we test adding and removing the getter declaration
2 tests \* 8 states \* 12 class contexts = 192 tests

### Return Type

We rely on the type changed events from the type feature model.
Removing a type is the same as setting is to any, so adding and removing is covered in this way

## Total

In total we have:
672 (modifier changes) + 192 (name) = 864 tests
