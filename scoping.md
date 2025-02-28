### Overview

In this document I will briefly discuss the scoping decisions I will make for the project.
I will also describe any findings.

### Decisions

- I am not considering Decorators at all
- Whenever the children relation in a feature model is "and", the elements are ordered, the order is not arbitrary
  - Check if thats always the case

### Findings

#### Enums

- Enums can not be class members
- You can only declare enum with const, optionally
- Modifiers:

  - [x] Declare - yes, but it is a weird pattern, might opt out of it
  - [x] Default - yes, but not in the enum itself, it needs to be in a separate ExportAssignment

- Initializer - technically it can be an expression, but we can just consider the type in the end, that seems to be either a string or a number
