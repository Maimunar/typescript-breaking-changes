import { FeatureModel } from "../../model";

export const Type: FeatureModel = {
  name: "Type",
  childrenRelation: "xor",
  x: 522,
  y: 75,
  children: [
    {
      name: "BuildType",
      childrenRelation: "xor",
      x: 343,
      y: 159,
      children: [
        {
          name: "FunctionType",
          x: 196,
          y: 347,
          children: [
            {
              name: "parameters",
              x: 123,
              y: 444,
              children: [
                {
                  name: "BuildType*",
                  x: 122,
                  y: 519,
                },
              ],
            },
            {
              name: "returnType",
              childrenRelation: "xor",
              x: 205,
              y: 590,
              children: [
                {
                  name: "BuildType",
                  x: 250,
                  y: 760,
                },
                {
                  name: "TypePredicate",
                  x: 176,
                  y: 706,
                },
              ],
            },
          ],
        },
        {
          name: "TypeLiteral",
          x: 660,
          y: 288,
          children: [
            {
              name: "PropertySignature*",
              x: 660,
              y: 388,
              children: [
                {
                  name: "key",
                  parentRelation: "mandatory",
                  childrenRelation: "xor",
                  x: 620,
                  y: 500,
                  children: [
                    {
                      name: "StringLiteral",
                      x: 436,
                      y: 604,
                    },
                    {
                      name: "IndexSignature",
                      children: [
                        {
                          name: "keyName",
                          parentRelation: "mandatory",
                          x: 375,
                          y: 888,
                        },
                        {
                          name: "keyType",
                          parentRelation: "mandatory",
                          childrenRelation: "xor",
                          children: [
                            {
                              name: "string",
                              x: 508,
                              y: 993,
                            },
                            {
                              name: "number",
                              x: 572,
                              y: 1041,
                            },
                            {
                              name: "symbol",
                              x: 625,
                              y: 981,
                            },
                            {
                              name: "TemplateLiteralType",
                              x: 402,
                              y: 1040,
                            },
                          ],
                          x: 497,
                          y: 877,
                        },
                      ],
                      x: 445,
                      y: 796,
                    },
                    {
                      name: "MappedType",
                      children: [
                        {
                          name: "Property",
                          x: 589,
                          y: 680,
                        },
                        {
                          name: "TypeReference",
                          x: 640,
                          y: 737,
                          children: [
                            {
                              name: "BuildType",
                              x: 640,
                              y: 790,
                            },
                          ],
                        },
                      ],
                      x: 683,
                      y: 600,
                    },
                  ],
                },
                {
                  name: "BuildType",
                  x: 730,
                  y: 500,
                },
              ],
            },
          ],
        },
        {
          name: "ArrayType",
          x: 370,
          y: 293,
          children: [
            {
              name: "BuildType",
              parentRelation: "mandatory",
              x: 370,
              y: 350,
            },
          ],
        },
        {
          name: "TupleType",
          x: 517,
          y: 285,
          children: [
            {
              name: "BuildType*",
              parentRelation: "mandatory",
              x: 517,
              y: 350,
            },
          ],
        },
        {
          name: "UnionType",
          x: 880,
          y: 251,
          children: [
            {
              name: "BuildType",
              x: 780,
              y: 330,
              parentRelation: "mandatory",
            },
            {
              name: "secondBuildType",
              parentRelation: "mandatory",
              x: 950,
              y: 330,
            },
          ],
        },
        {
          name: "IntersectionType",
          x: 450,
          y: 450,
          children: [
            {
              name: "BuildType",
              x: 500,
              y: 540,
              parentRelation: "mandatory",
            },
            {
              name: "secondBuildType",
              x: 350,
              y: 540,
              parentRelation: "mandatory",
            },
          ],
        },
        {
          name: "TypeOperator",
          x: 278,
          y: 412,
          children: [
            {
              name: "BuildType",
              x: 278,
              y: 462,
            },
          ],
        },
        {
          name: "ConstructorType",
          x: 146,
          y: 272,
        },
      ],
    },
    {
      name: "ConstructorType",
      childrenRelation: "xor",
      x: 875,
      y: 645,
      children: [
        {
          name: "LiteralType",
          x: 779,
          y: 754,
        },
        {
          name: "TypeKeyword",
          childrenRelation: "xor",
          x: 1157,
          y: 862,
          children: [
            {
              name: "string",
              x: 1332,
              y: 910,
            },
            {
              name: "number",
              x: 1220,
              y: 1040,
            },
            {
              name: "boolean",
              x: 1332,
              y: 1067,
            },
            {
              name: "any",
              x: 1202,
              y: 951,
            },
            {
              name: "never",
              x: 1360,
              y: 983,
            },
            {
              name: "object",
              x: 1069,
              y: 960,
            },
            {
              name: "symbol",
              x: 1304,
              y: 1014,
            },
            {
              name: "undefined",
              x: 1114,
              y: 1044,
            },
            {
              name: "unknown",
              x: 1079,
              y: 1001,
            },
            {
              name: "void",
              x: 1272,
              y: 984,
            },
          ],
        },
        {
          name: "IndexedAccessType",
          x: 987,
          y: 833,
          children: [
            {
              name: "ObjectType",
              x: 987,
              y: 888,
            },
          ],
        },
        {
          name: "ImportType",
          x: 894,
          y: 788,
        },
        {
          name: "TypeQuery",
          x: 812,
          y: 837,
          children: [
            {
              name: "VariableDeclaration",
              x: 812,
              y: 932,
            },
          ],
        },
      ],
    },
    {
      name: "AuxilaryType",
      childrenRelation: "xor",
      x: 1335,
      y: 203,
      children: [
        {
          name: "TypeReference",
          x: 1400,
          y: 320,
          children: [
            {
              name: "typeParameter*",
              parentRelation: "mandatory",
              x: 1262,
              y: 379,
            },
            {
              name: "returnType",
              parentRelation: "optional",
              childrenRelation: "xor",
              x: 1416,
              y: 379,
              children: [
                {
                  name: "BuildType",
                  x: 1470,
                  y: 466,
                },
                {
                  name: "ConditionalType",
                  x: 1300,
                  y: 466,
                  children: [
                    {
                      name: "typeParameter",
                      x: 1193,
                      y: 564,
                    },
                    {
                      name: "extendsConditionalObject",
                      children: [
                        {
                          name: "BuildType",
                          x: 1307,
                          y: 710,
                        },
                        {
                          name: "InferType",
                          children: [
                            {
                              name: "TypeReference",
                              parentRelation: "mandatory",
                              x: 1152,
                              y: 770,
                            },
                          ],
                          x: 1152,
                          y: 710,
                        },
                      ],
                      x: 1307,
                      y: 630,
                    },
                    {
                      name: "ThenType",
                      x: 1389,
                      y: 585,
                    },
                    {
                      name: "ElseType",
                      x: 1417,
                      y: 534,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "TypePredicate",
          x: 1200,
          y: 300,
          children: [
            {
              name: "parameterName",
              x: 1131,
              y: 418,
            },
            {
              name: "BuildType",
              x: 950,
              y: 418,
            },
          ],
        },
      ],
    },
  ],
};
