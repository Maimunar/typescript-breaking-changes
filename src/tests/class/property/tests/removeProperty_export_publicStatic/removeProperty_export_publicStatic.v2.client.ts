import { TestClass } from "./removeProperty_export_publicStatic.v2";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
