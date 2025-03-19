import { FeatureModel } from "../../model";

export const EnumDeclaration: FeatureModel = {
  name: "EnumDeclaration",
  children: [
    {
      name: "modifiers",
      children: [
        {
          name: "ExportKeyword",
          parentRelation: "optional",
        },
        {
          name: "DeclareKeyword",
          parentRelation: "optional",
        },
        {
          name: "Declaration",
          children: [{ name: "ConstKeyword", parentRelation: "mandatory" }],
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
              children: [
                {
                  name: "type",
                  children: [{ name: "string" }, { name: "number" }],
                  childrenRelation: "xor",
                },
              ],
            },
          ],
        },
      ],
      parentRelation: "mandatory",
    },
  ],
};
