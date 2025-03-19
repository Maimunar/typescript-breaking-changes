import { FeatureModel } from "../../model";

export const VariableStatement: FeatureModel = {
  name: "VariableStatement",
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      childrenRelation: "or",
      children: [
        {
          name: "ExportKeyword",
        },
        {
          name: "DeclareKeyword",
        },
      ],
    },
    {
      name: "VariableDeclarationList",
      parentRelation: "mandatory",
      children: [
        {
          name: "Declaration",
          parentRelation: "mandatory",
          childrenRelation: "xor",
          children: [
            {
              name: "ConstKeyword",
            },
            {
              name: "LetKeyword",
            },
            {
              name: "VarKeyword",
            },
          ],
        },
        {
          name: "declarations",
          parentRelation: "mandatory",
          children: [
            {
              name: "VariableDeclaration*",
              parentRelation: "mandatory",
              children: [
                {
                  name: "name",
                  parentRelation: "mandatory",
                },
                {
                  name: "type",
                  parentRelation: "optional",
                },
                {
                  name: "initializer",
                  parentRelation: "optional",
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
  ],
};
