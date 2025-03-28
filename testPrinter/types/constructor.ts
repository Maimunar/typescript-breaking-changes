import { defaults } from "../../apiTests/types/constructor/utils/defaults";

// Initialization
console.log(`import Defaults from "./utils/defaults;

// Initial State
const numberLiteral: Defaults["NumberLiteral"] = 1;
`);

// Changing State
for (const key in defaults) {
  console.log(`// NumberLiteral to ${key}
const numberLiteralTo${key}: Defaults["${key}"] = 1;
`);
}
