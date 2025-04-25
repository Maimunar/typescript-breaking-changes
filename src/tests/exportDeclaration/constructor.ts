import fs from "fs";

let testCount = 0;
const context = "src/tests/exportDeclaration/raw";
const files = ["v1.ts", "v2.ts", "v1.client.ts", "v2.client.ts"];
const filenames: string[] = [];
const contents: string[] = [];

const printClient = (
  name: string,
  useFn: boolean,
  useType: boolean,
  alias?: string,
): [string, string] => {
  const contents = [];
  for (const version of ["v1", "v2"]) {
    let content = `import * as Library from "./${name}.${version}";\n\n`;
    if (useFn) {
      content += `const res = Library.${alias || "testFn"}();\n`;
    }
    if (useType) {
      content += `const res2: Library.${alias || "TestFnType"} = () => {};\n`;
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

const moduleSpecifier = "from '../../helper'\n";
const testFnS = "const testFn = () => {};\n";
const testFnTypeS = "type TestFnType = () => void;\n";

const printChangeTypeToNoTypeNamespaceExport = () => {
  const name = "changeTypeToNoTypeNamespaceExport";
  const v1Content = "export type * " + moduleSpecifier;
  const v2Content = "export * " + moduleSpecifier;
  const [v1Client, v2Client] = printClient(name, false, true);

  printTest(name, v1Content, v2Content, v1Client, v2Client);
  testCount++;
};

const printChangeTypeToNoTypeNamedExportNoModuleSpecifier = () => {
  const name = "changeTypeToNoTypeNamedExportNoModuleSpecifier";
  const v1Content = testFnS + testFnTypeS + "export type { TestFnType };\n";
  const v2Content = testFnS + testFnTypeS + "export { TestFnType };\n";
  const [v1Client, v2Client] = printClient(name, false, true);

  printTest(name, v1Content, v2Content, v1Client, v2Client);
  testCount++;
};

const printChangeTypeToNoTypeNamedExportModuleSpecifier = () => {
  const name = "changeTypeToNoTypeNamedExportModuleSpecifier";
  const v1Content = "export type { TestFnType } " + moduleSpecifier;
  const v2Content = "export { TestFnType } " + moduleSpecifier;
  const [v1Client, v2Client] = printClient(name, false, true);

  printTest(name, v1Content, v2Content, v1Client, v2Client);
  testCount++;
};

const printChangeNoTypeToTypeNamespaceExport = () => {
  const name = "changeNoTypeToTypeNamespaceExport";
  const v1Content = "export * " + moduleSpecifier;
  const v2Content = "export type * " + moduleSpecifier;
  const [v1Client, v2Client] = printClient(name, true, true);

  printTest(name, v1Content, v2Content, v1Client, v2Client);
  testCount++;
};

const printChangeNoTypeToTypeNamedExportNoModuleSpecifier = () => {
  const name = "changeNoTypeToTypeNamedExportNoModuleSpecifier";
  const v1Content = testFnS + testFnTypeS + "export { testFn, TestFnType };\n";
  const v2Content =
    testFnS + testFnTypeS + "export type { testFn, TestFnType };\n";
  const [v1Client, v2Client] = printClient(name, true, true);

  printTest(name, v1Content, v2Content, v1Client, v2Client);
  testCount++;
};

const printChangeNoTypeToTypeNamedExportModuleSpecifier = () => {
  const name = "changeNoTypeToTypeNamedExportModuleSpecifier";
  const v1Content = "export { testFn, TestFnType } " + moduleSpecifier;
  const v2Content = "export type { testFn, TestFnType } " + moduleSpecifier;
  const [v1Client, v2Client] = printClient(name, true, true);

  printTest(name, v1Content, v2Content, v1Client, v2Client);
  testCount++;
};

const printChangeNamespaceToNamedExportModuleSpecifierType = () => {
  const name = "changeNamespaceToNamedExportModuleSpecifierType";
  const v1Content = "export type * " + moduleSpecifier;
  const v2Content = "export type { TestFnType } " + moduleSpecifier;
  const [v1Client, v2Client] = printClient(name, false, true);

  printTest(name, v1Content, v2Content, v1Client, v2Client);
  testCount++;
};

const printChangeNamespaceToNamedExportModuleSpecifierNoType = () => {
  const name = "changeNamespaceToNamedExportModuleSpecifierNoType";
  const v1Content = "export * " + moduleSpecifier;
  const v2Content = "export { testFn, TestFnType } " + moduleSpecifier;
  const [v1Client, v2Client] = printClient(name, true, true);

  printTest(name, v1Content, v2Content, v1Client, v2Client);
  testCount++;
};

const printChangeNamedExportToNamespaceModuleSpecifierType = () => {
  const name = "changeNamedExportToNamespaceModuleSpecifierType";
  const v1Content = "export type { TestFnType } " + moduleSpecifier;
  const v2Content = "export type * " + moduleSpecifier;
  const [v1Client, v2Client] = printClient(name, false, true);

  printTest(name, v1Content, v2Content, v1Client, v2Client);
  testCount++;
};

const printChangeNamedExportToNamespaceModuleSpecifierNoType = () => {
  const name = "changeNamedExportToNamespaceModuleSpecifierNoType";
  const v1Content = "export { testFn, TestFnType } " + moduleSpecifier;
  const v2Content = "export * " + moduleSpecifier;
  const [v1Client, v2Client] = printClient(name, true, true);

  printTest(name, v1Content, v2Content, v1Client, v2Client);
  testCount++;
};

const printAddExportSpecifierModuleSpecifier = () => {
  for (const type of ["type", ""]) {
    const name = `addExportSpecifierModuleSpecifier${type}`;
    const v1Content = `export ${type} { } ${moduleSpecifier}`;
    const v2Content = `export ${type == "" ? "type" : ""} { TestFnType } ${moduleSpecifier}`;
    const [v1Client, v2Client] = printClient(name, false, false);

    printTest(name, v1Content, v2Content, v1Client, v2Client);
    testCount++;
  }
};

const printAddExportSpecifierNoModuleSpecifier = () => {
  for (const type of ["type", ""]) {
    const name = `addExportSpecifierNoModuleSpecifier${type}`;
    const v1Content = testFnTypeS + `export ${type} { }`;
    const v2Content =
      testFnTypeS + `export ${type == "" ? "type" : ""} { TestFnType }`;
    const [v1Client, v2Client] = printClient(name, false, false);

    printTest(name, v1Content, v2Content, v1Client, v2Client);
    testCount++;
  }
};

const printChangeExportSpecifierNoTypeNoModuleSpecifier = () => {
  const noTypeNoAlias = () => {
    for (const type of ["type", ""]) {
      for (const alias of ["", "as lib"]) {
        if (type == "" && alias == "") continue;
        const name = `changeExportSpecifierNoTypeNoModuleSpecifierFromNoTypeNoAliasTo${type}${alias ? "Alias" : "NoAlias"}`;
        const v1Content = testFnS + `export { testFn };\n`;
        const v2Content = testFnS + `export ${type} { testFn ${alias} };\n`;
        const [v1Client, v2Client] = printClient(name, true, false);
        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  };
  const noTypeAlias = () => {
    for (const type of ["type", ""]) {
      for (const alias of ["", "as lib"]) {
        if (type == "" && alias == "as lib") continue;
        const name = `changeExportSpecifierNoTypeNoModuleSpecifierFromNoTypeAliasTo${type}${alias ? "Alias" : "NoAlias"}`;
        const v1Content = testFnS + `export { testFn as lib };\n`;
        const v2Content = testFnS + `export ${type} { testFn ${alias} };\n`;
        const [v1Client, v2Client] = printClient(name, true, false, "lib");
        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  };
  const typeNoAlias = () => {
    for (const type of ["type", ""]) {
      for (const alias of ["", "as lib"]) {
        if (type == "type" && alias == "") continue;
        const name = `changeExportSpecifierNoTypeNoModuleSpecifierFromTypeNoAliasTo${type}${alias ? "Alias" : "NoAlias"}`;
        const v1Content = testFnTypeS + `export type { TestFnType };\n`;
        const v2Content =
          testFnTypeS + `export ${type} { TestFnType ${alias} };\n`;
        const [v1Client, v2Client] = printClient(name, false, true);
        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  };

  const typeAlias = () => {
    for (const type of ["type", ""]) {
      for (const alias of ["", "as lib"]) {
        if (type == "type" && alias == "as lib") continue;
        const name = `changeExportSpecifierNoTypeNoModuleSpecifierFromTypeAliasTo${type}${alias ? "Alias" : "NoAlias"}`;
        const v1Content = testFnTypeS + `export type { TestFnType as lib };\n`;
        const v2Content =
          testFnTypeS + `export ${type} { TestFnType ${alias} };\n`;
        const [v1Client, v2Client] = printClient(name, true, false, "lib");
        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  };
  noTypeNoAlias();
  noTypeAlias();
  typeNoAlias();
  typeAlias();
};

const printChangeExportSpecifierNoTypeModuleSpecifier = () => {
  const noTypeNoAlias = () => {
    for (const type of ["type", ""]) {
      for (const alias of ["", "as lib"]) {
        if (type == "" && alias == "") continue;
        const name = `changeExportSpecifierNoTypeModuleSpecifierFromNoTypeNoAliasTo${type}${alias ? "Alias" : "NoAlias"}`;
        const v1Content = `export { testFn }` + moduleSpecifier;
        const v2Content =
          `export ${type} { testFn ${alias} }` + moduleSpecifier;
        const [v1Client, v2Client] = printClient(name, true, false);
        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  };
  const noTypeAlias = () => {
    for (const type of ["type", ""]) {
      for (const alias of ["", "as lib"]) {
        if (type == "" && alias == "as lib") continue;
        const name = `changeExportSpecifierNoTypeModuleSpecifierFromNoTypeAliasTo${type}${alias ? "Alias" : "NoAlias"}`;
        const v1Content = `export { testFn as lib }` + moduleSpecifier;
        const v2Content =
          `export { ${type} testFn ${alias} }` + moduleSpecifier;
        const [v1Client, v2Client] = printClient(name, true, false, "lib");
        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  };
  const typeNoAlias = () => {
    for (const type of ["type", ""]) {
      for (const alias of ["", "as lib"]) {
        if (type == "type" && alias == "") continue;
        const name = `changeExportSpecifierNoTypeModuleSpecifierFromTypeNoAliasTo${type}${alias ? "Alias" : "NoAlias"}`;
        const v1Content = testFnTypeS + `export { type TestFnType };\n`;
        const v2Content =
          testFnTypeS + `export { ${type} TestFnType ${alias} };\n`;
        const [v1Client, v2Client] = printClient(name, false, true);
        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  };

  const typeAlias = () => {
    for (const type of ["type", ""]) {
      for (const alias of ["", "as lib"]) {
        if (type == "type" && alias == "as lib") continue;
        const name = `changeExportSpecifierNoTypeModuleSpecifierFromTypeAliasTo${type}${alias ? "Alias" : "NoAlias"}`;
        const v1Content = `export { type TestFnType as lib }` + moduleSpecifier;
        const v2Content =
          `export { ${type} TestFnType ${alias} }` + moduleSpecifier;
        const [v1Client, v2Client] = printClient(name, true, false, "lib");
        printTest(name, v1Content, v2Content, v1Client, v2Client);
        testCount++;
      }
    }
  };
  noTypeNoAlias();
  noTypeAlias();
  typeNoAlias();
  typeAlias();
};

const printChangeExportSpecifierTypeNoModuleSpecifier = () => {
  // No Alias to Alias
  const noAliasToAlias = () => {
    const name = `changeExportSpecifierTypeNoModuleSpecifierFromNoAliasToAlias`;
    const v1Content = testFnTypeS + `export type { TestFnType };\n`;
    const v2Content = testFnTypeS + `export type { TestFnType as lib };\n`;
    const [v1Client, v2Client] = printClient(name, false, true);
    printTest(name, v1Content, v2Content, v1Client, v2Client);
    testCount++;
  };
  // Alias to no alias
  const aliasToNoAlias = () => {
    const name = `changeExportSpecifierTypeNoModuleSpecifierFromAliasToNoAlias`;
    const v1Content = testFnTypeS + `export type { TestFnType as lib };\n`;
    const v2Content = testFnTypeS + `export type { TestFnType };\n`;
    const [v1Client, v2Client] = printClient(name, false, true, "lib");
    printTest(name, v1Content, v2Content, v1Client, v2Client);
    testCount++;
  };

  noAliasToAlias();
  aliasToNoAlias();
};

const printChangeExportSpecifierTypeModuleSpecifier = () => {
  // No Alias to Alias
  const noAliasToAlias = () => {
    const name = `changeExportSpecifierTypeModuleSpecifierFromNoAliasToAlias`;
    const v1Content = `export type { TestFnType }` + moduleSpecifier;
    const v2Content = `export type { TestFnType as lib }` + moduleSpecifier;
    const [v1Client, v2Client] = printClient(name, false, true);
    printTest(name, v1Content, v2Content, v1Client, v2Client);
    testCount++;
  };
  // Alias to no alias
  const aliasToNoAlias = () => {
    const name = `changeExportSpecifierTypeModuleSpecifierFromAliasToNoAlias`;
    const v1Content = `export type { TestFnType as lib }` + moduleSpecifier;
    const v2Content = `export type { TestFnType }` + moduleSpecifier;
    const [v1Client, v2Client] = printClient(name, false, true, "lib");
    printTest(name, v1Content, v2Content, v1Client, v2Client);
    testCount++;
  };

  noAliasToAlias();
  aliasToNoAlias();
};
const printTests = () => {
  printChangeTypeToNoTypeNamespaceExport();
  printChangeTypeToNoTypeNamedExportNoModuleSpecifier();
  printChangeTypeToNoTypeNamedExportModuleSpecifier();
  printChangeNoTypeToTypeNamespaceExport();
  printChangeNoTypeToTypeNamedExportNoModuleSpecifier();
  printChangeNoTypeToTypeNamedExportModuleSpecifier();
  printChangeNamespaceToNamedExportModuleSpecifierType();
  printChangeNamespaceToNamedExportModuleSpecifierNoType();
  printChangeNamedExportToNamespaceModuleSpecifierType();
  printChangeNamedExportToNamespaceModuleSpecifierNoType();
  printAddExportSpecifierModuleSpecifier();
  printAddExportSpecifierNoModuleSpecifier();
  printChangeExportSpecifierNoTypeNoModuleSpecifier();
  printChangeExportSpecifierNoTypeModuleSpecifier();
  printChangeExportSpecifierTypeNoModuleSpecifier();
  printChangeExportSpecifierTypeModuleSpecifier();

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
