import { FeatureModel } from "../../model";

export const Type: FeatureModel = {
  name: "Type",
  childrenRelation: "xor",
  children: [
    {
      name: "BuildType",
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
                  name: "BuildType*",
                },
              ],
            },
            {
              name: "returnType",
              parentRelation: "mandatory",
              childrenRelation: "xor",
              children: [
                {
                  name: "BuildType",
                },
                {
                  name: "TypePredicate",
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
                              name: "BuildType",
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
                  name: "BuildType",
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
              name: "BuildType",
              parentRelation: "mandatory",
            },
          ],
        },
        {
          name: "ParenthesizedType",
          children: [
            {
              name: "BuildType",
              parentRelation: "mandatory",
            },
          ],
        },
        {
          name: "TypeReference",
          children: [
            {
              name: "BuildType",
              parentRelation: "optional",
            },
          ],
        },
        {
          name: "TupleType",
          children: [
            {
              name: "BuildType*",
              parentRelation: "mandatory",
            },
          ],
        },
        {
          name: "UnionType",
          children: [
            {
              name: "BuildType",
              parentRelation: "mandatory",
            },
            {
              name: "secondBuildType",
              parentRelation: "mandatory",
            },
          ],
        },
        {
          name: "IntersectionType",
          children: [
            {
              name: "BuildType",
              parentRelation: "mandatory",
            },
            {
              name: "secondBuildType",
              parentRelation: "mandatory",
            },
          ],
        },
        {
          name: "TypeOperator",
          children: [
            {
              name: "BuildType",
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
    },
    {
      name: "AuxilaryType",
      childrenRelation: "xor",
      children: [
        {
          name: "TypeReference",
          children: [
            {
              name: "typeParameter*",
              parentRelation: "mandatory",
            },
            {
              name: "returnType",
              parentRelation: "optional",
              childrenRelation: "xor",
              children: [
                {
                  name: "BuildType",
                },
                {
                  name: "ConditionalType",
                  children: [
                    {
                      name: "typeParameter",
                      parentRelation: "mandatory",
                    },
                    {
                      name: "extendsConditionalObject",
                      parentRelation: "mandatory",
                      childrenRelation: "xor",
                      children: [
                        {
                          name: "BuildType",
                        },
                        {
                          name: "InferType",
                          children: [
                            {
                              name: "TypeReference",
                              parentRelation: "mandatory",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "ThenType",
                      parentRelation: "mandatory",
                    },
                    {
                      name: "ElseType",
                      parentRelation: "mandatory",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "TypePredicate",
          children: [
            {
              name: "parameterName",
              parentRelation: "mandatory",
            },
            {
              name: "BuildType",
              parentRelation: "mandatory",
            },
          ],
        },
      ],
    },
  ],
};
