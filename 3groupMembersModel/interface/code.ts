import { FeatureModel } from "../../model";

export const InterfaceDeclaration: FeatureModel = {
  name: "InterfaceDeclaration",
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      childrenRelation: "xor",
      children: [
        {
          name: "ExportKeyword",
          children: [
            {
              name: "DefaultKeyword",
              parentRelation: "optional",
            },
          ],
        },
        {
          name: "DeclareKeyword",
        },
      ],
    },
    { name: "name", parentRelation: "mandatory" },
    {
      name: "typeParameters",
      parentRelation: "optional",
      children: [{ name: "type*" }],
    },
    {
      name: "heritageClauses",
      parentRelation: "optional",
      children: [
        {
          name: "heritageClause*",
          children: [
            {
              name: "token",
              childrenRelation: "xor",
              parentRelation: "mandatory",
              children: [
                { name: "ExtendsKeyword" },
                { name: "ImplementsKeyword" },
              ],
            },
            {
              name: "types",
              parentRelation: "mandatory",
              children: [
                {
                  name: "type*",
                  children: [{ name: "ExpressionWithTypeArguments" }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "members",
      children: [
        {
          name: "TypeElement*",
          children: [
            { name: "name", parentRelation: "mandatory" },
            { name: "questionToken", parentRelation: "optional" },
            { name: "type", parentRelation: "mandatory" },
          ],
        },
      ],
    },
  ],
};
