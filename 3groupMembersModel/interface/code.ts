import { FeatureModel } from "../../model";

export const EnumDeclaration: FeatureModel = {
  name: "InterfaceDeclaration",
  children: [
    { name: "modifiers" },
    { name: "name" },
    { name: "typeParameters" },
    { name: "heritageClauses" },
    { name: "members" },
  ],
};
