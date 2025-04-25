# Test Design

## Usage

We create 2 files - v1, v2
We also create a client that uses the files.

## Design

If we are doing a namespace export, we must always have a module specifier.
If we have a type export, we can not specify a clause to be a type.
We take this into account and test:

- Adding an export specifier
- Changing the export specifier (alias, type in all contexts)
- changing named export to a namerspace export and vice versa
- adding and removing the type keyword

# Tests

42 tests and 27 BCs

# Analysis

Adding an export specifier is not a BC
Removing an export specifier, namespace export or named export declaration is a BC.
Adding or removing an alias (from clause or a specifier or a namespace) is a BC.
Adding type is not a BC iff types are exported in v1 - usually it is a BC.
Removing type is not a BC
If one can guarantee that when changing the import from a named export to a namspace, we will export atleast the same element types, it is not a BC. Otherwise it is a BC.
