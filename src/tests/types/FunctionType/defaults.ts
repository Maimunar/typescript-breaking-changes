export type VoidFunctionNoParam = () => void;
export const voidFunctionNoParam: VoidFunctionNoParam = () => {};

export {
  defaults as returnDefaults,
  Defaults as ReturnDefaults,
} from "./defaultsReturn";

export {
  defaults as requiredParamDefaults,
  Defaults as RequiredParamDefaults,
} from "./defaultsRequiredParam";

export {
  defaults as optionalParamDefaults,
  Defaults as OptionalParamDefaults,
} from "./defaultsOptionalParam";
