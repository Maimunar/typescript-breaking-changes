import { defaults as arrayDefaults } from "./defaults";
import {
  defaults as generalDefaults,
  defaultsKeys,
  typeKeys,
} from "../defaults";
import fs from "fs";

let testCount = 0;
const context = "src/tests/types/ArrayType/raw";

const formatValue = (value: unknown) => {
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "object") return JSON.stringify(value);

  return value;
};

const printAddTest = (
  testKey: (typeof defaultsKeys)[number],
  constructorKey: (typeof typeKeys)[number],
) => {
  let content = "";
  const generalRawValue = generalDefaults[testKey][constructorKey];
  const generalValue = formatValue(generalRawValue);
  content += `const ${testKey}With${constructorKey}: GeneralDefaults["${testKey}"]["${constructorKey}"] = ${generalValue};\n`;

  content += `const AddArrayTypeTo${testKey}With${constructorKey}: ArrayDefaults["${testKey}"]["${constructorKey}"] = ${generalValue};\n\n`;
  return content;
};

const printRemoveTest = (
  testKey: (typeof defaultsKeys)[number],
  constructorKey: (typeof typeKeys)[number],
) => {
  let content = "";
  const arrayRawValue = arrayDefaults[testKey][constructorKey];
  const arrayValue = formatValue(arrayRawValue);
  content += `const ArrayType${testKey}With${constructorKey}: ArrayDefaults["${testKey}"]["${constructorKey}"] = ${arrayValue};\n`;

  content += `const RemoveArrayTypeFrom${testKey}With${constructorKey}: GeneralDefaults["${testKey}"]["${constructorKey}"] = ${arrayValue};\n\n`;
  return content;
};

const printTests = () => {
  const filenames = [`${context}/addArray.ts`, `${context}/removeArray.ts`];

  const c = `import { Defaults as GeneralDefaults } from "../../defaults";
import { Defaults as ArrayDefaults } from "../defaults"\n\n`;
  const contents = [c, c]; // Add, Remove

  for (const testKey of defaultsKeys) {
    contents[0] += `// ${testKey}\n\n`;
    contents[1] += `// ${testKey}\n\n`;
    for (const constructorKey of typeKeys) {
      contents[0] += printAddTest(testKey, constructorKey);
      testCount += 2;
      contents[1] += printRemoveTest(testKey, constructorKey);
      testCount += 2;
    }
  }

  for (let i = 0; i < filenames.length; i++) {
    fs.writeFile(filenames[i], contents[i], (err) => {
      if (err) console.log(err);
    });
  }
  return { testCount };
};

const r = printTests();
console.log(r);
