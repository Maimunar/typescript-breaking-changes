import { TestClass } from "./changeState_export_publicStatic_To_publicReadonly.v2";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
