import { FeatureModel } from "../../../model";

export const MethodDeclaration: FeatureModel = {
  name: "MethodDeclaration",
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      childrenRelation: "or",
      children: [
        {
          name: "abstract",
        },
        {
          name: "static",
        },
        {
          name: "async",
        },
        {
          name: "accessibilityModifiers",
          childrenRelation: "xor",
          children: [
            {
              name: "private",
            },
            {
              name: "public",
            },
            {
              name: "protected",
            },
          ],
        },
      ],
    },
    {
      name: "name",
      parentRelation: "mandatory",
    },
    {
      name: "parameters",
      parentRelation: "mandatory",
      children: [
        {
          name: "Parameter*",
          parentRelation: "mandatory",
          children: [
            {
              name: "name",
              parentRelation: "mandatory",
            },
            {
              name: "Type",
              parentRelation: "mandatory",
            },
            {
              name: "extraOperator",
              parentRelation: "optional",
              childrenRelation: "xor",
              children: [
                {
                  name: "dotDotDotToken",
                },
                {
                  name: "questionToken",
                },
                {
                  name: "initializer",
                  children: [
                    {
                      name: "Expression",
                      parentRelation: "mandatory",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "returnType",
      parentRelation: "mandatory",
    },
  ],
};
