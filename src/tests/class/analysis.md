# Test Design

## Usage

We create 2 files - v1, v2

## Design

We drop states without an export keyword.
Abstract members can only exist in an abstract class.
Declare members or members of a declared class need a specific implementation without initialization.

We test:

1. Changes from one state to another.
2. Adding and removing a class.

# Tests

42 tests and 33 BCs

# Analysis

1. Removing the export keyword is a BC
2. Adding a class is never a BC, removing a class always is a BC
3. Adding and removing the declare keyword to a class is always a BC.
4. Adding and removing the default keyword to a (class) export is always a BC.
5. Adding the abstract keyword to a class is a BC, but removing it isnt.

# Total Tests

1. Overall - 42 tests; 33 BCs
2. Constructor - 150 tests; 20 BCs
3. Getter - 96 tests; 6 BCs
4. Setter - 96 tests; 6 BCs.
5. Method - 2259 tests; 422 BCs
6. Property - 8553 Tests; 2460 BCs

Total: 11196 Tests
Total: 2956 BCs
