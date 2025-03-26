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
              children: [
                {
                  name: "modifiers",
                  parentRelation: "optional",
                  childrenRelation: "or",
                  children: [
                    {
                      name: "static",
                    },
                    {
                      name: "accessibilityModifiers",
                      childrenRelation: "xor",
                      children: [
                        {
                          name: "private",
                        },
                        {
                          name: "public",
                        },
                        {
                          name: "protected",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "name",
                  parentRelation: "mandatory",
                },
                {
                  name: "type",
                  parentRelation: "optional",
                  children: [
                    {
                      name: "returnType",
                      parentRelation: "mandatory",
                    },
                  ],
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
                    {
                      name: "static",
                    },
                    {
                      name: "accessibilityModifiers",
                      childrenRelation: "xor",
                      children: [
                        {
                          name: "private",
                        },
                        {
                          name: "public",
                        },
                        {
                          name: "protected",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "name",
                  parentRelation: "mandatory",
                },
                {
                  name: "type",
                  parentRelation: "optional",
                  children: [
                    {
                      name: "returnType",
                    },
                  ],
                },
                {
                  name: "parameters",
                  parentRelation: "mandatory",
                  children: [
                    {
                      name: "Parameter*",
                      parentRelation: "mandatory",
                      children: [
                        {
                          name: "name",
                          parentRelation: "mandatory",
                        },
                        {
                          name: "type",
                          parentRelation: "optional",
                        },
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
                      parentRelation: "mandatory",
                      children: [
                        {
                          name: "name",
                          parentRelation: "mandatory",
                        },
                        {
                          name: "type",
                          parentRelation: "optional",
                        },
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
                              children: [
                                {
                                  name: "Expression",
                                  parentRelation: "mandatory",
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
                  name: "returnType",
                  parentRelation: "mandatory",
                },
              ],
            },
            {
              name: "PropertyDeclaration",
              children: [
                {
                  name: "modifiers",
                  parentRelation: "optional",
                  childrenRelation: "or",
                  children: [
                    {
                      name: "readonly",
                    },
                    {
                      name: "abstract",
                    },
                    {
                      name: "static",
                    },
                    {
                      name: "declare",
                    },
                    {
                      name: "accessibilityModifiers",
                      childrenRelation: "xor",
                      children: [
                        {
                          name: "private",
                        },
                        {
                          name: "public",
                        },
                        {
                          name: "protected",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "name",
                  parentRelation: "mandatory",
                },
                {
                  name: "type",
                  parentRelation: "mandatory",
                },
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
                    {
                      name: "abstract",
                    },
                    {
                      name: "static",
                    },
                    {
                      name: "async",
                    },
                    {
                      name: "accessibilityModifiers",
                      childrenRelation: "xor",
                      children: [
                        {
                          name: "private",
                        },
                        {
                          name: "public",
                        },
                        {
                          name: "protected",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "name",
                  parentRelation: "mandatory",
                },
                {
                  name: "parameters",
                  parentRelation: "mandatory",
                  children: [
                    {
                      name: "Parameter*",
                      parentRelation: "mandatory",
                      children: [
                        {
                          name: "name",
                          parentRelation: "mandatory",
                        },
                        {
                          name: "type",
                          parentRelation: "optional",
                        },
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
                              children: [
                                {
                                  name: "Expression",
                                  parentRelation: "mandatory",
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
                  name: "returnType",
                  parentRelation: "mandatory",
                },
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
