import { FeatureModel } from "../../model";

export const EnumDeclaration: FeatureModel = {
  name: "EnumDeclaration",
  children: [
    {
      name: "modifiers",
      childrenRelation: "or",
      children: [
        {
          name: "ExportKeyword",
        },
        {
          name: "DeclareKeyword",
        },
        {
          name: "Declaration",
          children: [{ name: "ConstKeyword", parentRelation: "mandatory" }],
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
