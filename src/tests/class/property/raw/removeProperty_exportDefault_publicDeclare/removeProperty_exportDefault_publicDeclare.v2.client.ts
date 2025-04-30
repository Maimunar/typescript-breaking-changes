import TestClass from "./removeProperty_exportDefault_publicDeclare.v2";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
