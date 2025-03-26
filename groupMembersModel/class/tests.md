# Class Declaration Tests

A class has modifiers, heritage clauses, names and members.
For this test, we will limit the heritage clauses to 1 (except when testing addition)

## Usage

We will have a class with a single method that we will call in the client.

## Test Cases

### Modifiers

#### States

The class can have the following 12 states:

1. No modifiers
2. Export
3. Declare
4. Abstract
5. Export Declare
6. Export Abstract
7. Declare Abstract
8. Export Declare Abstract
9. Export Default
10. Export Default Abstract
11. Export Default Declare
12. Export Default Declare Abstract

#### Changes

Possible Changes are 12 states \* 11 possible new states = 132 tests
Heritage context can be no heritage, implements or extends, so 132 \* 3 = 396 tests

### Heritage Clauses

#### States

We limit the states to 3:

1. No Heritage
2. Extends 1
3. Implements 1

#### Changes:

We test changes from each state to another, so 3 \* 2 = 6 tests \* 12 modifier states = 72 tests
We test adding and removing heritage, so 2 tests \* 2 heritage states (extends, implements) \* 12 modifier states = 48 tests

### Name

The name is the same, but we test adding and removing the class declaration
2 tests \* 12 modifier states \* 3 heritage states = 72 tests

### Members

We test adding and removing each member. For adding we check if it affects the method we called initially in the client. For removal we update the client to actually use the declaration.
We have 2 tests \* 5 declaration elements \* 12 modifier states \* 3 heritage states = 360 tests

For the tests for each member we consider the documents inside the folders and give the total here.
Consider the following contexts:
We will not consider heritage because we are not testing it extensively here.
Modifiers = 12 states

1. Constructor - 672 tests
2. Getter - 864 tests
3. Method - 20724 tests
4. Property - 48384 tests
5. Setter - 1056 tests

## Total

In total we have:
Class Itself: 396 (modifiers) + 48 (heritage) + 72 (name) + 360 (members) = 885 tests
Class + Members: 885 + 672 + 864 + 20724 + 48384 + 1056 = 71585 tests
