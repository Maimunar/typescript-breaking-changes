import fs from "fs";
import {
  isDefaultState,
  genInterface,
  interfaceStates,
  interfaceStateKeys,
} from "./defaults";

let testCount = 0;
const context = "src/tests/interface/raw";
const files = ["v1.ts", "v2.ts", "v1.client.ts", "v2.client.ts"];
const filenames: string[] = [];
const contents: string[] = [];

const printClient = (
  name: string,
  full: boolean = true,
  empty: boolean = false,
  isDefault: boolean = false,
): [string, string] => {
  const contents = [];
  for (const version of ["v1", "v2"]) {
    let content = "";
    if (isDefault) {
      content += `import TestInterface from "./${name}.${version}";\n\n`;
    } else {
      content += `import { TestInterface } from "./${name}.${version}";\n\n`;
    }

    if (empty) content += `const resEmpty: TestInterface = {};\n`;
    if (full) content += `const resFull: TestInterface = { member: 1};\n`;

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

// Tests
// 1. Change Modifier states
// 2. Adding a member to the interface - with and without question token
// 3. Removing a member from the interface - with and without question token
// 4. Changing member name
// 5. Adding question token
// 6. Removing question token

const printChangeModifiers = () => {
  for (const key of interfaceStateKeys) {
    for (const secondaryKey of interfaceStateKeys) {
      if (key === secondaryKey) continue;

      const name = `changeModifier_${key}_To_${secondaryKey}`;
      const v1Content = interfaceStates[key] + genInterface();
      const v2Content = interfaceStates[secondaryKey] + genInterface();

      const [v1Client, v2Client] = printClient(
        name,
        true,
        false,
        isDefaultState(key),
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printAddMember = () => {
  for (const key of interfaceStateKeys) {
    for (const optional of [true, false]) {
      const name = `add${optional ? "Optional" : "Required"}Member_${key}`;
      const v1Content = interfaceStates[key] + genInterface(false);
      const v2Content =
        interfaceStates[key] + genInterface(true, "member", optional);

      const [v1Client, v2Client] = printClient(
        name,
        false,
        true,
        isDefaultState(key),
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printRemoveMember = () => {
  for (const key of interfaceStateKeys) {
    for (const optional of [true, false]) {
      const name = `remove${optional ? "Optional" : "Required"}Member_${key}`;
      const v1Content =
        interfaceStates[key] + genInterface(true, "member", optional);
      const v2Content = interfaceStates[key] + genInterface(false);

      const [v1Client, v2Client] = printClient(
        name,
        true,
        optional,
        isDefaultState(key),
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printChangeMemberName = () => {
  for (const key of interfaceStateKeys) {
    for (const optional of [true, false]) {
      const name = `change${optional ? "Optional" : "Required"}MemberName_${key}`;
      const v1Content =
        interfaceStates[key] + genInterface(true, "member", optional);
      const v2Content =
        interfaceStates[key] + genInterface(true, "otherMember", optional);

      const [v1Client, v2Client] = printClient(
        name,
        true,
        optional,
        isDefaultState(key),
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printAddRemoveOptional = () => {
  for (const key of interfaceStateKeys) {
    for (const optional of [true, false]) {
      const name = `${optional ? "remove" : "add"}Optional_${key}`;
      const v1Content =
        interfaceStates[key] + genInterface(true, "member", optional);
      const v2Content =
        interfaceStates[key] + genInterface(true, "member", !optional);

      const [v1Client, v2Client] = printClient(
        name,
        true,
        optional,
        isDefaultState(key),
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printTests = () => {
  printChangeModifiers();
  printAddMember();
  printRemoveMember();
  printChangeMemberName();
  printAddRemoveOptional();

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
