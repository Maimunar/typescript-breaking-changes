import {
  defaultsKeys,
  typeKeys,
  defaults,
  Defaults,
  TypeKeys,
} from "../defaults";
import fs from "fs";

let testCount = 0;
const context = "src/tests/types/UnionType/raw";
const content: string[] = [];

const formatValue = (value: unknown) => {
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "object") return JSON.stringify(value);

  return value;
};

const getValue = (testKey: keyof Defaults, constructorKey: TypeKeys) => {
  let value = formatValue(defaults[testKey][constructorKey]);
  if (testKey === "TypeReferenceBuiltin") {
    value = `promisify(${formatValue(defaults["ConstructorType"][constructorKey])})`;
  }
  return value;
};

const printIntro = (testKey: keyof Defaults) => {
  let content = `import { Defaults } from "../../defaults";\n`;
  content += `\n/*\n * UnionType\n */\n\n`;
  if (testKey === "TypeReferenceBuiltin") {
    content += `const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);`;
  }

  return content;
};

const printAddUnion = (testKey: keyof Defaults) => {
  let content = printIntro(testKey);

  content += `// Add Union - ${testKey}\n`;
  for (const constructorKey of typeKeys) {
    const value = getValue(testKey, constructorKey);

    content += `// Initial Value\n`;
    content += `const Type${testKey}${constructorKey}: Defaults["${testKey}"]["${constructorKey}"] = ${value}\n`;

    content += `\n// Changes\n`;
    for (const intersectionTestKey of defaultsKeys) {
      for (const intersectionConstructorKey of typeKeys) {
        content += `const AddUnion${intersectionTestKey}${intersectionConstructorKey}To${testKey}${constructorKey}: Defaults["${testKey}"]["${constructorKey}"] | Defaults["${intersectionTestKey}"]["${intersectionConstructorKey}"] = ${value};\n`;
        testCount++;
      }
      content += `\n`;
    }
  }
  return content;
};

const printRemoveUnion = (testKey: keyof Defaults) => {
  let content = printIntro(testKey);

  content += `// Remove Union - ${testKey}\n`;
  for (const constructorKey of typeKeys) {
    const value = getValue(testKey, constructorKey);

    for (const intersectionTestKey of defaultsKeys) {
      for (const intersectionConstructorKey of typeKeys) {
        const secondValue = getValue(
          intersectionTestKey,
          intersectionConstructorKey,
        );

        content += `const UnionType${testKey}${constructorKey}With${intersectionTestKey}${intersectionConstructorKey}: Defaults["${testKey}"]["${constructorKey}"] | Defaults["${intersectionTestKey}"]["${intersectionConstructorKey}"] = ${value};\n`;
        content += `const RemoveUnionType${intersectionTestKey}${intersectionConstructorKey}From${testKey}${constructorKey}: Defaults["${testKey}"]["${constructorKey}"]= ${value}\n`;
        testCount++;
        content += `const SecondUnionType${testKey}${constructorKey}With${intersectionTestKey}${intersectionConstructorKey}: Defaults["${testKey}"]["${constructorKey}"] | Defaults["${intersectionTestKey}"]["${intersectionConstructorKey}"] = ${secondValue};\n`;
        content += `const SecondRemoveUnionType${intersectionTestKey}${intersectionConstructorKey}From${testKey}${constructorKey}: Defaults["${testKey}"]["${constructorKey}"]= ${secondValue}\n`;
        testCount++;
      }
      content += `\n`;
    }
  }
  return content;
};

const printTests = () => {
  const filenames: string[] = [];

  for (const testKey of defaultsKeys) {
    filenames.push(`${context}/addUnion${testKey}.ts`);
    content.push(printAddUnion(testKey));
    filenames.push(`${context}/removeUnion${testKey}.ts`);
    content.push(printRemoveUnion(testKey));
  }

  for (let i = 0; i < filenames.length; i++) {
    fs.writeFile(filenames[i], content[i], (err) => {
      if (err) console.log(err);
    });
  }
  return { testCount };
};

console.log(printTests());
