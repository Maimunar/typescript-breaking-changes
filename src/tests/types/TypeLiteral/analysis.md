# TypeLiteral

In this document we describe the tests done for type literal type and analyse them

## Tests

We have 7 states:

- No Type Literal
- Type Literal (with 1 property signature with string key)
- Type Literal (with 1 property signature with Mapped Type)
- Type Literal (with index signature of type string)
- Type Literal (with index signature of type number)
- Type Literal (with index signature of type symbol)
- Type Literal (with index signature of type templateliteraltype)

1. We need to check changes between all of them, for all possible buildtypes

Additionally, we need to check:

2. Adding a property signature
   - For all 6 states (except 1.)
   - For all possible property types
   - For a fixed name
   - In an object starting with 1 more item (depending on the state)
3. Removing a property signature
   - For all 6 states
   - Starting with 1 item.
4. Adding a question token
5. Removing a question token

- Same conditions for 4 and 5

## Analysis
