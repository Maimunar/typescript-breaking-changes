# Test Design

## Usage

We create 2 files - v1, v2
We also create a client that uses the files via invoking the function.

## Design

We find out that states with no export keyword are not collected by the API, thus we test only for states with export.
Removing the export keyword is a BC.
We test:

1. Changing modifier states
2. Adding a type declaration
3. Removing a type declaration

# Tests

We have 6 tests and 2 BCs.

# Analysis

- Adding a type alias is not a BC
- Removing a type alias is a BC
- Changing modifier states is not a BC
