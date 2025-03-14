const featureModelElements = {
  name: "Typescript Features",
  children: [
    { name: "QualifiedName", children: [{ name: "left" }, { name: "right" }] },
    {
      name: "TypeParameter",
      children: [
        { name: "modifiers" },
        { name: "name" },
        { name: "constraint" },
        { name: "default" },
        { name: "expression" },
      ],
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
      name: "FunctionDeclaration",
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
      name: "ArrowFunction",
      children: [
        { name: "typeParameters" },
        { name: "parameters" },
        { name: "type" },
        { name: "equalsGreaterThanToken" },
        { name: "body" },
      ],
    },
    {
      name: "ClassStaticBlockDeclaration",
      children: [{ name: "modifiers" }, { name: "body" }],
    },
    {
      name: "TypeReference",
      children: [{ name: "typeName" }, { name: "typeArguments" }],
    },
    { name: "TypeLiteral", children: [{ name: "members" }] },
    { name: "ArrayType", children: [{ name: "elementType" }] },
    { name: "TupleType", children: [{ name: "elements" }] },
    { name: "UnionType" },
    { name: "IntersectionType" },
    {
      name: "ConditionalType",
      children: [
        { name: "checkType" },
        { name: "extendsType" },
        { name: "trueType" },
        { name: "falseType" },
      ],
    },
    { name: "InferType", children: [{ name: "typeParameter" }] },
    {
      name: "ImportType",
      children: [
        { name: "argument" },
        { name: "attributes" },
        { name: "qualifier" },
        { name: "typeArguments" },
      ],
    },
    {
      name: "ImportTypeAssertionContainer",
      children: [{ name: "assertClause" }],
    },
    { name: "ParenthesizedType" },
    { name: "TypeOperator" },
    {
      name: "IndexedAccessType",
      children: [{ name: "objectType" }, { name: "indexType" }],
    },
    {
      name: "MappedType",
      children: [
        { name: "readonlyToken" },
        { name: "typeParameter" },
        { name: "nameType" },
        { name: "questionToken" },
        { name: "type" },
        { name: "members" },
      ],
    },
    { name: "LiteralType", children: [{ name: "literal" }] },
    {
      name: "SourceFile",
      children: [{ name: "statements" }, { name: "endOfFileToken" }],
    },
    {
      name: "VariableStatement",
      children: [{ name: "modifiers" }, { name: "declarationList" }],
    },
    { name: "VariableDeclarationList", children: [{ name: "declarations" }] },
    { name: "ExpressionStatement", children: [{ name: "expression" }] },
    { name: "Decorator", children: [{ name: "expression" }] },
    { name: "ClassDeclaration" },
    {
      name: "InterfaceDeclaration",
      children: [
        { name: "modifiers" },
        { name: "name" },
        { name: "typeParameters" },
        { name: "heritageClauses" },
        { name: "members" },
      ],
    },
    {
      name: "TypeAliasDeclaration",
      children: [
        { name: "modifiers" },
        { name: "name" },
        { name: "typeParameters" },
        { name: "type" },
      ],
    },
    {
      name: "EnumDeclaration",
      children: [{ name: "modifiers" }, { name: "name" }, { name: "members" }],
    },
    {
      name: "EnumMember",
      children: [{ name: "name" }, { name: "initializer" }],
    },
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
      name: "ImportDeclaration",
      children: [
        { name: "modifiers" },
        { name: "importClause" },
        { name: "moduleSpecifier" },
        { name: "attributes" },
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
    {
      name: "ExportDeclaration",
      children: [
        { name: "modifiers" },
        { name: "exportClause" },
        { name: "moduleSpecifier" },
        { name: "attributes" },
      ],
    },
    {
      name: "TemplateLiteralType",
      children: [{ name: "head" }, { name: "templateSpans" }],
    },
  ],
};
