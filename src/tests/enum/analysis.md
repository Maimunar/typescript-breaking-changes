# Test Design

## Usage

We create 2 files - v1, v2
We also create a client that uses the files.

## Design

There are 8 states.
We test changes from each state to another, with a single element for all tests.
We test changing the name of the enum in all 8 states.
We test adding an enum member - with and without an optional initializer (of type string)
We test removing an enum member - with and without an optional initializer (of type string)
We test adding an optional initializer
We test removing an optional initializer
We test changing the initializer from string to number
We test changing the initializer from number to string

# Tests

In total there are 44 Tests and 10 BCs

# Analysis

## States

There are 4 states that break the api and 4 that do not.
4 Breaking states: No modifiers, const, declare, const declare.
Thus, only removing the export keyword is a breaking change.
We will continue the testing with the other 4 states, since the first 4 are not relevant as they can not be used in the client

1. Names - Changing an enum name is always a BC
2. Adding an enum member is never a BC
3. Removing an enum member is always a BC
4. Adding and removing an initializer is not a BC
5. Changing from string initializer to number and vice versa is not a BC
6. Removing export is always a BC
