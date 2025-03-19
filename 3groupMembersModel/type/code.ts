import { FeatureModel } from "../../model";

export const Type: FeatureModel = {
  name: "Type",
  childrenRelation: "xor",
  x: 522,
  y: 75,
  children: [
    {
      name: "FunctionType",
      x: 196,
      y: 347,
      children: [
        {
          name: "parameters",
          parentRelation: "mandatory",
          x: 123,
          y: 444,
          children: [
            {
              parentRelation: "mandatory",
              name: "Type*",
              x: 122,
              y: 519,
            },
          ],
        },
        {
          name: "returnType",
          parentRelation: "mandatory",
          childrenRelation: "xor",
          x: 205,
          y: 590,
          children: [
            {
              name: "Type",
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
          parentRelation: "mandatory",
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
                      parentRelation: "mandatory",
                      x: 589,
                      y: 680,
                    },
                    {
                      name: "TypeReference",
                      parentRelation: "mandatory",
                      x: 640,
                      y: 737,
                      children: [
                        {
                          name: "Type",
                          parentRelation: "mandatory",
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
              name: "Type",
              parentRelation: "mandatory",
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
          name: "Type",
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
          name: "Type*",
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
          name: "Type",
          x: 780,
          y: 330,
          parentRelation: "mandatory",
        },
        {
          name: "secondType",
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
          name: "Type",
          x: 500,
          y: 540,
          parentRelation: "mandatory",
        },
        {
          name: "secondType",
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
          name: "Type",
          parentRelation: "mandatory",
          x: 278,
          y: 462,
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
              parentRelation: "mandatory",
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
              parentRelation: "mandatory",
              x: 812,
              y: 932,
            },
          ],
        },
      ],
    },
  ],
};
