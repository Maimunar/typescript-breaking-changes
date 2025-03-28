import { defaults } from "../../apiTests/types/ConstructorType/utils/defaults";
import fs from "fs";

// Full Files implementation
// Used this for secondary addition of any types
//const anyDefaults = {
//  NumberAnyType: 2,
//  BooleanAnyType: true,
//  StringAnyType: "two",
//};

const context = "apiTests/types/raw";
for (const testKey in { AnyType: 2 }) {
  let testValue = defaults[testKey as keyof typeof defaults];
  if (typeof testValue == "symbol") testValue = testValue.toString();

  const fn = `${context}/${testKey}.ts`;

  // Initialization
  let s = `import { Defaults } from "./utils/defaults";

// Initial State
const ${testKey}: Defaults["${testKey}"] = ${testValue};

`;
  // Changing State
  for (const key in defaults) {
    s += `const ${testKey}To${key}: Defaults["${key}"] = ${testValue};\n`;
  }

  fs.writeFile(fn, s, (err) => {
    console.log(err);
  });
}
