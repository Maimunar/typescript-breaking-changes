import { exportState, clientUsage } from "./defaults";
import fs from "fs";

let testCount = 0;
const context = "src/tests/exportAssignment/raw";
const files = ["v1.ts", "v2.ts", "v1.client.ts", "v2.client.ts"];
const filenames: string[] = [];
const contents: string[] = [];

const printClient = (
  name: string,
  version: "v1" | "v2",
  usageKey: keyof typeof clientUsage,
) => {
  let content = `import a from "./${name}.${version}";\n\n`;
  content += clientUsage[usageKey];
  //let content = `import {\n`;
  //Object.keys(enumsStates).forEach((state) => {
  //  content += `  ${state},\n`;
  //});
  //content += `} from "./${name}.${version}";\n\n`;

  return content;
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

const printRemoveExportIdentifier = () => {
  for (const exportKey of Object.keys(exportState)) {
    const exportS = "export default a;\n";
    const v1Content =
      exportState[exportKey as keyof typeof exportState] + "\n" + exportS;
    const v2Content = exportState[exportKey as keyof typeof exportState] + "\n";
    const v1Client = printClient(
      `removeExportIdentifier_${exportKey}`,
      "v1",
      exportKey as keyof typeof exportState,
    );

    const v2Client = printClient(
      `removeExportIdentifier_${exportKey}`,
      "v2",
      exportKey as keyof typeof exportState,
    );

    printTest(
      `removeExportIdentifier_${exportKey}`,
      v1Content,
      v2Content,
      v1Client,
      v2Client,
    );
    testCount++;
  }
};

const printRemoveExportExpression = () => {
  for (const exportKey of Object.keys(exportState)) {
    if (unassignableToExpressionKeys.some((key) => key == exportKey)) {
      continue;
    }
    const exportS = "export default ";
    const v1Content =
      exportS + exportState[exportKey as keyof typeof exportState] + "\n";
    const v2Content = exportState[exportKey as keyof typeof exportState] + "\n";
    const v1Client = printClient(
      `removeExportExpression_${exportKey}`,
      "v1",
      exportKey as keyof typeof exportState,
    );

    const v2Client = printClient(
      `removeExportExpression_${exportKey}`,
      "v2",
      exportKey as keyof typeof exportState,
    );

    printTest(
      `removeExportExpression_${exportKey}`,
      v1Content,
      v2Content,
      v1Client,
      v2Client,
    );
    testCount++;
  }
};

const unassignableToExpressionKeys = ["typeAlias", "variable", "enum"];

const printChangeIdentifier = () => {
  for (const exportKey of Object.keys(exportState)) {
    const exportS = "export default a;\n";
    const v1Content =
      exportState[exportKey as keyof typeof exportState] + "\n" + exportS;
    for (const secondaryKey of Object.keys(exportState)) {
      // Identifier
      const name = `changeIdentifier_${exportKey}ToIdentifier_${secondaryKey}`;
      const v2Content =
        exportState[secondaryKey as keyof typeof exportState] + "\n" + exportS;
      const v1Client = printClient(
        name,
        "v1",
        exportKey as keyof typeof exportState,
      );

      const v2Client = printClient(
        name,
        "v2",
        exportKey as keyof typeof exportState,
      );

      if (exportKey != secondaryKey) {
        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
      // Expression

      if (unassignableToExpressionKeys.some((key) => key == secondaryKey)) {
        continue;
      }
      const expname = `changeIdentifier_${exportKey}ToExpression_${secondaryKey}`;
      const expv2Content =
        "export default " +
        exportState[secondaryKey as keyof typeof exportState] +
        "\n";
      const expv1Client = printClient(
        expname,
        "v1",
        exportKey as keyof typeof exportState,
      );

      const expv2Client = printClient(
        expname,
        "v2",
        exportKey as keyof typeof exportState,
      );

      printTest(expname, v1Content, expv2Content, expv1Client, expv2Client);
      testCount++;
    }
  }
};
const printChangeExpression = () => {
  for (const exportKey of Object.keys(exportState)) {
    if (unassignableToExpressionKeys.some((key) => key == exportKey)) {
      continue;
    }
    const exportS = "export default a;\n";
    const v1Content =
      "export default " +
      exportState[exportKey as keyof typeof exportState] +
      "\n";
    for (const secondaryKey of Object.keys(exportState)) {
      // Identifier
      const name = `changeExpression_${exportKey}ToIdentifier_${secondaryKey}`;
      const v2Content =
        exportState[secondaryKey as keyof typeof exportState] + "\n" + exportS;
      const v1Client = printClient(
        name,
        "v1",
        exportKey as keyof typeof exportState,
      );

      const v2Client = printClient(
        name,
        "v2",
        exportKey as keyof typeof exportState,
      );

      printTest(name, v1Content, v2Content, v1Client, v2Client);
      testCount++;
      // Expression
      if (unassignableToExpressionKeys.some((key) => key == secondaryKey)) {
        continue;
      }
      if (secondaryKey == exportKey) continue;

      const expname = `changeExpression_${exportKey}ToExpression_${secondaryKey}`;
      const expv2Content =
        "export default " +
        exportState[secondaryKey as keyof typeof exportState] +
        "\n";

      const expv1Client = printClient(
        expname,
        "v1",
        exportKey as keyof typeof exportState,
      );

      const expv2Client = printClient(
        expname,
        "v2",
        exportKey as keyof typeof exportState,
      );

      printTest(expname, v1Content, expv2Content, expv1Client, expv2Client);
      testCount++;
    }
  }
};
const printTests = () => {
  printRemoveExportIdentifier();
  printRemoveExportExpression();
  printChangeExpression();
  printChangeIdentifier();

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
