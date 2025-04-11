import { defaultsKeys, typeKeys, defaults, Defaults } from "../defaults";
import fs from "fs";

let testCount = 0;
const context = "src/tests/types/IntersectionType/raw";
const content: string[] = [];

const formatValue = (value: unknown) => {
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "object") return JSON.stringify(value);

  return value;
};

const printIntro = () => {
  let content = `import { Defaults } from "../../defaults";\n`;
  content += `\n/*\n * IntersectionType\n */\n\n`;

  return content;
};

const printAddIntersection = (testKey: keyof Defaults) => {
  let content = printIntro();

  content += `// Add Intersection - ${testKey}\n`;
  for (const constructorKey of typeKeys) {
    const value = formatValue(defaults[testKey][constructorKey]);
    content += `// Initial Value\n`;
    content += `const Type${testKey}${constructorKey}: Defaults["${testKey}"]["${constructorKey}"] = ${value}\n`;

    content += `\n// Changes\n`;
    for (const intersectionTestKey of defaultsKeys) {
      for (const intersectionConstructorKey of typeKeys) {
        content += `const AddIntersection${intersectionTestKey}${intersectionConstructorKey}To${testKey}${constructorKey}: Defaults["${testKey}"]["${constructorKey}"] & Defaults["${intersectionTestKey}"]["${intersectionConstructorKey}"] = ${value};\n`;
        testCount++;
      }
      content += `\n`;
    }
  }
  return content;
};

const printRemoveIntersection = (testKey: keyof Defaults) => {
  let content = printIntro();
  content += `// Remove Intersection - ${testKey}\n`;
  for (const constructorKey of typeKeys) {
    const value = formatValue(defaults[testKey][constructorKey]);

    for (const intersectionTestKey of defaultsKeys) {
      for (const intersectionConstructorKey of typeKeys) {
        content += `const IntersectionType${testKey}${constructorKey}With${intersectionTestKey}${intersectionConstructorKey}: Defaults["${testKey}"]["${constructorKey}"] & Defaults["${intersectionTestKey}"]["${intersectionConstructorKey}"] = ${value};\n`;
        content += `const RemoveIntersectionType${intersectionTestKey}${intersectionConstructorKey}From${testKey}${constructorKey}: Defaults["${testKey}"]["${constructorKey}"]= ${value}\n`;
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
    filenames.push(`${context}/addIntersection${testKey}.ts`);
    content.push(printAddIntersection(testKey));
    filenames.push(`${context}/removeIntersection${testKey}.ts`);
    content.push(printRemoveIntersection(testKey));
  }
  //content.push(printRemoveIntersection());

  for (let i = 0; i < filenames.length; i++) {
    fs.writeFile(filenames[i], content[i], (err) => {
      if (err) console.log(err);
    });
  }
  return { testCount };
};

console.log(printTests());
