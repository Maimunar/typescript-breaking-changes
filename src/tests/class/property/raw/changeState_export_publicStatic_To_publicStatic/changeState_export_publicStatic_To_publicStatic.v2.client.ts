import { TestClass } from "./changeState_export_publicStatic_To_publicStatic.v2";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
