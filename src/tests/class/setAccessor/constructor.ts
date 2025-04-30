import fs from "fs";
import {
  genClass,
  classStates,
  classStateKeys,
  declareKeys,
  setterStates,
  setterStateKeys,
  defaultKeys,
  abstractKeys,
} from "../defaults";
import { staticStates, publicStates, genSetter } from "./defaults";

let testCount = 0;
const context = "src/tests/class/setAccessor/raw";
const files = ["v1.ts", "v2.ts", "v1.client.ts", "v2.client.ts"];
const filenames: string[] = [];
const contents: string[] = [];

const printClient = (
  name: string,
  defaultImport: boolean = false,
  usable: boolean = true,
  hasSetter: boolean = false,
  staticSetter: boolean = false,
): [string, string] => {
  const contents = [];
  for (const version of ["v1", "v2"]) {
    let content = "";
    if (defaultImport)
      content += `import TestClass from "./${name}.${version}";\n\n`;
    else content += `import { TestClass } from "./${name}.${version}";\n\n`;

    // Inherit
    content += `class TestClassChild extends TestClass { }\n`;

    // Use
    if (usable) {
      content += `const testClass = new TestClass();\n`;
      content += `const testClassChild = new TestClassChild();\n`;

      if (hasSetter) {
        if (staticSetter) {
          content += `TestClass.testSetter = 1;\n`;
          content += `TestClassChild.testSetter = 1;\n`;
        } else {
          content += `testClass.testSetter = 1;\n`;
          content += `testClassChild.testSetter = 1;\n`;
        }
      }
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

// 1. Adding a setter
// 2. Removing a setter

const printAddSetter = () => {
  for (const classState of classStateKeys) {
    for (const setterState of setterStateKeys) {
      const name = `AddSetter_${classState}_${setterState}`;
      const v1Content = classStates[classState] + genClass([]);
      const v2Content =
        classStates[classState] +
        genClass([
          setterStates[setterState] +
            genSetter(declareKeys.includes(classState)),
        ]);
      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classState),
        !abstractKeys.includes(classState),
        false,
        staticStates.includes(setterState),
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printRemoveSetter = () => {
  for (const classState of classStateKeys) {
    for (const setterState of setterStateKeys) {
      const name = `RemoveSetter_${classState}_${setterState}`;
      const v1Content =
        classStates[classState] +
        genClass([
          setterStates[setterState] +
            genSetter(declareKeys.includes(classState)),
        ]);
      const v2Content = classStates[classState] + genClass([]);

      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classState),
        !abstractKeys.includes(classState),
        publicStates.includes(setterState),
        staticStates.includes(setterState),
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printTests = () => {
  printAddSetter();
  printRemoveSetter();

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
