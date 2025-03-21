import { FeatureModel } from "../../model";

export const ClassDeclaration: FeatureModel = {
  name: "ClassDeclaration",
  x: 660,
  y: 92,
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      childrenRelation: "or",
      x: 122,
      y: 171,
      children: [
        {
          name: "export",
          x: 58,
          y: 258,
          children: [
            {
              name: "default",
              parentRelation: "optional",
              x: 58,
              y: 325,
            },
          ],
        },
        {
          name: "abstract",
          x: 203,
          y: 242,
        },
        {
          name: "declare",
          x: 153,
          y: 291,
        },
      ],
    },
    {
      name: "name",
      parentRelation: "mandatory",
      x: 572,
      y: 175,
    },
    {
      name: "heritageClauses",
      parentRelation: "optional",
      x: 383,
      y: 173,
      children: [
        {
          name: "heritageClause*",
          parentRelation: "mandatory",
          x: 384,
          y: 233,
          children: [
            {
              name: "token",
              parentRelation: "mandatory",
              childrenRelation: "xor",
              children: [
                {
                  name: "ExtendsKeyword",
                  x: 223,
                  y: 364,
                },
                {
                  name: "ImplementsKeyword",
                  x: 347,
                  y: 407,
                },
              ],
              x: 322,
              y: 305,
            },
            {
              name: "types",
              parentRelation: "mandatory",
              x: 475,
              y: 301,
              children: [
                {
                  name: "type*",
                  parentRelation: "mandatory",
                  children: [
                    {
                      name: "ExpressionWithTypeArguments",
                      x: 487,
                      y: 457,
                    },
                  ],
                  x: 482,
                  y: 367,
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
      x: 1016,
      y: 171,
      children: [
        {
          name: "ClassElement*",
          parentRelation: "mandatory",
          childrenRelation: "xor",
          x: 1016,
          y: 243,
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
                      x: 875,
                      y: 1085,
                    },
                    {
                      name: "accessibilityModifiers",
                      childrenRelation: "xor",
                      x: 699,
                      y: 1073,
                      children: [
                        {
                          name: "private",
                          x: 799,
                          y: 1173,
                        },
                        {
                          name: "public",
                          x: 718,
                          y: 1211,
                        },
                        {
                          name: "protected",
                          x: 645,
                          y: 1168,
                        },
                      ],
                    },
                  ],
                  x: 765,
                  y: 985,
                },
                {
                  name: "name",
                  parentRelation: "mandatory",
                  x: 890,
                  y: 987,
                },
                {
                  name: "type",
                  parentRelation: "optional",
                  x: 1035,
                  y: 973,
                  children: [
                    {
                      name: "returnType",
                      parentRelation: "mandatory",
                      x: 1037,
                      y: 1073,
                    },
                  ],
                },
              ],
              x: 899,
              y: 882,
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
                      x: 378,
                      y: 647,
                    },
                    {
                      name: "accessibilityModifiers",
                      childrenRelation: "xor",
                      children: [
                        {
                          name: "private",
                          x: 605,
                          y: 727,
                        },
                        {
                          name: "public",
                          x: 492,
                          y: 754,
                        },
                        {
                          name: "protected",
                          x: 429,
                          y: 698,
                        },
                      ],
                      x: 579,
                      y: 643,
                    },
                  ],
                  x: 525,
                  y: 557,
                },
                {
                  name: "name",
                  parentRelation: "mandatory",
                  x: 696,
                  y: 558,
                },
                {
                  name: "type",
                  parentRelation: "optional",
                  children: [
                    {
                      name: "returnType",
                      x: 670,
                      y: 780,
                    },
                  ],
                  x: 755,
                  y: 612,
                },
                {
                  name: "parameters",
                  parentRelation: "mandatory",
                  x: 837,
                  y: 555,
                  children: [
                    {
                      name: "Parameter*",
                      parentRelation: "mandatory",
                      x: 844,
                      y: 655,
                      children: [
                        {
                          name: "name",
                          parentRelation: "mandatory",
                          x: 789,
                          y: 755,
                        },
                        {
                          name: "type",
                          parentRelation: "optional",
                          x: 888,
                          y: 754,
                        },
                      ],
                    },
                  ],
                },
              ],
              x: 750,
              y: 398,
            },
            {
              name: "ConstructorDeclaration",
              x: 188,
              y: 507,
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
                          x: 63,
                          y: 727,
                        },
                        {
                          name: "type",
                          parentRelation: "optional",
                          x: 135,
                          y: 780,
                        },
                        {
                          name: "extraOperator",
                          parentRelation: "optional",
                          childrenRelation: "xor",
                          x: 217,
                          y: 702,
                          children: [
                            {
                              name: "dotDotDotToken",
                              x: 333,
                              y: 765,
                            },
                            {
                              name: "questionToken",
                              x: 255,
                              y: 811,
                            },
                            {
                              name: "initializer",
                              x: 106,
                              y: 837,
                              children: [
                                {
                                  name: "Expression",
                                  parentRelation: "mandatory",
                                  x: 106,
                                  y: 887,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      x: 90,
                      y: 670,
                    },
                  ],
                  x: 88,
                  y: 579,
                },
                {
                  name: "returnType",
                  parentRelation: "mandatory",
                  x: 247,
                  y: 577,
                },
              ],
            },
            {
              name: "PropertyDeclaration",
              x: 498,
              y: 838,
              children: [
                {
                  name: "modifiers",
                  parentRelation: "optional",
                  childrenRelation: "or",
                  children: [
                    {
                      name: "readonly",
                      x: 329,
                      y: 1073,
                    },
                    {
                      name: "abstract",
                      x: 248,
                      y: 1117,
                    },
                    {
                      name: "static",
                      x: 176,
                      y: 1074,
                    },
                    {
                      name: "declare",
                      x: 130,
                      y: 1026,
                    },
                    {
                      name: "accessibilityModifiers",
                      childrenRelation: "xor",
                      x: 442,
                      y: 1011,
                      children: [
                        {
                          name: "private",
                          x: 424,
                          y: 1212,
                        },
                        {
                          name: "public",
                          x: 487,
                          y: 1137,
                        },
                        {
                          name: "protected",
                          x: 317,
                          y: 1162,
                        },
                      ],
                    },
                  ],
                  x: 248,
                  y: 947,
                },
                {
                  name: "name",
                  parentRelation: "mandatory",
                  x: 373,
                  y: 948,
                },
                {
                  name: "type",
                  parentRelation: "mandatory",
                  x: 475,
                  y: 941,
                },
              ],
            },
            {
              name: "MethodDeclaration",
              x: 1263,
              y: 343,
              children: [
                {
                  name: "modifiers",
                  parentRelation: "optional",
                  childrenRelation: "or",
                  children: [
                    {
                      name: "abstract",
                      x: 983,
                      y: 508,
                    },
                    {
                      name: "static",
                      x: 1049,
                      y: 551,
                    },
                    {
                      name: "async",
                      x: 1147,
                      y: 554,
                    },
                    {
                      name: "accessibilityModifiers",
                      childrenRelation: "xor",
                      children: [
                        {
                          name: "private",
                          x: 1035,
                          y: 742,
                        },
                        {
                          name: "public",
                          x: 993,
                          y: 686,
                        },
                        {
                          name: "protected",
                          x: 1112,
                          y: 704,
                        },
                      ],
                      x: 1060,
                      y: 603,
                    },
                  ],
                  x: 1092,
                  y: 444,
                },
                {
                  name: "name",
                  parentRelation: "mandatory",
                  x: 1180,
                  y: 483,
                },
                {
                  name: "parameters",
                  parentRelation: "mandatory",
                  children: [
                    {
                      name: "Parameter*",
                      parentRelation: "mandatory",
                      x: 1268,
                      y: 548,
                      children: [
                        {
                          name: "name",
                          parentRelation: "mandatory",
                          x: 1167,
                          y: 661,
                        },
                        {
                          name: "type",
                          parentRelation: "optional",
                          x: 1222,
                          y: 710,
                        },
                        {
                          name: "extraOperator",
                          parentRelation: "optional",
                          childrenRelation: "xor",
                          children: [
                            {
                              name: "dotDotDotToken",
                              x: 1240,
                              y: 760,
                            },
                            {
                              name: "questionToken",
                              x: 1406,
                              y: 729,
                            },
                            {
                              name: "initializer",
                              children: [
                                {
                                  name: "Expression",
                                  parentRelation: "mandatory",
                                  x: 1342,
                                  y: 857,
                                },
                              ],
                              x: 1341,
                              y: 799,
                            },
                          ],
                          x: 1342,
                          y: 650,
                        },
                      ],
                    },
                  ],
                  x: 1268,
                  y: 448,
                },
                {
                  name: "returnType",
                  parentRelation: "mandatory",
                  x: 1414,
                  y: 449,
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
