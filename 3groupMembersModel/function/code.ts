import { FeatureModel } from "../../model";

export const FunctionDeclaration: FeatureModel = {
  name: "FunctionDeclaration",
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      childrenRelation: "or",
      children: [
        {
          name: "ExportKeyword",
          children: [{ name: "DefaultKeyword", parentRelation: "optional" }],
        },
        { name: "AsyncKeyword" },
      ],
    },
    { name: "name", parentRelation: "mandatory" },
    {
      name: "parameters",
      parentRelation: "mandatory",
      children: [
        {
          name: "Parameter*",
          children: [
            { name: "dotDotDotToken", parentRelation: "optional" },
            { name: "name", parentRelation: "mandatory" },
            { name: "questionToken", parentRelation: "optional" },
            { name: "type", parentRelation: "optional" },
            {
              name: "initializer",
              parentRelation: "optional",
              children: [{ name: "Expression" }],
            },
          ],
        },
      ],
    },
    {
      name: "type",
      parentRelation: "mandatory",
      children: [{ name: "returnType", parentRelation: "mandatory" }],
    },
  ],
};
