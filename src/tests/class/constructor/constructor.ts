import fs from "fs";
import {
  genClass,
  genConstructor,
  classStates,
  classStateKeys,
  declareKeys,
  abstractKeys,
  defaultKeys,
  genParam,
  paramOperators,
} from "../defaults";

let testCount = 0;
const context = "src/tests/class/constructor/raw";
const files = ["v1.ts", "v2.ts", "v1.client.ts", "v2.client.ts"];
const filenames: string[] = [];
const contents: string[] = [];

const printClient = (
  name: string,
  defaultImport: boolean = false,
  usable: boolean = true,
  constructorParams: string[] = [],
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
      content += `const testClass = new TestClass(`;
      constructorParams.forEach((param, index) => {
        content += `${param}`;

        if (index < constructorParams.length - 1) content += ", ";
      });
      content += `);\n`;
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

const printAddConstructor = () => {
  for (const classKey of classStateKeys) {
    // With 1 parameter and without parameter
    const withoutParameter = () => {
      const name = `addConstructor_withoutParameter_${classKey}`;
      const v1Content = classStates[classKey] + genClass([]);
      const v2Content =
        classStates[classKey] +
        genClass([genConstructor([], declareKeys.includes(classKey))]);
      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classKey),
        !abstractKeys.includes(classKey),
      );
      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    };
    const withParameter = () => {
      const name = `addConstructor_withParameter_${classKey}`;
      const v1Content = classStates[classKey] + genClass([]);
      const v2Content =
        classStates[classKey] +
        genClass([
          genConstructor([genParam("none")], declareKeys.includes(classKey)),
        ]);
      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classKey),
        !abstractKeys.includes(classKey),
      );
      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    };
    withoutParameter();
    withParameter();
  }
};

const printRemoveConstructor = () => {
  for (const classKey of classStateKeys) {
    // With 1 parameter and without parameter
    const withoutParameter = () => {
      const name = `removeConstructor_withoutParameter_${classKey}`;
      const v1Content =
        classStates[classKey] +
        genClass([genConstructor([], declareKeys.includes(classKey))]);
      const v2Content = classStates[classKey] + genClass([]);
      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classKey),
        !abstractKeys.includes(classKey),
      );
      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    };
    const withParameter = () => {
      const name = `removeConstructor_withParameter_${classKey}`;
      const v1Content =
        classStates[classKey] +
        genClass([
          genConstructor([genParam("none")], declareKeys.includes(classKey)),
        ]);
      const v2Content = classStates[classKey] + genClass([]);
      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classKey),
        !abstractKeys.includes(classKey),
        ["1"],
      );
      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    };
    withoutParameter();
    withParameter();
  }
};

const printAddConstructorParameter = () => {
  for (const classKey of classStateKeys) {
    for (const paramOperator of paramOperators) {
      if (declareKeys.includes(classKey) && paramOperator == "initializer")
        continue;

      const name = `addConstructorParameter${paramOperator}_${classKey}`;
      const v1Content =
        classStates[classKey] +
        genClass([genConstructor([], declareKeys.includes(classKey))]);
      const v2Content =
        classStates[classKey] +
        genClass([
          genConstructor(
            [genParam(paramOperator)],
            declareKeys.includes(classKey),
          ),
        ]);
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

const printRemoveConstructorParameter = () => {
  for (const classKey of classStateKeys) {
    for (const paramOperator of paramOperators) {
      if (declareKeys.includes(classKey) && paramOperator == "initializer")
        continue;
      const name = `removeConstructorParameter${paramOperator}_${classKey}`;
      const v1Content =
        classStates[classKey] +
        genClass([
          genConstructor(
            [genParam(paramOperator)],
            declareKeys.includes(classKey),
          ),
        ]);

      const v2Content =
        classStates[classKey] +
        genClass([genConstructor([], declareKeys.includes(classKey))]);

      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classKey),
        !abstractKeys.includes(classKey),
        ["1"],
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printChangeParameterName = () => {
  for (const classKey of classStateKeys) {
    for (const paramOperator of paramOperators) {
      if (declareKeys.includes(classKey) && paramOperator == "initializer")
        continue;
      const name = `changeParameterName${paramOperator}_${classKey}`;
      const v1Content =
        classStates[classKey] +
        genClass([
          genConstructor(
            [genParam(paramOperator)],
            declareKeys.includes(classKey),
          ),
        ]);

      const v2Content =
        classStates[classKey] +
        genClass([
          genConstructor(
            [genParam(paramOperator, "newParam")],
            declareKeys.includes(classKey),
          ),
        ]);

      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classKey),
        !abstractKeys.includes(classKey),
        ["1"],
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printChangeParameterOperator = () => {
  for (const classKey of classStateKeys) {
    for (const paramOperator of paramOperators) {
      for (const secondaryParamOperator of paramOperators) {
        if (
          declareKeys.includes(classKey) &&
          (paramOperator == "initializer" ||
            secondaryParamOperator == "initializer")
        )
          continue;
        if (paramOperator == secondaryParamOperator) continue;

        const name = `changeParameterOperator${paramOperator}_To_${secondaryParamOperator}_${classKey}`;
        const v1Content =
          classStates[classKey] +
          genClass([
            genConstructor(
              [genParam(paramOperator)],
              declareKeys.includes(classKey),
            ),
          ]);
        const v2Content =
          classStates[classKey] +
          genClass([
            genConstructor(
              [genParam(secondaryParamOperator)],
              declareKeys.includes(classKey),
            ),
          ]);
        const [v1Client, v2Client] = printClient(
          name,
          defaultKeys.includes(classKey),
          !abstractKeys.includes(classKey),
          ["1"],
        );
        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  }
};

const printTests = () => {
  printAddConstructor();
  printRemoveConstructor();
  printAddConstructorParameter();
  printRemoveConstructorParameter();
  printChangeParameterName();
  printChangeParameterOperator();

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
