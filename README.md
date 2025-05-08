# Breaking Changes in Typescript

This project goes over the process of determining the breaking changes in Typescript

## Determining the Feature Model

The Feature Model elements are directly extracted from the [typescript compiler](https://github.com/microsoft/TypeScript/blob/main/src/compiler/parser.ts) of Microsoft.
The model of the Feature Model itself is described in `model.ts` and is written in this way to be compliant with the [Feature Model visualizer](https://github.com/Maimunar/feature-model-visualizer) I created.

### Docs

The releveant doc for this part is found in `docs/scoping.md` and explains the exploratory research and scoping decisions done to help with the next steps

## Determining the Test Case count

Under the `src/featureModel` directory, all declarations are found.
In each one, a `tests.md` file can be found, that theorises on the Test Count

### Docs

The test cases count guidelines are described in `docs/testCountGuidelines.md`

## Generating Tests

All declarations have their own directory under `src/tests`.
The directories have a simple structure:
- `defaults.ts` - the building blocks of the constructor
- `constructor.ts` - the generator of tests for the declaration. Run this file in order to reproduce tests
- `BCs.md` - all Breaking Changes listed
- `analysis.md` - analysis of the information presented
- `tests/` - the tests done for the declaration
- `raw/` - an output folder for the constructor. Often is not present

There have been a total of 40740 Tests written and 17762 BCs found.
