import { FeatureModel } from "../../model";

export const ClassDeclaration: FeatureModel = {
  name: "ClassDeclaration",
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      childrenRelation: "or",
      children: [
        {
          name: "export",
          children: [
            {
              name: "default",
              parentRelation: "optional",
            },
          ],
        },
        {
          name: "abstract",
        },
        {
          name: "declare",
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
              childrenRelation: "xor",
              children: [
                {
                  name: "ExtendsKeyword",
                },
                {
                  name: "ImplementsKeyword",
                },
              ],
            },
            {
              name: "types",
              parentRelation: "mandatory",
              children: [
                {
                  name: "type*",
                  parentRelation: "mandatory",
                  children: [
                    {
                      name: "Expression",
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
      name: "members",
      parentRelation: "optional",
      children: [
        {
          name: "ClassElement*",
          parentRelation: "mandatory",
          childrenRelation: "xor",
          children: [
            {
              name: "GetAccessor",
            },
            {
              name: "SetAccessorDeclaration",
            },
            {
              name: "ConstructorDeclaration",
            },
            {
              name: "PropertyDeclaration",
            },
            {
              name: "MethodDeclaration",
            },
          ],
        },
      ],
    },
  ],
  excludes: [
    [
      "ClassDeclaration.modifiers.export.default",
      "ClassDeclaration.modifiers.declare",
    ],
  ],
};
