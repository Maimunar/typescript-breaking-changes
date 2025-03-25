import { FeatureModel } from "../../../model";

export const GetAccessorDeclaration: FeatureModel = {
  name: "GetAccessor",
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      childrenRelation: "or",
      children: [
        {
          name: "static",
        },
        {
          name: "accessibilityModifiers",
          childrenRelation: "xor",
          children: [
            {
              name: "private",
            },
            {
              name: "public",
            },
            {
              name: "protected",
            },
          ],
        },
      ],
    },
    {
      name: "name",
      parentRelation: "mandatory",
    },
    {
      name: "type",
      parentRelation: "optional",
      children: [
        {
          name: "returnType",
          parentRelation: "mandatory",
        },
      ],
    },
  ],
};
