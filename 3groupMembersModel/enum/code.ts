import { FeatureModel } from "../../model";

export const EnumDeclaration: FeatureModel = {
  name: "EnumDeclaration",
  children: [
    {
      name: "modifiers",
      children: [
        {
          name: "Declaration",
          children: [{ name: "ConstKeyword" }],
          parentRelation: "optional",
        },
        {
          name: "DeclareKeyword",
          parentRelation: "optional",
        },
        {
          name: "ExportKeyword",
          parentRelation: "optional",
        },
      ],
      parentRelation: "optional",
    },
    { name: "name", parentRelation: "mandatory" },
    {
      name: "members",
      children: [
        {
          name: "EnumMember*",
          children: [
            { name: "name", parentRelation: "mandatory" },
            {
              name: "initializer",
              parentRelation: "optional",
              childrenRelation: "xor",
              children: [{ name: "StringLiteral" }, { name: "NumericLiteral" }],
            },
          ],
        },
      ],
      parentRelation: "mandatory",
    },
  ],
};
