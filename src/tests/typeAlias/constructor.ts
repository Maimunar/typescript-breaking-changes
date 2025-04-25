import fs from "fs";
import { genTypeAlias, typeAliasStates, typeAliasStateKeys } from "./defaults";

let testCount = 0;
const context = "src/tests/typeAlias/raw";
const files = ["v1.ts", "v2.ts", "v1.client.ts", "v2.client.ts"];
const filenames: string[] = [];
const contents: string[] = [];

const printClient = (name: string, full: boolean = true): [string, string] => {
  const contents = [];
  for (const version of ["v1", "v2"]) {
    let content = "";
    if (full) {
      content += `import { TestAlias } from  "./${name}.${version}";\n\n`;
      content += `const res: TestAlias = 1;\n`;
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

// Tests
//1. Changing modifier states
//2. Adding a type declaration
//3. Removing a type declaration

const printChangeModifiers = () => {
  for (const key of typeAliasStateKeys) {
    for (const secondaryKey of typeAliasStateKeys) {
      if (key === secondaryKey) continue;

      const name = `changeModifier_${key}_To_${secondaryKey}`;
      const v1Content = typeAliasStates[key] + genTypeAlias();
      const v2Content = typeAliasStates[secondaryKey] + genTypeAlias();

      const [v1Client, v2Client] = printClient(name);

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printAddTypeAlias = () => {
  for (const key of typeAliasStateKeys) {
    const name = `addTypeAlias_${key}`;
    const v1Content = "";
    const v2Content = typeAliasStates[key] + genTypeAlias();

    const [v1Client, v2Client] = printClient(name, false);

    printTest(name, v1Content, v2Content, v1Client, v2Client);
    testCount++;
  }
};

const printRemoveTypeAlias = () => {
  for (const key of typeAliasStateKeys) {
    const name = `removeTypeAlias_${key}`;
    const v1Content = typeAliasStates[key] + genTypeAlias();
    const v2Content = "";

    const [v1Client, v2Client] = printClient(name, true);

    printTest(name, v1Content, v2Content, v1Client, v2Client);
    testCount++;
  }
};

const printTests = () => {
  printChangeModifiers();
  printAddTypeAlias();
  printRemoveTypeAlias();

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
