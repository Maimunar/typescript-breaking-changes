# Export Declaration Tests

Non-Default Declaration tests consist of a type specifier, an export clause and an optional module specifier

## Usage

We will export a variable and a function with no arguments and call it in the client / check if the variable exists.
For the types, we will export a type of a function and a variable and check if it exists.
For the module specifiers, we will make a local file that exports the relevant files

## isTypeOnly

The export can be a type or not - this can be considered the only modifier.
Additionally, we can not pick an isTypeOnly for the export specifiers if we use NamedExports and the declaration itself is a type declaration.

### States

We have 2 states - a type and a non-type.

### Changes

Thus, we also have 2 changes possible - a type to a non-type and a non-type to a type.
We consider it in the context of a namespace export and a named export (with and without a module specifier)
Resulting in 2 (changes) \* 3 (contexts) = 6 test cases.

## moduleSpecifier

The module specifier is optional for namedExports and mandatory for namespace exports.

### States

We have 2 states - with and without a module specifier.

### Changes

We can change from having a module specifier to not having one and vice versa.
This can only be done in the context of a named export, as a type and as a non-type.
Resulting in 2 (changes) \* 2 (contexts) = 4 test cases.

### exportClause

We have 2 choices - a namespace export and a named export.
This means 2 states and 2 choices of swapping between them
The swap happen in the context of a type and a non-type, with a module-specifier and without one.
Resulting in 2 (changes) \* 2 (type context) \* 2 (module specifier) = 8 test cases.

#### Namespace Export

Module specifier is mandatory for namespace exports.
The alias name is optional.
We have 2 states - with and without an alias name.
We have 2 changes - adding an removing an alias name.
We have 2 contexts - a type export and a general export.
Resulting in 2 (changes) \* 2 (contexts) = 4 test cases.

#### NamedExport

Consists of a list of export specifiers.
We can add and remove an export specifier, in the context with and without types and with and without module specifiers.
Resulting in 2 (changes) \* 2 (type context) \* 2 (module specifier) = 8 test cases.

##### ExportSpecifier

Consists of a name, can be a type or not and an optional alias name.
Type is available only if isTypeOnly is not true for the export itself.
We have 4 states - with and without a type and with and without an alias name.
Context - it can be with our without module specifier, a type declaration or not.
However, it can not be both a type declaration and specifier.

States:

1. no type no alias
2. no type alias
3. type no alias
4. type alias

Context:
A. no type no module specifier
All (12)
B. type no module specifier
1-2, 2-1 (2)
C. no type module specifier
All (12)
D. type module specifier
1-2, 2-1 (2)

Resulting in 12 + 12 + 2 + 2 = 28 test cases.

## Total

All test combined result in 6 + 4 + 8 + 4 + 8 + 28 = 58 test cases.
