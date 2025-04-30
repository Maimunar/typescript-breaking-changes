export const propertyStates = {
  none: "",
  public: "public ",
  private: "private ",
  protected: "protected ",
  readonly: "readonly ",
  publicReadonly: "public readonly ",
  privateReadonly: "private readonly ",
  protectedReadonly: "protected readonly ",
  static: "static ",
  publicStatic: "public static ",
  privateStatic: "private static ",
  protectedStatic: "protected static ",
  abstract: "abstract ",
  publicAbstract: "public abstract ",
  protectedAbstract: "protected abstract ",
  declare: "declare ",
  privateDeclare: "private declare ",
  publicDeclare: "public declare ",
  protectedDeclare: "protected declare ",
  readonlyStatic: "static readonly ",
  publicReadonlyStatic: "public static readonly ",
  privateReadonlyStatic: "private static readonly ",
  protectedReadonlyStatic: "protected static readonly ",
  readonlyAbstract: "readonly abstract ",
  publicReadonlyAbstract: "public readonly abstract ",
  protectedReadonlyAbstract: "protected readonly abstract ",
  readonlyDeclare: "readonly declare ",
  publicReadonlyDeclare: "public readonly declare ",
  privateReadonlyDeclare: "private readonly declare ",
  protectedReadonlyDeclare: "protected readonly declare ",
  staticDeclare: "static declare ",
  publicStaticDeclare: "public static declare ",
  privateStaticDeclare: "private static declare ",
  protectedStaticDeclare: "protected static declare ",
  abstractDeclare: "abstract declare ",
  publicAbstractDeclare: "public abstract declare ",
  protectedAbstractDeclare: "protected abstract declare ",
  readonlyStaticDeclare: "static readonly declare ",
  publicReadonlyStaticDeclare: "public static readonly declare ",
  privateReadonlyStaticDeclare: "private static readonly declare ",
  protectedReadonlyStaticDeclare: "protected static readonly declare ",
};

export const abstractPropertyStates: (keyof typeof propertyStates)[] = [
  "abstract",
  "publicAbstract",
  "protectedAbstract",
  "readonlyAbstract",
  "publicReadonlyAbstract",
  "protectedReadonlyAbstract",
  "abstractDeclare",
  "publicAbstractDeclare",
  "protectedAbstractDeclare",
];

export const declaredPropertyStates: (keyof typeof propertyStates)[] = [
  "declare",
  "privateDeclare",
  "publicDeclare",
  "protectedDeclare",
  "readonlyDeclare",
  "publicReadonlyDeclare",
  "privateReadonlyDeclare",
  "protectedReadonlyDeclare",
  "staticDeclare",
  "publicStaticDeclare",
  "privateStaticDeclare",
  "protectedStaticDeclare",
  "abstractDeclare",
  "publicAbstractDeclare",
  "protectedAbstractDeclare",
  "readonlyStaticDeclare",
  "publicReadonlyStaticDeclare",
  "privateReadonlyStaticDeclare",
  "protectedReadonlyStaticDeclare",
];

export const staticPropertyStates: (keyof typeof propertyStates)[] = [
  "static",
  "publicStatic",
  "privateStatic",
  "protectedStatic",
  "readonlyStatic",
  "publicReadonlyStatic",
  "privateReadonlyStatic",
  "protectedReadonlyStatic",
  "staticDeclare",
  "publicStaticDeclare",
  "privateStaticDeclare",
  "protectedStaticDeclare",
  "readonlyStaticDeclare",
  "publicReadonlyStaticDeclare",
  "privateReadonlyStaticDeclare",
  "protectedReadonlyStaticDeclare",
];

export const publicPropertyKeys: (keyof typeof propertyStates)[] = [
  "public",
  "publicReadonly",
  "publicStatic",
  "publicAbstract",
  "publicDeclare",
  "publicReadonlyStatic",
  "publicReadonlyAbstract",
  "publicReadonlyDeclare",
  "publicStaticDeclare",
  "publicAbstractDeclare",
  "publicReadonlyStaticDeclare",
];

export const readonlyPropertyKeys: (keyof typeof propertyStates)[] = [
  "readonly",
  "publicReadonly",
  "privateReadonly",
  "protectedReadonly",
  "readonlyStatic",
  "publicReadonlyStatic",
  "privateReadonlyStatic",
  "protectedReadonlyStatic",
  "readonlyAbstract",
  "publicReadonlyAbstract",
  "protectedReadonlyAbstract",
  "readonlyDeclare",
  "publicReadonlyDeclare",
  "privateReadonlyDeclare",
  "protectedReadonlyDeclare",
  "readonlyStaticDeclare",
  "publicReadonlyStaticDeclare",
  "privateReadonlyStaticDeclare",
  "protectedReadonlyStaticDeclare",
];

export const propertyStateKeys = Object.keys(
  propertyStates,
) as (keyof typeof propertyStates)[];

export const genProperty = (declared?: boolean) => {
  let propertyString = ` testProperty: number`;

  if (declared) return propertyString + ";\n";

  propertyString += " = 1;\n";
  return propertyString;
};
