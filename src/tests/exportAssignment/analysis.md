# Test Design

## Usage

We create 2 files - v1, v2
We also create a client that uses the files.

## Design

Add Export Assignment - we do not test it because an unexported variable used in the client is already breaking the compiler, so it can not be a BC to add them.

Remove Export Assignment - we test it with Identifier and Expression

Change - we test going from each state to another one.

# Tests

81 tests and 60 BCs

Type alias, variable and enum can not be assigned as an expression

# Analysis

Expression to Identifier and vice versa is allowed if the result is the same, otherwise it is a BC
Interface can be converted to the same type and vice versa, but if it is not the same it is a BC.
Removing an export assignment is always a BC.
