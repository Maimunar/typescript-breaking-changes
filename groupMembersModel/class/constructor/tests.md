# Class Constructor Declaration Tests

A constructor consists of parameters and a return type.
The return type is always the class itself.

## Usage

We will create a class and instantiate it in the client. The class will have a property set in the constructor, and we will confirm the property is set correctly

## Test Cases

### Parameters

Parameters is a list, we should test adding and removing parameters, where we add a parameter of all types:
2 tests \* 2 (type and no type) \* 4 (operators) = 16 tests
16 tests \* 12 class contexts = 192 tests

### Parameter

#### Name

The name of a parameter can be changed, since it is positioned
1 test \* 2 (type and no type) \* 4 (operators) = 8 tests \* 12 class contexts = 96 tests

#### Type

The type can be added or removed.
For type changed, we rely on the type feature model tests.
2 tests \* 4 operators = 8 tests \* 12 class contexts = 96 tests

#### ExtraOperator

There are 4 states:

1. No operator
2. dotdotdot token
3. question token
4. initializer

##### Changes

There are 4(states) \* 3(potential new states) = 12 changes
12 changes \* 2 (type and no type) \* 12 class contexts = 288 tests

### Return Type

This is not tested, because the return type is always the class itself

## Total

The total tests are:
192 (parameters) + 96 (parameter name) + 96 (parameter type) + 288 (extra operator) = 672 tests
