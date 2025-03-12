import { FeatureModel } from "../../model";

export const ExportDeclaration: FeatureModel = {
  name: "ExportDeclaration",
  children: [
    { name: "isTypeOnly", parentRelation: "optional" },
    {
      name: "exportClause",
      childrenRelation: "xor",
      parentRelation: "mandatory",
      children: [
        {
          name: "NamespaceExport",
          children: [{ name: "name", parentRelation: "mandatory" }],
        },
        {
          name: "NamedExports",
          children: [
            {
              name: "ExportSpecifier*",
              children: [
                { name: "name", parentRelation: "mandatory" },
                { name: "isTypeOnly", parentRelation: "optional" },
                { name: "propertyName", parentRelation: "optional" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "moduleSpecifier",
      parentRelation: "optional",
      children: [{ name: "StringLiteral" }],
    },
  ],
};
