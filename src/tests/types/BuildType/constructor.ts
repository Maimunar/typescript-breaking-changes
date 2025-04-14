import {
  defaultsKeys,
  typeKeys,
  defaults,
  TypeKeys,
  Defaults,
} from "../defaults";
import fs from "fs";

let testCount = 0;
const context = "src/tests/types/BuildType/raw";

const content: string[] = [];
const filenames: string[] = [];

const formatValue = (value: unknown) => {
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "object") return JSON.stringify(value);

  return value as string;
};

const getValue = (testKey: keyof Defaults, constructorKey: TypeKeys) => {
  if (testKey === "TypeReferenceBuiltin") {
    return `promisify(${formatValue(defaults["ConstructorType"][constructorKey])})`;
  }

  return formatValue(defaults[testKey][constructorKey]);
};

const printIntro = (heading: string = "BuildType") => {
  let content = `import { Defaults } from "../../defaults";\n`;
  content += `\n/*\n * ${heading} \n */\n\n`;
  content += `const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);\n\n`;

  return content;
};

// 1. Changes between build types
// - Files per buildType
//   - For every literal type of the build type
//      - Print out initial value of that literal
//      - Print out all changes to other buildtypes of all literals

const printChangeBuildType = (buildType: keyof typeof defaults) => {
  let content = printIntro(`Change Build Type from ${buildType} `);

  for (const constructorKey of typeKeys) {
    content += `// Change Build Type From ${buildType} - ${constructorKey}\n\n`;

    const value = getValue(buildType, constructorKey);
    // Initial Value
    content += `// Initial Value\n`;
    content += `const ${buildType}With${constructorKey}: Defaults["${buildType}"]["${constructorKey}"] = ${value}\n`;
    // List changes
    content += `// Changes\n`;

    for (const testKey of defaultsKeys) {
      if (testKey === buildType) continue;

      content += `// ${testKey} With ${constructorKey}\n`;

      for (const typeKey of typeKeys) {
        content += `const ${testKey}With${constructorKey}To${testKey}${typeKey}: Defaults["${testKey}"]["${typeKey}"] = ${value};\n`;
        testCount++;
      }
    }

    content += "\n";
  }

  return content;
};

const printTests = () => {
  // No type literal to all other states
  for (const buildKey of defaultsKeys) {
    filenames.push(`${context}/ChangeBuildTypeFrom${buildKey}.ts`);
    content.push(printChangeBuildType(buildKey));
  }

  for (let i = 0; i < filenames.length; i++) {
    fs.writeFile(filenames[i], content[i], (err) => {
      if (err) console.log(err);
    });
  }
  return { testCount };
};

console.log(printTests());
