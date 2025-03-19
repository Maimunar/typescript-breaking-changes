## Overview

This document wants to set up guidelines for mapping a feature model's elements to how much test cases they need to be explored in the context of breaking changes.
This is just a guideline, and in some cases based on context the test could be reduced or increased.

## Main Method

We take the root and **multiply** the test count of its children recursively to get the total cases

## Feature Model Types

### And Parent

The And Parent adds up the count of test for its children based on the guidelines below

#### Mandatory Child

A mandatory element needs 0-1 test cases:

- _In some cases_, it can be changed, which results in 0-1 test case

#### Optional Child

An optional element needs 2-3 test cases:

- It can be added, if not there, which results in 1 test case
- It can be removed, if there, which results in 1 test case
- _In some cases_, it can be changed, which results in 0-1 test case

The test cases need to be multiplied by 2 for all other optional elements (1 for when the optional element is there and 1 for when it is not)

### Or Parent

In an Or Parent, we need to consider exponential cases, but we do not need to consider the case of all 3 elements not being there

For 2 children with an or, we consider the case of 1 of them being there, and the case of both being there
For 3 children, we consider 1 of them being there, the 3 pairs being there, and all 3 being there
2 => 3
3 => 7
4 => 15
5 => 31
The formula for n children is 2^n - 1

### Xor Parent

An Xor Parent takes in 1 of the elements

### Element\*

### Requires

### Excludes
