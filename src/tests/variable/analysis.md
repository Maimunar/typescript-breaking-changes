# Test Design

## Usage

We create 2 files - v1, v2
We also create a client that uses the files via invoking the function.

## Design

We discard all states without export keyword like all other tests.
Additionally, declare does not allow for an implementation, as it is an ambient context
Finally, we must always have an initalizer for const declarations
We test:

1. Changing modifier states and declaration states (const, let, var)
2. Adding a variable declaration
3. Removing a variable declaration
4. Adding an initializer
5. Removing an initializer
6. Adding type
7. Removing type

# Tests

We have 64 tests and 6 BCs.
There are 18 BCs in the file, but 12 of them are from the client, because the declare keyword wont word with an initializer.

# Analysis

- Removing a variable declaration is a BC
- Everything else is not a BC
  - Declare breaks the api when used in an implemented variable, but this is on a library-level, so we are not concerned with it.
