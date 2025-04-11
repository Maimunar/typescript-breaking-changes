import {
  defaultsKeys,
  typeKeys,
  defaults,
  TypeKeys,
  Defaults,
} from "../defaults";
import fs from "fs";
import {
  propertySignatureDefaults,
  mappedTypeDefaults,
  indexNumberDefaults,
  indexStringDefaults,
  indexSymbolDefaults,
  indexTemplateLiteralDefaults,
} from "./defaults";

let testCount = 0;
const context = "src/tests/types/TypeLiteral/raw";

const content: string[] = [];
const filenames: string[] = [];

const formatValue = (value: unknown) => {
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "object") return JSON.stringify(value);

  return value;
};

const defaultsRepos = {
  PropertySignature: propertySignatureDefaults,
  MappedType: mappedTypeDefaults,
  IndexNumber: indexNumberDefaults,
  IndexString: indexStringDefaults,
  IndexSymbol: indexSymbolDefaults,
  IndexTemplateLiteral: indexTemplateLiteralDefaults,
};

const defaultsReposKeys: (keyof typeof defaultsRepos)[] = Object.keys(
  defaultsRepos,
) as (keyof typeof defaultsRepos)[];

const getValue = (
  testKey: keyof Defaults,
  constructorKey: TypeKeys,
  defaultKey?: keyof typeof defaultsRepos,
) => {
  const defaultValues = defaultKey ? defaultsRepos[defaultKey] : defaults;
  let value = formatValue(defaultValues[testKey][constructorKey]);
  if (testKey === "TypeReferenceBuiltin") {
    value = `promisify(${formatValue(defaultValues["ConstructorType"][constructorKey])})`;
  }
  return value;
};

const printIntro = (heading: string = "TypeLiteral", optional?: boolean) => {
  let content = `import { Defaults as GeneralDefaults} from "../../defaults";\n`;
  content += `import { PropertySignatureDefaults,
    MappedTypeDefaults,
    IndexNumberDefaults,
    IndexStringDefaults,
    IndexSymbolDefaults,
    IndexTemplateLiteralDefaults,
    EmptyTypeLiteral,
} from "../defaults";\n`;
  if (optional) {
    content += `import {
    OptionalPropertySignatureDefaults,
    OptionalMappedTypeDefaults,
    OptionalIndexNumberDefaults,
    OptionalIndexStringDefaults,
    OptionalIndexSymbolDefaults,
    OptionalIndexTemplateLiteralDefaults,
} from "../defaults";\n`;
  }
  content += `\n/*\n * ${heading} \n */\n\n`;
  content += `const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);\n\n`;

  return content;
};

// 1. Changes between states for all buildtypes
// - 7 files for all states, loop for every buildtype and other state
// 2. Adding a property signature
// - 6 files for all states with a type literal, loop for every buildtype
// 3. Removing a property signature
// - 6 files for all states with a type literal, loop for every buildtype
// 4. Adding a question token
// - 6 files for all states with a type literal, loop for every buildtype
// 5. Removing a question token
// - 6 files for all states with a type literal, loop for every buildtype
// - 2 possible values for inpu - with or without value

