import TestClass from "./changeState_exportDefault_publicDeclare_To_protectedStaticDeclare.v1";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
