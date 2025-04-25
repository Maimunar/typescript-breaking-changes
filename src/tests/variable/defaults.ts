export const variableStates = {
  export: "export ",
  exportDeclare: "export declare ",
};

export const variableStateKeys = Object.keys(
  variableStates,
) as (keyof typeof variableStates)[];

export const declarationStates = {
  const: "const ",
  let: "let ",
  var: "var ",
};

export const declarationStateKeys = Object.keys(
  declarationStates,
) as (keyof typeof declarationStates)[];

export const genVar = (
  hasType: boolean = true,
  hasInitializer: boolean = true,
  name: string = "testVariable",
) => {
  return `${name}${hasType ? ":() => number" : ""}${hasInitializer ? "= () => { return 1; }" : ""};\n`;
};
