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
          parentRelation: "mandatory",
          children: [
            { name: "name", parentRelation: "mandatory" },
            { name: "Type", parentRelation: "mandatory" },
            {
              name: "extraOperator",
              parentRelation: "optional",
              childrenRelation: "xor",
              children: [
                { name: "dotDotDotToken" },
                { name: "questionToken" },
                {
                  name: "initializer",
                  children: [
                    { name: "Expression", parentRelation: "mandatory" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Type",
      parentRelation: "mandatory",
      children: [{ name: "returnType", parentRelation: "mandatory" }],
    },
  ],
};
