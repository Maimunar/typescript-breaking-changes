# Test Design

## Usage

We create 2 files - v1, v2

## Design

We do it for all class modifier states.
We test parameters for all 4 operators.
We test:

1. Adding a paremeter
2. Removing a parameter
3. Changing a parameter name
4. Changing from 1 parameter operator to another

# Tests

150 tests and 20 BCs

# Analysis

1. Adding and removing a parameter with its rules is following the function analysis in terms of BCs and operators
2. Adding a constructor is not a BC only when the constructor has no parameters or optional parameters/rest operator parameters/parameter with initializer.
3. Removing a constructor is not a BC only when the constructor has no parameters or optional parameters/rest operator parameters/parameter with initializer.
4. Changing a parameter name is not a BC
