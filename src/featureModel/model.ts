import { z } from "zod";

const ChildrenRelationSchema = z.enum(["and", "or", "xor"]);
const ParentRelationSchema = z.enum(["mandatory", "optional", "none"]);

const BaseFeatureSchema = z.object({
  name: z.string(),
  parentRelation: ParentRelationSchema.optional(),
  childrenRelation: ChildrenRelationSchema.optional(),
  x: z.number().optional(),
  y: z.number().optional(),
});

export type Feature = z.infer<typeof BaseFeatureSchema> & {
  children?: Feature[];
};

export const FeatureSchema: z.ZodType<Feature> = BaseFeatureSchema.extend({
  children: z.lazy(() => FeatureSchema.array()).optional(),
});

export const FeatureModelSchema = BaseFeatureSchema.extend({
  children: z.array(FeatureSchema),
  requires: z.array(z.array(z.string())).optional(),
  excludes: z.array(z.array(z.string())).optional(),
});

export type FeatureModel = z.infer<typeof FeatureModelSchema>;