const printChangeTypeLiteral = (repoName?: keyof typeof defaultsRepos) => {
  const heading = repoName || "NoTypeLiteral";
  const initialKey = `${repoName || "General"}Defaults`;
  let content = printIntro(`Change Type Literal from ${heading} `);

  for (const testKey of defaultsKeys) {
    content += `// Change Type Literal From ${heading} - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const value = getValue(
        testKey as keyof Defaults,
        constructorKey as TypeKeys,
        repoName,
      );
      content += `const ${heading}${testKey}${constructorKey}: ${initialKey}["${testKey}"]["${constructorKey}"] = ${value}\n`;
      if (repoName) {
        content += `const ChangeTypeLiteralFromNoTypeLiteralToNoTypeLiteral${testKey}${constructorKey}: GeneralDefaults["${testKey}"]["${constructorKey}"] = ${value};\n`;
      }
      for (const defaultKey of defaultsReposKeys) {
        content += `const ChangeTypeLiteralFromNoTypeLiteralTo${defaultKey}${testKey}${constructorKey}: ${defaultKey}Defaults["${testKey}"]["${constructorKey}"] = ${value};\n`;
        testCount++;
      }
      content += `\n`;
    }
    content += `\n`;
  }

  return content;
};

const printAddPropertySignature = (repoName: keyof typeof defaultsRepos) => {
  let content = printIntro(`Add Property Signature to ${repoName} `);

  content += `// Initial value\n`;
  content += `const startTypeLiteral: {} = {} \n`;

  content += `\n// Changes\n`;

  for (const testKey of defaultsKeys) {
    content += `// Add Property Signature of ${repoName} - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      content += `const AddPropertySignature${repoName}${testKey}${constructorKey}: ${repoName}Defaults["${testKey}"]["${constructorKey}"] = {};\n`;
      testCount++;
    }
    content += `\n`;
  }

  return content;
};
const printRemovePropertySignature = (repoName: keyof typeof defaultsRepos) => {
  let content = printIntro(`Remove Property Signature from ${repoName} `);

  content += `\n// Changes\n`;

  for (const testKey of defaultsKeys) {
    content += `// Remove Property Signature of ${repoName} - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const value = getValue(testKey, constructorKey, repoName);

      content += `const PropertySignature${repoName}${testKey}${constructorKey}: ${repoName}Defaults["${testKey}"]["${constructorKey}"] = ${value};\n`;
      content += `const RemovePropertySignature${repoName}${testKey}${constructorKey}: EmptyTypeLiteral = ${value};\n`;
      testCount++;
    }
    content += `\n`;
  }

  return content;
};

const printMakeOptionalProperty = (repoName: keyof typeof defaultsRepos) => {
  let content = printIntro(`Make Optional Property ${repoName}`, true);

  for (const testKey of defaultsKeys) {
    content += `// Make Optional Property ${repoName} - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const value = getValue(testKey, constructorKey, repoName);
      content += `const PropertySignature${repoName}${testKey}${constructorKey}: ${repoName}Defaults["${testKey}"]["${constructorKey}"] = ${value};\n`;
      content += `const MakeOptionalProperty${repoName}${testKey}${constructorKey}: Optional${repoName}Defaults["${testKey}"]["${constructorKey}"] = ${value};\n`;
      testCount++;
    }
    content += `\n`;
  }

  return content;
};

const printMakeRequiredProperty = (repoName: keyof typeof defaultsRepos) => {
  let content = printIntro(`Make Required Property ${repoName}`, true);

  for (const testKey of defaultsKeys) {
    content += `// Make Optional Property ${repoName} - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const value = getValue(testKey, constructorKey, repoName);
      content += `const OptionalPropertySignature${repoName}${testKey}${constructorKey}: Optional${repoName}Defaults["${testKey}"]["${constructorKey}"] = ${value};\n`;
      content += `const SecondOptionalPropertySignature${repoName}${testKey}${constructorKey}: Optional${repoName}Defaults["${testKey}"]["${constructorKey}"] = {};\n`;

      content += `const MakeRequiredPropertySignature${repoName}${testKey}${constructorKey}: ${repoName}Defaults["${testKey}"]["${constructorKey}"] = ${value};\n`;
      content += `const SecondMakeRequiredPropertySignature${repoName}${testKey}${constructorKey}: ${repoName}Defaults["${testKey}"]["${constructorKey}"] = {};\n`;
      testCount += 2;
    }
    content += `\n`;
  }

  return content;
};

const printTests = () => {
  // No type literal to all other states
  filenames.push(`${context}/ChangeTypeLiteralFromNoTypeLiteral.ts`);
  content.push(printChangeTypeLiteral());

  for (const repoName of defaultsReposKeys) {
    filenames.push(`${context}/ChangeTypeLiteralFrom${repoName}.ts`);
    content.push(printChangeTypeLiteral(repoName));

    filenames.push(`${context}/AddPropertySignature${repoName}.ts`);
    content.push(printAddPropertySignature(repoName));

    filenames.push(`${context}/RemovePropertySignature${repoName}.ts`);
    content.push(printRemovePropertySignature(repoName));

    filenames.push(`${context}/MakeOptionalProperty${repoName}.ts`);
    content.push(printMakeOptionalProperty(repoName));

    filenames.push(`${context}/MakeRequiredProperty${repoName}.ts`);
    content.push(printMakeRequiredProperty(repoName));
  }

  for (let i = 0; i < filenames.length; i++) {
    fs.writeFile(filenames[i], content[i], (err) => {
      if (err) console.log(err);
    });
  }
  return { testCount };
};

console.log(printTests());
