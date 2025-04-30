# Test Design

## Usage

We create 2 files - v1, v2

## Design

We test:

1. Changing states
2. Adding a method - different name
3. Adding a method - same name
4. Removing a method
5. Adding a param
6. Removing a param

# Tests

We have 2259 tests and 422 BCs

# Analysis

1. Moving from a public state to a protected/private one and from a protected state to a private one is a BC
2. Adding and removing static is a BC
3. Adding and removing abstract is a BC
4. No accessibility keyword is equal to private
5. Although async results in a different return type, adding the keyword is not a BC
6. Removing a public or protected method is a BC.
7. Adding a type of a method with the same name is not a BC, but removing it is. You can not have more than 1 implementation
8. Adding a method param is a BC if it does not have a special operator (initializer, optional, rest)
9. Removing a method param is a BC
