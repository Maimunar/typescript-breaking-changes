import fs from "fs";
import {
  genClass,
  classStates,
  classStateKeys,
  declareKeys,
  defaultKeys,
  abstractKeys,
} from "../defaults";
import {
  genProperty,
  propertyStates,
  propertyStateKeys,
  readonlyPropertyKeys,
  staticPropertyStates,
  declaredPropertyStates,
  abstractPropertyStates,
  publicPropertyKeys,
} from "./defaults";

let testCount = 0;
const context = "src/tests/class/property/raw";
const files = ["v1.ts", "v2.ts", "v1.client.ts", "v2.client.ts"];
const filenames: string[] = [];
const contents: string[] = [];

//const [v1Client, v2Client] = printClient(
//  name,
//  defaultKeys.includes(classState),
//  !abstractKeys.includes(classState),
//  !readonlyPropertyKeys.includes(propertyState),
//  staticPropertyStates.includes(propertyState),
//  false,
//);

const printClient = (
  name: string,
  classState: keyof typeof classStates,
  propertyState: keyof typeof propertyStates,
  hasProp: boolean = true,
): [string, string] => {
  const defaultImport = defaultKeys.includes(classState);
  const usable = !abstractKeys.includes(classState);
  const modifiable = !readonlyPropertyKeys.includes(propertyState);
  const staticProp = staticPropertyStates.includes(propertyState);
  const hasProperty = hasProp && publicPropertyKeys.includes(propertyState);

  const contents = [];
  for (const version of ["v1", "v2"]) {
    let content = "";
    if (defaultImport)
      content += `import TestClass from "./${name}.${version}";\n\n`;
    else content += `import { TestClass } from "./${name}.${version}";\n\n`;

    // Use
    if (usable) {
      content += `const testClass = new TestClass();\n`;
      if (hasProperty) {
        if (staticProp) content += `const res = TestClass.testProperty;\n`;
        else content += `const res = testClass.testProperty;\n`;

        if (modifiable) {
          if (staticProp) content += `TestClass.testProperty = 2;\n`;
          else content += `testClass.testProperty = 2;\n`;
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

const isNotAllowed = (
  classState: keyof typeof classStates,
  propertyState: keyof typeof propertyStates,
) => {
  if (
    !abstractKeys.includes(classState) &&
    abstractPropertyStates.includes(propertyState)
  )
    return true;
  return false;
};

const printAddProperty = () => {
  for (const classState of classStateKeys) {
    for (const propertyState of propertyStateKeys) {
      if (isNotAllowed(classState, propertyState)) continue;

      const name = `addProperty_${classState}_${propertyState}`;
      const v1Content = classStates[classState] + genClass([]);
      const v2Content =
        classStates[classState] +
        genClass([
          propertyStates[propertyState] +
            genProperty(
              declareKeys.includes(classState) ||
                declaredPropertyStates.includes(propertyState) ||
                abstractPropertyStates.includes(propertyState),
            ),
        ]);
      const [v1Client, v2Client] = printClient(
        name,
        classState,
        propertyState,
        false,
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};
//removeProperty_exportDefault_publicReadonly
const printRemoveProperty = () => {
  for (const classState of classStateKeys) {
    for (const propertyState of propertyStateKeys) {
      if (isNotAllowed(classState, propertyState)) continue;

      const name = `removeProperty_${classState}_${propertyState}`;
      const v1Content =
        classStates[classState] +
        genClass([
          propertyStates[propertyState] +
            genProperty(
              declareKeys.includes(classState) ||
                declaredPropertyStates.includes(propertyState) ||
                abstractPropertyStates.includes(propertyState),
            ),
        ]);
      const v2Content = classStates[classState] + genClass([]);

      const [v1Client, v2Client] = printClient(name, classState, propertyState);

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
    }
  }
};

const printChangeStates = () => {
  for (const classState of classStateKeys) {
    for (const propertyState of propertyStateKeys) {
      for (const secondaryPropertyState of propertyStateKeys) {
        if (isNotAllowed(classState, propertyState)) continue;
        if (isNotAllowed(classState, secondaryPropertyState)) continue;

        const name = `changeState_${classState}_${propertyState}_To_${secondaryPropertyState}`;
        const v1Content =
          classStates[classState] +
          genClass([
            propertyStates[propertyState] +
              genProperty(
                declareKeys.includes(classState) ||
                  declaredPropertyStates.includes(propertyState) ||
                  abstractPropertyStates.includes(propertyState),
              ),
          ]);
        const v2Content =
          classStates[classState] +
          genClass([
            propertyStates[secondaryPropertyState] +
              genProperty(
                declareKeys.includes(classState) ||
                  declaredPropertyStates.includes(propertyState) ||
                  abstractPropertyStates.includes(propertyState),
              ),
          ]);

        const [v1Client, v2Client] = printClient(
          name,
          classState,
          propertyState,
        );

        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  }
};

const printTests = () => {
  printAddProperty();
  printRemoveProperty();
  printChangeStates();

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
