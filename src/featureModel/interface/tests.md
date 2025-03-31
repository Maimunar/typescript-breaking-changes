# Interface Declaration Tests

An interface has modifiers, a name, heritage and members

## Usage

We will have an interface and implement the interface in the client, checking if everything is indeed working.
The interface will have 1 member (optional and not optional) be tested with and without heritage of a single type (extends).

### Contexts

Heritage - 2 contexts: no heritage, extends
Members - 2 contexts: required member, member with question token
Modifiers - 5 contexts: described below

## Test Cases

### Modifiers

#### States

The interface can have the following 5 states:

1. No modifiers
2. Export
3. Declare
4. Export Declare
5. Export Default

#### Changes

There are 5 (states) \* 4 (potential new states) = 20 tests needed to cover changes
The contexts are 2 \* 2 = 4; so all tests are 20 \* 4 = 80

### Name

The name cant change, but we will check addition and removal of the interface;
2 tests \* 5 states \* 2 heritage \* 2 members = 40 tests

### Heritage

We test addition and removal of heritage, as well as addition and removal of the heritage type
4 tests \* 5 states \* 2 members = 40 tests

### Members

We test addition and removal of members.
2 tests \* 2 heritage \* 5 states = 20 tests

#### Member

We test changing the member name, adding and removing the question token.
For the type, we rely on the types model changed tests.
3 tests \* 2 heritage \* 5 states = 30 tests

## Total

Total tests are:
80 (modifiers) + 40 (name) + 40 (heritage) + 20 (members) + 30 (member) = 210 tests
