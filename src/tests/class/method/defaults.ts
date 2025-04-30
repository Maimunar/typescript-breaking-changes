/*
 *  Method
 */
export const methodStates = {
  none: "",
  private: "private ",
  public: "public ",
  protected: "protected ",
  static: "static ",
  privateStatic: "private static ",
  publicStatic: "public static ",
  protectedStatic: "protected static ",
  abstract: "abstract ",
  publicAbstract: "public abstract ",
  protectedAbstract: "protected abstract ",
  async: "async ",
  privateAsync: "private async ",
  publicAsync: "public async ",
  protectedAsync: "protected async ",
  staticAsync: "static async ",
  privateStaticAsync: "private static async ",
  publicStaticAsync: "public static async ",
  protectedStaticAsync: "protected static async ",
};

export const asyncStates: (keyof typeof methodStates)[] = [
  "async",
  "privateAsync",
  "publicAsync",
  "protectedAsync",
  "staticAsync",
  "privateStaticAsync",
  "publicStaticAsync",
  "protectedStaticAsync",
];

export const abstractStates: (keyof typeof methodStates)[] = [
  "abstract",
  "publicAbstract",
  "protectedAbstract",
];

export const staticStates: (keyof typeof methodStates)[] = [
  "static",
  "privateStatic",
  "publicStatic",
  "protectedStatic",
  "staticAsync",
  "privateStaticAsync",
  "publicStaticAsync",
  "protectedStaticAsync",
];

export const publicStates: (keyof typeof methodStates)[] = [
  "public",
  "publicStatic",
  "publicAbstract",
  "publicAsync",
  "publicStaticAsync",
];

export const methodStateKeys = Object.keys(
  methodStates,
) as (keyof typeof methodStates)[];

export const genMethod = (
  declared?: boolean,
  async?: boolean,
  params?: string[],
  name: string = "testMethod",
) => {
  let methodString = ` ${name}(`;

  params?.forEach((param, index) => {
    methodString += `${param}`;

    if (index < params.length - 1) methodString += ", ";
  });

  methodString += `) `;

  if (declared) {
    if (async) return methodString + ":Promise<number>;\n";
    return methodString + ":number;\n";
  }

  methodString += ` {\n    return 1\n  }`;

  return methodString;
};
