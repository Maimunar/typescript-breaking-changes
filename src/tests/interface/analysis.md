# Test Design

## Usage

We create 2 files - v1, v2
We also create a client that uses the files via invoking the function.

## Design

We find out that states with no export keyword are not collected by the API, thus we test only for states with export.
We also scope heritage out of the tests for both interfaces and classes.

We test:

1. Changing from interface modifier states
2. Adding a member to the interface - with and without question token
3. Removing a member from the interface - with and without question token
4. Changing member name
5. Adding question token
6. Removing question token

# Tests

We have 30 tests and 16 BCs.

# Analysis

Adding or removing the default modifier keyword is always a BC.
Adding a required member is a BC.
Adding an optional member is not a BC.
Removing a member is a BC (optional or not).
Making a member optional is not a BC
Making an optional member required is a BC.
Changing a member name is a BC.
Removing export is a BC
