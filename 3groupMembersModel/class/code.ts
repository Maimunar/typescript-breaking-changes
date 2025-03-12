import { FeatureModel } from "../../model";

export const ClassDeclaration: FeatureModel = {
  name: "ClassDeclaration",
  children: [
    {
      name: "modifiers",
      childrenRelation: "or",
      parentRelation: "optional",
      children: [
        {
          name: "export",
          children: [{ name: "default", parentRelation: "optional" }],
        },
        { name: "abstract" },
        { name: "declare" },
      ],
    },
    { name: "name", parentRelation: "mandatory" },
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
      parentRelation: "optional",
      children: [
        {
          name: "ClassElement*",
          childrenRelation: "xor",
          children: [
            { name: "StaticBlockDeclaration" },
            {
              name: "AccessorDeclaration",
              childrenRelation: "xor",
              children: [
                { name: "GetAccessorDeclaration" },
                { name: "SetAccessorDeclaration" },
              ],
            },
            { name: "ConstructorDeclaration" },
            { name: "IndexSignatureDeclaration" },
            { name: "PropertyDeclaration" },
            { name: "MethodDeclaration" },
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
