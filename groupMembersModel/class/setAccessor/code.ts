import { FeatureModel } from "../../../model";

export const SetAccessorDeclaration: FeatureModel = {
  name: "SetAccessorDeclaration",
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
        },
      ],
    },
    {
      name: "parameters",
      parentRelation: "mandatory",
      children: [
        {
          name: "Parameter*",
          parentRelation: "mandatory",
          children: [
            {
              name: "name",
              parentRelation: "mandatory",
            },
            {
              name: "type",
              parentRelation: "optional",
            },
          ],
        },
      ],
    },
  ],
};
