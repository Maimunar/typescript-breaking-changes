import { FeatureModel } from "../../model";

export const PropertyDeclaration: FeatureModel = {
  name: "PropertyDeclaration",
  children: [
    {
      name: "modifiers",
      parentRelation: "optional",
      childrenRelation: "or",
      children: [
        {
          name: "readonly",
        },
        {
          name: "abstract",
        },
        {
          name: "static",
        },
        {
          name: "declare",
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
      name: "Type",
      parentRelation: "mandatory",
    },
  ],
};
