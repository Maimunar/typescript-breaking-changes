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
            { name: "parameters", children: [{ name: "BuildType*" }] },
            {
              name: "returnType",
              children: [{ name: "BuildType" }, { name: "TypePredicate" }],
              childrenRelation: "xor",
            },
          ],
        },
        {
          name: "TypeLiteral",
          children: [
            {
              name: "PropertySignature*",
              children: [
                {
                  name: "key",
                  childrenRelation: "xor",
                  children: [
                    { name: "StringLiteral" },
                    {
                      name: "IndexSignature",
                      children: [
                        { name: "keyName", parentRelation: "mandatory" },
                        {
                          name: "keyType",
                          parentRelation: "mandatory",
                          childrenRelation: "xor",
                          children: [
                            { name: "string" },
                            { name: "number" },
                            { name: "symbol" },
                            { name: "TemplateLiteralType" },
                          ],
                        },
                      ],
                    },
                    {
                      name: "MappedType",
                      children: [
                        { name: "Property" },
                        {
                          name: "TypeReference",
                          children: [{ name: "BuildType" }],
                        },
                      ],
                    },
                  ],
                  parentRelation: "mandatory",
                },
                { name: "BuildType" },
              ],
            },
          ],
        },
        {
          name: "ArrayType",
          children: [{ name: "BuildType", parentRelation: "mandatory" }],
        },
        {
          name: "TupleType",
          children: [{ name: "BuildType*", parentRelation: "mandatory" }],
        },
        {
          name: "UnionType",
          children: [
            { name: "BuildType", parentRelation: "mandatory" },
            { name: "secondBuildType", parentRelation: "mandatory" },
          ],
        },
        {
          name: "IntersectionType",
          children: [
            { name: "BuildType", parentRelation: "mandatory" },
            { name: "secondBuildType", parentRelation: "mandatory" },
          ],
        },
        { name: "TypeOperator", children: [{ name: "BuildType" }] },
        { name: "ConstructorType" },
      ],
    },
    {
      name: "ConstructorType",
      childrenRelation: "xor",
      children: [
        { name: "LiteralType" },
        {
          name: "TypeKeyword",
          childrenRelation: "xor",
          children: [
            { name: "string" },
            { name: "number" },
            { name: "boolean" },
            { name: "any" },
            { name: "never" },
            { name: "object" },
            { name: "symbol" },
            { name: "undefined" },
            { name: "unknown" },
            { name: "void" },
          ],
        },
        { name: "IndexedAccessType", children: [{ name: "ObjectType" }] },
        { name: "ImportType" },
        { name: "TypeQuery", children: [{ name: "VariableDeclaration" }] },
      ],
    },
    {
      name: "AuxilaryType",
      childrenRelation: "xor",
      children: [
        {
          name: "TypeReference",
          children: [
            { name: "typeParameter*", parentRelation: "mandatory" },
            {
              name: "returnType",
              parentRelation: "optional",
              childrenRelation: "xor",
              children: [
                { name: "BuildType" },
                {
                  name: "ConditionalType",
                  children: [
                    { name: "typeParameter" },
                    {
                      name: "extendsConditionalObject",
                      children: [
                        { name: "BuildType" },
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
                    { name: "ThenType" },
                    { name: "ElseType" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "TypePredicate",
          children: [{ name: "parameterName" }, { name: "BuildType" }],
        },
      ],
    },
  ],
};
