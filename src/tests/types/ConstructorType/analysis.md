### ConstructorType

There are 2184 Tests for ConstructorType.
There are 1181 Breaking Changes found within them, listed in `BCs.md`
Some more tests appeared since we had to create sub-tests for things like the importtype for string, number and boolean.
In addition, AnyType and UnknownType are tested with values for string,number and boolean

#### Tests

For typequeries, import types, indexed access types we tested them with all primitive types (string, number, object, any...)
We also tested any and unknown with values from all primitive types.
All possible changes were tested.
An exception was made for some of the tests for the never type, since never typed variables can not be initialized without using type inference, which limits the realistic usage scenarios.

#### Analysis

This is the analysis on the BCs collected.
The analysis is not done with a mathematical approach, but rather by applying language knowledge to the results.

We find for Import, Indexed Access and Type Query Types that their results are directly related to the related constructor type. Therefore we treat them as the other possible types.

##### Primitive Types:

1. any:
   Conversion to any and unknown is allowed, everything else is a BC.
   Although sometimes conversions to a number/boolean/string were possible, that was not consistent and mostly based on type inference of the value given
2. LiteralType
   a. Boolean Literal - conversion to boolean, any and unknown is allowed, everything else is a BC
   b. String Literal - conversion to string, any and unknown is allowed, everything else is a BC
   c. Number Literal - conversion to number, any and unknown is allowed, everything else is a BC
3. boolean - conversion to boolean, any and unknown is allowed, everything else is a BC
4. never:
   The setup for this was changed, as initializing or invoking anything of type never is almost impossible, except by using the type inference.
   Technically, all conversions from never to anything else would be allowed, so there are no BCs related to never
5. number - conversion to number, any and unknown is allowed, everything else is a BC
6. object - conversion to object, any and unknown is allowed, everything else is a BC
7. string - conversion to string, any and unknown is allowed, everything else is a BC
8. undefined - conversion to undefined, void, any and unknown is allowed, everything else is a BC
9. unknown - conversion to unknown and any is allowed, everything else is a BC.
   Although sometimes conversions to a number/boolean/string were possible, that was not consistent and mostly based on type inference of the value given
10. void - conversion to void, any and unknown is allowed, everything else is a BC
11. symbol - conversion to symbol, any and unknown is allowed, everything else is a BC

##### Conclusion

1.Anything can be converted to any and unknown without resulting in a BC.
2.Literals can be converted to their respective types.
3.Boolean, number, object, string, void and symbol can convert to their own type.
4.Never can convert into anything else.
5.Undefined can be converted to undefined and void (but void can not be converted to undefined)
6.Import, Indexed Access and Type Query types 'inherit' the behaviour of the related primitive type. Changing between them is allowed as long as the primitive type allows it.
