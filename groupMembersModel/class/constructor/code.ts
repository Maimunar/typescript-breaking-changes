import { FeatureModel } from "../../../model";

export const ConstructorDeclaration: FeatureModel = {
  name: "ConstructorDeclaration",
  children: [
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
