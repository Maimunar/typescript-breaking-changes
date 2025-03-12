import { FeatureModel } from "../../model";

export const ImportDeclaration: FeatureModel = {
  name: "ImportDeclaration",
  children: [
    {
      name: "importClause",
      children: [
        { name: "typeClause", parentRelation: "optional" },
        {
          name: "namingConstruct",
          childrenRelation: "or",
          children: [
            { name: "name" },
            {
              name: "namedBinding",
              childrenRelation: "xor",
              children: [
                {
                  name: "NamespaceImport",
                  children: [{ name: "name", parentRelation: "mandatory" }],
                },
                {
                  name: "NamedImports",
                  children: [
                    {
                      name: "element*",
                      children: [
                        { name: "name", parentRelation: "mandatory" },
                        { name: "propertyName", parentRelation: "optional" },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
