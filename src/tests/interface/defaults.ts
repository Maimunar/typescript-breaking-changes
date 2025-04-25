export const interfaceStates = {
  export: "export ",
  exportDeclare: "export declare ",
  exportDefault: "export default ",
};

export const interfaceStateKeys = Object.keys(
  interfaceStates,
) as (keyof typeof interfaceStates)[];

export const isDefaultState = (key: string) => key === "exportDefault";

const genMember = (name: string, optional: boolean) => {
  return `${name}${optional ? "?" : ""}: number`;
};

export const genInterface = (
  hasMember: boolean = true,
  memberName: string = "member",
  optional: boolean = false,
) => {
  const member = hasMember ? genMember(memberName, optional) : "";

  return `interface TestInterface { ${member}}`;
};
