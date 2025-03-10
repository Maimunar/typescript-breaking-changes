### Overview

In this document I will briefly discuss the scoping decisions I will make for the project.
I will also describe any findings.

### Decisions

- I am not considering Decorators at all
- Whenever the children relation in a feature model is "and", the elements are ordered, the order is not arbitrary
  - Check if thats always the case

### Findings

##### General Checklist for modifiers

- [ ] Readonly Keyword
- [ ] Class Member:
  - [ ] Abstract Keyword
  - [ ] Static Keyword
  - [ ] Accessibility Modifier
- [ ] Async Keyword
- [ ] Declare Keyword
- [ ] Export Keyword
  - [ ] Default Keyword
- [ ] Declaration
  - [ ] Const
  - [ ] Let
  - [ ] Var

#### Main

I started looking into the main declarations. Here are some findings:

- Modules and Namespaces I believe we can leave outside of the scope for this iteration. Even eslint (the main linting utility)'s default configuration gives a clear preference of not using them in favor of es5 modules.
  - The related elements to this are ModuleDeclaration, NamespaceDeclaration and ImportEqualsDeclaration (that requires a namespace as one of its elements)
- This means that the context aspect is quite limited - something can be top-level (in an es5 module), within a class or within a function.
- This leaves us with the following top-level elements to consider in this document:
  1. Class
  2. Function
  3. Variable ( + arrow function )
  4. Interface
  5. Enum
  6. Type Alias (type x = any)
  7. Import (import x, import {x, y as yy}, import \* as z)
  8. Export Assignment (export default x)
  9. Export Declaration (export {x, y as yy})

#### Types

There are the following types in Typescript that are relevant to our case.

```
TypePredicate - (x:any) => x is number
TypeReference - Generic Types
FunctionType - () => void
TypeQuery - typeof x
TypeLiteral - {x: number}
ArrayType - string[]
TupleType - [string]
UnionType - string | number
IntersectionType - string & number
ConditionalType - B extends {x: string} ? string: number
InferType - B extends {x: infer T} ? string: number; only in extends clause of conditional types
TypeOperator - keyof, readonly, unique
IndexedAccessType - type X = B['key']
MappedType - type A = { Property in keyof B: boolean}
LiteralType -"a", 1, true
TemplateLiteralType - type C = { [k: `foo${string}`] : string }
ImportType = type D = import("package").Object
```

#### Enums

- Enums can not be class members
- You can only declare enum with const, optionally
- Modifiers:

  - [x] Declare - yes, but it is a weird pattern, might opt out of it
  - [x] Default - yes, but not in the enum itself, it needs to be in a separate ExportAssignment

- Initializer - technically it can be an expression, but we can just consider the type in the end, that seems to be either a string or a number

#### Interfaces

- Interfaces can not be class members

- Modifiers:

  - Declare Keyword
  - Export Keyword
  - Default Keyword

- TypeParameters are generic types - <T>
- We need to spend a time untangling a type's feature model
