import TestClass from "./changeState_exportDefault_public_To_abstract.v2";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
