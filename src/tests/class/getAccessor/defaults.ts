/*
 *  Getter
 */

export const getterStates = {
  none: "",
  static: "static ",
  private: "private ",
  public: "public ",
  protected: "protected ",
  privateStatic: "private static ",
  publicStatic: "public static ",
  protectedStatic: "protected static ",
};

export const staticStates: (keyof typeof getterStates)[] = [
  "static",
  "publicStatic",
  "privateStatic",
  "protectedStatic",
];

export const publicStates: (keyof typeof getterStates)[] = [
  "public",
  "publicStatic",
];

export const getterStateKeys = Object.keys(
  getterStates,
) as (keyof typeof getterStates)[];

export const genGetter = (declared?: boolean, name: string = "testGetter") => {
  let getterString = `get ${name}()`;

  if (declared) return getterString + ";\n";

  getterString += ` {\n    return 1;  }`;

  return getterString;
};
