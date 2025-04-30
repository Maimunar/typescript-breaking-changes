# Test Design

## Usage

We create 2 files - v1, v2

## Design

We dont test adding and removing params because setters have exactly 1 param.
We test:

1. Adding a setter
2. Removing a setter

# Tests

We have 96 tests and 6 BCs.

# Analysis

1. Removing a getter is a BC only if the getter removed is public or protected
