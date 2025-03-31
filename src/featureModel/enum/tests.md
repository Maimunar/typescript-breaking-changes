# Enum Tests

Enums consist of members, name and modifiers.
We explore all combinations and come up with all tests.

## Usage

We will use enums in the client by exporting an enum with a single element (outside of the second enum member test) and ensuring that this element prints an identifiable value (exists) in all tests

## Declaration

The declaration can be deleted or a new one can be added, resulting in 2 test cases.

## Modifiers

### States

1.  None
2.  Export
3.  Const
4.  Declare
5.  Export Declare
6.  Export Const
7.  Declare Const
8.  Export Declare Const

As a formula, this is 2^n for n = elements in the (sub)model

### Changes

The changes are the changes from each state to another.
The count of them is 8 (states) \* 7 (possible new states) = 56
We will consider an enum with a single element for all tests

## Name

The name is the same.
If the name changes, this is now a new element, so no tests need to be done here.

## Members

The members are a list.
Adding and removing an Enum Member = 2 test cases \* 8 modifier states = 16 test cases

### EnumMember

Enum Members themselves have elements - name and optional initializer.

#### Name

Changing an element's name - 1 case \* 8 modifiers = 8 tests

#### Initializer

Adding and removing an initializer = 2 cases \* 8 modifiers = 16 tests
Changing an Initializer from string to number and number to string = 2 cases \* 8 modifier states = 16 tests

## Total

2 declaration + 56 modifiers + 16 enum members + 8 member name + (16 + 16) member initializer = 114 test cases
