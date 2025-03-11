import { FeatureModel } from "../../model";

export const VariableStatement: FeatureModel = {
  name: "VariableStatement",
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      children: [
        { name: "ExportKeyword", parentRelation: "optional" },
        { name: "DeclareKeyword", parentRelation: "optional" },
      ],
    },
    {
      name: "VariableDeclarationList",
      parentRelation: "mandatory",
      children: [
        {
          name: "Declaration",
          childrenRelation: "xor",
          parentRelation: "mandatory",
          children: [
            { name: "ConstKeyword" },
            { name: "LetKeyword" },
            { name: "VarKeyword" },
          ],
        },
        {
          name: "declarations",
          parentRelation: "mandatory",
          children: [
            {
              name: "VariableDeclaration*",
              children: [
                {
                  name: "name",
                  parentRelation: "mandatory",
                },
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
      ],
    },
  ],
};
