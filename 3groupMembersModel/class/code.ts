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
            {
              name: "GetAccessor",
              children: [
                {
                  name: "modifiers",
                  parentRelation: "optional",
                  childrenRelation: "or",
                  children: [
                    { name: "static" },
                    {
                      name: "accessibilityModifiers",
                      childrenRelation: "xor",
                      children: [
                        { name: "private" },
                        { name: "public" },
                        { name: "protected" },
                      ],
                    },
                  ],
                },
                { name: "name", parentRelation: "mandatory" },
                {
                  name: "type",
                  parentRelation: "optional",
                  children: [{ name: "returnType" }],
                },
              ],
            },
            {
              name: "SetAccessorDeclaration",
              children: [
                {
                  name: "modifiers",
                  parentRelation: "optional",
                  childrenRelation: "or",
                  children: [
                    { name: "static" },
                    {
                      name: "accessibilityModifiers",
                      childrenRelation: "xor",
                      children: [
                        { name: "private" },
                        { name: "public" },
                        { name: "protected" },
                      ],
                    },
                  ],
                },
                { name: "name", parentRelation: "mandatory" },
                {
                  name: "type",
                  parentRelation: "optional",
                  children: [{ name: "returnType" }],
                },
                {
                  name: "parameters",
                  parentRelation: "mandatory",
                  children: [
                    {
                      name: "Parameter*",
                      children: [
                        { name: "name", parentRelation: "mandatory" },
                        { name: "type", parentRelation: "optional" },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "ConstructorDeclaration",
              children: [
                {
                  name: "parameters",
                  parentRelation: "mandatory",
                  children: [
                    {
                      name: "Parameter*",
                      children: [
                        { name: "name", parentRelation: "mandatory" },
                        { name: "type", parentRelation: "optional" },
                        {
                          name: "extraOperator",
                          parentRelation: "optional",
                          childrenRelation: "xor",
                          children: [
                            {
                              name: "dotDotDotToken",
                            },
                            {
                              name: "questionToken",
                            },
                            {
                              name: "initializer",
                              children: [{ name: "Expression" }],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                { name: "returnType", parentRelation: "mandatory" },
              ],
            },
            {
              name: "PropertyDeclaration",
              children: [
                {
                  name: "modifiers",
                  parentRelation: "optional",
                  children: [
                    { name: "readonly", parentRelation: "optional" },
                    { name: "abstract", parentRelation: "optional" },
                    { name: "static", parentRelation: "optional" },
                    { name: "declare", parentRelation: "optional" },
                    {
                      name: "accessibilityModifiers",
                      childrenRelation: "xor",
                      parentRelation: "optional",
                      children: [
                        { name: "private" },
                        { name: "public" },
                        { name: "protected" },
                      ],
                    },
                  ],
                },
                { name: "name", parentRelation: "mandatory" },
                { name: "type", parentRelation: "mandatory" },
              ],
            },
            {
              name: "MethodDeclaration",
              children: [
                {
                  name: "modifiers",
                  parentRelation: "optional",
                  childrenRelation: "or",
                  children: [
                    { name: "abstract" },
                    { name: "static" },
                    { name: "async" },
                    {
                      name: "accessibilityModifiers",
                      childrenRelation: "xor",
                      parentRelation: "optional",
                      children: [
                        { name: "private" },
                        { name: "public" },
                        { name: "protected" },
                      ],
                    },
                  ],
                },
                { name: "name", parentRelation: "mandatory" },
                {
                  name: "parameters",
                  parentRelation: "mandatory",
                  children: [
                    {
                      name: "Parameter*",
                      children: [
                        { name: "name", parentRelation: "mandatory" },
                        { name: "type", parentRelation: "optional" },
                        {
                          name: "extraOperator",
                          parentRelation: "optional",
                          childrenRelation: "xor",
                          children: [
                            { name: "dotDotDotToken" },
                            { name: "questionToken" },
                            {
                              name: "initializer",
                              children: [{ name: "Expression" }],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                { name: "returnType", parentRelation: "mandatory" },
              ],
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
