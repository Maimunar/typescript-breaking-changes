# Test Design

## Usage

We create 2 files - v1, v2

## Design

There are no params in getters.
We test:

1. Adding a getter
2. Removing a getter

# Tests

We have 96 tests and 6 BCs.

# Analysis

1. Removing a getter is a BC only if the getter removed is public or protected
