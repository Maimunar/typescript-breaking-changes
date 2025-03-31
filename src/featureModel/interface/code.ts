import { FeatureModel } from "../model";

export const InterfaceDeclaration: FeatureModel = {
  name: "InterfaceDeclaration",
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      childrenRelation: "or",
      children: [
        {
          name: "ExportKeyword",
          children: [
            {
              parentRelation: "optional",
              name: "DefaultKeyword",
            },
          ],
        },
        {
          name: "DeclareKeyword",
        },
      ],
    },
    {
      name: "name",
      parentRelation: "mandatory",
    },
    {
      name: "heritageClauses",
      parentRelation: "optional",
      children: [
        {
          name: "heritageClause*",
          parentRelation: "mandatory",
          children: [
            {
              name: "types",
              parentRelation: "mandatory",
              children: [
                {
                  name: "Type*",
                  parentRelation: "mandatory",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "members",
      parentRelation: "mandatory",
      children: [
        {
          name: "TypeElement*",
          children: [
            {
              name: "name",
              parentRelation: "mandatory",
            },
            {
              name: "questionToken",
              parentRelation: "optional",
            },
            {
              name: "Type",
              parentRelation: "mandatory",
            },
          ],
        },
      ],
    },
  ],
  excludes: [
    [
      "InterfaceDeclaration.modifiers.ExportKeyword.DefaultKeyword",
      "InterfaceDeclaration.modifiers.DeclareKeyword",
    ],
  ],
};
