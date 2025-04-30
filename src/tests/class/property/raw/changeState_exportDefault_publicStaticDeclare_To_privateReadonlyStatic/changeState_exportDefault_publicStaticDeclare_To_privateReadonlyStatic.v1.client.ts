import TestClass from "./changeState_exportDefault_publicStaticDeclare_To_privateReadonlyStatic.v1";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
