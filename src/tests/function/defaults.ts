export const functionStates = {
  export: "export ",
  exportAsync: "export async ",
  exportDefault: "export default ",
  exportDefaultAsync: "export default async ",
};

export const functionStateKeys = Object.keys(
  functionStates,
) as (keyof typeof functionStates)[];

const defaultFunctionStateKeys: (keyof typeof functionStates)[] = [
  "exportDefault",
  "exportDefaultAsync",
];

export const isDefaultState = (key: string) =>
  defaultFunctionStateKeys.includes(key as keyof typeof functionStates);

type ParamState =
  | "none"
  | "noOperator"
  | "dotdotdot"
  | "questionToken"
  | "initializer";

export const paramStates: ParamState[] = [
  "none",
  "noOperator",
  "dotdotdot",
  "questionToken",
  "initializer",
];

const clientUseWithParamStateList: ParamState[] = [
  "noOperator",
  "dotdotdot",
  "questionToken",
  "initializer",
];

const clientUseWithoutParamStateList: ParamState[] = [
  "none",
  "dotdotdot",
  "questionToken",
  "initializer",
];

export const isUsedWithParam = (key: ParamState) =>
  clientUseWithParamStateList.includes(key);
export const isUsedWithMoreParams = (key: ParamState) => key === "dotdotdot";
export const isUsedWithoutParam = (key: ParamState) =>
  clientUseWithoutParamStateList.includes(key);

const genParam = (param: ParamState, paramName: string) => {
  switch (param) {
    case "noOperator":
      return `${paramName}:number`;
    case "dotdotdot":
      return `...${paramName}:number[]`;
    case "questionToken":
      return `${paramName}?:number`;
    case "initializer":
      return `${paramName}:number = 1`;
    case "none":
      return "";
  }
};

export const genFn = (
  param: ParamState,
  fnName: string = "a",
  paramName: string = "x",
) => {
  const fnParam = genParam(param, paramName);

  return `function ${fnName}(${fnParam}){  }\n`;
};
