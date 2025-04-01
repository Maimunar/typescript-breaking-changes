This file documents the overview of types BCs

### ConstructorType

There are 2184 Tests for ConstructorType.
There are 1181 Breaking Changes found within them, listed in `ConstructorType/BCs.md`

#### Analysis Overview

1.Anything can be converted to any and unknown without resulting in a BC.
2.Literals can be converted to their respective types.
3.Boolean, number, object, string, void and symbol can convert to their own type.
4.Never can convert into anything else.
5.Undefined can be converted to undefined and void (but void can not be converted to undefined)
6.Import, Indexed Access and Type Query types 'inherit' the behaviour of the related primitive type. Changing between them is allowed as long as the primitive type allows it.
