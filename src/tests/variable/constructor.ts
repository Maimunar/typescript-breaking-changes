import fs from "fs";
import {
  variableStates,
  variableStateKeys,
  declarationStates,
  declarationStateKeys,
  genVar,
} from "./defaults";

let testCount = 0;
const context = "src/tests/variable/raw";
const files = ["v1.ts", "v2.ts", "v1.client.ts", "v2.client.ts"];
const filenames: string[] = [];
const contents: string[] = [];

const printClient = (name: string, empty?: boolean): [string, string] => {
  const contents = [];
  for (const version of ["v1", "v2"]) {
    if (empty) {
      contents.push("");
      continue;
    }
    let content = `import { testVariable } from "./${name}.${version}";\n\n`;
    // Use
    content += `const res = testVariable();\n`;

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
  for (const varKey of variableStateKeys) {
    for (const decl of declarationStateKeys) {
      for (const secondaryVarKey of variableStateKeys) {
        for (const secondaryDecl of declarationStateKeys) {
          if (varKey == secondaryVarKey && decl == secondaryDecl) continue;
          const name = `changeState_${varKey}_${decl}To${secondaryVarKey}_${secondaryDecl}`;
          const v1Content =
            variableStates[varKey] +
            declarationStates[decl] +
            genVar(true, varKey === "export");
          const v2Content =
            variableStates[secondaryVarKey] +
            declarationStates[secondaryDecl] +
            genVar(true, varKey === "export");
          const [v1Client, v2Client] = printClient(name);

          printTest(name, v1Content, v2Content, v1Client, v2Client);
          testCount++;
        }
      }
    }
  }
};

const printAddVariableDeclaration = () => {
  for (const varKey of variableStateKeys) {
    for (const decl of declarationStateKeys) {
      const name = `addVariable_${varKey}_${decl}`;
      const v1Content = "";
      const v2Content =
        variableStates[varKey] +
        declarationStates[decl] +
        genVar(true, varKey === "export");
      const [v1Client, v2Client] = printClient(name, true);

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printRemoveVariableDeclaration = () => {
  for (const varKey of variableStateKeys) {
    for (const decl of declarationStateKeys) {
      const name = `removeVariable_${varKey}_${decl}`;
      const v1Content =
        variableStates[varKey] +
        declarationStates[decl] +
        genVar(true, varKey === "export");
      const v2Content = "";
      const [v1Client, v2Client] = printClient(name);

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printAddInitializer = () => {
  for (const varKey of variableStateKeys) {
    if (varKey === "exportDeclare") continue;

    for (const decl of declarationStateKeys) {
      if (decl === "const") continue;
      for (const hasType of [true, false]) {
        const name = `addInitializer_${varKey}_${decl}_${hasType ? "WithType" : "NoType"}`;
        const v1Content =
          variableStates[varKey] +
          declarationStates[decl] +
          genVar(hasType, true);
        const v2Content =
          variableStates[varKey] +
          declarationStates[decl] +
          genVar(hasType, false);
        const [v1Client, v2Client] = printClient(name);

        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  }
};

const printRemoveInitializer = () => {
  for (const varKey of variableStateKeys) {
    if (varKey === "exportDeclare") continue;

    for (const decl of declarationStateKeys) {
      if (decl === "const") continue;
      for (const hasType of [true, false]) {
        const name = `removeInitializer_${varKey}_${decl}_${hasType ? "WithType" : "NoType"}`;
        const v1Content =
          variableStates[varKey] +
          declarationStates[decl] +
          genVar(hasType, false);
        const v2Content =
          variableStates[varKey] +
          declarationStates[decl] +
          genVar(hasType, true);
        const [v1Client, v2Client] = printClient(name);

        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  }
};

const printAddType = () => {
  for (const varKey of variableStateKeys) {
    for (const decl of declarationStateKeys) {
      for (const hasInitializer of [true, false]) {
        if (varKey === "exportDeclare" && hasInitializer) continue;
        if (decl === "const" && !hasInitializer) continue;

        const name = `addType_${varKey}_${decl}_${hasInitializer ? "Initialized" : "Uninitialized"}`;
        const v1Content =
          variableStates[varKey] +
          declarationStates[decl] +
          genVar(false, hasInitializer);
        const v2Content =
          variableStates[varKey] +
          declarationStates[decl] +
          genVar(true, hasInitializer);
        const [v1Client, v2Client] = printClient(name);

        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  }
};

const printRemoveType = () => {
  for (const varKey of variableStateKeys) {
    for (const decl of declarationStateKeys) {
      for (const hasInitializer of [true, false]) {
        if (varKey === "exportDeclare" && hasInitializer) continue;
        if (decl === "const" && !hasInitializer) continue;

        const name = `removeType_${varKey}_${decl}_${hasInitializer ? "Initialized" : "Uninitialized"}`;
        const v1Content =
          variableStates[varKey] +
          declarationStates[decl] +
          genVar(true, hasInitializer);
        const v2Content =
          variableStates[varKey] +
          declarationStates[decl] +
          genVar(false, hasInitializer);
        const [v1Client, v2Client] = printClient(name);

        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  }
};

const printTests = () => {
  printChangeStates();
  printAddVariableDeclaration();
  printRemoveVariableDeclaration();
  printAddInitializer();
  printRemoveInitializer();
  printAddType();
  printRemoveType();

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
