import {
  defaultsKeys,
  defaults,
  Defaults,
  TypeKeys,
  typeKeys,
} from "../defaults";
import fs from "fs";

let testCount = 0;
const context = "src/tests/types/TypeReference/raw";
const content: string[] = [];

const formatValue = (value: unknown) => {
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "object") return JSON.stringify(value);

  return value;
};

const getValue = (
  testKey: keyof Defaults,
  constructorKey: TypeKeys,
  typeReference?: boolean,
) => {
  let value = typeReference
    ? `promisify(${formatValue(defaults[testKey][constructorKey])})`
    : formatValue(defaults[testKey][constructorKey]);

  if (testKey === "TypeReferenceBuiltin") {
    value = typeReference
      ? `promisify(${value})`
      : `promisify(${formatValue(defaults["ConstructorType"][constructorKey])})`;
  }
  return value;
};

const printIntro = () => {
  let content = `import { Defaults as GeneralDefaults} from "../../defaults";\n`;
  content += `import { Defaults as TypeReferenceDefaults } from "../defaults";\n`;
  content += `\n/*\n * TypeReference - Promise \n */\n\n`;
  content += `const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);\n\n`;

  return content;
};

const printAddTypeReference = () => {
  let content = printIntro();

  for (const testKey of defaultsKeys) {
    content += `// Add Type Reference - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const value = getValue(
        testKey as keyof Defaults,
        constructorKey as TypeKeys,
      );

      content += `const Type${testKey}${constructorKey}: GeneralDefaults["${testKey}"]["${constructorKey}"] = ${value}\n`;

      content += `const AddTupleTo${testKey}${constructorKey}: TypeReferenceDefaults["${testKey}"]["${constructorKey}"] = ${value};\n`;
      testCount++;
    }
    content += `\n`;
  }
  return content;
};

const printRemoveTypeReference = () => {
  let content = printIntro();

  for (const testKey of defaultsKeys) {
    content += `// Remove Type Reference - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const value = getValue(
        testKey as keyof Defaults,
        constructorKey as TypeKeys,
        true,
      );

      content += `const TypeReference${testKey}${constructorKey}: TypeReferenceDefaults["${testKey}"]["${constructorKey}"] = ${value}\n`;

      content += `const RemoveTypeReferenceFrom${testKey}${constructorKey}: GeneralDefaults["${testKey}"]["${constructorKey}"] = ${value};\n`;
      testCount++;
    }
    content += `\n`;
  }
  return content;
};
const printTests = () => {
  const filenames: string[] = [
    `${context}/addTypeReference.ts`,
    `${context}/removeTypeReference.ts`,
  ];

  content.push(printAddTypeReference());
  content.push(printRemoveTypeReference());

  for (let i = 0; i < filenames.length; i++) {
    fs.writeFile(filenames[i], content[i], (err) => {
      if (err) console.log(err);
    });
  }
  return { testCount };
};

console.log(printTests());
