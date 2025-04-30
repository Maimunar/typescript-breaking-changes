import fs from "fs";
import {
  genClass,
  classStates,
  classStateKeys,
  genMethod,
  declareKeys,
  abstractKeys,
  defaultKeys,
} from "./defaults";

let testCount = 0;
const context = "src/tests/class/raw";
const files = ["v1.ts", "v2.ts", "v1.client.ts", "v2.client.ts"];
const filenames: string[] = [];
const contents: string[] = [];

const printClient = (
  name: string,
  defaultImport: boolean = false,
  usable: boolean = true,
): [string, string] => {
  const contents = [];
  for (const version of ["v1", "v2"]) {
    let content = "";
    if (defaultImport) content += `import TestClass from "./${name}.${version}";\n\n`;
    else content += `import { TestClass } from "./${name}.${version}";\n\n`;

    // Inherit
    content += `class TestClassChild extends TestClass { }\n`;

    // Use
    if (usable) {
      content += `const testClass = new TestClass();\n`;
      content += `testClass.testMethod();\n`;
    }

    contents.push(content);
  }

  return [contents[0], contents[1]];
};

const printTest = (
  name: string,
  v1Content: string,
  v2Content: string,
  v1Client: string,
  v2Client: string,
) => {
  const localCtx = `${context}/${name}`;

  if (!fs.existsSync(localCtx)) {
    fs.mkdirSync(localCtx);
  }

  files.forEach((f) => filenames.push(`${localCtx}/${name}.${f}`));
  contents.push(v1Content);
  contents.push(v2Content);
  contents.push(v1Client);
  contents.push(v2Client);
};

const printChangeStates = () => {
  for (const classKey of classStateKeys) {
    for (const secondaryClassKey of classStateKeys) {
      const name = `changeState_${classKey}_To_${secondaryClassKey}`;
      if (classKey == secondaryClassKey) continue;

      const v1Content =
        classStates[classKey] +
        genClass([genMethod(declareKeys.includes(classKey))]);
      const v2Content =
        classStates[secondaryClassKey] +
        genClass([genMethod(declareKeys.includes(classKey))]);
      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classKey),
        !abstractKeys.includes(classKey),
      );
      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printAddClass = () => {
  for (const classKey of classStateKeys) {
    const name = "addClass_" + classKey;

    const v1Content = "";
    const v2Content =
      classStates[classKey] +
      genClass([genMethod(declareKeys.includes(classKey))]);

    const [v1Client, v2Client] = ["", ""];

    printTest(name, v1Content, v2Content, v1Client, v2Client);
    testCount++;
  }
};

const printRemoveClass = () => {
  for (const classKey of classStateKeys) {
    const name = "removeClass_" + classKey;

    const v1Content =
      classStates[classKey] +
      genClass([genMethod(declareKeys.includes(classKey))]);
    const v2Content = "";

    const [v1Client, v2Client] = printClient(
      name,
      defaultKeys.includes(classKey),
      !abstractKeys.includes(classKey),
    );

    printTest(name, v1Content, v2Content, v1Client, v2Client);
    testCount++;
  }
};

const printTests = () => {
  printChangeStates();
  printAddClass();
  printRemoveClass();

  for (let i = 0; i < filenames.length; i++) {
    fs.writeFile(filenames[i], contents[i], (err) => {
      if (err) console.log(err);
    });
  }
  return { testCount };
};

if (!fs.existsSync(context)) {
  fs.mkdirSync(context);
}
const r = printTests();
console.log(r);
