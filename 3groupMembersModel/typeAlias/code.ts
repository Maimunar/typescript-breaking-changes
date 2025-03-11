import { FeatureModel } from "../../model";

export const TypeAliasDeclaration: FeatureModel = {
  name: "TypeAliasDeclaration",
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      children: [
        { name: "ExportKeyword", parentRelation: "optional" },
        { name: "DeclareKeyword", parentRelation: "optional" },
      ],
    },
    {
      name: "name",
      parentRelation: "mandatory",
    },
    { name: "type", parentRelation: "mandatory" },
  ],
};
