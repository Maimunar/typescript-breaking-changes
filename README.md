# Breaking Changes in Typescript

This project goes over the process of determining the breaking changes in Typescript

## Determining the Feature Model

The Feature Model elements are directly extracted from the [typescript compiler](https://github.com/microsoft/TypeScript/blob/main/src/compiler/parser.ts) of Microsoft.
The model of the Feature Model itself is described in `model.ts` and is written in this way to be compliant with the [Feature Model visualizer](https://github.com/Maimunar/feature-model-visualizer) I created.

### Docs

The releveant doc for this part is found in `docs/scoping.md` and explains the exploratory research and scoping decisions done to help with the next steps

## Determining the Test Case count

WIP

### Docs

The test cases count guidelines are described in `docs/testCountGuidelines.md`
