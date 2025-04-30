import { TestClass } from "./removeProperty_exportDeclare_publicStatic.v1";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
