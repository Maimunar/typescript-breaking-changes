import TestClass from "./changeState_exportDefault_publicDeclare_To_none.v2";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
