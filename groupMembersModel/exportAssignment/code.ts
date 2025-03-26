import { FeatureModel } from "../../model";

export const ExportAssignment: FeatureModel = {
  name: "ExportAssignment",
  children: [{ name: "Expression", parentRelation: "mandatory" }],
};
