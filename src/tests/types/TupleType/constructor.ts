import {
  defaultsKeys,
  defaults,
  Defaults,
  TypeKeys,
  typeKeys,
} from "../defaults";
import { defaults as tupleDefaults } from "./defaults";
import fs from "fs";

let testCount = 0;
const context = "src/tests/types/TupleType/raw";
const content: string[] = [];

const formatValue = (value: unknown) => {
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "object") return JSON.stringify(value);

  return value;
};

const getValue = (
  testKey: keyof Defaults,
  constructorKey: TypeKeys,
  tuple?: boolean,
) => {
  const defaultValues = tuple ? tupleDefaults : defaults;
  let value = formatValue(defaultValues[testKey][constructorKey]);
  if (testKey === "TypeReferenceBuiltin") {
    value = `promisify(${formatValue(defaultValues["ConstructorType"][constructorKey])})`;
  }
  return value;
};

const printIntro = () => {
  let content = `import { Defaults as GeneralDefaults} from "../../defaults";\n`;
  content += `import { Defaults as TupleDefaults, EmptyTuple} from "../defaults";\n`;
  content += `\n/*\n * TupleType\n */\n\n`;
  content += `const promisify = <T>(value: T): Promise<T> => Promise.resolve(value);\n\n`;

  return content;
};

//1. Adding a tuple type
//2. Removing a tuple type
//3. Adding an item to the tuple - start from empty tuple
//4. Removing an item from the tuple - end with an empty tuple

const printAddTupleType = () => {
  let content = printIntro();

  for (const testKey of defaultsKeys) {
    content += `// Add Tuple - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const value = getValue(
        testKey as keyof Defaults,
        constructorKey as TypeKeys,
      );

      content += `const Type${testKey}${constructorKey}: GeneralDefaults["${testKey}"]["${constructorKey}"] = ${value}\n`;

      content += `const AddTupleTo${testKey}${constructorKey}: TupleDefaults["${testKey}"]["${constructorKey}"] = ${value};\n`;
      testCount++;
    }
    content += `\n`;
  }
  return content;
};

const printRemoveTupleType = () => {
  let content = printIntro();

  for (const testKey of defaultsKeys) {
    content += `// Add Tuple - ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const value = getValue(
        testKey as keyof Defaults,
        constructorKey as TypeKeys,
        true,
      );

      content += `const TupleType${testKey}${constructorKey}: TupleDefaults["${testKey}"]["${constructorKey}"] = ${value}\n`;

      content += `const RemoveTupleFrom${testKey}${constructorKey}: GeneralDefaults["${testKey}"]["${constructorKey}"] = ${value};\n`;
      testCount++;
    }
    content += `\n`;
  }
  return content;
};

const printAddTupleItem = () => {
  let content = printIntro();

  content += `// Add Tuple Item\n`;
  content += "// Initial State\n";
  content += `const TypeEmptyTuple: EmptyTuple = []\n`;

  for (const testKey of defaultsKeys) {
    content += `// ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      content += `const AddTupleItem${testKey}${constructorKey}: TupleDefaults["${testKey}"]["${constructorKey}"] = [];\n`;
      testCount++;
    }
    content += `\n`;
  }
  return content;
};

const printRemoveTupleItem = () => {
  let content = printIntro();

  content += `// Remove Tuple Item\n`;

  for (const testKey of defaultsKeys) {
    content += `// ${testKey}\n`;
    for (const constructorKey of typeKeys) {
      const value = getValue(testKey, constructorKey, true);
      content += `const TupleItem${testKey}${constructorKey}: TupleDefaults["${testKey}"]["${constructorKey}"] = ${value};\n`;
      content += `const RemoveTupleItemFrom${testKey}${constructorKey}: EmptyTuple = ${value};\n`;
      testCount++;
    }
    content += `\n`;
  }
  return content;
};

const printTests = () => {
  const filenames: string[] = [
    `${context}/addTupleType.ts`,
    `${context}/removeTupleType.ts`,
    `${context}/addTupleItem.ts`,
    `${context}/removeTupleItem.ts`,
  ];

  content.push(printAddTupleType());
  content.push(printRemoveTupleType());
  content.push(printAddTupleItem());
  content.push(printRemoveTupleItem());

  for (let i = 0; i < filenames.length; i++) {
    fs.writeFile(filenames[i], content[i], (err) => {
      if (err) console.log(err);
    });
  }
  return { testCount };
};

console.log(printTests());
