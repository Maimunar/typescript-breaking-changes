import { defaultsKeys, typeKeys, defaults } from "../defaults";
import fs from "fs";
import {
  optionalParamDefaults,
  requiredParamDefaults,
  returnDefaults,
} from "./defaults";

let testCount = 0;
const context = "src/tests/types/FunctionType/raw";
const filenames: string[] = [
  `${context}/addParameter.ts`,
  `${context}/removeParameter.ts`,
  `${context}/makeParameterOptional.ts`,
  `${context}/makeParameterRequired.ts`,
  `${context}/addFunctionType.ts`,
  `${context}/removeFunctionType.ts`,
];

const formatValue = (value: unknown) => {
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "object") return JSON.stringify(value);

  return value;
};

const printIntro = (
  requiredParam: boolean,
  optionalParam: boolean,
  returnBody: boolean,
  voidFnNoParam: boolean,
) => {
  const imports: string[] = [];
  if (requiredParam) imports.push("RequiredParamDefaults");
  if (optionalParam) imports.push("OptionalParamDefaults");
  if (returnBody) imports.push("ReturnDefaults");
  if (voidFnNoParam) imports.push("VoidFunctionNoParam");

  let content = `import { Defaults as GeneralDefaults } from "../../defaults";\n`;

  content += `import { ${imports.join(", ")} } from "../defaults"`;
  content += `\n/*\n * FunctionType\n */\n\n`;

  return content;
};
// 1. Add parameter
// Initial state - function with no params
// Add all parameters from required parameters
// Add all parameters from optional parameters
const printAddParameter = () => {
  let content = printIntro(true, true, false, true);

  content += "// Initial State\n";
  content += `const FunctionTypeWithNoParams: VoidFunctionNoParam = () => {};\n`;
  content += "FunctionTypeWithNoParams();\n\n";

  testCount++;
  content += "// Changes\n\n";
  for (const testKey of defaultsKeys) {
    content += `// Add Parameter - ${testKey}\n`;
    content += "// Required\n";
    for (const constructorKey of typeKeys) {
      content += `const AddRequiredParam${testKey}${constructorKey}: RequiredParamDefaults["${testKey}"]["${constructorKey}"] = () => {};\n`;
      content += `AddRequiredParam${testKey}${constructorKey}();\n`;

      testCount++;
    }
    content += "\n// Optional\n";

    for (const constructorKey of typeKeys) {
      content += `const AddOptionalParam${testKey}${constructorKey}: OptionalParamDefaults["${testKey}"]["${constructorKey}"] = () => {};\n`;
      content += `AddOptionalParam${testKey}${constructorKey}();\n`;

      testCount++;
    }
  }
  return content;
};

// 2. Remove parameter
// Initial state - all functions from required and optional
// Changes - the function with no params
const printRemoveParameter = () => {
  let content = printIntro(true, true, false, true);

  testCount++;
  for (const testKey of defaultsKeys) {
    content += `// Remove Parameter - ${testKey}\n`;
    content += "// Required\n";
    for (const constructorKey of typeKeys) {
      const arrayValue = requiredParamDefaults[testKey][constructorKey];
      const paramValue = formatValue(defaults[testKey][constructorKey]);
      content += `const FunctionTypeWithRequiredParam${testKey}${constructorKey}: RequiredParamDefaults["${testKey}"]["${constructorKey}"] = ${arrayValue} \n`;
      content += `FunctionTypeWithRequiredParam${testKey}${constructorKey}(${paramValue});\n`;

      content += `const RemoveRequiredParam${testKey}${constructorKey}: VoidFunctionNoParam = ${arrayValue};\n`;
      content += `RemoveRequiredParam${testKey}${constructorKey}(${paramValue});\n\n`;

      testCount++;
    }
    content += "\n// Optional\n";

    for (const constructorKey of typeKeys) {
      const arrayValue = optionalParamDefaults[testKey][constructorKey];
      const paramValue = formatValue(defaults[testKey][constructorKey]);
      content += `const FunctionTypeWithOptionalParam${testKey}${constructorKey}: OptionalParamDefaults["${testKey}"]["${constructorKey}"] = ${arrayValue} \n`;
      content += `FunctionTypeWithOptionalParam${testKey}${constructorKey}(${paramValue});\n`;

      content += `const RemoveOptionalParam${testKey}${constructorKey}: VoidFunctionNoParam = ${arrayValue};\n`;
      content += `RemoveOptionalParam${testKey}${constructorKey}(${paramValue});\n\n`;

      testCount++;
    }
  }
  return content;
};

