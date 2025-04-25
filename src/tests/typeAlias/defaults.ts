export const typeAliasStates = {
  export: "export ",
  exportDeclare: "export declare ",
};

export const typeAliasStateKeys = Object.keys(
  typeAliasStates,
) as (keyof typeof typeAliasStates)[];

export const genTypeAlias = () => `type TestAlias = number`;
