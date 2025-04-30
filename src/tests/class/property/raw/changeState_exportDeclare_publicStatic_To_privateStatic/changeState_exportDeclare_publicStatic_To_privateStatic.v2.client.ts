import { TestClass } from "./changeState_exportDeclare_publicStatic_To_privateStatic.v2";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