const printMakeParameterOptional = () => {
  // 3. Making param optional
  // Initial state - parameter from required
  // Changes - same parameter from optional
  let content = printIntro(true, true, false, false);
  for (const testKey of defaultsKeys) {
    content += `// Make Parameter Optional - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const arrayValue = requiredParamDefaults[testKey][constructorKey];
      const paramValue = formatValue(defaults[testKey][constructorKey]);
      content += `const FunctionTypeWithRequiredParam${testKey}${constructorKey}: RequiredParamDefaults["${testKey}"]["${constructorKey}"] = ${arrayValue} \n`;
      content += `FunctionTypeWithRequiredParam${testKey}${constructorKey}(${paramValue});\n`;

      content += `const ChangeRequiredParamToOptional${testKey}${constructorKey}: OptionalParamDefaults["${testKey}"]["${constructorKey}"] = ${arrayValue} \n`;
      content += `ChangeRequiredParamToOptional${testKey}${constructorKey}(${paramValue});\n`;

      testCount++;
    }
  }
  return content;
};

const printMakeParameterRequired = () => {
  // 4. Making param required
  // Initial state - parameter from optional
  // Changes - same parameter from required
  let content = printIntro(true, true, false, false);
  for (const testKey of defaultsKeys) {
    content += `// Make Parameter Optional - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const arrayValue = optionalParamDefaults[testKey][constructorKey];
      const paramValue = formatValue(defaults[testKey][constructorKey]);
      content += `const FunctionTypeWithOptionalParam${testKey}${constructorKey}: OptionalParamDefaults["${testKey}"]["${constructorKey}"] = ${arrayValue} \n`;
      content += `FunctionTypeWithOptionalParam${testKey}${constructorKey}(${paramValue});\n`;
      content += `FunctionTypeWithOptionalParam${testKey}${constructorKey}();\n`;

      content += `const ChangeOptionalParamToRequired${testKey}${constructorKey}: RequiredParamDefaults["${testKey}"]["${constructorKey}"] = ${arrayValue} \n`;
      content += `ChangeOptionalParamToRequired${testKey}${constructorKey}(${paramValue});\n`;
      content += `ChangeOptionalParamToRequired${testKey}${constructorKey}();\n\n`;

      testCount++;
    }
  }

  return content;
};

const printAddFunctionType = () => {
  // 5. Add function type
  // Initial states - all constructor types
  // Changes - function with the same return body
  let content = printIntro(false, false, true, false);

  for (const testKey of defaultsKeys) {
    content += `// Add Function Type - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const value = formatValue(defaults[testKey][constructorKey]);
      content += `const VariableOf${testKey}${constructorKey}: GeneralDefaults["${testKey}"]["${constructorKey}"] = ${value} \n`;

      content += `const AddFunctionType${testKey}${constructorKey}: ReturnDefaults["${testKey}"]["${constructorKey}"] = ${value} \n\n`;

      testCount++;
    }
  }
  return content;
};

const printRemoveFunctionType = () => {
  // 6. Remove function type
  // Initial states - all functions with different return bodies
  // Same types from constructor types
  let content = printIntro(false, false, true, false);
  for (const testKey of defaultsKeys) {
    content += `// Remove Function Type - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const value = formatValue(returnDefaults[testKey][constructorKey]);
      content += `const VariableOf${testKey}${constructorKey}: ReturnDefaults["${testKey}"]["${constructorKey}"] = ${value} \n`;
      content += `VariableOf${testKey}${constructorKey}();\n`;

      content += `const RemoveFunctionType${testKey}${constructorKey}: GeneralDefaults["${testKey}"]["${constructorKey}"] = ${value} \n`;
      content += `RemoveFunctionType${testKey}${constructorKey}();\n\n`;

      testCount++;
    }
  }

  return content;
};

const printTests = () => {
  const content: string[] = [];
  testCount++;

  content.push(printAddParameter());
  content.push(printRemoveParameter());
  content.push(printMakeParameterOptional());
  content.push(printMakeParameterRequired());
  content.push(printAddFunctionType());
  content.push(printRemoveFunctionType());

  for (let i = 0; i < filenames.length; i++) {
    fs.writeFile(filenames[i], content[i], (err) => {
      if (err) console.log(err);
    });
  }
  return { testCount };
};

console.log(printTests());
