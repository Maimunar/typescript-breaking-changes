import fs from "fs";
import {
  genClass,
  genGetter,
  classStates,
  classStateKeys,
  declareKeys,
  getterStates,
  getterStateKeys,
  defaultKeys,
  abstractKeys,
} from "../defaults";
import { publicStates, staticStates } from "./defaults";

let testCount = 0;
const context = "src/tests/class/getAccessor/raw";
const files = ["v1.ts", "v2.ts", "v1.client.ts", "v2.client.ts"];
const filenames: string[] = [];
const contents: string[] = [];

const printClient = (
  name: string,
  defaultImport: boolean = false,
  usable: boolean = true,
  hasGetter: boolean = false,
  staticGetter: boolean = false,
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

      if (hasGetter) {
        if (staticGetter) content += `const res = TestClass.testGetter;\n`;
        else content += `const res = testClass.testGetter;\n`;
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

const printAddGetter = () => {
  for (const classState of classStateKeys) {
    for (const getterState of getterStateKeys) {
      const name = `AddGetter_${classState}_${getterState}`;
      const v1Content = classStates[classState] + genClass([]);
      const v2Content =
        classStates[classState] +
        genClass([
          getterStates[getterState] +
            genGetter(declareKeys.includes(classState)),
        ]);
      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classState),
        !abstractKeys.includes(classState),
        false,
        staticStates.includes(getterState),
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printRemoveGetter = () => {
  for (const classState of classStateKeys) {
    for (const getterState of getterStateKeys) {
      const name = `RemoveGetter_${classState}_${getterState}`;
      const v1Content =
        classStates[classState] +
        genClass([
          getterStates[getterState] +
            genGetter(declareKeys.includes(classState)),
        ]);
      const v2Content = classStates[classState] + genClass([]);

      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classState),
        !abstractKeys.includes(classState),
        publicStates.includes(getterState),
        staticStates.includes(getterState),
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printTests = () => {
  printAddGetter();
  printRemoveGetter();

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
