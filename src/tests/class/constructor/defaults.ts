/*
 *  Constructor
 */

export const genConstructor = (params?: string[], declared?: boolean) => {
  let constructorString = `constructor(`;

  params?.forEach((param, index) => {
    constructorString += `${param}`;

    if (index < params.length - 1) constructorString += ", ";
  });
  constructorString += `)`;
  if (declared) return constructorString + ";\n";

  constructorString += `{\n    // constructor body\n  }`;

  return constructorString;
};
