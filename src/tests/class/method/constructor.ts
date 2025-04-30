import fs from "fs";
import {
  genClass,
  classStates,
  classStateKeys,
  declareKeys,
  defaultKeys,
  abstractKeys,
  genMethod,
  methodStates,
  methodStateKeys,
  paramOperators,
  genParam,
} from "../defaults";
import {
  staticStates,
  abstractStates,
  asyncStates,
  publicStates,
} from "./defaults";

let testCount = 0;
const context = "src/tests/class/method/raw";
const files = ["v1.ts", "v2.ts", "v1.client.ts", "v2.client.ts"];
const filenames: string[] = [];
const contents: string[] = [];

type Method = [string, string[], boolean]; // [name, params, static]
const printClient = (
  name: string,
  defaultImport: boolean = false,
  usable: boolean = true,
  methods: Method[] = [],
): [string, string] => {
  const contents = [];
  for (const version of ["v1", "v2"]) {
    let content = "";
    if (defaultImport)
      content += `import TestClass from "./${name}.${version}";\n\n`;
    else content += `import { TestClass } from "./${name}.${version}";\n\n`;

    // Use
    if (usable) {
      content += `const testClass = new TestClass();\n`;

      // Methods
      methods.forEach((method) => {
        const [methodName, params, staticMethod] = method;
        if (staticMethod) {
          content += `TestClass.${methodName}(`;
        } else {
          content += `testClass.${methodName}(`;
        }

        params.forEach((param, index) => {
          content += `${param}`;

          if (index < params.length - 1) content += ", ";
        });
        content += `);\n`;
      });
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

const isNotAllowed = (
  classState: keyof typeof classStates,
  methodState: keyof typeof methodStates,
) => {
  if (declareKeys.includes(classState) && asyncStates.includes(methodState))
    return true;
  if (
    abstractStates.includes(methodState) &&
    !abstractKeys.includes(classState)
  )
    return true;

  return false;
};

const printAddMethod = () => {
  for (const classState of classStateKeys) {
    for (const methodState of methodStateKeys) {
      if (isNotAllowed(classState, methodState)) continue;

      const name = `addMethod_${classState}_${methodState}`;
      const v1Content = classStates[classState] + genClass([]);
      const v2Content =
        classStates[classState] +
        genClass([
          methodStates[methodState] +
            genMethod(
              declareKeys.includes(classState) ||
                abstractStates.includes(methodState),
              asyncStates.includes(methodState),
            ),
        ]);
      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classState),
        !abstractKeys.includes(classState),
        [],
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printAddMethodSameName = () => {
  for (const classState of classStateKeys) {
    for (const methodState of methodStateKeys) {
      if (isNotAllowed(classState, methodState)) continue;

      const name = `addMethod_SameName_${classState}_${methodState}`;
      const v1Content =
        classStates[classState] +
        genClass([
          methodStates[methodState] +
            genMethod(
              declareKeys.includes(classState) ||
                abstractStates.includes(methodState),
              asyncStates.includes(methodState),
            ),
        ]);
      const v2Content =
        classStates[classState] +
        genClass([
          methodStates[methodState] +
            genMethod(
              declareKeys.includes(classState) ||
                abstractStates.includes(methodState),
              asyncStates.includes(methodState),
            ),
          methodStates[methodState] +
            genMethod(
              declareKeys.includes(classState) ||
                abstractStates.includes(methodState),
              asyncStates.includes(methodState),
              [genParam("none")],
            ),
        ]);

      const method: Method = [
        "testMethod",
        [],
        staticStates.includes(methodState),
      ];
      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classState),
        !abstractKeys.includes(classState),
        publicStates.includes(methodState) ? [method] : [],
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printRemoveMethod = () => {
  for (const classState of classStateKeys) {
    for (const methodState of methodStateKeys) {
      if (isNotAllowed(classState, methodState)) continue;

      const name = `removeMethod_${classState}_${methodState}`;
      const v1Content =
        classStates[classState] +
        genClass([
          methodStates[methodState] +
            genMethod(
              declareKeys.includes(classState) ||
                abstractStates.includes(methodState),
              asyncStates.includes(methodState),
            ),
        ]);
      const v2Content = classStates[classState] + genClass([]);
      const method: Method = [
        "testMethod",
        [],
        staticStates.includes(methodState),
      ];
      const [v1Client, v2Client] = printClient(
        name,
        defaultKeys.includes(classState),
        !abstractKeys.includes(classState),
        publicStates.includes(methodState) ? [method] : [],
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printChangeStates = () => {
  for (const classState of classStateKeys) {
    for (const methodState of methodStateKeys) {
      for (const secondaryMethodState of methodStateKeys) {
        if (isNotAllowed(classState, methodState)) continue;
        if (isNotAllowed(classState, secondaryMethodState)) continue;
        if (methodState == secondaryMethodState) continue;

        const name = `changeState_${classState}_${methodState}_To_${secondaryMethodState}`;
        const v1Content =
          classStates[classState] +
          genClass([
            methodStates[methodState] +
              genMethod(
                declareKeys.includes(classState) ||
                  abstractStates.includes(methodState),
                asyncStates.includes(methodState),
              ),
          ]);

        const v2Content =
          classStates[classState] +
          genClass([
            methodStates[secondaryMethodState] +
              genMethod(
                declareKeys.includes(classState) ||
                  abstractStates.includes(methodState),
                asyncStates.includes(methodState),
              ),
          ]);

        const method: Method = [
          "testMethod",
          [],
          staticStates.includes(methodState),
        ];
        const [v1Client, v2Client] = printClient(
          name,
          defaultKeys.includes(classState),
          !abstractKeys.includes(classState),
          publicStates.includes(methodState) ? [method] : [],
        );
        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  }
};

const printAddMethodParam = () => {
  for (const classState of classStateKeys) {
    for (const methodState of methodStateKeys) {
      if (isNotAllowed(classState, methodState)) continue;

      const declared =
        declareKeys.includes(classState) ||
        abstractStates.includes(methodState);

      for (const paramOperator of paramOperators) {
        if (declared && paramOperator == "initializer") continue;

        const name = `addMethodParam_${classState}_${methodState}_${paramOperator}`;
        const v1Content =
          classStates[classState] +
          genClass([
            methodStates[methodState] +
              genMethod(declared, asyncStates.includes(methodState)),
          ]);
        const v2Content =
          classStates[classState] +
          genClass([
            methodStates[methodState] +
              genMethod(declared, asyncStates.includes(methodState), [
                genParam(paramOperator),
              ]),
          ]);
        const method: Method = [
          "testMethod",
          [],
          staticStates.includes(methodState),
        ];
        const [v1Client, v2Client] = printClient(
          name,
          defaultKeys.includes(classState),
          !abstractKeys.includes(classState),
          publicStates.includes(methodState) ? [method] : [],
        );

        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  }
};

const printRemoveMethodParam = () => {
  for (const classState of classStateKeys) {
    for (const methodState of methodStateKeys) {
      if (isNotAllowed(classState, methodState)) continue;

      const declared =
        declareKeys.includes(classState) ||
        abstractStates.includes(methodState);
      for (const paramOperator of paramOperators) {
        if (declared && paramOperator == "initializer") continue;

        const name = `RemoveMethodParam_${classState}_${methodState}_${paramOperator}`;
        const v1Content =
          classStates[classState] +
          genClass([
            methodStates[methodState] +
              genMethod(declared, asyncStates.includes(methodState), [
                genParam(paramOperator),
              ]),
          ]);

        const v2Content =
          classStates[classState] +
          genClass([
            methodStates[methodState] +
              genMethod(declared, asyncStates.includes(methodState)),
          ]);

        const method: Method = [
          "testMethod",
          ["1"],
          staticStates.includes(methodState),
        ];

        const [v1Client, v2Client] = printClient(
          name,
          defaultKeys.includes(classState),
          !abstractKeys.includes(classState),
          publicStates.includes(methodState) ? [method] : [],
        );

        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  }
};

const printTests = () => {
  printAddMethod();
  printAddMethodSameName();
  printRemoveMethod();
  printChangeStates();
  printAddMethodParam();
  printRemoveMethodParam();

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
