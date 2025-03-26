import { FeatureModel } from "../../model";

export const Type: FeatureModel = {
  name: "Type",
  childrenRelation: "xor",
  children: [
    {
      name: "FunctionType",
      children: [
        {
          name: "parameters",
          parentRelation: "mandatory",
          children: [
            {
              parentRelation: "mandatory",
              name: "Type*",
            },
          ],
        },
        {
          name: "returnType",
          parentRelation: "mandatory",
          children: [
            {
              name: "Type",
            },
          ],
        },
      ],
    },
    {
      name: "TypeLiteral",
      children: [
        {
          name: "PropertySignature*",
          parentRelation: "mandatory",
          children: [
            {
              name: "key",
              parentRelation: "mandatory",
              childrenRelation: "xor",
              children: [
                {
                  name: "StringLiteral",
                },
                {
                  name: "IndexSignature",
                  children: [
                    {
                      name: "keyName",
                      parentRelation: "mandatory",
                    },
                    {
                      name: "keyType",
                      parentRelation: "mandatory",
                      childrenRelation: "xor",
                      children: [
                        {
                          name: "string",
                        },
                        {
                          name: "number",
                        },
                        {
                          name: "symbol",
                        },
                        {
                          name: "TemplateLiteralType",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "MappedType",
                  children: [
                    {
                      name: "Property",
                      parentRelation: "mandatory",
                    },
                    {
                      name: "TypeReference",
                      parentRelation: "mandatory",
                      children: [
                        {
                          name: "Type",
                          parentRelation: "mandatory",
                        },
                      ],
                    },
                  ],
                },
              ],
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
    {
      name: "ArrayType",
      children: [
        {
          name: "Type",
          parentRelation: "mandatory",
        },
      ],
    },
    {
      name: "ParenthesizedType",
      children: [
        {
          name: "Type",
          parentRelation: "mandatory",
        },
      ],
    },
    {
      name: "TypeReference",
      children: [
        {
          name: "Type",
          parentRelation: "optional",
        },
      ],
    },
    {
      name: "TupleType",
      children: [
        {
          name: "Type*",
          parentRelation: "mandatory",
        },
      ],
    },
    {
      name: "UnionType",
      children: [
        {
          name: "Type",
          parentRelation: "mandatory",
        },
        {
          name: "Type",
          parentRelation: "mandatory",
        },
      ],
    },
    {
      name: "IntersectionType",
      children: [
        {
          name: "Type",
          parentRelation: "mandatory",
        },
        {
          name: "Type",
          parentRelation: "mandatory",
        },
      ],
    },
    {
      name: "TypeOperator",
      children: [
        {
          name: "Type",
          parentRelation: "mandatory",
        },
      ],
    },
    {
      name: "ConstructorType",
      childrenRelation: "xor",
      children: [
        {
          name: "LiteralType",
        },
        {
          name: "TypeKeyword",
          childrenRelation: "xor",
          children: [
            {
              name: "string",
            },
            {
              name: "number",
            },
            {
              name: "boolean",
            },
            {
              name: "any",
            },
            {
              name: "never",
            },
            {
              name: "object",
            },
            {
              name: "symbol",
            },
            {
              name: "undefined",
            },
            {
              name: "unknown",
            },
            {
              name: "void",
            },
          ],
        },
        {
          name: "IndexedAccessType",
          children: [
            {
              name: "ObjectType",
              parentRelation: "mandatory",
            },
          ],
        },
        {
          name: "ImportType",
        },
        {
          name: "TypeQuery",
          children: [
            {
              name: "VariableDeclaration",
              parentRelation: "mandatory",
            },
          ],
        },
      ],
    },
  ],
};
