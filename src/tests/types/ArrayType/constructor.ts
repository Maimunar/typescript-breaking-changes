import { defaults, extraDefaults } from "./defaults";
import fs from "fs";

const formatValue = (value: unknown) => {
  let s = value;
  if (typeof s == "symbol") s = s.toString();
  if (typeof s == "string") s = `"${s}"`;

  return s;
};

const getValue = (key: string) => {
  let testValue = defaults[key as keyof typeof defaults];
  testValue = formatValue(testValue);

  return testValue;
};

const generateTest = (testKey: string, value: unknown, extraKey?: string) => {
  let s = "";
  // Initialization
  s += `\n/*
 * ${extraKey || testKey}
 */\n`;
  s += `\n// Initial State
const ${extraKey || testKey}: Defaults["${testKey}"] = ${value}\n`;
  testCount++;
  // Changing State
  s += `\n// Changing State\n`;

  for (const key in defaults) {
    if (key == testKey) continue;

    s += `const ${extraKey || testKey}To${key}: Defaults["${key}"] = ${value};\n`;
    testCount++;
  }

  return s;
};

const generateTests = (testKey: string, value: unknown): string => {
  // Initialization
  let s = `import { Defaults } from "../defaults";\n`;
  if (testKey in extraDefaults) {
    for (const extraData of extraDefaults[
      testKey as keyof typeof extraDefaults
    ]) {
      const [extraKey, rawExtraValue] = extraData;
      const extraValue = formatValue(rawExtraValue);
      // Initialization
      s += generateTest(testKey, extraValue, extraKey as string);
    }
  } else {
    s += generateTest(testKey, value);
  }
  return s;
};

const context = "src/tests/types/ConstructorType/raw";
let testCount = 0;

const printTests = () => {
  for (const testKey in defaults) {
    const filename = `${context}/${testKey}.ts`;
    const testValue = getValue(testKey);

    const s = generateTests(testKey, testValue);
    fs.writeFile(filename, s, (err) => {
      if (err) console.log(err);
    });
  }
  console.log(testCount, "Tests Written");
};

printTests();
