export const exportState = {
  class: "class a {\n public x = 1;\n}\n",
  function: "function a () { }",
  typeAlias: "type a = number",
  variable: "let a = 1",
  interface: "interface a {\n child: any\n }\n",
  enum: `enum a {\n member,\n }\n`,
};

export const clientUsage = {
  class: "const b = new a();\nconst bX = b.x;\n",
  function: "const b = a();\n",
  typeAlias: "const b: a = 1;\n",
  variable: "const b = a",
  interface: "const b: a = { child: 1 };\n",
  enum: `const b = a.member;\n`,
};
