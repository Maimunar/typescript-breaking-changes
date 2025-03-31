import { FeatureModel } from "../model";

export const TypeAliasDeclaration: FeatureModel = {
  name: "TypeAliasDeclaration",
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      childrenRelation: "or",
      children: [
        {
          name: "ExportKeyword",
        },
        {
          name: "DeclareKeyword",
        },
      ],
    },
    {
      name: "name",
      parentRelation: "mandatory",
    },
    {
      name: "Type",
      parentRelation: "mandatory",
    },
  ],
};
