import TestClass from "./removeProperty_exportDefault_publicStatic.v1";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
