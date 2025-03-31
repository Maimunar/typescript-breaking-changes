# Type Alias Declaration Tests

A type alias consists of modifiers, a name and a type

## Usage

We will declare the type alias and connect it to a variable in the client, checking if the type is indeed correct.

## Test Cases

### Modifiers

We have the following 4 states:

1. No modifiers
2. Export
3. Declare
4. Export Declare

#### Changes

Based on this, we have 4 (states) \* 3 (potential new states) = 12 tests needed to cover changes

### Name

The name is the same, but we need to test adding and removing the type declaration
2 tests \* 4 states = 8 tests

### Type

We rely on the type changed events from the type feature model.

## Total

The total number is:
12 (modifiers) + 8 (name) = 20 tests
