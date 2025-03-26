# Class Method Declaration Tests

A method consists of modifiers, a name, parameters and a return Type

## Usage

We will have a class with a single method, invoke the method from the class after initializing it.

## Test Cases

### Modifiers

#### States

There are 4 accessibility modifier states:

1. None
2. Private
3. Public
4. Protected

There are 2 ^ 3 = 8 possible combinations of the following modifiers:

1. No modifiers
2. Static
3. Abstract
4. Async
5. Static Abstract
6. Static Async
7. Abstract Async
8. Static Abstract Async

Total states = 8 \* 4 = 32

#### Changes

We fix the parameters to be the same and we arrive at 32 (states) \* 31 (potential new states) = 992 changes

### Name

We test adding and removing a method. The method add is done with a different name as well as the same one (to test method overloading)
This is 3 tests \* 32 states = 96 tests

### Parameters

We test adding and removing a parameter. 2 tests \* 32 states \* 4 extraOperator states = 256 tests

#### Parameter

The parameters are ordered so name is not needed to be tested.
We rely on type feature model for the parameter type
There are 4 states of parameter based on the extra operator:

1. No extra operator
2. Initializer
3. dotdotdot token
4. questionToken

We test all changes, that are 4 (states) \* 3 (potential new states) = 12 changes
12 \* 32 method states = 384 tests

### Return Type

We rely on the type feature model for them

## Total

In total we have:
992 (modifiers) + 96 (name) + 256 (parameters) + 384 (return type) = 1728 tests
1728 tests \* 12 class contexts = 20736 tests
