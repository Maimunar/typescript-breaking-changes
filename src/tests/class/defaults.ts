/*
 *  General Class
 */
export const classStates = {
  export: "export ",
  exportDeclare: "export declare ",
  exportAbstract: "export abstract ",
  exportDeclareAbstract: "export declare abstract ",
  exportDefault: "export default ",
  exportDefaultAbstract: "export default abstract ",
};

export const classStateKeys = Object.keys(
  classStates,
) as (keyof typeof classStates)[];

export const declareKeys: (keyof typeof classStates)[] = [
  "exportDeclare",
  "exportDeclareAbstract",
];

export const abstractKeys: (keyof typeof classStates)[] = [
  "exportAbstract",
  "exportDeclareAbstract",
  "exportDefaultAbstract",
];

export const defaultKeys: (keyof typeof classStates)[] = [
  "exportDefault",
  "exportDefaultAbstract",
];

export const genClass = (members: string[], name: string = "TestClass") => {
  let classString = `class ${name} {\n`;
  members.forEach((member) => {
    classString += `  ${member}\n`;
  });
  classString += `}`;

  return classString;
};

type ParamOperator = "none" | "dotdotdot" | "question" | "initializer";
export const paramOperators: ParamOperator[] = [
  "none",
  "dotdotdot",
  "question",
  "initializer",
];

export const genParam = (operator: ParamOperator, name: string = "param") => {
  switch (operator) {
    case "none":
      return `${name}: number`;
    case "dotdotdot":
      return `...${name}: number[]`;
    case "question":
      return `${name}?: number`;
    case "initializer":
      return `${name} = 1`;
  }
};

export { genConstructor } from "./constructor/defaults";
export {
  genSetter,
  setterStates,
  setterStateKeys,
} from "./setAccessor/defaults";
export {
  genGetter,
  getterStates,
  getterStateKeys,
} from "./getAccessor/defaults";
export {
  genProperty,
  propertyStates,
  propertyStateKeys,
  abstractPropertyStates,
  declaredPropertyStates,
} from "./property/defaults";
export { genMethod, methodStates, methodStateKeys } from "./method/defaults";
