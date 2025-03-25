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
              name: "additionalKeyword",
              parentRelation: "optional",
              childrenRelation: "xor",
              children: [
                {
                  name: "DefaultKeyword",
                },
                {
                  name: "DeclareKeyword",
                },
              ],
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
              name: "token",
              parentRelation: "mandatory",
              children: [
                {
                  name: "ExtendsKeyword",
                  parentRelation: "mandatory",
                },
              ],
            },
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
              name: "type",
              parentRelation: "mandatory",
            },
          ],
        },
      ],
    },
  ],
};
