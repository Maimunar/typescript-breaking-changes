import TestClass from "./changeState_exportDefault_public_To_privateStatic.v1";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
