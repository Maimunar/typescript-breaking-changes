import { FeatureModel } from "../model";

export const MainDeclaration: FeatureModel = {
  name: "SourceFile",
  children: [
    {
      name: "statements",
      parentRelation: "mandatory",
      children: [
        {
          name: "statement*",
          children: [
            { name: "ClassDeclaration" },
            { name: "FunctionDeclaration" },
            { name: "VariableStatement" },
            { name: "InterfaceDeclaration" },
            { name: "EnumDeclaration" },
            { name: "TypeAliasDeclaration" },
            { name: "ImportDeclaration" },
            { name: "ExportAssignment" },
            { name: "ExportDeclaration" },
          ],
          childrenRelation: "xor",
        },
      ],
    },
  ],
};
