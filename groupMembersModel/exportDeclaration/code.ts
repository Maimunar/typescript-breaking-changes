import { FeatureModel } from "../../model";

export const ExportDeclaration: FeatureModel = {
  name: "ExportDeclaration",
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      children: [{ name: "isTypeOnly", parentRelation: "mandatory" }],
    },
    {
      name: "exportClause",
      childrenRelation: "xor",
      parentRelation: "mandatory",
      children: [
        {
          name: "NamespaceExport",
          children: [{ name: "name", parentRelation: "optional" }],
        },
        {
          name: "NamedExports",
          children: [
            {
              name: "ExportSpecifier*",
              parentRelation: "mandatory",
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
      children: [{ name: "StringLiteral", parentRelation: "mandatory" }],
    },
  ],
  excludes: [
    [
      "ExportDeclaration.isTypeOnly",
      "ExportDeclaration.exportClause.NamedExports.ExportSpecifier*.isTypeOnly",
    ],
  ],
  requires: [
    [
      "ExportDeclaration.exportClause.NamespaceExport",
      "ExportDeclaration.moduleSpecifier",
    ],
  ],
};
