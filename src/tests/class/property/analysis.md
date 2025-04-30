# Test Design

## Usage

We create 2 files - v1, v2

## Design

We test:

1. Adding a property
2. Removing a property
3. Changing state

# Tests

8553 Tests and 2460 BCs

# Analysis

1. Adding a property is not a BC, but removing a (protected/private) property is a BC.
2. Adding and removing the static keyword is a BC.
3. Adding the readonly keyword is a BC, but removing it is not.
4. Adding and removing the abstract and declare keywords is a BC.
5. Accessibility modifiers work as methods
