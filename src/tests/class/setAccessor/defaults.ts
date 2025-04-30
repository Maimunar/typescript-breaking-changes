/*
 *  Setter
 */

export const setterStates = {
  none: "",
  static: "static ",
  private: "private ",
  public: "public ",
  protected: "protected ",
  privateStatic: "private static ",
  publicStatic: "public static ",
  protectedStatic: "protected static ",
};

export const staticStates: (keyof typeof setterStates)[] = [
  "static",
  "publicStatic",
  "privateStatic",
  "protectedStatic",
];

export const publicStates: (keyof typeof setterStates)[] = [
  "public",
  "publicStatic",
];

export const setterStateKeys = Object.keys(
  setterStates,
) as (keyof typeof setterStates)[];

export const genSetter = (declared?: boolean, name: string = "testSetter") => {
  let setterString = `set ${name}(x:number)`;

  if (declared) return setterString + ";\n";

  setterString += ` {\n    // setter body\n  }`;

  return setterString;
};
