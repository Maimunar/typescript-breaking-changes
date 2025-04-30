import { TestClass } from "./changeState_export_publicStatic_To_privateStatic.v1";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
