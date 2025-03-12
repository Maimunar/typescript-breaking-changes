const remaining = {
  name: "Typescript Features",
  children: [
    {
      name: "QualifiedName",
      children: [{ name: "left" }, { name: "right" }],
    },
    {
      name: "Parameter",
      children: [
        { name: "modifiers" },
        { name: "dotDotDotToken" },
        { name: "name" },
        { name: "questionToken" },
        { name: "type" },
        { name: "initializer" },
      ],
    },
    {
      name: "PropertyDeclaration",
      children: [
        { name: "name" },
        { name: "questionToken" },
        { name: "exclamationToken" },
        { name: "type" },
        { name: "initializer" },
      ],
    },
    {
      name: "VariableDeclaration",
      children: [
        { name: "  exclamationToken" },
        { name: "type" },
        { name: "initializer" },
      ],
    },
    {
      name: "MethodDeclaration",
      children: [
        { name: "asteriskToken" },
        { name: "name" },
        { name: "questionToken" },
        { name: "exclamationToken" },
        { name: "typeParameters" },
        { name: "parameters" },
        { name: "type" },
        { name: "body" },
      ],
    },
    {
      name: "Constructor",
      children: [
        { name: "modifiers" },
        { name: "name" },
        { name: "typeParameters" },
        { name: "parameters" },
        { name: "type" },
        { name: "body" },
      ],
    },
    {
      name: "GetAccessor",
      children: [
        { name: "modifiers" },
        { name: "name" },
        { name: "typeParameters" },
        { name: "parameters" },
        { name: "type" },
        { name: "body" },
      ],
    },
    {
      name: "SetAccessor",
      children: [
        { name: "name" },
        { name: "typeParameters" },
        { name: "parameters" },
        { name: "type" },
        { name: "body" },
      ],
    },
    {
      name: "FunctionExpression",
      children: [
        { name: "asteriskToken" },
        { name: "name" },
        { name: "typeParameters" },
        { name: "parameters" },
        { name: "type" },
        { name: "body" },
      ],
    },
    {
      name: "ClassStaticBlockDeclaration",
      children: [{ name: "modifiers" }, { name: "body" }],
    },
    { name: "ClassDeclaration" },
    {
      name: "ModuleDeclaration",
      children: [{ name: "modifiers" }, { name: "name" }, { name: "body" }],
    },
    {
      name: "ImportEqualsDeclaration",
      children: [
        { name: "modifiers" },
        { name: "name" },
        { name: "moduleReference" },
      ],
    },
    {
      name: "ImportClause",
      children: [{ name: "name" }, { name: "namedBindings" }],
    },
    { name: "ImportAttributes", children: [{ name: "elements" }] },
    {
      name: "ImportAttribute",
      children: [{ name: "name" }, { name: "value" }],
    },
    {
      name: "NamespaceExportDeclaration",
      children: [{ name: "modifiers" }, { name: "name" }],
    },
  ],
};
