import { FeatureModel } from "../../model";

export const ExportAssignment: FeatureModel = {
  name: "ExportAssignment",
  childrenRelation: "xor",
  children: [{ name: "Expression" }, { name: "Identifier" }],
};
