# Function Declaration Tests

A function has modifiers, a name, parameter list and a return type.
We consider states based on the modifiers present.
For modifier changes, we consider a function with no parameters and an explicit return type.
We fix the parameter optional initializer expression to be a specific value.

## Usage

We will invoke the function. For the return types checks, we will also check the type of it at runtime to ensure it is correct.

## Test Count

### Modifiers

#### States

We have 5 states:

1. No modifiers
2. Export
3. Export Async
4. Export Default Async
5. Async
6. Export Default

#### Changes

Based on these changes, we have 6 (states) \* 5 (potential new states) = 30 tests. We test them in a single context, so we have 30 tests.

### Name

The name is always the same, but we have a test of adding and removing the function.
This is 2 tests \* 5 states = 10 tests

### Parameters

Parameters are a list of parameter declarations.
We test a removal and an addition of a parameter in that list.
Removal of a parameter we consider with the 4 operators (incl lack there of), in combination of a specified type as well as an unspecified type (any).
For addition we need to consider the initial parameter state, where the parameter can take all of the above forms, as well as the parameter to add.
Some of the addition cases will be invalid and be described later, for example the initial method can not have the dotdotdot token.
This results in:

- Removal - 4 (operators) \* 2 (types) \* 5 (states) = 40 tests
- Addition - 3 (initial operators - ... token) \* 2 (initial types) \* 3 (new operators) \* 2 (new types) \* 5 (states) = 180 tests

#### Parameter

##### Operator

For the operator, we consider the 4 states:

1. No operator
2. dotdotdot token
3. question token
4. initializer

Changes are considered to be 4 (states) \* 3 (potential new states) \* 2 (type or no type)= 24 tests

##### Name

Since the parameters are positional, we test name changes.
This is 1 (change) _ 4 (states) _ 2 (type or no type) = 8 tests

##### Type

We consider types changed based on the types test cases. For addition of a type, we consider the type changed from any to that type, and for removal of a type, we consider the type changing from the previous type to any.
This is probably not tested here, but in the types model

### Return Type

For the return type, we rely on the types model to test the changes.
They are not tested here.

## Total

The total test count is :
30 (modifiers) + 10 (name) + 40 (parameters removal) + 180 (parameters addition) + 24 (parameter operator) + 8 (parameter name) = 292 tests
